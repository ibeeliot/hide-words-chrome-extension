// keep this in for now to ensure file is firing properly
const elts = document.getElementsByTagName('p');
for (let i = 0; i < elts.length; i++) {
    elts[i].style['background-color'] = '#F0C';
}

// this is for USER input
const arrayOfWords = ['You', 'New', 'While', 'CNN'];
console.log(arrayOfWords);

// declare const to enact addEventHandler to submit type input to handle data of user-iput
// const userSubmit = document.querySelector('#user-submit');
// console.log(userSubmit);

// // declare const to grab id of user-input
// const userInput = document.querySelector('#user-input');

// // added event listener for when user clicks submits
// userSubmit.addEventListener('submit', e => {
//     e.preventDefault();
//     arrayOfWords.push(userInput.value);
//     userInput.value = '';
// });

// userInput.addEventListener('submit', e => {
//     e.preventDefault();
//     arrayOfWords.push(userInput.value);
//     userInput.value = '';
// });

const deleteStuff = () => {
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

deleteStuff();