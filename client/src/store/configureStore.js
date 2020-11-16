import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import userReducer from '../reducers/userReducer'
import postReducer from '../reducers/postReducer'
import mypostReducer from '../reducers/postReducer'
import commentReducer from '../reducers/commentReducer'
import allUsersReducer from '../reducers/commentReducer'

const configureStore = ()=>{
 const store= createStore(combineReducers({
    user:userReducer,
    posts:postReducer,
    myposts:mypostReducer,
    comment:commentReducer,
    allUser: allUsersReducer
 }),applyMiddleware(thunk))
 return store
}

export default configureStore