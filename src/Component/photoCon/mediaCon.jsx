import React, { createRef } from "react";
import "./photoCon.css";
import { useRef } from "react";
import { useEffect } from "react";
const getConWidthHeight = (conDivWidth, imgLen) => {
  let imgConWidth;
  let imgConHeight;
  if (imgLen === 1) {
    imgConWidth = conDivWidth - 10;
    imgConHeight = imgConWidth;
  } else if (imgLen === 2 || imgLen === 4) {
    imgConWidth = conDivWidth / 2 - 10;
    imgConHeight = imgConWidth;
  } else if (
    imgLen === 3 ||
    imgLen === 5 ||
    imgLen === 6 ||
    imgLen === 7 ||
    imgLen === 9
  ) {
    imgConWidth = conDivWidth / 3 - 10;
    imgConHeight = imgConWidth;
  } else if (imgLen === 8) {
    imgConWidth = conDivWidth / 4 - 10;
    imgConHeight = imgConWidth;
  }
  return {
    imgConWidth: Math.round(imgConWidth),
    imgConHeight: Math.round(imgConHeight),
  };
};

const getBackgroundSize = (conWidth, conHeight, imgWith, imgHeight) => {
  let mulScale = conWidth / imgWith;
  return {
    mulScale: mulScale,
    height: mulScale * imgHeight - conHeight,
  };
};

export default MediaCon;
function MediaCon(props) {
  const conDiv = useRef();
  useEffect(() => {
    conDiv.current.innerHTML = "";
    createMediaCon(props.baseUrl, props.media);
  }, [props]);

  const changeImg = (baseUrl, url, imgConWidth, imgConHeight) => {
    let imgConDiv = document.createElement("div");
    imgConDiv.className = "singleImgConDiv";
    imgConDiv.style.width = `${imgConWidth}px`;
    imgConDiv.style.height = `${imgConHeight}px`;
    imgConDiv.style.backgroundImage = `url(${baseUrl + url}`;
    let img = new Image();
    img.src = baseUrl + url;
    img.style.display = "None";
    img.onload = function () {
      let { height } = getBackgroundSize(
        imgConWidth,
        imgConHeight,
        this.width,
        this.height,
      );
      imgConDiv.style.backgroundSize = `100%`;
      imgConDiv.style.backgroundPositionY = `${-height / 2}px`;
    };
    return imgConDiv;
  };
  const createMediaCon = (baseUrl, imgs) => {
    let mediaLen = imgs.length;
    let conDivWidth = conDiv.current.clientWidth;
    const { imgConWidth, imgConHeight } = getConWidthHeight(
      conDivWidth,
      mediaLen,
    );
    imgs.map((img) => {
      conDiv.current.append(
        changeImg(baseUrl, img.photo_video, imgConWidth, imgConHeight),
      );
    });
  };

  return <div className="mediaCon" ref={conDiv} />;
}
