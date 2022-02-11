import React from "react";
import BasicSelect from "../Select/SelectComp";
import s from "./World.module.css";

const World = (props) => {
  return (
    <div className={s.content}>
      <div>
        Дата 
        Дата
        <BasicSelect name="Case" />
      </div>
      <div>График</div>
    </div>
  );
};

export default World;
