import axios from "axios";

const API=axios.create({baseURL:"http://localhost:5000/user"});

export const signIn=(formData)=> API.post('/signinuser',formData);
export const signUp=(formData)=> API.post('/signupuser',formData);

/* export const fetchData=()=> Axios.get(url); */
