interface Props {
    source: string;
    title: string;
    releaseYear: number;
    rating: number;
}

export default function Film({source, title, releaseYear, rating} : Props) {
    return (
        <div className="col d-flex flex-column">
            {rating > 8 && (
                <div className="text-center py-2 fw-bold" style={{ backgroundColor: "beige" }} >
                Polecany
                </div>
            )}

            <div className="card flex-grow-1 p-2" onClick={() => console.log(`Tytuł filmu: ${title}`)}>
                <img src={source} alt={title} className="card-img-top" />
                <div className="card-body">
                    <h1 className="card-title h4">{title}</h1>
                    <p className="card-text mb-1">Release Year - {releaseYear}</p>
                    <p className="card-text">Rating - {rating}</p>
                </div>
            </div>
        </div>
    );
} 