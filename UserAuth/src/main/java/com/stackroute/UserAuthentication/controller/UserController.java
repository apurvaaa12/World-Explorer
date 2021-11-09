package com.stackroute.UserAuthentication.controller;

import com.stackroute.UserAuthentication.exception.UserNotAddedException;
import com.stackroute.UserAuthentication.exception.UserNotFoundException;
import com.stackroute.UserAuthentication.model.User;
import com.stackroute.UserAuthentication.service.UserService;
import com.stackroute.UserAuthentication.tokengenerator.TokenGenerator;
import com.stackroute.UserAuthentication.tokengenerator.TokenGeneratorImpl;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
 import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import java.util.Map;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/api/v1/World")
public class UserController {

    @Autowired
    private UserService service;
    private HttpSession session;

    @ApiOperation(value="add user",response= ResponseEntity.class)
    @PostMapping("/addUser")
    public ResponseEntity<?> addUser(@RequestBody User user) {

        User addedUser;
        try {
            addedUser = service.addUser(user);
            if(addedUser!=null) {
                return new ResponseEntity<>(user, HttpStatus.OK);
            }
        } catch (UserNotAddedException e) {

            e.printStackTrace();
        }


        return new ResponseEntity<>(HttpStatus.CONFLICT);

    }

    @ApiOperation(value="View login information",response=ResponseEntity.class)
    @GetMapping("/login/{email}/{password}")
    public ResponseEntity<?> login(@PathVariable String email, HttpSession session,@PathVariable String password) throws UserNotFoundException
    {
        User userFound=service.findUser(email,password);
        if(userFound!=null)
        {
            session.setAttribute("login_details", userFound.getEmail());
            this.session=session;
            TokenGenerator token=new TokenGeneratorImpl();
            Map<String,String> map=token.generateToken(userFound);
            return new ResponseEntity<>(map,HttpStatus.OK);
        }
        return new ResponseEntity<>("User not found",HttpStatus.NOT_FOUND);
    }

    @ApiOperation(value="update user details",response=ResponseEntity.class)
    @PutMapping("/updateUser/{email}")
    public ResponseEntity<?> updateMusic(@PathVariable String email, @RequestBody User user)
    {
        User updateUser=service.updateUser(email, user);

        return new ResponseEntity<>(updateUser,HttpStatus.OK);


    }

    @ApiOperation(value="logout user",response=ResponseEntity.class)
    @GetMapping("/logout")
    public void logOut()
    {
        session.invalidate();

    }

}
