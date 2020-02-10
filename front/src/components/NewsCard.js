import React from 'react';
import './NewsCard.css'


const NewsCard = ({ article }) => {

  return (
    <div>
      <div className="card NewsCard mb-4 mr-3">
        <img className="card-img-top imgCard" src={article.url} alt=" circus" />
        <div className="card-body">
          <h6 className="card-title">{article.article_name}</h6>
          <p className="card-text containerTextCard text-left">{article.description.substring(0, 82)}…</p>
          <a href="..." className="btn BoutonLireLaSuite align-self-end btn btn-block ">Lire la suite</a>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;