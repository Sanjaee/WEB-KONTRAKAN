import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../api/firebase";
import { doc, getDoc } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker, faStar } from "@fortawesome/free-solid-svg-icons";
import Navigasi from "./Navigasi";
import Payment from "../PaymentGetway/Payment";
import Slider from "react-slick";

const DetailKontrakan = () => {
  const { id } = useParams();
  const [kontrakan, setKontrakan] = useState({ imageList: [] }); // Initialize kontrakan with an empty array for image

  useEffect(() => {
    const fetchData = async () => {
      try {
        const kontrakanRef = doc(db, "daftarkontrakan", id);
        const kontrakanSnapshot = await getDoc(kontrakanRef);

        if (kontrakanSnapshot.exists()) {
          const kontrakanData = {
            id: kontrakanSnapshot.id,
            ...kontrakanSnapshot.data(),
          };
          setKontrakan(kontrakanData);
        } else {
          // Handle the case where the document with the specified id does not exist.
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, [id]);

  const formatCurrency = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-gray-200">
      <Navigasi />
      <div className="container mx-auto p-4">
        {kontrakan ? (
          <div className="md:flex md:mt-24 mt-20">
            {/* Kolom 1 (Gambar) */}
            <div className="md:w-1/2">
              <Slider {...settings}>
                {kontrakan.imageList.map((imageList, index) => (
                  <div key={index}>
                    <img
                      src={imageList}
                      alt={kontrakan.name}
                      className="w-full h-auto rounded"
                    />
                  </div>
                ))}
              </Slider>
            </div>
            {/* Kolom 2 (Detail) */}
            <div className="md:w-1/2 md:pl-4">
              <p className="text-3xl text-gray-800 mb-2 font-bold mt-7">
                {formatCurrency(kontrakan.harga)}
              </p>
              <h2 className="text-2xl font-semibold ">{kontrakan.name}</h2>
              <div
                className={`status-dot ${
                  kontrakan.status === "KOSONG" ? "green-dot" : "red-dot"
                }`}
              ></div>
              <p className="store-card-description mt-2">{kontrakan.status}</p>

              <p className="text-lg text-gray-800 mb-2">{kontrakan.title}</p>
              <div className="rating">
                {Array.from({ length: kontrakan.rating }, (_, index) => (
                  <FontAwesomeIcon icon={faStar} key={index} />
                ))}
              </div>
              <div className="location">
                <FontAwesomeIcon icon={faMapMarker} />{" "}
                <p className="text-lg text-gray-800 ">{kontrakan.lokasi}</p>
              </div>
              <p className="text-lg text-gray-800 ">{kontrakan.benefit}</p>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
        <Payment />
      </div>
    </div>
  );
};

export default DetailKontrakan;
