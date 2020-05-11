import React, {createRef} from 'react'


export default class MediaCon extends React.PureComponent {
    constructor(props) {
        super(props);
        this.conDiv = createRef();
    }

    componentDidMount() {
        console.log(1);
        this.conDiv.current.innerHTML = '';
        this.createMediaCon(this.props.baseUrl, this.props.media);
    }


    componentDidUpdate(prevProps,) {
        console.log(2);
        console.log(this.props.media);
        this.conDiv.current.innerHTML = '';
        this.createMediaCon(this.props.baseUrl, this.props.media);
    }


    changeImg = (baseUrl, url, imgWidth) => {
        let img = new Image();
        img.src = baseUrl + url;
        img.onload = function () {
            let oldWidth = this.width;
            let oldHeight = this.height;
            this.width = imgWidth;
            this.height = this.width * oldHeight / oldWidth;
            this.style.padding = 2 + 'px';
            this.style.borderRadius = 10 + 'px';
        };
        return img
    };
    createMediaCon = (baseUrl, object) => {
        let this_ = this;
        let mediaNum = object.length;
        let conDivWidth = this.conDiv.current.clientWidth - 30;
        if (mediaNum === 1) {
            let media = new Image();
            media.src = baseUrl + object[0].photo_video;
            media.onload = function () {
                if (this.width > 480) {
                    let oldWidth = this.width;
                    let oldHeight = this.height;
                    this.width = conDivWidth;
                    this.height = this.width * oldHeight / oldWidth;
                }
                this.style.borderRadius = 10 + 'px';
                this_.conDiv.current.append(media);
            };
        } else if (mediaNum === 2) {
            let imgWidth = conDivWidth / 2 - 10;
            object.map((medias) => {
                this.conDiv.current.append(this.changeImg(baseUrl, medias.photo_video, imgWidth));
            });

        } else if (mediaNum === 3) {
            let imgWidth = conDivWidth / 3 - 10;
            object.map((medias) => {
                this.conDiv.current.append(this.changeImg(baseUrl, medias.photo_video, imgWidth));
            })
        } else if (mediaNum === 4) {
            let imgWidth = conDivWidth / 2 - 10;
            object.map((medias) => {
                this.conDiv.current.append(this.changeImg(baseUrl, medias.photo_video, imgWidth));
            })
        } else {
            let imgWidth = conDivWidth / 3 - 10;
            object.map((medias) => {
                this.conDiv.current.append(this.changeImg(baseUrl, medias.photo_video, imgWidth));
            });
        }
    }
    ;

    render() {
        return (
            <div className='mediaCon' ref={this.conDiv}/>
        );
    }

}