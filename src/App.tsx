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
import { useState } from "react";

const albums: AlbumType[] = albumsData;
const movies: MovieType[] = moviesData;
const books: BookType[] = bookData;

const srotedAlbums = albums.sort((a, b) => a.title.localeCompare(b.title));
const sortedMovies = movies.sort((a, b) => a.title.localeCompare(b.title));
const albumWithMostTracks = srotedAlbums.filter(album => album.tracklist).reduce((max, album) =>album.tracklist.length > max.tracklist.length ? album : max);

const matches = (title: string, query: string) => title.toLowerCase().includes(query.toLowerCase().trim());

function App () {
  const [albumSearch, setAlbumSearch] = useState("");
  const [bookSearch, setBookSearch] = useState("");
  const [movieSearch, setMovieSearch] = useState("");

  const filteredBooks = books.filter((book) => matches(book.title, bookSearch));
  const filteredMovies = movies.filter((movie) => matches(movie.title, movieSearch));
  const filteredAlbums = albums.filter((album) => matches(album.title, albumSearch));

  return (
    <div className="container py-4">

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

      <CollapsibleSection title="Filmy po 2010">
        {sortedMovies.filter(movies => movies.releaseYear > 2010).map((movie) => (
          <Film key={movie.id} {...movie} />     
        ))}
      </CollapsibleSection>

      <CollapsibleSection title="Albumy z co największą ilością utworów">
        <AlbumComponent key={albumWithMostTracks.id} {...albumWithMostTracks}/>
      </CollapsibleSection >

      <CollapsibleSection title="Książki filtrowane po roku wydania (od najnowszych do najstarszych)">
        {books.sort((a, b) => b.releaseYear - a.releaseYear).map((book) => (
          <Book key={book.id} {...book}/>
        ))}
      </CollapsibleSection >

      <CollapsibleSection title="Filmy z oceną powyżej 8">
         {movies.filter(movie => movie.rating > 8).map((movie) => (
            <Film key={movie.id} {...movie} />
        ))} 
      </CollapsibleSection>

      <CollapsibleSection title="Nie puste albumy"> 
        {albums.map((album) => (
          album.tracklist.length > 0 ? (
            <AlbumComponent key={album.id} {...album}/>
          ) : (
            <AlbumComponent key={album.id} {...album} />
          )
        ))}
      </CollapsibleSection >

      <section className="mt-4">
        <h2 className="text-center">Wyszukiwarka</h2>

        <div className="d-flex flex-row align-items-start mb-3 justify-content-start align-items-center gap-3">
          <div className="w-25">
            <h4>Wyszukaj film po tytule</h4>
            <input type="text" placeholder="Wyszukaj film po tytule" className="form-control mb-3" onChange={(e) => setMovieSearch(e.target.value)} />
          </div>
          <p className="ms-3 mb-0 text-warning">{movieSearch}</p>
        </div>

        <CollapsibleSection title="Filmy">
          {filteredMovies.map((movie) => (
            <Film key={movie.id} {...movie} />
          ))}
        </CollapsibleSection>
        {filteredMovies.length === 0 && <p className="text-center">Brak wyników</p>}

        <div className="d-flex flex-row align-items-start mb-3 justify-content-start align-items-center gap-3">
          <div className="w-25">
            <h4>Wyszukaj książkę po tytule</h4>
            <input type="text" placeholder="Wyszukaj książkę po tytule" className="form-control mb-3" onChange={(e) => setBookSearch(e.target.value)} />
          </div>
          <p className="ms-3 mb-0 text-muted">{bookSearch}</p>
        </div>

        <CollapsibleSection title="Książki">
          {filteredBooks.map((book) => (
            <Book key={book.id} {...book} />
          ))}
        </CollapsibleSection>
        {filteredBooks.length === 0 && <p className="text-center">Brak wyników</p>}

        <div className="d-flex flex-row align-items-start mb-3 justify-content-start align-items-center gap-3">
          <div className="w-25">
            <h4>Wyszukaj album po tytule</h4>
            <input type="text" placeholder="Wyszukaj album po tytule" className="form-control mb-3" onChange={(e) => setAlbumSearch(e.target.value)} />
          </div>
          <p className="ms-3 mb-0 text-danger">{albumSearch}</p>
        </div>

        <CollapsibleSection title="Albumy">
          {filteredAlbums.map((album) => (
            <AlbumComponent key={album.id} {...album} />
          ))}
        </CollapsibleSection>
        {filteredAlbums.length === 0 && <p className="text-center">Brak wyników</p>}
        
      </section>
    </div>
  );
}
export default App