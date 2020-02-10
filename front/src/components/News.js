import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './News.css'
import NewsCard from './NewsCard';

const News = () => {

const [articles, setArticles] = useState([])
const [articlesByCategorie, setArticlesByCategorie] = useState([])
const [categories, setCategories] = useState([])


const getArticles = async () => {
  const result = await
    axios.get('http://localhost:8000/article')
        setArticles(result.data)
        setArticlesByCategorie(result.data)
}  

  const articlebyCat = (e) => {
    if(e.target.value === "Tous") {
      return setArticlesByCategorie(articles)
    }
    const articlesByCat = articles.filter(catArticle => catArticle.cat_name === e.target.value)
    setArticlesByCategorie(articlesByCat)
  }

  useEffect(() => {
    axios.get('http://localhost:8000/article/categorie')
      .then(res => {
        console.log(res);
        setCategories(res.data)
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  useEffect(() => {
    getArticles()
  },[])

  return (
    <div className='pageNews'>
    <div className='container mx-auto'>
        <label className='text-white mt-3'>Sélectionnez une catégorie</label>

      <select className="browser-default custom-select mb-5 " onChange={(e)=>articlebyCat(e)} >
        {categories && categories.map((categorie, i) => {
          return (<option key={i} value={categorie.cat_name}>{categorie.cat_name}</option>)
        })}
      </select>

      <div className='row mx-auto'>
        {articlesByCategorie && articlesByCategorie.map((article, i) => {
          return (<NewsCard key={i} article={article} />)
        }
        )}
      </div>
    </div>
    </div>
  );
}

export default News;