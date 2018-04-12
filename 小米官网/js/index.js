window.onload = function() {
    function $(id) {return document.getElementById(id)}
    $("cart").onmouseover = function() {
        this.style.backgroundColor = "#fff";
        this.style.color = "#ff6700";
    };
    $("cart").onmouseout = function() {
        this.style.backgroundColor = "#424242";
        this.style.color = "#b0b0b0";
    };
    $("bigBox").onmouseover = function() {
        $("searchBox").style.borderColor = "#b0b0b0";
        $("searchButton").style.borderColor = "#b0b0b0";
    };
    $("bigBox").onmouseout = function() {
        $("searchBox").style.borderColor = "#e0e0e0";
        $("searchButton").style.borderColor = "#e0e0e0";
    };
    $("searchBox").onfocus = function() {
        this.style.borderColor = "#ff6700";
        $("searchButton").style.borderColor = "#ff6700";
    };

    // 轮播图左侧菜单栏
    var lis = $("ul").children;
    for(var i = 0; i < lis.length; i ++) {
        lis[i].onmouseover = function() {
            for(var j = 0; j < lis.length; j ++) {
                lis[j].style.backgroundColor = "";
            }
            this.style.backgroundColor = "#ff6700";
        }
        lis[i].onmouseout = function() {
            this.style.backgroundColor = "";
        }
    }

    //轮播图左右按钮
    var imgs = $("imgs").children;
    $("nextImg").onclick = function () {
        setTimeout(function() {
        // console.log(typeof ($("img1").style.opacity));
            for(var i = 0; i < imgs.length; i ++) {
                if(imgs[i].children[0].style.opacity === "1") {
                        imgs[i].children[0].style.opacity = "0";
                    if(i < 4) {
                        imgs[i + 1].children[0].style.opacity = "1";
                    }else {
                        i = 0;
                        imgs[i].children[0].style.opacity = "1";
                    }
                    return;
                }
            }
        },100);
        // for(var j = 0; j < imgs.length; j ++) {
        //     imgs[j].style.opacity = "0";
        // }
        // $("img1").style.opacity = "0";
        // $("img2").style.opacity = "1";
    };
    $("lastImg").onclick = function () {
        setTimeout(function() {
            for(var i = 0; i < imgs.length; i ++) {
                if(imgs[i].children[0].style.opacity === "1") {
                    imgs[i].children[0].style.opacity = "0";
                    if(i > 0) {
                        imgs[i - 1].children[0].style.opacity = "1";
                    }else {
                        i = 4;
                        imgs[i].children[0].style.opacity = "1";
                    }
                    return;
                }
            }
        },100);

        // $("img1").style.opacity = "1";
        // $("img2").style.opacity = "0";
    };

    var circles = $("circles").children;
    console.log(circles.length);
    for(var m = 0; m < circles.length; m ++) {
        circles[m].index = m;
        circles[m].onclick = function() {
            for(var x = 0; x < circles.length; x ++) {
                circles[x].className = "";
            }
            this.className = "active";
            this.onmouseout = null;
            findImg:for(var n = 0; n < imgs.length; n ++) {
                if(imgs[n].children[0].style.opacity === "1") {
                    imgs[n].children[0].style.opacity = "0";
                    imgs[this.index].children[0].style.opacity = "1";
                    break findImg;
                }
            }
        };
        circles[m].onmouseover = function() {
            for(var y = 0; y < circles.length; y ++) {
                circles[y].className = "";
            }
            this.className = "active";
        };
        circles[m].onmouseout = function() {
            this.className = "";
        };
    }
};