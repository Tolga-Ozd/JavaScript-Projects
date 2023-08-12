export const INC = "INC"
export const DEC = 'DEC'
export const CLR = 'CLR'

export const increment = (payload) => {
    return {type:INC , payload}
}

//Statelerin başlangıç durumlarının belirlenmesi.
export const CLR = 'CLR'
const initialState = {
    count:10,
}

// ! burası Pure Reducer Function:
export const counterReducer = (state=initialState, action) => {
    switch (action.type) {
        case INC:
            return{count: state.count + 1}
    
        case DEC:  
            return{count: state.count - 1}

        case CLR:    
            return{count: 0}

        default:
            return state
    // !reducer fonk. muhakkak bir state objesi döndrmelidir.yanlış bir type gelse bile state in ilk haline döndrmelidir.
    }
}