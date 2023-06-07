class ApplicationController < Sinatra::Base

    get "/" do 
        "<h1> Welcome to my music app </h1>"
    end

    get "/trendings" do 
        Trending.all().to_json
    end

    get "/top10s" do 
        Top10.all.to_json
    end

    get "/artists" do 
        Artist.all.to_json
    end

    get "/artists/:id/albums" do 
        artist = Artist.find(params[:id])
        artist.albums.to_json
    end

    get "/albums" do 
        Album.all.to_json
    end

    get "/albums/:id/songs" do 
        album = Album.find(params[:id])
        album.songs.to_json
    end
end