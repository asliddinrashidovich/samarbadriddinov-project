import './Filmlists.css'
import FilmItem from '../film-list-item/FilmItem'
import PropTypes from 'prop-types';

Filmlists.propTypes = {
  giveFavorite: PropTypes.func.isRequired, // Agar funksiya bo‘lsa
  deleteItems: PropTypes.func.isRequired, // Agar funksiya bo‘lsa
  setData: PropTypes.array.isRequired, // Agar massiv bo‘lsa
}


function Filmlists({setData, giveFavorite, deleteItems}) {

  function addFavorite(i) {
    let targetName = i.target.parentElement.parentElement.children[0].textContent
    giveFavorite(targetName)
  } 
  function deleteMovie(e) {
    let targetName = e.target.parentElement.parentElement.children[0].textContent
    deleteItems(targetName)
  }
  return (
    <div className="filmlists">
      <ul>
        {setData.map((film) => (
          <FilmItem name={film.name} watched={film.watched} search={film.search} favorite={film.favorite} key={film.name} addFavorite={addFavorite} deleteMovie={deleteMovie}/>
        ))}
      </ul>
    </div>
  )
}

export default Filmlists