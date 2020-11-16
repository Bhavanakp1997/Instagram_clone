const userInitialState={}

const userReducer=(state=userInitialState, action)=>{
 switch(action.type){
     case 'SET_USER':{
         return {...action.payload}//action.payload contains user object
     }
  default:{
      return {...state}
  }   
 }
}

export default userReducer