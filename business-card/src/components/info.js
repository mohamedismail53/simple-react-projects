import React from "react";

import photo from '../assets/mohamedismail2.png'
import gmail from '../assets/gmail.png'
import linkedin from '../assets/linkedin.png'

export default function Info() {
    return (
        <section className="info-section">
            <img src={photo} alt="mohamedismail" id="photo"/>
            <h1>Mohamed Ismail</h1>
            <p id="title">Frontend Developer</p>
            <p id="website">mohamedismail.website</p>
            <div id="btns">
                <button id="gmail-btn">
                    <img src={gmail} alt="gmail"/>
                    <p>Email</p>
                </button>
                <button id="linkedin-btn">
                    <img src={linkedin} alt="linkendin"/>
                    <p>LinkedIn</p>
                </button>
            </div>
        </section>
    );
}
