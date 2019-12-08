import { userConstants } from '../Constants';
import { userService } from '../Services';
import { alertActions } from './';
import { history } from '../Utils';

export const userActions = {
    login,
    logout,
    register,
    getAll,
    delete: _delete
};

function login(email, password) {
    return dispatch => {
        dispatch(request({ email }));
        userService.login(email, password)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/home', user)
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => {
                    dispatch(success());
                    history.push('/login');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function getTodoList() {
    return dispatch => {
        dispatch(request());

        userService.showTodoList()
            .then(
                todos => dispatch(success(todos)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: userConstants.GET_TODO_LIST } }
    function success(users) { return { type: userConstants.GET_TODO_LIST, todos } }
    function failure(error) { return { type: userConstants.GET_TODO_LIST, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        userService.delete(id)
            .then(
                user => {
                    dispatch(success(id));
                },
                error => {
                    dispatch(failure(id, error));
                }
            );
    };

    function request(id) { return { type: userConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: userConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }
}