// TODO: background script
chrome.runtime.onInstalled.addListener(() => {
  alert('background')
})

const saveExtractedText = (data) => {
  // node.innerText
  return fetch('http://localhost:3000', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text: data, })
  });
}


chrome.runtime.onMessage.addListener(
  (request, sender, senderResponse) => {
    switch (request.message) {
      case 'text': {
        saveExtractedText(request.data).then(data => data.json()).then(senderResponse);
        break;
      }
      default:
    }
    return true
  }
);
