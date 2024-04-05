import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Sort from './Sort'; 
import '@testing-library/jest-dom';


test("should render component without crashing.", ()=> {
  const handleSort = jest.fn()
  render(<Sort onSort={handleSort} activeSort="" />)
  expect(screen.getByText("alphabetically")).toBeInTheDocument()
})

  test('calls onSort with the correct argument when an option is clicked', () => {
    const handleSort = jest.fn();
    render(<Sort onSort={handleSort} activeSort="" />);

    fireEvent.click(screen.getByText(/alphabetically/i));
    expect(handleSort).toHaveBeenCalledWith('alphabetically');

    fireEvent.click(screen.getByText(/price/i));
    expect(handleSort).toHaveBeenCalledWith('price');

    fireEvent.click(screen.getByText(/star rating/i));
    expect(handleSort).toHaveBeenCalledWith('star');
  });
