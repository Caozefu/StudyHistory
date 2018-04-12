function getStyle(obj,attr) {
    if(obj.currentStyle) {
        return obj.currentStyle[attr];
    }else {
        return window.getComputedStyle(obj,null)[attr];
    }
}
function animate(obj,json,fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var flag = true;
        //遍历json
        for(var k in json) {
            //当前样式
            var style = parseInt(getStyle(obj,k));
            var step = (json[k] - style) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor (step);
            //添加透明度判断
            if(k == "opacity") {
                obj.style[k] = style + step;
            }else {
                obj.style[k] = style + step + "px";

            }
            if(style != json[k]) {
                flag = false;
            }
        }
        if(flag) {
            clearInterval(obj.timer);
            if(fn) {
                fn();
            }
        }
    },30);
}