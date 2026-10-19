import type { AlbumType } from "../types/Album";

export default function AlbumComponent({source, title, artist, genre, releaseYear, tracklist}: AlbumType) {
    return (
        <div className="album">
            <div className="album-details">
                <img className="album-cover" src={source} alt={`${title} album cover`}/>

                <div className="album-info">
                    <h2 className="album-title">
                        {title} <span>— {artist}</span>
                    </h2>

                    <p className="album-genre">{genre}</p>
                    <p className="album-year">{releaseYear}</p>
                </div>
            </div>

            <div className="album-tracklist">
                <h3>Tracklist</h3>

                <ol>
                    {tracklist.map((track, index) => (
                        <li key={index} className="track">{track.name} - <span className="track-length">{track.length}</span></li>
                    ))}
                </ol>
            </div>
        </div>
    );
}