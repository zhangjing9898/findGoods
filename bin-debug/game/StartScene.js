var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var StartScene = (function (_super) {
    __extends(StartScene, _super);
    function StartScene() {
        return _super.call(this) || this;
    }
    StartScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    StartScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        // play music
        // this.sound = RES.getRes('music_m4a');
        // this.soundChannel = this.sound.play(0, -1);
        // this.musicImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.musicController, this);
        this.InitAnimation();
    };
    // control music
    StartScene.prototype.musicController = function () {
        if (this.soundChannel) {
            this.soundChannel.stop();
            this.soundChannel = null;
            this.musicRotation(false);
            return;
        }
        this.soundChannel = this.sound.play(0, -1);
        this.musicRotation(true);
    };
    // control musicImg rotation
    StartScene.prototype.musicRotation = function (isPlay) {
        var tw = egret.Tween;
        isPlay === true ? tw.resumeTweens(this.musicImg) : tw.pauseTweens(this.musicImg);
    };
    // initialize animation
    StartScene.prototype.InitAnimation = function () {
        var tw = egret.Tween;
        // musicImg rotation
        tw.get(this.musicImg, {
            loop: true
        }).to({
            rotation: 360
        }, 3000);
        // dustpan animation
        tw.get(this.pjImg, {
            loop: true
        }).to({
            rotation: 4.65
        }, 500).to({
            rotation: 10.61
        }, 500);
        // broom animation
        tw.get(this.sbImg, {
            loop: true
        }).to({
            rotation: 5.55
        }, 500)
            .to({
            rotation: 1.69
        }, 500);
    };
    return StartScene;
}(eui.Component));
__reflect(StartScene.prototype, "StartScene", ["eui.UIComponent", "egret.DisplayObject"]);
