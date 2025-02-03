import { Ongoing } from "@/types";
import { CirclePlay } from "lucide-react";

export function OngoingAnimeItem({ ongoing }: { ongoing: Ongoing }) {
    return (
        <li>
            <a href="" className="group flex items-center py-2.5 hover:text-primary">
                <CirclePlay
                    size={18}
                    className="text-gray-300 mr-2.5 group-hover:text-primary transition-colors duration-200"
                />
                <span className="text-navbar truncate flex-1 group-hover:text-primary transition-colors duration-200">
                    {ongoing.nameOngoing}
                </span>
                <div className="rounded-2xl bg-primary ml-2">
                    <p className="text-white uppercase text-[10px] font-bold px-2.5">Anime</p>
                </div>
            </a>
        </li>
    );
}