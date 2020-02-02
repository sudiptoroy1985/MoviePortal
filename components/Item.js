

export default ({ movie}) => (
    <div>
        <img src={movie.Image} alt="Movie Image" />
        <p>{movie.Name}</p>
        <p>{movie.Year}</p>
        <p>{movie.Type}</p>
    </div>
)