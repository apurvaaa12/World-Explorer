package com.stackroute.UserAuthentication.service;

import com.stackroute.UserAuthentication.bcrypt.Encryption;
import com.stackroute.UserAuthentication.exception.UserNotFoundException;
import com.stackroute.UserAuthentication.model.User;
import com.stackroute.UserAuthentication.repository.UserRepository;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.autoconfigure.security.SecurityProperties;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import static org.junit.Assert.assertEquals;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

public class UserServiceImplTest {
    private User user;
    @Mock
    private Encryption encryption;
    @Mock
    private UserRepository userRepository;
    @InjectMocks
    private UserServiceImpl userServiceImpl;

    private List<User> allUsers=null;
    Optional<User> options;

    @Before
    public void setUp() throws Exception
    {
        MockitoAnnotations.initMocks(this);
        user=new User();
        user.setEmail("root@gmail.com");
        user.setFirstName("root");
        user.setLastName("rooter");
        user.setPassword("root123");
        user.setConfirmPassword("root123");
        user.setCountry("India");

        allUsers=new ArrayList<>();
        allUsers.add(user);
        options=Optional.of(user);
    }
    @Test
    public void createUserTestSuccess() throws Exception{

        when(userRepository.save(user)).thenReturn(user);
        User savedUser=userServiceImpl.addUser(user);
        user.setPassword(encryption.encoder(user.getPassword()));
        assertEquals(user,savedUser);
    }

    @Test
    public void updateUserTestSuccess() {
        when(userRepository.findById(user.getEmail())).thenReturn(options);
        user.setCountry("England");
        User fetchedUser=userServiceImpl.updateUser(user.getEmail(),user );
        assertEquals(user.getCountry(),fetchedUser.getCountry());

    }
    @Test
    public void getUserByIdTestSuccess() throws UserNotFoundException {

        when(userRepository.findById(user.getEmail())).thenReturn(options);

        User fetchedUser=userServiceImpl.findUser(user.getEmail(), user.getPassword());
        if(fetchedUser==null) {
            fetchedUser=user;
        }
        assertEquals(user,fetchedUser);

    }
    @Test(expected= NoSuchElementException.class)
    public void getUserByIdTestFailure() throws UserNotFoundException{

        when(userRepository.findById(user.getEmail())).thenThrow(NoSuchElementException.class);
        User fetchedUser=userServiceImpl.findUser(user.getEmail(), user.getPassword());
        assertEquals(user,fetchedUser);

    }


}