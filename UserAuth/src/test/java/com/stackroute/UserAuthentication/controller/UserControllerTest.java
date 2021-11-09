package com.stackroute.UserAuthentication.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.stackroute.UserAuthentication.exception.UserNotAddedException;
import com.stackroute.UserAuthentication.exception.UserNotFoundException;
import com.stackroute.UserAuthentication.model.User;
import com.stackroute.UserAuthentication.service.UserService;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.when;

@RunWith(SpringRunner.class)
@WebMvcTest
public class UserControllerTest {
    @Autowired
    private MockMvc mockMvc;
    private User user;
    @MockBean
    private UserService userService;
    @InjectMocks
    private UserController userController;
    private List<User> allusers=null;
    @Before
    public void setup() throws Exception{
        MockitoAnnotations.initMocks(this);
        mockMvc= MockMvcBuilders.standaloneSetup(userController).build();
        user=new User();
        user.setEmail("exp@gmail.com");
        user.setFirstName("root");
        user.setLastName("rooter");
        user.setPassword("exp123");
        user.setConfirmPassword("exp123");
        user.setCountry("India");
        allusers=new ArrayList<>();
        allusers.add(user);

    }
    @Test
    public void addUserSuccess() throws Exception{
        when(userService.addUser(user)).thenReturn(user);
        mockMvc.perform(MockMvcRequestBuilders.post("/api/v1/World/addUser")
                .contentType(MediaType.APPLICATION_JSON).content(asJsonString(user)))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andDo(MockMvcResultHandlers.print());
    }
    @Test
    public void addUserFailure() throws Exception{

        when(userService.addUser(user)).thenThrow(UserNotAddedException.class);
        mockMvc.perform(MockMvcRequestBuilders.post("/api/v1/World/addUser")
                .contentType(MediaType.APPLICATION_JSON).content(asJsonString(user)))
                .andExpect(MockMvcResultMatchers.status().isConflict())
                .andDo(MockMvcResultHandlers.print());
    }
    @Test
    public void updateUserSuccess() throws Exception {

        when(userService.updateUser(eq(user.getEmail()), any())).thenReturn(user);
        mockMvc.perform(MockMvcRequestBuilders.put("/api/v1/World/updateUser/exp@gmail.com")
                .contentType(MediaType.APPLICATION_JSON).content(asJsonString(user)))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andDo(MockMvcResultHandlers.print());
    }
    @Test
    public void getUserByIdSuccess() throws Exception {
        when(userService.findUser(user.getEmail(), user.getPassword())).thenReturn(user);
        mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/World/login/exp@gmail.com/exp123")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk());
    }
    @Test
    public void getUserByIdFailure() throws Exception {
        when(userService.findUser(user.getEmail(), user.getPassword())).thenThrow(UserNotFoundException.class);
        mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/World/login/admin@gmail.com/exp123")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isNotFound());
    }


    private String asJsonString(User user) {
        try {
            return new ObjectMapper().writeValueAsString(user);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

    }


}
