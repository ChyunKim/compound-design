import React from 'react';
import { InputPassword } from './InputPassword';
import clsx from 'clsx';

export interface InputProps {
  type?: 'text' | 'password' | 'email';
  style?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ type = 'text', style = '', ...rest }: InputProps) {
  return (
    <input
      {...rest}
      className={clsx(
        'w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-500 rounded-[4px]',
        style
      )}
      type={type}
    />
  );
}

Input.Password = InputPassword;
export default Input;
