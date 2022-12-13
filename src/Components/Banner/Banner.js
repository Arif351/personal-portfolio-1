import React from 'react';
import banner from '../../Assets/r2.jpg';
import me from '../../Assets/me.png';
// import video from '../../Assets/videos/video.mp4'
import './Banner.css'
import { FaDownload } from 'react-icons/fa';
import resume from '../../Assets/Resume/Ariful_Islam_Resume.pdf'
import { Link } from 'react-router-dom';

const Banner = () => {

    return (
        <div>
            <div className=''>
                {/* <iframe src="https://www.veed.io/embed/95888357-fc7c-4caf-9e3c-693ffbbec092" className='w-full' frameborder="0" title="video.mp4" webkitallowfullscreen mozallowfullscreen allowfullscreen autoPlay loop muted></iframe> */}
                {/* <video className='brightness-50' autoPlay loop muted>
                    <source src="https://streamable.com/wmcyn4" type='video/mp4' />
                </video> */}
                <img className='w-full bannerImg brightness-50' src={banner} alt="" />
                <div className='text-center'>
                    <div className="avatar avtr imgsm">
                        <div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={me} alt="" />
                        </div>
                    </div>
                    <h2 className='typeWriter font-bold fontg text-5xl text-white '>
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
                <div className=''>
                    <a className='downlaod' href={resume} download={resume}>
                        <button className="btn btn-outline btn-info">
                            Download Resume <FaDownload className='ml-3'></FaDownload> </button></a>
                    <Link to='/contact' className=' ' >
                        <button className="btn btn-outline btn-info hireMe hidden lg:block" >
                            Hire Me </button></Link>
                </div>
            </div>
        </div >
    );
};

export default Banner;