const bookingInfor = () => {
  return (
    <>
      <div className="container py-8">
        <div>
          <a
            className="no-underline flex items-center font-medium text-xl"
            style={{ color: "#305A61" }}
            href="#"
          >
            <img src="/image/chevron-down.png" alt="" /> Back
          </a>
        </div>
        <div className="row pt-8">
          <div className="col-md-6">
            <div
              className="border"
              style={{ borderRadius: "10px", boxShadow: "0 6px 4px 0 #7F7F7F" }}
            >
              <div className="w-4/5 m-auto">
                <div className="text-center pt-5">
                  <span
                    className=" text-xl font-semibold"
                    style={{ color: "#305A61" }}
                  >
                    Guest Information
                  </span>
                </div>
                <div className="pt-3">
                  <p className="font-semibold">Full name</p>
                  <input
                    type="text"
                    className="border w-full py-2"
                    style={{ borderRadius: "10px", borderColor: "#D2D2D2" }}
                  />
                </div>
                <div className="pt-3">
                  <p className="font-semibold">Email</p>
                  <input
                    type="text"
                    className="border w-full py-2"
                    style={{ borderRadius: "10px", borderColor: "#D2D2D2" }}
                  />
                </div>
                <div className="pt-3">
                  <p className="font-semibold">Phone number</p>
                  <input
                    type="text"
                    className="border w-full py-2"
                    style={{ borderRadius: "10px", borderColor: "#D2D2D2" }}
                  />
                </div>
                <div className="pt-3">
                  <p className="font-semibold">
                    Special requirements{" "}
                    <span className="font-medium" style={{ color: "#8E8D8A" }}>
                      (optional)
                    </span>
                  </p>
                  <input
                    type="text"
                    className="border w-full py-2"
                    style={{ borderRadius: "10px", borderColor: "#D2D2D2" }}
                  />
                </div>
                <div className="flex justify-end pt-3 pb-4">
                  <button
                    className=" text-white font-medium py-2 px-6 text-lg border"
                    style={{ backgroundColor: "#305A61", borderRadius: "20px" }}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="border"
              style={{ borderRadius: "10px", boxShadow: "0 6px 4px 0 #7F7F7F" }}
            >
              <div className="w-3/5 m-auto">
                <div className="text-center pt-5">
                  <span
                    className=" text-xl font-semibold"
                    style={{ color: "#305A61" }}
                  >
                    Price Details
                  </span>
                </div>
                <div className="pt-4">
                  <div className="flex justify-between">
                    <p className="font-semibold text-lg">1 Room x 1 Night:</p>
                    <p className="text-2xl">35US$</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-semibold text-lg">VAT:</p>
                    <p className="text-2xl">
                      <span className="text-2xl">-</span> 2US$
                    </p>
                  </div>
                  <div className="flex justify-between border-solid border-b-2 border-black">
                    <p className="font-semibold text-lg">Discount</p>
                    <p className="text-2xl">
                      <span className="text-2xl">-</span> 5US$
                    </p>
                  </div>
                  <div className="flex justify-between pt-2">
                    <p className="font-semibold text-lg">Total</p>
                    <p className="text-2xl font-semibold">28US$</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="border mt-7"
              style={{ borderRadius: "10px", boxShadow: "0 6px 4px 0 #7F7F7F" }}
            >
              <div className="w-11/12 m-auto">
                <div className="pt-5">
                  <span
                    className=" text-xl font-semibold"
                    style={{ color: "#305A61" }}
                  >
                    Discount vouchers:
                  </span>
                </div>
                <div className="pt-4">
                  <span className="text-lg"><span className="text-lg font-semibold">[SPDHIS]</span> Lorem ipsum dolor sit amet consectetur. Diam aliquam massa hendrerit consectetur volutpat. Sem quam sed elementum ut.</span>
                </div>
                <div className="flex justify-end pt-3 pb-2">
                <button
                    className=" text-white font-medium py-1 px-4 text-lg border"
                    style={{ backgroundColor: "#305A61", borderRadius: "20px" }}
                  >
                    Applied
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default bookingInfor;
