import React, { useState } from 'react';
import Project from './Project';

const Projects = () => {
    const [projects, setProjects] = useState([])

    fetch('project.json')
        .then(res => res.json())
        .then(data => setProjects(data))


    return (
        <div>
            <div className='text-center mt-8'>
                <h3 className="text-3xl text-white font-bold font-sans">MY PROJECTS</h3>
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 lg:ml-10 mt-5 md:ml-12'>
                {
                    projects.map(project => <Project
                        key={project.id}
                        project={project}
                    ></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;