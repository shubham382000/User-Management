import Axios from 'axios';

export const UPDATE_INPUT = 'UPDATE_INPUT'

export const GET_ALL_USERS_REQUEST = 'GET_ALL_USERS_REQUEST';
export const GET_ALL_USERS_SUCCESS = 'GET_ALL_USERS_SUCCESS';
export const GET_ALL_USERS_FAILURE = 'GET_ALL_USERS_FAILURE';

export const GET_SINGLE_USER_REQUEST = 'GET_SINGLE_USER_REQUEST';
export const GET_SINGLE_USER_SUCCESS = 'GET_SINGLE_USER_SUCCESS';
export const GET_SINGLE_USER_FAILURE = 'GET_SINGLE_USER_FAILURE';

export const CREATE_USERS_REQUEST = 'CREATE_USERS_REQUEST';
export const CREATE_USERS_SUCCESS = 'CREATE_USERS_SUCCESS';
export const CREATE_USERS_FAILURE = 'CREATE_USERS_FAILURE';

export const UPDATE_USERS_REQUEST = 'UPDATE_USERS_REQUEST';
export const UPDATE_USERS_SUCCESS = 'UPDATE_USERS_SUCCESS';
export const UPDATE_USERS_FAILURE = 'UPDATE_USERS_FAILURE';

export const DELETE_USERS_REQUEST = 'DELETE_USERS_REQUEST';
export const DELETE_USERS_SUCCESS = 'DELETE_USERS_SUCCESS';
export const DELETE_USERS_FAILURE = 'DELETE_USERS_FAILURE';



// getting all the users

export const getAllUsers = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: GET_ALL_USERS_REQUEST });
            let dataURL = 'https://jsonplaceholder.typicode.com/users';
            let response = await Axios.get(dataURL);
            dispatch({ type: GET_ALL_USERS_SUCCESS, payload: response.data });
        }
        catch (error) {

            dispatch({ type: GET_ALL_USERS_FAILURE, payload: error }); 

        }
    }
};



// getting a single user 

export const getUser = (id) => {
    return async (dispatch) => {
        try {
              dispatch({type : GET_SINGLE_USER_REQUEST});
              let dataURL = `https://jsonplaceholder.typicode.com/users/${id}`; 
              let response = await Axios.get(dataURL); 
              dispatch({type : GET_SINGLE_USER_SUCCESS, payload : response.data}); 
        }
        catch (error) {
            dispatch({ type: GET_ALL_USERS_FAILURE, payload: error }); 
        }
    }
}



// creating a new user 

export const createUser = (user, history) => {
    return async (dispatch) => {
        try {
            dispatch({ type: CREATE_USERS_REQUEST });
            let dataURL = 'https://jsonplaceholder.typicode.com/users';
            let response = await Axios.post(dataURL, user);
            dispatch({ type: CREATE_USERS_SUCCESS, payload: response.data });
            history('/users/admin');
        }
        catch (error) {

            dispatch({ type: CREATE_USERS_FAILURE, payload: error }); 
        }
    }
}



// updating the user 

export const updateUser = ( id , user, history) => {
    return async (dispatch) => {
        try {
            dispatch({ type: UPDATE_USERS_REQUEST });
            let dataURL = `https://jsonplaceholder.typicode.com/users/${id}`;
            let response = await Axios.put(dataURL, user);
            dispatch({ type: UPDATE_USERS_SUCCESS, payload: response.data });
            history('/users/admin');
        }
        catch (error) {

            dispatch({ type: UPDATE_USERS_FAILURE, payload: error }); 
        }
    }
}



// deleting the user 

export const deleteUser = (id) => {
    return async (dispatch) => {
        try {
            dispatch({ type: DELETE_USERS_REQUEST });
            let dataURL = `https://jsonplaceholder.typicode.com/users/${id}`;
            let response = await Axios.delete(dataURL);
            dispatch({ type: DELETE_USERS_SUCCESS, payload: response.data });
            dispatch(getAllUsers()); 
        }
        catch (error) {

            dispatch({ type: DELETE_USERS_FAILURE, payload: error }); 
        }
    }
}



// update input 

export const updateFormInput = (key, value) => {
     return {
        type : UPDATE_INPUT, 
        payload : {key, value}
     }
}