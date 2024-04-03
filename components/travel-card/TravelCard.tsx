"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { GoStarFill } from "react-icons/go";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
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

interface TravelCardProps {
  hotel: Hotel;
  sortActionTriggered: boolean;
}

const TravelCard: React.FC<TravelCardProps> = ({
  hotel,
  sortActionTriggered,
}) => {
  const [isToggled, setIsToggled] = useState(false);

  const renderStars = () =>
    Array.from({ length: hotel.stars }, (_, i) => <GoStarFill key={i} />);

  useEffect(() => {
    if (sortActionTriggered) {
      setIsToggled(false);
    }
  }, [sortActionTriggered]);

  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <div className={styles.imageDiv}>
          <Image
            src={hotel.imageUrl}
            priority
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="t"
          />
          {isToggled ? (
            <button
              onClick={() => setIsToggled(false)}
              className={styles.toggleButton}
            >
              <span className={styles.toggleButtonBold}>Read less</span> about
              this hotel
              <IoIosArrowDown className={styles.buttonArrow} />
            </button>
          ) : (
            <button
              onClick={() => setIsToggled(true)}
              className={styles.toggleButton}
            >
              <span className={styles.toggleButtonBold}>Read more</span>about
              this hotel <IoIosArrowForward className={styles.buttonArrow} />
            </button>
          )}
        </div>
        <div className={styles.infoDiv}>
          <h3 className={styles.h3}>{hotel.hotelName}</h3>
          <p className={styles.location}>{hotel.location}</p>
          <div className={styles.stars}>{renderStars()}</div>
          <div className={styles.travelInfo}>
            <p className={styles.smallText}>
              <span className={styles.bold}>{hotel.adults}</span> Adults,{" "}
              <span className={styles.bold}>{hotel.children}</span> children
              {hotel.infants > 0 && (
                <span>
                  , <span className={styles.bold}>{hotel.infants}</span> infants
                </span>
              )}
            </p>
            <p className={styles.smallText}>
              <span className={styles.bold}>{hotel.departureDate}</span> for{" "}
              <span className={styles.bold}>{hotel.duration}</span>
            </p>
            <p className={styles.smallText}>
              Departing from{" "}
              <span className={styles.bold}>{hotel.departureAirport}</span>
            </p>
          </div>
          <div className={styles.buttonDiv}>
            <button className={styles.verticalButton}>
              <span className={styles.buttonBookNow}>Book Now</span>
              <span className={styles.buttonPrice}>£{hotel.price}</span>
            </button>
          </div>
        </div>
      </div>
      <div className={`${styles.overview} ${isToggled ? styles.toggled : ""}`}>
        <h5>Overview</h5>
        <p>{hotel.overview}</p>
      </div>
    </div>
  );
};

export default TravelCard;
