//META{"name":"chatHide"}*//

var chatHide = function () {};

chatHide.prototype.start = function () {
	$(document).onmouseover = function() {
		if(1 == 1) {
			var allChat = $('.messages .message-group');
			var chatHeader = $('.messages .message-group .comment .message .body h2');
			var contents = $('.chat>.content .messages .message-group .markup')
			var hideBtn = '<span class="hider" style="cursor:pointer;color:#fff !important;position:relative;top:-1px;margin-left:5px;text-transform:uppercase;font-size:10px;padding:3px 5px;box-sizing:border-box;background:rgba(0,0,0,0.4)">Hider</span>';
			allChat.onmouseover = function() {
				if(chatHeader.find('.hide').length == 0) {
					$(this).find(chatHeader).append(hideBtn);
					$('#counter').data('count', 0);
					$(this).find('.hide').click(function() {
						$('#counter').html(function(){
							var $this = $(this),
								count = $this.data('count') + 1;
								$this.data('count', count);
								return count;
								if(count > 1) {
									count == 0
								}
						});
						if(count == 1)
						contents[0].style.color = "transparent !important"
						else {
							contents[0].style.color = {};
						}
					});
				});
			}
			allChat.onmouseout = function() {
				if(chatHeader.find('.hide').length == 1) {
					$(this).find('.hide').empty().remove();
				}
			});
		}
	});
	console.log('~chatHide initiated~');
};

chatHide.prototype.load = function () {};

chatHide.prototype.unload = function () {
	count == 0
};

chatHide.prototype.stop = function () {
	count == 0
};

chatHide.prototype.onMessage = function () {
};

chatHide.prototype.onSwitch = function () {
};

chatHide.prototype.getSettingsPanel = function () {
	return null;
};

chatHide.prototype.getName = function () {
    return "Message Hider";
};

chatHide.prototype.getDescription = function () {
    return "Hide messages with the click of a button";
};

chatHide.prototype.getVersion = function () {
    return "1.0";
};

chatHide.prototype.getAuthor = function () {
    return "llcoll";
};
