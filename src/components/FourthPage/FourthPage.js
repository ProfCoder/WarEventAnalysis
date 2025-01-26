import React, { useRef } from "react";
import { Element, scroller } from "react-scroll";
import styles from "./FourthPage.module.css";

// Data for countries
const countries = [
  { name: "Hungary", year: 1999, invasion: "Invasion in 1956 by Russia", notes: "Sought NATO membership to secure independence and stability after the Soviet Union’s influence ended following the Hungarian Revolution of 1956.", flag: "Hungary" },
  { name: "Czech Republic", year: 1999, invasion: "Invasion in 1968 by Russia", notes: "Pursued NATO membership to consolidate democratic reforms and secure protection after Soviet-led Warsaw Pact intervention in 1968.", flag: "CzechRepublic" },
  { name: "Latvia", year: 2004, invasion: "Invasion in 1940 by Russia", notes: "Aimed to safeguard its independence and strengthen democratic governance after decades of Soviet annexation and control.", flag: "Latvia" },
  { name: "Estonia", year: 2004, invasion: "Invasion in 1940 by Russia", notes: "Entered NATO to fortify its defense and independence, having endured long-term Soviet occupation until 1991.", flag: "Estonia" },
  { name: "Lithuania", year: 2004, invasion: "Invasion in 1940 by Russia", notes: "Aimed to safeguard its independence and strengthen democratic governance after decades of Soviet annexation and control.", flag: "Lithuania" },
  { name: "Slovakia", year: 2004, invasion: "Invasion in 1968 by Russia", notes: "Joined NATO to align itself with Western democratic and security institutions after the dissolution of Czechoslovakia and Soviet influence.", flag: "Slovakia" },
  { name: "Romania", year: 2004, invasion: "Invasion in 1944 by Russia", notes: "Sought NATO membership to ensure territorial defense and deepen ties with Western democracies after the end of the Warsaw Pact.", flag: "Romania" },
  { name: "Bulgaria", year: 2004, invasion: "Invasion in 1944 by Russia", notes: "Sought NATO membership to ensure regional stability and transition from a Soviet-aligned communist regime to a Western-oriented democracy.", flag: "Bulgaria" },
  { name: "Finland", year: 2023, invasion: "", notes: "Joined NATO in response to heightened security concerns and Russian aggression, particularly after the invasion of Ukraine.", flag: "Finland" },
  { name: "Sweden", year: "Pending", invasion: "", notes: "Experienced increased Russian military threats, particularly after the invasion of Ukraine, which prompted the decision to pursue NATO membership.", flag: "Sweden" },
];

const FourthPage = () => {
  const containerRef = useRef(null);

  // Scroll to the next page
  const scrollToNextPage = () => {
    scroller.scrollTo("fifth-page", { duration: 1000, smooth: true });
  };

  return (
    <Element name="fourth-page">
      
      <div ref={containerRef} className={styles.page}>
         {/* Headline */}
         <h1 className={styles.headline}>NATO Membership Timeline: Dates and Motivations for Joining</h1>
        <div className={styles.timelineContainer}>
          <div className={styles.timeline}>
            {/* Render all timeline points immediately */}
            {countries.map((country, index) => (
              <div
                key={index}
                className={styles.timelinePoint}
                style={{
                  left: `${(index / (countries.length - 1)) * 100}%`,
                }}
              >
                <div
                  className={`${styles.countryContainer} ${
                    index % 2 === 0 ? styles.above : styles.below
                  }`}
                >
                  <div className={styles.flagContainer}>
                    <img
                      src={require(`../../assets/images/flags/Flag_of_${country.flag}.png`)}
                      alt={`Flag of ${country.name}`}
                      className={styles.flag}
                    />
                    <div className={styles.tooltip}>{country.notes}</div>
                  </div>
                  <p className={styles.countryName}>{country.name}</p>

                  {/* Vertical line for each country */}
                  <div
                    className={styles.verticalLine}
                    style={{
                      height: "40px",
                      marginTop: index % 2 === 0 ? "-10px" : "-260px",
                    }}
                  />
                </div>
              </div>
            ))}

            {/* Year Circles */}
            <div className={styles.yearCircleTimeline} style={{ left: "5%" }}>
              1999
            </div>
            <div className={styles.yearCircleTimeline} style={{ left: "670px" }}>
              2004
            </div>
 
            <div className={styles.yearCircleTimeline} style={{ left: "85%" }}>
              2022
            </div>
          </div>
        </div>

        {/* Scroll Button */}
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

export default FourthPage;
