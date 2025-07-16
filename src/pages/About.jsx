import React from "react";
import { useParams, Link } from 'react-router-dom';
import Footer from '../components/Footer'
import ProfilePic from "../assets/profile2.jpeg"
import Resume from "../assets/resume.pdf";

export default function About() {
  return (
    <>
      <section id="about-page">
        <header className="header">
          <div className="myicon">
            <nav>
              <Link to="/"><p>matyas.</p></Link>
            </nav>
          </div>
        </header>
        <main>
          <div className='about' style={{ display: "flex", marginTop: "120px", overflowY: 'auto' }}>
            <div style={{ marginLeft: "30px", flex: 1 }}>
              <div className='about-description' style={{}}>
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                  Hi, I'm Matyas.
                  <br className="hidden lg:inline-block" />I like to build things.
                </h1>
                <p className="">
                  I'm a recent graduate of Lehigh University with a degree in Computer Engineering. I also recently passed the NCEES FE exam and am awaiting EIT certification. I have held two previous internships, one through Lehigh's Iaccoca Program where I was stationed in Germany working at the ie3 Smart Grid Institute at TU Dortmund.
                  This past summer, I was at Sugar Land Regional Airport where I worked with Microsoft Power Suite to automate and digitize a lot of processes used by the operations agents, and tagged along for daily runway & taxiway inspections, and helped fly drone sweeps after earning my FAA Part 107 Drone certificate (commercial use of drones in the US).
                </p>
                <p>
                  I'm currently looking for a new role to use some of my experience and skills at the intersection of software and hardware to better enable the use of technology and improve the human experience.
                </p>

                <iframe
                  src={Resume}
                  width="860px"
                  height="1150px"
                  style={{ border: 'none', marginLeft: '20px', marginTop: '20px', borderRadius: '10px' }}
                  title="Resume"
                />

              </div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ justifyContent: 'center', alignContent: 'center', marginLeft: '180px' }}>
                <img
                  className="avatar"
                  alt="profile"
                  src={ProfilePic}
                />
              </div>

            </div>
          </div>

        </main>
        <Footer />
      </section>
    </>

  );
}
