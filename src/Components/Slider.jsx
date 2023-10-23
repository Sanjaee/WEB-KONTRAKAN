import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../api/firebase"; // Import your Firebase configuration
import "../style/Slider.css";

const SkeletonLoader = () => (
  <div className="skeleton-loader">
    <div className="skeleton-image">Loading...</div>
  </div>
);

const Slider = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [sliderData, setSliderData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const sliderCollection = collection(db, "slider");
      const snapshot = await getDocs(sliderCollection);
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setSliderData(data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const nextSlide = () => {
    const nextIndex = (currentSlide + 1) % sliderData.length;
    setCurrentSlide(nextIndex);
    setActiveDot(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex =
      (currentSlide - 1 + sliderData.length) % sliderData.length;
    setCurrentSlide(prevIndex);
    setActiveDot(prevIndex);
  };

  useEffect(() => {
    let slideInterval;
    if (!isLoading && sliderData.length > 0) {
      slideInterval = setInterval(nextSlide, 5000);
    }

    return () => clearInterval(slideInterval);
  }, [isLoading, sliderData, currentSlide]);

  return (
    <div className="flex items-center justify-center bg-gray-400">
      <div
        className="mt-10 max-w-screen-lg mx-auto"
        style={{ overflow: "hidden" }}
      >
        {isLoading ? (
          <SkeletonLoader />
        ) : (
          <div className="relative">
            <div
              className="slider"
              style={{
                width: `${100 * sliderData.length}%`,
                transform: `translateX(-${
                  currentSlide * (100 / sliderData.length)
                }%)`,
                transition: "transform 1s",
              }}
            >
              {sliderData.map((item, index) => (
                <div
                  key={item.id}
                  style={{
                    width: `${100 / sliderData.length}%`,
                    display: "inline-block",
                    marginTop: "70px",
                  }}
                >
                  <img
                    src={item.image}
                    alt={`image ${index + 1}`}
                    className="w-full h-full  rounded-md mb-10"
                  />
                </div>
              ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex justify-center">
              {sliderData.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === activeDot ? "active-dot" : ""}`}
                  onClick={() => handleDotClick(index)}
                />
              ))}
            </div>
            <div className="absolute left-0 top-0 bottom-0 flex items-center pl-4">
              <button
                onClick={prevSlide}
                className="text-4xl font-bold text-white hover:text-black"
                disabled={isLoading || sliderData.length <= 1}
              >
                {"<"}
              </button>
            </div>
            <div className="absolute right-0 top-0 bottom-0 flex items-center pr-4">
              <button
                onClick={nextSlide}
                className="text-4xl font-bold text-white hover:text-black"
                disabled={isLoading || sliderData.length <= 1}
              >
                {">"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Slider;
