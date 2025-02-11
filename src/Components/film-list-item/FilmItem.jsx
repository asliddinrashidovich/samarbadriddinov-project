import PropTypes from 'prop-types';

FilmItem.propTypes = {
  addFavorite: PropTypes.func.isRequired, // Agar funksiya bo‘lsa
  deleteMovie: PropTypes.func.isRequired, // Agar funksiya bo‘lsa
  name: PropTypes.string.isRequired, // Agar string bo‘lsa
  watched: PropTypes.string.isRequired, // Agar string bo‘lsa
  favorite: PropTypes.bool.isRequired, // Agar string bo‘lsa
  search: PropTypes.bool.isRequired, // Agar string bo‘lsa
}

function FilmItem({name, watched, favorite, addFavorite, search, deleteMovie}) {
  return (
    <li className={`list ${favorite && 'favorite'}  ${search ? '' : 'hidden'}` }>
        <h2>{name}</h2>
        <div className='stats'>
        <h3 className='count'>{watched}</h3>
        <div className='icon eye' onClick={addFavorite}>
            <i className="fa-solid fa-eye"></i>
        </div>
        <div className='icon delete' onClick={deleteMovie}>
            <i className="fa-solid fa-trash"></i>
        </div>
        <div className={`icon favorite  ${favorite ? '' : 'visibility'}`}  >
            <i className="fa-solid fa-star"></i>
        </div>
        </div>
    </li>
  )
}

export default FilmItem