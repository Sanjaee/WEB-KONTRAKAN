import React, { useState } from "react";
import Navigasi from "../Components/Navigasi";
import PopUp from "../Components/Popup";
import "../style/ButtonPayment.css";
import { Link } from "react-router-dom";

const Payment = () => {
  const [formData, setFormData] = useState({
    typeJoki: "",
    typeRank: "",
    typeLogin: "",
    idAkun: "",
    namaAkun: "",
    nomorOrderan: "",
    email: "",
    catatan: "",
  });

  const nomorTeleponAdmin = "+6289618714018";
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleWhatsApp = () => {
    // Tampilkan popup
    setPopupVisible(true);

    // Tunggu 3 detik sebelum diarahkan ke WhatsApp
    setTimeout(() => {
      const {
        typeJoki,
        typeRank,
        typeLogin,
        idAkun,
        namaAkun,
        nomorOrderan,
        email,
        catatan,
      } = formData;

      const message = `Type Joki: ${typeJoki}%0D%0AType Rank: ${typeRank}%0D%0AType Login: ${typeLogin}%0D%0AID AKUN: ${idAkun}%0D%0ANAMA AKUN: ${namaAkun}%0D%0ANOMOR ORDERAN: ${nomorOrderan}%0D%0AEMAIL: ${email}%0D%0ACATATAN/PERIHAL: ${catatan}`;

      // Mengirim pesan WhatsApp
      window.open(
        `https://api.whatsapp.com/send?phone=${nomorTeleponAdmin}&text=${message}`
      );

      // Mengosongkan input setelah mengirim
      setFormData({
        typeJoki: "",
        typeRank: "",
        typeLogin: "",
        idAkun: "",
        namaAkun: "",
        nomorOrderan: "",
        email: "",
        catatan: "",
      });
    }, 2000);
  };

  return (
    <div>
      <div>
        <Navigasi />
      </div>
      <div className=" justify-end items-end flex mt-3 mr-2 ">
        {isPopupVisible && <PopUp />}
      </div>

      {/* card 2 */}
      <div className="grid grid-cols-1 md:grid-cols-3  ">
        <div className="bg-white text-black p-4 rounded-xl">
          <div className="text-gray-700 text-xl font-bold  hover:underline">
            <Link to="/">&larr; Kembali</Link>
          </div>
          <div className=" justify-center items-center grid">
            <img src="logo.png" alt="" className=" w-28 rounded-xl" />
            <h1 className=" text-center mt-3 font-bold">JOKI MLBB</h1>
            <div className=" bg-WarnaAteng w-28 h-1 rounded-xl"></div>
          </div>
          <h1 className=" mt-5 font-bold text-lg">Cara Order:</h1>
          <div className=" ml-5 mt-4">
            <li>Lengkapi Data Joki Dengan Teliti!</li>
            <li>Pilih Jenis Joki Rank</li>
            <li>Masukkan nomor WhatsApp</li>
          </div>
          <h1 className=" font-bold text-red-500 mt-12">
            Estimasi Proses Jasa Joki Kita Usahakan Secepatnya Minimal 12 Jam -
            Maximal 2x24 Jam **Catatan Penting!!! : Sebelum Order Mohon Tonton
            Vidio Cara Pemesanan Di Halaman{" "}
          </h1>
        </div>
        {/* card 2 */}
        <div className="col-span-2 p-4">
          <h1 className="text-2xl font-bold mb-4">Payment Information</h1>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Type Joki</label>
              <select
                className="w-full px-4 py-2 border rounded-md"
                name="typeJoki"
                onChange={handleChange}
                value={formData.typeJoki}
              >
                <option value="Joki Gendong">Joki Gendong</option>
                <option value="Joki Akun">Joki Akun</option>
                <option value="Joki Clasik">Joki Clasik</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Type Rank</label>
              <select
                className="w-full px-4 py-2 border rounded-md"
                name="typeRank"
                onChange={handleChange}
                value={formData.typeRank}
              >
                <option value="Warior - Elit (SEIKLASNYA)">
                  Warior - Elit (SEIKLASNYA)
                </option>

                <option value="Elit - Master (SEIKLASNYA)">
                  Elit - Master (SEIKLASNYA)
                </option>
                <option value="Master - GrandMaster (SEIKLASNYA)">
                  Master - GrandMaster (SEIKLASNYA)
                </option>
                <option value="GrandMaster - Epic (Rp.50.000)">
                  GrandMaster - Epic (Rp.50.000)
                </option>
                <option value="Epic - Legend (Rp.80.000)">
                  Epic - Legend (Rp.80.000)
                </option>
                <option value="Legend - Mythic (Rp.100.000)">
                  Legend - Mythic (Rp.100.000)
                </option>
                <option value="Mythic - Honor (Rp.150.000)">
                  Mythic - Honor (Rp.150.000)
                </option>

                {/* ... tambahkan opsi lainnya sesuai kebutuhan ... */}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">ID AKUN</label>
              <input
                type="number"
                className="w-full px-4 py-2 border rounded-md"
                name="idAkun"
                onChange={handleChange}
                value={formData.idAkun}
                placeholder="74375432 (4334)"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">NAMA AKUN</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md"
                name="namaAkun"
                onChange={handleChange}
                value={formData.namaAkun}
                placeholder="EVOS_GALANG"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                NOMOR TELEPON ORDERAN
              </label>
              <input
                type="number"
                className="w-full px-4 py-2 border rounded-md"
                name="nomorOrderan"
                onChange={handleChange}
                value={formData.nomorOrderan}
                placeholder="+62812345678"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">EMAIL</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md"
                name="email"
                onChange={handleChange}
                value={formData.email}
                placeholder="email@gmail.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Type Login</label>
              <select
                className="w-full px-4 py-2 border rounded-md"
                name="typeLogin"
                onChange={handleChange}
                value={formData.typeLogin}
              >
                <option value="GENDONG(Gendong Akun)">
                  GENDONG(Mainkan Sendiri)
                </option>
                <option value="Monton(Joki Akun)">Monton(Joki Akun)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium">
                CATATAN / PERIHAL
              </label>
              <div>
                <textarea
                  className="w-full px-4 py-2 border rounded-md "
                  name="catatan"
                  placeholder="Opsional"
                  onChange={handleChange}
                  value={formData.catatan}
                  rows={4} // Anda dapat mengubah jumlah baris sesuai kebutuhan
                ></textarea>
                <button className="button" id="tombol" onClick={handleWhatsApp}>
                  <span>Pay Now via WhatsApp</span>
                  <svg
                    fill="#fff"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g id="SVGRepo_bgCarrier"></g>
                    <g id="SVGRepo_tracerCarrier"></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <defs> </defs>{" "}
                      <g id="cart">
                        {" "}
                        <circle
                          r="1.91"
                          cy="20.59"
                          cx="10.07"
                          className="cls-1"
                        ></circle>{" "}
                        <circle
                          r="1.91"
                          cy="20.59"
                          cx="18.66"
                          className="cls-1"
                        ></circle>{" "}
                        <path
                          d="M.52,1.5H3.18a2.87,2.87,0,0,1,2.74,2L9.11,13.91H8.64A2.39,2.39,0,0,0,6.25,16.3h0a2.39,2.39,0,0,0,2.39,2.38h10"
                          className="cls-1"
                        ></path>{" "}
                        <polyline
                          points="7.21 5.32 22.48 5.32 22.48 7.23 20.57 13.91 9.11 13.91"
                          className="cls-1"
                        ></polyline>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
