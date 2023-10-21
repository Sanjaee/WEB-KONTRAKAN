import React from "react";
import Navigasi from "./Navigasi";
import "../style/ButtonLokasi.css";

const Lokasi = () => {
  return (
    <div className="bg-gray-200 ">
      <Navigasi />
      <div className="mt-10 flex flex-col sm:flex-row ">
        <div className="w-full sm:w-1/2 p-4 sm:p-10">
          <h1 className="text-2xl font-bold">Nama Lokasi</h1>
          <p className="text-lg">Tanggal Pembuatan: DD/MM/YYYY</p>
          <p className="text-lg">Jam Buka: HH:MM - HH:MM</p>
          <p className="text-lg">Nomor Telepon: (123) 456-7890</p>
        </div>
        <div className="w-full sm:w-1/2 mt-4 mr-10 sm:mt-0">
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
          <div className="mt-10 items-center justify-center flex ">
            <button className="learn-more">
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
