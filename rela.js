var randomRelatedIndex, showRelatedPost; !
function (t, e, a) {
	var l = {
		widgetTitle: "",
		widgetStyle: 1,
		homePage: "//bloggertemplatesforseotop.blogspot.com",
		numPosts: 7,
		summaryLength: 370,
		titleLength: "auto",
		thumbnailSize: 72,
		noImage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAA3NCSVQICAjb4U/gAAAADElEQVQImWOor68HAAL+AX7vOF2TAAAAAElFTkSuQmCC",
		containerId: "related-post",
		newTabLink: !1,
		moreText: "Baca Selengkapnya",
		callBack: function () {}
	};
	for (var i in relatedPostConfig) l[i] = "undefined" == relatedPostConfig[i] ? l[i] : relatedPostConfig[i];
	var s = function (t) {
		var l = e.createElement("script");
		l.type = "text/javascript",
		l.src = t,
		a.appendChild(l)
	},
	n = function (t, e) {
		return Math.floor(Math.random() * (e - t + 1)) + t
	},
	r = function (t) {
		var e, a, l = t.length;
		if (0 === l) return ! 1;
		for (; --l;) e = Math.floor(Math.random() * (l + 1)),
		a = t[l],
		t[l] = t[e],
		t[e] = a;
		return t
	},
	m = "object" == typeof labelArray && labelArray.length > 0 ? "/-/" + r(labelArray)[0] : "",
	o = function (t) {
		var e = t.feed.openSearch$totalResults.$t - l.numPosts,
		a = n(1, e > 0 ? e: 1);
		s(l.homePage.replace(/\/$/, "") + "/feeds/posts/summary" + m + "?alt=json-in-script&orderby=updated&start-index=" + a + "&max-results=" + l.numPosts + "&callback=showRelatedPost")
	},
	d = function (t) {
		var e, a, i, s, n, m = document.getElementById(l.containerId),
		o = r(t.feed.entry),
		d = l.widgetStyle,
		h = l.widgetTitle + '<ul class="related-post-style-' + d + '">',
		c = l.newTabLink ? ' target="_blank"': "",
		p = '<span style="display:block;clear:both;"></span>';
		if (m) {
			for (var u = 0; u < l.numPosts && u != o.length; u++) {
				a = o[u].title.$t,
				i = "auto" !== l.titleLength && l.titleLength < a.length ? a.substring(0, l.titleLength) + "&hellip;": a,
				s = "media$thumbnail" in o[u] && l.thumbnailSize !== !1 ? o[u].media$thumbnail.url.replace(/\/s[0-9]+(\-c)?/, "/s" + l.thumbnailSize) : l.noImage,
				n = "summary" in o[u] && l.summaryLength > 0 ? o[u].summary.$t.replace(/<br ?\/?>/g, " ").replace(/<.*?>/g, "").replace(/[<>]/g, "").substring(0, l.summaryLength) + "&hellip;": "";
				for (var g = 0, b = o[u].link.length; b > g; g++) e = "alternate" == o[u].link[g].rel ? o[u].link[g].href: "#";
				h += 2 == d ? '<li><img alt="thumbnail" class="related-post-item-thumbnail" src="' + s + '" width="' + l.thumbnailSize + '" height="' + l.thumbnailSize + '" title="' + a + '"><a class="related-post-item-title" title="' + a + '" href="' + e + '"' + c + ">" + i + '</a><span class="related-post-item-summary"><span class="related-post-item-summary-text">' + n + '</span> <a href="' + e + '" class="related-post-item-more"' + c + ">" + l.moreText + "</a></span>" + p + "</li>": 3 == d || 4 == d ? '<li class="related-post-item" tabindex="0"><a class="related-post-item-title" href="' + e + '"' + c + '><img alt="thumbnail" class="related-post-item-thumbnail" src="' + s + '" width="' + l.thumbnailSize + '" height="' + l.thumbnailSize + '" title="' + a + '"></a><div class="related-post-item-tooltip"><a class="related-post-item-title" title="' + a + '" href="' + e + '"' + c + ">" + i + "</a></div>" + p + "</li>": 5 == d ? '<li class="related-post-item" tabindex="0"><a class="related-post-item-wrapper" href="' + e + '" title="' + a + '"' + c + '><img alt="thumbnail" class="related-post-item-thumbnail" src="' + s + '" width="' + l.thumbnailSize + '" height="' + l.thumbnailSize + '" title="' + a + '"><span class="related-post-item-tooltip">' + i + "</span></a>" + p + "</li>": 6 == d ? '<li><a class="related-post-item-title" title="' + a + '" href="' + e + '"' + c + ">" + i + '</a><div class="related-post-item-tooltip"><img alt="thumbnail" class="related-post-item-thumbnail" src="' + s + '" width="' + l.thumbnailSize + '" height="' + l.thumbnailSize + '" title="' + a + '"><span class="related-post-item-summary"><span class="related-post-item-summary-text">' + n + "</span></span>" + p + "</div></li>": '<li><a title="' + a + '" href="' + e + '"' + c + ">" + i + "</a></li>"
			}
			m.innerHTML = h += "</ul>" + p,
			l.callBack()
		}
	};
	randomRelatedIndex = o,
	showRelatedPost = d,
	s(l.homePage.replace(/\/$/, "") + "/feeds/posts/summary" + m + "?alt=json-in-script&orderby=updated&max-results=0&callback=randomRelatedIndex")
} (window, document, document.getElementsByTagName("head")[0]);
