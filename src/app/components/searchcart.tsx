'use client'
import { countries, cities } from "country-cities";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";


type FormControlElement =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement;

const handleEvent = <T extends HTMLElement>(
  handler: (event: React.ChangeEvent<T>) => void
) => {
  return (event: React.ChangeEvent<FormControlElement>) => {
    handler(event as unknown as React.ChangeEvent<T>);
  };
};

const Searchcart = () => {
  const [countriesList, setCountriesList] = useState<any[]>([]);
  const [citiesList, setCitiesList] = useState<any[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [checkInDate, setCheckInDate] = useState<string>("");
  const [checkOutDate, setCheckOutDate] = useState<string>("");

  useEffect(() => {
    const loadCountries = async () => {
      const allCountries = await countries.all();
      setCountriesList(allCountries);
    };
    loadCountries();
  }, []);

  const handleCountryChange = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const countryCode = event.target.value;
    console.log("Fetched country: ", countryCode);
    setSelectedCountry(countryCode);
    const city = await cities.getByCountry(countryCode);
    console.log("Fetched cities: ", city);
    setCitiesList(city || []);
    setSelectedCity("");
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const cityCode = event.target.value;
    setSelectedCity(cityCode);
  };

  const handleCheckInDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckInDate(event.target.value);
  };

  const handleCheckOutDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckOutDate(event.target.value);
  };

  return (
    <div className="background-img ">
  <video  className="backgroundVideo" id="background-video relative" src="/image/introduce.mp4" loop autoPlay muted>
  </video>
  <div className="flex  search-home-fill ">
  <div className="text-bg text-center">
        <h1 className="lg:text-4xl md:text-xl text-xs lg:pb-3 max-[768px]:pb-1  font-bold color-home-fd max-[575px]:hidden">
          WELCOME TO TREK BOOKING
        </h1>
        <p className="color-home-fd font-bold lg:text-2xl md:text-xl text-xs lg:pb-3 max-[768px]:pb-1 max-[768px]:mb-0 max-[575px]:hidden">
        Explore More, Stress Less: Book Your Dream Tour and Hotel Effortlessly  with Us Today <br></br> for Unforgettable Memories.
        </p>
        <div className="intro flex justify-center lg:pb-3 max-[768px]:pb-1 max-[575px]:hidden">
          <div className="seure flex">
            <img  className=" max-[400px]:w-8"   style={{ width: "30px" }} src="/image/check.png" alt=""  />
            <p className="color-home-fd lg:text-2xl md:text-xl text-xs font-bold ml-2 mb-1 max-[768px]:mt-2">
              Secure payment
            </p>
          </div>
          <div className=" flex mx-3">
            <img className="" src="/image/line.png" alt="" />
          </div>
          <div className=" flex">
            <img className="max-[400px]:w-8"   style={{ width: "30px" }} src="/image/clock.png" alt="" />
            <p className="max-[768px]:mt-2 color-home-fd lg:text-2xl md:text-xl text-xs font-bold ml-2 mb-1">
              Quick support
            </p>
          </div>
        </div>
        <div className="search-home ">
          <div className="search-main lg:p-4  md:p-4  max-[768px]:p-2   relative w-full m-auto">
            <Form>
           <div className="row">
           <Form.Group controlId="countrySelect" className="col-6 text-left">
                <Form.Label className='font-semibold lg:text-lg text-sm cam ml-1 '>Country</Form.Label>
                <Form.Control className='py-1 px-1' as="select" value={selectedCountry} onChange={handleEvent(handleCountryChange)}>
                  <option value="">Select Country</option>
                  {countriesList.map((country) => (
                    <option key={country.isoCode} value={country.isoCode}>
                      {country.name}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="citySelect" className="col-6 text-left">
                <Form.Label className='font-semibold lg:text-lg text-sm cam ml-1  '>City</Form.Label>
                <Form.Control className='py-1 px-1' as="select" value={selectedCity} onChange={handleEvent(handleCityChange)} disabled={!selectedCountry}>
                  <option value="">Select City</option>
                  {citiesList.map((city) => (
                    <option key={city.code} value={city.code}>
                      {city.name}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
           </div>
             <div className="row">
             <Form.Group controlId="checkInDate" className="col-6 text-left">
                <Form.Label className='font-semibold lg:text-lg text-sm cam ml-1  pt-2 ' >Check-in Date</Form.Label>
                <Form.Control className='py-1 px-1' type="date" value={checkInDate} onChange={handleCheckInDateChange} />
              </Form.Group>
              <Form.Group controlId="checkOutDate" className="col-6 text-left">
                <Form.Label className='font-semibold lg:text-lg text-sm cam ml-1  pt-2 '>Check-out Date</Form.Label>
                <Form.Control className='py-1 px-1'  type="date" value={checkOutDate} onChange={handleCheckOutDateChange} />
              </Form.Group>
             </div>
             <div className="flex justify-end  max-[768px]:mt-0">
             <a
              
                
              href={`/trekbooking/search?checkInDate=${checkInDate}&checkOutDate=${checkOutDate}&city=${selectedCity}`}
              className={`button-add button-add1 mt-2 text-decoration-none ${!(selectedCity && checkInDate && checkOutDate) ? 'disabled' : ''}`}
              onClick={e => !(selectedCity && checkInDate && checkOutDate) && e.preventDefault()}
            >
              Search
            </a>
             </div>
            </Form>
          </div>
        </div>
      </div>
  </div>

    </div>
  );
};

export default Searchcart;
