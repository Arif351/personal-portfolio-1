import React from 'react';

const Project = ({ project }) => {
    const { img, title, title2, short_details } = project;

    return (
        <div className="card w-96 md:w-11/12 shadow-xl">
            <figure><img src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <h4 className='card-title'>{title2}</h4>
                <p>{short_details}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">EXPLORE MORE</button>
                </div>
            </div>
        </div>
    );
};

export default Project;