package com.fullstackproject.repositories;

import com.fullstackproject.entities.User;
import com.fullstackproject.enums.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);

    User findByUserRole(UserRole userRole);
}
