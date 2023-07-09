import React, { useState } from "react";
import Scroldata from "../scrol/Scroldata";
import Chilladata from "../chila-bozor/Chilladata";
import Scroldataa from "../scrol/Scroldataa";
import { useEffect } from "react";

const Layout = () => {
  const [screenWidth, setScreenWidth] = useState(
    window.innerWidth || document.documentElement.clientWidth
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth || document.documentElement.clientWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (screenWidth <= 1160) {
    return (
      <div>
        <Scroldataa />
        <Chilladata />
      </div>
    );
  } else if(screenWidth >= 1160) {
    return (
      <div>
        <Scroldata />
        <Chilladata />
      </div>
    );
  }


};

export default Layout;
