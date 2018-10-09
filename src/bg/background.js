chrome.contextMenus.create({
    id: "open-inspect",
    title: "Devices Inspector",
    contexts: ["all"]
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "open-inspect") {
        chrome.tabs.create({url: "chrome://inspect/#devices"});
    }
});

chrome.commands.onCommand.addListener(function(command){
	if (command=="open-inspect-devices") {
		chrome.tabs.create({url: "chrome://inspect/#devices"});
	}
});