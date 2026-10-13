interface Props {
    source: string;
    title: string;
    releaseYear: number;
    pages: number;
}

export default function Book({source, title, releaseYear, pages} : Props) {
    return (
        <div>
            <img src={source} alt={title} />
            <div>
                <h1>{title}</h1>
                <p>{releaseYear}</p>
                <p>{pages}</p>
            </div>
        </div>
    );
} 