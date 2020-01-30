const changeColor = document.getElementById('changeColor');

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
