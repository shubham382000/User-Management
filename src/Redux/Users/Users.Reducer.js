import * as userActions from './Users.Actions';

export const usersFeatureKey = 'users';

let initialState = {
    loading: false,
    errorMessage: '',
    users: [],
    selectedUser: {}
}

export const reducer = (state = initialState, action) => {

    let { type, payload } = action; 
    switch (type) {
        // GETTING ALL THE USERS
        case userActions.GET_ALL_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case userActions.GET_ALL_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: payload
            }
        case userActions.GET_ALL_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: payload
            }
        // CREATING USER 
        case userActions.CREATE_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case userActions.CREATE_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users : payload
            }
        case userActions.CREATE_USERS_FAILURE:
            return {
                ...state,
                loading: false
            }
        // get single user
        case userActions.GET_SINGLE_USER_REQUEST: 
        return {
            ...state, 
            loading : true
        }
        case userActions.GET_SINGLE_USER_SUCCESS: 
        return {
            ...state, 
            loading : false, 
            selectedUser : payload
        }
        case userActions.GET_SINGLE_USER_FAILURE: 
        return {
            ...state, 
            loading : false,
            errorMessage : payload
        }
        // updating the form input 
        case userActions.UPDATE_INPUT:
        return {
            ...state,
            selectedUser : {
                ...state.selectedUser, 
                [payload.key] : payload.value
            }
        }
        // updating the user
        case userActions.UPDATE_USERS_REQUEST: 
        return {
            ...state, 
            loading : true
        }
        case userActions.UPDATE_USERS_SUCCESS: 
        return {
            ...state, 
            loading : false
        }
        case userActions.UPDATE_USERS_FAILURE: 
        return {
            ...state, 
            loading : false
        }       
        // Deleting the user
        case userActions.DELETE_USERS_REQUEST:
        return {
            ...state, 
            loading : true
        }
        case userActions.DELETE_USERS_SUCCESS:
        return {
            ...state, 
            loading : false
        }   
        case userActions.DELETE_USERS_FAILURE:
        return {
            ...state, 
            loading : false
        }
        default: return state;
    }
}