import axios from '../config/axios'
import Swal from 'sweetalert2'

export const setMyPost =(post)=>{
    return{type: 'SET_POST', payload: post}
}

export const startGetMyPosts = ()=>{
    return(dispatch)=>{
        axios.get('/myposts',{
            headers:{
                'Authorization': localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            //console.log('the response', response)
            const post = response.data;
            //console.log('my profile',post)
            dispatch(setMyPost(post))
        })
        .catch((err)=>{
           // alert(err.message)
           console.log('error shown here:',err)
        })
    }
}
export const setDeletePost=(id)=>{
    return{type: 'DELETE_POST', payload: id}
}

export const startDeleteMyPost=(id)=>{
    return(dispatch)=>{
        Swal.fire({
           title: 'Are you sure?',
           icon: 'warning',
           showCancelButton: true,
           confirmButtonColor: '#3085d6',
           cancelButtonColor: '#d33',
           confirmButtonText: 'Yes, delete it!'
        }).then((result)=>{
            if(result.value){
                axios.delete(`/mypost/delete/${id}`,{
                    headers:{
                        'Authorization': localStorage.getItem('authToken')
                    }
                })
                .then((response)=>{
                    const post = response.data
                    Swal.fire(
                        'Deleted!',
                        'Your post has been deleted',
                        'success',
                        dispatch(setDeletePost(post._id)) 
                    )
                })
            }
        })
    }
}

export const setEditPost=(post)=>{
    return{type: 'EDIT_POST', payload: post}
}

export const startEditMyPost=(id, formData, redirect)=>{
    return(dispatch)=>{
        axios.put(`/editpost/${id}`,formData,{
            headers:{
                'Authorization': localStorage.getItem('authToken')
            }
        })
        .then((response)=>{
            const post = response.data
            dispatch(setEditPost(post))
            redirect()
        })
        .catch((err)=>{
            alert(err.message)
        })
        

    }
}

export const setFilePost=(post)=>{
    return{type: 'SET_POST', payload: post}

}


export const startFilePost=(fd, redirect)=>{

    return(dispatch)=>{
        axios.post('/createpost', fd, {
            headers:{
                'Authorization': localStorage.getItem('authToken')
           
            }
        })
        .then((response)=>{
            const post = response.data
            console.log('post',post)
            dispatch(setFilePost(post))
           redirect()
        })
        .catch((err)=>{
            alert(err.message)
        })
}}
