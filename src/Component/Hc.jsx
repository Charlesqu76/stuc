import React from 'react';
import styles from "../main.css";
import MediaCon from "./mediaCon.jsx";
import axios from 'axios';
import {withRouter} from "react-router";



const baseUrl = 'http://127.0.0.1:8000';
export default class Hc extends React.Component {
    constructor() {
        super();
    }
    detailClick = () => {
        let id = this.props.data.id;
        let url = 'huche/'+ id;
        this.props.history.push(url);
    }


    render() {
        console.log(this.props);
        let data = this.props.data;
        return (
            <div className='HcCon' id={data.id} onClick = {this.detailClick}>
                <HcHead data={data.user} time={data.time}/>
                <HcBodyCon cmt={data.content} media={data.media}/>
                <HcDown id={data.id}/>
                {/*<SubCmt/>*/}
                <LikeCon like={data.huche_like}/>
                <HcCmt/>
            </div>
        )
    }
}
Hc = withRouter(Hc);

class HcHead extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            strTime: '',
        }
    }

    converStrToDate = (strDate) => {
        strDate = new Date(strDate.replace(/(\..*)/g, '')).getTime();
        let date = new Date().getTime();
        let second = (date - strDate) / 1000;
        let str = '';
        if (Math.abs(second / 60) < 1) {
            str = second + "秒前";
        } else if (Math.abs(second / 60 / 60) < 1) {
            str = Math.round(second / 60) + "分前";
        } else if (Math.abs(second / 60 / 60 / 24) < 1) {
            str = Math.round(second / 60 / 60) + "小时前";
        } else if (Math.abs(second / 60 / 60 / 24 / 30) < 1) {
            str = Math.round(second / 60 / 60 / 24) + "天前";
        } else if (Math.abs(second / 60 / 60 / 24 / 30 / 12) < 1) {
            str = Math.round(second / 60 / 60 / 24 / 30) + "月前";
        }
        return str;

    };

    render() {
        return (
            <div className="HcHeadCon componCon" style={styles.HcHeadCon}>
                <div className='HcHeadImg'>
                    <img src={baseUrl + this.props.data.img} className='HcHeadImg'/>
                </div>
                <div className="HcHeadNTCon" style={styles.HcHeadNTCon}>
                    <a className="HcHeadName" style={styles.HcHeadName}>{this.props.data.name}</a>
                    <a className="HcHeadTime" style={styles.HcHeadTime}>{this.converStrToDate(this.props.time)}</a>
                </div>
            </div>
        )

    }
}

function HcBodyCon(props) {
    return (
        <div className='HcBodyCon componCon'>
            {props.cmt && <p>{props.cmt}</p>}
            {props.media.length !== 0 && <MediaCon media={props.media} baseUrl={baseUrl}/>}
        </div>
    )
}

class HcDown extends React.Component {
    constructor() {
        super();
        this.state = {
            cmtShow: false,
            cmt: '',
        }
    }

