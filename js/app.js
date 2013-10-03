"use strict";

var questions = [
   {
      "question": "What is Canada's only officially bilingual province?",
      "answer": "New Brunswick",
   },
   {
      "question": "How many oceans border Canada?",
      "answer": "3",
   },
   {
      "question": "When did O Canada officially become Canada's national anthem?",
      "answer": "1980",
   },
   {
      "question": "Name the world's oldest chartered trading company?",
      "answer": "The Hudson's Bay Company",
   },
   {
      "question": "Which Canadian province is largest in area?",
      "answer": "Quebec",
   },
   {
      "question": "True or false:  a Canadian invented the sport of basketball",
      "answer": "True (Dr. James Naismith)",
   },
   {
      "question": "What is Canada's highest mountain?",
      "answer": "Mount Logan (Yukon)",
   },
   {
      "question": "Where is Canada's most northerly point?",
      "answer": "Cape Columbia (Nunavut)",
   },
   {
      "question": "Where is Canada's most southerly point?",
      "answer": "Point Pelee (Ontario)",
   },
   {
      "question": "Name a famous comic book character created by a Canadian",
      "answer": "Superman",
   },
   {
      "question": "How many time zones are there in Canada?",
      "answer": "6",
   },
   {
      "question": "What is the CFL's top prize?",
      "answer": "The Grey Cup",
   },
   {
      "question": "What Canadian city has the nickname (in some circles) 'Hollywood North'?",
      "answer": "Vancouver (sometimes also Toronto)",
   },
   {
      "question": "When is Canada's national day annually celebrated?",
      "answer": "July 1",
   },
   {
      "question": "What colour of bear is found in Nunavut?",
      "answer": "White",
   },
   {
      "question": "What world famous series of waterfalls exists in southern Ontario?",
      "answer": "Niagara Falls",
   },
   {
      "question": "Name the polar bear capital of the world",
      "answer": "Churchill, Manitoba",
   },
   {
      "question": "In what year did Canada become a country?",
      "answer": "1867",
   },
   {
      "question": "What Canadian currency went out of production in 2012?",
      "answer": "The penny",
   },
   {
      "question": "What Canadian university is currently home to part of Albert Einstein's brain?",
      "answer": "McMaster",
   },
   {
      "question": "Name Canada's two national sports",
      "answer": "Hockey and lacrosse",
   },
   {
      "question": "The theme song for the popular American sitcom 'The Big Bang Theory' is performed by which Canadian band?",
      "answer": "The Barenaked Ladies",
   },
   {
      "question": "What are Canada's two official national symbols?",
      "answer": "The maple leaf and the beaver",
   },
   {
      "question": "Where is the longest covered bridge in the world?",
      "answer": "Hartland, NB",
   },
   {
      "question": "Which name was shared by two CFL teams at the same time?",
      "answer": "Rough Riders",
   },
   {
      "question": "Which team has won the most Stanley cups?",
      "answer": "Montreal Canadiens",
   },
   {
      "question": "Who scored the winning goal in the 1972 Summit Series (not to be confused with tomorrow night's epic match)?",
      "answer": "Paul Henderson",
   },
   {
      "question": "The phrase hurry hard can be heard in which sport?",
      "answer": "Curling",
   },
   {
      "question": "The former province of Upper Canada is now known as what?",
      "answer": "Ontario",
   },
   {
      "question": "Of St John and St John's, which is a provincial capital?",
      "answer": "St. John's",
   },
   {
      "question": "What was the last province to join confederation?",
      "answer": "Newfoundland and Labrador (renamed from Newfoundland in 2001)",
   },
   {
      "question": "What was the last territory to join confederation?",
      "answer": "Nunavut",
   },
   {
      "question": "Which Toronto neighbourhood monarch was featured in a 1970s CBC sitcom?",
      "answer": "Kensington Market in 'King of Kensington' starring Al Waxman",
   },
   {
      "question": "Who is Canada's current head of state?",
      "answer": "Queen Elizabeth II",
   },
   {
      "question": "Where does Canada's total land area fall in world rankings (ex. seventh, eightieth)?",
      "answer": "Second",
   },
   {
      "question": "True or false:  over 50% of Vancouver residents do not speak English as their first language",
      "answer": "True (52%)",
   },
   {
      "question": "Who is Canada's current Prime Minister?",
      "answer": "Stephen Harper",
   },
   {
      "question": "Where was Canadian confederation signed?",
      "answer": "Charlottetown, PEI",
   },
   {
      "question": "With which other country does Canada share the world's longest undefended border?",
      "answer": "USA",
   },
   {
      "question": "Which Canadian Prime Minister is often credited with inventing the concept of UN peacekeeping missions?",
      "answer": "Lester B. Pearson",
   },
   {
      "question": "What do Canadians call their $1 coin?",
      "answer": "Loonie",
   },
   {
      "question": "What do Canadians call their $2 coin?",
      "answer": "Toonie",
   },
   {
      "question": "What's a 'double double'?",
      "answer": "A coffee with 2 cream and 2 sugar",
   },
   {
      "question": "What is the Canadarm?",
      "answer": "Space robotic manipulator often used on the Shuttle",
   },
   {
      "question": "What percentage of Canadians were Internet users in 2012?",
      "answer": "83%",
   },
   {
      "question": "What shape is a Robertson screwdriver head?",
      "answer": "Square",
   },
   {
      "question": "What is the oldest walled city still in existence north of Mexico?",
      "answer": "Quebec City",
   },
   {
      "question": "Whose face is on the Canadian ten dollar bill?",
      "answer": "John A. MacDonald",
      "image": "http://i1.ytimg.com/vi/Lo3tlzncKKM/maxresdefault.jpg",
   },
   {
      "question": "Name Canada's first prime minister",
      "answer": "John A. MacDonald",
   },
   {
      "question": "What was formerly the world's tallest free-standing structure?",
      "answer": "The CN Tower in Toronto",
   },
   {
      "question": "What uniquely Canadian 'thing' was used as the ball in the world's first computer mouse?",
      "answer": "A 5 pin bowling ball",
   },
   {
      "question": "What is the highest honour bestowed by the Canadian music industry?",
      "answer": "A Juno award",
   },
   {
      "question": "Is the average life expectancy for Canadians higher or lower than 80 years?",
      "answer": "Higher (81)",
   },
   {
      "question": "How many Canadian teams are there in the NHL?",
      "answer": "7",
   },
   {
      "question": "How many times has Canada hosted the Olympics?",
      "answer": "3",
   },
   {
      "question": "What is the name of Canada's current federal governing party?",
      "answer": "Conservative Party of Canada",
   },
   {
      "question": "What is the name of Canada's (and the world's) northernmost settlement?",
      "answer": "Alert",
   },
   {
      "question": "When was the current Maple Leaf Flag officially adopted?",
      "answer": "1965",
   },
   {
      "question": "When did Canada adopt the metric system?",
      "answer": "1970",
   },
   {
      "question": "True or false:  the average Canadian spends 42 minutes per year being chased by a loon (courtesy @stats_canada)",
      "answer": "Unknown",
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
   },
   {
      "question": "How many controversies surround Toronto's current mayor",
      "answer": "Error:  integer overflow",
   },
   {
      "question": "What city is the capital of Ontario?",
      "answer": "Toronto",
   },
   {
      "question": "What city is the capital of British Columbia?",
      "answer": "Victoria",
   },
   {
      "question": "When did the Toronto Maple Leafs last win the Stanley Cup?",
      "answer": "1967",
   },
   {
      "question": "When did the Vancouver Canucks last win the Stanley Cup?",
      "answer": "Never.  But they've only been in the NHL since 1970 so ...",
   },
   {
      "question": "With what letter do Toronto postal codes begin?",
      "answer": "M",
   },
   {
      "question": "In which Canadian cities does the Mozilla Corporation have offices",
      "answer": "Vancouver and Toronto",
   },
   {
      "question": "What long-running Canadian TV show was set north of Vancouver and featured log salvagers?",
      "answer": "The Beachcombers",
   },
   {
      "question": "Which city is more densely populated:  Toronto or Vancouver?",
      "answer": "Vancouver",
   },
   {
      "question": "Name Canada's national police force (acronym is lame but acceptable)",
      "answer": "Royal Canadian Mounted Police (RCMP)",
   },
   {
      "question": "How many provinces are there in Canada?",
      "answer": "10",
   },
   {
      "question": "How many territories are there in Canada?",
      "answer": "3",
   },
   {
      "question": "What annual Western Canadian 10-day event bills itself as 'The Greatest Outdoor Show on Earth'?",
      "answer": "The Calgary Stampede",
   },
   {
      "question": "What new Firefox OS UX initiative takes its name from an indigenous nation whose main territory is in BC?",
      "answer": "Haida",
   },
   {
      "question": "Which Canadian province most recently had a ban on alcohol?",
      "answer": "PEI (repealed in 1948)",
   },
   {
      "question": "What is 'Timmies'?",
      "answer": "Tim Hortons, Canada's largest fast food chain",
   },
   {
      "question": "What is a 'hoser'?",
      "answer": "A Canadian drunk (a term rarely used by Canadians)",
   },
   {
      "question": "True or false:  Captain Kirk is from Canada",
      "answer": "False (but William Shatner was born in Montreal!)",
   },
   {
      "question": "What Canadian singer was the first to receive a gold record in France?",
      "answer": "Celine Dion",
   },
   {
      "question": "What is the country most Canadians self-report their ethnic origin as?",
      "answer": "Canada",
   },
   {
      "question": "Whose nickname is 'The Great One'?",
      "answer": "Wayne Gretzky",
   },
   {
      "question": "What is the largest fully-Canadian-owned brewery?",
      "answer": "Moosehead",
   },
   {
      "question": "What Canadian province produces 3/4 of the world's maple syrup?",
      "answer": "Quebec",
   },
   {
      "question": "What was stolen in Quebec last year totally 2.7 million kg in mass?",
      "answer": "Maple syrup",
   },
   {
      "question": "What ingredients make up an official poutine?",
      "answer": "French fries, brown gravy, and cheese curds",
   },
   {
      "question": "Which of the following are not real Canadian cities?  Moose Jaw, Flin Flon, Firefox, Forget",
      "answer": "Firefox",
   },
   {
      "question": "Which is further south:  the southernmost point of Canada or the nothernmost point of California?",
      "answer": "The southernmost point of Canada",
   },
   {
      "question": "Which of the following Hollywood actors are not Canadian?  John Candy, Ryan Gosling, Jim Carrey, Patrick Dempsey, Mike Myers",
      "answer": "Patrick Dempsey",
   },
   {
      "question": "True or false:  there is a statue of a giant goose in Wawa, Ontario",
      "answer": "True",
      "image":  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Wawa_ON_3.jpg/449px-Wawa_ON_3.jpg",
   },
   {
      "question": "True or false:  in the 1950s, Canada's jet fighter was more awesome than the American equivalent",
      "answer": "Booya.  The Avro Arrow.",
   },
   {
      "question": "Followup to the previous:  Canada cancelled the Avro Arrow because the Americans asked us politely to do so",
      "answer": "True",
   },
   {
      "question": "True or false:  During Canada's cold and flu season, 'excuse me' rates increase by 1300%",
      "answer": "Unknown",
   },
   {
      "question": "What are St Pierre and Miquelon?",
      "answer": "French islands in the St. Lawrence",
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
