//META{"name":"messageHide"}*//

var messageHide = function () {};

messageHide.prototype.start = function () {
	$(document).on('mouseover', function() {
		if(1 == 1) {
			var allChat = $('.messages .message-group');
			var contents = $('.chat>.content .messages .message-group .markup')
			var hideBtn = '<span class="hide" style="cursor:pointer;color:rgba(255,255,255,.8) !important;position:relative;top:-1px;margin-left:5px;text-transform:uppercase;font-size:10px;padding:3px 5px;box-sizing:border-box;background:rgba(0,0,0,0.4)">Hide</span>';
			allChat.on('mouseover', function() {
				if(contents.find('.hide').length == 0) {
					$(this).find(contents).append(hideBtn);
					$('hide').on('click', function() {
						$('contents').toggle();
					});
				}
			});
			allChat.on('mouseleave', function() {
				if(contents.find('.hide').length == 1) {
					$(this).find('.hide').empty().remove();
				}
			});
		}
	});
	console.log('~messageHide initiated~');
};

messageHide.prototype.load = function () {};

messageHide.prototype.unload = function () {
	$('contents').show();
};

messageHide.prototype.stop = function () {
	$('contents').show();
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
