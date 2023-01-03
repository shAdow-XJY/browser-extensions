const {getMessage} = chrome.i18n;

// console.log(getMessage('title'));

function initDom(id, content) {
    let tempDom = document.getElementById(id);
    tempDom.textContent = content;
}
initDom('title', 'title');
initDom('btn', 'change local language');

function refreshDom(id) {
    let tempDom = document.getElementById(id);
    tempDom.textContent = getMessage(id);
}

let btn = document.getElementById('btn');
btn.onclick = () => {
    refreshDom('title');
    refreshDom('btn');
}
