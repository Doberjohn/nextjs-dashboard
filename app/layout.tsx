import '@/app/ui/global.css';
import {inter} from '@/app/ui/fonts';
import {Analytics} from '@vercel/analytics/react';

export default function RootLayout({children}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
      <head>
         <title>Megabyte Concept Wall Art Store</title>
         <meta name="description" content="Megabyte Concept Digital Arts brings te largest collection of stunning wall art tailored to your house"/>
      </head>
      <body className={`${inter.className} antialiased`}>
      {children}
      <Analytics/>
      </body>
      </html>
   );
}
