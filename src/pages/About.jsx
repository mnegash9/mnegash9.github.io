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
                  I'm a recent graduate from Lehigh University with a B.S. in Computer Engineering. I have a passion for building things, whether it's hardware or software.
                  I recently also passed the NCEES FE Exam and will (very soon) obtain my EIT certification. Here is my resume:
                </p>
                
                <iframe
                  src={Resume}
                  width="860px"
                  height="1150px"
                  style={{ border: 'none', marginLeft: '20px', borderRadius: '10px' }}
                  title="Resume"
                />

              </div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ justifyContent: 'center', alignContent: 'center' }}>
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
