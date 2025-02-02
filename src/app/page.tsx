import { Triangle } from "lucide-react";
import { AnimeList } from "@/components/AnimeList";
import { getAnimes } from "./lib/animes";

export const metadata = {
  title: "AnimeFLV - Clone",
}

export default async function Home() {
  const animes = await getAnimes();
  return (
    <div className="bg-lightGray">
      <div className="container">

        <section className="pt-5" id="#hero">
          <div className="AnflvTl bg-[url('../images/bghero.jpg')]">
            <h1 className="text-h1Text"><strong className="font-bold text-white">AnimeFLV</strong> tu fuente de anime online gratis en HD</h1>
          </div>
        </section>

        <div className="grid grid-cols-8 mb-5">

          <div className="col-span-full md:col-span-3 lg:col-span-2 pt-5 px-2.5">
            <div className="p-4 flex justify-between items-center">
              <strong className="uppercase text-sm text-navbar">Animes en emisión</strong>
              <Triangle size={20} className="text-orange-600 rotate-90" />
            </div>
          </div>

          <div className="col-span-full md:col-span-5 lg:col-span-6 pt-5 px-2.5">
            <div className="mb-5">
              <div className="flex justify-between items-center">
                <h2 className="subtitle-page">Últimos episodios</h2>
                <div className="today">
                  <p className="text-white uppercase text-xs font-bold px-4 today-text">Hoy</p>
                </div>
              </div>
            </div>

            <AnimeList animes={animes} />

          </div>

        </div>
      </div>
    </div>
  );
}
