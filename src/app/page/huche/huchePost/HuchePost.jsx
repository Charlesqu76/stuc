import React, { createRef, Fragment } from "react";
import "./HuchePost.css";
import { VideoCameraOutlined } from '@ant-design/icons'
export default class PostCon extends React.Component {
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
      <div className="PostCon">
        <form
          id="inputForm"
          className="formCon"
          encType="multipart/form-data"
        >
          <textarea
            className="PostInputText"
            name="cmt"
          />
          <label
            htmlFor="filePhoto"
            className="postPhotoImg postImgIcon"
          >
            <input
              type="file"
              id="filePhoto"
              hidden
              accept="image/*"
              name="photo"
              multiple
            />
          </label>
          <label
            htmlFor="fileVideo"
            className="postVideoImg postImgIcon"
          >
            <input
              type="file"
              id="fileVideo"
              hidden
              accept="video/*"
              name="video"
            />
          </label>
        </form>
        <div className="PostDownCon">
          <input
            type="submit"
            className="nPostBtn"
            form="inputForm"
            value="#发表"
          />
        </div>
      </div>
    );
  }
}
