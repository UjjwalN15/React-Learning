import {SeriesCard} from "./Series"
import data from "../api/data.json"

export const NetflixSeries = ()=>{
    return (
        <div className="container">
            <ul className="flex flex-wrap">
                {data.map((series)=>(
                    <SeriesCard key={series.id} series={series} />
                ))}
            </ul>
        </div>
    );
};