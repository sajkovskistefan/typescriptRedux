import { Dispatch } from "redux";

export const inrementNumber = () => {
    return(dispatch: Dispatch) => {
        dispatch({
            type: "increment",
            payload: 1
        })
    }

};

export const decrementNumber = () => {
    return(dispatch: Dispatch) => {
        dispatch({
            type:"decrement",
            payload: 1
        })
    }
}