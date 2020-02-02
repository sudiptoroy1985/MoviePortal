
export default ({ movie}) => (
    <div>
        <div>
            <img src={movie.Image} alt="Movie Image" />
            <p>{movie.Name}</p>
            <p>{movie.Year}</p>
            <p>{movie.Type}</p>
        </div>
        <style jsx>{`
            font-size: 0.9em;
        `}</style>
    </div>
)