import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='side-navbar'>
        <h2><i class="bi bi-music-player"></i> My Music</h2>
        <div className='side-container'>
          <h3><i class="bi bi-music-note-beamed"></i> Music</h3>
          <div className='sidebar-music'>
            <Link to="/"><i class="bi bi-house"></i> Home</Link>
            <Link to="/artists"><i class="bi bi-people"></i> Artists</Link>
            <Link to="/albums"><i class="bi bi-journal-album"></i> Albums</Link>
            <Link to="/trendings"><i class="bi bi-fire"></i> Trending</Link>
            <Link to="/top10s"><i class="bi bi-browser-firefox"></i> Top 10</Link>
          </div>
        </div>
        <div className='side-container'>
        <h3><i class="bi bi-collection"></i> Library</h3>
          <div className='sidebar-music'>
            <Link to="my-playlist"><i class="bi bi-music-note-list"></i> My Playlist</Link>
            <Link to="favorites"><span class="bi bi-hand-thumbs-up-fill"></span> Favorites</Link>
            <Link to="/reviews"><i class="bi bi-star"></i> Reviews</Link>
          </div>
        </div>
        <div className='side-container'>
          <h3><i class="bi bi-star"></i> Buzz</h3>
          <div className='sidebar-music'>
            <Link to="recommended"><i class="bi bi-stars"></i>Recommended</Link>
          </div>
        </div>
    </div>
  )
}

export default Navbar
