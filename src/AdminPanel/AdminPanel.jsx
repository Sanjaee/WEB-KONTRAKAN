import React, { useState } from "react";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import db from "../api/firebase";

const AdminPanel = () => {
  const [formData, setFormData] = useState({
    harga: "",
    image: "",
    lokasi: "",
    name: "",
    rating: "",
    status: "",
    title: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (
        formData.harga &&
        formData.image &&
        formData.lokasi &&
        formData.name
      ) {
        // Pastikan semua field yang dibutuhkan diisi
        const newData = {
          harga: formData.harga,
          image: formData.image,
          lokasi: formData.lokasi,
          name: formData.name,
          rating: formData.rating,
          status: formData.status,
          title: formData.title,
        };

        // Tambahkan data ke Firestore
        await addDoc(collection(db, "daftarkontrakan"), newData);

        // Clear the input fields after successful submission
        setFormData({
          harga: "",
          image: "",
          lokasi: "",
          name: "",
          rating: "",
          status: "",
          title: "",
        });

        alert("Data berhasil ditambahkan.");
      } else {
        alert("Harap isi semua field yang dibutuhkan.");
      }
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        Admin Panel - Tambah Data Kontrakan
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label className="text-sm text-gray-600">Harga:</label>
          <input
            type="text"
            name="harga"
            value={formData.harga}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm text-gray-600">Gambar URL:</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm text-gray-600">Lokasi:</label>
          <input
            type="text"
            name="lokasi"
            value={formData.lokasi}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm text-gray-600">Nama:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm text-gray-600">Rating:</label>
          <input
            type="text"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm text-gray-600">Status:</label>
          <input
            type="text"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm text-gray-600">Judul:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="border border-gray-300 rounded p-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
        >
          Tambah Data
        </button>
      </form>
    </div>
  );
};

export default AdminPanel;
