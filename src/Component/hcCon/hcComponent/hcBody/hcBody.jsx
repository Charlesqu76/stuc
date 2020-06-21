import React from 'react';
import './hcBody.css'
import MediaCon from "../../../photoCon/mediaCon.jsx";
import { baseUrl } from "../../../../constVar.js";


export default function HcBodyCon(props) {
    return (
      <div className="HcBodyCon componCon">
        {props.cmt && <p>{props.cmt}</p>}
        {props.media.length !== 0 && (
          <MediaCon media={props.media} baseUrl={baseUrl} />
        )}
      </div>
    );
  }