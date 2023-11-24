import React from 'react';
import { Link } from 'react-router-dom';

function ArticlesList({ articles }) {
  return (
    <div id="articles-container">
      {articles.map(item => (
        <div key={item.id} className="article"> {/* Assuming each article has a unique 'id' */}
          <h2 className="article-title">{item.title}</h2>
          <span className="article-date">{item.date}</span>
          <p className="article-excerpt">{item.excerpt} ...</p>
          <Link className="button-31" to={item.link} target="_blank" rel="noopener noreferrer">Read On</Link>
        </div>
      ))}
    </div>
  );
}

export default ArticlesList;
