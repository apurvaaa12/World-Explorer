package com.stackroute.UserAuthentication.service;

import com.stackroute.UserAuthentication.exception.UserNotAddedException;
import com.stackroute.UserAuthentication.exception.UserNotFoundException;
import com.stackroute.UserAuthentication.model.User;

public interface UserService {
    User findUser(String email, String password) throws UserNotFoundException;
    User addUser(User user) throws UserNotAddedException;
    User updateUser(String email, User user);



}
