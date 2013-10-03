"use strict";

var questions = [
   {
      "question": "What is Canada's only officially bilingual province?",
      "answer": "New Brunswick",
      "image": "http://upload.wikimedia.org/wikipedia/commons/9/97/New_Brunswick-map.png",
   },
   {
      "question": "How many oceans border Canada?",
      "answer": "3",
   },
   {
      "question": "When did O Canada officially become Canada's national anthem?",
      "answer": "1980",
      "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/O_Canada_Original_Lyrics.png/651px-O_Canada_Original_Lyrics.png",
   },
   {
      "question": "Name the world's oldest chartered trading company?",
      "answer": "The Hudson's Bay Company",
      "image": "http://www.torontolife.com/daily/wp-content/uploads/2012/07/HBC.jpg",
   },
   {
      "question": "Which Canadian province is largest in area?",
      "answer": "Quebec",
      "image": "http://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Quebec_in_Canada.svg/905px-Quebec_in_Canada.svg.png",
   },
   {
      "question": "True or false:  a Canadian invented the sport of basketball",
      "answer": "True (Dr. James Naismith)",
      "image": "http://storage.canoe.ca/v1/dynamic_resize/sws_path/suns-prod-images/1297347205161_ORIGINAL.jpg?quality=80&size=650x",
   },
   {
      "question": "What is Canada's highest mountain?",
      "answer": "Mount Logan (Yukon)",
      "image": "http://upload.wikimedia.org/wikipedia/commons/4/4a/Mount_Logan.jpg",
   },
   {
      "question": "Where is Canada's most northerly point?",
      "answer": "Cape Columbia (Nunavut)",
      "image": "http://upload.wikimedia.org/wikipedia/commons/a/a2/Map_Canada_political-geo.png",
   },
   {
      "question": "Where is Canada's most southerly point?",
      "answer": "Point Pelee (Ontario)",
      "image": "http://upload.wikimedia.org/wikipedia/commons/c/c7/Pelee_Island_map.png",
   },
   {
      "question": "Name a famous comic book character created by a Canadian",
      "answer": "Superman",
      "image": "http://www.citynews.ca/files/2013/08/Superman-stamp-473x315.jpg",
   },
   {
      "question": "How many time zones are there in Canada?",
      "answer": "6",
      "image": "http://time-time.net/images/times/time-zones/usa-canada/canada-time-zone-map-full-size.png",
   },
   {
      "question": "What is the CFL's top prize?",
      "answer": "The Grey Cup",
      "image": "http://wpmedia.sports.nationalpost.com/2012/11/cfl.jpg?w=620",
   },
   {
      "question": "What Canadian city has the nickname (in some circles) 'Hollywood North'?",
      "answer": "Vancouver (sometimes also Toronto)",
      "image": "http://www.vancitybuzz.com/wp-content/uploads/2013/06/vancouver-hollywood-north.png",
   },
   {
      "question": "When is Canada's national day annually celebrated?",
      "answer": "July 1",
      "image": "http://www.chatterblock.com/blog/victoria-bc/files/2012/06/canada-day-victoria.jpg",
   },
   {
      "question": "What colour of bear is found in Nunavut?",
      "answer": "White",
      "image": "http://www.takequickbreak.com/wp-content/uploads/2013/08/Baby-Polar-Bear.jpg",
   },
   {
      "question": "What world famous series of waterfalls exists in southern Ontario?",
      "answer": "Niagara Falls",
      "image": "http://www.ruthschris.com/img/temp_images/niagara_falls_2.jpg",
   },
   {
      "question": "Name the polar bear capital of the world",
      "answer": "Churchill, Manitoba",
      "image": "http://media.winnipegfreepress.com/images/polar+bear+churchill.jpg",
   },
   {
      "question": "In what year did Canada become a country?",
      "answer": "1867",
      "image": "http://upload.wikimedia.org/wikipedia/commons/0/0a/Fathers_of_Confederation_LAC_c001855.jpg",
   },
   {
      "question": "What Canadian currency went out of production in 2012?",
      "answer": "The penny",
      "image": "http://upload.wikimedia.org/wikipedia/en/c/c5/Canadian_Penny_-_Reverse.png",
   },
   {
      "question": "Name Canada's two national sports",
      "answer": "Hockey and lacrosse",
      "image": "http://overholt.ca/hockeyandlacrosse.png",
   },
   {
      "question": "The theme song for the popular American sitcom 'The Big Bang Theory' is performed by which Canadian band?",
      "answer": "The Barenaked Ladies",
      "image": "https://upload.wikimedia.org/wikipedia/en/4/4f/BNL_BigBang.jpg",
   },
   {
      "question": "What are Canada's two official national symbols?",
      "answer": "The maple leaf and the beaver",
      "image": "http://thumbs.dreamstime.com/x/canada-day-beaver-holding-flag-5306481.jpg",
   },
   {
      "question": "Where is the longest covered bridge in the world?",
      "answer": "Hartland, NB",
      "image": "http://new-brunswick.net/new-brunswick/image1/hartland.jpg",
   },
   {
      "question": "Which name was shared by two CFL teams at the same time?",
      "answer": "Rough Riders (well, and Roughriders)",
      "image": "http://l.yimg.com/j/assets/p/sp/editorial_image/a1/a16014624e597357b3b6ba42528f5ff9/roughriders_vs_rough_riders_should_saskatchewan_control_ottawa.jpg",
   },
   {
      "question": "Which team has won the most Stanley cups?",
      "answer": "Montreal Canadiens",
      "image": "http://wpmedia.o.canada.com/2012/08/canadiens.gif",
   },
   {
      "question": "Who scored the winning goal in the 1972 Summit Series (not to be confused with tomorrow night's epic match)?",
      "answer": "Paul Henderson",
      "image": "http://www.carp.ca/wp-content/uploads/2012/08/henderson1.jpg",
   },
   {
      "question": "The phrase hurry hard can be heard in which sport?",
      "answer": "Curling",
      "image": "http://missioncurling.ca/wp-content/uploads/2012/07/IMG_0094_edited.jpeg",
   },
   {
      "question": "The former province of Upper Canada is now known as what?",
      "answer": "Ontario",
      "image": "http://www.slmc.uottawa.ca/content_images/244001e.jpg",
   },
   {
      "question": "Of St John and St John's, which is a provincial capital?",
      "answer": "St. John's",
      "image": "http://overholt.ca/stjohnssaintjohn.png",
   },
   {
      "question": "What was the last province to join confederation?",
      "answer": "Newfoundland and Labrador (renamed from Newfoundland in 2001)",
      "image": "http://wwp.greenwichmeantime.com/images/canada/newfoundland.jpg",
   },
   {
      "question": "What was the last territory to join confederation?",
      "answer": "Nunavut",
      "image": "http://wikitravel.org/upload/en/8/82/Nunavut-map.png",
   },
   {
      "question": "Which Toronto neighbourhood monarch was featured in a 1970s CBC sitcom?",
      "answer": "Kensington Market in 'King of Kensington' starring Al Waxman",
      "image": "http://www.northernstars.ca/actorsvz/media/waxman_statue2.jpg",
   },
   {
      "question": "Who is Canada's current head of state?",
      "answer": "Queen Elizabeth II",
      "image": "http://a.abcnews.go.com/images/International/gty_queen_elizabeth_ii_2013_lpl_130313_wg.jpg",
   },
   {
      "question": "Where does Canada's total land area fall in world rankings (ex. seventh, eightieth)?",
      "answer": "Second (behind only Russia)",
   },
   {
      "question": "True or false:  over 50% of Vancouver residents do not speak English as their first language",
      "answer": "True (52%)",
   },
   {
      "question": "Who is Canada's current Prime Minister?",
      "answer": "Stephen Harper",
      "image": "http://4.bp.blogspot.com/_jaogNeesHRk/S0UMBloShvI/AAAAAAAABos/R4qsHOp6D7o/s1600/stephen-harper-kitten.jpg",
   },
   {
      "question": "Where was Canadian confederation signed?",
      "answer": "Charlottetown, PEI",
      "image": "http://farm5.static.flickr.com/4152/4996072158_83c8ff6c56.jpg",
   },
   {
      "question": "With which other country does Canada share the world's longest undefended border?",
      "answer": "USA",
      "image": "http://www.canadiangeographic.ca/magazine/ja08/images/alacarte_sm.jpg",
   },
   {
      "question": "Which Canadian Prime Minister is often credited with inventing the concept of UN peacekeeping missions?",
      "answer": "Lester B. Pearson",
      "image": "http://www.lbphs.ca/media/pearsonman.jpg",
   },
   {
      "question": "What do Canadians call their $1 coin?",
      "answer": "Loonie",
      "image": "http://holycraptors.files.wordpress.com/2012/03/money-loonie5.jpg",
   },
   {
      "question": "What do Canadians call their $2 coin?",
      "answer": "Toonie",
      "image": "http://thecanadianreport.files.wordpress.com/2011/09/toonie.jpg",
   },
   {
      "question": "What's a 'double double'?",
      "answer": "A coffee with 2 cream and 2 sugar",
      "image": "http://farm5.staticflickr.com/4094/4788688783_e5581bbc33_z.jpg",
   },
   {
      "question": "What is the Canadarm?",
      "answer": "Space robotic manipulator often used on the Shuttle",
      "image": "http://www.ieee.ca/millennium/canadarm/canadarm_earth.jpg",
   },
   {
      "question": "What percentage of Canadians were Internet users in 2012?",
      "answer": "83%",
      "image": "http://www.cbc.ca/thisisthat/assets_c/2011/11/CANADIAN_INTERNET-thumb-300x273-142522.jpg",
   },
   {
      "question": "What shape is a Robertson screwdriver head?",
      "answer": "Square",
      "image": "http://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Robertson_screw.jpg/250px-Robertson_screw.jpg",
   },
   {
      "question": "What is the oldest walled city still in existence north of Mexico?",
      "answer": "Quebec City",
      "image": "http://i.gonoma.net/i/destinations/0205/Quebec/quebeccanons.gif",
   },
   {
      "question": "Whose face is on the Canadian ten dollar bill?",
      "answer": "John A. MacDonald",
      "image": "http://i1.ytimg.com/vi/Lo3tlzncKKM/maxresdefault.jpg",
   },
   {
      "question": "Name Canada's first prime minister",
      "answer": "John A. MacDonald",
      "image": "http://upload.wikimedia.org/wikipedia/commons/7/71/John_A_Macdonald_%28ca._1875%29.jpg",
   },
   {
      "question": "What was formerly the world's tallest free-standing structure?",
      "answer": "The CN Tower in Toronto",
      "image": "http://www.destination360.com/north-america/canada/images/s/canada-cn-tower.jpg",
   },
   {
      "question": "What uniquely Canadian 'thing' was used as the ball in the world's first computer mouse?",
      "answer": "A 5 pin bowling ball",
      "image": "https://upload.wikimedia.org/wikipedia/en/a/ab/DATAR_trackball.jpg",
   },
   {
      "question": "What is the highest honour bestowed by the Canadian music industry?",
      "answer": "A Juno award",
      "image": "http://awmusic.ca/1/photos/juno-award.jpg",
   },
   {
      "question": "Is the average life expectancy for Canadians higher or lower than 80 years?",
      "answer": "Higher (81)",
      "image": "",
   },
   {
      "question": "How many Canadian teams are there in the NHL?",
      "answer": "7",
      "image": "http://oilersnation.com/uploads/Image/7%20teams.JPG",
   },
   {
      "question": "How many times has Canada hosted the Olympics?",
      "answer": "3",
      "image": "http://www.corporate-eye.com/main/wp-content/uploads/2011/06/canadian-olympic-team-logo.jpg",
   },
   {
      "question": "What is the name of Canada's current federal governing party?",
      "answer": "Conservative Party of Canada",
      "image": "http://mscm-qc.org/wp-content/uploads/2013/03/conservative-party-of-canada-logo.jpg",
   },
   {
      "question": "What is the name of Canada's (and the world's) northernmost settlement?",
      "answer": "Alert",
      "image": "http://upload.wikimedia.org/wikipedia/commons/a/a2/Map_Canada_political-geo.png",
   },
   {
      "question": "When was the current Maple Leaf Flag officially adopted?",
      "answer": "1965",
      "image": "https://upload.wikimedia.org/wikipedia/en/c/cf/Flag_of_Canada.svg",
   },
   {
      "question": "When did Canada adopt the metric system?",
      "answer": "1970s",
   },
   {
      "question": "True or false:  the average Canadian spends 42 minutes per year being chased by a loon (courtesy @stats_canada)",
      "answer": "Unknown",
      "image": "http://images.nationalgeographic.com/wpf/media-live/photos/000/007/cache/common-loon_794_600x450.jpg",
   },
   {
      "question": "Which of the following musicians/bands are not Canadian?  Arcade Fire, Tegan and Sara, Bush, The Tragically Hip, Neil Young",
      "answer": "Bush",
   },
   {
      "question": "What nation's monarchy lived in Canada during part of the Second World War?",
      "answer": "the Netherlands",
   },
   {
      "question": "Where does Toronto fall in North American city population rankings?  1st, 5th, 9th, 17th",
      "answer": "5th",
   },
   {
      "question": "How many banks are considered to be Canada's 'major' banks?  3, 5, 8",
      "answer": "5",
      "image": "http://i.huffpost.com/gen/342333/thumbs/r-CANADA-BANKS-PROFIT-large570.jpg",
   },
   {
      "question": "How many controversies surround Toronto's current mayor?",
      "answer": "Error:  integer overflow",
      "image": "http://www.thestar.com/content/dam/thestar/news/city_hall/2012/01/03/in_rob_ford_the_opera_atwood_is_god/robford.jpeg.size.xxlarge.letterbox.jpeg",
   },
   {
      "question": "What city is the capital of Ontario?",
      "answer": "Toronto",
      "image": "http://www.cbc.ca/news2/interactives/before-after/toronto-condos/images/toronto-skyline-muise-after2012rb.jpg",
   },
   {
      "question": "What city is the capital of British Columbia?",
      "answer": "Victoria",
      "image": "http://crossfitzone.ca/wp-content/uploads/2013/08/a12.jpg",
   },
   {
      "question": "When did the Toronto Maple Leafs last win the Stanley Cup?",
      "answer": "1967",
      "image": "http://upload.wikimedia.org/wikipedia/en/thumb/f/fc/Toronto_Maple_Leafs_logo.svg/200px-Toronto_Maple_Leafs_logo.svg.png",
   },
   {
      "question": "When did the Vancouver Canucks last win the Stanley Cup?",
      "answer": "Never.  But they've only been in the NHL since 1970 so ...",
      "image": "http://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Vancouver_Canucks_logo.svg/200px-Vancouver_Canucks_logo.svg.png",
   },
   {
      "question": "With what letter do Toronto postal codes begin?",
      "answer": "M",
      "image": "http://www.businesssellcanada.com/images/pccanada.jpg",
   },
   {
      "question": "In which Canadian cities does the Mozilla Corporation have offices",
      "answer": "Vancouver and Toronto",
   },
   {
      "question": "What long-running Canadian TV show was set north of Vancouver and featured log salvagers?",
      "answer": "The Beachcombers",
      "image": "http://upload.wikimedia.org/wikipedia/en/2/29/CBCbeachcombers.jpg",
   },
   {
      "question": "Which city is more densely populated:  Toronto or Vancouver?",
      "answer": "Vancouver",
      "image": "http://www.seevancouverbc.com/5081-04a85and70.JPG",
   },
   {
      "question": "Name Canada's national police force (acronym is lame but acceptable)",
      "answer": "Royal Canadian Mounted Police (RCMP)",
      "image": "http://media.lonelyplanet.com/lpi/20113/20113-30/681x454.jpg",
   },
   {
      "question": "How many provinces are there in Canada?",
      "answer": "10",
      "image": "http://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Political_map_of_Canada.png/650px-Political_map_of_Canada.png",
   },
   {
      "question": "How many territories are there in Canada?",
      "answer": "3",
      "image": "http://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Political_map_of_Canada.png/650px-Political_map_of_Canada.png",
   },
   {
      "question": "What annual Western Canadian 10-day event bills itself as 'The Greatest Outdoor Show on Earth'?",
      "answer": "The Calgary Stampede",
      "image": "http://cs.calgarystampede.com/upload/slide/26/01/chucks-1.jpg",
   },
   {
      "question": "What new Firefox OS UX initiative takes its name from an indigenous nation whose main territory is in BC?",
      "answer": "Haida",
   },
   {
      "question": "Which Canadian province most recently had a ban on alcohol?",
      "answer": "PEI (repealed in 1948)",
      "image": "http://www.east-coast-golf-vacations.com/images/PEI.jpg",
   },
   {
      "question": "What is 'Timmies'?",
      "answer": "Tim Hortons, Canada's largest fast food chain",
      "image": "http://upload.wikimedia.org/wikipedia/en/thumb/8/85/Tim_Hortons_logo_%28original%29.svg/220px-Tim_Hortons_logo_%28original%29.svg.png",
   },
   {
      "question": "What is a 'hoser'?",
      "answer": "A Canadian drunk (a term rarely used by Canadians)",
      "image": "http://upload.wikimedia.org/wikipedia/en/2/28/Bob_and_Doug_McKenzie.jpg",
   },
   {
      "question": "True or false:  Captain Kirk is from Canada",
      "answer": "False (but William Shatner was born in Montreal!)",
      "image": "http://blogs.dallasobserver.com/unfairpark/Kirk_KHAAANvention2.jpg",
   },
   {
      "question": "What Canadian singer was the first to receive a gold record in France?",
      "answer": "Celine Dion",
      "image": "http://img2.timeinc.net/people/i/2011/database/110418/celine-dion-2.jpg",
   },
   {
      "question": "What is the country most Canadians self-report their ethnic origin as?",
      "answer": "Canada",
   },
   {
      "question": "Whose nickname is 'The Great One'?",
      "answer": "Wayne Gretzky",
      "image": "http://bigmouthsports.com/wp-content/uploads/2010/12/gretzky-cup-8-december-2010.jpg",
   },
   {
      "question": "What is the largest fully-Canadian-owned brewery?",
      "answer": "Moosehead",
      "image": "http://atlanticcanadabeerblog.files.wordpress.com/2012/05/moosehead.png",
   },
   {
      "question": "What Canadian province produces 3/4 of the world's maple syrup?",
      "answer": "Quebec",
      "image": "http://ed101.bu.edu/StudentDoc/Archives/ED101sp07/glake/sirop.jpg",
   },
   {
      "question": "What was stolen in Quebec last year totally 2.7 million kg in mass?",
      "answer": "Maple syrup (photo is the strategic maple syrup reserve)",
      "image": "http://www.francisvachon.com/blog/wp-content/photo/2011/04/Quebec-Maple-Syrup-strategic-reserve-02.jpg",
   },
   {
      "question": "What ingredients make up an official poutine?",
      "answer": "French fries, brown gravy, and cheese curds",
      "image": "http://labanquise.com/en/images/poutine-canada.jpg",
   },
   {
      "question": "Which of the following are not real Canadian cities?  Moose Jaw, Flin Flon, Firefox, Forget",
      "answer": "Firefox",
      "image": "http://upload.wikimedia.org/wikipedia/en/e/e3/Firefox-logo.svg",
   },
   {
      "question": "Which is further south:  the southernmost point of Canada or the nothernmost point of California?",
      "answer": "The southernmost point of Canada",
      "image": "http://barelybad.com/images/northofcanada05.gif",
   },
   {
      "question": "Which of the following Hollywood actors are not Canadian?  John Candy, Ryan Gosling, Jim Carrey, Patrick Dempsey, Mike Myers",
      "answer": "Patrick Dempsey",
      "image": "http://img2.timeinc.net/people/i/2006/celebdatabase/patrickdempsey/patrick_dempsey1_300_400.jpg",
   },
   {
      "question": "True or false:  there is a statue of a giant goose in Wawa, Ontario",
      "answer": "True",
      "image":  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Wawa_ON_3.jpg/449px-Wawa_ON_3.jpg",
   },
   {
      "question": "True or false:  in the 1950s, Canada's jet fighter was more awesome than its American equivalent",
      "answer": "Booya.  The Avro Arrow.",
      "image": "http://upload.wikimedia.org/wikipedia/en/6/6b/AvroArrow1.jpg",
   },
   {
      "question": "Followup to the previous:  Canada cancelled the Avro Arrow because the Americans asked us politely to do so",
      "answer": "True",
      "image": "http://data2.collectionscanada.gc.ca/ap/c/c006779.jpg",
   },
   {
      "question": "True or false:  During Canada's cold and flu season, 'excuse me' rates increase by 1300%",
      "answer": "Unknown",
   },
   {
      "question": "What are St Pierre and Miquelon?",
      "answer": "French islands in the St. Lawrence",
      "image": "http://www.weltrekordreise.ch/flags-maps/pm_map2.jpg",
   },
];

var quizzesApp = angular.module("quizzesApp", []);

quizzesApp.controller("slideCtrl", function($scope) {
  $scope.quizzes = questions;
});

angular.element(document).ready(function(){
  Reveal.initialize({
    controls: false,
    history: true,
    center: true,
    keyboard: true,
    loop: true,
    progress: false,
    transition: Reveal.getQueryHash().transition || 'linear', // default/cube/page/concave/zoom/linear/fade/none
  });
});
