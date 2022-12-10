import React from 'react';
import banner from '../../Assets/banner2.png';
import './Banner.css'
import { FaDownload } from 'react-icons/fa';
import resume from '../../Assets/Resume/Ariful Islam Resume.pdf'
import Typewriter from 'typewriter-effect'
import { Link } from 'react-router-dom';

const Banner = () => {

    return (
        <div>
            <div>
                <img className='w-full bannerImg' src={banner} alt="" />
                <div className='text-center'>
                    <h2 className='typeWriter font-bold text-5xl text-sky-500'>
                        Hi, I AM ARIFUL ISLAM
                        {/* <Typewriter
                            options={{
                                strings: [''],
                                autoStart: true,
                                loop: true,
                            }}
                        /> */}
                    </h2>
                    <h4 className="typeWriter2 text-2xl text-white font-semibold text-center"> A Full Stack Web Developer
                        {/* <Typewriter
                            options={{
                                strings: [''],
                                autoStart: true,
                                loop: true,
                            }}
                        /> */}
                    </h4>
                </div>

                <Link className='downlaod' href={resume} download={resume}>
                    <button className="btn btn-outline btn-info">
                        Download Resume <FaDownload className='ml-3'></FaDownload> </button></Link>
                <Link to='/contact' className='hireMe' >
                    <button className="btn btn-outline btn-info">
                        Hire Me </button></Link>
            </div>
        </div >
    );
};

export default Banner;