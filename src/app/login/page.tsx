'use client'
import React, { useState } from 'react'
import Link from '../../../node_modules/next/link';
import "../../../public/css/authen.css";

const page = () => {
    const [isPassword, setIsPassword] = useState(true);
    const togglePasswordVisibility = () => {
        setIsPassword(prevState => !prevState);
      };
  return (
    <div>
      <div className="image-bk">
       <div className="login">
            <div className="text-login">
                <h3 className='text-center font-bold color-black'>Log In</h3>
            </div>
            <div className="text-input relative">
                <p className='color-black m-0 pt-2 pb-1'>Enter your email or phone number</p>
                <input className='input-text' type="text" placeholder='Email/ Phone number'/>

                <p className='m-0 pt-4 pb-1'>Enter your password</p>
                <input className='input-text' type={isPassword ? "password" : "text"} placeholder='Password'/>
                 <img src="/image/hide.png" className='inout-hide cursor-pointer' onClick={togglePasswordVisibility} alt="" />
              <div className="continue text-center mt-4">
              <button className='text-xl button-text' style={{color:"#CED1D2"}}>Continue</button>
              </div>
               <div className="nav-sign flex justify-between">
                <Link className='pt-2 text-right text-base cursor-pointer text-decoration' style={{color:"#CED1D2"}} href="signup">You dont have a account?</Link>
               <p className='pt-2 text-right text-base cursor-pointer' style={{color:"#CED1D2"}}>Forget your password</p>
               </div>
            </div>
            <div className="policy">
                <div className="input flex">
                    <input className='input-check' type="checkbox" />
                    <p className='text-center mb-0'>I have read and accept the Terms of Service & Privacy Policy</p>
                </div>
            </div>
            <div className="login-with flex justify-center items-center mt-2 pb-2">
                <img className='h-1 w-1/3' src="/image/login-gach.png" alt="" />
                <p className='mb-0 pd-or'>or log in with</p>
                <img className='h-1 w-1/3' src="/image/login-gach.png" alt="" />
            </div>
            <div className="difflogin flex justify-center pb-9">
                <div className="facebook flex items-center cursor-pointer mr-3">
                    <img className='w-3 h-3 mr-3' src="/image/facebook.png" alt="" />
                    <p className='mb-0'>Facebook</p>
                </div>
                <div className="google flex items-center cursor-pointer ml-3">
                <img className='w-3 h-3 mr-3' src="/image/google.png" alt="" />
                    <p className='mb-0 '>Google</p>
                </div>
            </div>
               </div>
        </div>  
    </div>
  )
}

export default page