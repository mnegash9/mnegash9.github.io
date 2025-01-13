import { React } from "react";
import LinkedInButton from "./LinkedInButton";

export default function Footer() {
    return (
        <div className="footer" >
            <p>I love meeting new people, you can reach me at <a className="email" href="mailto:matyas.negash@yahoo.com">matyas.negash@yahoo.com</a></p>
            <div style={{ display: 'flex', justifyContent:'center', alignItems:'center'}}>
                <p style={{marginRight:'20px'}}>Designed by me (Matyas Negash) </p>
                <LinkedInButton />
            </div>
        </div>
    );
}