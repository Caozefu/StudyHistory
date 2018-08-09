$(function () {
    var map = document.getElementById('map');
    $('#restart').click(function() {
        location.reload();
    });
    // 封装用到的方法
    (function () {
        // 设置CSS样式方法
        function setCSS(obj, json) {
            for (attr in json) {
                obj.style[attr] = json[attr];
            }
        }

        // 生成随机数方法
        function randomNumber(min, max) {
            return min + Math.floor(Math.random() * (max - min + 1));
        }

        window.setCSS = setCSS;
        window.randomNumber = randomNumber;
    })();

    // 食物
    (function () {
        // 创建食物对象
        function Food(color) {
            this.width = 20;
            this.height = 20;
            this.color = color;
            this.element = document.createElement('div');
            this.init();
        }

        // 初始化食物属性
        Food.prototype.init = function () {
            setCSS(this.element, {
                "width": this.width + "px",
                "height": this.height + "px",
                "backgroundColor": this.color,
                "position": "absolute"
            });
            this.create();
        };
        // 食物随机生成
        Food.prototype.create = function () {
            var left = randomNumber(0, 49);
            var top = randomNumber(0, 39) ;
            this.left = left;
            this.top = top;
            setCSS(this.element, {
                "left": left * this.width + "px",
                "top": top * this.height+ "px"
            });
            map.appendChild(this.element);
        };
        Food.prototype.remove = function () {
            this.element.parentNode.removeChild(this.element);
        };

        window.Food = Food;
    })();

    // 小蛇
    (function () {
        // 创建小蛇对象
        function Snake(width, height, direction) {
            this.width = width || 20;
            this.height = height || 20;
            this.direction = direction || "right";
            this.elements = [];
            this.body = [
                {left: 2, top: 2, color: "blue"},//头
                {left: 1, top: 2, color: "yellow"},//身体。。。
                {left: 0, top: 2, color: "yellow"}
            ];
            this.init();
            this.run();
        }

        // 初始化小蛇
        Snake.prototype.init = function () {
            this.remove();

            for (var i = 0; i < this.body.length; i++) {
                var b = this.body[i],
                    div = document.createElement("div")
                ;
                setCSS(div, {
                    "width": this.width + "px",
                    "height": this.height + "px",
                    "position": "absolute",
                    "backgroundColor": b.color,
                    "left": b.left * this.width + "px",
                    "top": b.top * this.height + "px"
                });
                map.appendChild(div);


                //加入elements
                this.elements.push(div);
            }
        };
        // 小蛇运动
        Snake.prototype.run = function () {
            var that = this,
                timer;
            var timer = setInterval(function () {
                /*document.onkeydown = function (event) {
                        var keyNum;
                        if (window.event) {
                            keyNum = event.keyCode;
                        } else {
                            keyNum = event.which;
                        }
                        if (keyNum === 39) {
                            clearInterval(timer);
                            let target = that.body[0].top;
                            timer = setInterval(function() {
                                for (let i = 0; i < that.body.length; i++) {
                                    if (that.body[i].top === target) {
                                        that.body[i].left++;
                                    } else {
                                        that.body[i].top++;
                                    }
                                    if(that.body[i].left === 49) {
                                        clearInterval(timer);
                                    }
                                }
                                that.init();
                            },300);

                        } else if (keyNum === 40) {
                            clearInterval(timer);
                            let target = that.body[0].left;
                            timer = setInterval(function() {
                                for (let i = 0; i < that.body.length; i++) {
                                    if (that.body[i].left === target) {
                                        that.body[i].top++;
                                    } else {
                                        that.body[i].left++;
                                    }
                                }
                                that.init();
                            },300);

                        }
                    };*/
                document.onkeydown = function (event) {
                    event.preventDefault();
                    var keyNum;
                    if (window.event) {
                        keyNum = event.keyCode;
                    } else {
                        keyNum = event.which;
                    }
                    if (keyNum === 39) {
                        if (that.direction !== "left") {
                            that.direction = "right";
                        }
                    } else if (keyNum === 40) {
                        if (that.direction !== "top") {
                            that.direction = "bottom";
                        }
                    } else if (keyNum === 37) {
                        if (that.direction !== "right") {
                            that.direction = "left";
                        }
                    } else if (keyNum === 38) {
                        if (that.direction !== "bottom") {
                            that.direction = "top";
                        }
                    }
                };
                for (let i = that.body.length - 1; i > 0; i--) {
                    that.body[i].left = that.body[i - 1].left;
                    that.body[i].top = that.body[i - 1].top;
                }
                switch (that.direction) {
                    case "right":
                        that.body[0].left++;
                        break;
                    case "left":
                        that.body[0].left--;
                        break;
                    case "top":
                        that.body[0].top--;
                        break;
                    case "bottom" :
                        that.body[0].top++;
                        break;
                }

                // 边缘判断
                if(that.body[0].left >= 50 || that.body[0].left <0 || that.body[0].top >= 40 || that.body[0].top < 0) {
                    clearInterval(timer);
                    new Dialog({
                        'id': 'err',
                        'message': '游戏结束',
                        'callback': function () {
                            console.log('aaa');
                        }
                    }).open(3000);
                    return;
                }

                // 判断碰到食物
                if(that.body[0].left === food.left && that.body[0].top === food.top) {
                    that.body.push({
                        left: that.body[that.body.length - 1].left,
                        top: that.body[that.body.length - 1].top,
                        color: "yellow"
                    });
                    food.remove();
                    food.init();
                }

                that.init();
            }, 300);
        };

        Snake.prototype.remove = function () {
            for (let i = 0; i < this.elements.length; i++) {
                this.elements[i].parentNode.removeChild(this.elements[i]);
            }
            this.elements.splice(0, this.body.length);
        };

        window.Snake = Snake;
    })();

    // 实例化食物对象
    var food = new Food("green");
    var snake = new Snake(20, 20, "right");
});
