(()=>{"use strict";var t=function(t,e,n,o){return new(n||(n=Promise))((function(r,l){function c(t){try{s(o.next(t))}catch(t){l(t)}}function a(t){try{s(o.throw(t))}catch(t){l(t)}}function s(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,a)}s((o=o.apply(t,e||[])).next())}))},e=function(t,e){var n,o,r,l,c={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return l={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function a(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;l&&(l=0,a[0]&&(c=0)),c;)try{if(n=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return c.label++,{value:a[1],done:!1};case 5:c.label++,o=a[1],a=[0];continue;case 7:a=c.ops.pop(),c.trys.pop();continue;default:if(!((r=(r=c.trys).length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){c=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){c.label=a[1];break}if(6===a[0]&&c.label<r[1]){c.label=r[1],r=a;break}if(r&&c.label<r[2]){c.label=r[2],c.ops.push(a);break}r[2]&&c.ops.pop(),c.trys.pop();continue}a=e.call(t,c)}catch(t){a=[6,t],o=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}};console.log("Bakcground Script Loaded!"),setInterval((function(){return t(void 0,void 0,void 0,(function(){var t;return e(this,(function(e){switch(e.label){case 0:return[4,chrome.extension.isAllowedIncognitoAccess()];case 1:return t=e.sent(),console.log(t),chrome.storage.local.set({isAllowed:t},(function(){console.log("Data Saved")})),[2]}}))}))}),1e3),chrome.runtime.setUninstallURL("http://localhost:3000",(function(){return t(void 0,void 0,void 0,(function(){var t;return e(this,(function(e){switch(e.label){case 0:console.log("Uninstall URL set"),e.label=1;case 1:return e.trys.push([1,3,,4]),[4,fetch("http://localhost:3000?status=uninstalled")];case 2:return t=e.sent(),console.log(t.status," status"),[3,4];case 3:return e.sent(),console.log("Server is not running"),[3,4];case 4:return[2]}}))}))}))})();