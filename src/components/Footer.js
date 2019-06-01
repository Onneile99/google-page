import React from 'react'

const Footer=(props)=>{

// const footerInfo1=props.array1;
// const newArray1=footerInfo1.map(infoItems1=>
//     <li>{infoItems1}</li>
// );
// const footerInfo2=props.array2;
// const newArray2=footerInfo2.map(infoItems2=>
//     <li>{infoItems2}</li>
// );
return (
        <div>
        
         <div className="footer-links1">
<a  href={props.link}>{props.buttonName}</a>
        </div> 

 
        </div>
    )
}
export default  Footer;
