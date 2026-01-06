import React from 'react'

function PendingBills() {
    const tableData = [
        {
          id:1,
          customerName: "Alice Johnson",
          mobileNumber : '111-222-3333',
          address: "456 Elm St, Townsville, USA",
          totalAmount: "1000",
          deposit: "100",
          pending: "800",
          purchase: "5",
          purchaseTime: "2023-04-15 10:30:00",
          edit : "Edit"
        },
        {
          id:2,
          customerName: "Bob Smith",
            mobileNumber : '111-222-3333',
            address: "789 Oak St, Villageton, USA",
            totalAmount: "1000",
            deposit: "100",
            pending: "800",
            purchase: "3",
            purchaseTime: "2023-04-16 10:30:00",
            edit : "Edit"
        },
        {
          id:3,
          customerName: "Charlie Brown",
            mobileNumber : '111-222-3333',
            address: "321 Cedar St, Hamletville, USA",
            totalAmount: "1000",
            deposit: "100",
            pending: "800",
            purchase: "3",
            purchaseTime: "2023-04-17 10:30:00",
            edit : "Edit"
        },
        {
          id:4,
          customerName: "David Lee",
            mobileNumber : '111-222-3333',
            address: "456 Birch St, Woodstown, USA",
            totalAmount: "1000",
            deposit: "100",
            pending: "800",
            purchase: "2",
            purchaseTime: "2023-04-18 10:30:00",
            edit : "Edit"
        },
        {
          id:5,
          customerName: "Alice Johnson",
          mobileNumber : '111-222-3333',
          address: "987 Pine St, Lakeville, USA",
          totalAmount: "1000",
          deposit: "100",
          pending: "800",
          purchase: "1",
          purchaseTime: "2023-04-19 10:30:00",
          edit : "Edit"
        },
        {
            id:6,
            customerName: "Eva Davis",
            mobileNumber : '111-222-3333',
            address: "654 Willow St, Riverside, USA",
            totalAmount: "1000",
            deposit: "100",
            pending: "800",
            purchase: "4",
            purchaseTime: "2023-04-20 10:30:00",
            edit : "Edit"
          }
      ];
    return (
        <>
        <h1 className='underline text-center text-3xl font-extrabold mb-5'>Pending Bills</h1>
        <div className="overflow-hidden rounded-lg border border-black">
            <table className="rounded-lg table w-full border border-black">
                <thead>
                    <tr>
                        <th className="border border-black px-4 py-2 bg-gray-700 text-2xl">ID</th>
                        <th className="border border-black px-4 py-2 bg-gray-700 text-2xl">Customer Name</th>
                        <th className="border border-black px-4 py-2 bg-gray-700 text-2xl">Mobile Number</th>
                        <th className="border border-black px-4 py-2 bg-gray-700 text-2xl">Address</th>
                        <th className="border border-black px-4 py-2 bg-gray-700 text-2xl">Total Amount</th>
                        <th className="border border-black px-4 py-2 bg-gray-700 text-2xl">Deposit</th>
                        <th className="border border-black px-4 py-2 bg-gray-700 text-2xl">Pending</th>
                        <th className="border border-black px-4 py-2 bg-gray-700 text-2xl">Purchase</th>
                        <th className="border border-black px-4 py-2 bg-gray-700 text-2xl">Purchase Time</th>
                        <th className="border border-black px-4 py-2 bg-gray-700 text-2xl">Edit</th>
                    </tr>
                </thead>

                <tbody>
                    {tableData.map((row)=>(
                        <tr key={row.id}>
                            <td className="border border-black px-4 py-2 bg-gray-400">{row.id}</td>
                            <td className="border border-black px-4 py-2 bg-gray-400">{row.customerName}</td>
                            <td className="border border-black px-4 py-2 bg-gray-400">{row.mobileNumber}</td>
                            <td className="border border-black px-4 py-2 bg-gray-400">{row.address}</td>
                            <td className="border border-black px-4 py-2 bg-gray-400">{row.totalAmount}</td>
                            <td className="border border-black px-4 py-2 bg-gray-400">{row.deposit}</td>
                            <td className="border border-black px-4 py-2 bg-gray-400">{row.pending}</td>
                            <td className="border border-black px-4 py-2 bg-gray-400">{row.purchase}</td>
                            <td className="border border-black px-4 py-2 bg-gray-400">{row.purchaseTime}</td>
                            <td> 
                            <input type="button" value={'Edit'} className="text-gray-900 border border-black px-4 py-2 bg-gray-400 rounded-xl cursor-pointer"/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    )
}

export default PendingBills;
