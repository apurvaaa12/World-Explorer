package com.stackroute.UserAuthentication.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpSession;
import java.util.Map;

@Controller
public class RootController {
    @RequestMapping("/")
    public String swaggerUI()
    {
        return "redirect:/swagger-ui.html";
    }


}
