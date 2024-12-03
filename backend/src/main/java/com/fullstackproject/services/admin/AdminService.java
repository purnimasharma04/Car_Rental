package com.fullstackproject.services.admin;

import com.fullstackproject.dto.BookDto;
import com.fullstackproject.dto.CarDto;
import com.fullstackproject.dto.CarListDto;
import com.fullstackproject.dto.SearchDto;

import java.io.IOException;
import java.util.List;

public interface AdminService {

    boolean addCar(CarDto carDto) throws IOException;

    List<CarDto> getAllCars();

    void deleteCar(Long id);

    CarDto getCarById(Long id);

    boolean updateCar(Long carId, CarDto carDto) throws IOException;

    List<BookDto> getBookings();

    boolean changeBookingStatus(Long bookingId, String status);

    CarListDto searchCar(SearchDto searchDto);

}
