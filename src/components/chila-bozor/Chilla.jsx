import React, { useState } from "react";

const Chilla = () => {
const [ state , setState] = useState()

  return (
    <div>
      <h2 className="bb"><b>Chilla Bozor </b> <i class="fa-solid fa-chevron-right"></i></h2>
    <div className="mobilchil">
      <p className="mobc" onClick={() => click = setState(`8%`)}>Chilla Bozor</p>
      <p className="mobc"onClick={() => click1 = setState(`41%`)} >Mashhur</p>
      <p className="mobc"onClick={() => click2 = setState(`70%`)}>Yangi</p>
      <div className="scle" style={{left:state}}></div>
    </div>
    </div>
  );
};

export default Chilla;
