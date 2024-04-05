import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TravelCard from './TravelCard'; 
import '@testing-library/jest-dom';

const mockHotel = {
    id: 1,
    hotelName: 'Test Hotel',
    location: 'Test Location',
    stars: 5,
    adults: 2,
    children: 1,
    infants: 0,
    departureDate: '2024-04-20',
    duration: '7 days',
    departureAirport: 'Test Airport',
    price: '999',
    overview: 'Test overview of the hotel',
    imageUrl: '/test-image.jpg',
  };

test('toggle button text changes to "Read less" after click', () => {
    render(<TravelCard hotel={mockHotel} sortActionTriggered={false} />);
  
    const toggleButton = screen.getByRole('button', { name: /read more about this hotel/i });
    
    fireEvent.click(toggleButton);
  
    expect(toggleButton).toHaveTextContent(/read less about this hotel/i);
  });
  