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
import baho from "../../assets/baho.svg";
import olovv from "../../assets/olov.svg";
import haftaa from "../../assets/hafta.png";

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
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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
      id: 9,
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
      id: 10,
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
  ];

  const post = childata.find((item) => item.id === parseInt(id));
  const { title, sotuvchi, narx, narxno, oyiga, olov, hafta } = post;
  const imageList = [post.img, post.img1, post.img2];
  const [stopa, setStopa] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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
                style={{ transform: `translateX(${-currentIndex * 400}px)` }}
              >
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
                  <i
                    class="fa-solid fa-heart"
                    onClick={color}
                    style={{ color: buttonColor }}
                  ></i>
               <span>   Istaklarga</span>
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
                    <img src={olovv} alt="" />{" "}
                    <p>Bor-yo'gi {olov} dona qoldi</p>
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
