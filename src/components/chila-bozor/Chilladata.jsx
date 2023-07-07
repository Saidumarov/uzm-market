import React, { useEffect, useState } from "react";
import Chillamenyu from "./Chillamenyu";
import Chilla from "./Chilla";



const Chilladata = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [delayedData, setDelayedData] = useState([]);
  const childata = [
    {
      id: 1,
      body: `salom`,
      title: `qali`,
      img: `fefwfefwe`,
      narx: 200202,
      narxno: 2020,
    },
    {
      id: 2,
      body: `salom`,
      title: `qali`,
      img: `fefwfefwe`,
      narx: 200202,
      narxno: 2020,
    },
    {
      id: 3,
      body: `salom`,
      title: `qali`,
      img: `fefwfefwe`,
      narx: 200202,
      narxno: 2020,
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayedData(childata);
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <Chilla />

      {isLoading ? (
        <p>ddawdwq</p>
      ) : (
        delayedData.map((item) => <Chillamenyu key={item.id} {...item} />)
        
      )
      }
      

    </div>
  );
};

export default Chilladata;
