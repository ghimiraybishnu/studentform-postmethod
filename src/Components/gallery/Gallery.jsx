import React, { useState } from "react";
import "./gallery.css";
import Firstimg from "../../aasets/images/img1.jpg";
import SecondImg from "../../aasets/images/img2.jpg";
import ThirdImg from "../../aasets/images/img3.jpg";




const Gallery = ()=> {
const images = [Firstimg, SecondImg, ThirdImg];
const [filePath, setfilePath] = useState(" ");


console.log(filePath);
    return (
        <div className="gallery-container">
            <div className="imgcontainer">

                {images.map((arrItem, index) => (
                    <img src={arrItem} key={index} />
                ))}


{/* <img src={Firstimg} alt="" ></img>
<img src={SecondImg} alt=""></img>
<img src={ThirdImg} alt=""></img> */}

            </div>

<input type="file" name="" id="" onChange={(e) => {

    console.log (e.target.files[0]);
    setfilePath(e.target.files.value)
}}
/>


      </div>  
 );
};





export default Gallery;