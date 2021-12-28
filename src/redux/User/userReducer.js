import * as types from "../types"

// =====================================================================
// check if there is user data in the local storage ,and load it as initial state if available 
const loadInitialState = () => {
    const username = localStorage.getItem('username')
    const email =  localStorage.getItem('email')
    const auth_token =  localStorage.getItem('auth_token')

    const loggedIn = username && email && auth_token

    return loggedIn ? {username, email, auth_token} : null
}
//default initial state
const initialState = {
    loading:false,
    error:null,
    user: loadInitialState() 
}
// ==================================================================
// User Reducer ,handles state for the user
// takes in intial state and any user action from UI-LogIn,LogOut,Register
export const userReducer=(state=initialState,action)=>{
switch(action.type)
{
    case types.LOGIN_USER_REQUEST:
        return {
            ...state,
            loading:true
        }
    case types.LOGIN_USER_SUCCESS:
        return{
            loading:false,
            error:null,
            user:action.payload

        }
    case types.LOGIN_USER_FAILURE:
        return{
                laoding:false,
                error:action.payload,
                user:null
        }  
        case types.LOGOUT_USER:
        return{
                laoding:false,
                error:null,
                user:null
        }  
        case types.REGISTER_USER_REQUEST:
            return {
                ...state,
                loading:true
            }
        case types.REGISTER_USER_SUCCESS:
            return{
                loading:false,
                error:null,
                user:action.payload
    
            }
        case types.REGISTER_USER_FAILURE:
            return{
                    loading:false,
                    error:action.payload,
                    user:null
            }      
    default:return state 
}
}