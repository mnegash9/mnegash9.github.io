import { React, useEffect, useState } from "react";
import LinkedInIcon from '../assets/linkedin.svg'

export default function LinkedInButton() {
    useEffect(() => {

        return () => {

        };
    }, []);

    const [isHovered, setIsHovered] = useState(false);


    return (
        <>
            <div >
                <a href="https://www.linkedin.com/in/matyas-negash?trk=profile-badge">
                    <img src={LinkedInIcon} style={{ width: '35px', height: '30px', transform: isHovered ? 'scale(1.06)' : 'scale(1)', transition: 'transform 0.1s ease-in-out' }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
                    </img>
                </a>
            </div>


        </>
    );
}