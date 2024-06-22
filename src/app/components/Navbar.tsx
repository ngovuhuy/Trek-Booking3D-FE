/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import Button from "../../../node_modules/react-bootstrap/esm/Button";
import Image from "next/image";
import { CiMenuBurger } from "react-icons/ci";
import Link from "../../../node_modules/next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "../../../node_modules/next/navigation";
import authenticateService from "../services/authenticateService";
import { toast } from "react-toastify";


interface NavbarProps {
  title: string;
}


const Navbar:  React.FC<NavbarProps>  = ({ title }) => {

  const [user, setUser] = useState<IUser | null>(null);
const router = useRouter();

useEffect(() => {
  const storedUser = localStorage.getItem("user");
  if (storedUser) {
    setUser(JSON.parse(storedUser));
  }
}, []);


const handleLogout = async () => {
  await authenticateService.logOut();
  toast.success("Logout Success..");
  setUser(null);
  router.push("/login_client");
};
  const [showSubMenu, setShowSubMenu] = useState(false);
  const handleClick = () => {
    // Đảo ngược trạng thái của submenu
    setShowSubMenu(!showSubMenu);
  };
  const pathname = usePathname();
  let currentTitle = title;
  if (pathname === "/trekbooking") {
    currentTitle = "Hotel";
  } else if (pathname === "/supplier/tour") {
    currentTitle = "Tour";
  }
  return (
    <header className="bg-background">
      <div className="container pt-4 ">
        <div className="nav row pb-3">
          <div className="col-5 text-center h-0">
            <Link
              href="/"
              className="text-blackish no-underline text-2xl lg:mr-44 font-bold flex justify-center image-fix-link"
            >
              <img className="fix-logo" src="/image/logo.png" alt="" />
            </Link>
          </div>
          <div className="col-7 hidden lg:block ">
            <ul className="flex no-underline justify-around">
              <li className="flex hover-bold cursor-pointer">
                <img
                  style={{ width: "30px", height: "25px" }}
                  src="/image/globe.png"
                  alt=""
                  className="pr-2 "
                />
                <a className="no-underline text-accent font-bold" href="">
                  EN/VI
                </a>
              </li>
              <li className="flex hover-bold cursor-pointer">
                <Link className="flex text-decoration-none"  href="/trekbooking/booking_cart">
                <img
                  style={{ width: "30px", height: "25px" }}
                  src="/image/cart.png"
                  alt=""
                  className="pr-2"
                />
                <span
                 
                  className="no-underline text-accent font-bold"
                >
                  Cart(1)
                </span>
                </Link>
               
              </li>
              <li className="flex hover-bold cursor-pointer">
                <img
                  style={{ width: "30px", height: "25px" }}
                  src="/image/bell.png"
                  alt=""
                  className="pr-2"
                />
                <Link
                  className="no-underline text-accent font-bold"
                  href="/confirmregister"
                >
                  Post your hotel
                </Link>
              </li>
              <li className="flex hover-bold cursor-pointer dropdown relative z-10">
          <div className="flex relative z-2 color-mess">
          {user ? (
                  <div className="flex">
                    <div className="flex relative z-2 color-mess">
                      <img
                        style={{ height: "25px" }}
                        src="/image/usersupplier.png"
                        alt=""
                        className="pr-2"
                      />
                      <Link
                        className="no-underline text-accent font-bold"
                        href="#"
                      >
                        {`${user.userName}`}
                      </Link>
                    </div>

                    <div className="backgourd-li  text-center">
               <Link
                  className="no-underline text-accent font-bold block mt-3 mb-3 hover-nav-sub"
                  href="/trekbooking/profile"
                >
                 Manager profile 
                </Link>
                <Link
                  className="no-underline text-accent font-bold block mb-3 hover-nav-sub"
                  href="signup_client"
                >
                 Payment Wallet 
                </Link>
                <Link
                  className="no-underline text-accent font-bold block mb-3 hover-nav-sub"
                  href="signup_client"
                >
                 History 
                </Link>
                <Link
                  className="no-underline text-accent font-bold block mb-3 hover-nav-sub"
                  href="signup_client"
                 onClick={handleLogout}>
                 Logout 
                </Link>
               </div>
                  </div>
                  
                ) : (
                  <div className="flex ">
                    <img
                      style={{ width: "30px", height: "25px" }}
                      src="/image/users.png"
                      alt=""
                      className="pr-2"
                    />
                    <Link
                      className="no-underline text-accent font-bold"
                      href="/login_client"
                    >
                      Log In /
                    </Link>
                    <Link
                      className="no-underline text-accent font-bold"
                      href="signup_client"
                    >
                      Register
                    </Link>
                  </div>
                )}
                
          </div>
                
              </li>
           
           
         
              
            </ul>
          </div>
          <div
            className="col-7  lg:hidden cursor-pointer"
            onClick={handleClick}
          >
            <CiMenuBurger style={{ float: "right", fontSize: "22px" }} />
          </div>
          {showSubMenu && (
            <div className="sub-menu-mobi flex justify-center pt-4">
              <ul className="lg:hidden">
                <li className="flex pb-4 hover-bold">
                  <img src="/image/cart.png" alt="" className="pr-2" />
                  <a
                    href=""
                    className="font-bold text-decoration-none text-accent"
                  >
                    Cart
                  </a>
                </li>
                <li className="flex pb-4 hover-bold">
                  <img src="/image/bell.png" alt="" className="pr-2" />
                  <a
                    href=""
                    className="font-bold text-decoration-none text-accent"
                  >
                    Post your hotel
                  </a>
                </li>
                <li className="flex pb-4 hover-bold">
                  <img src="/image/users.png" alt="" className="pr-2" />
                  <a
                    href=""
                    className="font-bold text-decoration-none text-accent"
                  >
                    Log In/ Sign up
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>


        <nav className="to-white pt-2 pb-2">
          <ul className="flex ul-menu">
            <li className="li-menu hover-bold">
              <Link
                href="/"
                className={`font-bold text-decoration-none link-text ${pathname === "/trekbooking" ? "link-style" : ""}`}
                
              >
                Home
              </Link>
            </li>
            <li className="li-menu hover-bold">
            <Link
                href="/trekbooking/list_hotel"
                className={`font-bold text-decoration-none link-text ${pathname === "/trekbooking/list_r hotel"  || pathname === "/trekbooking/search" ? "link-style" : ""}`}
                
              >
                Hotel
              </Link>
            </li>
            <li className="li-menu hover-bold">
              <Link
                href="/trekbooking/tour"
                className={`font-bold text-decoration-none link-text ${pathname === "/trekbooking/tour" ? "link-style" : ""}`}
              >
                Attractions
              </Link>
            </li>
            <li className="li-menu hover-bold none-t">
              <Link
                href="/"
                className={`font-bold text-decoration-none link-text ${pathname === "/trekbooking/voucher" ? "link-style" : ""}`}
              >
            Gift Voucher
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
