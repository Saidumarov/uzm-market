import React from "react";
import Loadingitme from "./Loadingitme";

const Loadindata = () => {
  const load = [{}, {}, {}, {}, {},{}, {}, {}, {}, {}];
  return (
    
  <div>
    <div className="cload"><div className="lo6"></div></div>
    <div className="cload1">
      <div className="loo1"><div className="lo7"></div></div>
      <div className="loo2"><div className="lo8"></div></div>
      <div className="loo3"><div className="lo9"></div></div>

    </div>
      <div className="data1">
      {load.map((itme) => (
        <Loadingitme {...itme} />
      ))}
    </div>
  </div>
  );
};

export default Loadindata;
