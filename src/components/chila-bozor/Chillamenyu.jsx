import React from "react";
import { Link } from "react-router-dom";
import "./chilla.css";
import baho from "../../assets/baho.svg";
import savat from "../../assets/savatcha.png";


const Chillamenyu = ({ id, body, title, img, narx, narxno, oyiga ,}) => {
  return (
    <div>
      <Link to={`/post/roduct/single/${id}`} className="a">
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
            <div className="xisobot">
          <div className="nar">
          <p className="narx11"><s>{narxno} 000 so'm</s></p>
              <p className="narx12">{narx} 000 so'm</p>
          </div>
             <div className="sev">
             <img src={savat} alt="" />
              <span className="plus">
                +
              </span>
             </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Chillamenyu;
