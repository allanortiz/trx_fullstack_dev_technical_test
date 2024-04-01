import React, { forwardRef } from 'react';
import Input, { InputProps } from './Input';

type RestrictedInputProps = InputProps & { regex: string };

export const onKeyPress = (event: any, regex: string) => {
  const newRegex = new RegExp(regex);

  if (!newRegex.test(event.key)) {
    console.log('yeah1');
    event.preventDefault();
  }
};

export const onPaste = (event: any, regex: string) => {
  const pastedValue = event.clipboardData.getData('Text');

  if (pastedValue.match(regex) === null) {
    event.preventDefault();
  }
};

const RestrictedInput = forwardRef<HTMLInputElement, RestrictedInputProps>(function InputWithRef(
  { regex, ...props },
  ref
) {
  return (
    <Input
      ref={ref}
      {...props}
      onKeyPress={(event) => onKeyPress(event, regex)}
      onPaste={(event) => onPaste(event, regex)}
    />
  );
});

export default RestrictedInput;
