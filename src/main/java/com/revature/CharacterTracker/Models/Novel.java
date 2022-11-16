package com.revature.CharacterTracker.Models;

import com.revature.CharacterTracker.Models.Enums.Genre;

import javax.persistence.*;
import java.util.List;

@Entity
public class Novel {
    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String author;

    @Column
    private Genre genre;

    @OneToMany
    @Transient
    private List<Character> characters;

    public Novel(String title, String author, Genre genre) {
        this.title = title;
        this.author = author;
        this.genre = genre;
    }
}
