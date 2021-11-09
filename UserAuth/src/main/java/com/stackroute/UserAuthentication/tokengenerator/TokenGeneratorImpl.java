package com.stackroute.UserAuthentication.tokengenerator;

import com.stackroute.UserAuthentication.model.User;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

public class TokenGeneratorImpl implements TokenGenerator {
    @Override
    public Map<String, String> generateToken(User user) {
        String jwtToken= Jwts.builder().setId(user.getEmail()).setSubject(user.getPassword()).setIssuedAt(new Date()).signWith(SignatureAlgorithm.HS256, "secretkey").compact();
        System.out.println(jwtToken);
        Map<String,String> tokenMap=new HashMap<>();
        tokenMap.put("token", jwtToken);
        tokenMap.put("message", "User successfully logged in");
        tokenMap.put("password", user.getPassword());
        return tokenMap;

    }
}
