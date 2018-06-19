'use strict';
const synchttp = require('../src/build/Release/binding');
let content = "";
try{
	content = synchttp.http_get("http://www.baidu.com",10);
	//console.log(content);
	console.log("\nRecv Length:"+content.length);
}
catch(err)
{
	console.log(err);
}

let imgsize = new Object();
try{
	imgsize = synchttp.get_image_size("http://wmod.66rpg.com/res/loading.gif");
	console.log(imgsize);
}
catch(err)
{
	console.log(err);
}
