import { CLEAR_ORDER, CLEAR_DETAIL, FILTER_ALL, GET_ALL_POKEMONS, GET_ALL_TYPES, GET_POKEMON_BY_ID, GET_POKEMON_BY_NAME, ORDER_BY_NAME, ORDER_BY_ATTACK} from "./actions/actionTypes";

const initialState = {
    pokemonsGlobal: [],
    types: [],
    filteredPokemons: [],
    orderedPokemons: [],
    selectedPokemon: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        
        case GET_ALL_POKEMONS:
            return {...state, pokemonsGlobal: action.payload};

        case GET_ALL_TYPES:
            return {...state, types: action.payload};

        case GET_POKEMON_BY_ID:
          console.log(action.payload)
            return {...state, selectedPokemon: action.payload};

        case GET_POKEMON_BY_NAME:
            return {...state, filteredPokemons: action.payload};

            case FILTER_ALL:
              let allPokemons = state.orderedPokemons.length ? [...state.orderedPokemons] : [...state.pokemonsGlobal]
              let filteredByType = allPokemons.filter(pokemon => pokemon.types.includes(action.payload.type))
  
              if(action.payload.type === "all"){
                filteredByType = [...allPokemons]
              }
  
              if(filteredByType === "error"){
                return {...state, filteredPokemons: "error"}
              }
  
              let filteredBySource = []
              if(action.payload.source === "dbPokemons"){
                filteredBySource = filteredByType.filter(pokemon => isNaN(Number(pokemon.id)))
              }else if(action.payload.source === "apiPokemons"){
                filteredBySource = filteredByType.filter(pokemon => !isNaN(Number(pokemon.id)))
              }else{
                filteredBySource = [...filteredByType]
              }
  
              if(filteredBySource.length === 0){
                return {...state, filteredPokemons: "error"}
              }else{
                return {...state, filteredPokemons: filteredBySource}
              }

          case ORDER_BY_NAME:
            let allPokemonsNames = typeof state.filteredPokemons !== "string" ? [...state.filteredPokemons] : [...state.pokemonsGlobal];

            if(action.payload === "aToZ"){
             let orderPokemonsNames = allPokemonsNames.sort((a, b) => {
                if (a.name.toLowerCase() < b.name.toLowerCase()) {
                  return -1;
                }
                if (a.name.toLowerCase() > b.name.toLowerCase()) {
                  return 1;
                }
                return 0;
              })
              return {...state, orderedPokemons: orderPokemonsNames}
            }

            if(action.payload === "zToA"){
              let orderPokemonsNames = allPokemonsNames.sort((a, b) => {
                 if (a.name.toLowerCase() < b.name.toLowerCase()) {
                   return 1;
                 }
                 if (a.name.toLowerCase() > b.name.toLowerCase()) {
                   return -1;
                 }
                 return 0;
               })
               return {...state, orderedPokemons: orderPokemonsNames}
             }
             break;

            case ORDER_BY_ATTACK:
            let allPokemonsAttack = state.filteredPokemons.length ? [...state.filteredPokemons] : [...state.pokemonsGlobal];;

            if(action.payload === "ascending"){
             let orderPokemonsAttack = allPokemonsAttack.sort((a, b) => {
                if (a.attack < b.attack) {
                  return -1;
                }
                if (a.attack > b.attack) {
                  return 1;
                }
                return 0;
              })
              return {...state, orderedPokemons: orderPokemonsAttack}
            }

            if(action.payload === "descending"){
              let orderPokemonsAttack = allPokemonsAttack.sort((a, b) => {
                 if (a.attack < b.attack) {
                   return 1;
                 }
                 if (a.attack > b.attack) {
                   return -1;
                 }
                 return 0;
               })
               return {...state, orderedPokemons: orderPokemonsAttack}
             }
             break;
             
            case CLEAR_DETAIL:
              return {...state, selectedPokemon: null}

            case CLEAR_ORDER:
              return {...state, orderedPokemons: [...state.pokemonsGlobal]}

        default: return {...state};
    }
}

export default reducer