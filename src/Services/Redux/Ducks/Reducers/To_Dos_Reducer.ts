import { Dispatch } from 'redux';
// import { ModelFromDexie } from '../../../../Components/Constnants/constants';
import { db } from '../../../../Dexie/Dexie';

const initState = [{
    id: undefined,
    name: undefined
}]

type Action = {
    type: string,
    payload: string
}

export interface ModelFromDexieLocalen {
    id: any,
    name: any
};

export const To_Dos_Reducer = (state: ModelFromDexieLocalen[] = initState, action: Action) :any => {
    switch(action.type){
        case "getData":{
                return {
                    ...state,
                    data: action.payload
                }
        }
        default: {
            return state
        }
    }

}

export const getData = async () => {
    return(dispatch: Dispatch) => {
         dispatch({
            type: "getData",
            payload: db.table("to_dos").toArray()
        })
    }
}