import React, { createRef, Fragment } from "react";
import axios from "axios";
import MediaCon from "../photoCon/mediaCon.jsx";
import { baseUrl } from "../../constVar.js";
import photoIcon from "../../static/photoIcon.svg";
import videoIcon from "../../static/videoIcon.svg";
import "./postCon.css";
export default class PostCon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cmt: "",
      videoUrl: "",
      media: [],
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
  handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("userId", "6");
    formData.append("cmt", this.state.cmt);
    for (let i = 0; i < this.photo.current.files.length; i++) {
      formData.append("photo", this.photo.current.files[i]);
    }
    axios
      .post(baseUrl + "/huche/postHuche/", formData)
      .then((res) => {
        if (res.status === 200 && res.data.success === 1) {
          this.setState({ cmt: "", media: "", videoUrl: "" });
        } else {
          console.log("error");
        }
      })
      .catch((e) => {
        alert(e);
      });
  };

  // promise 异步加载图片
  loadImgAsync = (id, file) => {
    return new Promise((resolve, reject) =>{
      let read = new FileReader();
      read.readAsDataURL(file);
      let mediaObj = {};
      read.onload = (e) => {
        mediaObj.id = id;
        mediaObj.photo_video = e.target.result;
        resolve(mediaObj);
      };
    })
    
  };
  handlePhotoClick = () => {
    let files = this.photo.current.files;
    let photoLength = files.length;
    let photoPromises = [];
    for (let i = 0; i < photoLength; i++) {
      photoPromises.push(this.loadImgAsync(i, files[i]));
    }
    Promise.all(photoPromises).then((value) => {
      this.setState({media: [...this.state.media, ...value]})
    });
  };

  render() {
    console.log("post con");
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
            value="#匿名发表"
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
