import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./chilla.css";
import yog from "../../assets/yog/yog3.jpg";
import yog1 from "../../assets/yog/yog1.jpg";
import yog2 from "../../assets/yog/yog2.jpg";
import fut from "../../assets/futbolka/fut1.jpg";
import fut1 from "../../assets/futbolka/fut2.jpg";
import fut2 from "../../assets/futbolka/fut3.jpg";
import lata from "../../assets/unversal/sum.jpg";
import lata1 from "../../assets/unversal/sum.jpg";
import lata2 from "../../assets/unversal/sum1.jpg";
import uram1 from "../../assets/unversal/uram1jp0.jpg";
import uram from "../../assets/unversal/uram.jpg";
import uyin from "../../assets/unversal/uyin.jpg";
import uyin1 from "../../assets/unversal/uyin1.jpg";
import uyin2 from "../../assets/unversal/uyin2.jpg";
import soyabon from "../../assets/unversal/soyabon.jpg";
import soyabon1 from "../../assets/unversal/soyabon1.jpg";
import soyabon2 from "../../assets/unversal/soyabon2.jpg";
import tuz from "../../assets/unversal/tuz.jpg";
import shimgich from "../../assets/avto/shimgich.jpg";
import shimgich1 from "../../assets/avto/shimgich1.jpg";
import tel from "../../assets/tel/tel.jpg";
import tel1 from "../../assets/tel/tel1.jpg";
import tel2 from "../../assets/tel/tel3.jpg";
import havo1 from "../../assets/havo/havo1.jpg";
import havo2 from "../../assets/havo/havo2.jpg";
import havo3 from "../../assets/havo/havo.jpg";
import like from "../../assets/savg/lik.svg";
import baho from "../../assets/baho.svg";
import olovv from "../../assets/olov.svg";
import haftaa from "../../assets/hafta.png";
import kros from "../../assets/lampa/kros.jpg";
import kros1 from "../../assets/lampa/kros1.jpg";
import kros2 from "../../assets/lampa/koros2.jpg";
import watch from "../../assets/lampa/watch.jpg";
import watch1 from "../../assets/lampa/watch.1.jpg";
import watch2 from "../../assets/lampa/watch.2.jpg";
import nout from "../../assets/lampa/nout.jpg";
import nout1 from "../../assets/lampa/nout1.jpg";
import sam from "../../assets/lampa/sam.jpg";
import sam1 from "../../assets/lampa/sam1.jpg";
import lampa from "../../assets/lampa/lampa.jpg";
import lampa1 from "../../assets/lampa/lampa1.jpg";
import lampa2 from "../../assets/lampa/lampa2.jpg";
import likiia from '../../assets/savg/lik.png'

