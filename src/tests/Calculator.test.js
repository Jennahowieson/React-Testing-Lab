import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

it('should add 1 to 4 and get 5',()=>{
  const button1 = container.getByTestId('number1');
  const button4 = container.getByTestId('number4');
  const addButton = container.getByTestId('operator-add');
  const equalsButton = container.getByTestId('operator-equals');
  const runningTotal = container.getByTestId('running-total');
  fireEvent.click(button1);
  fireEvent.click(addButton);
  fireEvent.click(button4);
  fireEvent.click(equalsButton);
  expect(runningTotal.textContent).toEqual('5');
})


it('should subtract 4 from 7 and get 3',()=>{
  const button7 = container.getByTestId('number7');
  const button4 = container.getByTestId('number4');
  const minusButton = container.getByTestId('operator-subtract');
  const equalsButton = container.getByTestId('operator-equals');
  const runningTotal = container.getByTestId('running-total');
  fireEvent.click(button7);
  fireEvent.click(minusButton);
  fireEvent.click(button4);
  fireEvent.click(equalsButton);
  expect(runningTotal.textContent).toEqual('3');
})

it('should multiply 3 by 5 and get 15',()=>{
  const button3 = container.getByTestId('number3');
  const button5 = container.getByTestId('number5');
  const multiplyButton = container.getByTestId('operator-multiply');
  const equalsButton = container.getByTestId('operator-equals');
  const runningTotal = container.getByTestId('running-total');
  fireEvent.click(button3);
  fireEvent.click(multiplyButton);
  fireEvent.click(button5);
  fireEvent.click(equalsButton);
  expect(runningTotal.textContent).toEqual('15');
})

it ('should divide 21 by 7 and get 3',()=>{
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const divideButton = container.getByTestId('operator-divide');
    const button7 = container.getByTestId('number7');
    const equalsButton = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(divideButton);
    fireEvent.click(button7);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('3');
  })

it ('should concatenate multiple number button clicks',()=>{
  const button2 = container.getByTestId('number2');
  const button1 = container.getByTestId('number1');
  fireEvent.click(button2);
  fireEvent.click(button1);
  const runningTotal = container.getByTestId('running-total');
  expect(runningTotal.textContent).toEqual('21');
})

it ('should chain multiple operations together',()=>{
    const button2 = container.getByTestId('number2');
    const addButton = container.getByTestId('operator-add');
    const button1 = container.getByTestId('number1');
    const multiplyButton = container.getByTestId('operator-multiply');
    const button3 = container.getByTestId('number3');
    const equalsButton = container.getByTestId('operator-equals');
    fireEvent.click(button2);
    fireEvent.click(addButton);
    fireEvent.click(button1);
    fireEvent.click(multiplyButton);
    fireEvent.click(button3);
    fireEvent.click(equalsButton);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('9');
  })

it ('should clear the running total without affecting the calculation',()=>{
  const button2 = container.getByTestId('number2');
  const button1 = container.getByTestId('number1');
  const clear = container.getByTestId('clear')
  const addButton = container.getByTestId('operator-add');
  const equalsButton = container.getByTestId('operator-equals');
  fireEvent.click(button2);
  fireEvent.click(addButton);
  fireEvent.click(button1); 
  fireEvent.click(equalsButton);
  fireEvent.click(clear);
  fireEvent.click(addButton);
  fireEvent.click(button1);
  fireEvent.click(equalsButton);
  const runningTotal = container.getByTestId('running-total');
  expect(runningTotal.textContent).toEqual('4');
})
    
   it ('should return "error" when trying to divide by 0',()=>{
    const button2 = container.getByTestId('number2');
    const divideButton = container.getByTestId('operator-divide');
    const button0 = container.getByTestId('number0');
    const equalsButton = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(divideButton);
    fireEvent.click(button0);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual("error");
  })

})
