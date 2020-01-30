// function setup() {
//     noCanvas();
//     const userinput = select('#user-input');
//     userinput.input(sendText);

//     function sendText() {
//         let noTimerYet = true;
//         if (noTimerYet) {
//             noTimerYet = false;
//             setTimeout(() => {}, 1500);
//             //Value got from input field in popup
//             const message = userinput.value();
//             //Sending message to content
//             chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//                 chrome.tabs.sendMessage(tabs[0].id, message);
//                 noTimerYet = true;
//             });
//         }
//     }
// }