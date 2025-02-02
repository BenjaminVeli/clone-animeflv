import AnimeEpisodeCard from "./AnimeEpisodeCard";

const episodes = [
  { name: "One Piece", episodeNumber: 1075, imageUrl: "/4102.jpg" },
  { name: "Jujutsu Kaisen", episodeNumber: 23, imageUrl: "/4102.jpg" },
  { name: "Attack on Titan", episodeNumber: 87, imageUrl: "/4102.jpg" },
  { name: "Dragon Ball", episodeNumber: 300, imageUrl: "/4102.jpg" },
];

export default function AnimeEpisodesList() {
  return (
    <ul className="ListEpisodios grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-6">
      {episodes.map((episode, index) => (
        <AnimeEpisodeCard key={index} {...episode} />
      ))}
    </ul>
  );
}
