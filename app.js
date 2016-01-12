"use strict";
$(document).ready(function(){

	console.log("coucou");

    $.getJSON("https://api.twitter.com/1.1/statuses/user_timeline.json",
    {
        screen_name: 'dojo',
        count: '5'
    },

    function (data) {
        alert("IT WORKED!");
    });
	/*
	$.ajax({
		dataType: "json",
		url: "https://api.twitter.com/1.1/search/tweets.json?q=from%3ACmdr_Hadfield%20%23nasa&result_type=popular",
		data: {simplonco},
		success: function(data) {
			$
		},
	});
*/
});
