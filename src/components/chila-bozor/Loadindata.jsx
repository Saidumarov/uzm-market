import React from "react";
import Loadingitme from "./Loadingitme";

const Loadindata = () => {
  const load = [{}, {}, {}, {}, {},{}, {}, {}, {}, {}];
  return (
    <div className="data1">
      {load.map((itme) => (
        <Loadingitme {...itme} />
      ))}
    </div>
  );
};

export default Loadindata;
