import '@/app/ui/global.css';
import {inter} from '@/app/ui/fonts';
import {Analytics} from '@vercel/analytics/react';

import { Metadata } from 'next';

// Dynamic metadata
export async function generateMetadata({ params }) {
   return {
      generator: 'Next.js',
      metadataBase: new URL('https://mbconcept.art'),
      applicationName: 'Megabyte Concept Wall Art Store',
      referrer: 'origin-when-cross-origin',
      keywords: [
         'Megabyte Concept',
         'Wall Art',
         'Paintings',
         'Interior Design',
         'House Decoration',
         'Digital Art',
         'AI Art',
         'Canvas',
         'Posters',
      ],
      authors: [
         { name: 'John', url: 'https://mbconcept.art'}
      ],
      creator: 'John Fanidis',
      publisher: 'John Fanidis',
      openGraph: {
         title: 'Megabyte Concept Wall Art Store',
         description: 'The largest collection of stunning wall art tailored to your house',
         url: 'https://mbconcept.art',
         siteName: 'Megabyte Concept Wall Art Store',
         images: [
            {
               url: '/opengraph-image.jpg',
               width: 1686,
               height: 882,
            },
         ],
         locale: 'en_US',
         type: 'website',
      },

      title: 'Megabyte Concept Wall Art Store',
      description: 'Megabyte Concept Digital Arts brings the largest collection of stunning wall art tailored to your house.',
   }
}

export default function RootLayout({children}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
      <body className={`${inter.className} antialiased`}>
      {children}
      <Analytics/>
      </body>
      </html>
   );
}
