// keep this in for now to ensure file is firing properly
const elts = document.getElementsByTagName('p');
for (let i = 0; i < elts.length; i++) {
    elts[i].style['background-color'] = '#F0C';
}

// const alts = document.getElementsByTagName('a');
// for (let j = 0; j < alts.length; j++) {
//     elts[j].style['background-color'] = 'green';
// }
// const spns = document.getElementsByTagName('span');
// for (let k = 0; k < spns.length; k++) {
//     elts[k].style['background-color'] = 'blue';
// }



// this is for USER input
const arrayOfWords = ['Trump',
    // 'police',
    // 'democrat',
    // 'politic',
    // 'republican',
    // 'conservative',
    // 'liberal',
    // 'pelosi',
    // 'g.o.p',
    // 'gop',
    // 'president',
    // 'red state',
    // 'blue state',
    // 'supreme court',
    // 'culture war',
    // 'racist',
    // 'nazi',
    // 'commie',
    // 'communist',
    // 'socialist',
    // 'impeach',
    // 'white house',
    // 'rand paul',
    // 'impeachment',
];

// // declare const to enact addEventHandler to submit type input to handle data of user-iput
const userSubmit = document.getElementById("user-submit");
console.log(userSubmit);
// null
// console.log('This is userSubmit', userSubmit);

// // declare const to grab id of user-input
const userInput = document.querySelector('#user-input'); // null
// console.log('This is userInput', userInput);

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

/* grab user data and then bring into the column*/


const deleteStuff = () => {
    // alert("deleted");
    // this will grab all paragraph tags on the page and stored it in an elements array
    const pOnPage = Array.from(document.querySelectorAll('p'));
    // this will search our pOnPage for matching textContent
    // const psWithMatchingText = pOnPage.filter(el => el.textContent.includes('You'));
    const psWithMatchingText = [];

    const aOnPage = Array.from(document.querySelectorAll('a'));

    const spanOnPage = Array.from(document.querySelectorAll('span'));
    console.log('This is span on page', spanOnPage);

    let concatedElements = pOnPage.concat(aOnPage, spanOnPage);
    // const asWithMatchingText = aOnPage.filter(el => el.textContent.toLowerCase().includes('New'));
    // delete each paragraph that matched
    // asWithMatchingText.forEach(element => {

    //     element.remove();
    // });
    // Loops through ArrayOfWords & pOnPage to see if the pOnPage array matches with anything from  arrayOfWords 
    for (let i = 0; i < concatedElements.length; i++) {
        for (let j = 0; j < arrayOfWords.length; j++) {
            const newLowerCased = concatedElements[i].textContent.toLowerCase();
            // console.log('This is new Lower Cased:', newLowerCased);
            if (newLowerCased.includes(arrayOfWords[j].toLowerCase())) {
                psWithMatchingText.push(concatedElements[i]);
                console.log('This is words to be deleted:', psWithMatchingText)
            }
        }
    }

    // delete each paragraph that matched 
    psWithMatchingText.forEach(element => {
        // element.forEach(child => {
        //         child.remove();
        //     })
        let image = document.createElement('img');
        // var div = document.getElementById('flex-cat-gen');
        image.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
        image.setAttribute('id', 'cat-images')
            // element.appendChild(image);
        element.parentElement.appendChild(image);
        element.innerHTML = `TRUMP SUCKS. <br> YOU\'RE WELCOME <br> ENJOY CATS <br> INSTEAD! =]`;
        element.setAttribute("style", "color:red; border: 1px solid blue; font-weight: 900;");
        // element.parentNode.insertBefore(image);
    });
    // alert("Delete function invoked!")
}

// deleteStuff();


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

// to run function on page load 

// deleteStuff();


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


console.log("IS REACHING TO FUNCTION");
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    // alert('HELLOOO');
    e.preventDefault();
    console.log("this is user Input", userInput);
    console.log("this is user input", userInput);
    // test delete everything on page
    // document.body.innerHTML = "";
    // runs delete again;
    deleteStuff();
    // runs delete helper function
    // deleteStuff();
    // alert(e.target.value);
    return false;
})

form.dispatchEvent(new Event('submit'));