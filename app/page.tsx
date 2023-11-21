import AnnouncementBar from "@/app/ui/landing/AnnouncementBar";
import StoreNavigation from "@/app/ui/landing/StoreNavigation";

export default function Page() {
   return (
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
         <div className={'hidden'}>
            <h1>Landing Page</h1>
            <h2>Navigation and top products</h2>
         </div>
         <div className="flex-grow md:overflow-y-auto">
            <AnnouncementBar/>
            <StoreNavigation/>
            <div className="p-6 md:p-12">
               {/*Rest of the components*/}
            </div>
         </div>
      </div>
   );
}