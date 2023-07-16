import React, { useEffect, useState } from "react";
import "./biz.css";
import aple from "../../assets/apple.svg";
import gog from "../../assets/gog.svg";
import ins from "../../assets/savg/ins.svg";
import tel from "../../assets/savg/tel.svg";
import yout from "../../assets/savg/yo.svg";
import fas from "../../assets/savg/fas.svg";
import tepa from "../../assets/savg/tepa.svg";
import mac from "../../assets/savg/mac.svg";
import go from "../../assets/savg/go.svg";
import pas from "../../assets/savg/pas.svg";

const BIz = () => {
  const [widt, setWidt] = useState("1px");
  const [widt1, setWidt1] = useState("1px");
  const [widt2, setWidt2] = useState("1px");
  const [widtt, setWidtt] = useState("0deg");
  const [widtt1, setWidtt1] = useState("0deg");
  const [widtt2, setWidtt2] = useState("0deg");
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsActive(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const click = () => {
    setWidt("80px");
    setWidt1("1px");
    setWidt2("1px");
    setWidtt("180deg");
    setWidtt1("0deg");
    setWidtt2("0deg");
  };

  const click1 = () => {
    setWidt("1px");
    setWidt2("1px");
    setWidt1("80px");
    setWidtt("0deg");
    setWidtt1("180deg");
    setWidtt2("0deg");
  };

  const click2 = () => {
    setWidt("1px");
    setWidt1("1px");
    setWidt2("80px");
    setWidtt("0deg");
    setWidtt1("0deg");
    setWidtt2("180deg");
  };

  return (
    <div>
      <div className="bcon">
        <div className="b1" style={{ marginLeft: "0px" }}>
          <p>
            <b className="no" onClick={click}>
              Biz haqimizda{" "}
              <img
                src={pas}
                alt=""
                className="noimg"
                style={{ transform: `rotate(${widtt})` }}
              />
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
              Foydalanuvchilarga{" "}
              <img
                src={pas}
                alt=""
                className="noimg"
                style={{ transform: `rotate(${widtt1})` }}
              />
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
              Tadbirkorlarga
              <img
                src={pas}
                alt=""
                className="noimg"
                style={{ transform: `rotate(${widtt2})` }}
              />
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
              <div className="ap">
                <img src={aple} alt="" /> <p className="a"> AppStore </p>
              </div>
              <div className="ap1">
                <img src={mac} alt="" />
              </div>
            </a>
            <a href="https://play.google.com/store/apps/details?id=uz.uzum.app">
              <div className="go">
                <img src={gog} alt="" style={{ marginLeft: "20px" }} />
                <p>Google Play</p>
              </div>
              <div className="go1">
                <img src={go} alt="" />
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
      <div className="bot"></div>
      <div className="bot1">
        <div className="pbb">
          <p className="bp1">Maxfiylik kelishuvi</p>
          <p className="bp2">Foydalanuvchi kelishuvi</p>
        </div>
        <p className="bp3">
          «2023© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar
          himoyalangan»
        </p>
      </div>
      <a href="#">
        <div className={`tepaga ${isActive ? 'activ' : ''}`}>
          <img src={tepa} alt="" />
        </div>
      </a>
    </div>
  );
};

export default BIz;
