import React, { useEffect, useState } from "react";
import Chillamenyu from "./Chillamenyu";
import Chilla from "./Chilla";
import yog from "../../assets/yog/yog.jpg";
import Loadindata from "./Loadindata";

const Chilladata = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [delayedData, setDelayedData] = useState([]);
  const childata = [
    {
      id: 1,
      body: `Kungaboqar yog'i Sofia, tozalangan va deodorizatsiyalangan, 1 litr`,
      title: `Chilla Bozor `,
      img: yog,
      narx: 14,
      narxno: 19,
      oyiga: `1 680 `,
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
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayedData(childata);
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="data">
      <Chilla />

      <div >
        {isLoading ? (
  <p>        <Loadindata/></p>
        ) : ( <div className="data1">
           { delayedData.map((item) => <Chillamenyu key={item.id} {...item} />)}
        </div>
        )}
      </div>
    </div>
  );
};

export default Chilladata;
