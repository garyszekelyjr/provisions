package com.provisions.services;

import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.provisions.models.User;
import com.provisions.repositories.UserRepository;

@Service
public class UserService {

    @Autowired private UserRepository userRepository;

    public boolean login(String username, String password){
        Optional<User> user = userRepository.findByUsername(username);
        if (user.isPresent()){
            return BCrypt.checkpw(password, user.get().getPassword());
        } 
        return false;
    }

    public boolean signup(String username, String password, String name){
        if (userRepository.findByUsername(username).isEmpty()) {
            User user = new User(username, BCrypt.hashpw(password, BCrypt.gensalt()), name);
            userRepository.save(user);
            return true;
        }
        return false;
    }
}
