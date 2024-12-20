"use client";
import Head from "next/head";

export default function WeddingPrices() {
  return (
    <div>
      <Head>
        <title>Wedding Prices</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="bg-white text-black min-h-screen flex flex-col items-center justify-center">
        <div className="container mx-auto p-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">
            Setelah melihat semuanya pasti kalian penasaran sama harganya!
          </h1>
          <div className="flex flex-wrap justify-center items-center">
            <div className="tag">
              <p className="text-lg md:text-xl font-bold">Prewedding</p>
              <p className="text-lg md:text-xl">Rp4.000.000</p>
            </div>
            <div className="tag">
              <p className="text-lg md:text-xl font-bold">Wedding</p>
              <p className="text-lg md:text-xl">Rp6.000.000</p>
            </div>
            <div className="tag">
              <p className="text-lg md:text-xl font-bold">Photobooth</p>
              <p className="text-lg md:text-xl">Rp4.000.000</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-2xl md:text-4xl font-bold">
              Mahal banget ya? Tenang, lanjut dulu biar ga panik!
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");
        body {
          font-family: "Poppins", sans-serif;
        }
        .tag {
          border: 2px solid black;
          border-radius: 10px;
          padding: 1rem;
          display: inline-block;
          position: relative;
          margin: 1rem;
          background-color: #f9f9f9;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .tag:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        .tag::before {
          content: "";
          width: 10px;
          height: 10px;
          border: 2px solid black;
          border-radius: 50%;
          position: absolute;
          top: 50%;
          left: -15px;
          transform: translateY(-50%);
          background-color: white;
        }
      `}</style>
    </div>
  );
}
