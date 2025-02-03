import Image from "next/image"
import { LatestAnime } from "@/types";

export function LatestAnimesCard({ latestanime }: { latestanime: LatestAnime }) {
    return (
        <li>
            <article className="Anime alt B">
                <a href="relative block">
                    <span className="Estreno">
                        <span className="uppercase">Estreno</span>
                    </span>
                    <div className="Image">
                        <figure>
                            <Image src={latestanime.imgLatest} alt="test"
                                height={100}
                                width={100}
                                 />
                        </figure>
                        <span className="Type tv">Anime</span>
                    </div>
                    <h3 className="Title">{latestanime.nameLatest}</h3>
                </a>
            </article>
        </li>
    );
};