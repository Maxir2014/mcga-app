import { combineReducers } from 'redux';
import { alert } from './alert';
import { authentication } from './authentication';
import { registration } from './register';
import {users} from "./user";

const rootReducer = combineReducers({
    authentication,
    registration,
    users,
    alert
});

export default rootReducer;