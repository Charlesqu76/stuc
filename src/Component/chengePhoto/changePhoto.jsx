import React from "react";
import "./changePhoto.css";
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.css";
import axios from "axios";
import { baseUrl } from "../../constVar.js";
let CROPPER = null;
const url = `${baseUrl}/center/changeImg`;

function getFile(e) {
  let file = new FileReader();
  let img = e.target.files[0];
  if (img) {
    file.readAsDataURL(img);
    file.onload = (e) => {
      let dataURL = file.result;
      document.querySelector("#cropImg").src = dataURL;
      const image = document.getElementById("cropImg");
      $('.changePhotoConDiv').fadeIn('normal');
      CROPPER = new Cropper(image, {
        aspectRatio: 16 / 16,
        viewMode: 0,
        minContainerWidth: 200,
        minContainerHeight: 200,
        dragMode: "move",
        preview: [
          document.querySelector(".previewBox"),
          document.querySelector(".previewBoxRound"),
        ],
      });
    };
  }
}

function getData() {
  //getCroppedCanvas方法可以将裁剪区域的数据转换成canvas数据
  CROPPER.getCroppedCanvas({
    maxWidth: 4096,
    maxHeight: 4096,
    fillColor: "#fff",
    imageSmoothingEnabled: true,
    imageSmoothingQuality: "high",
  }).toBlob((blob) => {
    //然后调用浏览器原生的toBlob方法将canvas数据转换成blob数据
    const formData = new FormData();
    formData.append("croppedImage", blob, 'img.jpg');
    formData.append("id", 1);
    let config = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    axios
      .post(url, formData, config)
      .then((res) => {
        if (res.status === 200 && res.data.success === 1) {
          cpExit();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
}

function cpExit() {
  $(".changePhotoConDiv").fadeOut("normal");
}

export default function ChangePhoto(props) {
  return (
    <>
      <input type="file" accept="image/*" id="imgReader" onChange={getFile} />
      <div className="cpCon">
        <div className="cpSubCon">
          <img id="cropImg"></img>
          <div className="previewCon">
            <div className="previewText">照片预览</div>
            <div class="previewBox"></div>
            <div class="previewBoxRound"></div>
          </div>
        </div>
        <div className="cpBtnCon">
          <button className="cpBtnExit" onClick={cpExit}>
            取消
          </button>
          <button className="cpBtnConfirm" onClick={getData}>
            确认
          </button>
        </div>
      </div>
    </>
  );
}
