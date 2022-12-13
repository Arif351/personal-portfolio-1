import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Project from './Project';

const Projects = () => {
    // const [projects, setProjects] = useState([])

    // fetch('project.json')
    //     .then(res => res.json())
    //     .then(data => setProjects(data))

    const { data: allProjects = [] } = useQuery({
        queryKey: ['projects'],
        queryFn: async () => {
            const res = await fetch('https://portfolio-server-pink.vercel.app/projects')
            const data = await res.json()
            console.log(data);
            return data;
        }
    });

    return (
        <div>
            <div className='text-center mt-8'>
                <h3 className="text-3xl font-bold text-white font-sans">MY PROJECTS</h3>
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 lg:ml-10 my-7 md:ml-12'>
                {
                    allProjects.map(project => <Project
                        key={project._id}
                        project={project}
                    ></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;