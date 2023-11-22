import '@/app/ui/global.css';

export default function Layout({children}: {
   children: React.ReactNode;
}) {
   return (
      <div>
         {children}
      </div>
   );
}
