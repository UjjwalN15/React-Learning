import data from "../api/data.json"

export const NetflixSeries = ()=>{
    return (
        <ul>
            {data.map((curElem) =>{
                return (
                    <li key={data.id}>
                        <img src="{curElem.image_url}" alt={curElem.name} width="500px" height="300px"/>
                        <h2>{curElem.name}</h2>
                        <h3>{curElem.rating}</h3>
                        <h3>{curElem.genre}</h3>
                        <h3>[{curElem.cast}]</h3>
                        <a href="{curElem.watch_url}">
                            <button>Watch Now</button>
                        </a>
                    </li>
                );
            })}
        </ul>
    );
}