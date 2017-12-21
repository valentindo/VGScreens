$(function(){
	console.log('Ready');

	var base64key = "RkdBVEd6S3VDMzlKWlNhWExrZFdJY2ZpYjpCSEQ4SkpyS3ViVmg0R3F2c0VEOWp6VmdsM01XRjE1dFlQcmpoQkxkYUswNXkxRnViMg==";

	var bearerToken = "AAAAAAAAAAAAAAAAAAAAAAT13QAAAAAAei2F4zKVZdLJHrLWDg3F0T1LZHo%3DrCuBuSwgOw5LcvGDkmp0AF96Q1LalcBgrdj8WCMOf3tbXKSVvb";

	console.log(response);
	console.log(response[0]);

	// Get Bearer Token
	// $.ajax({
	// 	url: "https://api.twitter.com/oauth2/token",
	// 	async: true,
  	// 	crossDomain: true,
	// 	methode: "POST",
	// 	dataType: "json",
	// 	data: "grant_type=client_credentials",
	// 	headers: {
	// 		"Authorization":"Basic " + base64key,
	// 		"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"
	// 	}
	// }).done(function(res) {
	// 	console.log(res);
	// });

	// Get user_timeline
	$.ajax({
		url: "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=vgscreenfeed&count=200&exclude_replies=true&include_rts=false",
		async: true,
		crossDomain: true,
		method: GET,
		dataType: "json",
		headers: {
			"Authorization":"Bearer " + bearerToken
		}
	}).done(function(res){
		console.log(res);
	});
});
