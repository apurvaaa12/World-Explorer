package com.stackroute.UserAuthentication.bcrypt;

import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Component;

@Component
public class EncryptionImpl implements Encryption {
    @Override
    public String encoder(String password) {
        BCrypt bCrypt = new BCrypt();
        String hashPassword = bCrypt.hashpw(password, bCrypt.gensalt());
        System.out.println("passHash "+hashPassword);
        return hashPassword;
    }

    @Override
    public boolean match(String password, String hashed) {
        BCrypt bCrypt = new BCrypt();
        return bCrypt.checkpw(password, hashed);
    }
}
