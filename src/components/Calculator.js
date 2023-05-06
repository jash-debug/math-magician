import React from 'react';
import Button from './Buttons';

function Calculator() {
  return (
    <div id="calculator">
      <input type="text" value={0} className="screen" />
      <div id="numbers">
        <Button id="AC" value="AC" />
        <Button id="+/-" value="+/-" />
        <Button id="%" value="%" />
        <Button id="+" value="+" className="special" />
        <Button id="7" value="7" />
        <Button id="8" value="8" />
        <Button id="9" value="9" />
        <Button id="x" value="x" />
        <Button id="4" value="4" />
        <Button id="5" value="5" />
        <Button id="6" value="6" />
        <Button id="-" value="-" />
        <Button id="1" value="1" />
        <Button id="2" value="2" />
        <Button id="3" value="3" />
        <Button id="+" value="+" className="special" />
        <Button id="3" value="3" className="zero" />
        <Button id="." value="." />
        <Button id="=" value="=" />
      </div>
    </div>
  );
}

export default Calculator;
