import React, { useEffect, useState, useRef } from "react";
import yog from "../../assets/lampa/koros2.jpg";
import fut from "../../assets/lampa/watch.jpg";
import lata from "../../assets/lampa/nout.jpg";
import uram from "../../assets/lampa/sam.jpg";
import uyin from "../../assets/lampa/lampa.jpg";
import darhol1 from "../../assets/bas1.jpg";
import darhol from "../../assets/bas.jpg";
import Scrolmenyu from "./Scrolmenyu";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
const Scroldata1 = () => {
  const [img, setImg] = useState(
    <div className="darhol">
      <img src={darhol} alt="" className="dar" />
      <img src={darhol1} alt="" className="dar1" />
    </div>
  );
  const childata = [
    {
      id: 16,
      body: `Krossovkalar erkaklar uchun, nafas oladigan to'rlik, sport uchun mos`,
      title: `Chilla Bozor `,
      img: yog,
      narx: 109,
      narxno: 399,
      oyiga: `13 080 `,
    },
  ];

  const childata1 = [
    {
      id: 17,
      body: `Aqlli Fitness bilaguzuk HUAWEI Band 7`,
      title: `Chilla Bozor `,
      img: fut,
      narx: 499,
      narxno: 729,
      oyiga: `59 880 `,
    },
  ];
  const childata2 = [
    {
      id: 18,
      body: `Noutbuk uchun ryukzak va hujjatlar uchun 15.6 va 17.3 USB bilan
      `,
      title: `Chilla Bozor`,
      img: lata,
      narx: 152,
      narxno: 300,
      oyiga: `23 400 `,
    },
  ];
  const childata3 = [
    {
      id: 19,
      body: `Освежитель для авто - вертолет`,
      title: `Chilla Bozor`,
      img: uram,
      narx: 67,
      narxno: 80,
      oyiga: `8 040 `,
    },
  ];
  const childata4 = [
    {
      id: 20,
      body: ` LED lampalar H4 linzali A7 LED, 6000K 2 dona, old oyna himoyachilari kiritilgan`,
      title: `Chilla Bozor`,
      img: uyin,
      narx: 285,
      narxno: 325,
      oyiga: `34 200`,
    },
  ];

  const childata6 = [
    {
      id: 21,
      body: `Krossovkalar erkaklar uchun, nafas oladigan to'rlik, sport uchun mos`,
      title: `Chilla Bozor `,
      img: yog,
      narx: 109,
      narxno: 399,
      oyiga: `13 080 `,
    },
  ];

  const childata7 = [
    {
      id: 22,
      body: `Aqlli Fitness bilaguzuk HUAWEI Band 7`,
      title: `Chilla Bozor `,
      img: fut,
      narx: 499,
      narxno: 729,
      oyiga: `59 880 `,
    },
  ];
  const childata8 = [
    {
      id: 23,
      body: `Noutbuk uchun ryukzak va hujjatlar uchun 15.6 va 17.3 USB bilan
      `,
      title: `Chilla Bozor`,
      img: lata,
      narx: 152,
      narxno: 300,
      oyiga: `23 400 `,
    },
  ];
  const childata9 = [
    {
      id: 24,
      body: `Освежитель для авто - вертолет`,
      title: `Chilla Bozor`,
      img: uram,
      narx: 67,
      narxno: 80,
      oyiga: `8 040 `,
    },
  ];
  const childata10 = [
    {
      id: 25,
      body: ` LED lampalar H4 linzali A7 LED, 6000K 2 dona, old oyna himoyachilari kiritilgan`,
      title: `Chilla Bozor`,
      img: uyin,
      narx: 285,
      narxno: 325,
      oyiga: `34 200`,
    },
  ];
  const [text, setText] = useState(
    <div>
      <h2 className="bb">
        <b>Hovuzlar va aksessuarlar</b>{" "}
        <i class="fa-solid fa-chevron-right"></i>
      </h2>
      <p className="bdb">
        <b>Hovuzlar va aksessuarlar</b>{" "}
        <i class="fa-solid fa-chevron-right"></i>
      </p>
    </div>
  );
  const [text1, setText1] = useState();

  useEffect(() => {
    const timer = setTimeout(() => {}, 1000);
    setTimeout(() => {
      setText1(
        <div className="data-itme">
          {img}
          {text}
          <div>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                "@0.00": {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                "@0.75": {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                "@1.00": {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                "@1.50": {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="data1-itme">
                  {childata.map((item) => (
                    <Scrolmenyu key={item.id} {...item} />
                  ))}
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="data1-itme">
                  {childata1.map((item) => (
                    <Scrolmenyu key={item.id} {...item} />
                  ))}
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="data1-itme">
                  {childata2.map((item) => (
                    <Scrolmenyu key={item.id} {...item} />
                  ))}
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="data1-itme">
                  {childata3.map((item) => (
                    <Scrolmenyu key={item.id} {...item} />
                  ))}
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="data1-itme">
                  {childata4.map((item) => (
                    <Scrolmenyu key={item.id} {...item} />
                  ))}
                </div>
              </SwiperSlide>

              {/* 2 blok */}

              <SwiperSlide>
                <div className="data1-itme">
                  {childata6.map((item) => (
                    <Scrolmenyu key={item.id} {...item} />
                  ))}
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="data1-itme">
                  {childata7.map((item) => (
                    <Scrolmenyu key={item.id} {...item} />
                  ))}
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="data1-itme">
                  {childata8.map((item) => (
                    <Scrolmenyu key={item.id} {...item} />
                  ))}
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="data1-itme">
                  {childata9.map((item) => (
                    <Scrolmenyu key={item.id} {...item} />
                  ))}
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="data1-itme">
                  {childata10.map((item) => (
                    <Scrolmenyu key={item.id} {...item} />
                  ))}
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      );
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return <div>{text1}</div>;
};

export default Scroldata1;
