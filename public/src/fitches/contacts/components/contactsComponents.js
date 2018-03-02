//https://rajdee.gitbooks.io/redux-in-russian/content/docs/basics/UsageWithReact.html
import React from "react";
import { connect } from 'react-redux'
import OneContact from "../../one-contact/oneContactComponent";
import CreateContactForm from "../../create-contact-form/createContactFormCompoment";
import store from "../../../redux/store";


class Contacts extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
    }
    render() {
        return (
            <div className="row">
                <CreateContactForm/>
                {[1,2,3,4].map(i => {
                    return <OneContact key={i}/>
                })}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        contacts: state.contacts
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        // onTodoClick: (id) => {
        //     dispatch(toggleTodo(id))
        // }
    }
}
const VisibleContacts = connect(
    mapStateToProps,
    mapDispatchToProps
)(Contacts);

export default VisibleContacts;