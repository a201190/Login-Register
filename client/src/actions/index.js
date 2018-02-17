import axios from 'axios';
import {FETCH_USERS} from './types'
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user')
  dispatch({type: FETCH_USERS, payload: res.data});
};
export const SubmitPersonalDetails= (values, history) =>async dispatch=>{
  const res =await axios.post('/api/personaldata', values)
  history.push('/login') 
  dispatch({type: FETCH_USERS, payload: res.data})
};
export const Login= () =>async dispatch=>{
  const res =await axios.get('/api/login')
  dispatch({type: FETCH_USERS, payload: res.data})
};
