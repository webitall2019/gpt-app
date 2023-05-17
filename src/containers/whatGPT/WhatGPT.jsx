import React from "react";
import "./whatGPT.css";
import { Feature } from "../../components";
export default function WhatGPT() {
    let features = [
        {
            title: "Chatbots",
            text: "We so opinion friends me message as delight. Whole front do of plate heard oh ought. ",
        },
        {
            title: "Knowledge base",
            text: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments",
        },
        {
            title: "Education",
            text: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments",
        },
    ];

    return (
        <div className="gpt__whatgpt4" id="whatgpt4">
            <div className="gpt__whatgpt-container section__padding">
                <div className="gpt__whatgpt-headline">
                    <h3>What is GPT-4</h3>
                    <p>
                        We so opinion friends me message as delight. Whole front
                        do of plate heard oh ought. His defective nor convinced
                        residence own. Connection has put impossible own
                        apartments boisterous. At jointure ladyship an insisted
                        so humanity he. Friendly bachelor entrance to on by.
                    </p>
                </div>
                <div className="gpt__whatgpt-middle">
                    <h2 className="gradient__text">
                        The possibilities are beyond&nbsp;
                        <br />
                        your imagination
                    </h2>
                    <p>Explore The Library</p>
                </div>
                {features.map((feature, index) => {
                    return (
                        <Feature
                            title={feature.title}
                            text={feature.text}
                            key={index + Math.random() * 1}
                        />
                    );
                })}
                {/* <Features features={features} /> */}
            </div>
        </div>
    );
}
