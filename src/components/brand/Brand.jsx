import React from "react";
import "./brand.css";
import { google, slack, atlassian, dropbox, shopify } from "./imports";

export default function Brand() {
    return (
        <div className="section__padding">
            <ul className="brands-list">
                <li>
                    <img src={google} alt="google-icon" />
                </li>
                <li>
                    <img src={slack} alt="slack-icon" />
                </li>
                <li>
                    <img src={atlassian} alt="atlassian-icon" />
                </li>
                <li>
                    <img src={dropbox} alt="dropbox-icon" />
                </li>
                <li>
                    <img src={shopify} alt="shopify-icon" />
                </li>
            </ul>
        </div>
    );
}
