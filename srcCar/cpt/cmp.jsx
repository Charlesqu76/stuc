import React from "react";
import QuaryBox from "./cpt/QuaryBox.jsx";
import MulChoiceCon from "./cpt/MulChoiceCon.jsx";
import RangeSlider from "./cpt/slider.jsx";
import ELine from "./echartCpt/eline.jsx";
import EBarHor from "./echartCpt/ebarHor.jsx";
import ERadar from "./echartCpt/eradar.jsx";

export default class Cmp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="contentBody">
        <CmpChoice />
        <CmpBody />
      </div>
    );
  }
}
class CmpChoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shape: "suv",
      power: "fuel",
    };
  }
  shapeClike = (id) => {
    this.setState({ shape: id });
  };
  powerClick = (id) => {
    this.setState({ power: id });
  };
  render() {
    return (
      <div className="cmpNav">
        <div className="cmpNavFir">
          <QuaryBox
            data={{
              labelName: "外形",
              dafault: "suv",
              choice: [
                { id: "suv", text: "SUV" },
                { id: "limousine", text: "轿车" },
                { id: "mpv", text: "MPV" },
              ],
            }}
            handlePower={this.shapeClike}
          />
          <QuaryBox
            data={{
              labelName: "动力",
              dafault: "fuel",
              choice: [
                { id: "fuel", text: "燃油车" },
                { id: "hybird", text: "混动" },
                { id: "new", text: "新能源" },
              ],
            }}
            handlePower={this.powerClick}
          />
        </div>
        <div className="cmpNavSec">
          <RangeSlider />
          <RangeSlider />
        </div>
        <div className="cmpNavThr">
          <MulChoiceCon />
        </div>
      </div>
    );
  }
}
class CmpBody extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="cmpBody">
        <div className="cmpBodyFir">
          <div className="cmpBodyFirSubCon">
            <ELine id="line1" />
          </div>
          <div className="cmpBodyFirSubCon">
            <ELine id="line2" />
          </div>
        </div>
        <div className="cmpBodySec">
          <div className="cmpBodySecSubCon">
            <ELine id="line3" />
          </div>
          <div className="cmpBodySecSubCon">
            <ERadar id="radar1" />
          </div>
        </div>
        <div className="cmpBodyThi">
          <div className="cmpBodyThiSubCon">
            <EBarHor id="barHor1" />
          </div>
        </div>
        <div className="cmpBodyFor">
          <div className="cmpBodyForSubCon">
            <EBarHor id="barHor2" />
          </div>
        </div>
      </div>
    );
  }
}
