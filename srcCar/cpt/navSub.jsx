import React from 'react';
import  {NavLink} from 'react-router-dom'



export default class NavSub extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className ='subNavCon'>
                <ul>
                    <li><NavLink to='/overView'>营销力概览</NavLink></li>
                    <li><NavLink to='/ana'>车型分析</NavLink></li>
                    <li><NavLink to='/cmp'>竞品对比</NavLink></li>
                    <li><NavLink to='sale'>销量试算</NavLink></li>
                </ul>
             </div>
        )
    }
    

}