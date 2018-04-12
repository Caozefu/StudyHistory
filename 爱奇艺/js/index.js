window.onload = function() {
    function $(id) {return document.getElementById(id);}
    var lis = $("ul").children;
    for(var i = 0; i < lis.length; i ++) {
        lis[i].index = i;
        lis[i].onclick = function() {
            // if(this.index === 1) {
            //     // console.log("yes");
            //     this.style.
            // }
            for(var j = 0; j < lis.length; j ++) {
                lis[j].children[0].style.opacity = "0";
                if(j !== 1) {
                    lis[j].style.color = "#fff";
                }
            }
            this.style.color = "#7ee554";
            this.children[0].style.opacity = "1";
        }
    }

    function change() {
        this.children[0].style.backgroundColor = "#1f2124";
        this.children[0].style.color = "#8e8f90";
        this.children[1].style.backgroundColor = "#333334";
        this.children[1].style.width = "38px";
    };
    // 搜索框
    $("search").onmouseover = function() {
        this.children[0].style.backgroundColor = "#333335";
        this.children[0].style.color = "#d8d8d8";
        this.children[1].style.backgroundColor = "#80f651";
        this.children[1].style.width = "55px";
    };
    $("search").onmouseout = change;

    $("search").children[0].onfocus = function() {
        if(this.value == "热血街舞团") {
            this.value = "";
        }
        $("search").onmouseout = null;
    };
    $("search").children[0].onblur = function() {
        if(this.value == "") {
            this.value = "热血街舞团";
        }
        this.style.backgroundColor = "#333335";
        this.style.color = "#d8d8d8";
        $("search").children[1].style.backgroundColor = "#80f651";
        $("search").children[1].style.width = "55px";
    };
};