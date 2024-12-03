package com.fullstackproject.services.customer;

import com.fullstackproject.dto.BookDto;
import com.fullstackproject.dto.CarDto;
import com.fullstackproject.dto.CarListDto;
import com.fullstackproject.dto.SearchDto;

import java.util.List;

public interface CustomerService {

    List<CarDto> getAllCars();

    boolean bookCar(BookDto bookDto);

    CarDto getCarById(Long carId);

    List<BookDto> getBookingByUserId(Long userId);

    CarListDto searchCar(SearchDto searchDto);

}
