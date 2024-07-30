import useData from "./useData";
import {GameQuery} from "../App";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: string;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform[] };
    metacritic: number;
}


const UseGames = (
        gameQuery: GameQuery
    ) =>
    useData<Game>(
        '/games',
    {
        params: { genres: gameQuery.genre?.id,
            platforms: gameQuery.platform?.id,
        },
    },
    [gameQuery])
export default UseGames
