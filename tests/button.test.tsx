import { render } from '@testing-library/react';
import React from 'react';

import Button from '../src/Components/Button/button';

describe('Button tests', () => {

    it("Renders correctly", () => {
        const { getByTestId } = render(<Button name="Click me" onClick={() => {
            console.log("An event occured")
        }} />)
        const buttonEl: HTMLElement | HTMLButtonElement = getByTestId("button")
        expect(buttonEl.textContent).toBe("Click Me")
    })
})