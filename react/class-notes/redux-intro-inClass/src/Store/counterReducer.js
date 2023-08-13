//stringler hataya meyillidir bu hataları minimize etmek için string typeları değişkenlerde saklanır ve böyle kullanılabilir.
export const INC = "INC"
export const DEC = 'DEC'
export const CLR = 'CLR'

export const increment = () => {
    return {type:INC }
}

export const decrement = () => ({type:DEC })

export const clear = () => ({type:CLR })




//Statelerin başlangıç durumlarının belirlenmesi.
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