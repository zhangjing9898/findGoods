# FindGoods

-----
README | 中文

## 项目介绍

FindGoods：找礼物的一个小营销游戏(仿360)，基于egret白鹭游戏引擎开发，主要分为2个大页面，用EUI build相应的页面，用tween来控制动画，ts来管理之间的交互(比如pop-up的弹出和关闭，物品isClick的状态等)

## 项目演示

[演示视频地址](https://www.iqiyi.com/v_19s6y9vzqh.html?p1=2_22_222)

#### 部分截图

![image.png](https://upload-images.jianshu.io/upload_images/3378252-dcf011168244bd9e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/5000)

## 项目功能结构

![findGoods.png](https://upload-images.jianshu.io/upload_images/3378252-8caad8144849391e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 项目运行

```shell
$ egret build xxx(项目名)
$ egret startserver xxx(项目名) -a
```

## 项目搭建教程

接下来篇幅可能较长，主要会手把手教学——如何搭建这么个可爱的游戏项目。

### 1.EUI build页面

游戏最直观呈现的就是页面，egret给我们提供了一个wing的编辑器(个人感觉和vscode超级像)，wing方便我们对图片和组件进行拖拽和build，具体就不再赘述这里的教程，参考官网即可快速入门 —— [EUI入门手册](https://developer.egret.com/cn/article/index/id/518)

记住要点：**拖拖拖点点点**即可

示例图：

![image.png](https://upload-images.jianshu.io/upload_images/3378252-f2221ee7abedbb48.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

-----

### 2.tween制作动画

当我们用EUI搭建好大概的页面的时候，我们会发现有些动画应该怎么制作呢？比如开始页面中转动的musicCD和摇晃的扫把和簸箕。

其实很简单，用tween就能够轻易的处理，写法有种类jQuery的写法，用到的属性也不外于xy坐标或者css3中提到。

这里列举一下，通过tween如何让MusicCD旋转起来：

```js
let tw = egret.Tween;
// musicImg rotation
tw.get(this.musicImg, {
    loop: true
}).to({
    rotation: 36
}, 3000);
```
同理，根据这样的模式，我们处理晃动的扫把和簸箕。

**接下来，讲解一下动画的man和girl是怎么做出来的**

man的动画，通过这段代码实现，用于这里不太好放video，如果想参考效果，建议查看上方项目演示video。
```js
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
```
girl的动画同man，参考写出即可。

-------

### 3.游戏逻辑

这个游戏逻辑相对来说挺简单的，它是这么一个步骤流程：

- 点击主页面中的物品(ps：某些物品下面藏有礼物)
- 如果找到房间内藏有礼物的物品，这时候会弹出一个弹框，弹框内部会出现你找到了什么礼物(ps：这里会发生一个request进行请求，礼物是根据response来进行填充)
- 同时，主页面上方的**剩余值会对应减少，红色矩阵显示也会对应缩短**
- 最后，当剩余值为0，也就是用户找到了所有的礼物，代表`通关`

#### 注意：

这里建立了一个全局的**gameData**来管理找到礼物的个数。
这里提到request，如果不想用node自己搭建服务器来写api接口，可以使用`easy-mock`来进行简单的搭建，具体用法可自行google

#### 补充：

关于**easy-mock的使用入门***，推荐几篇blog，写的特别通俗易懂：

- [EasyMock新版本用法](https://blog.csdn.net/sai739295732/article/details/78687939)
- [浅谈easy-mock](https://blog.csdn.net/weixin_43254766/article/details/83758660)

-------------
### 4.发布游戏

当整个游戏制作完成后，我们需要将它进行发布，这里只涉及H5方面发布。
一句命令行而已的事：

```cli
$ egret publish xxx(项目名)
```
打包成功后，会出现一个bin-release的文件夹

![image.png](https://upload-images.jianshu.io/upload_images/3378252-47ed28e4a160a509.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

然后把我框出来的1903....这个文件夹里面的东西，拖到服务器上，然后对应访问，就可以啦。

#### 敲黑板划重点

**如果说，我们平时在自我测试环节，起一个本地服务，然后手机在同一个网络下访问本机ip地址就可以**

这样应该会比较方便，简单介绍一下这个步骤：

#### 简单的http服务

首先安装**http-server**模块。

```cli
$ npm i -g http-server
```
运行发布完成的包
```cli
$ cd bin-release/web/190311152632
$ ls
index.html  js  manifest.json  resource
$ hs -p 8088
Starting up http-server, serving ./
Available on:
 http://127.0.0.1:8088
 http://192.168.1.100:8088
Hit CTRL-C to stop the server
```
最后一级文件夹名字其实是时间戳。
这样我们便可以在pc浏览器或者手机浏览器中查看游戏了。

## 项目细究

在开发中，我因为2个小错误，导致进度卡壳了一会儿，这里记录一下，以防下次重犯：

- 拼写问题
	+ 由于第一次写rotation的时候，打快了，少写了一个t，导致编辑器记住了这个关键词，然后每次要敲rotation的时候，都提示rotaion，最后在tween缓动那里，排查了一会儿问题(为啥不动呀)，最后才发现是拼写问题

- group点击穿透
	+ 主页面，点击物品：在监听touchEvent中的tap事件的时候，发现currentTarget一直是group，而不是自定义组件myImage，导致后续操作失败，最后发现是在exml中对应group中少加了一句：**touchThrough = "true"**，导致，点击无法穿透，只能触发最上一层。
	+ 如果不在exml中加这个也行，直接在ts中写**this.group.touchThrough = true** 
     
这里顺便扩展一下，group中的touch相关属性：
```js
this.group.touchEnabled = false;        //禁用可触摸属性
this.group.touchThrough = true;         //启用点击穿透属性
this.group.touchChildren = false;       //禁用可触摸子类属性
```
`注意`：遇到设置后**依然无法点击穿透**的情况，可以检查是否有其他父组件挡住了自己所要操作的group，此时更改父group的点击穿透属性即可。

## 项目源码

代码中写了很多注释，基本都能看懂就不再赘述啦~

[源码地址](https://github.com/zhangjing9898/findGoods)




