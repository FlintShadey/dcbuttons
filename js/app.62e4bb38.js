(function(){"use strict";var t={6964:function(t,o,n){var e=n(5130),r=n(6768);const a={id:"app"};function i(t,o,n,e,i,c){return(0,r.uX)(),(0,r.CE)("div",a,[(0,r.Lk)("button",{onClick:o[0]||(o[0]=(...t)=>c.copyAdult&&c.copyAdult(...t)),class:"copy-button adult-button"},"Adult"),(0,r.Lk)("button",{onClick:o[1]||(o[1]=(...t)=>c.copyMom&&c.copyMom(...t)),class:"copy-button mom-button"},"Mom"),(0,r.Lk)("button",{onClick:o[2]||(o[2]=(...t)=>c.copyDad&&c.copyDad(...t)),class:"copy-button dad-button"},"Dad"),(0,r.Lk)("button",{onClick:o[3]||(o[3]=(...t)=>c.copyParents&&c.copyParents(...t)),class:"copy-button parents-button"}," Parents "),(0,r.Lk)("button",{onClick:o[4]||(o[4]=(...t)=>c.copyGuardian&&c.copyGuardian(...t)),class:"copy-button guardian-button"}," Guardian ")])}var c={data(){return{adultText:"The patient is given and understands strict follow up and return instruction, patient agrees and wishes to be discharged.",momText:"The mom is given and understands strict follow up and return instruction, mom agrees and wishes to be discharged.",dadText:"The dad is given and understands strict follow up and return instruction, dad agrees and wishes to be discharged.",parentsText:"The parents are given and understand strict follow up and return instruction, the parents agree and wish to be discharged.",guardianText:"The guardian is given and understands strict follow up and return instruction, guardian agrees and wishes to be discharged."}},methods:{copyAdult(){navigator.clipboard.writeText(this.adultText).then((()=>{console.log("Text copied to clipboard")})).catch((t=>{console.error("Could not copy text: ",t)}))},copyMom(){navigator.clipboard.writeText(this.momText).then((()=>{console.log("Text copied to clipboard")})).catch((t=>{console.error("Could not copy text: ",t)}))},copyDad(){navigator.clipboard.writeText(this.dadText).then((()=>{console.log("Text copied to clipboard")})).catch((t=>{console.error("Could not copy text: ",t)}))},copyParents(){navigator.clipboard.writeText(this.parentsText).then((()=>{console.log("Text copied to clipboard")})).catch((t=>{console.error("Could not copy text: ",t)}))},copyGuardian(){navigator.clipboard.writeText(this.guardianText).then((()=>{console.log("Text copied to clipboard")})).catch((t=>{console.error("Could not copy text: ",t)}))}}},u=n(1241);const d=(0,u.A)(c,[["render",i],["__scopeId","data-v-69262592"]]);var s=d;(0,e.Ef)(s).mount("#app")}},o={};function n(e){var r=o[e];if(void 0!==r)return r.exports;var a=o[e]={exports:{}};return t[e].call(a.exports,a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(o,e,r,a){if(!e){var i=1/0;for(s=0;s<t.length;s++){e=t[s][0],r=t[s][1],a=t[s][2];for(var c=!0,u=0;u<e.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](e[u])}))?e.splice(u--,1):(c=!1,a<i&&(i=a));if(c){t.splice(s--,1);var d=r();void 0!==d&&(o=d)}}return o}a=a||0;for(var s=t.length;s>0&&t[s-1][2]>a;s--)t[s]=t[s-1];t[s]=[e,r,a]}}(),function(){n.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(o,{a:o}),o}}(),function(){n.d=function(t,o){for(var e in o)n.o(o,e)&&!n.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:o[e]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){var t={524:0};n.O.j=function(o){return 0===t[o]};var o=function(o,e){var r,a,i=e[0],c=e[1],u=e[2],d=0;if(i.some((function(o){return 0!==t[o]}))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(u)var s=u(n)}for(o&&o(e);d<i.length;d++)a=i[d],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(s)},e=self["webpackChunkdcbuttons"]=self["webpackChunkdcbuttons"]||[];e.forEach(o.bind(null,0)),e.push=o.bind(null,e.push.bind(e))}();var e=n.O(void 0,[504],(function(){return n(6964)}));e=n.O(e)})();
//# sourceMappingURL=app.62e4bb38.js.map