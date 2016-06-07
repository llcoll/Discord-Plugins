//META{"name":"hideChat"}*//

var hideChat = function () {};

hideChat.prototype.start = function () {
	var chat = $('.messages-wrapper');
	var messages = $('.chat>.content .messages .message-group .markup');
        $(chat).onmouseout {
		messages.style('{color:transparent !important;}');
	}
	$(chat).onmouseover {
		messages.style('{color: rgba(255, 255, 255, 0.8);}');
	}
	console.log('~hideChat initiated~');
};

hideChat.prototype.load = function () {

};

hideChat.prototype.unload = function () {}
;

hideChat.prototype.stop = function () {
	messages.style('{color: rgba(255, 255, 255, 0.8);}');
	console.log('~hideChat over~');
};

hideChat.prototype.onMessage = function () {
    //called when a message is received
};

hideChat.prototype.onSwitch = function () {
    //called when a server or channel is switched
};

hideChat.prototype.observer = function (e) {
    //raw MutationObserver event for each mutation
};

hideChat.prototype.getSettingsPanel = function () {
    return "";
};

hideChat.prototype.getName = function () {
    return "Hidden Chat";
};

hideChat.prototype.getDescription = function () {
    return "Only shows chat while hovering over it or typing";
};

hideChat.prototype.getVersion = function () {
    return "0.2.0";
};

hideChat.prototype.getAuthor = function () {
    return "llcoll";
};
