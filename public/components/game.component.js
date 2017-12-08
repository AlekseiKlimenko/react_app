import React from 'react';
import Board from './board.component';
import { nextStep, getTestApi ,receiveGet } from '../actions/gameActions';
import { connect } from 'react-redux';

import fetch from 'isomorphic-fetch'


class Game extends React.Component {

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }

    handleClick(i) {
        let startRequest = () => {
            this.props.getTestApi();
            fetch('/api/test').then((res)=>{
                this.props.receiveGet(res);
                console.log('=',res);
            });
        };
        startRequest();


        let history = this.props.gameState.history.slice(),
            currentSquares = this.props.gameState.history[this.props.gameState.history.length - 1].squares.slice();

        if (calculateWinner(currentSquares) || currentSquares[i]) {
            return;
        }

        currentSquares[i] = this.props.gameState.xIsNext ? 'X' : 'O';
        history.push({squares: currentSquares});
        this.props.nextStep(history, !this.props.gameState.xIsNext, history.length - 1);
    }

    render() {
        const history = this.props.gameState.history,
              current = history[this.props.gameState.stepNumber],
              winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move :
                'Go to game start';
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.props.gameState.xIsNext ? 'X' : 'O');
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board squares = {current.squares} onClick = {(i) => this.handleClick(i)}/>
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}
const mapStateToProps = function(store) {
    return {
        gameState: store.gameState,
        listState: store.listState
    };
};

const mapDispatchToProps = function (dispatch) {
    return {
        nextStep: (newHistoryArr, xIsNext, stepNumber) => {
            dispatch(nextStep(newHistoryArr, xIsNext, stepNumber));
        },
        getTestApi: () => {
            dispatch(getTestApi());
        },
        receiveGet: () => {
            dispatch(receiveGet(res));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}