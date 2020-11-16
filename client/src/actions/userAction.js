import axios from '../config/axios'

//the below step is to store in redux store
export const setUser=(user)=>{
    return {type:'SET_USER', payload :user}
}

export const startGetUser=()=>{
    return(dispatch)=>{
        axios.get('/users/account',{
            headers:{
            'Authorization': localStorage.getItem('authToken')
             }
        })
        .then((response)=>{
            const user= response.data 
            dispatch(setUser(user))
        })
        .catch((err)=>{
            alert(err)
        })
        
    }
}

export const startLoginUser=(formData, redirect)=>{
    return (dispatch)=>{
        axios.post('/users/login', formData)
        .then((response)=>{
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.errors)
            }else{
                alert('successfully logged in')
                localStorage.setItem('authToken', response.data.token)
                axios.get('/users/account',{
                    headers:{
                        'Authorization':localStorage.getItem('authToken')
                    }
                })
                .then((response)=>{
                    const user =response.data
                    dispatch(setUser(user))
                    redirect()
                })
                .catch((err)=>{
                    alert(err)
                })
               redirect()
             }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

   


export const startRegisterUser=(formData, redirect)=>{
    // console.log(formData)
    return (dispatch)=>{
        axios.post('/users/register', formData)
        .then((response)=>{
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            }else{
                alert('you have registered successfully')
                //props.history.push('/users/login')
                redirect()
            }
            
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

//to get all the users logged in
export const getAllUser=(data)=>{
    return{type: 'GET_ALL_USER', payload: data}
}

export const startGetAllUser=()=>{
    return(dispatch)=>{
        axios.get('/allusers')
            .then((response)=>{
                const data = response.data
                dispatch(getAllUser(data))
            })
    }
}

//to set the users logged in data 
/*export const setAllUser=(data)=>{
    return{type: 'SET_ALL_USER', payload: data}
}
/*
export const startUserLogout=()=>{
    return(dispatch)=>{
        axios.delete('/users/logout',{
            headers:{
                'Authentication':localStorage.getItem('authToken')
            }
        })

        .then((response)=>{
            if(response.data.notice){
                alert(response.data.notice)
                localStorage.removeItem('authToken')
                dispatch(setUser({}))
                window.location.href ="/"
            }
        })
    }
}
*/