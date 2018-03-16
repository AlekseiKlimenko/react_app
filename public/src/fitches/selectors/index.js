import {createSelector} from 'reselect';

const getList = state => state.contacts.list;

export const listSelector = createSelector(getList, (list) =>{
    return list;
});