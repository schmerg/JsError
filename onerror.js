// Add a listeners to the error event on the window object
// This feature was added in Chrome 10 - http://code.google.com/p/chromium/issues/detail?id=7771
/*global chrome */
window.addEventListener("error", function(evt) {
    if (evt) {
        // we can't serialise the entire evt so pick out key details to send
        // but also take care in case these change or ever aren't set
        var rq = {
            rtype: evt.type     || "error",
            msg:   evt.message  || "Unknown error",
            url:   evt.filename || "Unknown location",
            line:  evt.lineno   || "??"
        };
        chrome.extension.sendRequest(rq);
    }
}, false);
chrome.extension.sendRequest({rtype:"clear"});

