
const fetch = require("node-fetch"); 

const url = "http://10.0.1.113:3000/"; 

//fetch 10 web pages in the first 10 seconds 
for(let i = 0; i < 10; ++i){
    fetch(url);
}

//fetch 10 web pages every following 10 seconds 
setInterval( async () => {
    for(let i = 0; i < 10; ++i){
        await fetch(url);
    }
}, 10000);  


