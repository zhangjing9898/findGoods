class SceneManger {
    public _stage: egret.DisplayObjectContainer
    public startScene: StartScene

    constructor() {
        this.startScene = new StartScene()
    }

    // 获取单例
    static sceneManager: SceneManger
    static get instance() {
        if (!this.sceneManager) {
            this.sceneManager = new SceneManger()
        }
        return this.sceneManager
    }

    // delete other scene
    private removeOther(scene) {
        let arr = [this.startScene]
        arr.forEach(item => {
            if (scene === item) {
                return
            }
            if (item.parent) {
                this._stage.removeChild(item)
            }
        })
    }

    // 设置根场景
    public setScene(s: egret.DisplayObjectContainer) {
        this._stage = s
    }

    // 开始场景
    static toStartScene() {
        this.instance.removeOther(this.instance.startScene)
        this.instance._stage.addChild(this.instance.startScene)
    }
}