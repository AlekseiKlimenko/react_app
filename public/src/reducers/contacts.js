import * as types from '../fitches/contacts/constant/constant';
import {Map, List, fromJS} from 'immutable';

const testContactArray = [
    {
        id: 1,
        name: "Person name",
        type: "Type person",
        counter : 0
    },
    {
        id: 2,
        name: "Person name",
        type: "Type person",
        counter : 0
    },
    {
        id: 3,
        name: "Person name",
        type: "Type person",
        counter : 0
    },
    {
        id: 4,
        name: "Person name",
        type: "Type person",
        counter : 0
    }
];

const initializeState = {
    list: testContactArray
};
var immutableState = fromJS(initializeState);

export default function (state = immutableState, action) {
    switch (action.type){
        case types.SHOW_ALL_CONTACTS: return state.toJS()

        case types.INCREMENT_COUNT : return {...state, list: state.list.map((contact) => {

                return (contact.id === action.payload.id) ?
                    {...contact, counter: contact.counter + 1}
                    : contact
            })
        }

        case types.DELETE_CONTACT : return {...state, list: state.list.filter((contact) => {
            if (contact.id !== action.payload.id) return contact})
        }
        default: return state;
    }
};