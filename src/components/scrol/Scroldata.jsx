import React, { useEffect, useState } from "react";
import Scrol from "./Scrol";

const Scroldata = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [delayedData, setDelayedData] = useState([]);

  const data = [
    {
      id: 1,
      img: `./src/assets/manzura.jpg`,
      img1: `./src/assets/vel.jpg`,
      img2: `./src/assets/telvi.jpg`,
      img3: `./src/assets/yog'.jpg`,
      img4: `./src/assets/sumka.jpg`,

    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayedData(data);
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="scrol"><div className="load"></div></div>
      ) : (
        delayedData.map((item) => <Scrol key={item.id} {...item} />)
      )}
    </div>
  );
};

export default Scroldata;

