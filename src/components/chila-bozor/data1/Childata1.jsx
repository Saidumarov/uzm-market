import React, { useEffect, useState } from "react";
import yog from "../../../assets/lampa/koros2.jpg";
import fut from "../../../assets/lampa/watch.jpg";
import lata from "../../../assets/lampa/nout.jpg";
import uram from "../../../assets/lampa/sam.jpg";
import uyin from "../../../assets/lampa/lampa.jpg";
import Chilmenyu1 from "./Chilmenyu1";
import darhol1 from "../../../assets/darhol1.jpg";
import darhol from "../../../assets/darhol.jpg";

const Childata1 = () => {
  const [delayedData, setDelayedData] = useState([]);
  const [img, setImg] = useState();
  const [text, setText] = useState();



  const childata = [
    {
      id: 11,
      body: `Krossovkalar erkaklar uchun, nafas oladigan to'rlik, sport uchun mos`,
      title: `Chilla Bozor `,
      img: yog,
      narx: 109,
      narxno: 399,
      oyiga: `13 080 `,
    },
    {
      id: 12,
      body: `Aqlli Fitness bilaguzuk HUAWEI Band 7`,
      title: `Chilla Bozor `,
      img: fut,
      narx: 499,
      narxno: 729,
      oyiga: `59 880 `,
    },
    {
      id: 13,
      body: `Noutbuk uchun ryukzak va hujjatlar uchun 15.6 va 17.3 USB bilan
      `,
      title: `Chilla Bozor`,
      img: lata,
      narx: 152,
      narxno: 300,
      oyiga: `23 400 `,
    },
    {
      id: 14,
      body: `Освежитель для авто - вертолет`,
      title: `Chilla Bozor`,
      img: uram,
      narx: 67,
      narxno: 80,
      oyiga: `8 040 `,
    },
    {
      id: 15,
      body: ` LED lampalar H4 linzali A7 LED, 6000K 2 dona, old oyna himoyachilari kiritilgan`,
      title: `Chilla Bozor`,
      img: uyin,
      narx: 285,
      narxno: 325,
      oyiga: `34 200`,
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayedData(childata);
    }, 1000);
    setTimeout(() => {
      setImg(
        <div className="darhol">
          <img src={darhol} alt="" className="dar" />
          <img src={darhol1} alt="" className="dar1" />
        </div>
      );

      setText(
        <h2 className="bb">
          <b>Ortiqcha to'lovlarsiz nasiya</b>{" "}
          <i class="fa-solid fa-chevron-right"></i>
        </h2>
      );

     
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="data">
      {img}
      {text}
    
      <div>
        <div className="data1">
          {delayedData.map((item) => (
            <Chilmenyu1 key={item.id} {...item} />
          ))}
        </div>
       
      </div>
   
    </div>
  );
};

export default Childata1;
