'use client';
import Form from '../ui/form/Form';
import Input from '../ui/input';
import { Button } from '../ui/button/Button';

export function LoginForm() {
  return (
    <Form onSubmit={() => {}}>
      <Input type="email" />
      <Input.Password />
      <Form.Button value="로그인" type="submit" />
    </Form>
  );
}
