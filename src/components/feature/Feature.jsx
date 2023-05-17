import React from "react";
import "./feature.css";

export default function Feature({ title, text }) {
    return (
        <li className="feature-list__item">
            <h3>{title}</h3>
            <p>{text}</p>
        </li>
    );
}
