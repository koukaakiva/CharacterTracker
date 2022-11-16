package com.revature.CharacterTracker.Models;

import com.revature.CharacterTracker.Models.Enums.Genre;
import javax.persistence.*;
import java.util.List;

@Entity(name = "novels")
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

    protected Novel() {
    }

    public Novel(String title, String author, Genre genre) {
        this.title = title;
        this.author = author;
        this.genre = genre;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getAuthor() {
        return author;
    }

    public Genre getGenre() {
        return genre;
    }

    public List<Character> getCharacters() {
        return characters;
    }
}
