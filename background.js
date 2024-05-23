chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    setTimeout(() => {
      chrome.tabs.reload(tabId);
    }, 20000); // 30 seconds
  }
});
