import React from 'react'

const Homepage = () => {
  return (
    <div>
        <nav className='to-white pt-2 pb-2'>
            <ul className='flex ul-menu'>
            <li className='li-menu hover-bold'><a href="" className='font-bold link-style' style={{color:"#305A61"}}>Home</a></li>
            <li className='li-menu hover-bold'><a href="" className='font-bold' style={{color:"#1F1C17"}}>Hotel</a></li>
            <li className='li-menu hover-bold'><a href="" className='font-bold' style={{color:"#1F1C17"}}>Attractions</a></li>
            <li className='li-menu hover-bold none-t'><a href="" className='font-bold' style={{color:"#1F1C17"}}>Gift Voucher</a></li>
            </ul>
        </nav>
        <div className="background-img " >
              <div className="text-bg  text-center pt-60" >
                <h1 className='text-white  text-4xl  pb-3 font-bold' >WELCOME TO TREK BOOKING</h1>
                <p className='text-white  text-2xl pb-3'>Lorem ipsum dolor sit amet consectetur. Eget pellentesque congue eget amet vel <br></br> quam molestie bibendum.</p>
                <div className="intro flex justify-center pb-3">
                  <div className="seure flex">
                    <img className='' src="/public/image/check.png" alt="" />
                    <p className='text-white font-bold ml-2 mb-1 font1rem'>Secure payment</p>
                  </div>
                  <div className="seure flex mx-3">
                    <img className='' src="line.png" alt="" />
                  </div>
                  <div className="seure flex">
                    <img className='' src="clock.png" alt="" />
                    <p className='text-white font-bold ml-2 mb-1  font1rem'>Quick support</p>
                  </div>
                </div>
                <div className="   justify-center input-search">
                  <div className="input-map flex justify-center mb-2">
                  <img className='imgmap mg-16' src="map.png" alt="" />
                  <input className='input-first' type="text" placeholder='City, destination or hotel...' />
                  </div>
                  <div className="input-map1 flex justify-center mb-2">
                  <img className='imgmap' src="calendar.png" alt="" />
                  <input className='input-first-checkin' type="text" placeholder='Check-in-out Dates' />
                  </div>
                  <div className="input-map1 flex justify-center mb-2">
                  <img className='imgmap' src="userplus.png" alt="" />
<input className='input-first-checkin' type="text" placeholder='Guests and Rooms' />
                  
                  </div>
                  <div className="img-search cursor-pointer flex justify-center">
                     <img src="search1.png" alt="" />
                  </div>
                </div>
              </div>
        </div>
    </div>
  )
}

export default Homepage 
