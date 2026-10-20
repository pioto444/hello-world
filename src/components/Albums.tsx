import type { AlbumType } from "../types/Album";
import Song from "./Song";

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
                        <Song index={index} name={track.name} length={track.length}/>
                    ))}
                </ol>
            </div>
        </div>
    );
}