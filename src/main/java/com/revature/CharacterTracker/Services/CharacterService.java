package com.revature.CharacterTracker.Services;

import com.revature.CharacterTracker.Models.Character;
import com.revature.CharacterTracker.Repositories.CharacterRepository;
import com.revature.CharacterTracker.Requests.NewCharacterRequest;
import com.revature.CharacterTracker.Requests.UpdateCharacterRequest;
import com.revature.CharacterTracker.Utilities.customExceptions.InvalidRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CharacterService {
    private static CharacterRepository characterRepository;

    @Autowired
    public CharacterService(CharacterRepository characterRepository){
        this.characterRepository = characterRepository;
    }

    public static void register(NewCharacterRequest request){
        Character character = new Character(
                request.getName(),
                request.getDescription(),
                request.getQuote(),
                request.isBiggerThanABreakBox(),
                NovelService.getByID(request.getFromNovelID())
        );
        characterRepository.save(character);
    }

    public static List<Character> getAll(){
        List<Character> results = characterRepository.findAll();
        if(results.size() == 0) throw new InvalidRequestException("No characters found.");
        return results;
    }

    public static Character getByName(String name){
        Character result = characterRepository.findByName(name);
        if(result == null) throw new InvalidRequestException("No character found with name: " + name + ".");
        return result;
    }

    public static void update(UpdateCharacterRequest request){
        Character character = characterRepository.findByID(request.getId());
        character.setName(request.getName());
        character.setDescription(request.getDescription());
        character.setQuote(request.getQuote());
        character.setBiggerThanABreakBox(request.isBiggerThanABreakBox());
        character.setFromNovel(request.getFromNovel());
        characterRepository.save(character);
    }

    public static void delete(Long id){
        Character character = characterRepository.findByID(id);
        if(character == null) throw new InvalidRequestException("No character found with id: " + id + ".");
        characterRepository.delete(character);
    }
}
