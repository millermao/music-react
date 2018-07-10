// (function(doc, win) {
//     var docEl = doc.documentElement,
//         isIOS = navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
//         dpr = isIOS ? Math.min(win.devicePixelRatio, 3) : 1,
//         dpr = window.top === window.self ? dpr : 1, //被iframe引用时，禁止缩放
//         dpr = 1,
//         scale = 1 / dpr,
//         resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
//     docEl.dataset.dpr = dpr;
//     var metaEl = doc.createElement('meta');
//     metaEl.name = 'viewport';
//     metaEl.content = 'initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale+',user-scalable=no,viewport-fit=cover';
//     docEl.firstElementChild.appendChild(metaEl);
//     var recalc = function() {
//         var width = docEl.clientWidth;
//         // if (width / dpr > 750) {
//         //     width = 750 * dpr;
//         // }
//         // 乘以100，px : rem = 100 : 1
//         docEl.style.fontSize = 100 * (width /750) + 'px';
//     };
//     recalc()
//     if (!doc.addEventListener) return;
//     win.addEventListener(resizeEvt, recalc, false);
// })(document, window);
!function(e){function t(a){if(i[a])return i[a].exports;var n=i[a]={exports:{},id:a,loaded:!1};return e[a].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var i={};return t.m=e,t.c=i,t.p="",t(0)}([function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=window;t["default"]=i.flex=function(e,t){var a=e||100,n=t||1,r=i.document,o=navigator.userAgent,d=o.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i),l=o.match(/U3\/((\d+|\.){5,})/i),c=l&&parseInt(l[1].split(".").join(""),10)>=80,p=navigator.appVersion.match(/(iphone|ipad|ipod)/gi),s=i.devicePixelRatio||1;p||d&&d[1]>534||c||(s=1);var u=1/s,m=r.querySelector('meta[name="viewport"]');m||(m=r.createElement("meta"),m.setAttribute("name","viewport"),r.head.appendChild(m)),m.setAttribute("content","width=device-width,user-scalable=no,initial-scale="+u+",maximum-scale="+u+",minimum-scale="+u),r.documentElement.style.fontSize=a/2*s*n+"px"},e.exports=t["default"]}]);
flex(100, 1);