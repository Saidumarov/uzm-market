import React, { useState } from "react";
import Scroldata from "../scrol/Scroldata";
import Chilladata from "../chila-bozor/Chilladata";
import Scroldataa from "../scrol/Scroldataa";
import { useEffect } from "react";
import Childata1 from "../chila-bozor/data1/Childata1";

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
        <Childata1 />

      </div>
    );
  } else if (screenWidth >= 1160) {
    return (
      <div>
        <Scroldata />
        <Chilladata />
        <Childata1 />
      </div>
    );
  }
};

export default Layout;
