class ApplicationController < Sinatra::Base

    get "/" do 
        "<h1> Welcome to my music app </h1>"
    end

    get "/artists/:id/albums" do 
        artist = Artist.find(params[:id])
        artist.albums.to_json
    end
end