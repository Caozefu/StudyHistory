function $(id) {
	return document.getElementById(id);
}
window.onload = function () {
	$("top_inp").onfocus = function () {
		if(this.value == "移动电源") {
			this.value = "";
			this.style.color = "#333";
		}
	};
	$("top_inp").onblur = function () {
		if(this.value == "") {
			this.value = "移动电源";
			this.style.color = "#999";
		}
	};
    $("place").onmouseover = function() {
        this.className = "dt hover";
        $("placeDd").style.display = "block";
    };
    $("place").onmouseout = function() {
        this.className = "dt";
        $("placeDd").style.display = "none";
    }
}
