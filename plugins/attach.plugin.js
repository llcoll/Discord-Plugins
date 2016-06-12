//META{"name":"Attach"}*//

var Attach = function () {};

Attach.prototype.onMessage = function() {
};
Attach.prototype.onSwitch = function() {
};
Attach.prototype.start = function() {
	var detached = $('#bd-customcss-detach-container #bd-customcss-detach-controls-buttons');
	var detachedBtn = $('#editor-detached .btn');
	var attachBtn = '<span class="attach" style="cursor:pointer;color:#fff !important;position:relative;width:90px;height:30px;margin-top:8px;font-size:19px">Attach</span>';
	if($(document).find('#editor-detached').length == 1) {
		if(detached.find('.attach').length == 0) {
			$(this).find('#bd-customcss-detach-container #bd-customcss-detach-controls-buttons button').append(attachBtn);
			$(this).find('.attach').click(function() {
				//attach somehow - $('#editor-detached');
			});
		}
		if($(document).find('#editor-detached').length == 0) {
			if(detached.find('.attach').length == 1) {
				$(this).find('.attach').empty().remove();
		}
	}
console.log('Attach initiated');
}
};

Attach.prototype.load = function() {};


Attach.prototype.unload = function() {
};

Attach.prototype.stop = function() {
};

Attach.prototype.getSettingsPanel = function() {
	return null;
};

Attach.prototype.getName = function() {
    return "Attach";
};
Attach.prototype.getDescription = function() {
    return "Attach the css editor without going through user settings";
};
Attach.prototype.getVersion = function() {
    return "1.0";
};
Attach.prototype.getAuthor = function() {
    return "llcoll";
};
