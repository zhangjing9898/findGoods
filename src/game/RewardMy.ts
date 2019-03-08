class RewardMy extends eui.Component implements eui.UIComponent {

    public closeBtn: eui.Button;

    public constructor() {
        super();
    }

    protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.close, this);
    }
    
    private close() {
        debugger
        let closeEvent: egret.Event = new egret.Event('CLOSE_POP_REWARD_MY');
        this.parent.parent.dispatchEvent(closeEvent);
    }
}