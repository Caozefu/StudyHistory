/*
* dialog
* */
class Dialog {
    constructor(json) {
        this.id = json['id'];
        this.message = json['message'] || 'no message';
        this.height = json['height'] || 50;
        this.width = json['width'] || 200;
        this.callback = json['callback'];
        this.init();
    }

    callback() {
        return this.callback;
    }

    init() {
        this.content = "<div class=\"mask\"><div class=\"dialog\"><h3>" + this.message + "</h3></div></div>";
    }

    open(closeTime) {
        const that = this;
        const time = closeTime || 1500;
        $('#' + that.id).html(that.content);
        if (that.callback) {
            that.callback();
        }
        setTimeout(function () {
            that.close();
        }, time);
    }

    close() {
        $('#' + this.id).html('');
    }
}