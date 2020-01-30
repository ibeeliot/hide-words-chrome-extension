// function setup() {
//     const userInput = document.querySelector('#user-input');
//     const userText = userInput.value;

//     function pushToArray() {
//         const message = userText;
//     }
// }

const userSubmit = document.querySelector('#user-submit');

// declare const to grab id of user-input
const userInput = document.querySelector('#user-input');
const preciseInput = userInput.value;

// chrome.extension.getBackgroundPage().chrome.tabs.getSelected(null, function(tab) {
//     chrome.tabs.sendRequent(tab.id, { greeting: preciseInput }, function(response) {});
// });

// gets called when a user submits a new word for addition/removal from our arrayOfWords
// const updateArray = () => {
//     // chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//     //     chrome.tabs.executeScript(
//     //         tabs[0].id,
//     //         {
//     //             file: 'content.js'
//     //         },
//     //         function() {
//     //             chrome.tabs.sendMessage(tabs[0].id, {
//     //                 preciseInput
//     //             });
//     //         }
//     //     );
//     // });
//     function callDelete() {
//         const params = {
//             active: true,
//             currentWindow: true
//         };
//         chrome.tabs.query(gotTabs);

//         function gotTabs(tabs) {
//             const message = preciseInput;
//             const msg = {
//                 txt: hello
//             };
//             chrome.tabs.sendMessage(tabs[0].id, { message });
//         }
//     }
// };

// added event listener for when user clicks submits
userSubmit.addEventListener('submit', e => {
    // e.preventDefault();
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { greeting: preciseInput }, function(response) {
            console.log(3);
        });
    });
    userInput.value = '';
    e.preventDefault();
});

userInput.addEventListener('submit', e => {
    e.preventDefault();
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { greeting: preciseInput }, function(response) {
            console.log(3);
        });
    });
    userInput.value = '';
});
