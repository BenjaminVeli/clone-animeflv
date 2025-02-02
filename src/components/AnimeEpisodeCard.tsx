import Image from "next/image"

interface AnimeEpisodeProps {
  name: string;
  episodeNumber: number;
  imageUrl: string;
}

export default function AnimeEpisodeCard({ name, episodeNumber, imageUrl }: AnimeEpisodeProps) {
  return (
    <li className="w-full md:max-w-52 rounded-md">
      <a href="#" className="relative block">
        <span className="Image overflow-hidden rounded-md">
          <Image
            src={imageUrl}
            alt={name}
            width={208}
            height={140}
            className="w-full transition-all duration-200 ease-in-out hover:scale-125 hover:brightness-75"
          />
        </span>

        <div className="absolute bottom-2 left-2 right-2 z-10 pointer-events-none">
          <span className="inline-block text-white px-2 py-0.5 bg-orange-500 font-bold text-xs rounded-[32px] mb-1">
            Episodio {episodeNumber}
          </span>
          <strong className="block text-white truncate">{name}</strong>
        </div>
      </a>
    </li>
  );
}