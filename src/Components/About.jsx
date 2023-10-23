import React from "react";
import Navigasi from "./Navigasi";
import { Link } from "react-router-dom";

function KontrakanCard() {
  return (
    <div>
      <Navigasi />
      <div className="max-w-xl mx-auto rounded overflow-hidden shadow-lg sm:max-w-full lg:max-w-2xl bg-gray-200">
        <div className="mt-32">
          <img
            src="logo.png"
            alt="Kontrakan Jakarta Barat"
            className=" sm:w-1/5 lg:w-1/4 mx-auto mb-10"
          />
        </div>

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            Selamat Datang di Kontrakan Jakarta Barat yang Mengagumkan!
          </div>
          <p className="text-gray-700 text-base">
            Apakah Anda saat ini dalam pencarian kontrakan impian Anda di
            wilayah Jakarta Barat? Kami dengan bangga mempersembahkan kepada
            Anda pilihan yang tak tertandingi, yang menawarkan harga yang sangat
            terjangkau dan fasilitas yang benar-benar nyaman, untuk memastikan
            Anda mendapatkan pengalaman tinggal yang luar biasa.
          </p>
        </div>
        <div className="px-6 py-4">
          <p className="text-gray-700 text-base">
            **Kenapa Memilih Kontrakan Kami?**
          </p>
          <ul className="list-disc ml-8">
            <li className="text-gray-700 text-base">
              **Lokasi Strategis**: Berlokasi di pusat Jakarta Barat, kami
              memberikan Anda akses mudah ke pusat kota, stasiun kereta api, dan
              segala fasilitas penting lainnya.
            </li>
            <li className="text-gray-700 text-base">
              **Harga yang Terjangkau**: Kami sepenuhnya memahami bahwa Anda
              menginginkan kontrakan yang sesuai dengan anggaran Anda. Oleh
              karena itu, kami menawarkan harga yang sangat terjangkau, sehingga
              Anda bisa mendapatkan kontrakan dengan segala kenyamanan yang Anda
              inginkan.
            </li>
            <li className="text-gray-700 text-base">
              **Fasilitas Lengkap**: Kontrakan kami dilengkapi dengan fasilitas
              yang lengkap, termasuk kamar tidur yang nyaman, dapur yang
              lengkap, dan area parkir yang aman. Kami ingin Anda merasa seperti
              di rumah sendiri.
            </li>
            <li className="text-gray-700 text-base">
              **Keamanan Terjamin**: Keamanan adalah prioritas utama kami.
              Kontrakan kami dilengkapi dengan sistem keamanan canggih untuk
              memberikan Anda ketenangan pikiran sepanjang waktu.
            </li>
            <li className="text-gray-700 text-base">
              **Lingkungan Ramah**: Kami sangat bangga dengan lingkungan kami
              yang ramah dan bersahabat, sehingga Anda akan merasa seperti
              berada di komunitas yang peduli. Ini adalah tempat yang
              benar-benar Anda sebut "rumah."
            </li>
          </ul>
        </div>
        <div className="px-6 py-4">
          <Link
            to="/Payment"
            className="block w-full text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Hubungi Kami Sekarang!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default KontrakanCard;
