import React from 'react'
import Buttons from './Buttons'

const Search=()=> {
    // const test=(props=>{

    // });
    return (
        <div>
        <div  className="searchGoogle-container">
    <input className="searchGoogle"  placeholder="" style={{ width: "450px", height:"45px" }} /> 
    
    </div>
    <div className="buttons-container">
   <Buttons /*handleSearch={this.test}*/ btnName="Google Search" className="btn" />
   <Buttons btnName="I'm Feeling Lucky"  className="btn" />
        </div>  
    </div>

    )
}
export default Search;
