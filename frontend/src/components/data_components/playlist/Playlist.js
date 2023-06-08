import React from 'react'
import PlaySong from './PlaySong'

const Playlist = ({songs, playlist, setPlaylist}) => {
  return (
    <div className='component-container'>
        <h2>My Playlist</h2>
        <div className='playlist-display'>
           {songs.map(song => <PlaySong song={song} playlist={playlist} setPlaylist={setPlaylist}/>)}
        </div>
    </div>
  )
}

export default Playlist
