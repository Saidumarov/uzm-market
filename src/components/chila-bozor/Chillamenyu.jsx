import React from "react";
import { Link } from "react-router-dom";

const Chillamenyu = ({ id, body, title, img, narx, narxno }) => {
  
  return (
    <div>
      <Link to={`/post/roduct/single/${id}`} state={{ body, title }}>
        <h1>{body}</h1>
        <h1>{title}</h1>
      </Link>
    </div>
  );
};

export default Chillamenyu;

