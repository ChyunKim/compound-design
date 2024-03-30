import Image from 'next/image';
import { Button } from '@/components/ui/button/Button';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="p-6 flex items-center justify-center gap-2">
        <Button value="버튼" />
        <Button value="버튼" variant="primary" />
      </div>
    </div>
  );
}
