import React from "react";
import { Link } from "react-router-dom";


const About = () => {
    return (
        <div id="links-and-help">
            <Link class="linked-in-link" href="https://www.linkedin.com" target="_blank"><img src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-linkedin-social-media-justicon-flat-justicon.png"/></Link>
            <Link class="github-link" href="https://github.com/domswaby" target="_blank"><img src="https://img.icons8.com/nolan/64/github.png" /></Link>            
        </div>
    )
}

export default About;