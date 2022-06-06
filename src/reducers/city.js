import { SET_CITY } from "../actions";

//reducer(se recomienda tener la minima cantidad de acciones posibles)
export const city = (state = {}, action) => {
    switch (action.type) {
        case SET_CITY:
            //Si la propiedad city trae algo lo asigna en el value, si no se agrega a value
                return action.value
        default:
            return state;
    }
}