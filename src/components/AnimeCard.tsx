import Image from "next/image"
import { Anime } from "@/types";

export function AnimeCard({ anime }: { anime: Anime }) {
//   return (
//     <li className="w-full md:max-w-52 rounded-md">
//       <a href="#" className="relative block">
//         <span className="Image overflow-hidden rounded-md">
//           <Image
//             src={anime.image}
//             alt={anime.name}
//             width={208}
//             height={140}
//             className="w-full transition-all duration-200 ease-in-out hover:scale-125 hover:brightness-75"
//           />
//         </span>

//         <div className="absolute bottom-2 left-2 right-2 z-10 pointer-events-none">
//           <span className="inline-block text-white px-2 py-0.5 bg-orange-500 font-bold text-xs rounded-[32px] mb-1">
//             {anime.episode}
//           </span>
//           <strong className="block text-white truncate">{anime.name}</strong>
//         </div>
//       </a>
//     </li>
//   );
// }

return (
  <li className="w-full md:max-w-52 rounded-md">
    <a href="#" className="relative block">
      <div className=" Image relative w-full aspect-[3/2] rounded-md overflow-hidden">
        <Image
          src={anime.image}
          alt={anime.name}
          fill
          sizes="(max-width: 768px) 100vw, 208px"
          className="object-cover object-top transition-all duration-200 ease-in-out hover:scale-125 hover:brightness-75"
        />
      </div>
      
      <div className="absolute bottom-2 left-2 right-2 z-10 pointer-events-none">
        <span className="inline-block text-white px-2 py-0.5 bg-orange-500 font-bold text-xs rounded-[32px] mb-1">
          {anime.episode}
        </span>
        <strong className="block text-white truncate">
          {anime.name}
        </strong>
      </div>
    </a>
  </li>
);
};