const initialState = { 
    loading : false,
    catImage : "",
    error: ""
}

export const reducer = (initialState , action)=>{

        switch (action.type) {
            case "START":
            
            return {...initialState , loading}

            default:
                break;
        }
}