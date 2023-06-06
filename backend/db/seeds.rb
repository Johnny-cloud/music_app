puts "Seeding data......................"


# Artist
adele = Artist.create(name: "Adele", image: "https://media.npr.org/assets/img/2015/11/24/ajeup0ayctw4ztltklrnuvtm-y4xulezgneawbqw4cs_custom-7aa29347d5da230c6101168c71549a7399302d0c-s1100-c50.jpg")

# Albums and Songs
a_30 = Album.create(name:"30", artist: adele, image: "https://pbs.twimg.com/media/FCQXwMHXsAUUbZV.jpg")
 
Song.create(name: "Strangers by nature", album: a_30, artist: adele )
Song.create(name: "Easy on me", album: a_30, artist: adele )
Song.create(name: "My little love", album: a_30, artist: adele )
Song.create(name: "Cry your heart out", album: a_30, artist: adele )
Song.create(name: "Hold on", album: a_30, artist: adele )

a_25 = Album.create(name:"25", artist:adele , image: "https://assets.awwwards.com/awards/submissions/2022/08/62fa28f3075f0392812370.jpg")

Song.create(name: "Hello", album: a_25, artist: adele)
Song.create(name: "I miss you", album: a_25, artist: adele)
Song.create(name: "When we were young", album: a_25, artist: adele)
Song.create(name: "Remedy", album: a_25, artist: adele)
Song.create(name: "Love in the dark", album: a_25, artist: adele)
Song.create(name: "Send my love", album: a_25, artist: adele)

a_21 = Album.create(name:"21", artist:adele , image: "https://i.scdn.co/image/ab67616d0000b2732118bf9b198b05a95ded6300")

Song.create(name: "Rolling in the deep", album: a_21, artist: adele)
Song.create(name: "Rumour has it", album: a_21, artist: adele)
Song.create(name: "Turning tables", album: a_21, artist: adele)
Song.create(name: "Set fire to the rain", album: a_21, artist: adele)
Song.create(name: "One and only", album: a_21, artist: adele)
Song.create(name: "Take it all", album: a_21, artist: adele)

# Artist
chris_brown = Artist.create(name: "Chris Brown", image: "https://staticg.sportskeeda.com/editor/2023/02/26ab4-16767142877863-1920.jpg")

# Album
breezy = Album.create(name:"Breezy", artist: chris_brown, image: "https://m.media-amazon.com/images/I/51hMOurPEOL._UXNaN_FMjpg_QL85_.jpg")

Song.create(name: "Pitch Black", album: breezy, artist: chris_brown)
Song.create(name: "Psychic", album: breezy, artist: chris_brown)
Song.create(name: "Iffy", album: breezy, artist: chris_brown)
Song.create(name: "Dream", album: breezy, artist: chris_brown)
Song.create(name: "Slide", album: breezy, artist: chris_brown)

x = Album.create(name: "X", artist: chris_brown, image: "https://assets.capitalfm.com/2014/08/chris-brown-x-album-promo-1393232090-custom-0.jpg")

Song.create(name: "Loyal", album: x, artist: chris_brown)
Song.create(name: "Drown it", album: x, artist: chris_brown)
Song.create(name: "101", album: x, artist: chris_brown)
Song.create(name: "X", album: x, artist: chris_brown)
Song.create(name: "New Flame", album: x, artist: chris_brown)

indigo = Album.create(name: "Indigo", artist: chris_brown, image: "https://cdn-images-1.medium.com/max/1200/0*D34yY3St8Vv-eRJv.png")

Song.create(name: "Indigo", album: indigo, artist: chris_brown)
Song.create(name: "Back To Love", album: indigo, artist: chris_brown)
Song.create(name: "Red", album: indigo, artist: chris_brown)
Song.create(name: "All I Want", album: indigo, artist: chris_brown)
Song.create(name: "Come together", album: indigo, artist: chris_brown)

# Artist
michael_jackson = Artist.create(name: "Michael Jackson", image: "https://cdn1.i-scmp.com/sites/default/files/styles/1200x800/public/images/methode/2018/08/29/22d69e08-aa71-11e8-8796-d12ba807e6e9_1280x720_113417.JPG?itok=2Vwkjd-R")

