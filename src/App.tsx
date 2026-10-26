import AlbumComponent from "./components/Albums";
import type { AlbumType } from "./types/Album";
import {albumsData} from "./data/albums.ts";
import type { MovieType } from "./types/movieType.ts";
import { moviesData } from "./data/movies.ts";
import Film from "./components/Film";
import type { BookType } from "./types/bookTypes.ts";
import { bookData } from "./data/books.ts";
import Book from "./components/Book";
import CollapsibleSection from "./components/CollapsibleSection.tsx";

const albums: AlbumType[] = albumsData;
const movies: MovieType[] = moviesData;
const books: BookType[] = bookData;

const srotedAlbums = albums.sort((a, b) => a.title.localeCompare(b.title));
const sortedMovies = movies.sort((a, b) => a.title.localeCompare(b.title));
const albumWithMostTracks = srotedAlbums.filter(album => album.tracklist).reduce((max, album) =>album.tracklist.length > max.tracklist.length ? album : max);

function App () {


  return (
    <div className="container">
      <div>
        {movies.map((movie) => (
          <Film key={movie.id} {...movie} />     
        ))}
      </div> 
      <div className="horizontal"> 
        <div>
          {albums.map((album) => (
              <AlbumComponent key={album.id} {...album}/>
          ))}
        </div>
        <div>
          {books.map((book) => (
            <Book key={book.id} {...book}/>
          ))}
        </div>
      </div>
      <hr />
      <div>
        {sortedMovies.filter(movies => movies.releaseYear > 2010).map((movie) => (
          <Film key={movie.id} {...movie} />     
        ))}
      </div> 
      <div className="horizontal"> 
        <div>
          <AlbumComponent key={albumWithMostTracks.id} {...albumWithMostTracks}/>
        </div>
        <div>
          {books.sort((a, b) => b.releaseYear - a.releaseYear).map((book) => (
            <Book key={book.id} {...book}/>
          ))}
        </div>
      </div>
      <hr />
      <div>
         {movies.map((movie) => (
          movie.rating > 8 ? (
            <>
              <Film key={movie.id} {...movie} />
              <p>Polecany</p>
            </>
          ) : (
            <Film key={movie.id} {...movie} />
          )
        ))} 
      </div> 
      <div className="horizontal"> 
        <div>
          {albums.map((album) => (
            album.tracklist.length > 0 ? (
              <AlbumComponent key={album.id} {...album}/>
            ) : (
              <AlbumComponent key={album.id} {...album} />
            )
          ))}
        </div>
        <div>
          {books.map((book) => (
            book.releaseYear < 2000 ? (
              <>
                <Book key={book.id} {...book}/>
                <p>Klasyka</p>
              </> 
            ) : (
              <Book key={book.id} {...book}/>
            ) 
          ))}
        </div>
      </div>
      <hr />
      <CollapsibleSection title="Filmy">
        {movies.map((movie) => (
          <Film key={movie.id} {...movie} />     
        ))}
      </CollapsibleSection>
      <CollapsibleSection title="Albumy">
        {albums.map((album) => (
            <AlbumComponent key={album.id} {...album}/>
        ))}
      </CollapsibleSection >
      <CollapsibleSection title="Książki">
          {books.map((book) => (
            <Book key={book.id} {...book}/>
          ))}
      </CollapsibleSection >
    </div>
  );
}
export default App