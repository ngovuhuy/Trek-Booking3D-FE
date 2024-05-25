/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import Table from "../../../../node_modules/react-bootstrap/esm/Table";
import useSWR from "swr";
import hotelService from "@/app/services/hotelService";
import Link from "next/link";

const HotelListOfSupplier = () => {
  const [hotelList, setHotelList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const supplierId = localStorage.getItem("supplierId");
    if (supplierId) {
      hotelService
        .getHotelsBySuppierId(Number(supplierId))
        .then((data: any) => {
          setHotelList(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching hotel list:", error);
          setError(error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  console.log(hotelList);
  return (
    <div className="relative">
      <div className="search-add ">
        <div className="search-hotel flex">
          <input
            type="text"
            placeholder="Search........."
            className="input-hotel pl-3"
          />
          <img src="/image/search.png" alt="" />
        </div>
        <button className="ml-8 button-add ml-4rem">+ Add hotel</button>
      </div>
<<<<<<< Updated upstream
   <div className="table-hotel pt-8">
 

<div className="flex flex-col overflow-x-auto">
  <div className="sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-x-auto">
        <table
          className="min-w-full text-start text-sm font-light text-surface dark:text-white border-solid">
          <thead
            className="border-b border-neutral-200 font-medium dark:border-white/10 bk-top-table">
            <tr>
              <th scope="col" className="px-6 py-4">HotelId</th>
              <th scope="col" className="px-6 py-4 text-center">Name</th>
              <th scope="col" className="px-6 py-4">Avatar</th>
              <th scope="col" className="px-6 py-4">Isverify</th>
              <th scope="col" className="px-6 py-4">Manage Voucher</th>
              <th scope="col" className="px-6 py-4">Manage Room</th>
              <th scope="col" className="px-6 py-4">View Detail</th>
              <th scope="col" className="px-6 py-4">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-neutral-200 dark:border-white/10">
              <td className="whitespace-nowrap px-6 py-4 font-medium">1234589</td>
              <td className="whitespace-nowrap px-6 py-4">Cereja Hotel & Resort Dalat</td>
              <td className="whitespace-nowrap px-6 py-4">
                <img src="/image/avatar.png" alt="" />
              </td>
              <td className="whitespace-nowrap px-6 py-4 color-active">Active</td>
              <td className="whitespace-nowrap px-6 py-4">
              <img src="/image/managevoucher.png" alt="" />
              </td>
              <td className="whitespace-nowrap px-6 py-4">
              <img src="/image/managevoucher.png" alt="" />
              </td>
              <td className="whitespace-nowrap px-6 py-4">
              <img src="/image/viewdetail.png" alt="" />
              </td>
              <td className="whitespace-nowrap px-6 py-4 flex">
              <img className='w-5 h-5 cursor-pointer' src="/image/pen.png" alt="" />
            <img className='w-5 h-5 cursor-pointer ml-3' src="/image/lock.png" alt="" />
              </td>
            </tr>
            <tr className="border-b border-neutral-200 dark:border-white/10">
              <td className="whitespace-nowrap px-6 py-4 font-medium">1234589</td>
              <td className="whitespace-nowrap px-6 py-4">Cereja Hotel & Resort Dalat</td>
              <td className="whitespace-nowrap px-6 py-4">
                <img src="/image/avatar.png" alt="" />
              </td>
              <td className="whitespace-nowrap px-6 py-4  color-stop">Stopped</td>
              <td className="whitespace-nowrap px-6 py-4">
              <img src="/image/managevoucher.png" alt="" />
              </td>
              <td className="whitespace-nowrap px-6 py-4">
              <img src="/image/managevoucher.png" alt="" />
              </td>
              <td className="whitespace-nowrap px-6 py-4">
              <img src="/image/viewdetail.png" alt="" />
              </td>
              <td className="whitespace-nowrap px-6 py-4 flex">
              <img className='w-5 h-5 cursor-pointer' src="/image/pen.png" alt="" />
            <img className='w-5 h-5 cursor-pointer ml-3' src="/image/unlock.png" alt="" />
              </td>
            </tr>
          
</tbody>
        </table>
=======
      <div className="table-hotel pt-8">
        <div className="flex flex-col overflow-x-auto">
          <div className="sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-x-auto">
                <table className="min-w-full text-start text-sm font-light text-surface dark:text-white border-solid">
                  <thead className="border-b border-neutral-200 font-medium dark:border-white/10 bk-top-table">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        HotelId
                      </th>
                      <th scope="col" className="px-6 py-4 text-center">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Avatar
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Isverify
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Manage Voucher
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Manage Room
                      </th>
                      <th scope="col" className="px-6 py-4">
                        View Detail
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {hotelList.length > 0 &&
                      hotelList.map((item: IHotel, index) => {
                        return (
                          <tr
                            key={index}
                            className="border-b border-neutral-200 dark:border-white/10"
                          >
                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                              {item.hotelId}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                            {item.hotelName}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              <Link href="#">
                                <img src="/image/avatar.png" alt="" />
                              </Link>
                            </td>
                            
                            <td className={`whitespace-nowrap px-6 py-4 ${item.isVerify? "color-active": "color-stop"} `}>
                              {item.isVerify? "Active":"Stopped"}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              <Link href="#">
                                <img src="/image/managevoucher.png" alt="" />
                              </Link>
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              <Link href={`/hduqwhduqw/${item.hotelId}`}>
                                <img src="/image/managevoucher.png" alt="" />
                              </Link>
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              <Link href="#">
                                <img src="/image/viewdetail.png" alt="" />
                              </Link>
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 flex">
                              <Link href="#">
                                <img
                                  className="w-5 h-5 cursor-pointer"
                                  src="/image/pen.png"
                                  alt=""
                                />
                              </Link>
                              <Link href="#">
                                <img
                                  className="w-5 h-5 cursor-pointer ml-3"
                                  src="/image/unlock.png"
                                  alt=""
                                />
                              </Link>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
>>>>>>> Stashed changes
      </div>
    </div>
  );
};

export default HotelListOfSupplier;
