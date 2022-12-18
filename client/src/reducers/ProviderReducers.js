const ProviderReducer= (info=[],action)=>{
    switch (action.type) {
        case 'UPDATE':
           // console.log(data);
            /* localStorage.clear();
            localStorage.setItem('profile',JSON.stringify({... action?.data})); */
            localStorage.setItem('profile',JSON.stringify({... action?.data}));
            return info.map((data) => (data._id === action.payload._id ? action.payload :data)); 
            
            
            /* return {...state, authData: action?.data}; */
        /* case 'LIKE':
            return posts.map((post) => (post._id === action.payload._id ? action.payload : post)); */ 
        case 'FETCH_ALL':
                console.log(action.payload);
                
                
                return action.payload;
        case 'ADD_RESOURCE':
            console.log(action.data);
            
            return info.map((data) => (data._id === action.payload._id ? action.payload :data)); 
                
        default:
            return info;
            
    }
}

export default ProviderReducer;