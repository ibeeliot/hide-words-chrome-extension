// came predefined with chrome
// chrome.runtime.onInstalled.addListener(function() {
//     chrome.storage.sync.set({ color: '#3aa757' }, function() {
//         console.log('The color is green.');
//     });
// });
// chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
//     chrome.declarativeContent.onPageChanged.addRules([
//         {
//             conditions: [
//                 new chrome.declarativeContent.PageStateMatcher({
//                     pageUrl: { hostEquals: 'developer.chrome.com' }
//                 })
//             ],
//             actions: [new chrome.declarativeContent.ShowPageAction()]
//         }
//     ]);
// });

const buttonClicked = () => {
    // msg should be the arrayOfWords so we can pass it between content and the popup
    const msg = {
        txt: 'hello'
    };
    chrome.tabs.sendMessage(tab.id, msg);
};

// might not do anything but should open the tab?
chrome.browserAction.onClicked.addListener(buttonClicked);

// chrome.runtime.onMessage.addListener(gotMessage);

// const gotMessage = (message, sender, sendResponse) => {
//     console.log(message);
// };
