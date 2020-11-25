// ==UserScript==
// @name         Proper StackOverflow sorting
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Author's "the best" mark is treated as 10 regular upvotes. Otherwise it doesn't give any advantage. Then all answers are sorted descending by rating
// @author       github.com/muRn
// @match        https://stackoverflow.com/questions/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log("ignore the best mark script running");
    
    var parentElement = document.getElementById("answers");
    
    // cutting out all answers content into fragments: header, all answers and footer
    var fragments = [];
    var currentFragment = null;
    var currentRating = 99999; // header rating
    while (parentElement.children.length > 0) {
        var currentElem = parentElement.children[0];
        if (currentElem.tagName==="A") {
            if (currentFragment!==null) {
                fragments.push({fragment: currentFragment, rating: currentRating});
            }
            currentFragment = document.createDocumentFragment();
        }

        var currentId = currentElem.getAttribute("id");
        if (currentId!==null && currentId.startsWith("answer-")) {
            var ratingElement = currentElem.querySelector(".js-vote-count");
            currentRating = parseInt(ratingElement.getAttribute("data-value"));
            if (currentElem.getAttribute("class").contains("accepted-answer")) {
                currentRating += 10; // let's weight author's opinion x10 from regular opinion
            }
        }

        currentFragment.appendChild(currentElem);
    }

    fragments.push({fragment: currentFragment, rating: -99999}); // footer

    fragments.sort((x, y) => {
        return y.rating - x.rating; // sorting descending
    });

    // adding fragments back to the page
    for (let i=0; i<fragments.length; i++) {
        parentElement.appendChild(fragments[i].fragment);
    }
})();
