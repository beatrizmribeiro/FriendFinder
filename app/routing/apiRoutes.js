var friends = require("../data/friends.js")

module.exports= function(app){

	//api get request
	app.get("/api/friends", function(req, res){
		res.json(friends)
	});


	//api post request
	app.post("/api/friends", function(req, res){
		
		for(var i = 0; i < req.body.scores.length; i++){
			var ints = parseInt(req.body.scores[i]);
			req.body.scores[i] = ints;
		}

		friends.push(req.body);

		var mostCompatible = 0;
		var lowestDif = 50;

		for(var i = 0; i < friends.length - 1; i++){
			var totalDifference = 0;
		
			for(var j = 0; j < friends[i].scores.length; j++){
				totalDifference += Math.abs(friends[i].scores[j] - req.body.scores[j]);
			}

			if(totalDifference < lowestDif){
				mostCompatible = i;
				lowestDif = totalDifference;
			}
		}

		res.send(friends[mostCompatible]);
	});

};



