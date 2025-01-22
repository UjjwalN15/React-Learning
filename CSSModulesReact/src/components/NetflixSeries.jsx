import {SeriesCard} from "./Series"
import data from "../api/data.json"
import Netflix from "./Netflix.module.css";

export const NetflixSeries = ()=>{
    return (
        <div className={Netflix.container}>
            <ul className={Netflix.flex}>{data.map((series)=>(
                    <SeriesCard key={series.id} series={series} />
                ))}
            </ul>
        </div>
    );
};