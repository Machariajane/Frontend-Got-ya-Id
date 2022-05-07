import axios from 'axios'
import * as types from '../types'

// ======================Persist state================================
// function to persist state,  to ensure user is still logged in after refresh
const persistState = (response) => {
  localStorage.setItem('auth_token',response.data.data.auth_token)
  localStorage.setItem('email',response.data.data.email)
  localStorage.setItem('username',response.data.data.username)

}
// =====================Login Actions====================================
// action called loginUser called from the log in component
// accepts data and history from the action of handleSubmit
export const loginUser = (data,history) => {
  return (dispatch) => {
    dispatch(loginUserRequest())
    axios
      .post('auth/login',data)
      .then(response => {
        const user = response.data.data
        persistState(response) //call persist state function and pass in the reponse
        dispatch(loginUserSuccess(user))
        history.push("/allids") //push history :go to allids  page in event of a successful login
        })
      .catch(error => {
        dispatch(loginUserFailure(error.response.data.errors))
      })
  }
}

export const loginUserRequest = () =>  dispatch => {
    dispatch({
        type:types.LOGIN_USER_REQUEST
    })
}

export const loginUserSuccess = user => dispatch  => {
    dispatch({
        type:types.LOGIN_USER_SUCCESS,
        payload:user
    })
}

export const loginUserFailure = error => dispatch => {
    dispatch({
        type:types.LOGIN_USER_FAILURE,
        payload:error
    })
}
// ====================Logout Action========================================
export const handleLogout = (history) => dispatch  => {
  dispatch({
      type:types.LOGOUT_USER,
   
  })
  localStorage.clear() //clear persisted state in localstorage 
  history.push('/')
  

}
// ====================Register User action==================================
export const registerUser = (data,history) => {
  return (dispatch) => {
    dispatch(registerUserRequest())
    axios
      .post('auth',data)
      .then(response => {
        const user = response.data.data
        persistState(response)
        dispatch(registerUserSuccess(user))
        history.push("/")
        })
      .catch(error => {
      // the error maybe a string or an object ,from the backend logic of validating authentication
      // As below,if it is a string,read directly
      // if its an object extract 
        error = error.response.data.errors;
        let receivedError;
        if(typeof error === 'string' || error instanceof String ) {
          receivedError = error;
        } else {
          let key = Object.keys(error)[0]
          let errMessage = error[key][0]['message']

          receivedError = `${key}: ${errMessage}`
        }
       dispatch(registerUserFailure(receivedError))
      })
  }
}

export const registerUserRequest = () => dispatch   => {
  dispatch({
      type:types.REGISTER_USER_REQUEST
  })
}

export const registerUserSuccess = user => dispatch => {
  dispatch({
      type:types.REGISTER_USER_SUCCESS,
      payload:user
  })
}

export const registerUserFailure = error => dispatch => {
  dispatch({
      type:types.REGISTER_USER_FAILURE,
      payload:error
  })
}

