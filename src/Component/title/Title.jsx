import React from 'react';
import css from './title.css';
const Title = (props) => {
    return <div style = {{fontSize: `${props.size}px`}}>
        <span className='titleFir'>Student</span>
        <span className='titleSec'>Club</span>
    </div>
}
export default Title

