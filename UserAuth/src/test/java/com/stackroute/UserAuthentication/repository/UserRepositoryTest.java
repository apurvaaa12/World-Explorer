package com.stackroute.UserAuthentication.repository;


import com.stackroute.UserAuthentication.model.User;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.AutoConfigureDataJpa;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.NoSuchElementException;

import static org.junit.Assert.assertEquals;
import static org.junit.jupiter.api.Assertions.*;

@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class UserRepositoryTest {
    @Autowired
    private UserRepository userRepository;
    private User user;
    @Before
    public void setUp() throws Exception
    {
        user=new User();
        user.setEmail("root@gmail.com");;
        user.setFirstName("root");
        user.setLastName("rooter");
        user.setPassword("root123");
        user.setConfirmPassword("root123");
        user.setCountry("India");
    }
    @After
    public void tearDown() throws Exception{
        userRepository.deleteAll();
    }
    @Test
    public void createUserTest()
    {
        userRepository.save(user);
        User fetchedUser=userRepository.findById(user.getEmail()).get();
        assertEquals("root@gmail.com",fetchedUser.getEmail());
    }
    @Test(expected= NoSuchElementException.class)
    public void deleteUserTest() {
        userRepository.save(user);
        User fetchedUser=userRepository.findById(user.getEmail()).get();
        assertEquals("root@gmail.com",fetchedUser.getEmail());
        userRepository.delete(fetchedUser);
        fetchedUser=userRepository.findById(user.getEmail()).get();
    }
    @Test
    public void updateUserTest()
    {
        userRepository.save(user);
        User fetchedUser=userRepository.findById(user.getEmail()).get();
        assertEquals("root@gmail.com",fetchedUser.getEmail());
        fetchedUser.setCountry("England");
        userRepository.save(fetchedUser);
        fetchedUser=userRepository.findById(user.getEmail()).get();
        assertEquals("England",fetchedUser.getCountry());

    }
    @Test
    public void getUserByIdTest()
    {
        userRepository.save(user);
        User fetchedUser=userRepository.findById(user.getEmail()).get();
        assertEquals("root@gmail.com",fetchedUser.getEmail());
    }
}