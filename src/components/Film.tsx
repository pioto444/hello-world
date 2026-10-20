interface Props {
    source: string;
    title: string;
    releaseYear: number;
    rating: number;
}

export default function Film({source, title, releaseYear, rating} : Props) {
    return (
        <div className="movie-card">
            <img src={source} alt={title} />
            <div className="movie-info">
                <h1>{title}</h1>
                <p>Release Year - {releaseYear}</p>
                <p>Rating - {rating}</p>
            </div>
        </div>
    );
} 