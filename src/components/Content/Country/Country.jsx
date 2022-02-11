import React from "react";
import BasicSelect from "../Select/SelectComp";
import s from "./Country.module.css";

const Country = (props) => {
  return (
    <div className={s.content}>
      <div>
        Дата
        <BasicSelect name="Country"/>
        <BasicSelect name="Case"/>
      </div>
      <div>График</div>
    </div>
  );
};
export default Country;
