/* eslint-disable @next/next/no-img-element */
// pages/room/[hotelId].tsx
"use client";
import React, { useEffect, useState } from "react";
import roomService from "@/app/services/roomService";
import Link from "next/link";
import useSWR from "swr";
import CreateModal from "@/app/components/Room/CreateRoom";
import CreateRoom from "@/app/components/Room/CreateRoom";
import UpdateRoom from "@/app/components/Room/UpdateRoom";
import { Hotel, Room } from "@mui/icons-material";
import DetailRoom from "@/app/components/Room/DetailRoom";
import hotelService from "@/app/services/hotelService";

const ListRoom = ({ params }: { params: { hotelId: string } }) => {
  const [showRoomCreate, setShowRoomCreate] = useState<boolean>(false);
  const [showRoomUpdate, setShowRoomUpdate] = useState<boolean>(false);
  const [showRoomDetail, setShowRoomDetail] = useState<boolean>(false);
  const [RoomId, setRoomId] = useState(0);

  const [Room, setRoom] = useState<IRoom | null>(null);
  const [hotel, setHotel] = useState<IHotel | null>(null);

  const { data: listRoom, error } = useSWR("listRoom", () =>
    roomService.getRoomsByHotelId(Number(params.hotelId))
  );

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const hotelData = await hotelService.getHotelById(
          Number(params.hotelId)
        );
        setHotel(hotelData);
      } catch (error) {
        console.error("Error fetching hotel details:", error);
      }
    };

    fetchHotel();
  }, [params.hotelId]);

  if (!listRoom) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading rooms</div>;
  }
  return (
    <div className="relative">
      <div className="search-add">
        {hotel && (
          <div className="breadcrumb">
            <a
              href="/supplier/hotel"
              style={{ color: "black", fontSize: "18px" }}
            >
              Hotel
            </a>

            <span
              style={{
                color: "black",
                fontSize: "18px",
                marginLeft: "5px",
                marginRight: "5px",
              }}
            >
              {" > "}
            </span>

            <span style={{ color: "blue", fontSize: "18px" }}>
              {hotel.hotelName}
            </span>
          </div>
        )}
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
                          <td className="whitespace-nowrap px-6 py-4 font-medium text-black">
                            {item.roomId}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 font-semibold text-black">
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
                                onClick={() => {
                                  setRoomId(item.roomId);
                                  setRoom(item);
                                  setShowRoomDetail(true);
                                  console.log("RoomId: " + item.roomId, item);
                                }}
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
                                onClick={() => {
                                  setRoomId(item.roomId);
                                  setRoom(item);
                                  setShowRoomUpdate(true);
                                  console.log("RoomId: " + item.roomId, item);
                                }}
                              />
                            </Link>
                            <img
                              className="w-5 h-5 cursor-pointer ml-3"
                              src="/image/lock.png"
                              alt="Delete"
                              onClick={() =>
                                console.log(`Delete room ${item.roomId}`)
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
                <CreateRoom
                  showRoomCreate={showRoomCreate}
                  setShowRoomCreate={setShowRoomCreate}
                  hotelId={params.hotelId}
                />
                <UpdateRoom
                  showRoomUpdate={showRoomUpdate}
                  setShowRoomUpdate={setShowRoomUpdate}
                  hotelId={params.hotelId}
                  room={Room}
                  setRoom={setRoom}
                />
                <DetailRoom
                  showRoomDetail={showRoomDetail}
                  setShowRoomDetail={setShowRoomDetail}
                  hotelId={params.hotelId}
                  room={Room}
                  setRoom={setRoom}
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
