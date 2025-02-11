import './Header.css'
import PropTypes from 'prop-types';

Header.propTypes = {
  movieLength: PropTypes.number.isRequired, // Agar massiv bo‘lsa
  likedLength: PropTypes.number.isRequired, // Agar massiv bo‘lsa
}


function Header({movieLength, likedLength}) {
  return (
    <div className="header container">
        <h1>barcha kinolar soni: {movieLength}</h1>
        <h1>Sevimli kinolar: {likedLength}</h1>
    </div>
  )
}

export default Header