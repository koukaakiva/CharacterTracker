package com.revature.CharacterTracker.Controllers;

import com.revature.CharacterTracker.Models.Novel;
import com.revature.CharacterTracker.Requests.NewNovelRequest;
import com.revature.CharacterTracker.Services.NovelService;
import com.revature.CharacterTracker.Utilities.customExceptions.NetworkException;
import org.springframework.data.repository.query.Param;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(path = "/novel")
public class NovelController {

    @CrossOrigin
    @PostMapping(value = "/register", consumes = "application/json")
    public @ResponseBody void register(@RequestBody NewNovelRequest request, HttpServletResponse resp) {
        try {
            resp.setStatus(201);
            NovelService.register(request);
            System.out.println(request); //TODO remove this
        }catch (NetworkException e){
            resp.setStatus(e.getStatusCode());
            System.out.println(e.getMessage());
        }
    }

    @CrossOrigin
    @GetMapping(value = "/getAll", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Novel> getAll(HttpServletResponse resp) {
        try{
            resp.setStatus(200);
            return NovelService.getAll();
        }catch (NetworkException e){
            resp.setStatus(e.getStatusCode());
            System.out.println(e.getMessage());
            return new ArrayList<>();
        }
    }

    @CrossOrigin
    @GetMapping(value = "/getByTitle", produces = MediaType.APPLICATION_JSON_VALUE)
    public Novel getByTitle(@Param("novel") String title, HttpServletResponse resp) {
        try{
            resp.setStatus(200);
            return NovelService.getByTitle(title);
        }catch (NetworkException e){
            resp.setStatus(e.getStatusCode());
            System.out.println(e.getMessage());
            return null;
        }
    }
}
