import { React } from "react";
import LinkedInButton from "./LinkedInButton";

export default function Footer() {
    return (
        <div className="footer"  >
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <p style={{ marginRight: '20px' }}>I love meeting new people, you can reach me at <a className="email" href="mailto:matyas.negash@yahoo.com">matyas.negash@yahoo.com</a></p>
                <LinkedInButton />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <p> Designed by me (Matyas Negash) using React </p>

            </div>
        </div>
    );
}