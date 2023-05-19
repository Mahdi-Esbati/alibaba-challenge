import React, { useState, useRef, useEffect } from 'react';

interface InputHookResult {
  ref: React.RefObject<HTMLInputElement>;
  value: string;
}

const useInputValue = (initialValue = ''): InputHookResult => {
  const [value, setValue] = useState(initialValue);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleChange = () => {
      if (inputRef.current) {
        setValue(inputRef.current.value);
      }
    };

    if (inputRef.current) {
      inputRef.current.addEventListener('input', handleChange);
    }

    return () => {
      if (inputRef.current) {
        inputRef.current.removeEventListener('input', handleChange);
      }
    };
  }, []);

  return { ref: inputRef, value };
};
export default useInputValue;
