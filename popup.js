const changeColor = document.getElementById('changeColor');

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
// };

chrome.storage.sync.get('color', function(data) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function(element) {
    // deleteStuff();
    const color = element.target.value;
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        deleteStuff();
        chrome.tabs.executeScript(tabs[0].id, {
            code: `document.body.style.backgroundColor = "${color}";`
        });
    });
};

// grab input from user, and send to content.js
// arrayOfWords.push(somethinggoeshere)

const userSubmit = document.querySelector('#user-submit');
// console.log(userSubmit);

console.log('this is testing ARRAY fro content.js', arrayofWords);
// console.log(3);

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
