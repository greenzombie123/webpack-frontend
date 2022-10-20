# webpack-frontend

```javascript
function initialPageLoad(){
    const homeContent = createContent()
    styleContent(elements)
    appendContent(elements)
    return homeContent
}

function loadHomePage(){
    remove content div (removeContent())
    change textContent of header text  (changeHeaderText())
}

function createContent(){
    const header = //cretae head
    return {header, etc} // 
}

function styleContent(content){
    content.header.classList.add()
}

function appendContent(content){
    body.appendChild(content.hero_background)
}

function changeHeaderText(text){

}

function changeLinkColor(linkName){

}

function removeContent(parent) {
    const content = document.querySelect(".content")
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}


//index.js


    function loadContent(callback){
        //call callback function
    }

    loadContent(initialPageLoad)

    const homelink = //find home link
    const recipeslink = //find recipes link
    const serviceslink = //fdinf services link

    homelink.addeventListener('click', )

```

when everything is loaded, create elements
give them their class names
add them to the DOM

get references of links

when press link,
delete current dom elements
create new elements and style them

```javascript
function loadServicesPage() {}

function createContent() {}

function styleContent() {
  //style elements
}

function appendContent() {
  //append elements
}

function changeHeaderText(text){

}

function changeLinkColor(linkName){

}

function removeContent(parent) {
    const content = document.querySelect(".content")
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

```

helper
homepage
servicespage
recipespage
index