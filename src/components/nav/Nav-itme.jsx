import React, { useRef, useState } from "react";
import uzm1 from "../../assets/uzm1.svg";
import uzm from "../../assets/uzm.svg";
import katalog from "../../assets/katalog.jpg";
import kirish from "../../assets/kir.png";
import layk from "../../assets/layk.png";
import savat from "../../assets/sumka.png";
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
        <div className="bar" onClick={() => (baraa1 = setBar(`0%`))}>
          <div className="bar1"></div>
          <div className="bar1"></div>
          <div className="bar1"></div>
        </div>

        <div className="bar-menyu" style={{ left: bar }}>
         <div className="barlin">
         <div className="bar-x" onClick={() => (baraa2 = setBar(`-100%`))}>
            <div className="barx"></div>
            <div className="barx1"></div>
            
          </div>
          <div className="kirsh1">
            <p>Kirish</p>/
            <p>Ro'yxatdan o'tish</p>
          </div>
         </div>
         <div className="katalog1">
          <img src={katalog} alt="" />
          <p>Katalog</p>
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
