var peasant = 0;

function cookieClick(number){
    peasant = peasant + number;
    document.getElementById("peasant").innerHTML = peasant;
};

var cursors = 0;

function buyCursor(){
    var cursorCost = Math.floor(100 * Math.pow(1.1,cursors));     //works out the cost of this cursor
    if(peasant >= cursorCost){                                   //checks that the player can afford the cursor
        cursors = cursors + 1;                                   //increases number of cursors
    	peasant = peasant - cursorCost;                          //removes the peasant spent
        document.getElementById('cursors').innerHTML = cursors;  //updates the number of cursors for the user
        document.getElementById('peasant').innerHTML = peasant;  //updates the number of peasant for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,cursors));       //works out the cost of the next cursor
    document.getElementById('cursorCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

window.setInterval(function(){
	
	cookieClick(cursors);
	
}, 1000);
