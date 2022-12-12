import React from 'react';
import { FaGlobe } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProjectDetails2 = ({ project }) => {
    const { title, title2, see_more } = project;
    const { ss1, ss2, ss3, details, live_site, github } = see_more;
    const sentence = details.split('.')


    return (
        <div className="card w-11/12 shadow-2xl  mx-auto my-10 bg-slate-800">
            <div className='gap-5 p-5 grid grid-cols-1 lg:grid-cols-3'>
                <figure><img src={ss1} alt="" className='rounded-xl' /></figure>
                <figure><img src={ss2} alt="" className='rounded-xl' /></figure>
                <figure><img src={ss3} alt="" className='rounded-xl' /></figure>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <h4 className='card-title'>{title2}</h4>
                <ul className='mx-12'>
                    {sentence.map((sent, i) => <li className='list-disc' key={i}>{sent}</li>)}
                </ul>
            </div>
            <div className='mx-auto pb-5'>
                <button className='btn btn-outline btn-primary mr-5'> <a href={live_site} target="_blank" rel="noreferrer">
                    Live Site
                </a> </button>
                <button className='btn btn-outline btn-info'> <a href={github} target="_blank" rel="noreferrer">
                    GitHub
                </a> </button>

            </div>
        </div>
    );
};

export default ProjectDetails2;