import React, { useRef } from "react";
import { Element, scroller } from "react-scroll";
import styles from "./SixthPage.module.css";
import backgroundImage from "../../assets/images/destroyed_car.jpg";

const SixthPage = () => {
  const containerRef = useRef(null);

  const scrollToNextPage = () => {
    scroller.scrollTo("seventh-page", { duration: 1000, smooth: true });
  };

  return (
    <Element name="sixth-page">
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
          <h1 className={styles.heading}>The Second Phase of Conflict</h1>
          <div className={styles.yearContainer}>
            <span className={styles.year}>2022</span>
          </div>
        </div>

        <div className={styles.contentContainer}>
          <p className={styles.description}>
            In 2022, Russia started a full-scale invasion, occupying large parts of the region and causing widespread destruction, impacting millions.
          </p>
        </div>

        {/* Button is always visible */}
        <div className={styles.scrollContainer}>
          <button className={styles.scrollDownButton} onClick={scrollToNextPage}>
            <div className={styles.scrollDownText}>Next Page</div>
            <div className={styles.grayArrow}></div>
          </button>
        </div>
      </div>
    </Element>
  );
};

export default SixthPage;
