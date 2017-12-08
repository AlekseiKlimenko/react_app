import * as types from '../constant/actionsTypes';

const initialList = {
    isLoadList: false,
    infoRequest: {}
};

export default function list(state = initialList, action) {

    switch (action.type){
        case types.FETCH_TEST_REQUEST: return {
            ...state,
            isLoadList: true
        }
        case types.FETCH_TEST_SUCCESS: return {
            ...state,
            isLoadList: false,
            infoRequest: action.infoRequests
        }
        default: return state;
    }
};