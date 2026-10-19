export interface AlbumType {
    id: number;
    source: string;
    title: string;
    artist: string;
    genre: string;
    releaseYear: number;
    tracklist: {
        name: string;
        length: string;
    }[];
}