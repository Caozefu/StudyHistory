function $(id) {
    return document.getElementById(id);
}
function scroll() {
    if(window.pageYOffset !== null) {     //ie9+浏览器
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }else if (document.compatMode == "CSS1Compat") {   //正常浏览器
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }else {
        return {
            left: document.body.scrollLeft,      // 怪异浏览器
            top: document.body.scrollTop
        }
    }
}
function client() {
    if(window.innerWidth !== null) {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }else if(document.compatMode == "CSS1Compat") {
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        }
    }else {
        return {
            width: document.body.clientWidth,
            height: document.body.clientHeight
        }
    }
}