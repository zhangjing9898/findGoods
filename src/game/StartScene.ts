class StartScene extends eui.Component implements eui.UIComponent {

	public musicImg: eui.Image;
	public pjImg: eui.Image;
	public sbImg: eui.Image;

	public rewardBtn: eui.Button;
	public btnGroup: eui.Group;
	public rewardMyBtn: eui.Button;
	public shareBtn: eui.Button;
	public toMainBtn: eui.Button;

	public popRewardGroup: eui.Group;
	public popRuleGroup: eui.Group;

	private sound: egret.Sound;
	private soundChannel: egret.SoundChannel;

	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		SceneManager.toMainScene();
		// play music
		// this.sound = RES.getRes('music_m4a');
		// this.soundChannel = this.sound.play(0, -1);

		// this.musicImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.musicController, this);
		// this.rewardBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{
		// 	this.popRewardGroup.visible = true;
		// }, this);

		// this.btnGroup.touchEnabled = true;
		// this.btnGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.controllGroupBtns, this);
		
		// // monitor pop-up closure event
		// this.addEventListener('CLOSE_POP_REWARD_MY', this.closeRewardMy, this);
		// this.addEventListener('CLOSE_POP_RULE', this.closeRule, this);

		// this.InitAnimation();
	}

	// express my reward pop-up
	private showMyReward(): void {
		this.popRewardGroup.visible = true;
	}

	// button event delegation
	private controllGroupBtns(evt: egret.TouchEvent): void {
		switch(evt.target) {
			case this.rewardBtn:
				this.showMyReward();
				break;
			case this.shareBtn:
				break;
			case this.toMainBtn:
				SceneManager.toMainScene();
				break;
		}
	}

	// close myReward pop-up
	public closeRewardMy() {
		this.popRewardGroup.visible = false;
	}

	// close rule pop-up
	public closeRule() {
		this.popRuleGroup.visible = false;
	}

	// control music
	private musicController(): void {
		if (this.soundChannel) {
			this.soundChannel.stop();
			this.soundChannel = null;
			this.musicRotation(false);
			return;
		}
		this.soundChannel = this.sound.play(0, -1);
		this.musicRotation(true);
	}
	// control musicImg rotation
	private musicRotation(isPlay: boolean): void {
		let tw = egret.Tween;
		isPlay === true ? tw.resumeTweens(this.musicImg) : tw.pauseTweens(this.musicImg);
	}

	// initialize animation
	private InitAnimation(): void {
		let tw = egret.Tween;

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
	}
}