import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectDetails2 from './ProjectDetails2';

const ProjectDetails = () => {
    const params = useParams();

    const { data: projectDetails = [] } = useQuery({
        queryKey: ['projects'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/projectDetails/${params.id}`)
            const data = await res.json()
            console.log(data);
            return data;
        }
    });
    return (
        <div>
            <div className='text-center mt-8'>
                <h3 className="text-3xl text-white font-bold font-sans">MY PROJECTS</h3>
            </div>
            <div className=''>
                {
                    projectDetails.map(project => <ProjectDetails2
                        key={project._id}
                        project={project}
                    ></ProjectDetails2>)
                }
            </div>
        </div>
    );
};

export default ProjectDetails;