import { OngoingAnimeItem } from "./OngoingAnimeItem";
import { Ongoing } from "@/types";

export function OngoingAnimeList({ ongoings }: { ongoings: Ongoing[] }) {
    return (
        <ul className="px-4">
            {ongoings.map((ongoing, index) => (
                <OngoingAnimeItem key={index} ongoing={ongoing} />
            ))}
        </ul>
    );
}