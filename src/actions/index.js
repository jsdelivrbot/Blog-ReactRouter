import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const FETCH_SINGLE_POST = 'fetch_single_post';
export const CREATE_POST = 'create_post';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=BlogReactRouter5678';

export function fetchPosts(){
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function createPost(values, callback){
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values).then(() => callback());

    return {
        type: CREATE_POST,
        payload: request
    };
}

export function fetchSinglePost(id){
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

    return {
        type: FETCH_SINGLE_POST,
        payload: request
    };
}