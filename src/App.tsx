import './App.css'
import Loader from './components/loader.tsx'
import Genre from './components/genre.tsx'
import TopFiveSongMonth from './components/topFiveSongMonth.tsx'
import Single from './components/topSongMonth.tsx'
import TextOnly from './components/intro.tsx'
import TopFiveArtMonth from './components/topFiveArtMonth.tsx'
import TopFiveArtSixMonth from './components/topFiveArtSixMonth.tsx'
import TopFiveSongSixMonth from './components/topFiveSongSixMonth.tsx'
import Guess from './components/Guess.tsx'
import TopSong from './components/topSong.tsx'
import GuessArt from './components/GuessArt.tsx'
import TopArt from './components/topArt.tsx'
import TopFiveArt from './components/topFiveArt.tsx'
import TopFiveSong from './components/topFiveSong.tsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/zero' element={<Loader />} />
        <Route path='/first' element={<TextOnly />} />
        <Route path='/second' element={<Single />} />
        <Route path='/third' element={<TopFiveSongMonth />} />
        <Route path='/fourth' element={<TopFiveArtMonth />} />
        <Route path='/fifth' element={<TopFiveArtSixMonth />} />
        <Route path='/sixth' element={<TopFiveSongSixMonth />} />
        <Route path='/seventh' element={<Guess />} />
        <Route path='/eigth' element={<TopSong />} />
        <Route path='/ninth' element={<GuessArt />} />
        <Route path='/tenth' element={<TopArt />} />
        <Route path='/eleventh' element={<TopFiveArt />} />
        <Route path='/twel' element={<TopFiveSong />} />
        <Route path='/thirteen' element={<Genre />} />
      </Routes>
    </Router>
  )
}


// 
// 12 slides
// Connect
export default App
