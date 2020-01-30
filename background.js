chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({ color: '#3aa757' }, function() {
        console.log('The color is green.');
    });
});
chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([
        {
            conditions: [
                new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: { hostEquals: 'developer.chrome.com' }
                })
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }
    ]);
});

// theoretically does something based on browser action
// chrome.browserAction.onClicked.addListener(buttonClicked);

// function buttonClicked(tab) {
//     // The user clicked the button!
//     // 'tab' is an object with information about the current open tab
//     alert('hey');
// }

const elementsOnPage = document.querySelectorAll('p');
elementsWithMatchingText = Array.from(elementsOnPage).filter(el => el.textContent.includes('You'));
elementsWithMatchingText.forEach(element => {
    element.remove();
});
console.log(elementsWithMatchingText);

// var pTags = document.getElementsByTagName("p");
// var searchText = "You";
// var found;

// for (var i = 0; i < pTags.length; i++) {
//   if (pTags[i].textContent == searchText) {
//     found = pTags[i];
//     break;
//   }
// }
