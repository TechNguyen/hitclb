const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': '43a1ad958amshc3c6dd362961858p19ddc9jsnf9b3ae3ad23c',
		'X-RapidAPI-Host': 'tiktok-unauthorized-api-scraper-no-watermark-analytics-feed.p.rapidapi.com'
	},
	body: '{"username":"","amount_of_posts":0}'
};

fetch('https://tiktok-unauthorized-api-scraper-no-watermark-analytics-feed.p.rapidapi.com/api/search_full', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));