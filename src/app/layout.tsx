import './globals.css';
import { Metadata } from 'next';
import { cookies, headers } from 'next/headers';
import localFont from 'next/font/local';

const Pretendard = localFont({
  src: [
    {
      path: '../fonts/Pretendard-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Pretendard-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Pretendard-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/Pretendard-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  fallback: ['dotum', 'Proxima Nova', 'system-ui'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | lucy3.0',
    default: 'lucy3.0', // a default is required when creating a template
  },
  description: 'home',
};

export const dynamic = 'force-dynamic';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = cookies();
  const locale = cookieStore.get('locale')?.value ?? 'ko';

  const header = headers().get('user-agent') as string;

  return (
    <html lang={locale as string}>
      <head>
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
      </head>
      <body className={`${Pretendard.className} overflow-hidden`}>{children}</body>
    </html>
  );
}
