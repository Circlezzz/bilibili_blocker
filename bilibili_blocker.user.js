// ==UserScript==
// @name         block bilibili danmaku and comments
// @name:zh-CN   屏蔽bilibili弹幕和评论
// @namespace    Dreamfall
// @version      1.1
// @description  block all the danmaku and comments of bilibili
// @description:zh-CN 屏蔽全部bilibili弹幕和评论
// @author       Dreamfall
// @icon         https://www.bilibili.com/favicon.ico
// @homepageURL  https://github.com/boeing888/bilibili_blocker
// @match        https://www.bilibili.com/video/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // remove comment
    document.getElementById("comment").style.display = "none";

    // remove recommendation
    document.getElementById("reco_list").style.display = "none";

    // toggle danmaku button
    // define a new observer
    var observer = new MutationObserver(function (mutations, observer) {
        // look through all mutations that just occured
        for (let i = 0; i < mutations.length; i++) {
            // look through all added nodes of this mutation
            for (let j = 0; j < mutations[i].addedNodes.length; j++) {
                // was a child added with className of 'bui-checkbox'?
                if (mutations[i].addedNodes[j].className == "bui-checkbox") {
                    mutations[i].addedNodes[j].click();
                    observer.disconnect();
                }
            }
        }
    });
    observer.observe(document.getElementById("bilibiliPlayer"), { childList: true, subtree: true });
})();