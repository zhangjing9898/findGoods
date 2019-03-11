var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameData = (function () {
    function GameData() {
    }
    GameData.prizeTotal = 14;
    GameData.prizeObj = {
        appName: '',
        icon: '',
        img: '',
        url: ''
    };
    return GameData;
}());
__reflect(GameData.prototype, "GameData");
