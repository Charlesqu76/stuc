import React from 'react';
import style from './title.css';
const Title = (props) => {
    return <div style = {{fontSize: `${props.size}px`}}>
        <span className={style.titleFir}>Student</span>
        <span className={style.titleSec}>Club</span>
    </div>
}
export default Title

