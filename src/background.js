const DESKTOP_USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36 Edg/112.0.1722.48";

browser.webRequest.onBeforeSendHeaders.addListener(
    function (details) {
        if (!details.requestHeaders) {
            return;
        }

        for (let i = 0; i < details.requestHeaders.length; i++) {
            if (details.requestHeaders[i].name.toLowerCase() === "user-agent") { // headers are case-insensitive
                details.requestHeaders[i].value = DESKTOP_USER_AGENT;
                break;
            }
        }

        return { requestHeaders: details.requestHeaders };
    },
    { urls: ["*://*.bing.com/*"] },
    ["blocking", "requestHeaders"]
);

browser.browserAction.onClicked.addListener(() => {
    browser.sidebarAction.toggle();
});
