import React, { useRef } from "react";
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
  return (
    <div>
      <div className="navitme">
        <div className="uzm">
       <Link to='/'><img src={uzm} alt="" /></Link>
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
