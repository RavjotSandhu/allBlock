browser.webRequest.onBeforeRequest.addListener(
    function(details) { 
      // console.log(details)
      return {cancel: true}; 
    },
    {urls: 
      ["*://*.doubleclick.net/*",
      "*://*.googleadservices.com/*",
      "*://.google-analytics.com/analytics.js*",
      "*://*.googlesyndication.com/*",
      "*://*.moat.com/*"]
    },
    ["blocking"]
  );