import React from "react";
import { connect } from 'react-redux'
import OneContact from "../../one-contact/oneContactComponent";
import CreateContactForm from "../../create-contact-form/createContactFormCompoment";
import {listSelector} from '../../selectors/index';
import {increment} from '../../contacts/actions/increment';
import {deleteContact} from '../../contacts/actions/contacts';

class Contacts extends React.Component {

    render() {
        return (
            <div className="row">
                <CreateContactForm/>
                {this.createContactElem()}
            </div>
        );
    }

    createContactElem = () => {
        return this.props.list.map((elem) => {
            return <OneContact key={elem.id}
                               id={elem.id}
                               count={elem.counter}
                               changeCount = {this.changeCount}
                               deleteContact = {this.deleteContact}
            />
        });
    }

    changeCount = (id) => {
        const {increment} = this.props;
        increment(id);
    }

    deleteContact = (id) => {
        const {deleteContact} = this.props;
        deleteContact(id);
    }
}

const mapStateToProps = (state) => {
    return {
        list: listSelector(state)
    }
};

const mapStateToDispatch = {
    increment,
    deleteContact
}

export default connect(mapStateToProps, mapStateToDispatch)(Contacts);