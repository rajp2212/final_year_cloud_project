import axios from "axios";

const API=axios.create({baseURL:"https://cloud-service-broker-serverv2.onrender.com/register"});

export const signIn=(formData)=> API.post('/signinuser',formData);
export const signUp=(formData)=> API.post('/signupuser',formData);
export const signInPro=(formData)=> API.post('/signinprovider',formData);
export const signUpPro=(formData)=> API.post('/signupprovider',formData);
/* export const ProviderInfo=()=> API.post('/providerinfo'); */
export const ProviderUpdate = (id, updatedData) => API.patch(`/${id}`, updatedData);
export const ResourceUpdate = (id, proId) => API.post(`/${id}`, proId);
export const fetchData=()=> API.get("/details"); 
export const fetchUserData=()=> API.get("/userDetails"); 
/* export const fetchData=()=> Axios.get(url); */
