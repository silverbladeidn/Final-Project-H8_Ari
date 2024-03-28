export default function card(props) {
    return (
        <div className="card border border-gray-200 rounded-lg shadow mb-8 my-5" style={{ width: 200}}>
            <img className="card-img-top" src={props.movie.Poster} style={{height: 300, objectFit:'cover' }} alt="Card image cap" />
            <div className="card-body d-flex p-5 justify-between">
                <h5 className="card-title mb-3 font-normal text-dark font-semibold">{props.movie.Title}</h5>
            </div>
        </div>
    )
}
