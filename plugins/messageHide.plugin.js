//META{"name":"messageHide"}*//

var messageHide = function () {};

messageHide.prototype.start = function () {
	$(document).on("mouseover.rpr", function(e) {
		var contents = $('.chat>.content .messages .message-group .markup');
		var hideBtn = '<span class="hide" style="cursor:pointer;color:rgba(255,255,255,.8) !important;position:relative;top:-1px;margin-left:5px;text-transform:uppercase;font-size:10px;padding:3px 5px;box-sizing:border-box;background:rgba(0,0,0,0.4)">Hide</span>';
		contents.on('mouseover', function() {
			if($(this).find('.hide').length == 0) {
				if($(this).find('span').length == 0) {
					$(this).wrapInner('<span class="txt"></span>');
				}
				$(this).append(hideBtn);
				$('.hide').on('click', function() {
					if($(this).siblings('span.txt').css('opacity') !== '0') {
						$(this).siblings('span.txt').css('opacity','0');
					}
					else {
						$(this).siblings('span.txt').css('opacity','inherit');
					}
				});
			}
		});
		contents.on('mouseleave', function(e) {
			if($(this).find('.hide').length == 1) {
				$('.hide',this).empty().remove();
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
	return  '<label>Unhide All?: </label>' +
		'<button onclick="$(\'contents\').show();">Yes</button>';
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
