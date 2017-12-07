import * as types from '../constant/actionsTypes';

export function nextStep(newHistoryArr, xIsNext, stepNumber) {
    return {
        type: types.NEXT_STEP,
        newHistoryArr: newHistoryArr,
        xIsNext: xIsNext,
        stepNumber: stepNumber
    };
}