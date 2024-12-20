import Image from "next/image";

export default function PhotoboothWedding() {
  return (
    <div className="bg-white flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-black mb-4">
          Photobooth wedding?
        </h1>
        <div className="flex justify-center mb-4">
          <Image
            src="/images/photobooth.png"
            alt="Group of people posing in a photobooth at a wedding"
            className="rounded-lg "
            height={500}
            width={500}
          />
        </div>
        <p className="text-base text-black italic">
          Kita expert banget nih, pokoknya paketan kita sampe acara kamu beres.
        </p>
      </div>
    </div>
  );
}
