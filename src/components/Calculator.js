import React, { useState } from 'react';
import Button from './Buttons';
import Calculate from '../logic/Calculate';

function Calculator() {
  const initialValue = {
    total: null,
    next: null,
    operation: null,
  };

  const [result, setResults] = useState(initialValue);
  const { total, operation, next } = result;

  const buttonValue = (btn) => {
    setResults((Object) => Calculate(Object, btn));
  };

  return (
    <div id="calculator">
      <div className="screen">
        <p className="screenvalue">
          <span>{total}</span>
          <span>{operation}</span>
          <span>{next}</span>
        </p>
      </div>
      <div id="numbers">
        <Button id="AC" value="AC" buttonName={(value) => buttonValue(value)} />
        <Button id="+/-" value="+/-" buttonName={(value) => buttonValue(value)} />
        <Button id="%" value="%" buttonName={(value) => buttonValue(value)} />
        <Button id="+" value="+" className="special" buttonName={(value) => buttonValue(value)} />
        <Button id="7" value="7" buttonName={(value) => buttonValue(value)} />
        <Button id="8" value="8" buttonName={(value) => buttonValue(value)} />
        <Button id="9" value="9" buttonName={(value) => buttonValue(value)} />
        <Button id="x" value="x" buttonName={(value) => buttonValue(value)} />
        <Button id="4" value="4" buttonName={(value) => buttonValue(value)} />
        <Button id="5" value="5" buttonName={(value) => buttonValue(value)} />
        <Button id="6" value="6" buttonName={(value) => buttonValue(value)} />
        <Button id="-" value="-" buttonName={(value) => buttonValue(value)} />
        <Button id="1" value="1" buttonName={(value) => buttonValue(value)} />
        <Button id="2" value="2" buttonName={(value) => buttonValue(value)} />
        <Button id="3" value="3" buttonName={(value) => buttonValue(value)} />
        <Button id="+" value="+" className="special" buttonName={(value) => buttonValue(value)} />
        <Button id="0" value="0" className="zero" buttonName={(value) => buttonValue(value)} />
        <Button id="." value="." buttonName={(value) => buttonValue(value)} />
        <Button id="=" value="=" buttonName={(value) => buttonValue(value)} />
      </div>
    </div>
  );
}

export default Calculator;
