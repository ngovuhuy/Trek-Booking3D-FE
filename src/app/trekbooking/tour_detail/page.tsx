import '../../../../public/css/authen.css'
const cart_tour = () => {
    return (
      <div >
        
        <div className="backgr-home">
        <nav className="to-white pt-2 pb-2">
          <ul className="flex ul-menu">
            <li className="li-menu hover-bold">
              <a
                href=""
                className="font-bold text-decoration-none link-style "
                style={{ color: "#305A61" }}
              >
                Home
              </a>
            </li>
            <li className="li-menu hover-bold">
              <a href="" className="font-bold text-decoration-none" style={{ color: "#1F1C17" }}>
                Hotel
              </a>
            </li>
            <li className="li-menu hover-bold">
              <a href="" className="font-bold text-decoration-none" style={{ color: "#1F1C17" }}>
                Attractions
              </a>
            </li>
            <li className="li-menu hover-bold none-t">
              <a href="" className="font-bold text-decoration-none" style={{ color: "#1F1C17" }}>
                Gift Voucher
              </a>
            </li>
          </ul>
        </nav>
          <div className="container pb-4">
            <p className="color-primary font-semibold pb-4">Home / Attractions / Phu Quoc / Phu Quoc coral diving tour - Explore colorful islands</p>
            <div className="border-tour-detail  ">
              <h3>Phu Quoc coral diving tour - Explore colorful islands</h3>
              <div className="time-location flex pb-2">
                <div className="time-fe flex">
                  <img className="w-5 h-5" src="/image/calendar.png" alt="" />
                  <p className="ml-1">7:00 - 16:00</p>
                </div>
                <div className="location-fe flex ml-4">
                <img className="w-5 h-5" src="/image/map.png" alt="" />
                  <p className="ml-1">Phu Quoc</p>
                </div>
              </div>
              <div className="row pb-6">
                <div className="col-lg-6 pb-3">
                  <img src="/image/tourdetail1.png" alt="" />
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-12 pb-3">
                    <img src="/image/tourdetail2.png" alt="" />
                    </div>
                    <div className="col-12 flex  pb-3">
                    <img className='w-1/2' src="/image/tourdetail3.png" alt="" />
                    <img className='w-1/2' src="/image/tourdetail4.png" alt="" />
                    </div>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default cart_tour;
  