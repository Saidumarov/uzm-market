import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./nav.css";
import img from "../../assets/la.png";
import uz from "../../assets/uz.png";
import NavItme from "./Nav-itme";
import Navmenyu from "./Nav-menyu";
const Nav = () => {
  return (
    <div className="wrapper">
      <div className="nav">
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
            O'zbekcha
          </div>
        </div>
      </div>
      <NavItme />
      <Navmenyu/>
      <Outlet/>
    </div>
  );
};

export default Nav;
