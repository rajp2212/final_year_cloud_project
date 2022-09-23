import * as api from '../api';

//action creators

export const signinuser=(formData,history)=>async(dispatch)=>{
  try {
    // log in the user
    const {data}=await api.signIn(formData);
    dispatch({type:"AUTH", data});
    history.push("/userHome")
    
  } catch (error) {
    console.log(error)
  }
}

export const signupuser=(formData,history)=>async(dispatch)=>{
  try {
    // log in the user
    const {data}=await api.signUp(formData);
    dispatch({type:"AUTH", data});
    history.push("/userHome")
    
  } catch (error) {
    console.log(error)
  }
}


/* export const getPosts = () => async (dispatch) => {
    try {
      const { data } = await api.fetchData();
  
      dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error);
    }
  }; */


