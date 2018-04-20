window.onload = function () {
    var timer = null;

    /*
    * @program获取CSS属性
    * */

    function getStyle(obj, attr) {
        if (obj.currentStyle) {
            return obj.currentStyle[attr];
        } else {
            return window.getComputedStyle(obj, null)[attr];
        }
    }

    /*
        * @program : 匀速动画函数
        *           obj 执行动画的元素
        *           speed  速度(px/s)
        *           target  目标位置
        * */
    function animate(obj, speed, target) {
        clearInterval(timer);
        var presentPlace = parseInt(getStyle(obj, "lineHeight"));
        speed = presentPlace < target ? (speed / 100) : (speed / -100);
        timer = setInterval(function () {
            if (Math.abs(presentPlace - target) <= Math.abs(speed)) {
                obj.style.lineHeight = target + "px";
                clearInterval(timer);
            } else {
                presentPlace += speed;
                obj.style.lineHeight = presentPlace + "px";
            }

        }, 10);
    }


    function $(id) {
        return document.getElementById(id)
    }

    //购物车
    $("cart").onmouseover = function () {
        this.children[0].style.backgroundColor = "#fff";
        this.children[0].style.color = "#ff6700";
        // this.children[1].style.lineHeight = "98px";
        animate(this.children[1], 600, 98);
    };
    $("cart").onmouseout = function () {
        this.children[0].style.backgroundColor = "#424242";
        this.children[0].style.color = "#b0b0b0";
        animate(this.children[1], 600, 0);
    };

    //搜索框部分
    var hotWord = $("bigBox").querySelectorAll(".hot_word a");

    function mouseOver() {
        $("searchBox").style.borderColor = "#b0b0b0";
        $("searchButton").style.borderColor = "#b0b0b0";
    }

    function mouseOut() {
        $("searchBox").style.borderColor = "#e0e0e0";
        $("searchButton").style.borderColor = "#e0e0e0";
    }

    $("bigBox").onmouseover = mouseOver;
    $("bigBox").onmouseout = mouseOut;
    $("searchBox").onclick = function () {
        this.style.borderColor = "#ff6700";
        $("searchButton").style.borderColor = "#ff6700";
        $("bigBox").onmouseover = null;
        $("bigBox").onmouseout = null;
        for (var i = 0; i < hotWord.length; i++) {
            hotWord[i].style.opacity = "0";
        }
    };
    $("searchBox").onblur = function () {
        mouseOut();
        $("bigBox").onmouseover = mouseOver;
        $("bigBox").onmouseout = mouseOut;
        for (var i = 0; i < hotWord.length; i++) {
            hotWord[i].style.opacity = "1";
        }
    };

    // 轮播图左侧菜单栏
    var lis = $("ul").children;
    for (var i = 0; i < lis.length; i++) {
        lis[i].onmouseover = function () {
            for (var j = 0; j < lis.length; j++) {
                lis[j].style.backgroundColor = "";
            }
            this.style.backgroundColor = "#ff6700";
        }
        lis[i].onmouseout = function () {
            this.style.backgroundColor = "";
        }
    }

    var thisIndex = 0;


    //轮播图左右按钮
    (function () {
        var imgBox = $("imgs"),
            imgs = imgBox.children,
            circles = $("circles").children,
            timer = null
        ;

        //自动播放
        timer = setInterval(cutNextImg, 5000);
        imgBox.onmouseover = function() {
            clearInterval(timer);
        };
        imgBox.onmouseout = function() {
            timer = setInterval(cutNextImg, 5000);
        };

        $("nextImg").onclick = cutNextImg;
        $("lastImg").onclick = function () {
            setTimeout(function () {
                for (var i = 0; i < imgs.length; i++) {
                    if (imgs[i].children[0].style.opacity === "1") {
                        imgs[i].children[0].style.opacity = "0";
                        if (i > 0) {
                            imgs[i - 1].children[0].style.opacity = "1";
                            click(i - 1);
                        } else {
                            i = 4;
                            imgs[i].children[0].style.opacity = "1";
                            click(i);
                        }
                        return;
                    }
                }
            }, 100);

            // $("img1").style.opacity = "1";
            // $("img2").style.opacity = "0";
        };

        // 图片下方小圆点开始
        for (var i = 0; i < circles.length; i++) {
            var lastSelect = 0;
            circles[i].index = i;
            circles[i].onmouseenter = function () {
                if (lastSelect !== thisIndex) {
                    circles[lastSelect].className = "";
                }
                lastSelect = this.index;
                this.className = "active";
                this.onclick = function () {
                    click(this.index);
                }
            };
            circles[i].onmouseout = function () {
                if (this.index === thisIndex) {
                    return;
                }
                this.className = "";
            }
        }

        // 圆点点击事件
        function click(index) {
            for (var j = 0; j < circles.length; j++) {
                circles[j].className = "";
            }
            circles[index].className = "active";
            imgs[thisIndex].children[0].style.opacity = "0";
            imgs[index].children[0].style.opacity = "1";
            thisIndex = index;
        }

        // 右侧按钮点击事件
        function cutNextImg() {
            setTimeout(function () {
                // debugger;
                // console.log(typeof ($("img1").style.opacity));
                for (var i = 0; i < imgs.length; i++) {
                    if (imgs[i].children[0].style.opacity === "1") {
                        imgs[i].children[0].style.opacity = "0";
                        if (i < 4) {
                            imgs[i + 1].children[0].style.opacity = "1";
                            click(i + 1);
                        } else {
                            i = 0;
                            imgs[i].children[0].style.opacity = "1";
                            click(i);
                        }
                        return;
                    }
                }
            }, 100)
        }

    })();


// for(var m = 0; m < circles.length; m ++) {
//     circles[m].index = m;
//     circles[m].onclick = function() {
//         for(var x = 0; x < circles.length; x ++) {
//             circles[x].className = "";
//         }
//         this.className = "active";
//         this.onmouseout = null;
//         findImg:for(var n = 0; n < imgs.length; n ++) {
//             if(imgs[n].children[0].style.opacity === "1") {
//                 imgs[n].children[0].style.opacity = "0";
//                 imgs[this.index].children[0].style.opacity = "1";
//                 break findImg;
//             }
//         }
//     };
//     circles[m].onmouseover = function() {
//         for(var y = 0; y < circles.length; y ++) {
//             circles[y].className = "";
//         }
//         this.className = "active";
//     };
//     circles[m].onmouseout = function() {
//         this.className = "";
//     };
// }


//闪购部分轮播图
    (function () {
        var leftBtn = document.getElementById("cutButton").children[0],
            rightBtn = document.getElementById("cutButton").children[1],
            imgs = document.getElementById("cutImg"),
            colors = ["#f4af41", "#91c15e", "#4695ec", "#d4483e"]
        ;


        for (var i = 0; i < imgs.children.length / 2; i++) {
            imgs.children[i].style.borderColor = colors[i];
        }
        for (var j = 4; j < imgs.children.length; j++) {
            imgs.children[j].style.borderColor = colors[j - 4];
        }

        if (imgs.offsetLeft === 0) {
            rightBtn.className = "active iconfont";
        } else {
            leftBtn.className = "active iconfont";
            rightBtn.className = "iconfont";
        }

        rightBtn.onclick = function () {
            imgs.style.left = "-978px";
            rightBtn.className = "iconfont";
            leftBtn.className = "active iconfont";
        };
        leftBtn.onclick = function () {
            imgs.style.left = "0";
            rightBtn.className = "active iconfont";
            leftBtn.className = "iconfont";
        };
    })();
}
;