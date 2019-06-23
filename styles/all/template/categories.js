;(function($, document) {
	// We need to allow for stickies and no announcements
	var after = '.forumbg.announcement';

	// Announcements normal
	if( $('.row.announce').length ) {
		$('<div class="forumbg normal_ann"><div class="inner"><ul class="topiclist"><li class="header"><dl class="row_item"><dt><div class="list-inner">' + catAnnounce + '</div></dt><dd class="posts">' + replies + '</dd><dd class="views">' + views + '</dd><dd class="lastpost"><span>' + lastPost + '</span></dd></dl></li></ul><ul class="topiclist topics"></li></ul></div></div>').insertAfter($('.forumbg.announcement'));
		after = '.forumbg.normal_ann';
	}
	$(".row.announce").appendTo(".forumbg.normal_ann ul.topiclist.topics");

	// Stickies
	if( $('.row.sticky').length ) {
		$('<div class="forumbg stickies"><div class="inner"><ul class="topiclist"><li class="header"><dl class="row-item"><dt><div class="list-inner">' + catStickies + '</div></dt><dd class="posts">' + replies + '</dd><dd class="views">' + views + '</dd><dd class="lastpost"><span>' + lastPost + '</span></dd></dl></li></ul><ul class="topiclist topics"></li></ul></div></div>').insertAfter($(after));
	}
	$(".row.sticky").appendTo(".forumbg.stickies ul.topiclist.topics");

})(jQuery, document);
