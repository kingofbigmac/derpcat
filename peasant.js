var cookies = 0;

function cookieClick(number){
    cookies = cookies + number;
    document.getElementById("cookies").innerHTML = cookies;
};

var peasants = 0;

function buyPeasant(){
    var peasantCost = Math.floor(100 * Math.pow(1.1,peasants));     //works out the cost of this peasant
    if(cookies >= peasantCost){                                   //checks that the player can afford the peasant
        peasants = peasants + 10;                                   //increases number of peasants
    	cookies = cookies - peasantCost;                          //removes the cookies spent
        document.getElementById('peasants').innerHTML = peasants;  //updates the number of peasants for the user
        document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(100 * Math.pow(1.01,peasants));       //works out the cost of the next peasant
    document.getElementById('peasantCost').innerHTML = nextCost;  //updates the peasant cost for the user
};

window.setInterval(function(){
	
	cookieClick(peasants);
	
}, 1000);
