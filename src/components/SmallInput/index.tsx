import React, { useState, useEffect } from 'react';
import { TextInputProps } from 'react-native';

import { InputValidation } from './styles';

type TSmallInputProps = TextInputProps & {
  type: string;
  setState: (value: number) => void;
  state: number;
  defaultValue: number;
  handleValidationError: (value: boolean) => void;
  hasGlobalValidationError: boolean;
}

const SmallInput: React.FC<TSmallInputProps> = ({ defaultValue, type, setState, state, handleValidationError, hasGlobalValidationError, ...rest }) => {
  const [wasSelected, setWasSelected] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);

  useEffect(() => {
    if (hasGlobalValidationError) {
      if (state === defaultValue) setIsInvalid(true);
    }
  }, [hasGlobalValidationError]);

  function isFocus() {
    setWasSelected(true);

    setIsInvalid(false);
    handleValidationError(false);
  }

  function lostFocus() {
    if (wasSelected) {
      if (state === defaultValue) {
        setIsInvalid(true);
        handleValidationError(true);
      }
    }
  }

  var limit = 0;

  switch(type) {
    case 'day':
      limit = 31;
      break;
    
    case 'month':
      limit = 12;
      break;
    
    case 'hour':
      limit = 23;
      break;
    
    case 'minute':
      limit = 60;
      break;
  }

  const onCheckLimit = (value: string) => {
      const parsedQty = Number.parseInt(value)
      if (Number.isNaN(parsedQty)) {
        setState(0)
      } else if (parsedQty > limit) {
      } else {
        setState(parsedQty)
      }

      if (value === '') {
        setState(defaultValue);
      }
  }

  const newState = state === defaultValue ? '' : `${state}`;

  return (
    <InputValidation
      isInvalid={isInvalid}
      value={newState}
      onChangeText={onCheckLimit}
      keyboardType="numeric"
      onFocus={isFocus}
      onBlur={lostFocus}
      {...rest}
    />
  )
}

export default SmallInput;
