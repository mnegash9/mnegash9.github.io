import React from "react";
import { useParams, Link } from 'react-router-dom';
import Footer from '../components/Footer'
import ProfilePic from "../assets/profile2.jpeg"
import LinkedInButton from "../components/LinkedInButton";

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
          <div className='about' style={{ display: "flex", marginTop: "120px", overflowY:'auto' }}>
            <div style={{ marginLeft: "12px", flex: 1 }}>
              <div className='about-description' style={{  }}>
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                  Hi, I'm Matyas.
                  <br className="hidden lg:inline-block" />I like to build things.
                </h1>
                <p className="">
                  I love building things (software + hardware). Some of my past projects include making a
                  homemade e-bike, working on cars, and replacing the bearing of an LG washer (boo planned obsolescence).
                </p>
                <p>
                  Currently, I'm a senior Computer Engineering student at Lehigh University. I'm working with a partner on <Link target="_blank" to="https://terracore-website.onrender.com/"><u>Terracore</u></Link>,
                  a soil sensing project using the Particle IoT ecosystem.
                </p>

              </div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ justifyContent:'center', alignContent:'center'}}>
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
