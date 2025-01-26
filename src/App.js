import React, { useEffect } from "react";
import FirstPage from "./components/FirstPage/FirstPage";
import SecondPage from "./components/SecondPage/SecondPage";
import ThirdPage from "./components/ThirdPage/ThirdPage";
import FourthPage from "./components/FourthPage/FourthPage";
import FifthPage from "./components/FifthPage/FifthPage";
import SixthPage from "./components/SixthPage/SixthPage";
import SeventhPage from "./components/SeventhPage/SeventhPage";



function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
      <SixthPage />
      <SeventhPage />
    </div>
  );
}

export default App;

