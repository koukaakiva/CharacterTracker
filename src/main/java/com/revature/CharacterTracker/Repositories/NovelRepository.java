package com.revature.CharacterTracker.Repositories;

import com.revature.CharacterTracker.Models.Novel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NovelRepository extends JpaRepository<Novel, Long> {
    @Query(value = "SELECT * FROM novels", nativeQuery = true)
    List<Novel> findAll();

    @Query(value = "SELECT * FROM novels WHERE title = ?1", nativeQuery = true)
    Novel findByTitle(String title);
}
