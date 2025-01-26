import React, { useState, useRef, useEffect, useCallback } from "react";
import { Element, scroller } from "react-scroll";
import classes from "./SecondPage.module.css";

function clamp(value, min, max) {
  return Math.max(min, Math.min(value, max));
}

const SecondPage = () => {
  const containerRef = useRef(null);

  const [progress, setProgress] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [scrollLocked, setScrollLocked] = useState(false);

  const handleWheel = useCallback(
    (event) => {
      if (!isInView || !containerRef.current || scrollLocked) return;

      const delta = event.deltaY;

      if (delta > 0 && progress < 100) {
        event.preventDefault();
        setProgress((prev) => Math.min(prev + 10, 100));
      } else if (delta < 0 && progress > 0) {
        event.preventDefault();
        setProgress((prev) => Math.max(prev - 10, 0));
      } else if (delta < 0 && progress === 0) {
        event.preventDefault();
        scroller.scrollTo("first-page", { duration: 1000, smooth: true });
      }
    },
    [progress, isInView, scrollLocked]
  );

  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const fullyInView = rect.top <= 0 && rect.bottom >= window.innerHeight;
    setIsInView(fullyInView);
  }, []);

  // useEffect(() => {
  //   if (progress === 100) {
  //     const timeout = setTimeout(() => setShowButton(true), 1000);
  //     return () => clearTimeout(timeout);
  //   } else {
  //     setShowButton(false);
  //   }
  // }, [progress]);


  useEffect(() => {
    if (progress >= 50) { 
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

  const xShift = (progress / 100) * 30;
  const detachedOpacity = progress >= 50 ? 0.5 : 1;
  const dynamicTextOpacity = clamp((progress - 20) / 40, 0, 1);

  const scrollToNextPage = () => {
    setScrollLocked(true);
    scroller.scrollTo("third-page", { duration: 1000, smooth: true });
    setTimeout(() => setScrollLocked(false), 1000);
  };

  return (
    <Element name="second-page">
      <div ref={containerRef} className={classes.scrollSection}>
        <div className={classes.flagContainer}>
          <div className={`${classes.square} ${classes.main}`}>
            <div className={classes.bluePart} />
            <div className={classes.yellowPart} />
          </div>

          <div
            className={`${classes.square} ${classes.detached} ${
              progress > 0 ? classes.grayish : ""
            }`}
            style={{
              transform: `translateX(${xShift}px)`,
              opacity: detachedOpacity,
            }}
          >
            <div className={classes.bluePart} />
            <div className={classes.yellowPart} />
          </div>
        </div>

        <div className={classes.textContainer}>
          <h1 className={classes.initialText}>Did you know?</h1>
          <p
            className={classes.dynamicText}
            style={{ opacity: dynamicTextOpacity }}
          >
            <span className={classes.highlight}>27%</span> of Ukraine’s territories is
            occupied by Russian forces
          </p>
        </div>

        {showButton && (
          <div className={classes.scrollContainer}>
            <button className={classes.scrollButton} onClick={scrollToNextPage}>
              Explore the Reasons
            </button>
            <div className={classes.arrow}></div>
          </div>
        )}
      </div>
    </Element>
  );
};

export default SecondPage;