import React, { createRef } from "react";
import "./photoCon.css";

export default class MediaCon extends React.PureComponent {
  constructor(props) {
    super(props);
    this.conDiv = createRef();
  }

  componentDidMount() {
    this.conDiv.current.innerHTML = "";
    this.createMediaCon(this.props.baseUrl, this.props.media);
  }

  componentDidUpdate(prevProps) {
    this.conDiv.current.innerHTML = "";
    this.createMediaCon(this.props.baseUrl, this.props.media);
  }

  changeImg = (baseUrl, url, imgWidth, imgHeight = 200) => {
    let imgConDiv = document.createElement("div");
    imgConDiv.className = "singleImgConDiv";
    imgConDiv.style.width = imgWidth;
    imgConDiv.style.height = imgHeight;
    // console.log(imgConDiv);
    let img = new Image();
    img.src = baseUrl + url;
    img.onload = function () {
      let oldHeight = this.height; //照片原始高度
      let oldWidth = this.width; //照片原始宽度
      this.width = imgWidth; //div 宽度
      this.height = imgHeight; //div 高度
      let scaleHeight = (this.width * oldHeight) / oldWidth; //等比例缩放高度
      if (scaleHeight > imgHeight) {
        this.height = imgWidth;
        this.width = (scaleHeight * oldWidth) / oldHeight;
      } else if (scaleHeight < imgHeight) {
        this.height = imgWidth;
        this.width = (scaleHeight * oldWidth) / oldHeight;
      }
      // console.log(this.height, scaleHeight);
    };
    imgConDiv.append(img);
    return imgConDiv;
  };
  createMediaCon = (baseUrl, object) => {
    let this_ = this;
    let mediaNum = object.length;
    let conDivWidth = this.conDiv.current.clientWidth - 30;
    // console.log(conDivWidth);
    if (mediaNum === 1) {
      let media = new Image();
      media.src = baseUrl + object[0].photo_video;
      media.onload = function () {
        if (this.width > 480) {
          let oldWidth = this.width;
          let oldHeight = this.height;
          this.width = conDivWidth;
          this.height = (this.width * oldHeight) / oldWidth;
        }
        this.style.borderRadius = 10 + "px";
        this_.conDiv.current.append(media);
      };
    } else if (mediaNum === 2) {
      let imgWidth = conDivWidth / 2 - 10;
      let imgHeight = 300;
      object.map((medias) => {
        this.conDiv.current.append(
          this.changeImg(baseUrl, medias.photo_video, imgWidth, imgHeight),
        );
      });
    } else if (mediaNum === 3) {
      let imgWidth = conDivWidth / 3 - 10;
      object.map((medias) => {
        this.conDiv.current.append(
          this.changeImg(baseUrl, medias.photo_video, imgWidth),
        );
      });
    } else if (mediaNum === 4) {
      let imgWidth = conDivWidth / 2 - 10;
      object.map((medias) => {
        this.conDiv.current.append(
          this.changeImg(baseUrl, medias.photo_video, imgWidth, imgWidth),
        );
      });
    } else {
      let imgWidth = conDivWidth / 3 - 10;
      object.map((medias) => {
        this.conDiv.current.append(
          this.changeImg(baseUrl, medias.photo_video, imgWidth),
        );
      });
    }
  };

  render() {
    return <div className="mediaCon" ref={this.conDiv} />;
  }
}
