import '@/app/ui/global.css';
import {inter} from '@/app/ui/fonts';
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({children}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
      <head>
         <title>Next.js</title>
      </head>
      <body className={`${inter.className} antialiased`}>
         {children}
         <Analytics />
      </body>
      </html>
   );
}
