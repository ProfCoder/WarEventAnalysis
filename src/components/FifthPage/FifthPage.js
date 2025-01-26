import React, { useRef } from "react";
import { Element, scroller } from "react-scroll";
import styles from "./FifthPage.module.css";
import backgroundImage from "../../assets/images/destroyed_city.jpg";
import peopleIcon from "../../assets/images/icons/people.svg";
import mapIcon from "../../assets/images/icons/map.svg";

const FifthPage = () => {
  const containerRef = useRef(null);

  // Scroll to the sixth page
  const scrollToNextPage = () => {
    scroller.scrollTo("sixth-page", { duration: 1000, smooth: true });
  };

  return (
    <Element name="fifth-page">
      <div
        ref={containerRef}
        className={styles.page}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className={styles.headingContainer}>
          <h1 className={styles.heading}>The First Phase of Conflict</h1>
          <div className={styles.yearContainer}>
            <span className={styles.year}>2014</span>
          </div>
        </div>

        <div className={styles.contentContainer}>
          <p className={styles.description}>
            In February 2014, Russia occupied and annexed{" "}
            <span className={styles.highlighted}>Crimea</span> following a
            disputed referendum.
          </p>
          <ul className={styles.stats}>
            <li>
              <img src={mapIcon} alt="Map Icon" className={styles.icon} />{" "}
              27,000+ sq km annexed
            </li>
            <li>
              <img src={peopleIcon} alt="People Icon" className={styles.icon} />{" "}
              2.4 million residents affected
            </li>
          </ul>
        </div>

        <div className={styles.contentContainer}>
          <p className={styles.description}>
            In April 2014, pro-Russian separatists in{" "}
            <span className={styles.highlighted}>Donetsk and Luhansk</span>{" "}
            declared independence.
          </p>
          <ul className={styles.stats}>
            <li>
              <img src={mapIcon} alt="Map Icon" className={styles.icon} />{" "}
              16,000+ sq km of territory lost to separatist control
            </li>
            <li>
              <img src={peopleIcon} alt="People Icon" className={styles.icon} />{" "}
              1.6 million residents affected
            </li>
          </ul>
        </div>

        {/* Scroll Down Button */}
        <div className={styles.scrollContainer}>
          <button className={styles.scrollButton} onClick={scrollToNextPage}>
            Next Page
          </button>
          <div className={styles.arrow}></div>
        </div>
      </div>
    </Element>
  );
};

export default FifthPage;
