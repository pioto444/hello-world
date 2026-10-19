//import Film from "./components/Film";
//import Book from "./components/Book";
import AlbumComponent from "./components/Albums";
import type { AlbumType } from "./types/Album";
import albumsData from "./data/albums.json";

const albums: AlbumType[] = albumsData;

function App () {

  return (
    <div className="horizontal">
      {/*<Film source="/paul.jpg" title="Paul" releaseYear={2011}/>
      <Film source="/django.jpg" title="Django" releaseYear={2012}/>
      <Film source="/inglorious.jpg" title="Inglorious Bastards" releaseYear={2009}/> */}

      {/*<Book source="/power.jpg" title="48 Laws of power" releaseYear={1998} pages={578}/> 
      <Book source="/larp.jpg" title="ReZero" releaseYear={2015} pages={326}/> 
      <Book source="/idiots.jpg" title="Surrounded by idiots" releaseYear={2014} pages={304}/> */}
      
      <div>
        {albums.map((album) => (
            <AlbumComponent key={album.id} {...album}/>
        ))}
      </div>
    </div>
  );
}
export default App