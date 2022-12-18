import { CircularProgress } from '@material-ui/core';
import React,{useState,useEffect} from 'react'
import { fetchData, fetchUserData } from '../../../api';
import UserNav from '../UserNav/UserNav'
import ResourceList from './ResourceList';

const MyResources = () => {
  
  const [newData, setnewData] = useState([])
  const [toggle, settoggle] = useState(true)
  const [result, setresult] = useState([])
  /* const [resultData, setresultData] = useState([]) */
  const [newProviderData, setnewProviderData] = useState([])


    /* console.log(userResources);  */
    
  const getData=async()=>{
    try {
      let val  = await fetchData();
      let valP = await fetchUserData();
     /*  console.log(val.data); */
      
      setnewData(valP.data);
      setnewProviderData(val.data);
      let userResources
      const instance=JSON.parse(localStorage.getItem('profile'));
      const userId=instance.result._id;
    
      userResources=valP.data.find(element => element._id===userId);
      /* console.log(userResources); 
      console.log(valP.data); 
      console.log(val.data); */ 
    
      setresult(val.data.filter(value => userResources.resources.includes(value._id)))
      console.log(result); 
      
    } catch (error) {
        console.log(error);
    }
  }

  


  
   
  
  
 
  /* */

  useEffect(() => {
    getData();
    
  }, [])
  return ( 
    <>
        <UserNav/>
        {/* <ResourceList/> */}
        
        {
        !result.length ? <CircularProgress /> : (
          result.map((data,id)=>{
            return (
              <ResourceList idx={data._id} key={id} heading={data.name} mail={data.email} bandwidth={data.network_bandwidth} security={data.security_management} />
            )
          })
        )}
    </>
  )
}

export default MyResources