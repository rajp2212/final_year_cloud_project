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
export const signinprovider=(formData,history)=>async(dispatch)=>{
  try {
    // log in the user
    const {data}=await api.signInPro(formData);
    dispatch({type:"AUTH", data});
    history.push("/providerHome")
    
  } catch (error) {
    console.log(error)
  }
}

export const signupprovider=(formData,history)=>async(dispatch)=>{
  try {
    // log in the user
   
    
    const {data}=await api.signUpPro(formData);
    //console.log(formData);
    dispatch({type:"AUTH", data});
    history.push("/providerHome")
    
  } catch (error) {
    console.log(error)
  }
}

export const updateInfo=(id,info,history)=> async (dispatch)=>{
  try {
      const { data } = await api.ProviderUpdate(id, info);
      /* localStorage.removeItem('profile'); */
      /* localStorage.setItem('profile',{data}); */
      dispatch({ type: "UPDATE", data });
      history.push("/")
    } catch (error) {
      console.log(error);
    }
}
export const addResource=(userId,proId,history)=> async (dispatch)=>{
  try {
      const {data } = await api.ResourceUpdate(userId, proId);
      console.log(data);
      
      /* localStorage.removeItem('profile'); */
      /* localStorage.setItem('profile',{data}); */
      dispatch({ type: "ADD_RESOURCE", data });
      history.push("/userHome/myresources")
    } catch (error) {
      console.log(error);
    }
}


export const getInfo = () => async (dispatch) => {
    try {
      const  data  = await api.fetchData();
      console.log(data);
      
      dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error);
    }
  };
  
export const getUserInfo = () => async (dispatch) => {
    try {
      const  data  = await api.fetchUserData();
      console.log(data);
      
      dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error);
    }
  };
/* export const getPosts = () => async (dispatch) => {
    try {
      const { data } = await api.fetchData();
  
      dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error);
    }
  }; */


