import React from "react";

export default function CvGenerator() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">CV Generator</h1>
      <p className="mb-4">
        Di halaman ini, kamu dapat membuat CV dalam format PDF.
        Fitur ini sedang dikembangkan — nantikan pembaruannya!
      </p>

      <div className="mt-6 bg-gray-100 p-4 rounded">
        <h2 className="text-xl font-semibold mb-2">Contoh Form Input CV</h2>
        <form className="space-y-4">
          <div>
            <label className="block font-medium">Nama Lengkap</label>
            <input
              type="text"
              className="w-full border border-gray-300 px-3 py-2 rounded"
              placeholder="Masukkan nama kamu"
            />
          </div>
          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 px-3 py-2 rounded"
              placeholder="Masukkan email"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Buat CV (Coming Soon)
          </button>
        </form>
      </div>
    </div>
  );
}
