import React from "react";
import "./features.css";
import Feature from "../../components/feature/Feature";

export default function Features({ ...features }) {
    return (
        <div className="gpt__features section__padding" id="features">
            <div className="gpt__features-heading">
                <h2 className="gradient__text">
                    The Future is Now and You Just Need To Realize It. Step into
                    Future Today & Make it Happen.
                </h2>
                <button type="button" className="request__button">
                    Request Early Access to Get Started
                </button>
            </div>

            <ul className="gpt__features-list">
                {features.features
                    ? features.features.map((feature, index) => {
                          return (
                              <Feature
                                  title={feature.title}
                                  text={feature.text}
                                  key={index + Math.random() * 10}
                              />
                          );
                      })
                    : "no features yet"}
            </ul>
        </div>
    );
}
