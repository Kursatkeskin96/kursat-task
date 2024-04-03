import React from "react";
import styles from "./page.module.css";
import { MdOutlineSortByAlpha } from "react-icons/md";
import { FaPoundSign } from "react-icons/fa";
import { GoStarFill } from "react-icons/go";
import { SortingOption } from "../../types/Sort";

interface SortProps {
  onSort: (option: SortingOption) => void;
  activeSort: SortingOption | "";
}

const Sort: React.FC<SortProps> = ({ onSort, activeSort }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header} onClick={() => onSort("alphabetically")}>
        <div>
          sort <span className={styles.span}>alphabetically</span>
        </div>
        <div>
          <MdOutlineSortByAlpha className={styles.icon} />
        </div>
      </div>
      <div
        className={`${styles.priceContainer} ${
          activeSort === "price" ? styles.active : ""
        }`}
        onClick={() => onSort("price")}
      >
        <div>
          sort by <span className={styles.span}>price</span>
        </div>
        <div>
          <FaPoundSign className={styles.poundIcon} />
        </div>
      </div>
      <div
        className={`${styles.starContainer} ${
          activeSort === "star" ? styles.active : ""
        }`}
        onClick={() => onSort("star")}
      >
        <div>
          sort by <span className={styles.span}>star rating</span>
        </div>
        <div>
          <GoStarFill className={styles.starIcon} />
        </div>
      </div>
    </div>
  );
};
export default Sort;
