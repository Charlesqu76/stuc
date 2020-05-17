import React, {createRef} from 'react'
import axios from 'axios'
import MediaCon from "./mediaCon.jsx";

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
        this.setState({cmt: e.target.value});
    };
    handleVideoClick = () => {
        let read = new FileReader();
        read.readAsDataURL(this.video.current.files[0]);
        read.onload = (e) => {
            this.setState({videoUrl: e.target.result});
        }
    };
    handleSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('userId', "6");
        formData.append('cmt', this.state.cmt);
        for (let i = 0; i < this.photo.current.files.length; i++) {
            formData.append('photo', this.photo.current.files[i]);
        }
        axios.post('http://127.0.0.1:8000/huche/postHuche/', formData)
            .then(res => {
                if (res.status === 200 && res.data.success === 1) {
                    this.setState({cmt: '', media: '', videoUrl: ''})
                } else {
                    console.log('error');
                }
            })
            .catch(e => {alert(e)});
    };
    handlePhotoClick = () => {
        let files = this.photo.current.files;
        const photoLength = files.length;
        let mediaObjResult = (id, file) => {
            let mediaObj = {};
            let read = new FileReader();
            read.readAsDataURL(file);
            read.onloadend = ev => {
                mediaObj.id = id;
                mediaObj.photo_video = ev.target.result;
                if (this.state.media.length < 9){
                    this.setState({media: this.state.media.concat(mediaObj)})
                }else {
                    alert('最多九张照片');
                }
            }
        };
        for (let i = 0; i < photoLength; i++) {
                mediaObjResult(i, files[i])
        }
    };

    render() {
        return (
            <div className='PostCon'>
                <form id='inputForm' className='formCon' onSubmit={this.handleSubmit} encType="multipart/form-data">
                    <textarea className='PostInputText' value={this.state.cmt} onChange={this.handleCmtChange}
                              name='cmt'/>
                    <label htmlFor='filePhoto' className="postPhotoImg postImgIcon" onChange={this.handlePhotoClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 45 45"
                             version="1.1">
                            <path
                                d="M28.6364 40.9091C29.766 40.9091 30.6818 41.8249 30.6818 42.9545C30.6818 44.0842 29.766 45 28.6364 45L8.18182 45C3.66312 45 0 41.3369 0 36.8182L0 8.18182C-6.81273e-16 3.66312 3.66312 1.36255e-15 8.18182 0L36.8182 0C41.3369 -6.81273e-16 45 3.66312 45 8.18182L45 36.8182C45 41.3369 41.3369 45 36.8182 45C35.6885 45 34.7727 44.0842 34.7727 42.9545C34.7727 41.8249 35.6885 40.9091 36.8182 40.9091C39.0775 40.9091 40.9091 39.0775 40.9091 36.8182L40.9091 8.18182C40.9091 5.92247 39.0775 4.09091 36.8182 4.09091L8.18182 4.09091C5.92247 4.09091 4.09091 5.92247 4.09091 8.18182L4.09091 36.8182C4.09091 39.0775 5.92247 40.9091 8.18182 40.9091L28.6364 40.9091Z"
                                id="Combined-Shape" fill="#33548A" stroke="none"/>
                            <path
                                d="M6.13636 12.2727C2.74734 12.2727 0 9.52538 0 6.13636C0 2.74734 2.74734 0 6.13636 0C9.52538 0 12.2727 2.74734 12.2727 6.13636C12.2727 9.52538 9.52538 12.2727 6.13636 12.2727ZM8.18182 6.13636C8.18182 7.26604 7.26604 8.18182 6.13636 8.18182C5.00669 8.18182 4.09091 7.26604 4.09091 6.13636C4.09091 5.00669 5.00669 4.09091 6.13636 4.09091C7.26604 4.09091 8.18182 5.00669 8.18182 6.13636ZM21.0542 12.8777C21.8527 12.0799 23.1464 12.0797 23.9452 12.8772L28.0361 16.9616C28.8355 17.7598 28.8366 19.0549 28.0384 19.8543C27.2402 20.6537 25.9451 20.6548 25.1457 19.8566L22.5006 17.2157L15.764 23.9469C14.9651 24.7452 13.6704 24.7449 12.8718 23.9464L10.2273 21.3018L3.49181 28.0373C2.69301 28.8361 1.3979 28.8361 0.5991 28.0373C-0.1997 27.2385 -0.1997 25.9434 0.5991 25.1446L8.78092 16.9627C9.57972 16.1639 10.8748 16.1639 11.6736 16.9627L14.3188 19.6079L21.0542 12.8777Z"
                                transform="translate(8.181763 8.181824)" id="Combined-Shape" fill="#E67F4F"
                                fillRule="evenodd" stroke="none"/>
                        </svg>
                        <input type="file" id="filePhoto" hidden ref={this.photo} accept="image/*" name='photo'
                               multiple/>
                    </label>
                    <label htmlFor='fileVideo' className="postVideoImg postImgIcon" onChange={this.handleVideoClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 40 41"
                             version="1.1">
                            <path
                                d="M30.7171 9.90442C30.2681 10.8026 29.1759 11.1666 28.2778 10.7175C27.3797 10.2685 27.0156 9.17633 27.4647 8.27819L30.096 3.0156C31.0199 1.16768 32.9086 0.000398285 34.9747 0.000398285L35.4545 0.000398285C37.9649 0.000398285 40 2.03547 40 4.54585L40 32.7277C40 36.7443 36.7439 40.0004 32.7273 40.0004L7.27273 40.0004C3.25611 40.0004 0 36.7443 0 32.7277L0 5.45494C-6.05576e-16 2.44248 2.44208 0.000398285 5.45455 0.000398285C6.4587 0.000398285 7.27273 0.814426 7.27273 1.81858C7.27273 2.82273 6.4587 3.63676 5.45455 3.63676C4.45039 3.63676 3.63636 4.45079 3.63636 5.45494L3.63636 32.7277C3.63636 34.736 5.26442 36.364 7.27273 36.364L32.7273 36.364C34.7356 36.364 36.3636 34.736 36.3636 32.7277L36.3636 4.54585C36.3636 4.04378 35.9566 3.63676 35.4545 3.63676L34.9747 3.63676C34.286 3.63676 33.6564 4.02586 33.3484 4.64183L30.7171 9.90442ZM21.6262 9.90442C21.1772 10.8026 20.085 11.1666 19.1869 10.7175C18.2887 10.2685 17.9247 9.17633 18.3738 8.27819L22.0101 1.00546C22.4592 0.107322 23.5513 -0.256723 24.4495 0.192349C25.3476 0.64142 25.7117 1.73355 25.2626 2.6317L21.6262 9.90442ZM12.5353 9.90442C12.0863 10.8026 10.9941 11.1666 10.096 10.7175C9.19783 10.2685 8.83379 9.17633 9.28286 8.27819L12.9192 1.00546C13.3683 0.107322 14.4604 -0.256723 15.3586 0.192349C16.2567 0.64142 16.6208 1.73355 16.1717 2.6317L12.5353 9.90442Z"
                                fill="#33548A" stroke="none"/>
                            <path
                                d="M2.6313 0.194296L13.5404 5.64884C14.8805 6.31889 14.8805 8.23126 13.5404 8.9013L2.6313 14.3558C1.42239 14.9603 0 14.0812 0 12.7296L0 1.82053C0 0.468924 1.42239 -0.410159 2.6313 0.194296ZM3.63636 4.76241L3.63636 9.78774L8.66169 7.27507L3.63636 4.76241Z"
                                transform="translate(12.72729 16.36169)" fill="#E67F4F" stroke="none"/>
                        </svg>
                        <input type="file" id="fileVideo" hidden ref={this.video} accept="video/*" name='video'/>
                    </label>
                </form>
                <div className="PostDown">
                    <input type='submit' className="nPostBtn" form='inputForm' value='#匿名发表'/>
                </div>
                <div className='mediaCon'>
                    {this.state.videoUrl && <video src={this.state.videoUrl} controls width="300px" height="300px"/>}
                    {this.state.media.length ? <MediaCon media={this.state.media} baseUrl=''/> : <></>}
                </div>
            </div>
        );
    }
}







