package com.revature.CharacterTracker.Requests;

import com.revature.CharacterTracker.Models.Novel;

public class NewCharacterRequest {
    private String name;
    private String description;
    private String quote;
    private boolean isBiggerThanABreakBox;
    private Long fromNovelID;

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

    public Long getFromNovelID() {
        return fromNovelID;
    }

    @Override
    public String toString() {
        return "NewCharacterRequest{" +
                "name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", quote='" + quote + '\'' +
                ", isBiggerThanABreakBox=" + isBiggerThanABreakBox +
                ", fromNovelID=" + fromNovelID +
                '}';
    }
}
