window.onload = function() {
    // 设置CSS样式方法
    function setCSS (obj,json) {
        for(attr in json) {
            obj.style[attr] = json[attr];
        }
    }
    // 生成随机数方法
    function randomNumber(min,max) {
        return min + Math.floor(Math.random() * (max - min + 1));
    }

    (function() {
        // 创建食物对象
        function Food(color) {
            this.width = 20;
            this.height = 20;
            this.color = color;
            this.element = document.createElement('div');
            this.init();
        }
        // 初始化食物属性
        Food.prototype.init = function() {
            setCSS(this.element,{
                "width": this.width + "px",
                "height": this.height + "px",
                "backgroundColor": this.color,
                "position": "absolute"
            });
            this.create();
        };
        // 食物随机生成
        Food.prototype.create = function() {
            setCSS(this.element,{
                "left": randomNumber(0,49) * this.width + "px",
                "top": randomNumber(0,39) * this.height + "px"
            });
            document.getElementById("map").appendChild(this.element);
        };
        Food.prototype.remove = function() {
            this.element.parentNode.removeChild(this.element);
        };

        window.Food = Food;
    })();


    (function() {
        // 实例化食物对象
        var food = new Food("green");

        document.getElementById("btn2").onclick = function() {
            food.remove();
        };
        // 创建小蛇对象

    })();
};
