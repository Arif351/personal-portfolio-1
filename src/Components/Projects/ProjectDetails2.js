import React from 'react';
import { Link } from 'react-router-dom';

const ProjectDetails2 = ({ project }) => {
    const { title, title2, short_details, see_more } = project;
    const { ss1, ss2, ss3, details, live_site, github } = see_more;
    const sentence = details.split('.')


    return (
        <div className="card w-10/12 shadow-xl  mx-auto my-6 bg-slate-500">
            <div className='gap-5 p-5 grid grid-cols-1 lg:grid-cols-3'>
                <figure><img src={ss1} alt="" className='rounded-xl' /></figure>
                <figure><img src={ss2} alt="" className='rounded-xl' /></figure>
                <figure><img src={ss3} alt="" className='rounded-xl' /></figure>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <h4 className='card-title'>{title2}</h4>
                <ul>
                    <li>
                        {sentence}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ProjectDetails2;