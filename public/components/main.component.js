import React from 'react';
import PropTypes from 'prop-types';

const Root = () => (
    <div>Hello React Hot Loader!!!!!!!!!!!!!!!!!!!!!!!!!</div>
)

const testArray =[
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

class Clock extends React.Component{
    constructor(props){
        super(props);
        console.log('Clock component props', props);
        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {

        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }

    render(){
        return(
            <div>
                 <h1>Hello, world!</h1>
                 <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                 <div>Params url: {this.props.match.params
                     .id} ,category: {this.props.match.params.
                     category}</div>
            </div>
        )
    }
}

// Clock.propTypes = {
//     children: PropTypes.element.isRequired
// };

export default Clock;

