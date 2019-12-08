const environment = 'production';
const localApi = 'localhost:4000/api/';
const productionApi = 'https://mcga-server-todo.herokuapp.com/api/';
const getApi = () => { return (environment === 'local') ? localApi : productionApi};

const loginApi = getApi()+'auth/login';
const createUser = getApi()+'users/create';
const showTodoList = (idUser) => {
    return getApi()+'users/'+idUser+'/todo'
};



export {
    getApi,
    loginApi,
    createUser,
    showTodoList
};
