import React, { useState, useEffect } from "react";
import axios from "axios";
import "./NewsList.css";
import NewsItem from "./NewsItem";

const newsApiKey = process.env.REACT_APP_API_KEY_NEWS;

const newsApi = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsApiKey}`;

const NewsList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(newsApi);
      console.log(response);
      setArticles(response.data.articles);
    };
    getArticles();
  }, []);

  return (
    <div>
      {articles.map((article) => {
        return (
          <NewsItem
            key={article.title}
            title={article.title}
            description={article.description}
            url={article.url}
            urlToImage={article.urlToImage}
          />
        );
      })}
    </div>
  );
};

export default NewsList;
