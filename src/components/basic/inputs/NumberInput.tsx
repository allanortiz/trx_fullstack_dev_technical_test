import React, { forwardRef } from 'react';
import InputTex, { InputProps } from './Input';

type NumberInputProps = InputProps & { isDecimal?: boolean };

export const onKeyPress = (event: any, isDecimal = false) => {
  if (isDecimal) {
    const theEvent = event || window.event;
    let key = theEvent.keyCode || theEvent.which;

    key = String.fromCharCode(key as number);

    const value = Number(event.target.value) + Number(key);
    const regex = /^\d{0,9}$|(?=^.{0,9}$)^\d+\.\d{0,9}$/; // Decimal

    if (regex.test(String(value))) return;

    theEvent.returnValue = false;

    if (theEvent.preventDefault) {
      theEvent.preventDefault();
    }

    return;
  }

  if (!/[0-9]/g.test(event.key as string)) {
    event.preventDefault();
  }
};

export const onPaste = (event: any) => {
  const pastedValue = event.clipboardData.getData('Text');

  if (isNaN(+pastedValue)) {
    event.preventDefault();
  }

  return false;
};

const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(function InputWithRef(
  { isDecimal = false, ...props },
  ref
) {
  return <InputTex ref={ref} {...props} onKeyPress={(event) => onKeyPress(event, isDecimal)} onPaste={onPaste} />;
});

export default NumberInput;
