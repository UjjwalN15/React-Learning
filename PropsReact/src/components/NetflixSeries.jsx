import {SeriesData} from "./Series"
import data from "../api/data.json"

export const NetflixSeries = ()=>{
    return (
        <ul>
            {data.map((curElem)=>(
                <SeriesData key={curElem.id} curElem={curElem} />
            ))}
        </ul>
    );
};