import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./nav.css";
import img from "../../assets/savg/joy.svg";
import uz from "../../assets/savg/uz.svg";
import NavItme from "./Nav-itme";
import Navmenyu from "./Nav-menyu";
import BIz from "../Biz-Haqimizda/BIz";
import Reklama from "../reklama/Reklama";
const Nav = () => {
  return (
    <div className="wrapper">
      <Reklama/>
      <div className="nav">
      <div className="kun1">
            Buyurtmangizni 1 kunda bepul yetkazib beramiz!
          </div>
        <div className="nav-itme">
          <div className="img">
            <img src={img} alt="" />
            <p>
              Shahar:
              <span>
                <>
                  <u>Toshkent</u>
                </>
              </span>
            </p>
          </div>
          <div className="topshir">Topshirish punktlari</div>
          <div className="kun">
            Buyurtmangizni 1 kunda bepul yetkazib beramiz!
          </div>
          <div className="savol">
            <p> Savol-javoblar</p>
            <p style={{ paddingLeft: "20px" }}>Buyurtmalarim</p>
          </div>
          <div className="uz">
            <img src={uz} alt="" />
          <p>  O'zbekcha</p>
          </div>
        </div>
      </div>
      <NavItme />
      <Navmenyu/>
      <Outlet/>
      <BIz/>
    </div>
  );
};

export default Nav;
