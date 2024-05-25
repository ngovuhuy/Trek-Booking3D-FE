/* eslint-disable @next/next/no-img-element */
// my-new-page.js
"use client";
import React, { useEffect, useState } from "react";
import tourService from "@/app/services/tourService";
import Link from "next/link";

const TourList = () => {
  const [tourList, setTourList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const supplierId = localStorage.getItem("supplierId");
    if (supplierId) {
      tourService
        .getToursBySuppierId(Number(supplierId))
        .then((data: any) => {
          setTourList(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching tour list:", error);
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
    return <div>Error loading tours</div>;
  }
  console.log(tourList);
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
        <button className="ml-8 button-add ml-4rem">+ Add tour</button>
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
                        TourId
                      </th>
                      <th scope="col" className="px-6 py-4 text-center">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Tour Time
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Transportation
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Capacity
                      </th>
                      <th scope="col" className="px-6 py-4">
                        View Detail
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Manage Image
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
                    {tourList.length > 0 ? (
                      tourList.map((item: ITour, index) => {
                        // Parse the tourTime to a Date object if it's a string
                        const tourTimeDate = new Date(item.tourTime);
                        const formattedTourTime =
                          tourTimeDate.toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          });

                        return (
                          <tr
                            key={index}
                            className="border-b border-neutral-200 dark:border-white/10"
                          >
                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                              {item.tourId}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 font-semibold">
                              {item.tourName}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 font-semibold">
                              {formattedTourTime}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 font-semibold">
                              {item.tourTransportation}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 font-semibold">
                              {item.tourCapacity}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              <Link href="#">
                                <img
                                  src="/image/viewdetail.png"
                                  alt="View Detail"
                                />
                              </Link>
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              <Link href="#">
                                <img
                                  src="/image/managevoucher.png"
                                  alt="Manage Image"
                                />
                              </Link>
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
                          No tours found
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

export default TourList;
