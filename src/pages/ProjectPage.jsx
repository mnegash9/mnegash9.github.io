import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProjectPage = () => {
    const { projectId } = useParams();

    // You can add more project details here
    const projectDetails = {
        thebuzz: {
            title: 'The Buzz Project',
            description: 'Description of The Buzz project...',
        },
        powerbi: {
            title: 'Power BI Project',
            description: 'Description of Power BI project...',
        },
        powerapps: {
            title: 'Power Apps Project',
            description: 'Description of Power Apps project...',
        },
    };

    const project = projectDetails[projectId];

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <section>
            <header className="header">
                <div className="myicon">
                    <nav>
                        <Link to="/"><p>matyas.</p></Link>
                    </nav>
                </div>
                <div className="mynavbar">
                    <nav>
                        <Link to="/about"><p>about</p></Link>
                        <Link to="/trips"><p>trips+hobbies</p></Link>
                    </nav>
                </div>
            </header>
            <div className="projects">
                <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
                <p className="text-gray-700">{project.description}</p>
            </div>
        </section>
    );
};

export default ProjectPage;