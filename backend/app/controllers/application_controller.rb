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

    get '/todayhits' do 
        TodayHit.all.to_json
    end

    get "/chillhits" do 
        ChillHit.all.to_json
    end

    get '/megahits' do 
        MegaHit.all.to_json
    end

    get '/recommended' do
        Recommended.all.to_json
    end

    get '/reviews' do 
        Review.all.to_json
    end

    post '/reviews' do 
        new_review = Review.create(title: params[:title], album: params[:album])
        new_review.to_json
    end

    delete '/reviews/:id' do 
        Review.delete(params[:id])
        "Review was successfully deleted!".to_json
    end
end