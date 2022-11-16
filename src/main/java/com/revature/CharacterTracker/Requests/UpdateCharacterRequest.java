package com.revature.CharacterTracker.Requests;

import com.revature.CharacterTracker.Models.Novel;

public class UpdateCharacterRequest {
    private Long id;
    private String name;
    private String description;
    private String quote;
    private boolean isBiggerThanABreakBox;
    private Novel fromNovel;

    public UpdateCharacterRequest() {
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public String getQuote() {
        return quote;
    }

    public boolean isBiggerThanABreakBox() {
        return isBiggerThanABreakBox;
    }

    public Novel getFromNovel() {
        return fromNovel;
    }

    @Override
    public String toString() {
        return "UpdateCharacterRequest{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", quote='" + quote + '\'' +
                ", isBiggerThanABreakBox=" + isBiggerThanABreakBox +
                ", fromNovel=" + fromNovel +
                '}';
    }
}
