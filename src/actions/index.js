
import axios from 'axios';

//grad blog posts

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POSTS = 'CREATE_POSTS';
export const FETCH_POST = 'FETCH_POST';

const ROOT_URL   = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=afafsdafs';

export function fetchPosts(){
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  //payload will release our data to our reducers

  return{
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(props){
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);

  return{
    type:CREATE_POSTS,
    payload:request
  }
}

export function fetchPost(id){
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
  console.log('request = ',`${ROOT_URL}/posts/${id}${API_KEY}`)

  return{
    type:FETCH_POST,
    payload:request
  }
}
