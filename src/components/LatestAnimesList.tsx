import { LatestAnimesCard } from "./LatestAnimesCard";
import { LatestAnime } from "@/types";

export function LatestAnimesList({ latestanimes }: { latestanimes: LatestAnime[] }) {
    return (
        <ul className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-6">
            {latestanimes.map((latestanime, index) => (
                <LatestAnimesCard key={index} latestanime={latestanime} />
            ))}
        </ul>
    );
}