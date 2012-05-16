
// http://johnhammink.blogspot.ca/2012/05/part-3-updating-your-gingerbread.html

var data = require("self").data;

require("page-mod").PageMod({
	include: "http://johnhammink.blogspot.ca/*",
	contentStyleFile: [data.url('readability.css')]
});

