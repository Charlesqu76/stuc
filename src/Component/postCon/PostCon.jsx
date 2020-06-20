import React, { createRef, Fragment } from "react";
import MediaCon from "../photoCon/mediaCon.jsx";
import photoIcon from "../../static/photoIcon.svg";
import videoIcon from "../../static/videoIcon.svg";
import "./postCon.css";
import { hc } from "../../requestFiles/huche.js";
import { isLogin } from "../..//utility.js";
export default class PostCon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cmt: "",
      videoUrl: "",
      media: [],
      postImg: [],
      reserveDate: null,
    };
    this.photo = createRef();
    this.video = createRef();
  }
  handleCmtChange = (e) => {
    this.setState({ cmt: e.target.value });
  };
  handleVideoClick = () => {
    let read = new FileReader();
    read.readAsDataURL(this.video.current.files[0]);
    read.onload = (e) => {
      this.setState({ videoUrl: e.target.result });
    };
  };

  //提交
  handleSubmit = (e) => {
    e.preventDefault();
    const token = isLogin();
    if (token) {
      if (this.state.cmt || this.state.media.length) {
        let formData = new FormData();
        let id = localStorage.getItem("token").split(".?")[0];
        formData.append("userId", id);
        formData.append("cmt", this.state.cmt);
        if (this.state.postImg.length) {
          for (let i = 0; i < this.state.postImg.length; i++) {
            formData.append("photo", this.state.postImg[i]);
          }
        }
        hc(formData, (value) => {
          if (value.status === 200 && value.data.success === 1) {
            this.props.getData(value.data.data);
          } else {
          }
        });
      }
    } else {
      alert("请登录");
    }
    this.setState({ cmt: "", media: [], videoUrl: "", postImg: [] });
  };

  // promise 异步加载图片
  loadImgAsync = (id, file) => {
    return new Promise((resolve, reject) => {
      let read = new FileReader();
      read.readAsDataURL(file);
      let mediaObj = {};
      read.onload = (e) => {
        mediaObj.id = id;
        mediaObj.photo_video = e.target.result;
        resolve(mediaObj);
      };
    });
  };
  //获得照片url
  handlePhotoClick = () => {
    let files = this.photo.current.files;
    let photoLength = files.length;
    let photoPromises = [];
    for (let i = 0; i < photoLength; i++) {
      this.state.postImg.push(files[i]);
      photoPromises.push(this.loadImgAsync(i, files[i]));
    }
    Promise.all(photoPromises).then((value) => {
      this.setState({ media: [...this.state.media, ...value] });
    });
  };

  render() {
    return (
      <div className="PostCon">
        <form
          id="inputForm"
          className="formCon"
          onSubmit={this.handleSubmit}
          encType="multipart/form-data"
        >
          <textarea
            className="PostInputText"
            value={this.state.cmt}
            onChange={this.handleCmtChange}
            name="cmt"
          />
          <label
            htmlFor="filePhoto"
            className="postPhotoImg postImgIcon"
            onChange={this.handlePhotoClick}
          >
            <input
              type="file"
              id="filePhoto"
              hidden
              ref={this.photo}
              accept="image/*"
              name="photo"
              multiple
            />
            <img src={photoIcon} />
          </label>
          <label
            htmlFor="fileVideo"
            className="postVideoImg postImgIcon"
            onChange={this.handleVideoClick}
          >
            <input
              type="file"
              id="fileVideo"
              hidden
              ref={this.video}
              accept="video/*"
              name="video"
            />
            <img src={videoIcon} />
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
        <Fragment>
          {this.state.videoUrl && (
            <video
              src={this.state.videoUrl}
              controls
              width="300px"
              height="300px"
            />
          )}
          {this.state.media.length ? (
            <MediaCon media={this.state.media} baseUrl="" />
          ) : (
            <></>
          )}
        </Fragment>
      </div>
    );
  }
}
