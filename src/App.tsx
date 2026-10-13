//import Film from "./components/Film";
//import Book from "./components/Book";
import Album from "./components/Albums";

function App () {

  return (
    <div>
      {/*<Film source="/paul.jpg" title="Paul" releaseYear={2011}/>
      <Film source="/django.jpg" title="Django" releaseYear={2012}/>
      <Film source="/inglorious.jpg" title="Inglorious Bastards" releaseYear={2009}/> */}

      {/*<Book source="/power.jpg" title="48 Laws of power" releaseYear={1998} pages={578}/> 
      <Book source="/larp.jpg" title="ReZero" releaseYear={2015} pages={326}/> 
      <Book source="/idiots.jpg" title="Surrounded by idiots" releaseYear={2014} pages={304}/> */}

      <Album source="/TPAB.jpg" title="To pimp a butterfly" artist="Kendrick Lamar" genre="hip-hop" releaseYear={2015}/>
      <Album source="/asap.jpg" title="At. Long. Last. ASAP" artist="A$AP Rocky" genre="psyhadellic rap" releaseYear={2015}/>
    </div>
  );
}
export default App