class MainScene extends eui.Component implements  eui.UIComponent {
	
	public scroller: eui.Scroller;
	public viewportGroup: eui.Group;

	public mThigh: eui.Image;
	public mCalf: eui.Image;
	public mHand: eui.Image;
	public smokeGroup: eui.Group;

	public gHand: eui.Image;
	public gLeg: eui.Image;

	public tip: eui.Image;

	public directionGroup: eui.Group;
	public lr: eui.Image;
	public rr: eui.Image;

	public popPrizeGroup: eui.Group;
	public msg: eui.Label;
	public icon: eui.Image;
	public img: eui.Image;
	public closeBtn: eui.Button;
	public appName: eui.Label;
	public downloadGroup: eui.Group;

	public total: eui.Label;
	public restRect: eui.Rect;

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

		// setting scroller
		this.scroller.viewport = this.viewportGroup;
		this.scroller.bounces = true;
		this.scroller.horizontalScrollBar.autoVisibility = false;
		this.scroller.viewport.scrollH = 800;

		this.startAnimation();
	}

	// initialize animation
	private startAnimation() {
		let tw = egret.Tween;

		// man arm animation
		tw.get(this.mHand, {
			loop: true
		}).to({
			rotation: 16
		}, 800)
			.to({
				rotation: 15
			}, 200)
			.wait(1000)
			.to({
				rotation: 0
			}, 1000)
			.wait(500);

		// man calf animation
		tw.get(this.mCalf, {
			loop: true
		}).to({
			x: 60.31,
			y: 170.16,
			rotation: 18
		}, 800)
			.to({
				rotation: 16
			}, 200)
			.wait(1000)
			.to({
				x: 56.83,
				y: 180.73,
				rotation: 2
			}, 1000)
			.wait(500)

		// man smog animation
		tw.get(this.smokeGroup, {
			loop: true
		}).to({
			x: 56,
			y: 0,
			alpha: 1
		}, 1000)
			.wait(300)
			.to({
				alpha: 0
			}, 1000)
			.to({
				x: 54.33,
				y: 8.98
			})

		// girl arm animation
		tw.get(this.gHand, {
			loop: true
		}).to({
			rotation: -3
		}, 800)
			.to({
				rotation: 5.21
			}, 800)

		// girl leg animation
		tw.get(this.gLeg, {
			loop: true
		}).to({
			rotation: -10
		}, 800)
			.to({
				rotation: 0
			}, 800)
	}
	
}