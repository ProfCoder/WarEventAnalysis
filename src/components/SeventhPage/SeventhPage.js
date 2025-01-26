import React, { useRef } from "react";
import { Element, scroller } from "react-scroll";
import styles from "./SeventhPage.module.css";
import backgroundImage from "../../assets/images/field_and_sky.jpg";

const SeventhPage = () => {
  const containerRef = useRef(null);

  const scrollToNextPage = () => {
    scroller.scrollTo("eighth-page", { duration: 1000, smooth: true });
  };

  return (
    <Element name="seventh-page">
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
        <div className={styles.overlay}></div>
        <div className={styles.contentContainer}>
          <h1 className={styles.heading}>Resilience Through Data</h1>
          <p className={styles.description}>
            Explore the unfolding story of Ukraine through an interactive lens and dive into visualizations that reveal the depth of the conflict.
          </p>
      
          <button className={styles.ctaButton} onClick={scrollToNextPage}>
            Start Exploration →
          </button>
        </div>
      </div>
    </Element>
  );
};

export default SeventhPage;
