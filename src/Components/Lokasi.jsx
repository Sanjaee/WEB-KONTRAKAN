import React from "react";
import Navigasi from "./Navigasi";
import "../style/ButtonLokasi.css";

const Lokasi = () => {
  const handleCariLokasiClick = () => {
    // Alamat URL yang akan dibuka saat tombol "Cari Lokasi" ditekan
    const googleMapsURL =
      "https://www.google.com/maps/place/Klinik+Rizki+Medika/@-6.1529054,106.7306375,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69f7f0749b193d:0x7f4969ece6c264c7!8m2!3d-6.1529107!4d106.7332124!16s%2Fg%2F11h0yg5_0j?entry=ttu";

    // Buka tautan di jendela baru
    window.open(googleMapsURL, "_blank");
  };

  return (
    <div className="bg-gray-200 ">
      <Navigasi />
      <div className=" flex flex-col sm:flex-row ">
        <div className="w-full sm:w-1/2 p-4 sm:p-10 mt-36 sm:mt-60 ">
          <h1 className="text-2xl font-bold mb-5">Lokasi</h1>
          <p className="text-lg">Daerah: Jakarta Barat, Cengkareng Timur</p>
          <p className="text-lg">Jam Buka: 08:00 - 17:00</p>
          <p className="text-lg">Nomor Telepon: (123) 456-7890</p>
        </div>
        <div className="w-full sm:w-1/2 mt-4 sm:mt-40 mr-10 ">
          <iframe
            title="Google Map"
            width="100%"
            height="400"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Klinik%20Rizki%20Medika,%20Jalan%20Pelita%201,%20RT.7/RW.1,%20Cengkareng%20Timur,%20Kota%20Jakarta%20Barat,%20Daerah%20Khusus%20Ibukota%20Jakarta+(WestJakartaRentals)&amp;t=h&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a className="text-sm" href="https://www.maps.ie/population/">
              Find Population on Map
            </a>
          </iframe>
          <div className="mt-10 mb-40 items-center justify-center flex">
            <button className="learn-more" onClick={handleCariLokasiClick}>
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">Cari Lokasi</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lokasi;
