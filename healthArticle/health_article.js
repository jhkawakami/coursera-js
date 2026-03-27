var xhr = new XMLHttpRequest();
var url = './health_article.json';

xhr.open('GET', url, true); // HTTP method "GET", URL of source, True (Asynchronous)
xhr.responseType = 'json';

xhr.onload = function(){
    console.log("I have loaded");
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');

articles.forEach(function(article) { // for each article
    var articleDiv = document.createElement('div'); // create a div
    articleDiv.classList.add('article'); // add article class to the div

    var title = document.createElement('h2'); // create header2
    title.textContent = article.title; // set the header2 to the article's title

    var description = document.createElement('p'); // create paragraph element
    description.textContent = article.description; // add the article's description to the text content

    var waysHeader = document.createElement('h3'); // create header 3
    waysHeader.textContent = 'Ways to Achieve:'; // set header 3 text

    var waysList = document.createElement('ul'); // create unordered list
    article.ways_to_achieve.forEach(function(way) { // iterate through "ways to achieve"
        var listItem = document.createElement('li'); // create list item
        listItem.textContent = way; // add one "way to achieve" as the text content of hte list item
        waysList.appendChild(listItem); // add the list item to the unordered list
});

var benefitsHeader = document.createElement('h3'); // create header 3
benefitsHeader.textContent = 'Benefits:'; // set "benefits" as text for header 3

var benefitsList = document.createElement('ul'); // create another unordered list
article.benefits.forEach(function(benefit) { // create list items and add to unordered list
    var listItem = document.createElement('li');
    listItem.textContent = benefit;
    benefitsList.appendChild(listItem);
});

// within the div, add everything.
articleDiv.appendChild(title); 
articleDiv.appendChild(description);
articleDiv.appendChild(waysHeader);
articleDiv.appendChild(waysList);
articleDiv.appendChild(benefitsHeader);
articleDiv.appendChild(benefitsList);

articlesDiv.appendChild(articleDiv);
})};

xhr.send();