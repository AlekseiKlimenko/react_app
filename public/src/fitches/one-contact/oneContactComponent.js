import React, { PureComponent } from "react";
// import {connect} from 'react-redux'
// import {increment} from '../contacts/actions/increment';
// import {deleteContact} from '../contacts/actions/contacts';
// import {listSelector} from '../selectors/index';

class OneContacts extends PureComponent {

    render() {
        return (
            <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                    <img src="images.jpg" alt=""/>
                    <div className="caption">
                        <h3>Ярлык эскиза <span>{this.props.id}</span></h3>
                        <p>count: {this.props.count}</p>
                        <p>
                            <button onClick = {this.props.changeCount.bind(this, this.props.id)} className = "btn btn-primary" role="button">increment</button>
                            <button onClick = {this.props.deleteContact.bind(this, this.props.id)} className = "btn btn-primary" role="button">Удалить</button>
                            <button className="btn btn-default" role="button">Изменить</button>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
};

export default OneContacts;