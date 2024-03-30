import Image from 'next/image';
import { Button } from '@/components/ui/button/Button';
import { LoginForm } from '@/components/login/LoginForm';

export default function Style() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <LoginForm />
    </div>
  );
}
