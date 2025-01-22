export const SeriesCard = (props)=>{
    const button_style = {
        backgroundColor: `${props.series.rating >= 8.0 ? "green" : "red"}`,
        color:"white",
    }
    return (
        <li key={props} className="card" style={{listStyleType:"none"}}>
            <img src={props.series.image_url} alt={props.series.name} />
            <h1>{props.series.name}</h1>
            <p> <span className={`rating ${props.series.rating >=8.0 ? "super_hit" : "average"}`}>{props.series.rating}</span></p>
            <p>{props.series.genre}</p>
            <p>[{props.series.cast}]</p>
            <a href={props.series.watch_url}>
                <button style={button_style}>Watch Now</button>
            </a>
        </li>
    );
}