import React from "react";
import "./NewsItem.css";

const NewsItem = ({ title, description, url, urlToImage }) => {
  return (
    <div>
      <div className="news-item">
        <img className="news-img" src={urlToImage} alt={urlToImage} />
        <h3>
          <a href={url}>{title}</a>
        </h3>
        <p className="descriptionnews">{description}</p>
      </div>
    </div>
  );
};
export default NewsItem;
