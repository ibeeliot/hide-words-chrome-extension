// let noTimerYet = true;
// if (noTimerYet) {
//     noTimerYet = false;
//     setTimeout(() => {
//         chrome.runtime.onMessage.addListener(deleteStuff);
//         noTimerYet = true;
//     }, 1500);
// }

// // keep this in for now to ensure file is firing properly
// const elts = document.getElementsByTagName('p');
// for (let i = 0; i < elts.length; i++) {
//     elts[i].style['background-color'] = '#F0C';
// }

// this is for USER input
const arrayOfWords = [
    'trump',
    'police',
    'democrat',
    'politic',
    'republican',
    'conservative',
    'liberal',
    'pelosi',
    'g.o.p',
    'gop',
    'president',
    'red state',
    'blue state',
    'supreme court',
    'culture war',
    'racist',
    'nazi',
    'commie',
    'communist',
    'socialist',
    'impeach',
    'white house'
];

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
    const asWithMatchingText = [];
    for (let i = 0; i < aOnPage.length; i++) {
        for (let j = 0; j < arrayOfWords.length; j++) {
            const newLowerCased = aOnPage[i].textContent.toLowerCase();
            // console.log('This is new Lower Cased:', newLowerCased);
            if (newLowerCased.includes(arrayOfWords[j].toLowerCase())) {
                asWithMatchingText.push(aOnPage[i]);
            }
        }
    }

    // delete each paragraph that matched
    asWithMatchingText.forEach(element => {
        element.remove();
    });

    const h1onPage = Array.from(document.querySelectorAll('a'));
    const h1match = [];
    for (let i = 0; i < h1onPage.length; i++) {
        for (let j = 0; j < arrayOfWords.length; j++) {
            const newLowerCased = h1onPage[i].textContent.toLowerCase();
            // console.log('This is new Lower Cased:', newLowerCased);
            if (newLowerCased.includes(arrayOfWords[j].toLowerCase())) {
                h1match.push(h1onPage[i]);
            }
        }
    }

    // delete each paragraph that matched
    h1match.forEach(element => {
        element.remove();
    });

    const h2onpage = Array.from(document.querySelectorAll('a'));
    const h2match = [];
    for (let i = 0; i < h2onpage.length; i++) {
        for (let j = 0; j < arrayOfWords.length; j++) {
            const newLowerCased = h2onpage[i].textContent.toLowerCase();
            // console.log('This is new Lower Cased:', newLowerCased);
            if (newLowerCased.includes(arrayOfWords[j].toLowerCase())) {
                h2match.push(h2onpage[i]);
            }
        }
    }

    // delete each paragraph that matched
    h2match.forEach(element => {
        element.remove();
    });

    const h3onpage = Array.from(document.querySelectorAll('a'));
    const h3page = [];
    for (let i = 0; i < h3onpage.length; i++) {
        for (let j = 0; j < arrayOfWords.length; j++) {
            const newLowerCased = h3onpage[i].textContent.toLowerCase();
            // console.log('This is new Lower Cased:', newLowerCased);
            if (newLowerCased.includes(arrayOfWords[j].toLowerCase())) {
                h3page.push(h3onpage[i]);
            }
        }
    }

    // delete each paragraph that matched
    h3page.forEach(element => {
        element.remove();
    });

    const h4onpage = Array.from(document.querySelectorAll('a'));
    const h4stuff = [];
    for (let i = 0; i < h4onpage.length; i++) {
        for (let j = 0; j < arrayOfWords.length; j++) {
            const newLowerCased = h4onpage[i].textContent.toLowerCase();
            // console.log('This is new Lower Cased:', newLowerCased);
            if (newLowerCased.includes(arrayOfWords[j].toLowerCase())) {
                h4stuff.push(h4onpage[i]);
            }
        }
    }

    // delete each paragraph that matched
    h4stuff.forEach(element => {
        element.remove();
    });

    const h5s = Array.from(document.querySelectorAll('a'));
    const h5onpage = [];
    for (let i = 0; i < h5s.length; i++) {
        for (let j = 0; j < arrayOfWords.length; j++) {
            const newLowerCased = h5s[i].textContent.toLowerCase();
            // console.log('This is new Lower Cased:', newLowerCased);
            if (newLowerCased.includes(arrayOfWords[j].toLowerCase())) {
                h5onpage.push(h5s[i]);
            }
        }
    }

    // delete each paragraph that matched
    h5onpage.forEach(element => {
        element.remove();
    });

    const h6onpage = Array.from(document.querySelectorAll('a'));
    const h6stuff = [];
    for (let i = 0; i < h6onpage.length; i++) {
        for (let j = 0; j < arrayOfWords.length; j++) {
            const newLowerCased = h6onpage[i].textContent.toLowerCase();
            // console.log('This is new Lower Cased:', newLowerCased);
            if (newLowerCased.includes(arrayOfWords[j].toLowerCase())) {
                h6stuff.push(h6onpage[i]);
            }
        }
    }

    // delete each paragraph that matched
    h6stuff.forEach(element => {
        element.remove();
    });

    // // grabs spans on the page
    const spanOnPage = Array.from(document.querySelectorAll('span'));
    // COME BACK TO THIS AND MAYBE SELECT THE PARENT ELEMENT??
    const spanWithMatchingText = [];
    for (let i = 0; i < spanOnPage.length; i++) {
        for (let j = 0; j < arrayOfWords.length; j++) {
            const newLowerCased = spanOnPage[i].textContent.toLowerCase();
            // console.log('This is new Lower Cased:', newLowerCased);
            if (newLowerCased.includes(arrayOfWords[j].toLowerCase())) {
                spanWithMatchingText.push(spanOnPage[i]);
            }
        }
    }

    spanWithMatchingText.forEach(element => {
        element.parentNode.removeChild();
    });
}

deleteStuff();
