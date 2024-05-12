import React from "react";
import Image from "next/image";
import Link from "next/link";
const Homepage = () => {
  return (
    <>
      <div>
        <nav className="to-white pt-2 pb-2">
          <ul className="flex ul-menu">
            <li className="li-menu hover-bold">
              <a
                href=""
                className="font-bold link-style"
                style={{ color: "#305A61" }}
              >
                Home
              </a>
            </li>
            <li className="li-menu hover-bold">
              <a href="" className="font-bold" style={{ color: "#1F1C17" }}>
                Hotel
              </a>
            </li>
            <li className="li-menu hover-bold">
              <a href="" className="font-bold" style={{ color: "#1F1C17" }}>
                Attractions
              </a>
            </li>
            <li className="li-menu hover-bold none-t">
              <a href="" className="font-bold" style={{ color: "#1F1C17" }}>
                Gift Voucher
              </a>
            </li>
          </ul>
        </nav>
        <div className="background-img ">
          <div className="text-bg  text-center pt-60">
            <h1 className="text-white  text-4xl  pb-3 font-bold">
              WELCOME TO TREK BOOKING
            </h1>
            <p className="text-white  text-2xl pb-3">
              Lorem ipsum dolor sit amet consectetur. Eget pellentesque congue
              eget amet vel <br></br> quam molestie bibendum.
            </p>
            <div className="intro flex justify-center pb-3">
              <div className="seure flex">
                <img className="" src="/public/image/check.png" alt="" />
                <p className="text-white font-bold ml-2 mb-1 font1rem">
                  Secure payment
                </p>
              </div>
              <div className="seure flex mx-3">
                <img className="" src="line.png" alt="" />
              </div>
              <div className="seure flex">
                <img className="" src="clock.png" alt="" />
                <p className="text-white font-bold ml-2 mb-1  font1rem">
                  Quick support
                </p>
              </div>
            </div>
            <div className="   justify-center input-search">
              <div className="input-map flex justify-center mb-2">
                <img className="imgmap mg-16" src="map.png" alt="" />
                <input
                  className="input-first"
                  type="text"
                  placeholder="City, destination or hotel..."
                />
              </div>
              <div className="input-map1 flex justify-center mb-2">
                <img className="imgmap" src="calendar.png" alt="" />
                <input
                  className="input-first-checkin"
                  type="text"
                  placeholder="Check-in-out Dates"
                />
              </div>
              <div className="input-map1 flex justify-center mb-2">
                <img className="imgmap" src="userplus.png" alt="" />
                <input
                  className="input-first-checkin"
                  type="text"
                  placeholder="Guests and Rooms"
                />
              </div>
              <div className="img-search cursor-pointer flex justify-center">
                <img src="search1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
            {/* ------------------------------------------------------------------------------------------ */}

            <div
        className=" w-full bg-auto bg-no-repeat bg-center flex justify-center"
        style={{
          background: "url(/image/bg_city_hall.png)",
          backgroundSize: "cover",
          height: "957px",
          position: "relative",
        }}
      >
        <div
          style={{
            
          }}
        ></div>
        <div
          className="w-3/4 h text-center grid content-center"
          style={{ height: "957px" }}
        >
          <p className="text-white font-bold text-4xl">
            Lorem ipsum dolor sit amet consectetur. Donec lectus consequat
            posuere eleifend orci platea.
          </p>
        </div>
      </div>

      {/* ------------------------------------------------------------------------------------------ */}
      <div className="container mt-20">
        <div className="text-center">
          <p className="font-bold text-4xl text-black">
            Enhance your trip the way you like it
          </p>
        </div>
        <div className="w-3/5 text-center m-auto">
          <p className="text-base font-normal">
            Lorem ipsum dolor sit amet consectetur. Pellentesque vulputate
            suspendisse sapien suscipit interdum purus malesuada tellus mauris.
            Turpis libero congue viverra faucibus pulvinar odio purus
            consectetur. Potenti mollis non odio suspendisse turpis egestas sit.
            Sit nisi dictum orci nulla risus platea suscipit.
          </p>
        </div>

        <div className="row pt-5">
          <div className="col-md-4  grid items-center justify-items-center justify-center card1">
            <Image
              src={"/image/boat1.png"}
              className="card1"
              width={410}
              height={550}
              alt="thuyen"
            ></Image>
            <div className="mt-3">
              <p className="text-lg font-bold">Tours and Attraction</p>
            </div>
          </div>
          <div className="col-md-4  grid items-center justify-items-center justify-center card1">
            <Image
              src={"/image/floatingHomeStay.png"}
              className="card1"
              width={410}
              height={550}
              alt="nha tren song"
            ></Image>
            <div className="mt-3">
              <p className="text-lg font-bold">Fun Activities</p>
            </div>
          </div>
          <div className="col-md-4 grid items-center justify-items-center justify-center card1">
            <Image
              src={"/image/tuktuk.png"}
              className="card1"
              width={410}
              height={550}
              alt="xe tuk tuk"
            ></Image>
            <div className="mt-3">
              <p className="text-lg font-bold">Travel Insurance</p>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------------------------------ */}
      <div className="container my-24">
        <div className="mb-5">
          <p className="font-bold text-4xl">Why book with Trek Booking ?</p>
        </div>

        <div className="w-full row">
          <div className="col-md-4 h-full ">
            <div className="h-full rounded-20">
              <p className="title-whatbook pl-3 mt-3 text-lg">
                Lorem ipsum dolor sit
              </p>
              <div className="pl-3 text-base pb-4">
                Lorem ipsum dolor sit amet consectetur. Pellentesque vulputate
                suspendisse
              </div>
            </div>
          </div>
          <div className="col-md-4  h-full ">
            <div className="h-full rounded-20">
              <p className="title-whatbook pl-3 mt-3 text-lg">
                Lorem ipsum dolor sit
              </p>
              <div className="pl-3 text-base pb-4">
                Lorem ipsum dolor sit amet consectetur. Pellentesque vulputate
                suspendisse
              </div>
            </div>
          </div>
          <div className="col-md-4  h-full ">
            <div className="h-full rounded-20">
              <p className="title-whatbook pl-3 mt-3 text-lg">
                Lorem ipsum dolor sit
              </p>
              <div className="pl-3 text-base pb-4">
                Lorem ipsum dolor sit amet consectetur. Pellentesque vulputate
                suspendisse
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------------------------------------------ */}

      <form action="">
        <div
          className=" w-full bg-auto bg-no-repeat bg-center"
          style={{ background: "url(/image/question.png)",backgroundSize: "cover", height: "376px" }}
        >
          <div className="container text-center">
            <div className="pt-5">
              <p className="font-bold text-2xl text-white">
                DO YOU HAVE ANY QUESTION ?
              </p>
            </div>
            <div className="mt-4">
              <input
                className="h-10 pr-52 pl-3 rounded-xl placeholder-gray-500 border"
                placeholder="Name"
                type="text"
              />
            </div>
            <div className="mt-4">
              <input
                className="h-10 pr-52 pl-3 rounded-xl placeholder-gray-500 border"
                placeholder="Email"
                type="text"
              />
            </div>
            <div className="mt-4">
              <input
                className="h-10 pr-52 pl-3 rounded-xl placeholder-gray-500 border"
                placeholder="Message"
                type="text"
              />
            </div>
            <div className="mt-3 ml-24">
              <button
                type="submit"
                className="w-28 h-10 rounded-xl text-white text-base cursor-pointer bg-sky-500 hover:bg-sky-700"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    
    </>
  );
};

export default Homepage;
