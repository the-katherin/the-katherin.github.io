!function(e){var n={};function t(s){if(n[s])return n[s].exports;var a=n[s]={i:s,l:!1,exports:{}};return e[s].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=n,t.d=function(e,n,s){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:s})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(t.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(s,a,function(n){return e[n]}.bind(null,a));return s},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=1)}([function(e,n,t){},function(e,n,t){"use strict";t.r(n);t(0);const s="02e8d88534de4f6abb6c90514e95aaea",a="us",i="en",c="https://newsapi.org/v2/",r="everything?",o=10,l="sources?";var d=new class{constructor(){this._articles=[],this._channels=[]}_loadData(e=""){const n=new Request(e);return fetch(n).then(e=>e.json()).catch(e=>console.log(e))}async getChannels(){const e=`${c}${l}language=${i}&country=${a}&apiKey=${s}`,{sources:n}=await this._loadData(e);this._channels=n}async getArticles(e=""){const n=`${c}${r}q=news&sources=${e}&language=${i}&pageSize=${o}&apiKey=${s}`,{articles:t}=await this._loadData(n);this._articles=t}get channels(){return this._channels}get articles(){return this._articles}};(new class{constructor(){this.channelsContainer=document.getElementById("channels-list"),this.chooseChannelButton=document.getElementById("choose-channel-button")}addEventListeners(){this.chooseChannelButton.addEventListener("click",this.onChooseChannelButtonClick),this.channelsContainer.addEventListener("click",this.onChannelChoose.bind(this))}async onChannelChoose(e){const n=document.getElementById("main-container"),{target:t}=e,s=t.id||t.parentElement.id;if(s){await d.getArticles(s);const{articles:e}=d;this.renderArticles(e),n.classList.add("main--hide-channels"),scrollTo(0,0)}}onChooseChannelButtonClick(e){scrollTo(0,0);const n=document.getElementById("main-container");n.classList.contains("main--hide-channels")&&n.classList.remove("main--hide-channels")}renderChannels(e=[]){e.map(e=>{const{category:n="",description:t="",id:s="",name:a="",url:i=""}=e,c=document.createElement("div");c.classList.add("channel"),c.setAttribute("id",`${s}`),c.innerHTML=`\n                <h3 class="channel__name">${a}</h3>\n                <span class='channel__category'>${n}</span>\n                <p class="channel__description">${t}</p>\n                 <a href=${i} target='_blank' class="channel__link">Link</a>\n            `,this.channelsContainer.appendChild(c)})}renderArticles(e=[]){const n=document.getElementById("news-list");n.innerHTML="",e.map(e=>{const{author:t="not specified",description:s="",publishedAt:a="not specified",source:{name:i},title:c="Title",url:r="",urlToImage:o=""}=e,l=document.createElement("div");l.classList.add("news-list__item","news"),l.innerHTML=`\n                <img class='news__image' src=${o||""}>\n                <div className="news__content"> \n                    <h2 class='news-title'>\n                            <a href=${r} target='_blank'>${c}</a>\n                    </h2>\n                    <p class='news-description'>${s}</p>\n                    <p classs='news-author'>${t||""}</p>\n                    <div class='news-info'> \n                        <span class='news-date'>${new Date(a).toUTCString()} | </span>\n                        <span className="news-source">${i}</span>\n                </div>\n            </div>`,n.appendChild(l)})}async init(){await d.getChannels();const{channels:e}=d;this.renderChannels(e),this.addEventListeners()}}).init()}]);