import { ADD_AMOUNT } from './action';

const initialState = {
    accounts: [45, 350, 120],
    amount: "",
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_AMOUNT: return {
            ...state,
            amount: action.payload
        };
        default: return state;
    }
}

export default reducer;