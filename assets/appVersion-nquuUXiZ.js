import{c as s}from"./LoadingSpinner-ngncNnQD.js";/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],p=s("lock",c),a="cd820a162fadc2e4839b71843ec30e7edd5add69";function i(){const e=Array.from(document.scripts).map(r=>r.src).find(r=>r.includes("/assets/"));return e?e.replace(/\/assets\/[^/]+$/,"/app-version.json"):"./app-version.json"}async function u(){if(typeof window>"u")return!0;try{const e=new URL(i(),window.location.href);e.searchParams.set("checkedAt",String(Date.now()));const r=await fetch(e.toString(),{cache:"no-store"});if(!r.ok)return!0;const n=await r.json(),t=String((n==null?void 0:n.version)||"").trim();if(!t||t===a)return!0;sessionStorage.setItem("ugd_app_update_detected",t);const o=new URL(window.location.href);return o.searchParams.set("appVersion",t),window.location.replace(o.toString()),!1}catch(e){return console.warn("앱 최신 버전 확인에 실패했습니다.",e),!0}}export{p as L,u as e};
