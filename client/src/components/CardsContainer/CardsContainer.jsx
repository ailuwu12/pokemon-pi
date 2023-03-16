import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import style from "./CardsContainer.module.css";
import Card from "../Card/Card";
import Filters from "../Filters/Filters";

const CardsContainer = () => {
    const pokemonsGlobal = useSelector(state => state.pokemonsGlobal);
    const filteredPokemons = useSelector(state => state.filteredPokemons);
    const orderedPokemons = useSelector(state => state.orderedPokemons);
    const [pokemons, setPokemons] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setPokemons(pokemonsGlobal)
        setIsLoading(false);
    }, [pokemonsGlobal])

    useEffect(() => {
        setPokemons(filteredPokemons);
        setPage(1);
        setIsLoading(false);
    }, [filteredPokemons]);

    useEffect(() => {
        setPokemons(orderedPokemons);
        setPage(1);
        setIsLoading(false);
    }, [orderedPokemons]);

    console.log(pokemons)

    if (isLoading || !pokemons.length) {
        return (
            <div>
                <div className={style.container}>
                    <img src="https://i.gifer.com/5Q0v.gif" alt="loading"/>
                    <p>Loading pokemons...</p>
                </div>
            </div>
        )
    }
    
    if(pokemons.length === 1){
        const pokemon = pokemons[0]
        return(
            <div>
                <Filters/>
                <div className={`${style.container} ${style.cards}`}>
                    <Card
                    id={pokemon.id}
                    name={pokemon.name}
                    image={pokemon.image}
                    types={pokemon.types}
                    key={pokemon.id}
                    />
                </div>
                <button onClick={() => window.location.reload()}>See all Pokemons</button>
            </div>
        )
    }
    
    if(typeof pokemons[0] === "string"){
        return(
            <div>
                <Filters/>
         <div className={style.container}>
          <h1>Error 404: Pokemons Not Found</h1>
          <img src="https://pink.nyc3.cdn.digitaloceanspaces.com/2023/02/03/file_11106076_512x512.webp" className={style.errorImage} alt="Error"/>
        </div>
          <button onClick={() => window.location.reload()}>Back To Home</button>
          </div>
        )
    }

    const pageSize = 12;
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const actualPage = pokemons.slice(startIndex, endIndex);
    const totalPages = Math.ceil(pokemons.length / pageSize);
    const ratioPages = [page - 5, page + 5];
    let pagination = [];

    if(pokemons.length > pageSize){
        for (let i = Math.max(1, ratioPages[0]); i < Math.min(ratioPages[1], totalPages + 1); i++) {
            if (page === i) {
              pagination.push(
                <button className={style.clicked} key={i} onClick={() => setPage(i)}>
                  {i}
                </button>
              );
            } else {
              pagination.push(
                <button key={i} onClick={() => setPage(i)}>
                  {i}
                </button>
              );
            }
                    
        }
    
        return(
            <div>
                 <Filters/>
                <div className={`${style.container} ${style.cards}`}>
                    {actualPage?.map(pokemon => {
                        return <Card
                        id={pokemon?.id}
                        name={pokemon?.name}
                        image={pokemon?.image}
                        types={pokemon?.types}
                        key={pokemon?.id}
                        />})}
                </div>

    
                {actualPage.length < pageSize ? (
      <div><button onClick={() => setPage(page -1)}>Previous</button><span>Page {page} of {totalPages}</span></div>
      
    ) : page === 1 ? (
     <div><button onClick={() => setPage(page + 1)}>Next</button><span>Page {page} of {totalPages}</span></div>
    ) : page < totalPages ? (
      <div>
        <button onClick={() => setPage(page -1)}>Previous</button>
        {pagination}
        <button onClick={() => setPage(page + 1)}>Next</button>
        <span>Page {page} of {totalPages}</span>
      </div>
    ) : (
      <button onClick={() => setPage(page -1)}>Previous</button>
    )}
    
            </div>
        )
    }else{
        return(
            <div>
                 <Filters/>
                <div className={`${style.container} ${style.cards}`}>
                    {actualPage?.map(pokemon => {
                        return <Card
                        id={pokemon?.id}
                        name={pokemon?.name}
                        image={pokemon?.image}
                        types={pokemon?.types}
                        key={pokemon?.id}
                        />})}
                </div>
                </div>)
    }
    
    

}

export default CardsContainer;


