package com.fullstackproject.dto;

import com.fullstackproject.enums.UserRole;
import lombok.Data;

@Data
public class AuthenticationResponse {

    private String jwt;
    private UserRole userRole;
    private Long userId;

}
