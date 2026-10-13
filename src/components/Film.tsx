interface Props {
    source: string;
    title: string;
    releaseYear: number;
}

export default function Film({source, title, releaseYear} : Props) {
    return (
        <div>
            <img src={source} alt={title} />
            <div>
                <h1>{title}</h1>
                <p>{releaseYear}</p>
            </div>
        </div>
    );
} 