//META{"name":"cscroller"}*//

var cscroller = function () {};

cscroller.prototype.start = function () {
    $(document).on("keypress.csl",function(e) {
        e = e || event;
        switch (e.KeyID) {
            case 38 && 17:
                $('.guild-channels .channel .channel-text').up();
                break;
            case 40 && 17:
                $('.guild-channels .channel .channel-text').down();
                break;
            }
        }
    );
        console.log('cscroller started.');
};

cscroller.prototype.up =function () {
    var sc = $(".channel.selected");
    sc.insertBefore($(".guild-channels").children().eq(sc.index() - 1));
}

cscroller.prototype.down =function () {
    var sc = $(".channel.selected");
    sc.insertAfter($(".guild-channels").children().eq(sc.index() + 1));
}

cscroller.prototype.load = function () {

};

cscroller.prototype.unload = function () {}
;

cscroller.prototype.stop = function () {
	$(document).off("keypress.csl");
};

cscroller.prototype.getSettingsPanel = function () {
    return null;
};

cscroller.prototype.getName = function () {
    return "Channel Scroller";
};

cscroller.prototype.getDescription = function () {
    return "Scroll through channels without needing to use the mouse";
};

cscroller.prototype.getVersion = function () {
    return "1.0";
};

cscroller.prototype.getAuthor = function () {
    return "llcoll";
};
