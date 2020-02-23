// ==UserScript==
// @name         block bilibili danmaku
// @name:zh-CN   屏蔽bilibili弹幕
// @namespace    Dreamfall
// @version      1.5
// @description  block all the danmaku of bilibili
// @description:zh-CN 屏蔽全部bilibili弹幕
// @author       Dreamfall
// @icon         https://www.bilibili.com/favicon.ico
// @homepageURL  https://github.com/boeing888/bilibili_blocker
// @match        *://www.bilibili.com/video/*
// @run-at       document-idle
// @require      https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js
// @require      https://greasyfork.org/scripts/48306-waitforkeyelements/code/waitForKeyElements.js?version=275769
// @grant        none
// ==/UserScript==


'use strict';

waitForKeyElements("div[class='bilibili-player-video-danmaku-switch bui bui-switch']>input", (button) => { button[0].click() }, false);