package com.stackroute.UserAuthentication.tokengenerator;

import com.stackroute.UserAuthentication.model.User;

import java.util.Map;

public interface TokenGenerator {
    Map<String,String> generateToken(User user);
}
