import React from "react";
import style from "./HuchePost.css";
import { VideoCameraOutlined, CameraOutlined } from "@ant-design/icons";
import { observer } from "mobx-react";
import { observable, action } from "mobx";

@observer
export default class PostCon extends React.Component {
  @observable textValue = "";

  @action
  changeTextValue = (e) => {
    this.textValue = e.target.value;
  };


  imgUplaod(params) {
    
    
  }

  // handleVideoClick = () => {
  //   let read = new FileReader();
  //   read.readAsDataURL(this.video.current.files[0]);
  //   read.onload = (e) => {
  //     this.setState({ videoUrl: e.target.result });
  //   };
  // };

  //提交
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const token = isLogin();
  //   if (token) {
  //     if (this.state.cmt || this.state.media.length) {
  //       let formData = new FormData();
  //       let id = localStorage.getItem("token").split(".?")[0];
  //       formData.append("userId", id);
  //       formData.append("cmt", this.state.cmt);
  //       if (this.state.postImg.length) {
  //         for (let i = 0; i < this.state.postImg.length; i++) {
  //           formData.append("photo", this.state.postImg[i]);
  //         }
  //       }
  //       hc(formData, (value) => {
  //         if (value.status === 200 && value.data.success === 1) {
  //           this.props.getData(value.data.data);
  //         } else {
  //         }
  //       });
  //     }
  //   } else {
  //     alert("请登录");
  //   }
  // };

  // promise 异步加载图片
  // loadImgAsync = (id, file) => {
  //   return new Promise((resolve, reject) => {
  //     let read = new FileReader();
  //     read.readAsDataURL(file);
  //     let mediaObj = {};
  //     read.onload = (e) => {
  //       mediaObj.id = id;
  //       mediaObj.photo_video = e.target.result;
  //       resolve(mediaObj);
  //     };
  //   });
  // };
  //获得照片url
  // handlePhotoClick = () => {
  //   let files = this.photo.current.files;
  //   let photoLength = files.length;
  //   let photoPromises = [];
  //   for (let i = 0; i < photoLength; i++) {
  //     this.state.postImg.push(files[i]);
  //     photoPromises.push(this.loadImgAsync(i, files[i]));
  //   }
  //   Promise.all(photoPromises).then((value) => {
  //     this.setState({ media: [...this.state.media, ...value] });
  //   });
  // };

  render() {
    return (
      <div className={style.PostCon}>
        <div className={style.postConFormTop}>
          <div className ={style.postConTextareaCon}>
            <textarea
              onChange={this.changeTextValue}
              value={this.textValue}
              style={{
                minWidth: "300px",
                maxWidth: "70%",
                borderRadius: "5px",
              }}
            />
          </div>
          <div className = {style.postConUploadCon}>
            <input type="file" className={style.fileImgUpload} onClick = {}/>
            <div onClick = {}>img</div>
            <input type="file" disabled className={style.fileVideoUpload} />
            <div>vide</div>
          </div>
        </div>
        <div className={style.postConFormBottom}>
          <button type="primary" style={{ borderRadius: "5px" }}>
            #发表
          </button>
        </div>
      </div>
    );
  }
}
