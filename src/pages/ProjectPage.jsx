import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SystemCompDiagram from "../assets/buzz-component-diagram.svg";
import ScreenshotUI from "../assets/buzz-flow-gif.gif"

const ProjectPage = () => {
    const { projectId } = useParams();

    // You can add more project details here
    const projectDetails = {
        thebuzz: {
            title: 'The Buzz Project',
            description: `Culmination of a semester long project. Initially privately hosted at Lehigh, it now lives in a Dokku container in an Amazon EC2 instance.
            Below is a system component diagram.`,
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
            </header>
            <main>
                <div style={{ display: 'flex' }}>

                    <h1 style={{ marginTop: 300, flex: 1, marginLeft:'12px' }} className="text-3xl font-bold mb-4">{project.title}</h1>

                    <div className="projects" style={{ flex: 2, height: "300px", width: "500px", marginTop: "120px", marginLeft: "0px" }}>
                        <div style={{ marginLeft: 30 }}>
                            <p className="text-gray-700">Culmination of a semester long project. Initially privately hosted at Lehigh, it now lives in a Dokku container in an Amazon EC2 instance.</p>
                            <p>To the right is a system component diagram.</p>
                            <p>It uses a Supabase database, Google OAuth 2.0, Memcachier for caching, and Google Drive services to allow for file and image sharing.</p>
                            <p>The project's emphasis was on following the principles of a 12 factor app as follows: </p>
                            <ol>
                                <li>One version controlled codebase</li>
                                <li>Clearly stated and isolated dependencies</li>
                                <li>Store configuration in the environment</li>
                                <li>Treat backing services as attached resources</li>
                                <li>Strictly separate build and run stages </li>
                                <li>Execute the app as one or more stateless processes</li>
                                <li>Export services as ports</li>
                                <li>Set up services to scale out with the process model</li>
                                <li>Fast startup and graceful shutdown</li>
                                <li>Keep development, staging, and production as similar as possible</li>
                                <li>Treat logs as event streams</li>
                                <li>Run admin/management tasks as one-off processes</li>
                            </ol>
                            <p>The Mobile was designed in Flutter, the Web component with HTML/CSS/JS, and the Backend and Admin command line client (for handling database interactions) components were both designed in Java.</p>
                            <a target="_blank" rel="noopener noreferrer" href="https://matyas.homelinuxserver.org"><u>Link to The Buzz</u></a>
                            <p>Designed in collaboration with Sean, Monica, Evan, and Mohamed</p>
                        </div>

                    </div>
                    <div style={{ flex: 3, marginLeft:'12px', marginTop:'120px' }} className='project-images'>
                        <img src={SystemCompDiagram} className='sticky-image' style={{ maxWidth: '85%' }} />
                        <img src={ScreenshotUI} className='sticky-image' style={{ maxWidth: '85%', marginTop:'25px'}} />
                    </div>
                </div>
            </main>
        </section >
    );
};

export default ProjectPage;