# Albums And Songs
thriller = Album.create(name: "Thriller", artist: michael_jackson, image: "https://i.ebayimg.com/images/g/sBQAAOSwgz5gx9Gu/s-l1600.jpg")

Song.create(name: "Thriller", album: thriller, artist: michael_jackson)
Song.create(name: "Baby Be Mine", album: thriller, artist: michael_jackson)
Song.create(name: "Beat It", album: thriller, artist: michael_jackson)
Song.create(name: "Billie Jean", album: thriller, artist: michael_jackson)
Song.create(name: "Human Nature", album: thriller, artist: michael_jackson)

bad = Album.create(name: "Bad", artist: michael_jackson, image: "https://cdn.smehost.net/michaeljacksoncom-uslegacyprod/wp-content/uploads/2017/04/19870831_bad_album_shoot.jpg")

Song.create(name: "Bad", album: bad, artist: michael_jackson)
Song.create(name: "The Way You Make Me Feel", album: bad, artist: michael_jackson)
Song.create(name: "Dirty Diana", album: bad, artist: michael_jackson)
Song.create(name: "Man In The Mirror", album: bad, artist: michael_jackson)
Song.create(name: "Smooth Criminal", album: bad, artist: michael_jackson)

xscape = Album.create(name: "Xscape", artist: michael_jackson, image: "https://images.squarespace-cdn.com/content/v1/56858337cbced60d3b293aef/1557607735899-Q1BDUFGKFTRI8Y0L1PF1/Albumism_MichaelJackson_Xscape_MainImage1.jpg?format=1000w")

Song.create(name: "Love Never Felt So Good", album: xscape, artist:michael_jackson)
Song.create(name: "Chicago", album: xscape, artist:michael_jackson)
Song.create(name: "Loving You", album: xscape, artist:michael_jackson)
Song.create(name: "A Place With No Name", album: xscape, artist:michael_jackson)
Song.create(name: "Xscape", album: xscape, artist:michael_jackson)

