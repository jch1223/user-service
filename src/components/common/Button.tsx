import { ButtonHTMLAttributes } from 'react';
import { Spin } from 'antd';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

function Button({ className, type, isLoading, onClick, children }: ButtonProps) {
  return (
    <button
      type={type || 'submit'}
      onClick={onClick}
      className={`relative w-full py-2 px-4 rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${className}`}
    >
      {children}

      {isLoading && (
        <span className="absolute right-0 mx-3">
          <Spin className="h-5 w-5" aria-hidden="true" />
        </span>
      )}
    </button>
  );
}

export default Button;
