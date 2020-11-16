import axios from '../config/axios'

//the below step is to store in redux store
export const setPost=(post)=>{
    return {type:'SET_POST', payload :post}
}

export const startGetAllPosts=()=>{
    return(dispatch)=>{
        axios.get('/listpost',{
             headers:{
                  'Authorization': localStorage.getItem('authToken')
                  }
                })
        .then((response)=>{
            const post= response.data
            dispatch(setPost(post))
        })
        .catch((err)=>{
            //alert(err)
            console.log('err', err)
        })
        
    }
}


