import Image from "next/image";

const listHotels = () => {
  return (
    <>
      {/*---------------------------------- */}
      <div className="container mb-20">
        <div className="text-center">
          <p className="font-bold text-4xl">Hotels near home</p>
        </div>
        <div className="flex justify-center items-center">
          <div className="mr-5">
            <a
              className="no-underline px-4 py-1 border text-base font-medium listA"
              href="#"
              style={{ borderRadius: "10px" }}
            >
              Ho Chi Minh
            </a>
          </div>
          <div className="mr-5">
            <a
              className="no-underline px-4 py-1 border text-base font-medium listA"
              href="#"
              style={{ borderRadius: "10px" }}
            >
              Ha Noi
            </a>
          </div>
          <div className="mr-5">
            <a
              className="no-underline px-4 py-1 border text-base font-medium listA"
              href="#"
              style={{ borderRadius: "10px" }}
            >
              Ha Long
            </a>
          </div>
          <div className="mr-5">
            <a
              className="no-underline px-4 py-1 border text-base font-medium listA"
              href="#"
              style={{ borderRadius: "10px" }}
            >
              Da Lat
            </a>
          </div>
          <div className="mr-5">
            <a
              className="no-underline px-4 py-1 border text-base font-medium listA"
              href="#"
              style={{ borderRadius: "10px" }}
            >
              Phu Quoc
            </a>
          </div>
        </div>
        <div className="mt-16">
          <div className="row">
            <div
              className="col-md-3  "
            >
                <div className=" border grid justify-items-center pb-8 card1" style={{ borderRadius: "20px", boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)" }}>
                    <img src="/image/palaceHotel.jpg" alt="hihi" className="p-3 h-285" style={{border: "1px", borderRadius: "36px"}}/>
                    <p className="text-base font-semibold">Palace Hotel Saigon</p> 
                    <p className="text-sm font-normal gray">9.0 Excellent _ 500 reviews</p>  
                    <p className="text-base font-semibold">From $20</p>
                    <button className="w-24 bookBtn">Book now</button>
                </div>
                 
                
              
            </div>
            <div
              className="col-md-3  "
            >
                <div className=" border grid justify-items-center pb-8 card1" style={{ borderRadius: "20px", boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)" }}>
                    <img src="/image/palaceHotel.jpg" alt="hihi" className="p-3 h-285" style={{border: "1px", borderRadius: "36px"}}/>
                    <p className="text-base font-semibold">Palace Hotel Saigon</p> 
                    <p className="text-sm font-normal gray">9.0 Excellent _ 500 reviews</p>  
                    <p className="text-base font-semibold">From $20</p>
                    <button className="w-24 bookBtn">Book now</button>
                </div>
                    
                
              
            </div>
            <div
              className="col-md-3  "
            >
                <div className=" border grid justify-items-center pb-8 card1" style={{ borderRadius: "20px", boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)" }}>
                    <img src="/image/palaceHotel.jpg" alt="hihi" className="p-3 h-285" style={{border: "1px", borderRadius: "36px"}}/>
                    <p className="text-base font-semibold">Palace Hotel Saigon</p> 
                    <p className="text-sm font-normal gray">9.0 Excellent _ 500 reviews</p>  
                    <p className="text-base font-semibold">From $20</p>
                    <button className="w-24 bookBtn">Book now</button>
                </div>
                    
                
              
            </div>
            <div
              className="col-md-3  "
            >
                <div className=" border grid justify-items-center pb-8 card1" style={{ borderRadius: "20px", boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)" }}>
                    <img src="/image/palaceHotel.jpg" alt="hihi" className="p-3 h-285" style={{border: "1px", borderRadius: "36px"}}/>
                    <p className="text-base font-semibold">Palace Hotel Saigon</p> 
                    <p className="text-sm font-normal gray">9.0 Excellent _ 500 reviews</p>  
                    <p className="text-base font-semibold">From $20</p>
                    <button className="w-24 bookBtn">Book now</button>
                </div>
                    
                
              
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};
export default listHotels;
