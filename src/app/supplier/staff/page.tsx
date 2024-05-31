/* eslint-disable @next/next/no-img-element */
// my-new-page.js
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import supplierStaffService from "@/app/services/supplierStaffService";

const SupplierStaffList = () => {
  const [supplierStaffList, setSupplierStaffList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const supplierId = localStorage.getItem("supplierId");
    if (supplierId) {
      supplierStaffService
        .getStaffsBySuppierId(Number(supplierId))
        .then((data: any) => {
          setSupplierStaffList(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching supplier staff list:", error);
          setError(error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading supplier staff</div>;
  }
  console.log(supplierStaffList);
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
        <button className="ml-8 button-add ml-4rem">+ Add staff</button>
      </div>
      <div className="table-hotel pt-8">
        <div className="flex flex-col overflow-x-auto">
          <div className="sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-x-auto">
                <table className="min-w-full text-start text-sm font-light text-surface dark:text-white border-solid">
                  <thead className="border-b border-neutral-200 font-medium dark:border-white/10 bk-top-table">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        StaffId
                      </th>
                      <th scope="col" className="px-6 py-4 text-center">
                        Staff Name
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Phone
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Address
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {supplierStaffList.length > 0 ? (
                      supplierStaffList.map((item: ISupplierStaff, index) => {
                        return (
                          <tr
                            key={index}
                            className="border-b border-neutral-200 dark:border-white/10"
                          >
                            <td className="whitespace-nowrap px-6 py-4 font-medium text-black">
                              {item.staffId}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 font-semibold text-black">
                              {item.staffName}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 font-semibold text-black">
                              {item.staffPhoneNumber}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 font-semibold text-black">
                              {item.staffEmail}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 font-semibold text-black">
                              {item.staffAddress}
                            </td>
                            <td
                              className={`whitespace-nowrap px-6 py-4 ${
                                item.status ? "color-active" : "color-stop"
                              }`}
                            >
                              {item.status ? "Active" : "Stopped"}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 flex">
                              <Link href="#">
                                <img
                                  className="w-5 h-5 cursor-pointer"
                                  src="/image/pen.png"
                                  alt="Edit"
                                />
                              </Link>
                              <img
                                className="w-5 h-5 cursor-pointer ml-3"
                                src="/image/unlock.png"
                                alt="Delete"
                                // onClick={() => handleDeleteHotel(item.hotelId)}
                              />
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td
                          colSpan={9}
                          className="text-center py-4 text-red-600 font-bold"
                        >
                          No staffs found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplierStaffList;
