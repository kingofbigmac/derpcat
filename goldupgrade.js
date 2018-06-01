var cookies = 0;

function cookieClick(number){
    cookies = cookies + number;
    document.getElementById("cookies").innerHTML = cookies;
};

var craigslistcats = 0;

function buyCraigslistcat(){
    var craigslistCost = Math.floor(25 * Math.pow(1.1,craigslistcats));     //works out the cost of this cursor
    if(cookies >= craigslistcatCost){                                   //checks that the player can afford the cursor
        craigslistcats = craigslistcats + 1;                                   //increases number of cursors
        cookies = cookies - craigslistcatCost;                          //removes the cookies spent
        document.getElementById('craigslistcats').innerHTML = craigslistcats;  //updates the number of cursors for the user
        document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(25 * Math.pow(1.1,craigslistcats));       //works out the cost of the next cursor
    document.getElementById('craigslistcatCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

window.setInterval(function(){

    cookieClick(craigslistcats);

}, 1000);

var adoptacats = 0;

function buyAdoptacat(){ //Some reason the capital letter is capitalized
    var adoptacatCost = Math.floor(1000 * Math.pow(1.01,adoptacats));     //works out the cost of this peasant
    if(cookies >= adoptacatCost){                                   //checks that the player can afford the peasant
        adoptacats = adoptacats + 10;                                   //increases number of peasants
        cookies = cookies - adoptacatCost;                          //removes the cookies spent
        document.getElementById('adoptacats').innerHTML = adoptacats;  //updates the number of peasants for the user
        document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(1000 * Math.pow(1.01,adoptacats));       //works out the cost of the next peasant
    document.getElementById('adoptacatCost').innerHTML = nextCost;  //updates the peasant cost for the user
};

window.setInterval(function(){

    cookieClick(adoptacats);

}, 1000);

var stealacats = 0;

function buyStealacat(){
    var stealacatCost = Math.floor(12000 * Math.pow(1.01,stealacats));     //works out the cost of this peasant
    if(cookies >= stealacatCost){                                   //checks that the player can afford the peasant
        stealacats = stealacats + 120;                                   //increases number of peasants
        cookies = cookies - stealacatCost;                          //removes the cookies spent
        document.getElementById('stealacats').innerHTML = stealacats;  //updates the number of peasants for the user
        document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(12000 * Math.pow(1.01,stealacats));       //works out the cost of the next peasant
    document.getElementById('stealacatCost').innerHTML = nextCost;  //updates the peasant cost for the user
};

 window.setInterval(function(){

    cookieClick(stealacats);

}, 1000);
