import React, { useEffect, useState } from 'react'
import {Route, Routes} from "react-router-dom"

import { Artists, Albums, Top10s, Trendings , Favorites, Playlist, Recommended} from './data_components'
import {Home, Navbar} from './essentials'
import ArtistAlbums from './essentials/ArtistAlbums'
import AlbumDisplay from './album_display/AlbumDisplay'

function App() {

  const [artists, setArtists] = useState([])
  const [albums, setAlbums] = useState([])
  const [top10s, setTop10s] = useState([])
  const [trendings, setTrendings] = useState([])
  const [albumArtist, setAlbumArtist] = useState(" ")
  const [albumDisplay, setAlbumDisplay] = useState('')
  const [playlist, setPlaylist] = useState([])
  const [favorites, setFavorites] = useState([])

  useEffect(
    () => {
      fetch("http://localhost:9292/artists")
      .then(res => res.json())
      .then(data => setArtists([...data]))
    }, []
  )

  useEffect(
    () => {
      fetch("http://localhost:9292/albums")
      .then(res => res.json())
      .then(data => setAlbums([...data]))
    }, []
  )
  
  useEffect(
    () => {
      fetch("http://localhost:9292/top10s")
      .then(res => res.json())
      .then(data => setTop10s([...data]))
    }, []
  )

  useEffect(
    () => {
      fetch("http://localhost:9292/trendings")
      .then(res => res.json())
      .then(data => setTrendings([...data]))
    }, []
  )


  return (
    <div>
      <Navbar />
      <div className='main-content'>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/artists" element = {<Artists artists = {artists} setAlbumArtist={setAlbumArtist}/>} />
          <Route exact path="/albums" element = {<Albums albums = {albums} setAlbumDisplay={setAlbumDisplay}/>} />
          <Route exact path="/top10s" element = {<Top10s top10s = {top10s} setPlaylist={setPlaylist} setFavorites={setFavorites} playlist={playlist} favorites={favorites}/>} />
          <Route exact path="/trendings" element = {<Trendings trendings = {trendings} setPlaylist={setPlaylist} setFavorites={setFavorites} playlist={playlist} favorites={favorites}/>}/>
          <Route exact path='/artist-albums' element = {<ArtistAlbums artist = {albumArtist} setAlbumDisplay={setAlbumDisplay}/>}/>
          <Route exact path="/my-playlist" element={<Playlist songs={playlist} setPlaylist={setPlaylist} playlist={playlist}/>} />
          <Route exact path='/favorites' element={<Favorites songs={favorites} setFavorites={setFavorites} favorites={favorites}/>}/>
          <Route exact path="/recommended" element={<Recommended />}/>
          <Route exact path="/albumdisplay" element={<AlbumDisplay album = {albumDisplay}/>}/>
        </Routes>
      </div>

    </div>
   
  )
}

export default App