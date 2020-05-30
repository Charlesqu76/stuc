import React from "react";
import ChoiceCon from "./cpt/ChoiceCon.jsx";
import ELine from "./echartCpt/eline.jsx";
import ERadar from "./echartCpt/eradar.jsx";
import EMap from "./echartCpt/emap.jsx";
import EBar from "./echartCpt/ebar.jsx";

export default class Ana extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "",
      shape: "",
      model: "",
      area: "",
    };
  }

  render() {
    return (
      <div className="contentBody">
        <AnaChoice />
        <div className="anaBody">
          <div className="anaFirCon">
            <div className="mapCon">
              <EMap id="map1" />
            </div>
            <div className="lineCon">
              <div className = 'lineSubCon'>
                <ELine id="line1" />
              </div>
              <div className = 'lineSubCon'>
                <ELine id="line2" />
              </div>
              <div className = 'lineSubCon'>
                <ELine id="line3" />
              </div>
            </div>
          </div>
          <div className="anaSecCon">
            <div className="radarCon">
              <ERadar id="radar1" />
            </div>
            <div className="barCon">
              <EBar id="bar1" />
            </div>
            <div className="cmtCom">
              <header>用户典型评论</header>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class AnaChoice extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  handleChange = (id, value) => {
    this.setState({ [id]: value });
  };

  render() {
    console.log(this.state);
    return (
      <div className="AnaChoiceCom">
        <ChoiceCon
          handleChange={this.handleChange}
          data={{
            labelName: "品牌",
            conId: "brand",
            choice: [
              { id: "audi", text: "奥迪" },
              { id: "benchi", text: "奔驰" },
            ],
          }}
        />
        <ChoiceCon
          handleChange={this.handleChange}
          data={{
            labelName: "外形",
            conId: "shape",
            choice: [
              { id: "suv", text: "SUV" },
              { id: "car", text: "轿车" },
            ],
          }}
        />
        <ChoiceCon
          handleChange={this.handleChange}
          data={{
            labelName: "车型",
            conId: "model",
            choice: [
              { id: "Q7", text: "奥迪Q7" },
              { id: "Q8", text: "奥迪Q8" },
            ],
          }}
        />
        <ChoiceCon
          handleChange={this.handleChange}
          data={{
            labelName: "区域",
            conId: "area",
            choice: [
              { id: "east", text: "东区" },
              { id: "north", text: "北区" },
            ],
          }}
        />
      </div>
    );
  }
}
