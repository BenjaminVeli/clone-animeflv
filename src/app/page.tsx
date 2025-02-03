import { Triangle } from "lucide-react";
import { getLatestEpisodes } from "./lib/animes";
import { LatestEpisodesList } from "@/components/LatestEpisodesList";
import { OngoingAnimeList } from "@/components/OngoingAnimeList";
import { LatestAnimesList } from "@/components/LatestAnimesList";
import Image from 'next/image'
import DragonBall from "../images/DragonBall.png";

export const metadata = {
  title: "AnimeFLV - Clone",
}

export default async function Home() {
  const { animes, ongoings, latestanimes } = await getLatestEpisodes();

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
              <strong className="uppercase text-base text-navbar">Animes en emisión</strong>
              <Triangle size={20} className="text-orange-600 rotate-90" />
            </div>
            <div className="">
              <OngoingAnimeList ongoings={ongoings} />
            </div>
          </div>

          <div className="col-span-full md:col-span-5 lg:col-span-6 pt-5 px-2.5">
            <div className="mb-5">
              <div className="flex justify-between items-center">
                <h2 className="subtitle-page">Últimos episodios</h2>
                <div className="rounded-2xl bg-primary">
                  <p className="text-white uppercase text-xs font-bold px-4 today-text">Hoy</p>
                </div>
              </div>
            </div>
            <LatestEpisodesList animes={animes} />

            <div className="mb-5 flex items-center gap-x-3">
              <Image src={DragonBall} width={40} height={40} alt="Dragon Ball" />
              <h2 className="subtitle-page">Últimos animes agregados</h2>
            </div>
            <LatestAnimesList latestanimes={latestanimes} />

          </div>

        </div>
      </div>
    </div>
  );
}
