import React from "react";
import { FiGithub, FiLinkedin} from "react-icons/fi";

const Social = () => {
    return (
        <div className="home__social">
            {/* <a href="https://twitter.com/" className="home__social-icon" target="_blank" rel="noreferrer">
                <FiTwitter />
            </a> */}
            <a href="https://github.com/R0B3R799" className="home__social-icon" target="_blank" rel="noreferrer">
                <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/rob-ord/" className="home__social-icon" target="_blank" rel="noreferrer">
                <FiLinkedin />
            </a>
        </div> 
    ); 
}

export default Social;