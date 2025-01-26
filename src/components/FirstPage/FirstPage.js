import React, { useEffect, useRef } from "react";
import { Element } from "react-scroll";
import { Link } from "react-scroll";
import styles from "./FirstPage.module.css";

const FirstPage = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1;
    }
  }, []);

  return (
    <Element name="first-page">
      <div className={styles.firstPage}>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          className={styles.backgroundVideo}
        >
          <source src="/videos/background.mov" type="video/mp4" />
        </video>

        <div className={styles.overlay}>
          <h1>How Ukraine Battles for</h1>
          <div className={styles.flagLine}></div>
          <h2>Land, Life, Liberty</h2>
          <p>Discover the untold stories behind the numbers.</p>
        </div>

        <div className={styles.scrollContainer}>
          <Link
            to="second-page"
            smooth={true}
            duration={1000}
            className={styles.scrollButton}
          >
            Scroll to Explore
          </Link>
          <div className={styles.arrow}></div>
        </div>
      </div>
    </Element>
  );
};

export default FirstPage;
