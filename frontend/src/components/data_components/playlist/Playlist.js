import React from 'react'
import PlaySong from './PlaySong'

const Playlist = ({songs, playlist, setPlaylist}) => {
  return (
    <div className='component-container'>
        <h3>Your Playlist</h3>
        <div className='display'>
           {songs.map(song => <PlaySong song={song} playlist={playlist} setPlaylist={setPlaylist}/>)}
        </div>
    </div>
  )
}

export default Playlist
