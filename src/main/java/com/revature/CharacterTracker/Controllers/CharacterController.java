package com.revature.CharacterTracker.Controllers;

import com.revature.CharacterTracker.Models.Character;
import com.revature.CharacterTracker.Requests.NewCharacterRequest;
import com.revature.CharacterTracker.Requests.UpdateCharacterRequest;
import com.revature.CharacterTracker.Services.CharacterService;
import com.revature.CharacterTracker.Utilities.customExceptions.NetworkException;
import org.springframework.data.repository.query.Param;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(path = "/character")
public class CharacterController {

    @CrossOrigin
    @PostMapping(value = "/register", consumes = "application/json")
    public @ResponseBody void register(@RequestBody NewCharacterRequest request, HttpServletResponse resp) {
        try {
            resp.setStatus(201);
            System.out.println(request);
            CharacterService.register(request);
        }catch (NetworkException e){
            resp.setStatus(e.getStatusCode());
            System.out.println(e.getMessage());
        }
    }

    @CrossOrigin
    @GetMapping(value = "/getAll", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Character> getAll(HttpServletResponse resp) {
        try{
            resp.setStatus(200);
            return CharacterService.getAll();
        }catch (NetworkException e){
            resp.setStatus(e.getStatusCode());
            System.out.println(e.getMessage());
            return new ArrayList<>();
        }
    }

    @CrossOrigin
    @GetMapping(value = "/getByName", produces = MediaType.APPLICATION_JSON_VALUE)
    public Character getByName(@Param("name") String name, HttpServletResponse resp) {
        try{
            resp.setStatus(200);
            return CharacterService.getByName(name);
        }catch (NetworkException e){
            resp.setStatus(e.getStatusCode());
            System.out.println(e.getMessage());
            return null;
        }
    }

    @CrossOrigin
    @PutMapping(value = "/update", consumes = "application/json")
    public void update(@RequestBody UpdateCharacterRequest request, HttpServletResponse resp) {
        try{
            resp.setStatus(200);
            CharacterService.update(request);
        }catch (NetworkException e){
            resp.setStatus(e.getStatusCode());
            System.out.println(e.getMessage());
        }
    }

    @CrossOrigin
    @DeleteMapping(value = "/delete")
    public void delete(@Param("id") Long id, HttpServletResponse resp) {
        try{
            resp.setStatus(200);
            CharacterService.delete(id);
        }catch (NetworkException e){
            resp.setStatus(e.getStatusCode());
            System.out.println(e.getMessage());
        }
    }

    //TODO filer option
}
