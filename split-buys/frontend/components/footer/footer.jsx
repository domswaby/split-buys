import React from "react";
import PurpleDiamond from "../svgs/purple_diamond";
import TwitterBird from "../svgs/twitter_bird";
import Github from "../svgs/github";
import LinkedIn from "../svgs/linked_in";


const Footer = () => {
    return (
        <footer className="footer-tag">
            <div className="footer-wrap">
                <div className="info-lists">
                    <ul>
                        <li>Split Buys</li>
                        <li>About</li>
                        <li>Press</li>
                        <li>Jobs</li>
                        <li>Calculators</li>
                        <li>API</li>
                    </ul>
                    <ul>
                        <li>Account</li>
                        <li>Log in</li>
                        <li>Sign up</li>
                        <li>Reset password</li>
                        <li>
                            <PurpleDiamond /> 
                            <span>
                                Splitwise Pro
                            </span>
                        </li>
                    </ul>
                    <ul>
                        <li>More</li>
                        <li>Contact us</li>
                        <li>FAQ</li>
                        <li>Terms of Service</li>
                        <li>
                            <TwitterBird /> 
                            <Github /> 
                            <LinkedIn />
                        </li>
                    </ul>
                </div>
                <div className="made-with-wrap">
                    <p>Made with :) in New York, NY, USA</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer; 