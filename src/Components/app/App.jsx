import { useState } from 'react'
import Addmovie from '../add-movie/Addmovie'
import Appfilter from '../app-filter/Appfilter'
import Filmlists from '../film-lists/Filmlists'
import Header from '../header/Header'
import Search from '../search-panel/Search'
import './App.css'

function App() {
  
  const localData = JSON.parse(localStorage.getItem('list')) ? JSON.parse(localStorage.getItem('list')) : [];
  const [data, setData] = useState(localData);
  const [all, setAll] = useState(data);
  const [favor, setFavor] = useState(data);
  const [most, setMost] = useState(data);

  
  // set to local storage
  function setLocalStorage() {
    localStorage.setItem('list', JSON.stringify(data))
  }

  // tap to like
  function giveFavorite(nameOfTarget) {
    setData((prev) => {
      return prev.map((item)=> {
        if(item.name == nameOfTarget) {
          return {...item, favorite: item.favorite ? false : true}
        } else {
          return {...item}
        }
      })
    })
  }

  // add new movie
  function addMovie(newData) {
    setData((prev) => {
      return [...prev, newData]
    })
  }

  // search section
  function searchFunc(val) {
    setData((prev)=> {
      return prev.map((movie) => {
        let loverName = movie.name.toLowerCase()
        if(loverName.includes(val)) {
          return {...movie, search: true}
        } else {
          return {...movie, search: false}
        }
      })
    })
  }

  // delete Item
  function deleteFilm(val) {
    setData((prev)=> {
      return prev.filter((movie) => {
        return movie.name != val
      })
    })  
  }

  // Filter Methods
  function allFilmsFunc(val) {
    val.target.classList.add('active')
    document.getElementById('secondBtn').classList.remove('active')
    document.getElementById('lastBtn').classList.remove('active')

    setAll(data)
    console.log('asliddin')
  }
  
  function favoriteFilmsFunc(val) {
    val.target.classList.add('active')
    document.getElementById('firstBtn').classList.remove('active')
    document.getElementById('lastBtn').classList.remove('active')
    setFavor((prev) => {
      return prev.filter((item)=> {
        return item.favorite
      })
    })
    setData(favor)
    
    console.log(favor)
  }
  
  function mostWatchedFilmsFunc(val) {
    val.target.classList.add('active')
    document.getElementById('firstBtn').classList.remove('active')
    document.getElementById('secondBtn').classList.remove('active')
    setMost((prev)=> {
      return prev.sort((film1, film2)=> {
        return film2.watched - film1.watched
      })
    })
    setData(most)
  }

  // the number  of liked films
  function likedFunc() {
    let filteredData = data.filter(item => {
      return item.favorite
    })
    return filteredData.length
  }
  let numberOfLiked = likedFunc()
  
  setLocalStorage()

  return (
    <div className='App'>
      <Header movieLength={data.length} likedLength={numberOfLiked}/>
      <div> 
        <Search inputValue={searchFunc}/>
        <Appfilter allFilms={allFilmsFunc} favoriteFilms={favoriteFilmsFunc} mostWatchedFilms={mostWatchedFilmsFunc}/>
      </div>
      <Filmlists setData={data} giveFavorite={giveFavorite} deleteItems={deleteFilm} />
      <Addmovie addMovie={addMovie} setLocal={setLocalStorage}/>
    </div>
  )
}

export default App
