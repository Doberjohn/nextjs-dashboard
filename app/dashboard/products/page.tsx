import {getAllShopifyProducts} from "@/app/lib/data";
import Search from "@/app/ui/search";
import {CreateInvoiceBtn} from "@/app/ui/invoices/buttons";
import {Suspense} from "react";
import {InvoicesTableSkeleton} from "@/app/ui/skeletons";
import ProductsTable from "@/app/ui/invoices/productsTable";
import Pagination from "@/app/ui/invoices/pagination";

export default async function Page() {
   const products = await getAllShopifyProducts();

   return (
      <main className="w-full">
         <div className="flex w-full items-center justify-between">
            <h1 className={`text-2xl`}>Products</h1>
         </div>
         <Suspense key={'products-table'} fallback={<InvoicesTableSkeleton/>}>
            <ProductsTable products={products}/>
         </Suspense>
         <div className="mt-5 flex w-full justify-center">
            <Pagination totalPages={1} />
         </div>
      </main>
   );
}