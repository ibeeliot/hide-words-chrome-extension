chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log(sender.tab ? `from a content script:${sender.tab.url}` : 'from the extension');
    if (request.greeting == 'hello') sendResponse({ farewell: 'goodbye' });
});

const changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function(data) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function(element) {
    const color = element.target.value;
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id, {
            code: `document.body.style.backgroundColor = "${color}";`
        });
    });
};

// grab input from user, and send to content.js
// arrayOfWords.push(somethinggoeshere)

const userSubmit = document.querySelector('#user-submit');

// declare const to grab id of user-input
const userInput = document.querySelector('#user-input');

// added event listener for when user clicks submits
userSubmit.addEventListener('submit', e => {
    e.preventDefault();
    arrayOfWords.push(userInput.value);
    userInput.value = '';
});

userInput.addEventListener('submit', e => {
    e.preventDefault();
    arrayOfWords.push(userInput.value);
    userInput.value = '';
});

chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { greeting: 'hello' }, function(response) {
        console.log(response.farewell);
    });
});
