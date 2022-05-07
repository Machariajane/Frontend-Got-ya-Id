import axios from 'axios'
import * as types from '../types'


// ====================================Post Id=====================================================
export const postId = (data,history) => {
    return (dispatch) => {
      dispatch(postIdRequest())
      console.log('\n\ndata:', data)
      axios
        .post('ids/new/ids',data)
        .then(response => {
         console.log("here ",response.data.data)

          const id = response.data.data
          
          dispatch(postIdSuccess(id))
          history.push("/myposts")
          })
        .catch(error => {
            console.log("error",error)
            // dispatch(postIdFailure(error.response.data.errors))
          
         
        })
    }
  }
  
  export const postIdRequest = () => dispatch   => {
    dispatch({
        type:types.POST_ID_REQUEST
    })
  }
  
  export const postIdSuccess = id => dispatch => {
    dispatch({
        type:types.POST_ID_SUCCESS,
        payload:id
    })
  }
  
  export const postIdFailure = error => dispatch => {
    dispatch({
        type:types.POST_ID_FAILURE,
        payload:error
    })
  }
  
// ================================Create Claim ==========================================
  export const createClaim = (data,history) => {
    return (dispatch) => {
      dispatch(createClaimRequest())
      axios
        .post('ids/claim',data)
        .then(response => {
         console.log("here ",response.data.data)

          const id = response.data.data
          
          dispatch(createClaimSuccess(id))
          history.push("/myposts")
          })
        .catch(error => {
            console.log("error",error)
            // dispatch(createClaimFailure(error.response.data.errors))
          
         
        })
    }
  }
  
  export const createClaimRequest = () => dispatch   => {
    dispatch({
        type:types.CREATE_CLAIM_REQUEST
    })
  }
  
  export const createClaimSuccess = id => dispatch => {
    dispatch({
        type:types.CREATE_CLAIM_SUCCESS,
        payload:id
    })
  }
  
  export const createClaimFailure = error => dispatch => {
    dispatch({
        type:types.CREATE_CLAIM_FAILURE,
        payload:error
    })
  }
  