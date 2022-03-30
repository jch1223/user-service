import { InputHTMLAttributes, LegacyRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputRef?: LegacyRef<HTMLInputElement>;
}

function Input({ inputRef, className, ...rest }: InputProps) {
  return (
    <input
      ref={inputRef}
      className={`relative w-full px-3 py-2 border focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 ${className}`}
      {...rest}
    />
  );
}

export default Input;
