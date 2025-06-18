import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SystemCompDiagram from "../assets/buzz-component-diagram.svg";
import BuzzUI from "../assets/buzz-flow-gif.gif"
import TerracoreUI from "../assets/terracore-ui.gif";
import WiringDiagram from "../assets/terracore-wiring-diagram.jpg";
import PCB from "../assets/terracore-pcb.png";
import Footer from '../components/Footer';
import Logo from '../components/Logo';

const ProjectPage = () => {
    const { projectId } = useParams();

    // You can add more project details here
    const projectDetails = {
        thebuzz: {
            title: 'The Buzz Project',
            description: <em>Share text, files, or images, <br></br> collaborate internally, and <br></br>vote on ideas</em>,
        },
        terracore: {
            title: 'Terracore',
            description: <em>Terracore is a project that focuses on precision agriculture using IoT devices.</em>
        }
    };

    const project = projectDetails[projectId];

    if (projectId == 'thebuzz') {
        return (
            <>
                <section >
                    <Logo />
                    <main >
                        <div className='projectlayout' style={{ display: 'flex', overflow: "auto" }}>
                            <div style={{ flex: 1, marginLeft: '12px', marginTop: 300 }}>
                                <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
                                {project.description}
                            </div>

                            <div style={{ flex: 2, marginTop: "120px", marginLeft: "0px", flexDirection: "column" }}>
                                <div style={{ marginLeft: 30 }}>
                                    <p className="text-gray-700">Culmination of a semester long project. Initially privately hosted at Lehigh, it now lives in a Dokku container in an Amazon EC2 instance.</p>
                                    <p>To the right is the system component diagram.</p>
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
                                    <p>(Designed in collaboration with Sean, Monica, Evan, and Mohamed).</p>
                                </div>

                            </div>
                            <div style={{ flex: 3, marginLeft: '12px', marginTop: '120px' }} className='project-images'>
                                <img src={SystemCompDiagram} className='sticky-image' style={{ maxWidth: '85%' }} />
                                <img src={BuzzUI} className='sticky-image' style={{ maxWidth: '85%', marginTop: '25px' }} />
                                <section>
                                    <h2>Give it a try here </h2>
                                    <p>The Buzz is an idea sharing app for private internal discussion (like in a company) and allows posting of ideas, comments, and files/images.</p>
                                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center", alignItems: "center" }}>
                                        <Link target="_blank" to='https://thebuzz.homelinuxserver.org'>
                                            <div style={{ borderRadius: 20, backgroundColor: "#222831", cursor: "pointer" }}>
                                                <p style={{ color: "white", fontSize: 30, padding: "20px 30px" }}>
                                                    <u>The Buzz</u>
                                                </p>
                                            </div>
                                        </Link>

                                    </div>
                                </section>
                            </div>
                        </div>

                    </main>
                </section >
                <Footer />
            </>
        );
    } else if (projectId == 'terracore') {
        return (
            <>
                <section >
                    <Logo />
                    <main >
                        <div className='projectlayout' style={{ display: 'flex', overflow: "auto" }}>
                            <div style={{ flex: 1, marginLeft: '12px', marginTop: 300 }}>
                                <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
                                {project.description}
                            </div>

                            <div style={{ flex: 2, marginTop: "120px", marginLeft: "0px", flexDirection: "column" }}>
                                <div style={{ marginLeft: 30 }}>
                                    <p className="text-gray-700">According to the UN, food production has to increase 50% by 2050 <Link target='_blank' to='https://www.fao.org/global-perspectives-studies/food-agriculture-projections-to-2050/en/'>[1]</Link>. Competition for land, however is projected to increase, especially with factors like human settlement limiting land used for agriculture.</p>
                                    <p>Therefore, there is an acute need for precision agriculture, and one our project aims to address. Terracore enables precision agriculture and environmental stewardship at scale by deploying low-cost, modular sensor nodes capable of measuring key soil parameters such as:</p>
                                    <ul>
                                        <li>Soil Moisture </li>
                                        <li>Soil Compaction</li>
                                        <li>GPS Location</li>
                                        <li>Temperature</li>
                                        <li>Humidity</li>
                                        <li>CO₂ Levels</li>
                                        <li>Ambient/UV Light</li>
                                    </ul>
                                    <p>Data collected by the sensors is transmitted wirelessly to a centralized platform, where it is visualized and analyzed through intuitive dashboards.</p>
                                    <p>To the right is the component wiring diagram.</p>
                                    <p>Most environmental sensors, including the CO₂ sensor (SCD41), humidity/temperature/pressure (BME280), and UV/Ambient (LTR390), communicate via the I²C protocol, sharing common SDA and SCL lines with pull-up resistors. Additional sensors, such as the soil moisture, compaction, and GPS modules, connect through UART, analog, or serial interfaces to provide comprehensive soil and environmental data.</p>
                                    <p>From the wiring digram, we were able to build a PCB in <b>KiCad</b> to reduce the component size, and make it plug and play with the sensors we chose.</p>
                                    <p>Using KiCad was frustrating initially (since we had to make custom footprints and symbols for each component/sensor) but we prevailed and printed 100mm by 80mm circuit boards.</p>
                                </div>

                            </div>
                            <div style={{ flex: 3, marginLeft: '12px', marginTop: '120px' }} className='project-images'>
                                <img src={WiringDiagram} className='sticky-image' style={{ maxWidth: '85%' }} />
                                <img src={PCB} className='sticky-image' style={{ maxWidth: '85%', marginTop: '25px' }} />
                                <img src={TerracoreUI} className='sticky-image' style={{ maxWidth: '85%', marginTop: '25px' }} />
                                <section>
                                    <h3>View here: <Link target="_blank" to='https://terracore-website.onrender.com'> TerraCore </Link></h3>
                                    <p>Sensor data was live at the following address, it is now just demo data that was previously measured.</p>
                                </section>
                            </div>
                        </div>

                    </main>
                </section >
                <Footer />
            </>
        );
    } else {
        return <div>Project not found</div>;
    }
};

export default ProjectPage;