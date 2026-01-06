// import React from "react";
import {Link,NavLink} from 'react-router-dom';
function Index({ border }) {
  const tableData = [
    {
      name: "John",
      productName: "Laptop",
      address: "New York",
      number: "1234567890",
    },
    {
      name: "Alice",
      productName: "Phone",
      address: "California",
      number: "9876543210",
    },
    {
      name: "Bob",
      productName: "Tablet",
      address: "Texas",
      number: "4567891230",
    },
    {
      name: "Emma",
      productName: "Monitor",
      address: "Florida",
      number: "7891234560",
    },
    {
      name: "David",
      productName: "Keyboard",
      address: "Nevada",
      number: "6543217890",
    },
  ];
  return (
    <>
     
      <h1 className="underline text-center text-3xl font-bold mb-4 text-black">
        Billing History
      </h1>

      <div className="overflow-hidden rounded-lg border border-black">
        <table className="rounded-lg table w-full border border-black">
          <thead>
            <tr key={'row'}>
              <th className="border border-black px-4 py-2 bg-gray-700 text-2xl">
                Name
              </th>
              <th className="border border-black px-4 py-2 bg-gray-700 text-2xl">
                Product Name
              </th>
              <th className="border border-black px-4 py-2 bg-gray-700 text-2xl">
                Address
              </th>
              <th className="border border-black px-4 py-2 bg-gray-700 text-2xl">
                Number
              </th>
              <th className="border border-black px-4 py-2 bg-gray-700 text-2xl">

              </th>
            </tr>
          </thead>

          <tbody>
            {tableData.map((row) => (
              <tr key={row.name}>
                <td className="border border-black px-4 py-2 bg-gray-400">
                  {row.name}
                </td>
                <td className="border border-black px-4 py-2 bg-gray-400">
                  {row.productName}
                </td>
                <td className="border border-black px-4 py-2 bg-gray-400">
                  {row.address}
                </td>
                <td className="border border-black px-4 py-2 bg-gray-400">
                  {row.number}
                </td>
                <td>
                  <input type="button" value={'Delete x'} className="text-right text-gray-900 border border-black px-4 py-2 bg-gray-400 rounded-xl cursor-pointer"/>
                  </td>
              </tr>
            ))}

            {tableData.map((row) => (
              <tr key={row.name}>
                <td className="border border-black px-4 py-2 bg-gray-400">
                  {row.name}
                </td>
                <td className="border border-black px-4 py-2 bg-gray-400">
                  {row.productName}
                </td>
                <td className="border border-black px-4 py-2 bg-gray-400">
                  {row.address}
                </td>
                <td className="border border-black px-4 py-2 bg-gray-400">
                  {row.number}
                </td>
                <input type="button" value={'Delete x'} className="text-right text-gray-900 border border-black px-4 py-2 bg-gray-400 rounded-xl cursor-pointer"/>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end items-end">
      <button className="rounded-lg mt-5 border border-black px-5 py-4 bg-teal-700 text-xl text-stone-900">Create Bill</button>
      </div>
    </>
  );
}

export default Index;
