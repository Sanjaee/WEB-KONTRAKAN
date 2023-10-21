import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../api/firebase";
import "../style/TableKontrakan.css";
import { Link } from "react-router-dom";

const DaftarKontrakan = () => {
  const [kontrakan, setKontrakan] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const kontrakanCollection = collection(db, "daftarkontrakan");
      const kontrakanSnapshot = await getDocs(kontrakanCollection);
      const kontrakanData = kontrakanSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setKontrakan(kontrakanData);
    };

    fetchData();
  }, []);

  const formatCurrency = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const filteredKontrakan = kontrakan.filter((item) => {
    return (
      item.name && item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <section className="mx-auto max-w-7xl p-4 sm:px-2 lg:px-2 lg:py-6 min-h-[50vh]">
      <div className="flex flex-col space-y-10">
        <div>
          <h1 className="text-xl font-extrabold sm:text-3xl">
            Daftar Kontrakan
          </h1>
        </div>

        {/* Add a search input field */}
        <div>
          <input
            type="text"
            placeholder="Search Kontrakan..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1">
          {filteredKontrakan.map((item) => (
            <Link to="/Payment" key={item.id} className="store-card">
              <div className="store-card-inner">
                <img
                  src={item.image}
                  alt={item.name}
                  className="store-card-image w52"
                />

                <div className="store-card-details">
                  <h2 className="store-card-title">{item.name}</h2>
                  <p className="store-card-description">{item.title}</p>
                  <p className="store-card-price">
                    {formatCurrency(item.harga)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DaftarKontrakan;
