import { fireEvent, getByTestId, render } from '@testing-library/react';

import FormToDo from './FormToDo';
import {db} from '../../Dexie/Dexie';
import Button from '../Button/button';

describe('FormToDo tests', () => {

    it("Renders correctly", () => {
        const { getByTestId } = render(<FormToDo/>)
        const FormToDoEl = getByTestId("form-to-do")
        expect(FormToDoEl).toBeInTheDocument()
    })

    
    it("input field is rendering",() => {
        const { getByTestId } = render(<FormToDo/>)
        const inputEl = getByTestId("input")
        expect(inputEl).toBeInTheDocument()
    });

    it("input change event works properly", () => {
        const { getByTestId } = render(<FormToDo/>)
        const inputEl = getByTestId("input") as HTMLInputElement
        expect(inputEl.value).toBe("")

        fireEvent.change(inputEl, {
            target:{
                value: "Sok"
            }
        })

        expect(inputEl.value).toBe("Sok")
        
    })

    it("button adds to Dexie", () => {
        const { getByTestId } = render(<FormToDo/>);
        const inputEl = getByTestId("input") as HTMLInputElement
        const buttonEl = getByTestId("button") as HTMLButtonElement
        const dataBase = db
        expect(inputEl.value).toBe("")

        fireEvent.change(inputEl, {
            target: {
                value: "Gricki"
            }
        })

        expect(inputEl.value).toBe("Gricki");

        fireEvent.click(buttonEl)

        expect(dataBase.table("to_dos")).toBe("Gricki")

    })
})