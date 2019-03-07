//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class LoadingUI extends egret.Sprite implements RES.PromiseTaskReporter {

    public constructor() {
        super();
        this.createView();
    }

    private percent: eui.Label = new eui.Label();
    private group: eui.Group;
    private bar: egret.Shape = new egret.Shape();
    
    private createView(): void {
        this.width = GameUtil.getStageWidth();
        this.height = GameUtil.getStageHeight();
        // 背景色
        let bg: egret.Shape = new egret.Shape();
        bg.graphics.beginFill(0x273826, 1);
        bg.graphics.drawRect(0, 0, this.width, this.height);
        bg.graphics.endFill();
        this.addChild(bg);

        // loading图片
        let loadingPng = new eui.Image();
        loadingPng.source = 'loading_png';

        // 百分比
        this.percent.textColor = 0xF7DB91;
        this.percent.textAlign = 'center';
        this.percent.y = 580;

        // 添加组
        this.group = new eui.Group();
        this.addChild(this.group);
        this.group.layout = new eui.BasicLayout();
        this.group.width = 400;
        this.group.height = 300;
        this.group.x = GameUtil.getCenterW(400);
        this.group.y = GameUtil.getCenterH(300);

        this.group.addChild(loadingPng);
        this.group.addChild(this.bar);
        this.group.addChild(this.percent);

        let vLayout: eui.VerticalLayout = new eui.VerticalLayout();
        vLayout.horizontalAlign = egret.HorizontalAlign.CENTER;
        this.group.layout = vLayout;
    }

    public onProgress(current: number, total: number): void {
        let percent: number = Math.round(current / total * 100);
        this.percent.text = `${percent}%`;
        // 进度条
        this.bar.graphics.beginFill(0x4C947A, 1);
        this.bar.graphics.drawRect(50, 150, 3*percent, 12);
        this.bar.graphics.endFill();
    }
}
