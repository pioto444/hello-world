interface Props {
    source: string;
    title: string;
    releaseYear: number;
    pages: number;
}

export default function Book({source, title, releaseYear, pages} : Props) {
    return (
        <div className="book-card">
            <img src={source} alt={title} />
            <div className="book-info">
                <h1>{title}</h1>
                <p>Release year: {releaseYear}</p>
                <p>Pages: {pages}</p>
            </div>
        </div>
    );
} 