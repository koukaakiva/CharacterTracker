package com.revature.CharacterTracker.Repositories;

import com.revature.CharacterTracker.Models.Character;
import com.revature.CharacterTracker.Models.Novel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface CharacterRepository extends JpaRepository<Character, Long> {

    @Query(value = "SELECT * FROM characters", nativeQuery = true)
    List<Character> findAll();

    @Query(value = "SELECT * FROM characters WHERE id = ?1", nativeQuery = true)
    Character findByID(Long id);

    @Query(value = "SELECT * FROM characters WHERE name = ?1", nativeQuery = true)
    Character findByName(String name);

    @Query(value = "SELECT * FROM characters WHERE from_novel = ?1", nativeQuery = true)
    List<Character> findByNovel(Long novelID);
}
