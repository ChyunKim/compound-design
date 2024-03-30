import React, { useState } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { Button } from '../button/Button';

interface FormProps {
  children: React.ReactNode;
  onSubmit?: SubmitHandler<FieldValues>;
}

function getFormButton({ value }: { value: string }) {
  return <Button type="submit" shape="rounded" variant="primary" value={value} />;
}

function Form({ children, onSubmit }: FormProps) {
  return (
    <form
      onSubmit={() => {}}
      className="flex flex-col gap-y-5 w-96 p-6 bg-white rounded-lg shadow-md"
    >
      {children}
    </form>
  );
}

Form.Button = getFormButton;
export default Form;
