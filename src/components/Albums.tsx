import type { AlbumType } from "../types/Album";

export default function AlbumComponent({source, title, artist, genre, releaseYear, tracklist}: AlbumType) {
    function handleSongClick(trackName: string) {
        console.log(`Kliknięto utwór: ${trackName} z albumu: ${title}`);
    }

    return (
        <div className="col">

            <div className="card h-100 p-2">
                <img className="card-img-top" src={source} alt={`${title} album cover`}/>
                <div className="card-body">
                    <div className="album-info">
                        <h2 className="card-text">
                            {title} <span>— {artist}</span>
                        </h2>

                        <p className="card-text">{genre}</p>
                        <p className="card-text">{releaseYear}</p>
                    </div>
                </div>

                <div className="card-tracklist">
                    <h3>Tracklist</h3>
                    {tracklist.length > 0 ? (
                        <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Tytuł</th>
                                <th scope="col" className="text-end">
                                Czas trwania
                                </th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                        {tracklist.map((track, index) => (
                            <tr key={index} className="card-track">
                                <td onClick={() => handleSongClick(track.name)} style={{ cursor: "pointer" }}>
                                    {track.name}
                                </td>
                                <td className="text-end">{track.length}</td>
                            </tr>
                        ))} 
                        </tbody>
                        </table>
                    ) : (
                        <p>Brak utworów</p>
                    )}
                </div>
            </div>
        </div>
    );
}