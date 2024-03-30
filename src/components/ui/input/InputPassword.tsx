import React, { useState } from 'react';
import clsx from 'clsx';
import { FaEyeSlash } from 'react-icons/fa';
import { IoEyeSharp } from 'react-icons/io5';
import { InputProps } from '.';
import Input from '.';

export function InputPassword({ value, style, onChange }: InputProps) {
  const [show, setShow] = useState(false);

  return (
    <div
      className={clsx(
        'flex border border-gray-300 items-center justify-between pr-2 rounded-[4px]'
      )}
    >
      <Input value={value} type={show ? 'text' : 'password'} onChange={onChange} style="border-0" />
      {!show ? (
        <FaEyeSlash onClick={() => setShow(true)} />
      ) : (
        <IoEyeSharp onClick={() => setShow(false)} />
      )}
    </div>
  );
}
