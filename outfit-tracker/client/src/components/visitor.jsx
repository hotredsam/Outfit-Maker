import React from "react";
import './visitor.css';
import videoBg from '../assets/clothing.mp4'


export default function Visitor() {
    return (
        <div>
            <div className="overlay"></div>
            <video src={videoBg} autoPlay loop muted />
            <div className="content">
                <h1>Outfit Creator</h1>
                <p>Outfit planning made easy!</p>
            </div>
        </div>
    )
}
