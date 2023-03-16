import style from "./SearchBar.module.css";
import { getPokemonByName } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

const SearchBar = () => {

  const dispatch = useDispatch()
  const [name, setName] = useState("");

  const changeHandler = (event) => {
    setName(event.target.value)
  }

  const onSearch = () => {
    dispatch(getPokemonByName(name)) 

}

    return(
      <div className={style.searchContainer}>
        <input type="text" value={name} placeholder="Pokemon Name..." onChange={changeHandler}/>
        <button type="submit" onClick={onSearch}>Search</button>
      </div>      
    )
}
export default SearchBar