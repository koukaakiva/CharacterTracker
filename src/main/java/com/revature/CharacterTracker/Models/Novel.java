package com.revature.CharacterTracker.Models;

import com.fasterxml.jackson.annotation.JsonManagedReference;
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

    @Column
    private String description;

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "fromNovel")
    @JsonManagedReference
    private List<Character> characters;

    protected Novel() {
    }

    public Novel(String title, String author, Genre genre, String description) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.description = description;
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

    public String getDescription() {
        return description;
    }

    public List<Character> getCharacters() {
        return characters;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append('{');
        for(Character c : characters){
            sb.append(c.getName()).append(", ");
        }
        sb.append('}');
        return "Novel{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", author='" + author + '\'' +
                ", genre=" + genre +
                ", description='" + description + '\'' +
                ", characters=" + sb +
                '}';
    }
}
