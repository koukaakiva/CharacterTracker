package com.revature.CharacterTracker.Responses;

import com.revature.CharacterTracker.Models.Character;

public class CharacterResponse {
    private Character character;
    private Long novelID;

    public CharacterResponse(Character character, Long novelID) {
        this.character = character;
        this.novelID = novelID;
    }

    public Character getCharacter() {
        return character;
    }

    public Long getNovelID() {
        return novelID;
    }

    @Override
    public String toString() {
        return "CharacterResponse{" +
                "character=" + character +
                ", novelID=" + novelID +
                '}';
    }
}
