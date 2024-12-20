// components/WhyFoxo.js
import React from "react";
import { MdCheckCircle, MdCancel } from "react-icons/md"; // Import React Icons

const WhyFoxo = () => {
  return (
    <div className="bg-white flex items-center justify-center min-h-screen p-6">
      <div className="text-center max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
          Kenapa harus Foxo?
        </h1>
        <p className="text-base sm:text-lg mb-8 text-gray-600">
          Cek <em>tabel</em> berikut biar kamu lebih yakin pilih Foxo.
        </p>
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
          <table className="min-w-full border-collapse text-sm sm:text-base">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="px-6 py-4 text-left font-medium text-gray-700">
                  Keunggulan
                </th>
                <th className="px-6 py-4 font-medium text-gray-700">
                  Fotografer Lain
                </th>
                <th className="px-6 py-4 font-medium text-gray-700">
                  Foxo Wedding
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  label: "Tim berpengalaman.",
                  other: true,
                  foxo: true,
                },
                {
                  label: "Softfile dikirim di hari yang sama.",
                  other: false,
                  foxo: true,
                },
                {
                  label:
                    "Backup file di Kamera, Laptop, Hardisk, dan Drive. Kami jamin file kalian aman.",
                  other: false,
                  foxo: true,
                },
                {
                  label: "Cetak magazine 7 hari selesai.",
                  other: false,
                  foxo: true,
                },
                {
                  label: "Bebas request konsep sesuai keinginan.",
                  other: true,
                  foxo: true,
                },
                {
                  label: "Prewed, wedding, dan Photobooth (All in 1).",
                  other: false,
                  foxo: true,
                },
              ].map((row, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-gray-100 transition-colors`}
                >
                  <td className="px-6 py-4 text-left text-gray-700">
                    {row.label}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {row.other ? (
                      <MdCheckCircle className="text-green-500 text-lg mx-auto" />
                    ) : (
                      <MdCancel className="text-red-500 text-lg mx-auto" />
                    )}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {row.foxo ? (
                      <MdCheckCircle className="text-green-500 text-lg mx-auto" />
                    ) : (
                      <MdCancel className="text-red-500 text-lg mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WhyFoxo;
