import React, { useState } from "react";
import Scroldata from "../scrol/Scroldata";
import Chilladata from "../chila-bozor/Chilladata";
import Scroldataa from "../scrol/Scroldataa";
import { useEffect } from "react";
import Childata1 from "../chila-bozor/data1/Childata1";
import Scroldata1 from "../scroldata/Scroldata1";

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

  const [btn, setBtn] = useState();
  setTimeout(() => {
    setBtn(<button className="yana">Yana koʻrsatish 20</button>);
  }, 1000);

  if (screenWidth <= 1160) {
    return (
      <div>
        <Scroldataa />
        <Chilladata />
        <Childata1 />
        {btn}
        <Scroldata1 />
      </div>
    );
  } else if (screenWidth >= 1160) {
    return (
      <div>
        <Scroldata />
        <Chilladata />
        <Childata1 />
        {btn}
        <Scroldata1 />
      </div>
    );
  }
};

export default Layout;
