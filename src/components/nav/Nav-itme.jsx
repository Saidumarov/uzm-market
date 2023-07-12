import React, { useRef, useState } from "react";
import uzm1 from "../../assets/uzm1.svg";
import uzm from "../../assets/uzm.svg";
import katalog from "../../assets/savg/kat.svg";
import kirish from "../../assets/savg/odam.svg";
import layk from "../../assets/savg/like.svg";
import savat from "../../assets/savg/savatt.svg";
import savat1 from "../../assets/savg/savat.svg";
import bara from "../../assets/savg/bar.svg";
import barax from "../../assets/savg/barx.svg";
import pas from "../../assets/savg/pas.svg";
import joy from "../../assets/savg/joy.svg";
import xar from "../../assets/savg/xarita.svg";
import savol from "../../assets/savg/suroq.svg";
import email from "../../assets/savg/email.svg";
import uz from "../../assets/savg/uz.svg";
import ilova from "../../assets/ilova.png"

import { Link } from "react-router-dom";
const NavItme = () => {
  const inputref = useRef(null);
  const click = (e) => {
    e.preventDefault();
    reset();
  };
  const reset = () => {
    if (inputref.current) {
      inputref.current.value = "";
    }
  };

  const [bar, setBar] = useState();

  return (
    <div>
      <div className="navitme">
        <div className="bar" onClick={() => setBar(`0%`)}>
          <img src={bara} alt="" />
        </div>

        <div className="bar-menyu" style={{ left: bar }}>
          <div className="barlin">
            <div className="bar-x" onClick={() => setBar(`-100%`)}>
              <img src={barax} alt="" />
            </div>
            <div className="kirsh1">
              <p>Kirish</p>/<p>Ro'yxatdan o'tish</p>
            </div>
          </div>
          <div className="katalog1">
            <img src={katalog} alt="" className="katim" />
            <p>Katalog</p>
            <img src={pas} alt="" className="katim1" />
          </div>
          <div className="bar-man">
            <div className="buy">
              <img src={savat1} alt="" />
              <p className="bar-p">Buyurtmalarim</p>
            </div>
            <div className="sar">
              <img src={layk} alt="" />
              <p className="bar-p">Saralangan</p>
            </div>
            <div className="joyla">
              <img src={joy} alt="" />
              <p className="bar-p"> Shahar: Toshkent</p>
            </div>
            <div className="xarit">
              <img src={xar} alt="" />
              <p className="bar-p">Topshirish punkti</p>
            </div>
            <hr />
            <div className="savol1">
              <img src={savol} alt="" />
              <p className="bar-p">Savol-javoblar</p>
            </div>
            <div className="email">
              <img src={email} alt="" />
              <p className="bar-p">Biz bilan bog'lanish</p>
            </div>
            <div className="ilova">
              <img src={ilova} alt="" />
              Uzum ilovasi</div>
            <div className="til">
              <img src={uz} alt="" />
              <p className="bar-p">Sayt tili: Оʻzbekcha</p>
            </div>
            <hr />
            <div className="biz">
              <p className="bar-p">Biz haqimizda</p>
              <img src={pas} alt="" className="katim1" />
            </div>
            <hr />
            <div className="hamkor">
              <p className="bar-p">Hamkorlarga</p>
              <img src={pas} alt="" className="katim1" />
            </div>
           
          </div>
        </div>
        <div className="uzm">
          <Link to="/">
            <img src={uzm} alt="" className="uzmm1" />
            <img src={uzm1} alt="" className="uzmm" />
          </Link>
        </div>
        <div className="katalog">
          <img src={katalog} alt="" />
          <p>Katalog</p>
        </div>
        <form>
          <input
            type="text"
            placeholder="Mahsulotlar va turkumlarini izlash"
            ref={inputref}
          />
          <button className="btn" type="submit" onClick={click}>
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
        <div className="kirsh">
          <img src={kirish} alt="" />
          <p> Kirish</p>
        </div>
        <div className="sara">
          <img src={layk} alt="" />
          <p> Saralangan</p>
        </div>
        <div className="savat">
          <img src={savat} alt="" />
          <p> Savat</p>
        </div>
      </div>
    </div>
  );
};

export default NavItme;
