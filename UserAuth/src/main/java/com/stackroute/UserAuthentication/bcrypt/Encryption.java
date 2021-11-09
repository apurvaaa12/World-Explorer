package com.stackroute.UserAuthentication.bcrypt;

public interface Encryption {

    public String encoder(String password);

    public boolean match(String password, String hashedPassword);
}
