import React, { useState } from "react";
import "./biz.css";
import aple from "../../assets/apple.svg";
import gog from "../../assets/gog.svg";
import ins from "../../assets/insta.jpg";
import tel from "../../assets/tel.jpg";
import yout from "../../assets/yutub.jpg";
import fas from "../../assets/fas.jpg";

const BIz = () => {
  const [widt, setWidt] = useState();
  const [widt1, setWidt1] = useState();
  const [widt2, setWidt2] = useState();
  const [widtt, setWidtt] = useState();
  const [widtt1, setWidtt1] = useState();
  const [widtt2, setWidtt2] = useState();



  const click = () => {
    if (click) {
      setWidt(`80px`);
      setWidt1(`1px`);
      setWidt2(`1px`);
      setWidtt(`180deg`)
      setWidtt1(`0deg`)
      setWidtt2(`0deg`)
    }
  };
  const click1 = () => {
    if (click1) {
      setWidt(`1px`);
      setWidt2(`1px`);
      setWidt1(`80px`);
      setWidtt(`0deg`)
      setWidtt1(`180deg`)
      setWidtt2(`0deg`)

    }
  };
  const click2 = () => {
    if (click2) {
      setWidt(`1px`);
      setWidt1(`1px`);
      setWidt2(`80px`);
      setWidtt(`0deg`)
      setWidtt1(`0deg`)
      setWidtt2(`180deg`)

    }
  };
  return (
    <div>
      <div className="bcon">
        <div className="b1" style={{ marginLeft: "0px" }}>
          <p>
            <b className="no" onClick={click}>
              Biz haqimizda <i class="fa-solid fa-angle-down" style={{transform:`rotate(${widtt})`}}></i>
            </b>
            <b className="no1">Biz haqimizda</b>
          </p>
          <div className="vp" style={{ height: widt }}>
            <p>Topshirish punktlari</p> <p>Vakansiyalar</p>
          </div>{" "}
          <div className="hr"></div>
        </div>
        <div className="b1">
          <p>
            <b className="no" onClick={click1}>
              Foydalanuvchilarga <i class="fa-solid fa-angle-down"  style={{transform:`rotate(${widtt1})`}}></i>
            </b>
            <b className="no1">Foydalanuvchilarga</b>
          </p>
          <div className="vp" style={{ height: widt1 }}>
            <p>Biz bilan bogʻlanish</p> <p>Savol-Javob</p>
          </div>
          <div className="hr"></div>
        </div>

        <div className="b1" id="tt">
          <p>
            <b className="no1">Tadbirkorlarga </b>
            <b className="no" onClick={click2}>
              Tadbirkorlarga <i class="fa-solid fa-angle-down"  style={{transform:`rotate(${widtt2})`}}></i>
            </b>
          </p>
          <div className="vp" style={{ height: widt2 }}>
            {" "}
            <p>Uzumda soting</p> <p>Sotuvchi kabinetiga kirish</p>
          </div>
        </div>
        <div className="b2">
          <p>
            <b> Ilovani yuklab olish</b>
          </p>
          <div className="p">
            <a href="https://apps.apple.com/ru/app/uzum-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82-%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD/id1640483056">
              {" "}
              <div className="ap">
                <img src={aple} alt="" /> <p className="a"> AppStore </p>
              </div>
            </a>
            <a href="https://play.google.com/store/apps/details?id=uz.uzum.app">
              {" "}
              <div className="go">
                {" "}
                <img src={gog} alt="" style={{ marginLeft: "20px" }} />
                <p>Google Play</p>
              </div>
            </a>
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
