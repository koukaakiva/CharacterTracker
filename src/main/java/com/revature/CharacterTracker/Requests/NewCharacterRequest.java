package com.revature.CharacterTracker.Requests;

import com.revature.CharacterTracker.Models.Novel;

public class NewCharacterRequest {
    private String name;
    private String description;
    private String quote;
    private boolean isBiggerThanABreakBox;
    private Novel fromNovel;

    public NewCharacterRequest() {
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
        return "NewCharacterRequest{" +
                "name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", quote='" + quote + '\'' +
                ", isBiggerThanABreakBox=" + isBiggerThanABreakBox +
                ", fromNovel=" + fromNovel +
                '}';
    }
}
