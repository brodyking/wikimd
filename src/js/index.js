// Variables

// Easy DOM modifier function
// Stolen from my old project
function dom(id,condition,content) {
    if (id == 'body') {
      switch (condition) {
        case 'set':
          document.body.innerHTML = content;
          break;
        case 'add':
          document.body.innerHTML += content;
          break;
      }
    } else {
      switch (condition) {
        case 'set':
          document.getElementById(id).innerHTML = content;
          break;
        case 'add':
          document.getElementById(id).innerHTML += content;
          break;
      }
    }
  }

// Used to include all other js files like pages.js

// Function that is going to be used in this doc
function includeJS(url) {
    var includeJSVar = document.createElement('script');
    includeJSVar.setAttribute('src','src/' + url);
    document.head.appendChild(includeJSVar);
}

// Function used for importing CSS
function includeCSS(url) {
    var includeCSSVar = document.createElement('link');
    includeCSSVar.setAttribute('rel','stylesheet');
    includeCSSVar.setAttribute('href','app/assets/css/' + url);
    document.head.appendChild(includeCSSVar);
}

// Page nav
dom("nav","set",`<!-- start of nav -->

  <span class="left">[ <a href="?page=Main Page"><b><pt>` + siteName + `</pt></b></a> / ` + siteDisc + ` ] </span> &nbsp; 
  <span class="right"> [ ` + siteNav + ` ] </span>

`)


var currentpage

function pageLoad(title) {
  fetch("data/" + title + ".md")
  .then(response => response.text())
  .then((data) => {
    var converter = new showdown.Converter(),
    text      = data,
    html      = converter.makeHtml(text);
    dom("content","set",html);
  })
} 

pageLoad(document.getElementById("pageparam").textContent);

if (siteMotd == "") {
  dom('motd','set',``)
} else {
  dom('motd','set',`<hr><div style="padding-right: 5px;padding-left: 5px;"><span>` + siteMotd + `</span></div><hr>`)
}
