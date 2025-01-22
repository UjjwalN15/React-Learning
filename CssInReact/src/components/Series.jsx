export const SeriesCard = (props)=>{
    return (
        <li key={props} className="card">
            <img src={props.series.image_url} alt={props.series.name} />
            <h1>{props.series.name}</h1>
            <p>{props.series.description}</p>
            <p>{props.series.rating}</p>
            <p>{props.series.genre}</p>
            <p>[{props.series.cast}]</p>
            <a href={props.series.watch_url}>
                <button>Watch Now</button>
            </a>
        </li>
    );
}