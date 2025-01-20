export const SeriesData = (props)=>{
    return (
        <li key={props.curElem.id}>
        {/* or <li key={props}></li> */}
            <img src={props.curElem.image_url} alt={props.curElem.name} height="500px" width="500px" />
            <h2>{props.curElem.name}</h2>
            <h3>{props.curElem.rating}</h3>
            <h3>{props.curElem.genre}</h3>
            <h3>[{props.curElem.cast}]</h3>
            <a href={props.curElem.watch_url}>
                <button>Watch Now</button>
            </a>
        </li>
    );
}

