import React, { useState } from "react";

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
      <div></div>
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
            <img src="/logo.png" alt="" className=" w-24 rounded-xl ml-6" />
            <h1 className=" text-center mt-7 font-bold">westjakartarentals</h1>
            <div className=" bg-WarnaAteng w-28 h-1 rounded-xl"></div>
          </div>
          <h1 className=" mt-5 font-bold text-lg">Benefit:</h1>
          <div className=" ml-5 mt-4">
            <ul>
              <li>
                <strong>Kasur Tidur:</strong> Setiap kamar dilengkapi dengan
                kasur tidur yang nyaman untuk para penyewa.
              </li>
              <li>
                <strong>Kamar Mandi Pribadi:</strong> Setiap kamar dilengkapi
                dengan kamar mandi pribadi yang mencakup shower, wastafel, dan
                toilet, sehingga penyewa memiliki privasi dalam penggunaan
                fasilitas ini.
              </li>
              <li>
                <strong>AC (Air Conditioner):</strong> Setiap kamar dilengkapi
                dengan AC untuk memberikan kenyamanan selama cuaca panas.
              </li>

              <li>
                <strong>Lokasi Strategis:</strong> Kos-kosan terletak di lokasi
                yang strategis, dekat dengan transportasi umum, pusat
                perbelanjaan, dan fasilitas penting lainnya.
              </li>
              <li>
                <strong>Keamanan:</strong> Mungkin ada sistem keamanan, seperti
                kunci elektronik atau kamera pengawas, untuk memastikan keamanan
                penyewa.
              </li>

              <li>
                <strong>Ketersediaan Tempat Parkir:</strong> Jika mungkin,
                tersedianya tempat parkir untuk penyewa yang memiliki kendaraan
                pribadi.
              </li>
              <li>
                <strong>Listrik dan Air Bersih:</strong> Fasilitas listrik dan
                air bersih yang andal untuk kenyamanan sehari-hari penyewa.
              </li>
              <li>
                <strong>Layanan Kebersihan:</strong> Penyediaan layanan
                kebersihan yang berkala untuk menjaga kebersihan ruangan.
              </li>
            </ul>
          </div>
          <h1 className=" font-bold text-red-500 mt-12">
            Estimasi Proses Kita Usahakan Secepatnya Minimal 12 Jam - Maximal
            1x24 Jam **Catatan Penting!!! : SESUDAH PESAN MOHON JANGAN MEMBAYAR
            TERLEBIH DAHULU SEBELUM DIKONFIRMASI**{" "}
          </h1>
        </div>
        {/* card 2 */}
        <div className="col-span-2 p-4">
          <h1 className="text-2xl font-bold mb-4">Payment Information</h1>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">
                Type Pembayaran
              </label>
              <select
                className="w-full px-4 py-2 border rounded-md"
                name="typeRank"
                onChange={handleChange}
                value={formData.typeRank}
              >
                <option value="Cash">Cash</option>
                <option value="DANA">DANA</option>
                <option value="OVO">OVO</option>
                <option value="SHOPEE PAY">SHOPEE PAY</option>
                <option value="BANK BCA">BANK BCA</option>
                <option value="BANK BRI">BANK BRI</option>
                <option value="BANK MANDIRI">BANK MANDIRI</option>

                {/* ... tambahkan opsi lainnya sesuai kebutuhan ... */}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium">NAMA </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md"
                name="namaAkun"
                onChange={handleChange}
                value={formData.namaAkun}
                placeholder="NAMA"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">NOMOR TELEPON</label>
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
              <label className="block text-sm font-medium">
                JUMBLAH PENGHUNI
              </label>
              <select
                className="w-full px-4 py-2 border rounded-md"
                name="typeLogin"
                onChange={handleChange}
                value={formData.typeLogin}
              >
                <option value="1 ORANG">1 ORANG</option>
                <option value="2 ORANG">2 ORANG</option>
                <option value="3 ORANG">3 ORANG</option>
                <option value="4 ORANG">4 ORANG</option>
                <option value="5 ORANG">5 ORANG</option>
                <option value="6 ORANG">6 ORANG</option>
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