    clickHandle = () => {
        this.setState({cmtShow: true});
    };
    subClickHandle = () => {
        this.setState({cmtShow: false});

        let data = new FormData();
        data.append('cmt',this.state.cmt);
        data.append('userId', 1);
        data.append('hucheId', this.props.id);

        axios.post('http://127.0.0.1:8000/huche/PostHucheCmt/',data)
            .then( res => console.log(res))
            .catch( e => {console.error(e)})

    };
    handleClickLike = () => {
        let data = new FormData();
        data.append('hucheId', this.props.id);
        data.append('userId', 1);
        axios.post('http://127.0.0.1:8000/huche/postHucheLike/', data)
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.error(error)
            });
        console.log('a');
    };
    handleCmtChange = (e) => {
        this.setState({cmt: e.target.value});
    };


    render() {
        return (
            <>
                <div className="HcDownCon componCon">
                    <div className="HcIcon HcLikeIcon" onClick={this.handleClickLike}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24"
                             version="HcLikeIcon.1">
                            =
                            <path
                                d="M11.0003 21C10.448 21 10.0003 20.5523 10.0003 20C10.0003 19.4477 10.448 19 11.0003 19L12.0003 19C12.5525 19 13.0003 18.5523 13.0003 18C13.0003 17.4477 12.5525 17 12.0003 17C11.448 17 11.0003 16.5523 11.0003 16C11.0003 15.4477 11.448 15 12.0003 15L13.0003 15C13.5525 15 14.0003 14.5523 14.0003 14C14.0003 13.4477 13.5525 13 13.0003 13C12.448 13 12.0003 12.5523 12.0003 12C12.0003 11.4477 12.448 11 13.0003 11L14.0003 11C14.5525 11 15.0003 10.5523 15.0003 10C15.0003 9.44771 14.5525 9 14.0003 9L7.01601 9C6.97148 9.00071 6.92642 8.99845 6.88104 8.99305C6.86335 8.99087 6.84581 8.98831 6.82843 8.98529C6.2972 8.89383 5.93203 8.39545 6.00887 7.85838L6.52035 4.28325C6.53377 4.18943 6.54051 4.09477 6.54051 4C6.54051 2.93494 5.70799 2.06432 4.65819 2.0034L1.9194 8.39392C1.70185 8.90155 1.11397 9.1367 0.606337 8.91915C0.0987073 8.70159 -0.136444 8.11371 0.0811114 7.60608L3.08111 0.606081C3.23869 0.238397 3.60023 -2.22045e-16 4.00026 0L4.54051 4.44089e-16C6.74965 1.4803e-16 8.54051 1.79086 8.54051 4C8.54051 4.18955 8.52704 4.37886 8.50019 4.5665L8.15204 7L14.0003 7C15.6571 7 17.0003 8.34315 17.0003 10C17.0003 11.0623 16.4482 11.9956 15.6153 12.5286C15.8604 12.9634 16.0003 13.4653 16.0003 14C16.0003 15.0623 15.4482 15.9956 14.6153 16.5286C14.8604 16.9634 15.0003 17.4653 15.0003 18C15.0003 19.3062 14.1654 20.4175 13.0003 20.8293L13.0003 21C13.0003 22.6569 11.6571 24 10.0003 24L2.00026 24C1.44797 24 1.00026 23.5523 1.00026 23C1.00026 22.4477 1.44797 22 2.00026 22L10.0003 22C10.5525 22 11.0003 21.5523 11.0003 21Z"
                                transform="translate(6.999756 0)" id="Combined-Shape" fill="#37578C"
                                stroke="none"/>
                            <path
                                d="M7 3.5L7 11.5C7 13.433 5.433 15 3.5 15C1.567 15 3.10862e-16 13.433 0 11.5L0 3.5C-3.10862e-16 1.567 1.567 0 3.5 0C5.433 0 7 1.567 7 3.5ZM5 3.5C5 2.67157 4.32843 2 3.5 2C2.67157 2 2 2.67157 2 3.5L2 11.5C2 12.3284 2.67157 13 3.5 13C4.32843 13 5 12.3284 5 11.5L5 3.5Z"
                                transform="translate(0 9)" id="Combined-Shape" fill="#ED9361" stroke="none"/>
                        </svg>
                    </div>
                    <div className="HcIcon " onClick={this.clickHandle}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24"
                             version="1.1">
                            <desc>Created with Lunacy</desc>
                            <path
                                d="M19.3168 22.1377C19.7429 22.5637 19.7429 23.2545 19.3168 23.6805C18.8908 24.1065 18.2001 24.1065 17.7741 23.6805L14.6885 20.5949C14.0748 19.9812 13.2423 19.6364 12.3743 19.6364L4.36364 19.6364C1.95367 19.6364 4.84461e-16 17.6827 0 15.2727L4.84461e-16 4.36364C0 1.95367 1.95367 7.26691e-16 4.36364 0L19.6364 0C22.0463 -7.26691e-16 24 1.95367 24 4.36364L24 15.2727C24 17.6827 22.0463 19.6364 19.6364 19.6364C19.0339 19.6364 18.5455 19.1479 18.5455 18.5455C18.5455 17.943 19.0339 17.4545 19.6364 17.4545C20.8413 17.4545 21.8182 16.4777 21.8182 15.2727L21.8182 4.36364C21.8182 3.15865 20.8413 2.18182 19.6364 2.18182L4.36364 2.18182C3.15865 2.18182 2.18182 3.15865 2.18182 4.36364L2.18182 15.2727C2.18182 16.4777 3.15865 17.4545 4.36364 17.4545L12.3743 17.4545C13.821 17.4545 15.2084 18.0292 16.2313 19.0521L19.3168 22.1377Z"
                                id="Combined-Shape" fill="#37578C" stroke="none"/>
                            <path
                                d="M1.09091 2.18182C0.488417 2.18182 0 1.6934 0 1.09091C0 0.488417 0.488417 0 1.09091 0L9.81818 0C10.4207 0 10.9091 0.488417 10.9091 1.09091C10.9091 1.6934 10.4207 2.18182 9.81818 2.18182L1.09091 2.18182ZM1.09091 6.54545C0.488417 6.54545 0 6.05704 0 5.45455C0 4.85205 0.488417 4.36364 1.09091 4.36364L6.54545 4.36364C7.14795 4.36364 7.63636 4.85205 7.63636 5.45455C7.63636 6.05704 7.14795 6.54545 6.54545 6.54545L1.09091 6.54545Z"
                                transform="translate(6.545471 6.545441)" id="Combined-Shape" fill="#E67F4F"
                                stroke="none"/>
                        </svg>
                    </div>
                </div>
                {this.state.cmtShow && <div className='SubCmtCon componCon'>
                    <textarea className="SubCmtInput" value={this.state.cmt} onChange={this.handleCmtChange}/>
                    <button className="SubCmtBtn" onClick={this.subClickHandle}>发表</button>
                </div>
                }
            </>
        )
    }
}


