import React, { useEffect, useState } from 'react'
import {Route, Routes} from "react-router-dom"

import { Artists, Albums, Top10s, Trendings , Favorites, Playlist, Recommended, Home, Reviews} from './data_components'
import { Navbar} from './essentials'
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
  const [recommended, setRecommended] =useState([])
  const [chillHits, setChillHits] = useState([])
  const [todayHits, setTodayHits] = useState([])
  const [megaHits, setMegaHits] = useState([])
  const [reviews, setReviews] = useState([])

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
  useEffect(
    () => {
      fetch("http://localhost:9292/chillhits")
      .then(res => res.json())
      .then(data => setChillHits([...data]))
    }, []
  )
  useEffect(
    () => {
      fetch("http://localhost:9292/megahits")
      .then(res => res.json())
      .then(data => setMegaHits([...data]))
    }, []
  )
  useEffect(
    () => {
      fetch("http://localhost:9292/recommended")
      .then(res => res.json())
      .then(data => setRecommended([...data]))
    }, []
  )
  useEffect(
    () => {
      fetch("http://localhost:9292/todayhits")
      .then(res => res.json())
      .then(data => setTodayHits([...data]))
    }, []
  )

  useEffect(
    () => {
      fetch("http://localhost:9292/reviews")
      .then(res => res.json())
      .then(data => setReviews([...data]))
    }, [reviews.length]
  )

  useEffect(
    () => {
      fetch("http://localhost:9292/playlist")
      .then(res => res.json())
      .then(data => setPlaylist([...data]))
    }, [playlist.length]
  )

  useEffect(
    () => {
      fetch("http://localhost:9292/favorites")
      .then(res => res.json())
      .then(data => setFavorites([...data]))
    }, [favorites.length]
  )


  return (
    <div>
      <Navbar />
      <div className='main-content'>
        <Routes>
          <Route exact path="/" element={<Home  todayHits={todayHits} megaHits={megaHits} setPlaylist={setPlaylist} setFavorites={setFavorites} playlist={playlist} favorites={favorites} />} />
          <Route exact path="/artists" element = {<Artists artists = {artists} setAlbumArtist={setAlbumArtist}/>} />
          <Route exact path="/albums" element = {<Albums albums = {albums} setAlbumDisplay={setAlbumDisplay}/>} />
          <Route exact path="/top10s" element = {<Top10s top10s = {top10s} setPlaylist={setPlaylist} setFavorites={setFavorites} playlist={playlist} favorites={favorites}/>} />
          <Route exact path="/trendings" element = {<Trendings trendings = {trendings} setPlaylist={setPlaylist} setFavorites={setFavorites} playlist={playlist} favorites={favorites}/>}/>
          <Route exact path='/artist-albums' element = {<ArtistAlbums artist = {albumArtist} setAlbumDisplay={setAlbumDisplay}/>}/>
          <Route exact path="/my-playlist" element={<Playlist songs={playlist} setPlaylist={setPlaylist} playlist={playlist}/>} />
          <Route exact path='/favorites' element={<Favorites songs={favorites} setFavorites={setFavorites} favorites={favorites}/>}/>
          <Route exact path="/recommended" element={<Recommended recommended={recommended} chillHits={chillHits} setPlaylist={setPlaylist} setFavorites={setFavorites} playlist={playlist} favorites={favorites}/>}/>
          <Route exact path="/albumdisplay" element={<AlbumDisplay setReviews = {setReviews} album = {albumDisplay} reviews={reviews}/>}/>
          <Route exact path="/reviews" element={<Reviews reviews={reviews} setReviews={setReviews}/>}/>
        </Routes>
      </div>

    </div>
   
  )
}

export default App
