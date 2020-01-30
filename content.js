let receivedText;
// chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
//     receivedText = request.greeting;
//     arrayOfWords.push(receivedText);
// });

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log(sender.tab ? `from a content script:${sender.tab.url}` : 'from the extension');
    if (request.greeting) {
        sendResponse({ farewell: 'goodbye' });
        arrayOfWords.push(request.greeting);
        deleteStuff();
    }
});

// keep this in for now to ensure file is firing properly
const elts = document.getElementsByTagName('p');
for (let i = 0; i < elts.length; i++) {
    elts[i].style['background-color'] = '#F0C';
}

// this is for USER input
const arrayOfWords = ['You', 'New'];

function deleteStuff(message = '', sender, sendResponse) {
    if (message !== '') {
        arrayOfWords.push(message);
    }
    // this will grab all paragraph tags on the page and stored it in an elements array
    const pOnPage = Array.from(document.querySelectorAll('p'));
    // this will search our pOnPage for matching textContent
    // const psWithMatchingText = pOnPage.filter(el => el.textContent.includes('You'));
    const psWithMatchingText = [];

    for (let i = 0; i < pOnPage.length; i++) {
        for (let j = 0; j < arrayOfWords.length; j++) {
            const newLowerCased = pOnPage[i].textContent.toLowerCase();
            // console.log('This is new Lower Cased:', newLowerCased);
            if (newLowerCased.includes(arrayOfWords[j].toLowerCase())) {
                psWithMatchingText.push(pOnPage[i]);
            }
        }
    }

    // delete each paragraph that matched
    psWithMatchingText.forEach(element => {
        element.remove();
    });

    const aOnPage = Array.from(document.querySelectorAll('a'));
    const asWithMatchingText = aOnPage.filter(el => el.textContent.toLowerCase().includes('New'));
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
}

deleteStuff();

// const gotMessage = (message, sender, sendResponse) => {
//     // message should evaluate to our updated arrayOfWords based on the user input
//     arrayOfWords.push(message);
//     deleteStuff();
// };

// chrome.runtime.onMessage.addListener(gotMessage);

// chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
//     console.log(3);
//     arrayOfWords.push(message);
//     deleteStuff();

//     console.log(sender.tab ? `from a content script:${sender.tab.url}` : 'from the extension');
//     if (message) sendResponse({ farewell: 'goodbye' });
// });
