//const postInitialState=[]

const postReducer=(state=[], action)=>{
 switch(action.type){
     case 'SET_POST':{
         return [].concat(action.payload)//action.payload contains user object
     }

  default:{
      return [...state]
  }   
 }
}

export default postReducer