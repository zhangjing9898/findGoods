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
	}
	
}