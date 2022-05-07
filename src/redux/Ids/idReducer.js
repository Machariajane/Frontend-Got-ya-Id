import * as types from "../types"
const initialState = {
    loading:false,
    error:null,
    id: null 
}

export const idReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        
            case types.POST_ID_REQUEST:
                return {
                    ...state,
                    loading:true
                }
            case types.POST_ID_SUCCESS:
                return{
                    loading:false,
                    error:null,
                    id:action.payload
        
                }
            case types.POST_ID_FAILURE:
                return{
                        loading:false,
                        error:action.payload,
                        id:null
                }   
                default:return state    
      
    }
    }