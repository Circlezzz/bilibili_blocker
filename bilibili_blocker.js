// ==UserScript==
// @name         block bilibili danmaku and comments
// @name:zh-CN   屏蔽bilibili弹幕和评论
// @namespace    Dreamfall
// @version      0.1
// @description  block all the danmaku and comments of bilibili
// @description:zh-CN 屏蔽全部bilibili弹幕和评论
// @author       Dreamfall
// @homepageURL  https://github.com/boeing888/bilibili_blocker
// @downloadURL  https://github.com/boeing888/bilibili_blocker/raw/master/bilibili_blocker.js
// @match        https://www.bilibili.com/video/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    document.getElementById("comment").style.display = "none";
    // define a new observer
    var observer = new MutationObserver(function (mutations, observer) {
        // look through all mutations that just occured
        for (let i = 0; i < mutations.length; ++i) {
            // look through all added nodes of this mutation
            for (let j = 0; j < mutations[i].addedNodes.length; ++j) {
                // was a child added with ID of 'bar'?
                if (mutations[i].addedNodes[j].className == "bui-checkbox") {
                    mutations[i].addedNodes[j].click();
                }
            }
        }
    });
    observer.observe(document.getElementById("bilibiliPlayer"), { childList: true, subtree: true });
})();