const Chilpage = () => {
  const { id } = useParams();
  const childata = [
    {
      id: 1,
      title: `Kungaboqar yog'i Sofia, tozalangan va deodorizatsiyalangan, 1 litr`,
      img: yog,
      img1: yog1,
      img2: yog2,
      narx: 14,
      narxno: 19,
      sotuvchi: ` Sofia Oil:`,
      oyiga: `1 680 `,
      olov: 4,
      hafta: 3342,
    },
    {
      id: 2,
      title: `Asosiy futbolka Samo, bir rangli, uniseks `,
      img: fut,
      img1: fut1,
      img2: fut2,
      narx: 21,
      narxno: 49,
      sotuvchi: ` Samo Store `,
      oyiga: `  2 520 `,
      olov: 720,
      hafta: 200,
    },
    {
      id: 3,
      title: `Avtomobillar uchun mikrofiber latta `,
      img: lata1,
      img1: lata2,
      img2: lata,
      narx: 20,
      narxno: 45,
      sotuvchi: `      eshop `,
      oyiga: `  2 400 `,
      olov: 2,
      hafta: 481,
    },
    {
      id: 4,
      title: `Avtomobil old oynasi uchun quyoshtan himoya`,
      img: uram1,
      img1: uram,
      img2: uram,
      narx: 30,
      narxno: 27,
      sotuvchi: `   avto `,
      oyiga: `  3 420 `,
      olov: 12,
      hafta: 181,
    },
    {
      id: 5,
      title: `  Suv sepadigan to'poncha Water Gun H-994A`,
      img: uyin,
      img1: uyin1,
      img2: uyin2,
      narx: 13,
      narxno: 28,
      sotuvchi: `     gamen `,
      oyiga: `  1   560 `,
      olov: 212,
      hafta: 281,
    },
    {
      id: 6,
      title: `   Old oynasi uchun barqaror soyabon arzon narxlarda `,
      img: soyabon,
      img1: soyabon1,
      img2: soyabon2,
      narx: 60,
      narxno: 147,
      sotuvchi: `  uzum-uz `,
      oyiga: `  2 700 `,
      olov: 52,
      hafta: 81,
    },
    {
      id: 7,
      title: `   Kir yuvish kukuni Зеленый чай Oq atirgul, qo'lda yuvish, 900 g `,
      img: tuz,
      img1: tuz,
      img2: tuz,
      narx: 15,
      narxno: 22,
      sotuvchi: `      eshop `,
      oyiga: `  1 800 `,
      olov: 200,
      hafta: 101,
    },
    {
      id: 8,
      title: `Mashina yuvish uchun shimgich Master Comfort "Egida- `,
      img: shimgich,
      img1: shimgich1,
      img2: shimgich,
      narx: 3,
      narxno: 5,
      sotuvchi: `      eshop `,
      oyiga: `  380 `,
      olov: 122,
      hafta: 50,
    },
    {
      id: 9,
      title: `O'yin smartfon TECNO Pova Neo 2, 6/128 GB, NFC 2SIM `,
      img: tel,
      img1: tel1,
      img2: tel2,
      narx: 1.999,
      narxno: 2.3,
      sotuvchi: `      eshop `,
      oyiga: `  239 000 `,
      olov: 102,
      hafta: 81,
    },
    {
      id: 10,
      title: `   Havo namlagich akkumulyatorli, rangli yoritgichli va metall korpusi `,
      img: havo1,
      img1: havo2,
      img2: havo3,
      narx: 150,
      narxno: 220,
      sotuvchi: `      eshop `,
      oyiga: `  18 000 `,
      olov: 200,
      hafta: 41,
    },
    {
      id: 11,
      title: `Krossovkalar erkaklar uchun, nafas oladigan to'rlik, sport uchun mos`,
      img: kros,
      img1: kros1,
      img2: kros2,
      narx: 109,
      narxno: 399,
      oyiga: `13 080 `,
      sotuvchi: `      eshop `,
      olov: 250,
      hafta: 141,
    },
    {
      id: 12,
      title: `Aqlli Fitness bilaguzuk HUAWEI Band 7`,
      img: watch,
      img1: watch1,
      img2: watch2,
      narx: 499,
      narxno: 729,
      oyiga: `59 880 `,
      sotuvchi: `      eshop `,
      olov: 20,
      hafta: 41,
    },
    {
      id: 13,
      title: ` Noutbuk uchun ryukzak va hujjatlar uchun 15.6 va 17.3 USB bilan`,
      img: nout,
      img1: nout1,
      img2: nout1,
      narx: 152,
      narxno: 300,
      sotuvchi: `      eshop `,
      oyiga: `23 400 `,
      olov: 240,
      hafta: 51,
    },
    {
      id: 14,
      title: `  Освежитель для авто - вертолет`,
      img: sam,
      img1: sam1,
      img2: sam1,
      narx: 67,
      narxno: 80,
      oyiga: `8 040 `,
      sotuvchi: `      eshop `,
      olov: 120,
      hafta: 91,
    },
    {
      id: 15,
      title: ` LED lampalar H4 linzali A7 LED, 6000K 2 dona, old oyna himoyachilari kiritilgan`,
      img: lampa,
      img1: lampa1,
      img2: lampa2,
      narx: 285,
      narxno: 325,
      oyiga: `34 200`,
      sotuvchi: `      eshop `,
      olov: 120,
      hafta: 49,
    },
    {
      id: 16,
      title: `Krossovkalar erkaklar uchun, nafas oladigan to'rlik, sport uchun mos`,
      img: kros,
      img1: kros1,
      img2: kros2,
      narx: 109,
      narxno: 399,
      oyiga: `13 080 `,
      sotuvchi: `      eshop `,
      olov: 250,
      hafta: 141,
    },
    {
      id: 17,
      title: `Aqlli Fitness bilaguzuk HUAWEI Band 7`,
      img: watch,
      img1: watch1,
      img2: watch2,
      narx: 499,
      narxno: 729,
      oyiga: `59 880 `,
      sotuvchi: `      eshop `,
      olov: 20,
      hafta: 41,
    },
    {
      id: 18,
      title: ` Noutbuk uchun ryukzak va hujjatlar uchun 15.6 va 17.3 USB bilan`,
      img: nout,
      img1: nout1,
      img2: nout1,
      narx: 152,
      narxno: 300,
      sotuvchi: `      eshop `,
      oyiga: `23 400 `,
      olov: 240,
      hafta: 51,
    },
    {
      id: 19,
      title: `  Освежитель для авто - вертолет`,
      img: sam,
      img1: sam1,
      img2: sam1,
      narx: 67,
      narxno: 80,
      oyiga: `8 040 `,
      sotuvchi: `      eshop `,
      olov: 120,
      hafta: 91,
    },
    {
      id: 20,
      title: ` LED lampalar H4 linzali A7 LED, 6000K 2 dona, old oyna himoyachilari kiritilgan`,
      img: lampa,
      img1: lampa1,
      img2: lampa2,
      narx: 285,
      narxno: 325,
      oyiga: `34 200`,
      sotuvchi: `      eshop `,
      olov: 120,
      hafta: 49,
    },
    {
      id: 21,
      title: `Krossovkalar erkaklar uchun, nafas oladigan to'rlik, sport uchun mos`,
      img: kros,
      img1: kros1,
      img2: kros2,
      narx: 109,
      narxno: 399,
      oyiga: `13 080 `,
      sotuvchi: `      eshop `,
      olov: 250,
      hafta: 141,
    },
    {
      id: 22,
      title: `Aqlli Fitness bilaguzuk HUAWEI Band 7`,
      img: watch,
      img1: watch1,
      img2: watch2,
      narx: 499,
      narxno: 729,
      oyiga: `59 880 `,
      sotuvchi: `      eshop `,
      olov: 20,
      hafta: 41,
    },
    {
      id: 23,
      title: ` Noutbuk uchun ryukzak va hujjatlar uchun 15.6 va 17.3 USB bilan`,
      img: nout,
      img1: nout1,
      img2: nout1,
      narx: 152,
      narxno: 300,
      sotuvchi: `      eshop `,
      oyiga: `23 400 `,
      olov: 240,
      hafta: 51,
    },
    {
      id: 24,
      title: `  Освежитель для авто - вертолет`,
      img: sam,
      img1: sam1,
      img2: sam1,
      narx: 67,
      narxno: 80,
      oyiga: `8 040 `,
      sotuvchi: `      eshop `,
      olov: 120,
      hafta: 91,
    },
    {
      id: 25,
      title: ` LED lampalar H4 linzali A7 LED, 6000K 2 dona, old oyna himoyachilari kiritilgan`,
      img: lampa,
      img1: lampa1,
      img2: lampa2,
      narx: 285,
      narxno: 325,
      oyiga: `34 200`,
      sotuvchi: `      eshop `,
      olov: 120,
      hafta: 49,
    },
  ];

  const post = childata.find((item) => item.id === parseInt(id));
  const { title, sotuvchi, narx, narxno, oyiga, olov, hafta } = post;
  const imageList = [post.img, post.img1, post.img2];
  const [stopa, setStopa] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [styl, setStyl] = useState(
    localStorage.getItem(`styl-${id}`) || "scale(1)"
  );
  const [bloc, setBloc] = useState(localStorage.getItem(`bloc-${id}`) || "");

  const lik = () => {
    setBloc("none");
    localStorage.setItem(`bloc-${id}`, "none");
  };

  const lik1 = () => {
    setStyl("scale(1.1)");
    setBloc("block");
    localStorage.setItem(`styl-${id}`, "scale(1.1)");
    localStorage.setItem(`bloc-${id}`, "block");
  };

  useEffect(() => {
    localStorage.setItem(`styl-${id}`, styl);
    localStorage.setItem(`bloc-${id}`, bloc);
  }, [id, styl, bloc]);

  const changeImage = (step) => {
    let newIndex = currentIndex + step;

    if (newIndex > imageList.length - 1) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = imageList.length - 1;
    }

    setCurrentIndex(newIndex);
  };

  const run = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
  };

  useEffect(() => {
    let interval;
    if (!stopa) {
      interval = setInterval(run, 2000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [stopa]);

  const handlePrevClick = () => {
    changeImage(-1);
    setStopa(true);
  };

  const handleNextClick = () => {
    changeImage(1);
    setStopa(true);
  };

  const [buttonColor, setButtonColor] = useState(
    localStorage.getItem("buttonColor") || "#959cb9"
  );

  useEffect(() => {
    localStorage.setItem("buttonColor", buttonColor);
  }, [buttonColor]);

  const color = () => {
    setButtonColor(buttonColor === "#959cb9" ? "#7000FF" : "#959cb9");
  };

  // inc va dic
  const [count, setCount] = useState(1);

  const handleButtonClick = () => {
    if (count === olov) {
      setCount(1);
    } else {
      setCount(count + 1);
    }
  };
  const handleButtonClick1 = () => {
    if (count === olov) {
      setCount(1);
    } else {
      setCount(count - 1);
    }
  };

  const buttonDisabled = count === olov;
  const buttonDisabled1 = count === 1;
  return (
    <div>
      {post ? (
        <div>
          <div className="tavar">
            <div className="img-Itme">
              {imageList.map((src, index) => (
                <img key={index} src={src} alt="" />
              ))}
            </div>
            <div className="imgscrool">
              <div className="but1">
                <button className="right1" onClick={handlePrevClick}>
                  <i className="fa-solid fa-angle-left"></i>
                </button>
              </div>
              <div className="but2">
                <button className="left1" onClick={handleNextClick}>
                  <i className="fa-solid fa-angle-right"></i>
                </button>
              </div>
              <div
                className="imgsledr"
                style={{ transform: `translateX(${-currentIndex * 100}%)` }}
              >
                <img src={yog} alt="" className="ynon" />
                <img src={yog} alt="" className="ynon" />

                {imageList.map((src, index) => (
                  <img key={index} src={src} alt="" />
                ))}
              </div>
            </div>
            <div className="tavar2">
              <div className="baho">
                <img src={baho} alt="" />
                <p>
                  4.9 ({" "}
                  <abbr title="">
                    {" "}
                    <span>405 baho</span>
                  </abbr>{" "}
                  )<span className="sapan">21000 ta buyurtma</span>
                </p>
                <p className="istak">
                  <img
                    src={like}
                    alt=""
                    className="lik"
                    onClick={lik1}
                    id="lik"
                  />
                  <img
                    src={likiia}
                    alt=""
                    className="liki"
                    id="liki"
                    onClick={lik}
                    style={{ transform: styl, display: bloc }}
                  />
                  <span> Istaklarga</span>
                </p>
              </div>
              <p className="title">{title}</p>
              <div className="sot">
                <p className="sot1">Sotuvchi:</p>{" "}
                <p className="sot2">
                  <u>{sotuvchi}</u>
                </p>
              </div>
              <div className="yetkaz">
                <p className="yet1">Yetkazib berish:</p>{" "}
                <p className="yet2">1 kun, bepul</p>
              </div>
              <hr />
              <div className="miqdor">
                <p className="miq">Miqdor:</p>
                <div className="miqdor-itme">
                  <div className="inc">
                    <button
                      onClick={handleButtonClick1}
                      disabled={buttonDisabled1}
                      className="incc"
                    >
                      <i class="fa-solid fa-minus"></i>
                    </button>
                    <p className="res">{count * 1}</p>
                    <button
                      className="dic"
                      onClick={handleButtonClick}
                      disabled={buttonDisabled}
                    >
                      <i class="fa-regular fa-plus"></i>
                    </button>
                  </div>
                  <div className="mimg">
                    <img src={olovv} alt="" /> <p>Sotuvda {olov} dona bor</p>
                  </div>
                </div>
              </div>
              <div className="narx">
                <p className="narx1">Narx:</p>
                <div className="narx-itme">
                  <h3>{count * narx} 000 so'm</h3>
                  <p>
                    <s>{narxno} 000 so'm</s>
                  </p>
                  <div className="chil">Chilla Bozor</div>
                </div>
              </div>
              <div className="oyiga">
                <div className="oyiga-itme">
                  <p>Oyiga {oyiga} so'mdan</p>
                </div>
                <p> muddatli to'lov</p>
                <i class="fa-solid fa-chevron-right"></i>
              </div>
              <div className="fxs">
                <button className="savatga">Savatga qo'shish</button>
                <button className="tugmani">
                  Tugmani 1 bosishda xarid qilish
                </button>
              </div>
              <div className="hafta">
                <img src={haftaa} alt="" />
                <p> Bu haftada {hafta}kishi sotib oldi</p>
              </div>
            </div>
            <div className="narx111">
              <div className="narx-itme11">
                <p
                  className="narx12"
                  style={{ fontSize: "10px", textAlign: "center" }}
                >
                  Narx umumiy
                </p>
                <h3 style={{ color: "black", fontSize: "18px" }}>
                  {count * narx} 000 so'm
                </h3>
              </div>
              <div className="sav">Savatga</div>
            </div>
          </div>
          <hr className="hh" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Chilpage;
