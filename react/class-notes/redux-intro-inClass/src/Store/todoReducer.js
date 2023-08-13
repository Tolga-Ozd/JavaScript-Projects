// rxreducer kısayolu

//todo reducer type todo 
export const ADD_TODO = "ADD_TODO"
export const DELETE_TODO = "DELETE_TODO"
export const TOGGLE_TODO = "TOGGLE_TODO"
export const CLEAR_TODO = "CLEAR_TODO"


//action function declaration
export  const addTodo = (payload) = ({type: ADD_TODO , payload })

//?başlangıç durumları
const initialState = {
    todoList: [{id: new Date() , text: "work redux" , completed: false} ,
    {},
  ],
}

export const todoReducer= (state = initialState, { type, payload }) => {
  switch (type) {
  case ADD_TODO:
    return {
      todoList : [
        ...state.todoList, 
        {id:newDate().getTime() , text: payload, completed: false },
      ],
    }

  default:
    return state
  }
}
