import '@/app/ui/global.css';
import {inter} from '@/app/ui/fonts';
import {Analytics} from '@vercel/analytics/react';

export default function RootLayout({children}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
      <head>
         <title>Megabyte Concept Store</title>
         <meta name="description" content="Your meta description goes here."/>
      </head>
      <body className={`${inter.className} antialiased`}>
      {children}
      <Analytics/>
      </body>
      </html>
   );
}
