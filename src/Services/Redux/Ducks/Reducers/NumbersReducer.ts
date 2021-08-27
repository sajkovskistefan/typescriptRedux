
type Action = {
    type: string,
    payload: number
}

export interface InitialState{
    number: 0
}

const initState: number = 0

export const numbersReducer = (state = initState, action: Action) => {
    switch(action.type){
        case "increment":
            return state + action.payload;
        case "decrement":
            return state - action.payload
        default:
                return state
    }
};
