import { getByTestId, render } from '@testing-library/react';
import React from 'react';
import * as ReactDOM from 'react-dom';

import Button from './button';

describe('FormToDo tests', () => {


    it("Renders correctly", () => {
        const { getByTestId } = render(<Button name="Click me" onClick={() => {
            console.log("An event occured")
        }} />)
        const buttonEl = getByTestId("button")
        expect(buttonEl.textContent).toBe("Click me")
    })
})