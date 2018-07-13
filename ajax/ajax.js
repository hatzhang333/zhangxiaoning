var box = document.querySelector(".box");
var xhr = new XMLHttpRequest();
xhr.open("get", "alist.json", true);
xhr.send();
xhr.onreadystatechange = function() {
	if(xhr.readyState == 4 && xhr.status == 200) {

		var json = xhr.responseText;
		json = JSON.parse(json);
		console.log(json)
		for(var i = 0; i < json.length; i++) {
			var str = "";
			str += `<table><tr><td>${json[i].img}</td><td>${json[i].title}</td><td>${json[i].model}</td><td>${json[i].price1}</td><td>${json[i].price2}</td></tr></table>`;

		}
			box.innerHTML = str;
		
	}
}