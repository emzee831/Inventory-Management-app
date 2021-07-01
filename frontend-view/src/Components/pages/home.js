import React from 'react'
import '../../App.css'
import pic1 from "../../images/pic1.jpg"
import pic2 from "../../images/pic2.JPG"
import pic3 from "../../images/pic3.JPG"
import pic4 from "../../images/pic4.JPG"
import pic5 from "../../images/pic5.JPG"
import pic6 from "../../images/pic6.JPG"
import pic7 from "../../images/pic7.JPG"
import pic8 from "../../images/pic8.JPG"
import pic9 from "../../images/pic9.JPG"
import pic10 from "../../images/pic10.JPG"



export default function home() {
    return (
        <>
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light intro-container">
            <div className="container home-head-cont">
                <header className="d-flex flex-wrap justify-content-center py-1 mb-2 border-bottom home-headers">Miami's #1 vintage store</header>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className="container home-body1-cont">
                        <img className="img-thumbnail home-body1-cont" src={pic3} alt="" ></img>
                        <img className="img-thumbnail home-body1-cont" src={pic2} alt="" ></img>
                        <img className="img-thumbnail home-body1-cont" src={pic4} alt="" ></img>
                        <img className="img-thumbnail home-body1-cont" src={pic1} alt="" ></img>
                        <img className="img-thumbnail home-body1-cont" src={pic9} alt="" ></img>
            </div> 
            <br></br>
            <br></br>
            <div className="container home-body1-cont">
            <img className="img-thumbnail home-body1-cont" src={pic7} alt="" ></img>
                        <img className="img-thumbnail home-body1-cont" src={pic6} alt="" ></img>
                        <img className="img-thumbnail home-body1-cont" src={pic5} alt="" ></img>
                        <img className="img-thumbnail home-body1-cont" src={pic8} alt="" ></img>
                        <img className="img-thumbnail home-body1-cont" src={pic10} alt="" ></img>
                        
            </div>
            
        </div>
       </>     
    )
}