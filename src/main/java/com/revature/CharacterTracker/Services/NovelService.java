package com.revature.CharacterTracker.Services;

import com.revature.CharacterTracker.Models.Novel;
import com.revature.CharacterTracker.Repositories.NovelRepository;
import com.revature.CharacterTracker.Requests.NewNovelRequest;
import com.revature.CharacterTracker.Utilities.customExceptions.InvalidRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class NovelService {
    private static NovelRepository novelRepository;

    @Autowired
    public NovelService(NovelRepository novelRepository){
        this.novelRepository = novelRepository;
    }

    public static void register(NewNovelRequest request){
        Novel novel = new Novel(
                request.getTitle(),
                request.getAuthor(),
                request.getGenre(),
                request.getDescription()
        );
        novelRepository.save(novel);
    }

    public static List<Novel> getAll(){
        List<Novel> results = novelRepository.findAll();
        if(results.size() == 0) throw new InvalidRequestException("No novels found.");
        return results;
    }

    public static Novel getByTitle(String title){
        Novel result = novelRepository.findByTitle(title);
        if(result == null) throw new InvalidRequestException("No novel found with title: " + title + ".");
        return result;
    }

    public static Novel getByID(long id) {
        Novel result = novelRepository.findByID(id);
        if(result == null) throw new InvalidRequestException("No novel found with id: " + id + ".");
        return result;
    }
}
