package com.revature.CharacterTracker.Models;

import javax.persistence.*;

@Entity
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

    @ManyToOne
    private Novel fromNovel;
}
