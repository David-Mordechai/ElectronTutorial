let request = require('request')

request("https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand&filter[post_per_page]=1", function name(err, response, body) {
    body = JSON.parse(body);
    let randomQuote = body[0]["content"].rendered;
    document.getElementById("quote").innerHTML = randomQuote;
})

setInterval(function () {
    const rndInt = Math.floor(Math.random(100) * 9) + 1
    console.log(rndInt);
    request("https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand&filter[post_per_page]=1", function (err, response, body) {
        body = JSON.parse(body);
        let randomQuote = body[rndInt]["content"].rendered;
        document.getElementById("quote").innerHTML = randomQuote;
    });
}, 5000);