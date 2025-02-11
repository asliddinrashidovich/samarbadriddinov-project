import Appfilter from "../../Components/app-filter/Appfilter"
import Search from "../../Components/search-panel/Search"
import './FilterLayout.css'

function FilterLayout() {
  return (
    <div className="filter">
        <Search/>
        <Appfilter/>
    </div>
  )
}

export default FilterLayout