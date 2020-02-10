import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Gallery.css'


const Gallery = () => {

const [galleries, setGalleries] = useState([])



useEffect(() => {
  axios.get('http://localhost:8000/gallery')
    .then(res => {
      console.log('gallery :', res);
      setGalleries(res.data)
    })
}, []);


  return (
    <div className='container-fluid my-4'>
      <div className='containerGallery'>
        {galleries && galleries.map((gallery, i) => {
          return(<img key={i} className='imageGalleryParam' src={gallery.url} alt={gallery.url}/>)
        }) }
        
      </div>
    </div>
  );
}

export default Gallery;
