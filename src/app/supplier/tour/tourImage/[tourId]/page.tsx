/* eslint-disable @next/next/no-img-element */
// pages/room/[hotelId].tsx
'use client'
import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import tourService from '@/app/services/tourService';
import CreateTourImage from '@/app/components/TourImages/CreateTourImage';

const ListTourImage = ({ params }: { params: { tourId: string } }) => {

  const [showTourImageCreate, setShowTourImageCreate] = useState<boolean>(false);
  const [listTourImage, setTourImage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (params.tourId) {
      tourService.getTourImageByTourId(Number(params.tourId))
        .then((data: any) => {
          setTourImage(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching room list:", error);
          setError(error);
          setLoading(false);
        });
    }
  }, [params.tourId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading rooms</div>;
  }
  return (
    <div className="relative">
      <div className="search-add ">
        <div className="search-hotel flex">
          <input type="text" placeholder="Search........." className="input-hotel pl-3" />
          <img src="/image/search.png" alt="" />
        </div>
        <button className="ml-8 button-add ml-4rem" onClick={() => setShowTourImageCreate(true)}>+ Add Image Tour</button>
      </div>
      <div className="table-hotel pt-8">
        <div className="flex flex-col overflow-x-auto">
          <div className="sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-x-auto">
                <table className="min-w-full text-start text-sm font-light text-surface dark:text-white border-solid">
                  <thead className="border-b border-neutral-200 font-medium dark:border-white/10 bk-top-table">
                    <tr className='text-center'>
                      <th scope="col" className="px-6 py-4">TourImageId</th>
                      <th scope="col" className="px-6 py-4 text-center">TourImageURL</th>
                      <th scope="col" className="px-6 py-4">Tour Name</th>
     
                      <th scope="col" className="px-6 py-4">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listTourImage.length > 0 ? (
                      listTourImage.map((item: ITourImage, index) => (
                        <tr key={index} className="border-b border-neutral-200 dark:border-white/10 text-center">
                          <td className="whitespace-nowrap px-6 py-4 font-medium">{item.tourImageId}</td>
                          <td className="whitespace-nowrap px-6 py-4 font-semibold flex justify-center">
                                            <img
                                 className=""
                             src={item.tourImageURL ? item.tourImageURL : "/image/imagedefault.png"}
                              alt=""
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.onerror = null; // Ngăn chặn vòng lặp vô hạn nếu hình ảnh mặc định cũng bị lỗi
                                target.src = "/image/imagedefault.png"; // Đường dẫn đến hình ảnh mặc định
                            }}
      
                                 />
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 font-semibold">{item.tour.tourName}</td>
                          <td className="whitespace-nowrap px-6 py-4 ">
                          
                           <div className="flex justify-center">
                           <img className="w-5 h-5 cursor-pointer" src="/image/pen.png" alt="Edit" />
                     
                     <img
                       className="w-5 h-5 cursor-pointer ml-3"
                       src="/image/unlock.png"
                       alt="Delete"
                       onClick={() => console.log(`Delete room ${item.tourImageId}`)}
                     />
                           </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={8} className="text-center py-4 text-red-600 font-bold">No TourImage found</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CreateTourImage 
   showTourImageCreate={showTourImageCreate}
   setShowTourImageCreate={setShowTourImageCreate}
   />
    </div>
  );
};

export default ListTourImage;
