import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Chillamenyu = ( childata ) => {
  
 const [post,setPost] = useState()
 const {  body, title, img, narx, narxno } = childata


  return (
    <div>
         {
        post ? (
          <div>
          <div className="tavar">
            <div className="bat">
              <img src={img } alt="Image not found" />
            </div>
            <div className="bat1">
              <h4>{title}</h4>
              <h3>{narx}</h3>
              <h2>{narxno}</h2>
              <h2>{body}</h2>
            </div>
          </div>
        </div>
        ) :""
      
      }
 
  </div>
  );
};

export default Chillamenyu;


