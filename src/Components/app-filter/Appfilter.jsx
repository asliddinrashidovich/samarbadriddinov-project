import './Appfilter.css'
import PropTypes from 'prop-types';

Appfilter.propTypes = {
  allFilms: PropTypes.func.isRequired, // Agar massiv bo‘lsa
  favoriteFilms: PropTypes.func.isRequired, // Agar massiv bo‘lsa
  mostWatchedFilms: PropTypes.func.isRequired, // Agar massiv bo‘lsa
}


function Appfilter({allFilms, favoriteFilms, mostWatchedFilms}) {
  return (
    <div className="appfilter">
        <button id='firstBtn' onClick={allFilms} className='link first active'>Barcha kinolar</button>
        <button id='secondBtn'  onClick={favoriteFilms} className='link'>Sevimli kinolar</button>
        <button id='lastBtn'  onClick={mostWatchedFilms} className='link last'>Eng kop korilgan kinolar</button>
    </div>
  )
}

export default Appfilter    