import React from 'react'
import TodayHits from "./today_hits/TodayHits"
import MegaHits from "./mega_hits/MegaHits"


const Home = ({ megaHits, todayHits, setPlaylist, setFavorites, playlist, favorites}) => {
  return (
    <div className='component-container'>
        <div className='home-container'>
          <TodayHits todayHits={todayHits} setPlaylist={setPlaylist} setFavorites={setFavorites} playlist={playlist} favorites={favorites}/>
           <MegaHits megaHits={megaHits} setPlaylist={setPlaylist} setFavorites={setFavorites} playlist={playlist} favorites={favorites}/>
        </div>
        
    </div>
  )
}

export default Home
