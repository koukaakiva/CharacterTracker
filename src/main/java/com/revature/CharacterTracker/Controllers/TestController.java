package com.revature.CharacterTracker.Controllers;

import com.revature.CharacterTracker.Services.CharacterService;
import com.revature.CharacterTracker.Services.NovelService;
import com.revature.CharacterTracker.Utilities.customExceptions.NetworkException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping(path = "/test")
public class TestController {
    @CrossOrigin
    @GetMapping(value = "/getAll")
    public void getAll(HttpServletResponse resp) {
        try{
            System.out.println(NovelService.getAll());
            System.out.println(CharacterService.getAll());
        }catch (NetworkException e){
            resp.setStatus(e.getStatusCode());
            System.out.println(e.getMessage());
        }
    }
}
