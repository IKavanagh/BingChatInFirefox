const DESKTOP_USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36 Edg/118.0.2088.46";
const MOBILE_USER_AGENT = "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Mobile Safari/537.36 EdgA/117.0.2045.65"

browser.webRequest.onBeforeSendHeaders.addListener(
    function (details) {
        if (!details.requestHeaders) {
            return;
        }

        for (let i = 0; i < details.requestHeaders.length; i++) {
            if (details.requestHeaders[i].name.toLowerCase() === "user-agent") { // headers are case-insensitive
                if (details.requestHeaders[i].value.toLowerCase().includes("mobile")) {
                    details.requestHeaders[i].value = MOBILE_USER_AGENT;
                }
                else {
                    details.requestHeaders[i].value = DESKTOP_USER_AGENT;
                }
                break;
            }
        }

        return { requestHeaders: details.requestHeaders };
    },
    { urls: ["*://*.bing.com/*", "*://*copilot.microsoft.com/*"] },
    ["blocking", "requestHeaders"]
);

browser.browserAction.onClicked.addListener(() => {
    browser.sidebarAction.toggle();
});
