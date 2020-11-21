import React from "react";
import ReactDOM from "react-dom";
import style from "./Modal.css";
import { creareModalSingleInstace } from "app/libs/utility/singleInstance.js";

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: this.props.show,
    };
  }

  changeShow = (fn) => {
    fn();
  };

  render() {
    const { children } = this.props;
    return this.state.show ? (
      <ModalContainer children={children} changeShow={this.changeShow} />
    ) : null;
  }
}

class ModalContainer extends React.Component {
  constructor(props) {
    super(props);
    this.conDiv = null;
    this.creareModalSingleInstace = creareModalSingleInstace.bind(this);
  }

  createModalDiv = () => {
    let modalContainer = document.createElement("div");
    modalContainer.className = style.ModelContainer;
    modalContainer.onclick = function () {
      this.style.display = "none";
    };
    this.conDiv = modalContainer;
    document.body.appendChild(modalContainer);

    let modalMask = document.createElement("div");
    modalMask.className = style.ModelMask;
    modalContainer.appendChild(modalMask);

    let modalContentContainer = document.createElement("div");
    modalContentContainer.className = style.ModelContentCon;
    modalContainer.appendChild(modalContentContainer);
    modalContentContainer.onclick = function (e) {
      e.stopPropagation();
    };
    return modalContentContainer;
  };

  createModelContentContainer = () => {
    let modalContentContainer = this.creareModalSingleInstace(
      this.createModalDiv
    );
    return modalContentContainer;
  };

  shouldComponentUpdate() {
    let that = this;
    this.props.changeShow(function () {
      that.conDiv ? (that.conDiv.style.display = "flex") : null;
    });
    return false;
  }
  render() {
    const { children } = this.props;
    return ReactDOM.createPortal(children, this.createModelContentContainer());
  }
}
