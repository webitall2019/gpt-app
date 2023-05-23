import React from "react";
import "./blog.css";
import { Article } from "../../components";
import { blog1, blog2, blog3, blog4, blog5 } from "./imports";
export default function Blog() {
    let articles = [
        {
            img: blog1,
            date: "Jan 02 2020",
            title: "GPT-4 and Open  AI is the future. Let us exlore how it is?",
            link: {
                url: "",
                placeholder: "Read Full Article",
            },
        },
        {
            img: blog2,
            date: "June 13, 2020",
            title: "Chat GPT: Revolutionizing Conversations with AI-Powered Language Model",

            link: {
                url: "",
                placeholder: "",
            },
        },
        {
            img: blog3,
            date: "July 20 2020",
            title: "Chat GPT: Redefining Human-AI Interactions Through Advanced Language Processing",
            link: {
                url: "",
                placeholder: "",
            },
        },
        {
            img: blog4,
            date: "Aug 03 2021 ",
            title: "Chat GPT: Unleashing the Power of Artificial Intelligence in Conversational Experiences",
            link: {
                url: "",
                placeholder: "",
            },
        },
        {
            img: blog5,
            date: "Mar 08 2022",
            title: "Chat GPT: Unleashing the Power of Natural Language Understanding in Conversational AI",
            link: {
                url: "",
                placeholder: "",
            },
        },
    ];
    return (
        <div className="gpt__blog">
            <div className="gpt__blog-container section__padding">
                <h2 className="blog__heading gradient__text">
                    A lot is happening,
                    <br />
                    We are blogging about it.
                </h2>
                <div className="gpt__blog-list">
                    <div className="gpt__article-main">
                        <Article data={articles[0]} />
                    </div>
                    <div className="gpt__article-secondary">
                        {articles.slice(1).map((article, index) => {
                            return (
                                <Article
                                    data={article}
                                    key={index + Math.random() + 1}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
