package com.fullstackproject.services.authentication;

import com.fullstackproject.dto.RegisterRequest;
import com.fullstackproject.dto.UserDto;

public interface AuthenticationService {

    UserDto createCustomer(RegisterRequest registerRequest);
    boolean hasCustomerWithEmail(String email);

}
