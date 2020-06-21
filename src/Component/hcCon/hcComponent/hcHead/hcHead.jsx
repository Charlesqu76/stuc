import React from 'react';
import './hcHead.css';
import { baseUrl } from "../../../../constVar.js";
import { converStrToDate } from "../../../../utility.js";


export default function HcHead(props) {
    return (
      <div className="HcHeadCon componCon">
        <div className="HcHeadImgCon">
          <img
            src={baseUrl + props.data.img}
            className="HcHeadImg"
          />
        </div>
        <div className="HcHeadNTCon">
          <a className="HcHeadName">{props.data.name}</a>
          <a className="HcHeadTime">{converStrToDate(props.time)}</a>
        </div>
      </div>
    );
  }