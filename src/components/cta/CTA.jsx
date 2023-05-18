import React from "react";
import "./cta.css";

export default function CTA() {
    return (
        <div className="gpt__cta section__padding">
            <div className="gpt__cta-container gradient-bar">
                <p className="pre-title">Request Early Access to Get Started</p>
                <div className="gpt__cta-headline">
                    <h3>
                        Register today & start exploring the endless
                        possiblities.
                    </h3>
                    <button type="button" className="gpt__cta-button">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
}
