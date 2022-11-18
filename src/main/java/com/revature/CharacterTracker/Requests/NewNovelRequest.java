package com.revature.CharacterTracker.Requests;

import com.revature.CharacterTracker.Models.Enums.Genre;

public class NewNovelRequest {
    private String title;
    private String author;
    private Genre genre;

    private String description;

    public NewNovelRequest() {
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

    @Override
    public String toString() {
        return "NewNovelRequest{" +
                "title='" + title + '\'' +
                ", author='" + author + '\'' +
                ", genre=" + genre +
                ", description='" + description + '\'' +
                '}';
    }
}
