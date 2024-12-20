import Head from "next/head";
import Image from "next/image";

export default function WeddingPackage() {
  return (
    <div className="bg-white text-black min-h-screen -mt-24">
      <Head>
        <title>Wedding Package</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </Head>

      <div className="container mx-auto p-4">
        {/* Section Header dengan label FREE dan All In */}
        <div className="text-center relative ">
          <Image
            alt="News article about lost wedding photos"
            className="w-full max-w-xl h-auto mx-auto"
            src="/images/promo.png"
            width={1000}
            height={1000}
          />
        </div>

        {/* Section Paket Wedding, Prewedding, dan Photobooth */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
          {/* Paket Wedding */}
          <div className="bg-gray-800 text-white p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-2">Wedding</h2>
            <ul className="list-disc list-inside">
              <li>8 Hours Session</li>
              <li>2 Photographer</li>
              <li>1 Videographer</li>
              <li>250+ Edited Photo</li>
              <li>3-5 Min. Wedding Video</li>
              <li>1 min. Wedding Short Video for Socmed</li>
              <li>1 Album Magazine + 1 Box Package</li>
              <li>All Photo on Google Drive & Flashdisk</li>
            </ul>
          </div>

          {/* Paket Prewedding */}
          <div className="bg-gray-800 text-white p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-2">Prewedding</h2>
            <ul className="list-disc list-inside">
              <li>4 Hours Session</li>
              <li>1 Photographer</li>
              <li>100+ Edited Photo</li>
              <li>1 Location for 2 outfit</li>
              <li>All Photo on Google Drive</li>
              <li>Special Include</li>
              <li>(Concept & Mood Board)</li>
            </ul>
          </div>

          {/* Paket Photobooth */}
          <div className="bg-gray-800 text-white p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-2">Photobooth</h2>
            <ul className="list-disc list-inside">
              <li>Free design twibbon sesuai tema yang diinginkan</li>
              <li>Free semua softfile (file foto & GIF)</li>
              <li>Semua file di-upload di hari yang sama</li>
              <li>Cetak ukuran 4R langsung jadi</li>
              <li>Harga hanya untuk wilayah Bandung & Garut</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
