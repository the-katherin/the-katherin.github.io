(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{280:function(t,e,n){!function(t){"use strict";var e={searchParams:"URLSearchParams"in self,iterable:"Symbol"in self&&"iterator"in Symbol,blob:"FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in self,arrayBuffer:"ArrayBuffer"in self};if(e.arrayBuffer)var n=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],r=ArrayBuffer.isView||function(t){return t&&n.indexOf(Object.prototype.toString.call(t))>-1};function o(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function i(t){return"string"!=typeof t&&(t=String(t)),t}function a(t){var n={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return e.iterable&&(n[Symbol.iterator]=function(){return n}),n}function s(t){this.map={},t instanceof s?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function c(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function u(t){return new Promise(function(e,n){t.onload=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function f(t){var e=new FileReader,n=u(e);return e.readAsArrayBuffer(t),n}function l(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function h(){return this.bodyUsed=!1,this._initBody=function(t){this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:e.blob&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:e.formData&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:e.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():e.arrayBuffer&&e.blob&&function(t){return t&&DataView.prototype.isPrototypeOf(t)}(t)?(this._bodyArrayBuffer=l(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):e.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(t)||r(t))?this._bodyArrayBuffer=l(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):e.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},e.blob&&(this.blob=function(){var t=c(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?c(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(f)}),this.text=function(){var t=c(this);if(t)return t;if(this._bodyBlob)return function(t){var e=new FileReader,n=u(e);return e.readAsText(t),n}(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),n=new Array(e.length),r=0;r<e.length;r++)n[r]=String.fromCharCode(e[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},e.formData&&(this.formData=function(){return this.text().then(y)}),this.json=function(){return this.text().then(JSON.parse)},this}s.prototype.append=function(t,e){t=o(t),e=i(e);var n=this.map[t];this.map[t]=n?n+", "+e:e},s.prototype.delete=function(t){delete this.map[o(t)]},s.prototype.get=function(t){return t=o(t),this.has(t)?this.map[t]:null},s.prototype.has=function(t){return this.map.hasOwnProperty(o(t))},s.prototype.set=function(t,e){this.map[o(t)]=i(e)},s.prototype.forEach=function(t,e){for(var n in this.map)this.map.hasOwnProperty(n)&&t.call(e,this.map[n],n,this)},s.prototype.keys=function(){var t=[];return this.forEach(function(e,n){t.push(n)}),a(t)},s.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),a(t)},s.prototype.entries=function(){var t=[];return this.forEach(function(e,n){t.push([n,e])}),a(t)},e.iterable&&(s.prototype[Symbol.iterator]=s.prototype.entries);var d=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function p(t,e){var n=(e=e||{}).body;if(t instanceof p){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new s(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,n||null==t._bodyInit||(n=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new s(e.headers)),this.method=function(t){var e=t.toUpperCase();return d.indexOf(e)>-1?e:t}(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function y(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var n=t.split("="),r=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");e.append(decodeURIComponent(r),decodeURIComponent(o))}}),e}function v(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new s(e.headers),this.url=e.url||"",this._initBody(t)}p.prototype.clone=function(){return new p(this,{body:this._bodyInit})},h.call(p.prototype),h.call(v.prototype),v.prototype.clone=function(){return new v(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new s(this.headers),url:this.url})},v.error=function(){var t=new v(null,{status:0,statusText:""});return t.type="error",t};var b=[301,302,303,307,308];v.redirect=function(t,e){if(-1===b.indexOf(e))throw new RangeError("Invalid status code");return new v(null,{status:e,headers:{location:t}})},t.DOMException=self.DOMException;try{new t.DOMException}catch(e){t.DOMException=function(t,e){this.message=t,this.name=e;var n=Error(t);this.stack=n.stack},t.DOMException.prototype=Object.create(Error.prototype),t.DOMException.prototype.constructor=t.DOMException}function m(n,r){return new Promise(function(o,i){var a=new p(n,r);if(a.signal&&a.signal.aborted)return i(new t.DOMException("Aborted","AbortError"));var c=new XMLHttpRequest;function u(){c.abort()}c.onload=function(){var t={status:c.status,statusText:c.statusText,headers:function(t){var e=new s;return t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var n=t.split(":"),r=n.shift().trim();if(r){var o=n.join(":").trim();e.append(r,o)}}),e}(c.getAllResponseHeaders()||"")};t.url="responseURL"in c?c.responseURL:t.headers.get("X-Request-URL");var e="response"in c?c.response:c.responseText;o(new v(e,t))},c.onerror=function(){i(new TypeError("Network request failed"))},c.ontimeout=function(){i(new TypeError("Network request failed"))},c.onabort=function(){i(new t.DOMException("Aborted","AbortError"))},c.open(a.method,a.url,!0),"include"===a.credentials?c.withCredentials=!0:"omit"===a.credentials&&(c.withCredentials=!1),"responseType"in c&&e.blob&&(c.responseType="blob"),a.headers.forEach(function(t,e){c.setRequestHeader(e,t)}),a.signal&&(a.signal.addEventListener("abort",u),c.onreadystatechange=function(){4===c.readyState&&a.signal.removeEventListener("abort",u)}),c.send(void 0===a._bodyInit?null:a._bodyInit)})}m.polyfill=!0,self.fetch||(self.fetch=m,self.Headers=s,self.Request=p,self.Response=v),t.Headers=s,t.Request=p,t.Response=v,t.fetch=m,Object.defineProperty(t,"__esModule",{value:!0})}(e),t.exports=self.fetch},281:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o}),n.d(e,"c",function(){return i}),n.d(e,"d",function(){return a}),n.d(e,"e",function(){return s}),n.d(e,"f",function(){return c}),n.d(e,"g",function(){return u});var r="02e8d88534de4f6abb6c90514e95aaea",o="us",i="en",a="https://newsapi.org/v2/",s="everything?",c=10,u="sources?"},282:function(t,e,n){},283:function(t,e,n){"use strict";(function(t){var r=n(281);function o(t,e,n,r,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,o)}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var a=new(function(){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e)}return function(t,e,n){e&&i(t.prototype,e),n&&i(t,n)}(e,[{key:"getList",value:function(){var t=function(t){return function(){var e=this,n=arguments;return new Promise(function(r,i){var a=t.apply(e,n);function s(t){o(a,r,i,s,c,"next",t)}function c(t){o(a,r,i,s,c,"throw",t)}s(void 0)})}}(regeneratorRuntime.mark(function t(){var n,o,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(r.d).concat(r.g,"language=").concat(r.c,"&country=").concat(r.b,"&apiKey=").concat(r.a),t.next=3,e.loadData(n);case 3:return o=t.sent,i=o.sources,t.abrupt("return",i);case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}],[{key:"loadData",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=new Request(e);return t(n).then(function(t){return t.json()}).catch(function(t){return console.log(t)})}}]),e}());e.a=a}).call(this,n(280))},284:function(t,e,n){"use strict";(function(t){var r=n(281);function o(t,e,n,r,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,o)}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var a=new(function(){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e)}return function(t,e,n){e&&i(t.prototype,e),n&&i(t,n)}(e,[{key:"getList",value:function(){var t=function(t){return function(){var e=this,n=arguments;return new Promise(function(r,i){var a=t.apply(e,n);function s(t){o(a,r,i,s,c,"next",t)}function c(t){o(a,r,i,s,c,"throw",t)}s(void 0)})}}(regeneratorRuntime.mark(function t(){var n,o,i,a,s=arguments;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=s.length>0&&void 0!==s[0]?s[0]:"",o="".concat(r.d).concat(r.e,"q=news&sources=").concat(n,"&language=").concat(r.c,"&pageSize=").concat(r.f,"&apiKey=").concat(r.a),t.next=4,e.loadData(o);case 4:return i=t.sent,a=i.articles,t.abrupt("return",a);case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}],[{key:"loadData",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=new Request(e);return t(n).then(function(t){return t.json()}).catch(function(t){return console.log(t)})}}]),e}());e.a=a}).call(this,n(280))},285:function(t,e,n){"use strict";n.r(e);n(282);var r=n(283);function o(t,e,n,r,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,o)}function i(t){return function(){var e=this,n=arguments;return new Promise(function(r,i){var a=t.apply(e,n);function s(t){o(a,r,i,s,c,"next",t)}function c(t){o(a,r,i,s,c,"throw",t)}s(void 0)})}}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var s=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._channels=[]}return function(t,e,n){e&&a(t.prototype,e),n&&a(t,n)}(t,[{key:"getListData",value:function(){var t=i(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.getList();case 2:this._channels=t.sent;case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var e=i(regeneratorRuntime.mark(function e(n){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getListData();case 2:r=t.getListMarkup(this._channels),n.innerHTML=r;case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}],[{key:"getListMarkup",value:function(t){var e="";return t.map(function(t){var n=t.category,r=void 0===n?"":n,o=t.description,i=void 0===o?"":o,a=t.id,s=void 0===a?"":a,c=t.name,u=void 0===c?"":c,f=t.url,l=void 0===f?"":f;e+='\n                <div class="channel" id='.concat(s,'>\n                    <h3 class="channel__name">').concat(u,"</h3>\n                    <span class='channel__category'>").concat(r,'</span>\n                    <p class="channel__description">').concat(i,"</p>\n                    <a href=").concat(l," target='_blank' class=\"channel__link\">Link</a>\n                </div>\n            ")}),e}}]),t}(),c=n(284);function u(t,e,n,r,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,o)}function f(t){return function(){var e=this,n=arguments;return new Promise(function(r,o){var i=t.apply(e,n);function a(t){u(i,r,o,a,s,"next",t)}function s(t){u(i,r,o,a,s,"throw",t)}a(void 0)})}}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var h=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._articles=[]}return function(t,e,n){e&&l(t.prototype,e),n&&l(t,n)}(t,[{key:"getListData",value:function(){var t=f(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.getList(e);case 2:this._articles=t.sent;case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"render",value:function(){var e=f(regeneratorRuntime.mark(function e(){var n,r,o,i=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>0&&void 0!==i[0]?i[0]:"",r=i.length>1?i[1]:void 0,e.next=4,this.getListData(n);case 4:o=t.getListMarkup(this._articles),r.innerHTML=o;case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}],[{key:"getListMarkup",value:function(t){var e="";return t.map(function(t){var n=t.author,r=void 0===n?"not specified":n,o=t.description,i=void 0===o?"":o,a=t.publishedAt,s=void 0===a?"not specified":a,c=t.source.name,u=t.title,f=void 0===u?"Title":u,l=t.url,h=void 0===l?"":l,d=t.urlToImage;e+="\n                <div class=\"news-list__item news\">\n                    <img class='news__image' src=".concat((void 0===d?"":d)||"",">\n                    <div className=\"news__content\"> \n                        <h2 class='news-title'>\n                                <a href=").concat(h," target='_blank'>").concat(f,"</a>\n                        </h2>\n                        <p class='news-description'>").concat(i,"</p>\n                        <p classs='news-author'>").concat(r||"","</p>\n                        <div class='news-info'> \n                            <span class='news-date'>").concat(new Date(s).toUTCString(),' | </span>\n                            <span className="news-source">').concat(c,"</span>\n                        </div>\n                    </div>\n                </div>\n            ")}),e}}]),t}();function d(t,e,n,r,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,o)}function p(t){return function(){var e=this,n=arguments;return new Promise(function(r,o){var i=t.apply(e,n);function a(t){d(i,r,o,a,s,"next",t)}function s(t){d(i,r,o,a,s,"throw",t)}a(void 0)})}}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var v=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.channelsContainer=document.getElementById("channels-list"),this.chooseChannelButton=document.getElementById("choose-channel-button"),this.channelsComponent=new s,this.articlesComponent=new h}return function(t,e,n){e&&y(t.prototype,e),n&&y(t,n)}(t,[{key:"addEventListeners",value:function(){this.chooseChannelButton.addEventListener("click",this.onChooseChannelButtonClick),this.channelsContainer.addEventListener("click",this.onChannelChoose.bind(this))}},{key:"onChooseChannelButtonClick",value:function(t){scrollTo(0,0);var e=document.getElementById("main-container");e.classList.contains("main--hide-channels")&&e.classList.remove("main--hide-channels")}},{key:"onChannelChoose",value:function(){var t=p(regeneratorRuntime.mark(function t(e){var n,r,o,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=document.getElementById("main-container"),r=document.getElementById("news-list"),o=e.target,!(i=o.id||o.parentElement.id)||"channels-list"===i){t.next=9;break}return t.next=7,this.articlesComponent.render(i,r);case 7:n.classList.add("main--hide-channels"),scrollTo(0,0);case 9:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"init",value:function(){var t=p(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.channelsComponent.render(this.channelsContainer);case 2:this.addEventListeners();case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}]),t}();e.default=function(){(new v).init()}}}]);