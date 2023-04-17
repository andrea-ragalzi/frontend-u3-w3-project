import './style/App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageHome from './pages/PageHome'
import PageAlbum from './pages/PageAlbum'
import PageArtist from './pages/PageArtist'
import Page404 from './pages/Page404'
import PageDiscover from './pages/PageDiscover'
import PageMoodGenres from './pages/PageMoodGenres'
import PageNewReleases from './pages/PageNewReleases'
import PagePodcast from './pages/PagePodcast'
import PageTrending from './pages/PageTrending'
import PageYourLibrary from './pages/PageYourLibrary'
import PageResults from './pages/PageResults'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/album/:id" element={<PageAlbum />} />
        <Route path="/artist/:id" element={<PageArtist />} />
        <Route path='/discover' element={<PageDiscover />} />
        <Route path='/mood-genres' element={<PageMoodGenres />} />
        <Route path='/new-releases' element={<PageNewReleases />} />
        <Route path='/podcast' element={<PagePodcast />} />
        <Route path='/trending' element={<PageTrending />} />
        <Route path='/your-library' element={<PageYourLibrary />} />
        <Route path='/search-results' element={<PageResults/>} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
