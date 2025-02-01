import { Triangle } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-lightGray">
      <div className="container">

        <section className="pt-5" id="#hero">
          <div className="AnflvTl bg-[url('../images/bghero.jpg')]">
            <h1 className="text-h1Text"><strong className="font-bold text-white">AnimeFLV</strong> tu fuente de anime online gratis en HD</h1>
          </div>
        </section>

        <div className="grid grid-cols-8">
          <div className="col-span-2 pt-5 px-2.5">
            <div className="p-4 flex justify-between items-center">
              <strong className="uppercase text-sm text-navbar">Animes en emisión</strong>
              <Triangle size={20} className="text-orange-600 rotate-90"/>
            </div>
          </div>
          <div className="bg-green-900 col-span-6 pt-5 px-2.5">
            wasa
          </div>
        </div>

      </div>

    </div>
  );
}
