// my-new-page.js
'use client'
import React, { useState } from 'react'
import Table from '../../../../node_modules/react-bootstrap/esm/Table';



const MyNewPage = () => {
  
  

  return (
    <div className='relative'>
      <div className="search-add ">
        <div className="search-hotel flex">
          <input type="text" placeholder='Search.........' className='input-hotel pl-3'/>
          <img src="/image/search.png" alt="" />
        </div>
        <button className='ml-8 button-add ml-4rem'>+ Add hotel</button>
  
      </div>
   <div className="table-hotel pt-8">
 

<div className="flex flex-col overflow-x-auto">
  <div className="sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-x-auto">
        <table
          className="min-w-full text-start text-sm font-light text-surface dark:text-white">
          <thead
            className="border-b border-neutral-200 font-medium dark:border-white/10">
            <tr>
              <th scope="col" className="px-6 py-4">HotelId</th>
              <th scope="col" className="px-6 py-4">Name</th>
              <th scope="col" className="px-6 py-4">Phone</th>
              <th scope="col" className="px-6 py-4">Email</th>
              <th scope="col" className="px-6 py-4">Avatar</th>
              <th scope="col" className="px-6 py-4">Destination</th>
              <th scope="col" className="px-6 py-4">District</th>
              <th scope="col" className="px-6 py-4">City</th>
              <th scope="col" className="px-6 py-4">Information</th>
              <th scope="col" className="px-6 py-4">Isverify</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-neutral-200 dark:border-white/10">
              <td className="whitespace-nowrap px-6 py-4 font-medium">1234589</td>
              <td className="whitespace-nowrap px-6 py-4">Cereja Hotel & Resort Dalat</td>
              <td className="whitespace-nowrap px-6 py-4">012382xxxxxx</td>
              <td className="whitespace-nowrap px-6 py-4">hotel@gmail.com</td>
              <td className="whitespace-nowrap px-6 py-4">Hotel avatar</td>
              <td className="whitespace-nowrap px-6 py-4">Lorem ipsum dolor sit amet consectetur.</td>
              <td className="whitespace-nowrap px-6 py-4">Lorem ipsum dolor sit amet consectetur.</td>
              <td className="whitespace-nowrap px-6 py-4">Da Lat</td>
              <td className="whitespace-nowrap px-6 py-4">Lorem ipsum dolor sit amet consectetur.</td>
              <td className="whitespace-nowrap px-6 py-4 flex">
              <img className='w-5 h-5 cursor-pointer' src="/image/pen.png" alt="" />
            <img className='w-5 h-5 cursor-pointer ml-3' src="/image/trash.png" alt="" />
              </td>
            </tr>
        
          
</tbody>
        </table>
      </div>
    </div>
  </div>
</div>
   </div>
  


    </div>
  )
}

export default MyNewPage