import axios from "axios";
import { CLEAR_ORDER, CLEAR_DETAIL, FILTER_ALL, GET_ALL_POKEMONS, GET_ALL_TYPES, GET_POKEMON_BY_ID, GET_POKEMON_BY_NAME, ORDER_BY_NAME, ORDER_BY_ATTACK } from "./actionTypes";

const getAllPokemons = () => {
    return async (dispatch) => {
        const apiData = await axios("/pokemons");
        const pokemons = apiData.data;
        
        dispatch({type: GET_ALL_POKEMONS, payload: pokemons})
    }
}

const getAllTypes = () => {
    return async (dispatch) => {
        const apiData = await axios("/types");
        const types = apiData.data;
        
        dispatch({type: GET_ALL_TYPES, payload: types})
    }
}

const getPokemonById = (id) => {
    return async(dispatch) => {
        const apiData = await axios(`/pokemons/${id}`);
        const pokemon = apiData.data;
        dispatch({type: GET_POKEMON_BY_ID, payload: pokemon})
    }
}

const getPokemonByName = (name) => {
    return async (dispatch) =>{
        try {
            const apiData = await axios(`/pokemons?name=${name}`);
            const pokemon = apiData.data

            dispatch({type: GET_POKEMON_BY_NAME, payload: pokemon})
        } catch (error) {
            dispatch({type: GET_POKEMON_BY_NAME, payload: error.message})
        }
    }
}

const orderByName = (order) => {
    return {type: ORDER_BY_NAME, payload: order}
}

const orderByAttack = (order) => {
    return {type: ORDER_BY_ATTACK, payload: order}
}

const filterAll = (type, source) => {
    return {type: FILTER_ALL, payload: {type: type, source: source}}
}

const clearDetail = () => {
    return {type: CLEAR_DETAIL}
}

const clearOrder = () => {
    return {type: CLEAR_ORDER}
};


export { clearOrder, clearDetail, filterAll, getAllPokemons, getAllTypes, getPokemonById, getPokemonByName, orderByName, orderByAttack }