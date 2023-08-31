import React from 'react'
import './Hero.scss'
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import img1 from '../assets/images/iphone14main.jpg'
import StarIcon from '@mui/icons-material/Star';
import img from '../assets/images/iphone14black.jpg'
import img4 from '../assets/images/iphone14main.jpg'
import imgbottom1 from '../assets/images/iphone14bottom.jpg'
import imgbottom2 from '../assets/images/iphone14bottom2.jpg'
import imgbottom3 from '../assets/images/iphone14bottom3.jpg'
import imgbottom4 from '../assets/images/iphone14bottom4.jpg'
import { specData } from './spec';



export default function Hero() {
    return (
        <>
            <div className="container">
                <div className="row mb-5 mt-5">
                    <div className="col">
                        <h3 style={{ fontFamily: "Roboto", fontWeight: "800", fontSize: "24px" }}>Apple iPhone Details in Pakistan</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col " >
                        <div className="row mb-4" style={{ width: "622px", height: "520px", backgroundColor: "#f8f9fa", display: "grid", placeItems: 'center', borderRadius: '25px' }}>
                            <div className="col text-center position-relative" >
                                <div style={{ position: "absolute", top: "-130px", left: "20px", backgroundColor: "#d80032", width: "110px", height: "25px", color: "white", borderRadius: "10px" }}>FEATURED</div>
                                <button style={{ position: "absolute", top: "310px", left: "550px", borderRadius: "7px", borderStyle: "none", backgroundColor: "#858686", color: "white", height: "32px" }}><FullscreenIcon /></button>
                                <img src={img1} alt="" className='m-auto' style={{ mixBlendMode: "multiply" }} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col mx-3">
                                <img src={imgbottom1} alt="" srcset="" style={{ height: "100px", width: "130px", borderRadius: "10px", border: "1px solid black" }} />
                                <img src={imgbottom2} alt="" srcset="" style={{ height: "100px", width: "130px", borderRadius: "10px", marginLeft: "15px" }} />
                                <img src={imgbottom3} alt="" srcset="" style={{ height: "100px", width: "130px", borderRadius: "10px", marginLeft: "15px" }} />
                                <img src={imgbottom4} alt="" srcset="" style={{ height: "100px", width: "130px", borderRadius: "10px", marginLeft: "15px" }} />
                            </div>
                        </div>
                    </div>
                    <div className="col  ms-5" style={{ marginLeft: "10px" }}>
                        <h3>Apple iPhone 14  <button style={{ marginLeft: "300px", borderStyle: "none", backgroundColor: "#f4eefa", borderRadius: "8px" }}><ShareIcon style={{ height: "16px", width: "25px", color: "#7b2cbf", marginBottom: "5px" }} /></button>&ensp;<button style={{ borderStyle: "none", backgroundColor: "#f4eefa", borderRadius: "8px" }}><FavoriteBorderIcon style={{ height: "16px", width: "27px", color: "#7b2cbf", marginBottom: "5px" }} /></button></h3>
                        <p style={{ fontSize: "17px" }}>4.0 <StarIcon style={{ color: "yellow" }} /><StarIcon style={{ color: "yellow" }} /><StarIcon style={{ color: "yellow" }} /><StarIcon style={{ color: "yellow" }} /><StarIcon style={{ color: "yellow" }} /> 10 Ratings</p>
                        <p>Brand: &ensp;<span style={{ color: "#7b2cbf" }}>Apple</span></p>
                        <p>Market Price <br /><h3>PKR 384,999</h3></p>
                        <h3 ></h3>
                        <h5 className='mt-4 mb-3'>Colors</h5>
                        <div className="row ">
                            <div className="col-sm-6 col-md-3 col-lg-3  d-flex gap-4" >
                                <div style={{ backgroundColor: "#f8f9fa", borderRadius: "10px", border: "2px solid #7b2cbf" }}> <img src={img} alt="" srcset="" style={{ mixBlendMode: "multiply", height: "80px", width: "110px", padding: "8px", }} /><p style={{ textAlign: "center", marginTop: "5px" }}>Black</p></div>
                                <div style={{ backgroundColor: "#f8f9fa", borderRadius: "10px" }}><img src={img4} alt="" srcset="" style={{ mixBlendMode: "multiply", height: "80px", width: "110px", padding: "8px", marginTop: "3px" }} /><p style={{ textAlign: "center", marginTop: "5px" }}>Blue</p></div>
                                <div style={{ backgroundColor: "#f8f9fa", borderRadius: "10px" }}><img src={img} alt="" srcset="" style={{ mixBlendMode: "multiply", height: "80px", width: "110px", padding: "8px", }} /><p style={{ textAlign: "center", marginTop: "5px" }}>Grey</p></div>
                                <div style={{ backgroundColor: "#f8f9fa", borderRadius: "10px" }}><img src={img4} alt="" srcset="" style={{ mixBlendMode: "multiply", height: "80px", width: "110px", padding: "8px", marginTop: "3px" }} /><p style={{ textAlign: "center", marginTop: "5px" }}>LightBlue</p></div>
                            </div>
                        </div>
                        <h5 className='mt-4'>Storage Capacity</h5>
                        <div>
                            <button style={{ height: "40px", width: "85px", borderRadius: "10px", borderColor: "#7b2cbf", color: "#7b2cbf" }}>128 GB</button>
                            <button style={{ height: "40px", width: "85px", borderRadius: "10px", marginLeft: "15px", borderStyle: "none" }}>256 GB</button>
                            <button style={{ height: "40px", width: "85px", borderRadius: "10px", marginLeft: "15px", borderStyle: "none" }}>512 GB</button>
                        </div>
                        <div className="col"><h5 className='mt-4'>Product Description</h5>
                            <p style={{ color: "blcak" }}>The moment you've been waiting for is almost here! Our website is gearing up to unveil an
                                exceptional product, including the incredible iPhone, that will soon be available for purchase.
                                Get ready to transform your expectations as we bring you a seamless online shopping
                                experience. Stay tuned for the official launch and be among the first to secure this
                                masterpiece. Your gateway to extraordinary is opening soon!</p></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col mt-5 text-center">
                        <h2>Specifications</h2>
                    </div>
                </div>
                {specData.map((data, i) => (
                    <div className="row" key={i}>
                        <div className="col" style={{ backgroundColor: "" }}>
                            <h4 style={{ marginLeft: "200px", marginBottom: "35px" }}>{data.title}</h4>
                            <div className='d-flex flex-column justify-content-around' style={{ margin: "0 200px" }}>
                                {data.content.map((contentItem, j) => (
                                    <div key={j}>
                                        <h6 style={{ fontWeight: "500", }}>{contentItem.label}</h6>
                                        <p className='text-end'>{contentItem.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
