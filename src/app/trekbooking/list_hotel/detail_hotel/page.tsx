const detail_hotel = () => {
  return (
    <>
      <div className="container">
        <span className="font-semibold text-xl" style={{color: "#305A61"}}>Home <span>/</span> <span>Hotels</span> <span>/</span> <span>Cereja Hotel & Resort Dalat</span></span>
      </div>
      <div
        className="container border my-20"
        style={{
          // height: "790px",
          borderRadius: "20px",
          boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div className="py-8 px-3">
        <div className="row">
          <div className="col-md-8">
            <p className="font-semibold text-3xl">
              Cereja Hotel & Resort Dalat
            </p>
            <div className="flex items-center justify-between w-2/5">
              <div>
                <span
                  className="p-0 text-base font-normal"
                  style={{ color: "#305A61" }}
                >
                  Hotels
                </span>
              </div>
              <div className="flex h-3">
                <img className="pr-1" src="/image/start.png" alt="" />
                <img className="pr-1" src="/image/start.png" alt="" />
                <img className="pr-1" src="/image/start.png" alt="" />
                <img className="pr-1" src="/image/start.png" alt="" />
                <img className="pr-1" src="/image/start.png" alt="" />
              </div>
              <div>
                <img src="/image/map-pin.png" alt="" />
              </div>
              <div>
                <span className="text-base font-normal">Ward 3, Da Lat</span>
              </div>
            </div>
            <p className="text-base font-normal">
              Located in the area of the DaLat Pine Hill , by the romantic lake
              Tuyen Lam
            </p>
          </div>

          <div className="col-md-4 grid justify-items-center content-center"  style={{backgroundColor: "#F5F5F5"}}>
            <div>
              <span>Price/room/night starts from</span>
            </div>
            <span className="font-bold text-2xl">35US$</span>
            <a
              className="no-underline px-4 py-1 border text-base font-medium text-white"
              style={{ borderRadius: "12px", backgroundColor: "#305A61" }}
              href=""
            >
              Select room
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img className="w-full" src="/image/white_house.png" alt="" />
          </div>
          <div className="col-md-6 grid content-between">
            <div>
              <img className="w-full" src="/image/double_bed.png" alt="" />
            </div>
            <div className="row">
              <div className="col-md-6">
                <img className="w-full" src="/image/chill_chair.png" alt="" />
              </div>
              <div className="col-md-6">
                <img className="w-full" src="/image/diner.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-8">
            <a
              className="no-underline px-4 py-1 border text-base font-medium text-white"
              style={{ borderRadius: "10px", backgroundColor: "#305A61" }}
              href="#"
            >
              Overview
            </a>
            <p className="font-bold pt-3">About Accommodation</p>
            <p>Not only located within easy reach of various places of interests for your adventure, but staying at Cereja Hotel & Resort Dalat will also give you a pleasant stay. Cereja Hotel & Resort Dalat is highly recommended for backpackers who want to get an affordable stay yet comfortable at the same time. This resort is the perfect choice for couples seeking a romantic getaway or a honeymoon retreat. Enjoy the most memorable nights with your loved one by staying at Cereja Hotel & Resort Dalat. Read more</p>
          </div>

          <div className="col-md-4 grid justify-items-center content-center" style={{backgroundColor: "#F5F5F5"}}>
            <div>
              <span className="font-bold text-xl">Reviews and ratings</span>
            </div>
            <div className="flex items-center">
               <span className="font-bold text-xl pr-2">4.9</span>
               <div className="flex h-3">
                <img className="pr-1" src="/image/start.png" alt="" />
                <img className="pr-1" src="/image/start.png" alt="" />
                <img className="pr-1" src="/image/start.png" alt="" />
                <img className="pr-1" src="/image/start.png" alt="" />
                <img className="pr-1" src="/image/start.png" alt="" />
              </div>
            </div>
            <span>Based on 1k reviews</span>
          </div>
        </div>
        </div>
        
      </div>
    </>
  );
};
export default detail_hotel;
