
function createElement(data){
    const newp = document.createElement("p");
    newp.textContent = data;
    document.body.appendChild(newp);

}

function queryWikipedia(callback){
    const url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*';
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        console.log(xhttp.responseText);
        const response = JSON.parse(xhttp.responseText);
        const pages = response.query.pages;
        const pageId = Object.keys(pages)[0];
        const extract = pages[pageId].extract;
        console.log(extract);

        callback(extract);
      }
      
      xhttp.open("GET", url);
      xhttp.send();

}

queryWikipedia(createElement);
