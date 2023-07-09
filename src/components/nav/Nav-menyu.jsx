import React from "react";
import oo from "../../assets/paiment.png";
const Navmenyu = () => {
  return (
    <div>
      <div className="navmenyu">
        <div className="nav1">
          <img src={oo} alt="" />
          <p className="nasiya">Halol nasiya</p>
        </div>
        <div className="nav2">
          Elektronika
          <div className="efkt"></div>
        </div>
        <div className="nav2" id="nav3">
          Maishiy-texnika
          <div className="efkt1"></div>
        </div>
        <div className="nav2" id="nav2">
          Kiyim
          <div className="efkt2"></div>
        </div>
        <div className="nav2">
          Poyabzallar
          <div className="efkt3"></div>
        </div>
        <div className="nav2">
          Aksessuarlar
          <div className="efkt4"></div>
        </div>
        <div className="nav2">
          Goʻzallik
          <div className="efkt5"></div>
        </div>
        <div className="nav2">
          Salomatlik
          <div className="efkt6"></div>
        </div>
        <div className="nav2" id="nav1">
          Uy-roʻzgʻor-buyumlari
          <div className="efkt7"></div>
        </div>
        <div className="nav2">
          Qurilish-va-taʼmirlash
          <div className="efkt8"></div>
        </div>
        <div className="nav2">
          Avtotovarlar
          <div className="efkt9"></div>
        </div>
        <div className="nav2">
          Yana<i class="fa-solid fa-angle-down"></i>
          <div className="efkt10"></div>
        </div>
      </div>
    </div>
  );
};

export default Navmenyu;
