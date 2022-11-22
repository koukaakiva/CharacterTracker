package com.revature.CharacterTracker.Models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;

@Entity(name = "characters")
public class Character {
    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column
    private String description;

    @Column
    private String quote;

    @Column
    private boolean isBiggerThanABreakBox;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name="fromNovel", referencedColumnName = "id")
    @JsonBackReference
    private Novel fromNovel;

    protected Character() {
    }

    public Character(String name, String description, String quote, boolean isBiggerThanABreakBox, Novel fromNovel) {
        this.name = name;
        this.description = description;
        this.quote = quote;
        this.isBiggerThanABreakBox = isBiggerThanABreakBox;
        this.fromNovel = fromNovel;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getQuote() {
        return quote;
    }

    public void setQuote(String quote) {
        this.quote = quote;
    }

    public boolean isBiggerThanABreakBox() {
        return isBiggerThanABreakBox;
    }

    public void setBiggerThanABreakBox(boolean biggerThanABreakBox) {
        isBiggerThanABreakBox = biggerThanABreakBox;
    }

    public Novel getFromNovel() {
        return fromNovel;
    }

    public void setFromNovel(Novel fromNovel) {
        this.fromNovel = fromNovel;
    }

    @Override
    public String toString() {
        return "Character{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", quote='" + quote + '\'' +
                ", isBiggerThanABreakBox=" + isBiggerThanABreakBox +
                ", fromNovel=" + fromNovel.getTitle() +
                '}';
    }
}
