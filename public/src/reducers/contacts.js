import * as types from '../fitches/contacts/constant/constant';

const initializeState = {
    contacts: [1,2,3,4]
}
export default function game(state = initializeState, action) {

    switch (action.type){
        case types.SHOW_ALL_CONTACTS: return {...state}

        default: return state;
    }
};