import Image from 'next/image';
import {UpdateInvoiceBtn, DeleteInvoiceBtn, StripePayBtn} from '@/app/ui/invoices/buttons';
import InvoiceStatus from '@/app/ui/invoices/status';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchFilteredInvoices } from '@/app/lib/data';
import {ShopifyProduct} from "@/app/lib/definitions";

export default async function ProductsTable({
  products,
}: {
  products: ShopifyProduct[];
}) {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {products.map(({node: product}) => (
              <div
                key={product.title}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{product.title}</p>
                    </div>
                    <p className="text-sm text-gray-500">{'johnfanidis@gmail.com'}</p>
                  </div>
                  <InvoiceStatus status={'paid'} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {formatCurrency(parseInt(product.priceRange.minVariantPrice.amount))}
                    </p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <StripePayBtn/>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Product
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Amount
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {products?.map(({node: product}) => (
                <tr
                  key={product.title}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap px-3 py-3">
                    {product.title}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {'johnfanidis@gmail.com'}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatCurrency(parseInt(product.priceRange.minVariantPrice.amount))}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <InvoiceStatus status={'paid'} />
                  </td>
                  <td>
                    <StripePayBtn/>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
