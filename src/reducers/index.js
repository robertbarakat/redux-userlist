import {combineReducers} from 'redux';
import users from './users';
import activeUsers from './activeUsers';

const allReducers = combineReducers({
    utilisateurs: users,
    actif: activeUsers
})

export default allReducers;