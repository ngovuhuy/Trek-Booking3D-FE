/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState, useCallback } from "react";
import "../../../../public/css/tour.css";
import { ITour } from "@/app/entities/tour";
import useSWR from "swr";
import tourService from "@/app/services/tourService";
import Link from "next/link";
import "../../../../public/css/styles.css";
import { Oval } from "react-loader-spinner"; // Import spinner

// Filter
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const fetchTourImages = async (
  tourList: ITour[],
  setTourImages: (images: { [key: number]: string }) => void
) => {
  const images = await Promise.all(
    tourList.map(async (tour: ITour) => {
      const image = await tourService.getTourImageByTourId(tour.tourId);
      if (image.length > 0) {
        return { tourId: tour.tourId, imageUrl: image[0].tourImageURL };
      } else {
        return { tourId: tour.tourId, imageUrl: "/image/tour.png" };
      }
    })
  );

  const imageMap = images.reduce<{ [key: number]: string }>(
    (acc, { tourId, imageUrl }) => {
      acc[tourId] = imageUrl;
      return acc;
    },
    {}
  );

  setTourImages(imageMap);
};

const removeVietnameseTones = (str: string) => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
};

const TourList = () => {
  const [tourImages, setTourImages] = useState<{ [key: number]: string }>({});
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState<number[]>([0, 5000]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const { data: tourList, error } = useSWR<ITour[]>("tourList", tourService.getTours);

  useEffect(() => {
    if (tourList) {
      fetchTourImages(tourList, setTourImages);
    }
  }, [tourList]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSliderChange = (value: number | number[]) => {
    if (Array.isArray(value)) {
      setPriceRange(value as [number, number]);
    }
  };

  const filteredTours = tourList ? tourList.filter(tour => {
    const normalizedAddress = removeVietnameseTones(tour.tourAddress.toLowerCase());
    const normalizedSearchTerm = removeVietnameseTones(searchTerm.toLowerCase());
    const matchesSearch = normalizedAddress.includes(normalizedSearchTerm);
    const matchesPrice = tour.tourPrice >= priceRange[0] && tour.tourPrice <= priceRange[1];
    return matchesSearch && matchesPrice;
  }) : [];

  const totalPages = Math.ceil(filteredTours.length / itemsPerPage);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const currentTours = filteredTours.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (!tourList) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Oval
          height={80}
          width={80}
          color="#305A61"
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4f9a94"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    );
  }

  if (error) {
    return <div>Error loading tours</div>;
  }

  return (
    <div>
      <div className="container pt-4">
        <div className="flex justify-between">
          <div className="font-semibold text-xl my-5" style={{ color: "#305A61" }}>
            <Link className="no-underline underline_hv" style={{ color: "#305A61" }} href="/">Home</Link>
            <span>/</span>
            <Link className="no-underline underline_hv" style={{ color: "#305A61" }} href="/trekbooking/tour">Attractions</Link>
          </div>
          <div className="input__container input__container--variant">
            <div className="shadow__input shadow__input--variant"></div>
            <input
              type="text"
              name="text"
              className="input__search input__search--variant"
              placeholder="Search by address..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-3 col-12">
            <div className="border-tour">
              <p className="color-black font-bold">Price Range</p>
              <Slider
                range
                min={0}
                max={5000}
                value={priceRange}
                onChange={handleSliderChange}
                trackStyle={[{ backgroundColor: '#305A61' }]}
                handleStyle={[{ borderColor: '#305A61' }, { borderColor: '#305A61' }]}
              />
              <div className="flex justify-between mt-2 pt-8">
                <span>Min: {priceRange[0]}$</span>
                <span>Max: {priceRange[1]}$</span>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-9 col-12 fix-768-tour">
            <div className="row">
              {currentTours.length > 0 ? (
                currentTours.map((item, index) => {
                  const tourTimeDate = new Date(item.tourTime);
                  const formattedTourTime = tourTimeDate.toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  );
                  const newPrice = item.tourPrice - (item.tourPrice * item.tourDiscount) / 100;
                  return (
                    <div key={index} className="col-lg-4 pb-9 col-md-6 hover-tour cursor-pointer">
                      <Link href={`/trekbooking/tour/tour_detail/${item.tourId}`} className="fix-link">
                        <div className="block-tour content-tour fix-image-tour-client">
                          <div className="img-tour">
                            <img
                              src={tourImages[item.tourId] || "/image/tour.png"}
                              className="w-100 fix-image-tour-client h-56"
                              alt="Tour"
                            />
                          </div>
                          <div className="py-1 px-6">
                            <p className="color-black font-bold pt-2 text-left">{item.tourName}</p>
                            <div className="flex">
                              <p className="text-gach font-bold pr-10">{item.tourPrice}US$</p>
                              <p className="text-black font-bold">{newPrice}US$</p>
                            </div>
                            <div className="row pb-2">
                              <div className="time flex cursor-pointer col-lg-4 col-md-12 col-sm-4 col-4">
                                <img className="w-5 h-5" src="/image/calendartour.png" alt="Calendar" />
                                <p className="color-black ml-1 font-bold">{formattedTourTime}</p>
                              </div>
                              <div className="vitri flex cursor-pointer col-lg-4 col-md-12 col-sm-4 col-4">
                                <img className="w-5 h-5" src="/image/uptour.png" alt="Location" />
                                <p className="color-black ml-1 font-bold fix-location-length">{item.tourAddress}</p>
                              </div>
                              <div className="vitri flex cursor-pointer col-lg-4 col-md-12 col-sm-4 col-4">
                                <img className="w-5 h-5" src="/image/user.png" alt="Capacity" />
                                <p className="color-black ml-1 font-bold">{item.tourCapacity}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })
              ) : (
                <div>No tours found</div>
              )}
            </div>
          </div>
        </div>
        <div className="pagination mt-4 flex justify-between items-center font-semibold pb-4">
          <div>
            <span className="ml-8">{currentPage} of {totalPages}</span>
          </div>
          <div className="flex items-center mr-8">
            <img className="w-3 h-3 cursor-pointer" src="/image/left.png" alt="Previous" onClick={handlePrevPage} />
            {Array.from({ length: totalPages }, (_, index) => (
              <p
                key={index}
                onClick={() => paginate(index + 1)}
                className={`mb-0 mx-2 cursor-pointer ${currentPage === index + 1 ? 'active' : ''}`}
              >
                {index + 1}
              </p>
            ))}
            <img className="w-3 h-3 cursor-pointer" src="/image/right2.png" alt="Next" onClick={handleNextPage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourList;
