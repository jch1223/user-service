import { InputHTMLAttributes } from 'react';

function Input({ className, ...rest }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`${className} relative w-full px-3 py-2 border focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10`}
      {...rest}
    />
  );
}

export default Input;
