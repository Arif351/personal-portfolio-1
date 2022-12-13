import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="w-8/12 lg:w-6/12">
                    <h1 className="text-5xl font-bold"> About Me </h1>
                    <div className="divider"></div>
                    <p className="py-6">Hi, I am Ariful Islam, a Full Stack Web Developer. I love to work with <span className='border border-spacing-1 border-gray-400 bg-slate-700 px-1 text-white rounded-lg'>React js</span>, <span className='border border-spacing-1 border-gray-400 bg-slate-700 px-1 text-white rounded-lg'>Javascript</span>, <span className='border border-spacing-1 border-gray-400 bg-slate-700 px-1 text-white rounded-lg'>MongoDB</span>, <span className='border border-spacing-1 border-gray-400 bg-slate-700 px-1 text-white rounded-lg'>Express js</span>, <span className='border border-spacing-1 border-gray-400 bg-slate-700 px-1 text-white rounded-lg'>Node</span>, <span className='border border-spacing-1 border-gray-400 bg-slate-700 px-1 text-white rounded-lg'>Tailwind CSS</span>, <span className='border border-spacing-1 border-gray-400 bg-slate-700 px-1 text-white rounded-lg'>Bootstrap</span>, <span className='border border-spacing-1 border-gray-400 bg-slate-700 px-1 text-white rounded-lg'>React Bootstrap</span>, and <span className='border border-spacing-1 border-gray-400 bg-slate-700 px-1 text-white rounded-lg'>modern HTML</span>. I have already done some projects about services, teaching, review, etc.

                        I love to explore new technologies and work with them. I can work under pressure.  </p>
                    <Link to='/contact'><button className="btn btn-primary">Get Started</button></Link>
                </div>
            </div>
        </div>
    );
};

export default About;