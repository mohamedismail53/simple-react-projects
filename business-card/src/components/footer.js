import React from "react";
import twitter from '../assets/twitter.png';
import facebook from '../assets/facebook.png';
import insta from '../assets/instagram.png';
import github from '../assets/github.png';


export default function Footer() {
    return (
        <footer>
            <ul id="footer">
                <li><img src={twitter} alt="twitter"/></li>
                <li><img src={facebook} alt="facebook"/></li>
                <li><img src={insta} alt="instagram"/></li>
                <li><img src={github} alt="github"/></li>
            </ul>
        </footer>
    );
}