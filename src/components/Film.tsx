interface Props {
    source: string;
    title: string;
    releaseYear: number;
    rating: number;
}

export default function Film({source, title, releaseYear, rating} : Props) {
    return (
        <div className="card h-100 p-2">
            <img src={source} alt={title} className="card-img-top" />
            <div className="card-body">
                <h1 className="card-title h1">{title}</h1>
                <p className="card-text mb-1">Release Year - {releaseYear}</p>
                <p className="card-text">Rating - {rating}</p>
            </div>
        </div>
    );
} 