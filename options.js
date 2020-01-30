const page = document.getElementById('buttonDiv');
// this can become an empty array, where users can push their input words as options to filer (?)
const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];
function constructOptions(kButtonColors) {
    for (const item of kButtonColors) {
        const button = document.createElement('button');
        button.style.backgroundColor = item;
        button.addEventListener('click', function() {
            // the chrome.storage.sync property is IMPORTANT! It allows us to pass stuff between sections of the chrome extension
            chrome.storage.sync.set({ color: item }, function() {
                console.log(`color is ${item}`);
            });
        });
        page.appendChild(button);
    }
}
constructOptions(kButtonColors);
