package com.stackroute.UserAuthentication.service;

import com.stackroute.UserAuthentication.bcrypt.Encryption;
import com.stackroute.UserAuthentication.exception.UserNotAddedException;
import com.stackroute.UserAuthentication.exception.UserNotFoundException;
import com.stackroute.UserAuthentication.model.User;
import com.stackroute.UserAuthentication.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private Encryption encryption;
    @Autowired
    private UserRepository userRepository;
    @Override
    public User findUser(String email, String password) throws UserNotFoundException {

        User user1=userRepository.findById(email).get();
        boolean checkPassword = encryption.match(password, user1.getPassword());
        if(checkPassword==true)
        {
            return user1;

        }else {
            return null;
        }
    }

    @Override
    public User addUser(User user) throws UserNotAddedException {

        user.setPassword(encryption.encoder(user.getPassword()));
        userRepository.save(user);

        return user;
    }

    @Override
    public User updateUser(String email, User user) {
        User  Update = userRepository.findById(email).get();
        user.setPassword(encryption.encoder(user.getPassword()));
        if(Update!=null)
        {
            userRepository.save(user);
        }
        return user;
    }
}
