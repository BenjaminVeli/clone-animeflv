import { AnimeCard } from "./AnimeCard";
import { Anime } from "@/types";

export function AnimeList({ animes }: { animes: Anime[] }) {
  return (
    <ul className="ListEpisodios grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-6">
      {animes.map((anime, index) => (
        <AnimeCard key={index} anime={anime} />
      ))}
    </ul>
  );
}
