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

/////////////
// Make sure finding elements is done case-insensitively
/////////////
const deleteStuff = () => {
    // this will grab all paragraph tags on the page and stored it in an elements array
    const pOnPage = Array.from(document.querySelectorAll('p'));
    // this will search our pOnPage for matching textContent
    const psWithMatchingText = pOnPage.filter(el => el.textContent.includes('You'));
    // delete each paragraph that matched
    psWithMatchingText.forEach(element => {
        element.remove();
    });

    const aOnPage = Array.from(document.querySelectorAll('a'));
    const asWithMatchingText = aOnPage.filter(el => el.textContent.includes('New'));
    // delete each paragraph that matched
    asWithMatchingText.forEach(element => {
        element.remove();
    });

    // // grabs spans on the page
    // const spanOnPage = Array.from(document.querySelectorAll('span'));
    // // COME BACK TO THIS AND MAYBE SELECT THE PARENT ELEMENT??
    // const spanWithMatchingText = spanOnPage.filter(el => el.innerText.includes('You'));
    // spanWithMatchingText.forEach(element => {
    //     // REFACTOR THIS BECAUSE THE .REMOVE METHOD DOESN'T WORK ON SPAN
    //     element.remove();
    // });

    // var pTags = document.getElementsByTagName("p");
    // var searchText = "You";
    // var found;

    // for (var i = 0; i < pTags.length; i++) {
    //   if (pTags[i].textContent == searchText) {
    //     found = pTags[i];
    //     break;
    //   }
    // }
};
