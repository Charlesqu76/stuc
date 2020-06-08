import React, { useState, useEffect } from "react";

export default function Center(){
    const [count, setCount] = useState(0);
    useEffect(()=>{
        setCount(count + 1);
        console.log(count,'11');
    },[])
    console.log(count);
    return(
        <div>
            <button onClick ={() => setCount(count + 1)}>adfasd</button>
        </div>
    )
}