class LikeCon extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                {this.props.like.length !== 0 && <div className='LikeShowCon componCon'>
                    <div className="likeIcon HcIcon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="31px" height="31px"
                             viewBox="0 0 31 31" version="1.1">
                            <desc>Created with Lunacy</desc>
                            <path
                                d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z"
                                transform="translate(0.5 0.5)" id="椭圆形" fill="#E67F4F" stroke="none"/>
                            <g id="点赞" transform="translate(4.5 2.5)">
                                <path
                                    d="M11.0003 21C10.448 21 10.0003 20.5523 10.0003 20C10.0003 19.4477 10.448 19 11.0003 19L12.0003 19C12.5525 19 13.0003 18.5523 13.0003 18C13.0003 17.4477 12.5525 17 12.0003 17C11.448 17 11.0003 16.5523 11.0003 16C11.0003 15.4477 11.448 15 12.0003 15L13.0003 15C13.5525 15 14.0003 14.5523 14.0003 14C14.0003 13.4477 13.5525 13 13.0003 13C12.448 13 12.0003 12.5523 12.0003 12C12.0003 11.4477 12.448 11 13.0003 11L14.0003 11C14.5525 11 15.0003 10.5523 15.0003 10C15.0003 9.44771 14.5525 9 14.0003 9L7.01601 9C6.97148 9.00071 6.92642 8.99845 6.88104 8.99305C6.86335 8.99087 6.84581 8.98831 6.82843 8.98529C6.2972 8.89383 5.93203 8.39545 6.00887 7.85838L6.52035 4.28325C6.53377 4.18943 6.54051 4.09477 6.54051 4C6.54051 2.93494 5.70799 2.06432 4.65819 2.0034L1.9194 8.39392C1.70185 8.90155 1.11397 9.1367 0.606337 8.91915C0.0987073 8.70159 -0.136444 8.11371 0.0811114 7.60608L3.08111 0.606081C3.23869 0.238397 3.60023 -2.22045e-16 4.00026 0L4.54051 4.44089e-16C6.74965 1.4803e-16 8.54051 1.79086 8.54051 4C8.54051 4.18955 8.52704 4.37886 8.50019 4.5665L8.15204 7L14.0003 7C15.6571 7 17.0003 8.34315 17.0003 10C17.0003 11.0623 16.4482 11.9956 15.6153 12.5286C15.8604 12.9634 16.0003 13.4653 16.0003 14C16.0003 15.0623 15.4482 15.9956 14.6153 16.5286C14.8604 16.9634 15.0003 17.4653 15.0003 18C15.0003 19.3062 14.1654 20.4175 13.0003 20.8293L13.0003 21C13.0003 22.6569 11.6571 24 10.0003 24L2.00026 24C1.44797 24 1.00026 23.5523 1.00026 23C1.00026 22.4477 1.44797 22 2.00026 22L10.0003 22C10.5525 22 11.0003 21.5523 11.0003 21Z"
                                    transform="translate(6.999743 0)" id="Combined-Shape" fill="#FFFFFF"
                                    stroke="none"/>
                                <path
                                    d="M7 3.5L7 11.5C7 13.433 5.433 15 3.5 15C1.567 15 3.10862e-16 13.433 0 11.5L0 3.5C-3.10862e-16 1.567 1.567 0 3.5 0C5.433 0 7 1.567 7 3.5ZM5 3.5C5 2.67157 4.32843 2 3.5 2C2.67157 2 2 2.67157 2 3.5L2 11.5C2 12.3284 2.67157 13 3.5 13C4.32843 13 5 12.3284 5 11.5L5 3.5Z"
                                    transform="translate(0 9)" id="Combined-Shape" fill="#FFFFFF"
                                    stroke="none"/>
                            </g>
                        </svg>
                    </div>
                    {this.props.like.map(value =>
                        <a key={value.user.id} className="likeShowName">{value.user.name}</a>
                    )}
                </div>}
            </>
        );
    }
}


class HcCmt extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='componCon'>

            </div>
        );
    }

}


