import { combineReducers } from 'redux'
import { idReducer } from '../Ids'
import { userReducer } from '../User'

const rootReducer = combineReducers (
    {
        user:userReducer,
        id:idReducer
    }
)
export default rootReducer