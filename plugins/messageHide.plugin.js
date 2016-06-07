//META{"name":"messageHide"}*//

var messageHide = function () {};

messageHide.prototype.start = function () {
	$(document).on("mouseover.rpr", function(e) {
		var contents = $('.chat>.content .messages .message-group .markup');
		var hideBtn = '<span class="hide" style="cursor:pointer;color:rgba(255,255,255,.8) !important;position:relative;top:-1px;margin-left:10px;text-transform:uppercase;font-size:9px;padding:2px 5px;box-sizing:border-box;background:rgba(0,0,0,0.4)">Hide</span>';
		var unhideBtn = '<span class="unhide" style="cursor:pointer;color:rgba(255,255,255,.8) !important;position:relative;top:-1px;margin-left:10px;text-transform:uppercase;font-size:9px;padding:2px 5px;visibility:hidden;box-sizing:border-box;background:rgba(0,0,0,0.4)">Unhide</span>';
		contents.on('mouseover', function() {
			$(unhideBtn).hide();
			if($(this).find('.hide').length == 0) {
				$(this).append(hideBtn);
				$(this).append(unhideBtn);
				$('.hide').on('click', function() {
					$(this).parent().toggle();
				});
			}
		});
		contents.on('mouseleave', function() {
			if($(this).find('.hide').length == 1) {
				$('.hide').empty().remove();
				$('.unhide').empty().remove();
			}
		});
	});
	console.log('~messageHide initiated~');
};

messageHide.prototype.load = function () {};

messageHide.prototype.unload = function () {
	$(document).off("mouseover.rpr");
};

messageHide.prototype.stop = function () {
	$(document).off("mouseover.rpr");
};

messageHide.prototype.onMessage = function () {
};

messageHide.prototype.onSwitch = function () {
};

messageHide.prototype.getSettingsPanel = function () {
	return null;
};

messageHide.prototype.getName = function () {
    return "Hide Messages";
};

messageHide.prototype.getDescription = function () {
    return "Hide messages with the click of a button";
};

messageHide.prototype.getVersion = function () {
    return "1.0";
};

messageHide.prototype.getAuthor = function () {
    return "llcoll";
};
