import Image from 'next/image'
const Footer = () => {
  return (
    <>
      <footer className="bg-neutral-800">
        <div className="container grid content-center h-full py-8">
          <div className="w-full row">
            <div className=" grid justify-center col-md-4">
              <div>
                <p className="text-xl text-white font-bold">
                  ABOUT TREK BOOKING
                </p>
              </div>
              <div className="grid justify-center">
                <p className="text-base text-white ">
                  Lorem ipsum dolor sit amet
                </p>
              </div>
              <div className="grid justify-center">
                <p className="text-base text-white ">
                  Lorem ipsum dolor sit amet
                </p>
              </div>
              <div className="grid justify-center">
                <p className="text-base text-white ">
                  Lorem ipsum dolor sit amet
                </p>
              </div>
              <div className="grid justify-center">
                <p className="text-base text-white ">
                  Lorem ipsum dolor sit amet{" "}
                </p>
              </div>
              <div className="grid justify-center">
                <p className="text-base text-white ">
                  Lorem ipsum dolor sit amet{" "}
                </p>
              </div>
              <div className="grid justify-center">
                <p className="text-base text-white ">
                  Lorem ipsum dolor sit amet{" "}
                </p>
              </div>
            </div>
            <div className="  grid justify-center col-md-4">
              <div>
                <p className="text-xl text-white font-bold">
                  ABOUT TREK BOOKING
                </p>
              </div>
              <div className="grid justify-center">
                <p className="text-base text-white ">
                  Lorem ipsum dolor sit amet{" "}
                </p>
              </div>
              <div className="grid justify-center">
                <p className="text-base text-white ">
                  Lorem ipsum dolor sit amet{" "}
                </p>
              </div>
              <div className="grid justify-center">
                <p className="text-base text-white ">
                  Lorem ipsum dolor sit amet{" "}
                </p>
              </div>
              <div className="grid justify-center">
                <p className="text-base text-white ">
                  Lorem ipsum dolor sit amet{" "}
                </p>
              </div>
              <div className="grid justify-center">
                <p className="text-base text-white ">
                  Lorem ipsum dolor sit amet{" "}
                </p>
              </div>
              <div className="grid justify-center">
                <p className="text-base text-white ">
                  Lorem ipsum dolor sit amet{" "}
                </p>
              </div>
            </div>
            <div className=" grid justify-center col-md-4">
              <div>
                <p className="text-xl text-white font-bold">
                  ABOUT TREK BOOKING
                </p>
              </div>
              <div className="grid justify-center">
                <p className="text-base text-white ">
                  Lorem ipsum dolor sit amet{" "}
                </p>
              </div>
              <div className="grid justify-center">
                <p className="text-base text-white ">
                  Lorem ipsum dolor sit amet{" "}
                </p>
              </div>
              <div className="grid justify-center">
                <p className="text-base text-white ">
                  Lorem ipsum dolor sit amet{" "}
                </p>
              </div>
             <div className="">
                <Image src={"/image/bocongthuong.png"}
                width={180}
                height={67}
                alt=""></Image>
             </div>
            </div>
          </div>
        </div>
        <div className='w-full h-10 flex justify-center border-t'>
          <p className='text-white text-base pt-2'>Copyright © 2024 Trek Booking. All rights reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
