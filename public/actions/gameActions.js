import * as types from '../constant/actionsTypes';

export function nextStep(newHistoryArr, xIsNext, stepNumber) {
    return {
        type: types.NEXT_STEP,
        newHistoryArr: newHistoryArr,
        xIsNext: xIsNext,
        stepNumber: stepNumber
    };
}

export function getTestApi() {
    return {
        type: types.FETCH_TEST_REQUEST
    };
}

export function receiveGet(res) {
    return {
        type: types.FETCH_TEST_SUCCESS,
        data: JSON.parse(res)
    }
}
