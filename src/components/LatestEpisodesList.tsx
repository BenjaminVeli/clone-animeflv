import { LatestEpisodesCard } from "./LatestEpisodesCard";
import { Anime } from "@/types";

export function LatestEpisodesList({ animes }: { animes: Anime[] }) {
  return (
    <ul className="ListEpisodios grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-6 mb-5">
      {animes.map((anime, index) => (
        <LatestEpisodesCard key={index} anime={anime} />
      ))}
    </ul>
  );
}
