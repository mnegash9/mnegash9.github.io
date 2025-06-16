import {React} from 'react';
import { Link } from 'react-router-dom';
export default function Logo() {
    return <header className="header">
                        <div className="myicon">
                            <nav>
                                <Link to="/"><p>matyas.</p></Link>
                            </nav>
                        </div>
                    </header>;
};

