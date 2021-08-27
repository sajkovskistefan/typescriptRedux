import React, { useEffect, useState } from 'react'
import Button from '../Button/button';
import ItemsMap from '../ItemsMapFolder/ItemsMap';
import { ModelFromDexie } from '../Constnants/constants';
import {db} from '../../Dexie/Dexie';
import './FormToDo.css';
import { useSelector, useDispatch } from 'react-redux';
import * as ActionCreators from '../../Services/Redux/Ducks/Actions/NumberAction';
import {State} from '../../Services/Redux';
import { bindActionCreators } from 'redux';
import {getData} from '../../Services/Redux/Ducks/Reducers/To_Dos_Reducer';



interface oneObject {
    [key: string]: any
}

const FormToDo = () => {
    const [value, setValue] = useState<string>();
    const [items, setItems] = useState<ModelFromDexie[]>([]);
    
    const dispatch = useDispatch();
    const probenFetch = useSelector(state => state)
    const fetch = bindActionCreators(getData, dispatch);
    
    console.log(probenFetch)

    /**
     * State number is a varable that is used in the useEfect so that the page refreshes only when 
     * the "click me" button is pressed
     */
    
    const stateNumber = useSelector((state: State) => state.numbersReducer)
    const {inrementNumber, decrementNumber} = bindActionCreators(ActionCreators,dispatch)
    console.log(stateNumber)


    /**
     * getFromDexie is a function that should return an array and set the items so we can 
     * iterate through them
     */

    const getFromDexie = async () => {
        const all = await db.table("to_dos").toArray()
        return await setItems(all)
    }

    /**
     * addFunc is a function that adds what is in the input field into the indexed db
     * It is called on click on the button element
     */

    const addFunc = () => {
        if(value){
            db.to_dos.put({name: value}).then(function(){
                return db.to_dos.orderBy("id").last()
            })
           inrementNumber()
            setValue("")
        } else {
            alert("Enter a task to the list")
        }
    };


    const deleteItem = async (item: oneObject) => {
        decrementNumber()
        return await db.to_dos.delete(item.id)
    }

    /**
     * The useEfect is used in order to re-render the app and get
     * the already posted to-dos
     */

    useEffect(() => {  
        getFromDexie()
        // ajdeDaProbameVaka()
    },[stateNumber])
    return (
        <div className="form-to-do--div" data-testid="form-to-do">
            <label className="form-to-do--label"> Enter something to do </label>
            <input 
                data-testid="input"
                className="form-to-do--input"
                type="text"
                value={value}
                onChange={(e) => {
                    setValue(e.target.value)
                }}
            />
            <Button
                name="Click me" 
                onClick={addFunc}
            />
            <ItemsMap deleteItem={deleteItem} items={items} />
        </div>
    )
}

export default FormToDo
