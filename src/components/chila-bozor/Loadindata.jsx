import React from "react";
import Loadingitme from "./Loadingitme";

const Loadindata = () => {
  const load = [{}, {}, {}, {}, {},{}, {}, {}, {}, {}];
  return (
    
  <div>
    <div className="cload"><div className="lo6"></div></div>
      <div className="data1">
      {load.map((itme) => (
        <Loadingitme {...itme} />
      ))}
    </div>
  </div>
  );
};

export default Loadindata;
