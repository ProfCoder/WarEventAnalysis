import React, { useState, useEffect, useRef, useCallback } from "react";
import { Element, scroller } from "react-scroll";
import styles from "./ThirdPage.module.css";
import backgroundImage from "../../assets/images/ukraine_nato.jpg";

const ThirdPage = () => {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0); 
  const [isInView, setIsInView] = useState(false); 
  const [showButton, setShowButton] = useState(false); 

 
  const handleWheel = useCallback(
    (event) => {
      if (!isInView || !containerRef.current) return;

      const delta = event.deltaY;


      if (delta > 0 && progress < 100) {
        event.preventDefault();
        setProgress((prev) => Math.min(prev + 10, 100));
      }


      if (delta < 0 && progress > 0) {
        event.preventDefault();
        setProgress((prev) => Math.max(prev - 10, 0));
      } else if (delta < 0 && progress === 0) {
    
        event.preventDefault();
        scroller.scrollTo("second-page", { duration: 1000, smooth: true });
      }
    },
    [progress, isInView]
  );

  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const fullyInView = rect.top <= 0 && rect.bottom >= window.innerHeight;
    setIsInView(fullyInView);
  }, []);

  // button logic
  // useEffect(() => {
  //   if (progress === 100) {
  //     const timeout = setTimeout(() => setShowButton(true), 1000);
  //     return () => clearTimeout(timeout);
  //   } else {
  //     setShowButton(false);
  //   }
  // }, [progress]);

  useEffect(() => {
    if (progress >= 70) { 
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [progress]);
  

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleWheel, handleScroll]);


  const scrollToNextPage = () => {
    scroller.scrollTo("fourth-page", { duration: 1000, smooth: true });
  };


  const textOpacity = Math.min(progress / 50, 1); 
  const transformValue = `translateY(${50 - (progress / 100) * 50}px)`;

  return (
    <Element name="third-page">
      <div ref={containerRef} className={styles.page}>

        <div
          className={styles.background}
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: `grayscale(${progress / 100})`,
          }}
        />

        <h1
          className={styles.heading}
          style={{
            opacity: textOpacity,
            transform: transformValue,
            transition: "transform 0.5s ease, opacity 0.5s ease",
          }}
        >
          RUSSIA'S STATED REASON BEHIND THE WAR
        </h1>

        <div
          className={styles.movableText}
          style={{
            opacity: progress >= 50 ? 1 : 0,
            transform: `translateY(${progress >= 50 ? "0" : "50px"})`,
            transition: "transform 0.5s ease, opacity 0.5s ease",
          }}
        >
          On the first day of the war, February 24, 2022, President Vladimir Putin justified
          Russia's military actions in Ukraine, citing NATO's expansion toward its borders as a
          critical <span>threat</span> to national security.
        </div>

        <div
          className={`${styles.movableText} ${styles.textBelowButton}`}
          style={{
            opacity: progress >= 100 ? 1 : 0,
            transform: `translateY(${progress >= 100 ? "0" : "50px"})`,
            transition: "transform 0.5s ease, opacity 0.5s ease",
          }}
        >
          Did nations join NATO to threaten Russia or to seek protection from aggression?
        </div>

     
        {showButton && (
          <div className={styles.scrollContainer}>
            <button
              className={styles.scrollButton}
              onClick={scrollToNextPage}
            >
             Next Page
            </button>
            <div className={styles.arrow}></div>
          </div>
        )}
      </div>
    </Element>
  );
};

export default ThirdPage;
