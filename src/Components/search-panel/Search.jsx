import './Search.css'
import PropTypes from 'prop-types';

Search.propTypes = {
  inputValue: PropTypes.func.isRequired,
}

function Search({inputValue}) {

  function searchFunc(e) {
    inputValue(e.target.value.toLowerCase())
  }
  return (
    <div className="search">
        <input type="text" onChange={searchFunc} placeholder="Kinolarni qidirish"/>
    </div>
  )
}

export default Search