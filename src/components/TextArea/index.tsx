import React, { useState, useEffect } from 'react';
import { TextInputProps } from 'react-native';

import { Container } from './styles';

type TTextAreaProps = TextInputProps & {
  state: string;
  handleValidationError: (value: boolean) => void;
  hasGlobalValidationError: boolean;
}

const TextArea: React.FC<TTextAreaProps> = ({ state, handleValidationError, hasGlobalValidationError, ...rest }) => {
  const [wasSelected, setWasSelected] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);

  useEffect(() => {
    if (hasGlobalValidationError) {
      if (state === '') setIsInvalid(true);
    }
  }, [hasGlobalValidationError]);

  function isFocus() {
    setWasSelected(true);

    setIsInvalid(false);
    handleValidationError(false);
  }

  function lostFocus() {
    if (wasSelected) {
      if (state === '') {
        setIsInvalid(true);
        handleValidationError(true);
      }
    }
  }

  return (
    <Container
      value={state}
      onFocus={isFocus}
      onBlur={lostFocus}
      isInvalid={isInvalid}
      style={{ textAlignVertical: 'top' }}
      {...rest}
    />
  )
}

export default TextArea;
