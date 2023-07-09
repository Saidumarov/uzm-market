import React, { useEffect, useState } from "react";
import Scrol from "./Scrol";
import img1 from "../../assets/manzura1.jpg";
import img2 from "../../assets/vel1.jpg";
import img3 from "../../assets/telvi1.jpg";
import img4 from "../../assets/yogg.jpg";
import img5 from "../../assets/futa1.jpg";

const Scroldataa = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [delayedData, setDelayedData] = useState([]);

  const data = [
    {
      id: 1,
      img: img1,
      img1: img2,
      img2: img3,
      img3: img4,
      img4: img5,

    },
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
        <div className="scrol">
          <div className="load"></div>
        </div>
      ) : (
        delayedData.map((item) => <Scrol key={item.id} {...item} />)
        
      )}

    </div>
  );
};

export default Scroldataa;
