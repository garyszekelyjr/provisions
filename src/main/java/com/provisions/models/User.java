package com.provisions.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@RequiredArgsConstructor
@Entity
public class User {
    @Id @GeneratedValue @Column private int id;
    @Column private final String username;
    @Column private final String password;
    @Column private final String name;
}
