document.getElementById('scanButton').addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: "scan" }); // Envia mensagem para o background.js
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "scan") {
        chrome.scripting.executeScript({
            target: { tabId: sender.tab.id },
            files: ['content.js']
        });
    }
});


