var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SceneManger = (function () {
    function SceneManger() {
        this.startScene = new StartScene();
    }
    Object.defineProperty(SceneManger, "instance", {
        get: function () {
            if (!this.sceneManager) {
                this.sceneManager = new SceneManger();
            }
            return this.sceneManager;
        },
        enumerable: true,
        configurable: true
    });
    // delete other scene
    SceneManger.prototype.removeOther = function (scene) {
        var _this = this;
        var arr = [this.startScene];
        arr.forEach(function (item) {
            if (scene === item) {
                return;
            }
            if (item.parent) {
                _this._stage.removeChild(item);
            }
        });
    };
    // 设置根场景
    SceneManger.prototype.setScene = function (s) {
        this._stage = s;
    };
    // 开始场景
    SceneManger.toStartScene = function () {
        this.instance.removeOther(this.instance.startScene);
        this.instance._stage.addChild(this.instance.startScene);
    };
    return SceneManger;
}());
__reflect(SceneManger.prototype, "SceneManger");
