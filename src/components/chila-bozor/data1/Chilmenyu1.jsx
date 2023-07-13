import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../chilla.css";
import baho from "../../../assets/baho.svg";
import savat from "../../../assets/savg/savat+.svg";
import like from "../../../assets/savg/lik.svg";
import liki from "../../../assets/savg/lik.png";


const Chilmenyu1 = ({ id, body, title, img, narx, narxno, oyiga   }) => {
  const [styl, setStyl] = useState(localStorage.getItem("styl") || "scale(1)");
  const [bloc, setBloc] = useState(localStorage.getItem("bloc") || "");

  const lik = () => {
    setBloc("none");
    localStorage.setItem("bloc", "none");
  };

  const lik1 = () => {
    setStyl("scale(1.1)");
    setBloc("block");
    localStorage.setItem("styl", "scale(1.1)");
    localStorage.setItem("bloc", "block");
  };

  useEffect(() => {
    localStorage.setItem("styl", styl);
    localStorage.setItem("bloc", bloc);
  }, [styl, bloc]);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setScreenWidth(window.innerWidth || document.documentElement.clientWidth)};

  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  // if (screenWidth < 1290) {
  // if (id === 15) {
  //   return
  // }
  // }

  return (
    <div className="wrr">
      <img src={like} alt="" className="lik" onClick={lik1} />
      <img
        src={liki}
        alt=""
        className="liki"
        onClick={lik}
        style={{ transform: styl, display: bloc }}/>

      <Link to={`/post/roduct/single/${id}`} className="a">
        <div className="clas">
          <div className="content">
            <div className="conimg">
              <img src={img} alt="" />
              <div className="chibozor">{title}</div>
            </div>
            <div className="conimg-itme">
              <p className="bo">{body}</p>
              <div className="baho1">
                <img src={baho} alt="" />
                <p>
                  4.9 (
                  <abbr title="">
                    <span>405 baho</span>
                  </abbr>
                  )
                </p>
              </div>
              <div className="oyiga1">
                <p>{oyiga}so'm/oyiga</p>
              </div>
            </div>
          </div>
          <div className="xisobot">
            <div className="nar">
              <p className="narx11">
                <s>{narxno} 000 so'm</s>
              </p>
              <p className="narx12">{narx} 000 so'm</p>
            </div>
          </div>
        </div>
      </Link>
      <div className="sev">
        <img src={savat} alt="" />
      </div>

    </div>
  );
};

export default Chilmenyu1;
