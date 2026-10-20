import AlbumComponent from "./components/Albums";
import type { AlbumType } from "./types/Album";
import {albumsData} from "./data/albums.ts";
import type { MovieType } from "./types/movieType.ts";
import { moviesData } from "./data/movies.ts";
import Film from "./components/Film";
import type { BookType } from "./types/bookTypes.ts";
import { bookData } from "./data/books.ts";
import Book from "./components/Book";

const albums: AlbumType[] = albumsData;
const movies: MovieType[] = moviesData;
const books: BookType[] = bookData;

const srotedAlbums = albums.sort((a, b) => a.title.localeCompare(b.title));
const sortedMovies = movies.sort((a, b) => a.title.localeCompare(b.title));


function App () {

  return (
    <div>
      <div>
        {sortedMovies.filter(movies => movies.releaseYear > 2010).map((movie) => (
          <Film key={movie.id} {...movie} />     
        ))}
      </div> 
      <div className="horizontal"> 
        <div>
          {srotedAlbums.filter(movies => movies.tracklist) .map((album) => (
              <AlbumComponent key={album.id} {...album}/>
          ))}
        </div>
        <div>
          {books.sort((a, b) => b.releaseYear - a.releaseYear).map((book) => (
            <Book key={book.id} {...book}/>
          ))}
        </div>
      </div>
    </div>
  );
}
export default App