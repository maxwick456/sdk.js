console.log("@2024 Maximus Weichers")
console.log("SDK.JS v0.01")
g = document.createElement('p');
g.setAttribute("id", "gameTitle");
g.setAttribute("style", "display: none;")
document.body.appendChild(g);
document.addEventListener("DOMContentLoaded", function() {
    // Select all iframes on the page
    const iframes = document.querySelectorAll('iframe');

    // Loop through each iframe and add the allowfullscreen attribute
    iframes.forEach(function(iframe) {
        iframe.setAttribute('allowfullscreen', '');
    });
});