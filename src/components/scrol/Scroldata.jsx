import React, { useEffect, useState } from "react";
import Scrol from "./Scrol";
import img1 from "../../assets/manzura.jpg";
import img2 from "../../assets/vel.jpg";
import img3 from "../../assets/telvi.jpg";
import img4 from "../../assets/yog'.jpg";
import img5 from "../../assets/sumka.jpg";

const Scroldata = () => {
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

export default Scroldata;
