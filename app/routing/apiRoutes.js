var friends = require('../data/friends.js');
console.log(friends);
module.exports = function(app) {
	
	app.get('/api/friends', function(req, res) {
		res.json(friends);
		

	});

	app.post('/api/friends', function(req, res) {
	

		var bestMatch = {
      		name: "",
      		img: "",
      		friendDifference: 1000
    	};
	  
		

		var userData = req.body;
		var userScores = userData.score;
		console.log(userScores);
		
		

	    var totalDifference = 0;


	    for (var i = 0; i < friends.length; i++) {
	    	console.log(friends[i]);
	    	totalDifference = 0;
	    
			for (var j = 0; j < friends[i].scores[j]; j++) {
	
			totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
			
				

			if (totalDifference <= bestMatch.friendDifference) {
				bestMatch.name = friends[i].name;
				bestMatch.img = friends[i].img;
				bestMatch.friendDifference = totalDifference;
				console.log("bestMatch.name: " + bestMatch.name);
				console.log("bestMatch.totalDifference: " + bestMatch.totalDifference);

			}
			
			

			}

			console.log("bestMatch" + bestMatch.name);
		
			console.log("bestMatch.img: " + bestMatch.img);
		
		}

		friends.push(userData);
		
		res.json(bestMatch);



  	});
  	
}
