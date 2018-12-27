import { FETCH_POSTS, GET_USERNAME } from './types'
import axios from 'axios'

export const getPosts = username => dispatch => {
    axios.post('/api', { username })
        .then(res => dispatch({
            type: FETCH_POSTS,
            payload: res.data.data.children
        }))
}

export const getUsername = username => {
    return {
        type: GET_USERNAME,
        payload: username
    }
}