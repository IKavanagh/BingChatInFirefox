const userAgentString = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36 Edg/111.0.100.0";
const domains = ["bing.com", "msn.com", "live.com"];

browser.webRequest.onBeforeSendHeaders.addListener(
    function (details) {
        const url = details.url;
        for (let i = 0; i < domains.length; i++) {
            if (url.includes(domains[i])) {
                for (let j = 0; j < details.requestHeaders.length; j++) {
                    if (details.requestHeaders[j].name === "User-Agent") {
                        details.requestHeaders[j].value = userAgentString;
                        break;
                    }
                }
                return { requestHeaders: details.requestHeaders };
            }
        }
    },
    { urls: ["<all_urls>"] },
    ["blocking", "requestHeaders"]
);

browser.browserAction.onClicked.addListener(() => {
    browser.sidebarAction.toggle();
});
