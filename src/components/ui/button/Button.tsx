import clsx from 'clsx';
import React from 'react';

interface ButtonProps {
  value?: string | React.ReactNode;
  variant?: 'default' | 'primary';
  shape?: 'default' | 'rounded' | 'circle';
  type?: 'button' | 'submit';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: string;
}

const variantMap = {
  default:
    'bg-white border-gray250 text-gray700 hover:border-gray200 hover:bg-gray200 hover:text-gray700 active:border-gray700 active:bg-gray700 active:text-white',
  primary:
    'bg-primary500 border-primary500 text-white hover:border-primary300 hover:bg-primary300 hover:text-white active:border-primary600 active:bg-primary600',
};

export function Button({
  value = '',
  variant = 'default',
  type = 'button',
  shape = 'default',
  onClick,
  style,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={clsx(
        `p-2 rounded-[4px] group flex justify-center items-center flex-shrink-0 border hover:border-gray300 hover:bg-gray100 hover:text-gray700,
        ${variantMap[variant]} ${style && style} ${
          shape === 'rounded' ? 'rounded-full' : 'rounded-[4px]'
        }`
      )}
      onClick={onClick}
    >
      {value}
    </button>
  );
}
