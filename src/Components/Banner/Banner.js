import React from 'react';
import banner from '../../Assets/banner.png';
import './Banner.css'
import { FaDownload } from 'react-icons/fa';
import resume from '../../Assets/Resume/Ariful Islam Resume.pdf'


const Banner = () => {
    return (
        <div>
            <div>
                <img className='w-full' src={banner} alt="" />
                <a href={resume} download={resume}><button className="btn btn-outline btn-info">
                    Download Resume <FaDownload className='ml-3'></FaDownload> </button></a>
            </div>
        </div >
    );
};

export default Banner;