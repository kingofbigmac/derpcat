var peasant = 0;

function peasantClick(number){
    peasant = peasant + number;
    document.getElementById("peasant").innerHTML = peasant;
};

var peasants = 0;

function buyPeasant(){
    var peasantCost = Math.floor(100 * Math.pow(1.1,peasants));     //works out the cost of this cursor
    if(peasant >= peasantCost){                                   //checks that the player can afford the cursor
        peasants = peasants + 1;                                   //increases number of peasants
    	peasant = peasant - peasantCost;                          //removes the peasant spent
        document.getElementById('peasants').innerHTML = peasants;  //updates the number of peasants for the user
        document.getElementById('peasant').innerHTML = peasant;  //updates the number of peasant for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,peasants));       //works out the cost of the next cursor
    document.getElementById('peasantCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

window.setInterval(function(){
	
	peasantClick(peasants);
	
}, 1000);
