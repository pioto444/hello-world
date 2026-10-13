interface Props {
    source: string;
    title: string;
    artist: string;
    genre: string;
    releaseYear: number;
}

export default function Album({source, title, artist, genre, releaseYear} : Props) {
    return (
        <div>
            <img src={source} alt={title} />
            <div>
                <h1>{title} - {artist}</h1>
                <p>{genre}</p> 
                <p>{releaseYear}</p>
            </div>
        </div>
    );
} 