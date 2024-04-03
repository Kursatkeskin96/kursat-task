"use client";
import React, { useState } from "react";
import Sort from "@/components/sort/Sort";
import TravelCard from "@/components/travel-card/TravelCard";
import hotelsData from "../../data.json";
import styles from "./page.module.css";
import { SortingOption } from "../../types/Sort";

interface Hotel {
  id: number;
  hotelName: string;
  location: string;
  stars: number;
  adults: number;
  children: number;
  infants: number;
  departureDate: string;
  duration: string;
  departureAirport: string;
  price: string;
  overview: string;
  imageUrl: string;
}

interface SortState {
  option: SortingOption | "";
  isAscending: boolean;
}

const MainContainer: React.FC = () => {
  const [sortedHotels, setSortedHotels] = useState<Hotel[]>(hotelsData);
  const [sortState, setSortState] = useState<SortState>({
    option: "",
    isAscending: false,
  });
  const [initialSort, setInitialSort] = useState(true);
  const [sortActionTriggered, setSortActionTriggered] = useState(false);

  const handleSort = (option: SortingOption) => {
    setSortActionTriggered((prevState) => !prevState);
    let isAscending: boolean;
    if (option === "price" && initialSort) {
      isAscending = true;
      setInitialSort(false);
    } else if (sortState.option === option) {
      isAscending = !sortState.isAscending;
    } else {
      isAscending = !(option === "price" || option === "star");
    }

    let sortedArray = [...sortedHotels];

    const sortAlphabetically = (a: Hotel, b: Hotel) =>
      isAscending
        ? a.hotelName.localeCompare(b.hotelName)
        : b.hotelName.localeCompare(a.hotelName);
    const sortByPrice = (a: Hotel, b: Hotel) => {
      const priceA = parseFloat(a.price.replace(/[^\d.]/g, ""));
      const priceB = parseFloat(b.price.replace(/[^\d.]/g, ""));
      return isAscending ? priceA - priceB : priceB - priceA;
    };
    const sortByStars = (a: Hotel, b: Hotel) =>
      isAscending ? a.stars - b.stars : b.stars - a.stars;

    if (option === "alphabetically") {
      sortedArray.sort(sortAlphabetically);
    } else if (option === "price") {
      sortedArray.sort(sortByPrice);
    } else if (option === "star") {
      sortedArray.sort(sortByStars);
    }

    setSortedHotels(sortedArray);
    setSortState({ option, isAscending });
  };

  return (
    <div className={styles.container}>
      <Sort onSort={handleSort} activeSort={sortState.option} />
      <div className={styles.travelCard}>
        {sortedHotels.map((hotel) => (
          <TravelCard
            key={hotel.id}
            hotel={hotel}
            sortActionTriggered={sortActionTriggered}
          />
        ))}
      </div>
    </div>
  );
};

export default MainContainer;
