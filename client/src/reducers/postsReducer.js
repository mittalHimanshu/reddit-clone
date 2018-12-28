import { FETCH_POSTS, GET_USERNAME } from '../actions/types'

const initialState = {
    details:{
        posts: null,
        username: ""
    }
}

export default function(state=initialState, action){
    switch(action.type){
        case FETCH_POSTS:
            return{
                ...state,
                details:{
                    ...state.details,
                    posts: action.payload
                }
            }
        case GET_USERNAME:
            return{
                ...state,
                details:{
                    ...state.details,
                    username: action.payload
                }
            }
        default:
            return state
    }
}