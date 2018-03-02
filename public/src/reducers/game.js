import * as types from '../constant/actionsTypes';

const initialGame = {
    history: [{
        squares: Array(9).fill(null)
    }],
    xIsNext: true,
    stepNumber: 0
};

export default function game(state = initialGame, action) {

    switch (action.type){
        case types.NEXT_STEP: return {...state,
            history: action.newHistoryArr,
            xIsNext: action.xIsNext,
            stepNumber: action.stepNumber
        }

        default: return state;
    }
};