/* eslint-disable @next/next/no-img-element */
// pages/room/[hotelId].tsx
"use client";
import React, { useEffect, useState } from "react";
import roomService from "@/app/services/roomService";
import Link from "next/link";
import CreateModal from "./create";
import { useRouter } from "next/router";
import { ToastContainer } from "react-bootstrap";
import ViewDetailRoom from "./detail";

const ListRoom = ({ params }: { params: { hotelId: string } }) => {
  const [listRoom, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [showRoomCreate, setShowRoomCreate] = useState<boolean>(false);
  const [showRoomDetail, setShowRoomDetail] = useState<boolean>(false);

  useEffect(() => {
    if (params.hotelId) {
      roomService
        .getRoomsByHotelId(Number(params.hotelId))
        .then((data: any) => {
          setRooms(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching room list:", error);
          setError(error);
          setLoading(false);
        });
    }
  }, [params.hotelId]);

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
          <input
            type="text"
            placeholder="Search........."
            className="input-hotel pl-3"
          />
          <img src="/image/search.png" alt="" />
        </div>
        <button
          className="ml-8 button-add ml-4rem"
          onClick={() => setShowRoomCreate(true)}
        >
          + Add room
        </button>
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
                        RoomId
                      </th>
                      <th scope="col" className="px-6 py-4 text-center">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-4">
                        View Detail
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Manage Service
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Manage Room 3D
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Manage Room Image
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {listRoom.length > 0 ? (
                      listRoom.map((item: IRoom, index) => (
                        <tr
                          key={index}
                          className="border-b border-neutral-200 dark:border-white/10"
                        >
                          <td className="whitespace-nowrap px-6 py-4 font-medium">
                            {item.roomId}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 font-semibold">
                            {item.roomName}
                          </td>
                          <td
                            className={`whitespace-nowrap px-6 py-4 ${
                              item.roomStatus ? "color-active" : "color-stop"
                            }`}
                          >
                            {item.roomStatus ? "Active" : "Stopped"}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            <Link href="#">
                              <img
                                src="/image/viewdetail.png"
                                alt="View Detail"
                                onClick={() => setShowRoomDetail(true)}
                              />
                            </Link>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            <Link href="#">
                              <img
                                src="/image/managevoucher.png"
                                alt="Manage Service"
                              />
                            </Link>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            <Link href="#">
                              <img
                                src="/image/managevoucher.png"
                                alt="Manage Room 3D"
                              />
                            </Link>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            <Link href="#">
                              <img
                                src="/image/managevoucher.png"
                                alt="Manage Room Image"
                              />
                            </Link>
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
                              src="/image/lock.png"
                              alt="Delete"
                              onClick={() =>
                                console.log(`Lock room ${item.roomId}`)
                              }
                            />
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan={8}
                          className="text-center py-4 text-red-600 font-bold"
                        >
                          No rooms found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
                <CreateModal
                  showRoomCreate={showRoomCreate}
                  setShowRoomCreate={setShowRoomCreate}
                  hotelId={params.hotelId}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListRoom;
