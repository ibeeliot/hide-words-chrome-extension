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

//     function pushToArray() {
//         const message = userText;
//     }
// }


// TEST
// const arrayOfWords = ['You', 'New', 'While', 'United', 'CNN'];

// console.log('this is array of words', arrayOfWords)

chrome.storage.sync.get('color', function(data) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function(element) {
    // deleteStuff();
    const color = element.target.value;
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id, {
            code: `document.body.style.backgroundColor = "${color}";`
        });
    });
};

// const userSubmit = document.querySelector('#user-submit');
// console.log('this is userSubmit', userSubmit);

// // console.log(3);

// // declare const to grab id of user-input
// const userInput = document.querySelector('#user-input').value;
// console.log('this is userSubmit', userInput);

// grab input from user, and send to content.js
// arrayOfWords.push(somethinggoeshere)

// const userSubmit = document.querySelector('#user-submit');
// // // console.log(userSubmit);
// // console.log('This is local storage:', localStorageTest);

// // console.log('this is testing ARRAY fro content.js', arrayofWords);
// // // console.log(3);

// // // declare const to grab id of user-input
// const userInput = document.querySelector('#user-input').value;



// // // added event listener for when user clicks submits

// function keyToDelete() {
//     alert("successful traversal into function");
//     userSubmit.addEventListener('submit', (e) => {
//         e.preventDefault();
//         alert("hey");
//         arrayOfWords.push(userInput);
//         userInput.value = '';
//     });

//     userInput.addEventListener('submit', (e) => {
//         e.preventDefault();
//         alert("hey2");
//         arrayOfWords.push(userInput);
//         userInput.value = '';
//     });
// }

// console.log("IS REACHING TO FUNCTION");
// const form = document.querySelector('form');
// form.addEventListener('submit', function(e) {
//     console.log(e)
//     console.log('HELLLO');
//     return false;
// })
// form.dispatchEvent(new Event('submit'));
/**/