# Artist
drake = Artist.create(name: "Drake", image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/18357/production/_121995199_gettyimages-1172292629.jpg")

# Albums and Songs
views = Album.create(name: "Views", artist: drake, image: "https://i.discogs.com/nwgk3jlxVsGtAQeYyQtmOfwo88PQfCNl3b5LTxiZjD8/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTg2MjUw/OTItMTU0MTAxNDA0/OS0xMDAwLmpwZWc.jpeg")

Song.create(name: "Keep The Family Close", album: views, artist: drake)
Song.create(name: "U With Me?", album: views, artist: drake)
Song.create(name: "Feel No Ways", album: views, artist: drake)
Song.create(name: "Hype", album: views, artist: drake)
Song.create(name: "Redemption", album: views, artist: drake)

scorpion = Album.create(name: "Scorpion", artist: drake, image: "https://i.scdn.co/image/ab67616d0000b273f907de96b9a4fbc04accc0d5")

Song.create(name: "Survival", album: scorpion, artist: drake)
Song.create(name: "Nonstop", album: scorpion, artist: drake)
Song.create(name: "Elevate", album: scorpion, artist: drake)
Song.create(name: "Emotionless", album: scorpion, artist: drake)
Song.create(name: "God's plan", album: scorpion, artist: drake)

take_care = Album.create(name: "Take Care", artist: drake, image: "https://www.udiscovermusic.com/wp-content/uploads/2018/11/Drake-Take-Care-Album-Cover-web-optimised-820-1000x600.jpg")

Song.create(name: "Shot For Me", album: take_care, artist: drake)
Song.create(name: "Headlines", album: take_care, artist: drake)
Song.create(name: "Crew Love", album: take_care, artist: drake)
Song.create(name: "Take Care", album: take_care, artist: drake)
Song.create(name: "Doing It Wrong", album: take_care, artist: drake)

# Artist
rihanna = Artist.create(name: "Rihanna", image: "https://pyxis.nymag.com/v1/imgs/e2f/a57/82238bd8d39090c6a806ef7376bb33f211-rihanna-1.rsquare.w700.jpg")

# Albums and Songs

loud = Album.create(name: "Loud", artist: rihanna, image: "https://e.snmc.io/i/600/s/2bc6f9d26e3b81752790e06f266cab16/10672578/rihanna-loud-Cover-Art.jpg")

Song.create(name: "S&M", album: loud, artist: rihanna)
Song.create(name: "What's My Name", album: loud, artist: rihanna)
Song.create(name: "Fading", album: loud, artist: rihanna)
Song.create(name: "Only Girl", album: loud, artist: rihanna)
Song.create(name: "Man Down", album: loud, artist: rihanna)

unapologetic = Album.create(name: "Unapologetic", artist: rihanna, image: "https://images.genius.com/bfa8ebe6575bf12da04c31d881f50ba1.600x600x1.jpg")

Song.create(name: "Stay", album: unapologetic, artist: rihanna)
Song.create(name: "Right Now", album: unapologetic, artist: rihanna)
Song.create(name: "Numb", album: unapologetic, artist: rihanna)
Song.create(name: "Jump", album: unapologetic, artist: rihanna)
Song.create(name: "What Now", album: unapologetic, artist: rihanna)

anti = Album.create(name: "Anti", artist: rihanna, image: "https://assets.vogue.com/photos/5891abb7f88f7c2037367868/master/w_2560%2Cc_limit/rihanna-new-album.jpg")

Song.create(name: "Work", album: anti, artist: rihanna)
Song.create(name: "Consideration", album: anti, artist: rihanna)
Song.create(name: "Yeah I Said It", album: anti, artist: rihanna)
Song.create(name: "Love On The Brain", album: anti, artist: rihanna)
Song.create(name: "Kiss It Better", album: anti, artist: rihanna)

# Artist
beyonce = Artist.create(name: "Beyonce", image: "https://images.hellomagazine.com/horizon/landscape/8d3adfe98135-gettyimages-1494670660.jpg")

# Albums and Songs
renaissance = Album.create(name: "Renaissance", artist: beyonce, image: "https://images.theconversation.com/files/477364/original/file-20220803-23-t5ba54.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip")

Song.create(name: "I'm That Girl",album: renaissance, artist: beyonce)
Song.create(name: "Cozy",album: renaissance, artist: beyonce)
Song.create(name: "Cuff It",album: renaissance, artist: beyonce)
Song.create(name: "Energy",album: renaissance, artist: beyonce)
Song.create(name: "Church Girl",album: renaissance, artist: beyonce)

alb_beyonce = Album.create(name: "Beyonce ", artist: beyonce, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Beyonc%C3%A9_-_Beyonc%C3%A9.svg/1200px-Beyonc%C3%A9_-_Beyonc%C3%A9.svg.png")

Song.create(name: "Mine", album: alb_beyonce, artist: beyonce)
Song.create(name: "XO", album: alb_beyonce, artist: beyonce)
Song.create(name: "Heaven", album: alb_beyonce, artist: beyonce)
Song.create(name: "Pretty Hurts", album: alb_beyonce, artist: beyonce)
Song.create(name: "Flawless", album: alb_beyonce, artist: beyonce)

lemonade = Album.create(name: "Lemonade", artist: beyonce, image: "https://pyxis.nymag.com/v1/imgs/245/4b9/b4496eda47e6c7c641cc7fa774498cab82-25-beyonce-lemonade-cover.rsquare.w700.jpg")

Song.create(name: "Don't Hurt Yourself", album: lemonade, artist: beyonce)
Song.create(name: "Freedom", album: lemonade, artist: beyonce)
Song.create(name: "Forward", album: lemonade, artist: beyonce)
Song.create(name: "All Night", album: lemonade, artist: beyonce)
Song.create(name: "Formation", album: lemonade, artist: beyonce)

# Artist
lauren_daigle = Artist.create(name: "Lauren Daigle", image: "https://guideposts.org/wp-content/uploads/2019/01/lauren_daigle_marquee.jpg.optimal.jpg")

# Albums and Songs

look_up_child = Album.create(name: "Look Up Child", artist: lauren_daigle, image: "https://i.ytimg.com/vi/7NAYz0zh_Es/maxresdefault.jpg")

Song.create(name: "Look Up Child", album: look_up_child, artist: lauren_daigle)
Song.create(name: "Rescue", album: look_up_child, artist: lauren_daigle)
Song.create(name: "Your Wings", album: look_up_child, artist: lauren_daigle)
Song.create(name: "You Say", album: look_up_child, artist: lauren_daigle)
Song.create(name: "Everything", album: look_up_child, artist: lauren_daigle)

alb_lauren_daigle = Album.create(name: "Lauren Daigle", artist: lauren_daigle, image: "https://yt3.googleusercontent.com/COBACERhcAOFCQ2Y18qqT1dZ0n_8VAturFCNq2FXSjTH9wPDWOq5xf6GXOEb4b_hvWvaInl_=s900-c-k-c0x00ffffff-no-rj")

Song.create(name: "Thank God I Do", album: alb_lauren_daigle, artist: lauren_daigle)
Song.create(name: "New", album: alb_lauren_daigle, artist: lauren_daigle)
Song.create(name: "Waiting", album: alb_lauren_daigle, artist: lauren_daigle)
Song.create(name: "To Know Me", album: alb_lauren_daigle, artist: lauren_daigle)
Song.create(name: "Valuable", album: alb_lauren_daigle, artist: lauren_daigle)

behold = Album.create(name: "Behold", artist: lauren_daigle, image: "https://cdn.saleminteractivemedia.com/187/content/114855/lauren-daigle-behold.jpg")

Song.create(name: "Jingle Bells", album: behold, artist: lauren_daigle)
Song.create(name: "What Child I This", album: behold, artist: lauren_daigle)
Song.create(name: "White Christmas", album: behold, artist: lauren_daigle)
Song.create(name: "Christmas Time Is Here", album: behold, artist: lauren_daigle)
Song.create(name: "O Come All Ye Faithful", album: behold, artist: lauren_daigle)

# Artist
kari_jobe = Artist.create(name: "Kari Jobe", image: "https://yt3.googleusercontent.com/ytc/AGIKgqM5zvz9zGq54oLTlBcZK5ctIifGjcNi7BV1rwAdvg=s900-c-k-c0x00ffffff-no-rj")

# Albums and songs

majestic = Album.create(name: "Majestic", artist: kari_jobe, image: "https://assets.worshipartistry.com/sites/default/files/imagecache/480sq/albums/kari_jobe_majestic_0.jpg")

Song.create(name: "Hands To The Heavens", album: majestic, artist: kari_jobe)
Song.create(name: "Only Your Love", album: majestic, artist: kari_jobe)
Song.create(name: "Always Enough", album: majestic, artist: kari_jobe)
Song.create(name: "Breathe On Us", album: majestic, artist: kari_jobe)
Song.create(name: "How Majestic", album: majestic, artist: kari_jobe)

the_blessing = Album.create(name: "The Blessing", artist: kari_jobe, image: "https://freeccm.com/wp-content/uploads/2020/10/122542946_10164050990025251_5480210226639777325_n-1200x565.jpg")

Song.create(name: "Heaven Invade", album: the_blessing, artist: kari_jobe)
Song.create(name: "Let The Light In", album: the_blessing, artist: kari_jobe)
Song.create(name: "First Love", album: the_blessing, artist: kari_jobe)
Song.create(name: "Rest", album: the_blessing, artist: kari_jobe)
Song.create(name: "Favorite Place", album: the_blessing, artist: kari_jobe)

the_garden = Album.create(name: "The Garden", artist: kari_jobe, image: "https://mediacontent.worshiptogether.com/site/images/blog/kJblogthegarden.jpg")

Song.create(name: "The Garden",album: the_garden, artist: kari_jobe)
Song.create(name: "Heal Our Land",album: the_garden, artist: kari_jobe)
Song.create(name: "Speak To Me",album: the_garden, artist: kari_jobe)
Song.create(name: "I Will Sing",album: the_garden, artist: kari_jobe)
Song.create(name: "Lover Of My Soul",album: the_garden, artist: kari_jobe)

# Artist
toby_mac = Artist.create(name: "Toby Mac", image: "https://s1.ticketm.net/dam/a/2a1/dba6689b-0ac4-4476-83dc-dde2ab2612a1_171451_TABLET_LANDSCAPE_LARGE_16_9.jpg")

# Albums and Songs
life_after_death = Album.create(name: "Life After Death", artist: toby_mac, image: "https://upload.wikimedia.org/wikipedia/en/6/6b/TobyMac_-_Life_After_Death.png")

Song.create(name: "Help Is On The Way", album: life_after_death, artist: toby_mac)
Song.create(name: "Deeper", album: life_after_death, artist: toby_mac)
Song.create(name: "The Goodness", album: life_after_death, artist: toby_mac)
Song.create(name: "Life On It", album: life_after_death, artist: toby_mac)
Song.create(name: "Faithfully", album: life_after_death, artist: toby_mac)

the_elements = Album.create(name: "The Elements", artist: toby_mac, image: "https://i.ytimg.com/vi/sk6m9D_8zRE/maxresdefault.jpg")

Song.create(name: "The Elements", album: the_elements, artist: toby_mac)
Song.create(name: "I Just Need You", album: the_elements, artist: toby_mac)
Song.create(name: "Everything", album: the_elements, artist: toby_mac)
Song.create(name: "Starts With Me", album: the_elements, artist: toby_mac)
Song.create(name: "It's You", album: the_elements, artist: toby_mac)

momentum = Album.create(name: "Momentum", artist: toby_mac, image: "https://i.ytimg.com/an/fBdpMSX_WqM/17710530198233687743_mq.jpg?v=6285222d")

Song.create(name: "Irene", album: momentum, artist: toby_mac)
Song.create(name: "J Train", album: momentum, artist: toby_mac)
Song.create(name: "Do You Know", album: momentum, artist: toby_mac)
Song.create(name: "Momentum", album: momentum, artist: toby_mac)
Song.create(name: "Get This Party Started", album: momentum, artist: toby_mac)

# Artist
for_king_and_country = Artist.create(name: "For King and Country", image: "https://www.azcentral.com/gcdn/presto/2020/11/06/PPHX/865c67f4-dcc4-4131-91f4-d7cd7f40a769-For_King__Country.jpg")

# Albums and Songs
burn_the_ships = Album.create(name: "Burn The Ships", artist: for_king_and_country, image: "https://cdn.saleminteractivemedia.com/187/content/213182/2-burn-the-ships-880x440.jpg")

Song.create(name: "Joy", album: burn_the_ships, artist: for_king_and_country)
Song.create(name: "God Only Knows", album: burn_the_ships, artist: for_king_and_country)
Song.create(name: "Amen", album: burn_the_ships, artist: for_king_and_country)
Song.create(name: "Burn The Ships", album: burn_the_ships, artist: for_king_and_country)
Song.create(name: "Need You More", album: burn_the_ships, artist: for_king_and_country)

crave = Album.create(name: "Crave", artist: for_king_and_country, image: "https://i.ytimg.com/vi/xrlEYsOaK_Q/maxresdefault.jpg")

Song.create(name: "Light It Up", album: crave, artist: for_king_and_country)
Song.create(name: "Missing", album: crave, artist: for_king_and_country)
Song.create(name: "People Change", album: crave, artist: for_king_and_country)
Song.create(name: "The Proof Of Your Love", album: crave, artist: for_king_and_country)
Song.create(name: "Fine Fine Life", album: crave, artist: for_king_and_country)

kingdom_come = Album.create(name: "Kingdom Come", artist: for_king_and_country, image: "https://mtracks.azureedge.net/public/images/albums/284/5710.jpg")

Song.create(name: "Prelude", album: kingdom_come, artist: for_king_and_country)
Song.create(name: "Dawn", album: kingdom_come, artist: for_king_and_country)
Song.create(name: "Fall Back", album: kingdom_come, artist: for_king_and_country)
Song.create(name: "Middle Of The Fire", album: kingdom_come, artist: for_king_and_country)
Song.create(name: "Desert Bloom", album: kingdom_come, artist: for_king_and_country)



puts "......................... done seeding."