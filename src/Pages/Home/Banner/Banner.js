import React from 'react';
import img1 from '../../../assets/banner/banner-1.jpg';
import img2 from '../../../assets/banner/banner-2.jpg';
import img3 from '../../../assets/banner/banner-03.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full h-96">
            <div id="slide1" className="carousel-item relative w-full">
                <img className='w-full' src={img1} alt="" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                    <h1 className='text-5xl font-bold text-white'>
                        Affordable <br />
                        Price for home <br />
                        Made Authentic food
                    </h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2 mt-4">
                    <p className='text-white text-xl'>Preparing healthy meals at home can support your immune system and reduce the risk of illnesses such as heart <br /> disease, cancer, high blood pressure, and diabetes. It can give you more energy,<br /> improve how you sleep at night, and help you better manage health problems.</p>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 left-24 bottom-0 mt-4 w-1/4">
                    <button className="btn btn-warning mr-5">Services</button>
                    <button className="btn btn-outline btn-secondary">Register</button>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;