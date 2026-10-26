interface Props {
    source: string;
    title: string;
    releaseYear: number;
    pages: number;
}

export default function Book({source, title, releaseYear, pages} : Props) {
    return (
        <div className="card h-100 p-2">
            <img src={source} alt={title} className="card-img-top" />
            <div className="card-body">
                <h1 className="card-title h1">{title}</h1>
                <p className="card-text mb-1">Release year: {releaseYear}</p>
                <p className="card-text">Pages: {pages}</p>
            </div>
        </div>
    );
} 