import React from "react";
import "./article.css";

export default function Article({ data }) {
    return (
        <div className="gpt__article">
            <div className="gpt__article-img">
                <img src={data.img} alt="ai" />
            </div>
            <div className="gpt__article-content">
                <p className="gpt__article-date">{data.date}</p>
                <h3>{data.title}</h3>
                <a href="#home">
                    {data.link.url.length ? data.link.url : "read full article"}
                </a>
            </div>
        </div>
    );
}
