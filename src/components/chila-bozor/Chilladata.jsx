import React, { useEffect, useState } from "react";
import Chillamenyu from "./Chillamenyu";
import yog from "../../assets/yog/yog.jpg";
import fut from "../../assets/futbolka/fut.jpg";
import lata from "../../assets/unversal/sum.jpg";
import uram from "../../assets/unversal/uram.jpg";
import uyin from "../../assets/unversal/uyin.jpg";
import soya from "../../assets/unversal/soyabon.jpg";
import tuz from "../../assets/unversal/tuz.jpg";
import shimgich from "../../assets/avto/shimgich.jpg";
import tel from "../../assets/tel/tel.jpg";
import havo from "../../assets/havo/havo1.jpg";




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
      body: `Asosiy futbolka Samo, bir rangli, uniseks`,
      title: `Chilla Bozor `,
      img: fut,
      narx: 21,
      narxno: 49,
      oyiga: `2 520 `,
    },
    {
      id: 3,
      body: `Avtomobillar uchun mikrofiber latta `,
      title: `Chilla Bozor`,
      img: lata,
      narx: 20,
      narxno: 45,
      oyiga: `2 400 `,
    },
    {
      id: 4,
      body: `Avtomobil old oynasi uchun quyoshtan himoya`,
      title: `Chilla Bozor`,
      img: uram,
      narx: 30,
      narxno: 27,
      oyiga: `3 420 `,
    },
    {
      id: 5,
      body: `  Suv sepadigan to'poncha Water Gun H-994A`,
      title: `Chilla Bozor`,
      img: uyin,
      narx: 13,
      narxno: 28,
      oyiga: `1 560 `,
    },
    {
      id: 6,
      body: `   Old oynasi uchun barqaror soyabon`,
      title: `Chilla Bozor`,
      img: soya,
      narx: 65,
      narxno: 147,
      oyiga: `7 800 `,
    },

    {
      id: 7,
      body: `   Kir yuvish kukuni Зеленый чай Oq atirgul, qo'lda yuvish, 900 g`,
      title: `Chilla Bozor`,
      img: tuz,
      narx: 15,
      narxno: 22,
      oyiga: `1 800 `,
    },

    {
      id: 8,
      body: `Mashina yuvish uchun shimgich Master Comfort "Egida-`,
      title: `Chilla Bozor`,
      img: shimgich,
      narx: 3,
      narxno: 5,
      oyiga: `380 `,
    },
    {
      id: 9,
      body: `O'yin smartfon TECNO Pova Neo 2, 6/128 GB, NFC 2SIM`,
      title: `Chilla Bozor`,
      img: tel,
      narx: 1.999,
      narxno: 2.300,
      oyiga: `239 880 `,
    },
    {
      id: 10,
      body: `   Havo namlagich akkumulyatorli, rangli yoritgichli va metall korpusi`,
      title: `Chilla Bozor`,
      img: havo,
      narx: 150,
      narxno: 220,
      oyiga: `18 000 `,
    },


  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayedData(childata);
      setIsLoading(false);
    }, 200000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="data">
      <div>
        {isLoading ? (
      
            <Loadindata />
         
        ) : (
          <div className="data1">
            {delayedData.map((item) => (
              <Chillamenyu key={item.id} {...item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Chilladata;
