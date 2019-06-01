import React from 'react'


const Buttons=(props)=> {
    const style={
        display:"flex",
        // padding:5,
        margin: 15,
        border: 0,
      
        height: 36,
           }
           const handleButton=()=>{
            console.log("Hey, were are handling buttons")
           }
    return (
        <div style={style}>
             <button onClick={handleButton} onC className="btn"  >{props.btnName}</button>
     
        </div>
    )
}

export default  Buttons;