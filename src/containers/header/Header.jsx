import React, { useRef, useEffect } from "react";
import "./header.css";
import ai from "../../assets/ai.png";
import user1 from "../../assets/Ellipse 31.svg";
import user2 from "../../assets/Ellipse 32.svg";
import user3 from "../../assets/Ellipse 33.svg";
import user4 from "../../assets/Ellipse 34.svg";
import user5 from "../../assets/Ellipse 35.svg";
import user6 from "../../assets/Ellipse 36.svg";
import user7 from "../../assets/Ellipse 37.svg";
const visitorsThumbs = [user1, user2, user3, user4, user5, user6, user7];

export default function Header() {
    // const itemsRef = useRef([]);

    // let width = 0;
    // useEffect(() => {
    //     itemsRef.current = itemsRef.current.slice(0, visitorsThumbs.length);

    //     setTimeout(() => {
    //         itemsRef.current.map((el) => {
    //             width = el.offsetWidth + 37;
    //         });
    //     }, 1000);
    // }, [itemsRef]);

    return (
        <header className="section__padding">
            <div className="gpt__header-content ">
                <h1 className="gradient__text">
                    Let’s Build Something amazing with GPT-4 OpenAI
                </h1>
                <p>
                    Yet bed any for travelling assistance indulgence unpleasing.
                    Not thoughts all exercise blessing. Indulgence way
                    everything joy alteration boisterous the attachment. Party
                    we years to order allow asked of.
                </p>
                <form action="#" className="email-form">
                    <input
                        type="email"
                        name="user-email"
                        id="user-email"
                        placeholder=" Your
                        Email
                        Address"
                    />
                    <button type="submit">Get Started</button>
                </form>
                {/* <div className="visitors">
                    {visitorsThumbs.map((visitor, key) => (
                        <img
                            src={visitor}
                            key={key + Math.random()}
                            ref={(el) => (itemsRef.current[key] = el)}
                            style={{
                                left: itemsRef.current.offsetWidth + 37,
                            }}
                        />
                    ))}
                </div> */}
            </div>
            <div className="gpt__header-image flicker-in-1">
                <img src={ai} alt="ai-face" />
            </div>
        </header>
    );
}
