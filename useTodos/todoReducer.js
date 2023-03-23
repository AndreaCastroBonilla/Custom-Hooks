export const todoReducer = (initialState = [], action) => {

    switch(action.type){
        case "[TODO] Add Todo":
            return [...initialState, action.payload];
        
            case "[TODO] Remove Todo":
            //devuelve todos los todo cuyo id sea distinto del que se recibe
            return initialState.filter(todo => todo.id !== action.payload);
        
            case "[TODO] Toggle Todo":
            return initialState.map(todo => {
                //si el id del todo de la lista == al que se recibe, se cambia el estado
                if(todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            });
            
        default:
            return initialState;
    }
}