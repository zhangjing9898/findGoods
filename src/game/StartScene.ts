class StartScene extends eui.Component implements  eui.UIComponent {
	
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

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		// play music
		this.sound = RES.getRes('music_m4a');
		this.soundChannel = this.sound.play(0, -1);

		this.musicImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.musicController, this);
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
}