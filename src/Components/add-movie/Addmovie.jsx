import { useState } from 'react';
import './Addmovie.css'
import PropTypes from 'prop-types';
// import { v4 as uuidv4 } from 'uuid';
// uuidv4(); // 

Addmovie.propTypes = {
  addMovie: PropTypes.func.isRequired, // Agar funksiya bo‘lsa
  setLocal: PropTypes.func.isRequired, // Agar funksiya bo‘lsa
};

function Addmovie({addMovie, setLocal}) {


  // function setLocalStorage() {
  //   localStorage.setItem('lists', JSON.stringify(getData))
  // }
  const [movie, setMovie] = useState({
    name: '',
    watched: '',
    favorite: false,
    search: true,
    id: Math.random(),
  })

  
  function addMovieFunc(e) {
    e.preventDefault()
    addMovie(movie)
    document.querySelector('form').reset()
    setLocal()
  }

  return (
    <div className='add-movie'>
        <h2>Yangi kino qoshish</h2>
        <form onSubmit={addMovieFunc}>
            <input required type="text" onChange={(e) => {
              setMovie((prev) => {
                return {...prev, name: e.target.value}
              })
            }} placeholder='Qanday kino?'/>
            <input required type="number" onChange={(e) => {
              setMovie((prev)=> {
                return {...prev, watched: e.target.value}
              })
            }} placeholder="Necha marotaba ko'rilgan?"/>
            <button className='Submit'>Qoshish</button>
        </form>
    </div>
  )
}

export default Addmovie