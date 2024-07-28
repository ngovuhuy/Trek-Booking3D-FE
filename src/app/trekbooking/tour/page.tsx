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
  const itemsPerPage = 4;

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
      <div className="pt-36">
        <div className="container text-xl my-5" style={{ color: "#305A61" }}>
          <Link className="no-underline underline_hv text-black font-sans" href="/">Home</Link>
          <span className="mx-1">/</span>
          <Link className="no-underline underline_hv font-semibold" style={{ color: "#305A61" }} href="/trekbooking/tour">Attractions</Link>
        </div>
     
        <div className="bk-tour pb-8">
          <div className="container">
            <div className="title-section text-center pt-10">
              <div className="sub-title ">Explore the world</div>
              <h3 className="heading ">Amazing Featured Tour<br /><span className="span-pack">Package</span> The World</h3>
            </div>
            <div className="container flex justify-between  items-end max-[460px]:block">
          <div className="border-tour cursor-pointer">
            <p className=" font-bold" >Price Range</p>
            <Slider
              range
              min={0}
              max={5000}
              value={priceRange}
              onChange={handleSliderChange}
              trackStyle={[{ backgroundColor: '#305A61' }]}
              handleStyle={[{ borderColor: '#305A61' }, { borderColor: '#305A61' }]}
            />
            <div className="flex justify-between  pt-4">
              <span >Min: <span className="font-semibold" style={{ color: "#495057" }}>{priceRange[0]}$</span></span>
              <span className="ml-2">Max: <span className="font-semibold" style={{ color: "#495057" }}> {priceRange[1]}$</span></span>
            </div>
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
            <div className="fiter-bar pb-8 pt-2">
              <button className="filter-listing active-tour">
                All
              </button>
              <button className="filter-listing">
                Asia
              </button>
              <button className="filter-listing">
                Europe
              </button>
              <button className="filter-listing">
                Sweden
              </button>
              <button className="filter-listing">
                United State
              </button>
            </div>
            <div className="row">
              <div className="fix-768-tour">
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
                        <div key={index} className="col-lg-3 pb-9 col-md-6 hover-tour cursor-pointer">
                          <Link href={`/trekbooking/tour/tour_detail/${item.tourId}`} className="fix-link">
                            <div className="block-tour content-tour fix-image-tour-client">
                              <div className="img-tour relative">
                                <img
                                  src={tourImages[item.tourId] || "/image/tour.png"}
                                  className="w-100 fix-image-tour-client h-56"
                                  alt="Tour"
                                />
                                <div className="meta-lable">
                                  <div className="featured-text">
                                    Featured								</div>
                                </div>
                              </div>

                              <div className="py-1 px-6">
                                <div className="address flex justify-start">
                                  <img className="w-7" src="/image/addresstour.gif" alt="" />
                                  <span className="address-text">{item.tourAddress}</span>
                                </div>
                                <p className="color-black font-bold pt-2 text-left">{item.tourName}</p>
                                <div className="rating-review flex mb-3">
                                  <div className="rating flex">
                                    <img className="w-4 mx-1" src="/image/start.png" alt="" />
                                    <img className="w-4 mx-1" src="/image/start.png" alt="" />
                                    <img className="w-4 mx-1" src="/image/start.png" alt="" />
                                    <img className="w-4 mx-1" src="/image/start.png" alt="" />
                                    <img className="w-4 mx-1" src="/image/start.png" alt="" />
                                  </div>
                                  <div className="review">
                                    (3 Reviews)
                                  </div>
                                </div>
                                <div className="flex justify-start">
                                  <div className="flex day">
                                    <img className="w-7" src="/image/locktour.png" alt="" />
                                    <div className="number-day">7 Days</div>
                                  </div>
                                  <div className="flex items-start person ml-3">
                                    <img className="w-7" src="/image/usertour.png" alt="" />
                                    <div className="number-day">{item.tourCapacity} Persons</div>
                                  </div>
                                </div>
                                <div className="d-flex justify-content-between tour-info-bottom">
                                  <div className="d-flex price">
                                    <span className="from-color">
                                      From							</span>
                                    <div className="price-content pb-2">
                                      <span className="price-text item_info_price_new"><span className="currency_amount"><span className="currency_symbol">${newPrice}</span></span></span></div>
                                  </div>
                                  <img decoding="async" src="https://vitourwp.themesflat.co/wp-content/plugins/tf-vitour-core-plugin/includes/elementor-widget/assets/images/icons/not-wish-list.svg" alt="Add to Wishlist"></img>
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
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default TourList;
