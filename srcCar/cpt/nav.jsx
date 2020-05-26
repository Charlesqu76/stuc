import React from 'react';
import styles  from '../main.css';
import userImg from '../static/userImg.png';
import settingImg from '../static/settingImg.png';
import helpImg from '../static/helpImg.png';

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='NavCon'>
                <div className= 'titleCon'>
                    <header>智能营销力评估系统
                    </header>
                </div>
                <div className= 'funCon'>
                    <ul className = 'funConUl'>
                        <li className='funLi'>
                            <img src= {userImg}></img>
                            <a>用户名</a>
                        </li>
                        <li className = 'funLi funLiMid'>
                            <img src = {settingImg}></img>
                            <a>设置</a>
                        </li>
                        <li className = 'funLi'>
                            <img src = {helpImg}></img>
                            <a>帮助</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}