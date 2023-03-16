import CardsContainer from "../../components/CardsContainer/CardsContainer";
import NavBar from "../../components/NavBar/NavBar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllPokemons } from "../../redux/actions/actions";

const Home = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllPokemons());
    }, [dispatch])

        return(
            <div>
            <NavBar/>
            <CardsContainer/>
            </div>
        )

    
}

export default Home