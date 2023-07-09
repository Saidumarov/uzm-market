import React from "react";
import "./biz.css";
import aple from "../../assets/apple.svg";
import gog from "../../assets/gog.svg";
import ins from "../../assets/insta.jpg";
import tel from "../../assets/tel.jpg";
import yout from "../../assets/yutub.jpg";
import fas from "../../assets/fas.jpg";


const BIz = () => {
  return (
    <div>
      <div className="bcon">
        <div className="b1" style={{ marginLeft: "0px" }}>
          <p>
            <b>Biz haqimizda</b>
          </p>
          <p>Topshirish punktlari</p> <p>Vakansiyalar</p>
        </div>
        <div className="b1">
          <p>
            <b>Foydalanuvchilarga</b>
          </p>
          <p>Biz bilan bogʻlanish</p> <p>Savol-Javob</p>
        </div>
  
        <div className="b1">
          <p>
            <b>Tadbirkorlarga </b>
          </p>
          <p>Uzumda soting</p> <p>Sotuvchi kabinetiga kirish</p>
        </div>
        <div className="b2">
          <p>
            <b> Ilovani yuklab olish</b>
          </p>
          <div className="p">
            {" "}
            <img src={aple} alt="" /> <p> AppStore </p> <img src={gog} alt="" style={{marginLeft:"20px"}} />{" "}
            <p>Google Play</p>
          </div>
          <div className="b3">
            <p>
              <b>Uzum ijtimoiy tarmoqlarda</b>
            </p>
            <div className="imgg">
              <img src={ins} alt="" className="im1" />
              <img src={tel} alt="" className="im2" />
              <img src={yout} alt="" className="im3" />
              <img src={fas} alt="" className="im4" />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BIz;
