// rxreducer kısayolu

export const ADD_TODO = "ADD_TODO"
export const DELETE_TODO = "DELETE_TODO"
export const DELETE_TODO = "DELETE_TODO"



//?başlangıç durumları
const initialState = {
    todoList: [{id: new Date() , text: "work redux" , completed: false} , ]
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case typeName:
    return { ...state, ...payload }

  default:
    return state
  }
}
