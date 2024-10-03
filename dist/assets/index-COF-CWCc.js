(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();console.log("Hello router handler!");function yt(){const e=document.createElement("div");e.id="message",e.innerText="Processing your cancellation...",document.body.appendChild(e)}async function vt(e){console.log(`Order ${e} is being canceled.`);const n=await fetch("https://hg-registration-bot-cd9ed03a6bc5.herokuapp.com/cancelorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({orderId:e})}),r=await n.json();n.ok?(console.log("Data saved successfully:",r),document.getElementById("message").innerText=`Order ${e} has been sent for cancellation.`):(console.error("Failed to save data:",r),document.getElementById("message").innerText="Failed to cancel the order.")}function It(){console.log("Cancel Order"),yt();const e=new URLSearchParams(window.location.search).get("cancelOrderId");console.log(e),e?vt(e):(console.error("Order ID not found in the URL"),document.getElementById("message").innerText="Order ID not found.")}It();var de={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oe=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let a=e.charCodeAt(r);a<128?t[n++]=a:a<2048?(t[n++]=a>>6|192,t[n++]=a&63|128):(a&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(a=65536+((a&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=a>>18|240,t[n++]=a>>12&63|128,t[n++]=a>>6&63|128,t[n++]=a&63|128):(t[n++]=a>>12|224,t[n++]=a>>6&63|128,t[n++]=a&63|128)}return t},wt=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const a=e[n++];if(a<128)t[r++]=String.fromCharCode(a);else if(a>191&&a<224){const i=e[n++];t[r++]=String.fromCharCode((a&31)<<6|i&63)}else if(a>239&&a<365){const i=e[n++],s=e[n++],o=e[n++],l=((a&7)<<18|(i&63)<<12|(s&63)<<6|o&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const i=e[n++],s=e[n++];t[r++]=String.fromCharCode((a&15)<<12|(i&63)<<6|s&63)}}return t.join("")},Be={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let a=0;a<e.length;a+=3){const i=e[a],s=a+1<e.length,o=s?e[a+1]:0,l=a+2<e.length,c=l?e[a+2]:0,m=i>>2,f=(i&3)<<4|o>>4;let y=(o&15)<<2|c>>6,g=c&63;l||(g=64,s||(y=64)),r.push(n[m],n[f],n[y],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Oe(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):wt(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let a=0;a<e.length;){const i=n[e.charAt(a++)],o=a<e.length?n[e.charAt(a)]:0;++a;const c=a<e.length?n[e.charAt(a)]:64;++a;const f=a<e.length?n[e.charAt(a)]:64;if(++a,i==null||o==null||c==null||f==null)throw new Nt;const y=i<<2|o>>4;if(r.push(y),c!==64){const g=o<<4&240|c>>2;if(r.push(g),f!==64){const bt=c<<6&192|f;r.push(bt)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Nt extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Et=function(e){const t=Oe(e);return Be.encodeByteArray(t,!0)},Re=function(e){return Et(e).replace(/\./g,"")},At=function(e){try{return Be.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt=()=>St().__FIREBASE_DEFAULTS__,xt=()=>{if(typeof process>"u"||typeof de>"u")return;const e=de.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},_t=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&At(e[1]);return t&&JSON.parse(t)},Ct=()=>{try{return Tt()||xt()||_t()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},He=()=>{var e;return(e=Ct())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}function Ot(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function $e(){try{return typeof indexedDB=="object"}catch{return!1}}function Pe(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(r);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var i;t(((i=a.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function Bt(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt="FirebaseError";class B extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Rt,Object.setPrototypeOf(this,B.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,k.prototype.create)}}class k{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},a=`${this.service}/${t}`,i=this.errors[t],s=i?Ht(i,r):"Error",o=`${this.serviceName}: ${s} (${a}).`;return new B(a,o,r)}}function Ht(e,t){return e.replace($t,(n,r)=>{const a=t[r];return a!=null?String(a):`<${r}?>`})}const $t=/\{\$([^}]+)}/g;function $(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const a of n){if(!r.includes(a))return!1;const i=e[a],s=t[a];if(ue(i)&&ue(s)){if(!$(i,s))return!1}else if(i!==s)return!1}for(const a of r)if(!n.includes(a))return!1;return!0}function ue(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt=1e3,Mt=2,Lt=4*60*60*1e3,kt=.5;function he(e,t=Pt,n=Mt){const r=t*Math.pow(n,e),a=Math.round(kt*r*(Math.random()-.5)*2);return Math.min(Lt,r+a)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(e){return e&&e._delegate?e._delegate:e}class S{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Dt;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:n});a&&r.resolve(a)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),a=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(a)return null;throw i}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(jt(t))try{this.getOrInitializeService({instanceIdentifier:T})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:a});r.resolve(i)}catch{}}}}clearInstance(t=T){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=T){return this.instances.has(t)}getOptions(t=T){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);r===o&&s.resolve(a)}return a}onInit(t,n){var r;const a=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(a))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(a,i);const s=this.instances.get(a);return s&&t(s,a),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const a of r)try{a(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:qt(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=T){return this.component?this.component.multipleInstances?t:T:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qt(e){return e===T?void 0:e}function jt(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Ft(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var d;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(d||(d={}));const zt={debug:d.DEBUG,verbose:d.VERBOSE,info:d.INFO,warn:d.WARN,error:d.ERROR,silent:d.SILENT},Ut=d.INFO,Wt={[d.DEBUG]:"log",[d.VERBOSE]:"log",[d.INFO]:"info",[d.WARN]:"warn",[d.ERROR]:"error"},Gt=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),a=Wt[t];if(a)console[a](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Le{constructor(t){this.name=t,this._logLevel=Ut,this._logHandler=Gt,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in d))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?zt[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,d.DEBUG,...t),this._logHandler(this,d.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,d.VERBOSE,...t),this._logHandler(this,d.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,d.INFO,...t),this._logHandler(this,d.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,d.WARN,...t),this._logHandler(this,d.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,d.ERROR,...t),this._logHandler(this,d.ERROR,...t)}}const Kt=(e,t)=>t.some(n=>e instanceof n);let me,pe;function Yt(){return me||(me=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jt(){return pe||(pe=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ke=new WeakMap,X=new WeakMap,Fe=new WeakMap,z=new WeakMap,ae=new WeakMap;function Xt(e){const t=new Promise((n,r)=>{const a=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{n(N(e.result)),a()},s=()=>{r(e.error),a()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&ke.set(n,e)}).catch(()=>{}),ae.set(t,e),t}function Zt(e){if(X.has(e))return;const t=new Promise((n,r)=>{const a=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{n(),a()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),a()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});X.set(e,t)}let Z={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return X.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Fe.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return N(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Qt(e){Z=e(Z)}function en(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(U(this),t,...n);return Fe.set(r,t.sort?t.sort():[t]),N(r)}:Jt().includes(e)?function(...t){return e.apply(U(this),t),N(ke.get(this))}:function(...t){return N(e.apply(U(this),t))}}function tn(e){return typeof e=="function"?en(e):(e instanceof IDBTransaction&&Zt(e),Kt(e,Yt())?new Proxy(e,Z):e)}function N(e){if(e instanceof IDBRequest)return Xt(e);if(z.has(e))return z.get(e);const t=tn(e);return t!==e&&(z.set(e,t),ae.set(t,e)),t}const U=e=>ae.get(e);function qe(e,t,{blocked:n,upgrade:r,blocking:a,terminated:i}={}){const s=indexedDB.open(e,t),o=N(s);return r&&s.addEventListener("upgradeneeded",l=>{r(N(s.result),l.oldVersion,l.newVersion,N(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),o.then(l=>{i&&l.addEventListener("close",()=>i()),a&&l.addEventListener("versionchange",c=>a(c.oldVersion,c.newVersion,c))}).catch(()=>{}),o}const nn=["get","getKey","getAll","getAllKeys","count"],an=["put","add","delete","clear"],W=new Map;function fe(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(W.get(t))return W.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,a=an.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(a||nn.includes(n)))return;const i=async function(s,...o){const l=this.transaction(s,a?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(o.shift())),(await Promise.all([c[n](...o),a&&l.done]))[0]};return W.set(t,i),i}Qt(e=>({...e,get:(t,n,r)=>fe(t,n)||e.get(t,n,r),has:(t,n)=>!!fe(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(sn(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function sn(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Q="@firebase/app",ge="0.10.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w=new Le("@firebase/app"),on="@firebase/app-compat",ln="@firebase/analytics-compat",cn="@firebase/analytics",dn="@firebase/app-check-compat",un="@firebase/app-check",hn="@firebase/auth",mn="@firebase/auth-compat",pn="@firebase/database",fn="@firebase/database-compat",gn="@firebase/functions",bn="@firebase/functions-compat",yn="@firebase/installations",vn="@firebase/installations-compat",In="@firebase/messaging",wn="@firebase/messaging-compat",Nn="@firebase/performance",En="@firebase/performance-compat",An="@firebase/remote-config",Sn="@firebase/remote-config-compat",Tn="@firebase/storage",xn="@firebase/storage-compat",_n="@firebase/firestore",Cn="@firebase/vertexai-preview",Dn="@firebase/firestore-compat",On="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee="[DEFAULT]",Bn={[Q]:"fire-core",[on]:"fire-core-compat",[cn]:"fire-analytics",[ln]:"fire-analytics-compat",[un]:"fire-app-check",[dn]:"fire-app-check-compat",[hn]:"fire-auth",[mn]:"fire-auth-compat",[pn]:"fire-rtdb",[fn]:"fire-rtdb-compat",[gn]:"fire-fn",[bn]:"fire-fn-compat",[yn]:"fire-iid",[vn]:"fire-iid-compat",[In]:"fire-fcm",[wn]:"fire-fcm-compat",[Nn]:"fire-perf",[En]:"fire-perf-compat",[An]:"fire-rc",[Sn]:"fire-rc-compat",[Tn]:"fire-gcs",[xn]:"fire-gcs-compat",[_n]:"fire-fst",[Dn]:"fire-fst-compat",[Cn]:"fire-vertex","fire-js":"fire-js",[On]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P=new Map,Rn=new Map,te=new Map;function be(e,t){try{e.container.addComponent(t)}catch(n){w.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function _(e){const t=e.name;if(te.has(t))return w.debug(`There were multiple attempts to register component ${t}.`),!1;te.set(t,e);for(const n of P.values())be(n,e);for(const n of Rn.values())be(n,e);return!0}function F(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},E=new k("app","Firebase",Hn);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new S("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw E.create("app-deleted",{appName:this._name})}}function je(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ee,automaticDataCollectionEnabled:!1},t),a=r.name;if(typeof a!="string"||!a)throw E.create("bad-app-name",{appName:String(a)});if(n||(n=He()),!n)throw E.create("no-options");const i=P.get(a);if(i){if($(n,i.options)&&$(r,i.config))return i;throw E.create("duplicate-app",{appName:a})}const s=new Vt(a);for(const l of te.values())s.addComponent(l);const o=new $n(n,r,s);return P.set(a,o),o}function Pn(e=ee){const t=P.get(e);if(!t&&e===ee&&He())return je();if(!t)throw E.create("no-app",{appName:e});return t}function A(e,t,n){var r;let a=(r=Bn[e])!==null&&r!==void 0?r:e;n&&(a+=`-${n}`);const i=a.match(/\s|\//),s=t.match(/\s|\//);if(i||s){const o=[`Unable to register library "${a}" with version "${t}":`];i&&o.push(`library name "${a}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${t}" contains illegal characters (whitespace or "/")`),w.warn(o.join(" "));return}_(new S(`${a}-version`,()=>({library:a,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn="firebase-heartbeat-database",Ln=1,H="firebase-heartbeat-store";let G=null;function Ve(){return G||(G=qe(Mn,Ln,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(H)}catch(n){console.warn(n)}}}}).catch(e=>{throw E.create("idb-open",{originalErrorMessage:e.message})})),G}async function kn(e){try{const n=(await Ve()).transaction(H),r=await n.objectStore(H).get(ze(e));return await n.done,r}catch(t){if(t instanceof B)w.warn(t.message);else{const n=E.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});w.warn(n.message)}}}async function ye(e,t){try{const r=(await Ve()).transaction(H,"readwrite");await r.objectStore(H).put(t,ze(e)),await r.done}catch(n){if(n instanceof B)w.warn(n.message);else{const r=E.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});w.warn(r.message)}}}function ze(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn=1024,qn=30*24*60*60*1e3;class jn{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new zn(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ve();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:a}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const o=new Date(s.date).valueOf();return Date.now()-o<=qn}),this._storage.overwrite(this._heartbeatsCache))}catch(r){w.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ve(),{heartbeatsToSend:r,unsentEntries:a}=Vn(this._heartbeatsCache.heartbeats),i=Re(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return w.warn(n),""}}}function ve(){return new Date().toISOString().substring(0,10)}function Vn(e,t=Fn){const n=[];let r=e.slice();for(const a of e){const i=n.find(s=>s.agent===a.agent);if(i){if(i.dates.push(a.date),Ie(n)>t){i.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),Ie(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class zn{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $e()?Pe().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await kn(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const a=await this.read();return ye(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:a.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const a=await this.read();return ye(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...t.heartbeats]})}else return}}function Ie(e){return Re(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(e){_(new S("platform-logger",t=>new rn(t),"PRIVATE")),_(new S("heartbeat",t=>new jn(t),"PRIVATE")),A(Q,ge,e),A(Q,ge,"esm2017"),A("fire-js","")}Un("");var Wn="firebase",Gn="10.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */A(Wn,Gn,"app");const Ue="@firebase/installations",re="0.6.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const We=1e4,Ge=`w:${re}`,Ke="FIS_v2",Kn="https://firebaseinstallations.googleapis.com/v1",Yn=60*60*1e3,Jn="installations",Xn="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},C=new k(Jn,Xn,Zn);function Ye(e){return e instanceof B&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je({projectId:e}){return`${Kn}/projects/${e}/installations`}function Xe(e){return{token:e.token,requestStatus:2,expiresIn:ea(e.expiresIn),creationTime:Date.now()}}async function Ze(e,t){const r=(await t.json()).error;return C.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Qe({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Qn(e,{refreshToken:t}){const n=Qe(e);return n.append("Authorization",ta(t)),n}async function et(e){const t=await e();return t.status>=500&&t.status<600?e():t}function ea(e){return Number(e.replace("s","000"))}function ta(e){return`${Ke} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function na({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Je(e),a=Qe(e),i=t.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&a.append("x-firebase-client",c)}const s={fid:n,authVersion:Ke,appId:e.appId,sdkVersion:Ge},o={method:"POST",headers:a,body:JSON.stringify(s)},l=await et(()=>fetch(r,o));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:Xe(c.authToken)}}else throw await Ze("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra=/^[cdef][\w-]{21}$/,ne="";function ia(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=sa(e);return ra.test(n)?n:ne}catch{return ne}}function sa(e){return aa(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt=new Map;function at(e,t){const n=q(e);rt(n,t),oa(n,t)}function rt(e,t){const n=nt.get(e);if(n)for(const r of n)r(t)}function oa(e,t){const n=la();n&&n.postMessage({key:e,fid:t}),ca()}let x=null;function la(){return!x&&"BroadcastChannel"in self&&(x=new BroadcastChannel("[Firebase] FID Change"),x.onmessage=e=>{rt(e.data.key,e.data.fid)}),x}function ca(){nt.size===0&&x&&(x.close(),x=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da="firebase-installations-database",ua=1,D="firebase-installations-store";let K=null;function ie(){return K||(K=qe(da,ua,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(D)}}})),K}async function M(e,t){const n=q(e),a=(await ie()).transaction(D,"readwrite"),i=a.objectStore(D),s=await i.get(n);return await i.put(t,n),await a.done,(!s||s.fid!==t.fid)&&at(e,t.fid),t}async function it(e){const t=q(e),r=(await ie()).transaction(D,"readwrite");await r.objectStore(D).delete(t),await r.done}async function j(e,t){const n=q(e),a=(await ie()).transaction(D,"readwrite"),i=a.objectStore(D),s=await i.get(n),o=t(s);return o===void 0?await i.delete(n):await i.put(o,n),await a.done,o&&(!s||s.fid!==o.fid)&&at(e,o.fid),o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function se(e){let t;const n=await j(e.appConfig,r=>{const a=ha(r),i=ma(e,a);return t=i.registrationPromise,i.installationEntry});return n.fid===ne?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function ha(e){const t=e||{fid:ia(),registrationStatus:0};return st(t)}function ma(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const a=Promise.reject(C.create("app-offline"));return{installationEntry:t,registrationPromise:a}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=pa(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:fa(e)}:{installationEntry:t}}async function pa(e,t){try{const n=await na(e,t);return M(e.appConfig,n)}catch(n){throw Ye(n)&&n.customData.serverCode===409?await it(e.appConfig):await M(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function fa(e){let t=await we(e.appConfig);for(;t.registrationStatus===1;)await tt(100),t=await we(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await se(e);return r||n}return t}function we(e){return j(e,t=>{if(!t)throw C.create("installation-not-found");return st(t)})}function st(e){return ga(e)?{fid:e.fid,registrationStatus:0}:e}function ga(e){return e.registrationStatus===1&&e.registrationTime+We<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ba({appConfig:e,heartbeatServiceProvider:t},n){const r=ya(e,n),a=Qn(e,n),i=t.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&a.append("x-firebase-client",c)}const s={installation:{sdkVersion:Ge,appId:e.appId}},o={method:"POST",headers:a,body:JSON.stringify(s)},l=await et(()=>fetch(r,o));if(l.ok){const c=await l.json();return Xe(c)}else throw await Ze("Generate Auth Token",l)}function ya(e,{fid:t}){return`${Je(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oe(e,t=!1){let n;const r=await j(e.appConfig,i=>{if(!ot(i))throw C.create("not-registered");const s=i.authToken;if(!t&&wa(s))return i;if(s.requestStatus===1)return n=va(e,t),i;{if(!navigator.onLine)throw C.create("app-offline");const o=Ea(i);return n=Ia(e,o),o}});return n?await n:r.authToken}async function va(e,t){let n=await Ne(e.appConfig);for(;n.authToken.requestStatus===1;)await tt(100),n=await Ne(e.appConfig);const r=n.authToken;return r.requestStatus===0?oe(e,t):r}function Ne(e){return j(e,t=>{if(!ot(t))throw C.create("not-registered");const n=t.authToken;return Aa(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Ia(e,t){try{const n=await ba(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await M(e.appConfig,r),n}catch(n){if(Ye(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await it(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await M(e.appConfig,r)}throw n}}function ot(e){return e!==void 0&&e.registrationStatus===2}function wa(e){return e.requestStatus===2&&!Na(e)}function Na(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Yn}function Ea(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Aa(e){return e.requestStatus===1&&e.requestTime+We<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sa(e){const t=e,{installationEntry:n,registrationPromise:r}=await se(t);return r?r.catch(console.error):oe(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ta(e,t=!1){const n=e;return await xa(n),(await oe(n,t)).token}async function xa(e){const{registrationPromise:t}=await se(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(e){if(!e||!e.options)throw Y("App Configuration");if(!e.name)throw Y("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Y(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Y(e){return C.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt="installations",Ca="installations-internal",Da=e=>{const t=e.getProvider("app").getImmediate(),n=_a(t),r=F(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Oa=e=>{const t=e.getProvider("app").getImmediate(),n=F(t,lt).getImmediate();return{getId:()=>Sa(n),getToken:a=>Ta(n,a)}};function Ba(){_(new S(lt,Da,"PUBLIC")),_(new S(Ca,Oa,"PRIVATE"))}Ba();A(Ue,re);A(Ue,re,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L="analytics",Ra="firebase_id",Ha="origin",$a=60*1e3,Pa="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",le="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p=new Le("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},b=new k("analytics","Analytics",Ma);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function La(e){if(!e.startsWith(le)){const t=b.create("invalid-gtag-resource",{gtagURL:e});return p.warn(t.message),""}return e}function ct(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function ka(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function Fa(e,t){const n=ka("firebase-js-sdk-policy",{createScriptURL:La}),r=document.createElement("script"),a=`${le}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(a):a,r.async=!0,document.head.appendChild(r)}function qa(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function ja(e,t,n,r,a,i){const s=r[a];try{if(s)await t[s];else{const l=(await ct(n)).find(c=>c.measurementId===a);l&&await t[l.appId]}}catch(o){p.error(o)}e("config",a,i)}async function Va(e,t,n,r,a){try{let i=[];if(a&&a.send_to){let s=a.send_to;Array.isArray(s)||(s=[s]);const o=await ct(n);for(const l of s){const c=o.find(f=>f.measurementId===l),m=c&&t[c.appId];if(m)i.push(m);else{i=[];break}}}i.length===0&&(i=Object.values(t)),await Promise.all(i),e("event",r,a||{})}catch(i){p.error(i)}}function za(e,t,n,r){async function a(i,...s){try{if(i==="event"){const[o,l]=s;await Va(e,t,n,o,l)}else if(i==="config"){const[o,l]=s;await ja(e,t,n,r,o,l)}else if(i==="consent"){const[o,l]=s;e("consent",o,l)}else if(i==="get"){const[o,l,c]=s;e("get",o,l,c)}else if(i==="set"){const[o]=s;e("set",o)}else e(i,...s)}catch(o){p.error(o)}}return a}function Ua(e,t,n,r,a){let i=function(...s){window[r].push(arguments)};return window[a]&&typeof window[a]=="function"&&(i=window[a]),window[a]=za(i,e,t,n),{gtagCore:i,wrappedGtag:window[a]}}function Wa(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(le)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga=30,Ka=1e3;class Ya{constructor(t={},n=Ka){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const dt=new Ya;function Ja(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Xa(e){var t;const{appId:n,apiKey:r}=e,a={method:"GET",headers:Ja(r)},i=Pa.replace("{app-id}",n),s=await fetch(i,a);if(s.status!==200&&s.status!==304){let o="";try{const l=await s.json();!((t=l.error)===null||t===void 0)&&t.message&&(o=l.error.message)}catch{}throw b.create("config-fetch-failed",{httpStatus:s.status,responseMessage:o})}return s.json()}async function Za(e,t=dt,n){const{appId:r,apiKey:a,measurementId:i}=e.options;if(!r)throw b.create("no-app-id");if(!a){if(i)return{measurementId:i,appId:r};throw b.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new tr;return setTimeout(async()=>{o.abort()},$a),ut({appId:r,apiKey:a,measurementId:i},s,o,t)}async function ut(e,{throttleEndTimeMillis:t,backoffCount:n},r,a=dt){var i;const{appId:s,measurementId:o}=e;try{await Qa(r,t)}catch(l){if(o)return p.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:o};throw l}try{const l=await Xa(e);return a.deleteThrottleMetadata(s),l}catch(l){const c=l;if(!er(c)){if(a.deleteThrottleMetadata(s),o)return p.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:s,measurementId:o};throw l}const m=Number((i=c==null?void 0:c.customData)===null||i===void 0?void 0:i.httpStatus)===503?he(n,a.intervalMillis,Ga):he(n,a.intervalMillis),f={throttleEndTimeMillis:Date.now()+m,backoffCount:n+1};return a.setThrottleMetadata(s,f),p.debug(`Calling attemptFetch again in ${m} millis`),ut(e,f,r,a)}}function Qa(e,t){return new Promise((n,r)=>{const a=Math.max(t-Date.now(),0),i=setTimeout(n,a);e.addEventListener(()=>{clearTimeout(i),r(b.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function er(e){if(!(e instanceof B)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class tr{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function nr(e,t,n,r,a){if(a&&a.global){e("event",n,r);return}else{const i=await t,s=Object.assign(Object.assign({},r),{send_to:i});e("event",n,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ar(){if($e())try{await Pe()}catch(e){return p.warn(b.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return p.warn(b.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function rr(e,t,n,r,a,i,s){var o;const l=Za(e);l.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&p.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>p.error(g)),t.push(l);const c=ar().then(g=>{if(g)return r.getId()}),[m,f]=await Promise.all([l,c]);Wa(i)||Fa(i,m.measurementId),a("js",new Date);const y=(o=s==null?void 0:s.config)!==null&&o!==void 0?o:{};return y[Ha]="firebase",y.update=!0,f!=null&&(y[Ra]=f),a("config",m.measurementId,y),m.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(t){this.app=t}_delete(){return delete R[this.app.options.appId],Promise.resolve()}}let R={},Ee=[];const Ae={};let J="dataLayer",sr="gtag",Se,ht,Te=!1;function or(){const e=[];if(Ot()&&e.push("This is a browser extension environment."),Bt()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,a)=>`(${a+1}) ${r}`).join(" "),n=b.create("invalid-analytics-context",{errorInfo:t});p.warn(n.message)}}function lr(e,t,n){or();const r=e.options.appId;if(!r)throw b.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)p.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw b.create("no-api-key");if(R[r]!=null)throw b.create("already-exists",{id:r});if(!Te){qa(J);const{wrappedGtag:i,gtagCore:s}=Ua(R,Ee,Ae,J,sr);ht=i,Se=s,Te=!0}return R[r]=rr(e,Ee,Ae,t,Se,J,n),new ir(e)}function cr(e=Pn()){e=Me(e);const t=F(e,L);return t.isInitialized()?t.getImmediate():dr(e)}function dr(e,t={}){const n=F(e,L);if(n.isInitialized()){const a=n.getImmediate();if($(t,n.getOptions()))return a;throw b.create("already-initialized")}return n.initialize({options:t})}function ur(e,t,n,r){e=Me(e),nr(ht,R[e.app.options.appId],t,n,r).catch(a=>p.error(a))}const xe="@firebase/analytics",_e="0.10.7";function hr(){_(new S(L,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),a=t.getProvider("installations-internal").getImmediate();return lr(r,a,n)},"PUBLIC")),_(new S("analytics-internal",e,"PRIVATE")),A(xe,_e),A(xe,_e,"esm2017");function e(t){try{const n=t.getProvider(L).getImmediate();return{logEvent:(r,a,i)=>ur(n,r,a,i)}}catch(n){throw b.create("interop-component-reg-failed",{reason:n})}}}hr();const mr={apiKey:"AIzaSyBwTbTG_auMrWy_e4aVUFMHs3794zZ4AXE",authDomain:"hgregusersdb.firebaseapp.com",projectId:"hgregusersdb",storageBucket:"hgregusersdb.appspot.com",messagingSenderId:"996459139126",appId:"1:996459139126:web:ca1d5184f0f5db61618897",measurementId:"G-LMF2MVSGER"},pr=je(mr);cr(pr);async function fr(e,t){e=Object.assign({},e,{service:t});const r=await fetch("https://hg-registration-bot-cd9ed03a6bc5.herokuapp.com/submit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),a=await r.json();r.ok?console.log("Data saved successfully:",a):console.error("Failed to save data:",a)}const mt={Basic:{inpol:{id:"inpol",fieldName:"inpol",type:"number",className:"onlyDigits",labelName:"Номер внеска на inPol",placeholder:"00641410",maxlength:8,minlength:8,required:!0,inputHelper:"Находится на заполненом внеске рядом со штрих кодом"},mos:{id:"mos",fieldName:"mos",type:"number",className:"onlyDigits",labelName:"Номер внеска на MOS",placeholder:"42354528",maxlength:8,minlength:8,required:!0,inputHelper:"Находится на заполненом внеске рядом со штрих кодом"},name:{id:"name",fieldName:"name",type:"text",className:"onlyText",labelName:"Имя",placeholder:"Alexey",maxlength:32,minlength:2,required:!0,inputHelper:"Как в загранпаспорте (Латинскими буквами)"},surname:{id:"surname",fieldName:"surname",type:"text",className:"onlyText",labelName:"Фамилия",placeholder:"Rzayev",maxlength:32,minlength:2,required:!0,inputHelper:"Как в загранпаспорте (Латинскими буквами)"},nationality:{id:"nationality",fieldName:"nationality",type:"text",className:"onlyText",labelName:"Гражданство",placeholder:"Poland",maxlength:32,minlength:2,required:!0,inputHelper:"Как в загранпаспорте (Латинскими буквами)"},birthday:{id:"birthday",fieldName:"birthday",type:"date",className:"date",labelName:"Дата рождения",placeholder:"",maxlength:32,minlength:2,required:!0,inputHelper:""},passport:{id:"passport",fieldName:"passport",type:"text",className:"passport",labelName:"Номер паспорта",placeholder:"FA8243943",maxlength:9,minlength:9,required:!0,inputHelper:"Вверху в правом  углу на первой странице"},phone:{id:"phone",fieldName:"phone",type:"text",className:"phone",labelName:"Номер телефона",placeholder:"+48579137807",maxlength:16,minlength:10,required:!0,inputHelper:"Для получения точной даты регистрации и фактуры для оплаты"},email:{id:"email",fieldName:"email",type:"text",className:"email",labelName:"Электронная почта",placeholder:"adres@gmail.com",maxlength:32,minlength:2,required:!0,inputHelper:"Для получения точной даты регистрации и фактуры для оплаты"},source:{id:"source",fieldName:"source",type:"textarea",className:"textarea",labelName:"Как о нас узнали",placeholder:"",maxlength:1e3,minlength:0,required:!1,inputHelper:""}},Ultra:{name:{id:"name",fieldName:"name",type:"text",className:"onlyText",labelName:"Имя",placeholder:"Alexey",maxlength:32,minlength:2,required:!0,inputHelper:"Как в загранпаспорте (Латинскими буквами)"},surname:{id:"surname",fieldName:"surname",type:"text",className:"onlyText",labelName:"Фамилия",placeholder:"Rzayev",maxlength:32,minlength:2,required:!0,inputHelper:"Как в загранпаспорте (Латинскими буквами)"},nationality:{id:"nationality",fieldName:"nationality",type:"text",className:"onlyText",labelName:"Гражданство",placeholder:"Poland",maxlength:32,minlength:2,required:!0,inputHelper:"Как в загранпаспорте (Латинскими буквами)"},birthday:{id:"birthday",fieldName:"birthday",type:"date",className:"date",labelName:"Дата рождения",placeholder:"",maxlength:32,minlength:2,required:!1,inputHelper:""},passport:{id:"passport",fieldName:"passport",type:"text",className:"passport",labelName:"Номер паспорта",placeholder:"FA8243943",maxlength:9,minlength:9,required:!1,inputHelper:"Вверху в правом  углу на первой странице"},phone:{id:"phone",fieldName:"phone",type:"text",className:"phone",labelName:"Номер телефона",placeholder:"+48579137807",maxlength:16,minlength:10,required:!0,inputHelper:"Для получения точной даты регистрации и фактуры для оплаты"},email:{id:"email",fieldName:"email",type:"text",className:"email",labelName:"Электронная почта",placeholder:"adres@gmail.com",maxlength:32,minlength:2,required:!0,inputHelper:"Для получения точной даты регистрации и фактуры для оплаты"},source:{id:"source",fieldName:"source",type:"textarea",className:"textarea",labelName:"Как о нас узнали",placeholder:"",maxlength:1e3,minlength:0,required:!1,inputHelper:""}},Others:{name:{id:"name",fieldName:"name",type:"text",className:"onlyText",labelName:"Имя",placeholder:"Alexey",maxlength:32,minlength:2,required:!0,inputHelper:"Как в загранпаспорте (Латинскими буквами)"},surname:{id:"surname",fieldName:"surname",type:"text",className:"onlyText",labelName:"Фамилия",placeholder:"Rzayev",maxlength:32,minlength:2,required:!0,inputHelper:"Как в загранпаспорте (Латинскими буквами)"},phone:{id:"phone",fieldName:"phone",type:"text",className:"phone",labelName:"Номер телефона",placeholder:"+48579137807",maxlength:16,minlength:10,required:!0,inputHelper:"Для получения точной даты регистрации и фактуры для оплаты"},email:{id:"email",fieldName:"email",type:"text",className:"email",labelName:"Электронная почта",placeholder:"adres@gmail.com",maxlength:32,minlength:2,required:!0,inputHelper:"Для получения точной даты регистрации и фактуры для оплаты"},interests:{id:"interests",fieldName:"interests",type:"textarea",className:"textarea",labelName:"В нескольких словах опишите что конкретно вас интересует",placeholder:"",maxlength:1e3,minlength:0,required:!1,inputHelper:""},source:{id:"source",fieldName:"source",type:"textarea",className:"textarea",labelName:"Как о нас узнали",placeholder:"",maxlength:1e3,minlength:0,required:!1,inputHelper:""}},Advanced:{surname:{id:"surname",fieldName:"surname",type:"text",className:"onlyText",labelName:"Фамилия",placeholder:"Rzayev",maxlength:32,minlength:2,required:!0,inputHelper:"Как в загранпаспорте (Латинскими буквами)"},familySurname:{id:"familySurname",fieldName:"familySurname",type:"text",className:"onlyText",labelName:"Родовая фамилия",placeholder:"Rzayev",maxlength:32,minlength:2,required:!1,inputHelper:"(Латинскими буквами)"},name:{id:"name",fieldName:"name",type:"text",className:"onlyText",labelName:"Имя",placeholder:"Alexey",maxlength:32,minlength:2,required:!0,inputHelper:"Как в загранпаспорте (Латинскими буквами)"},previousName:{id:"previousName",fieldName:"previousName",type:"text",className:"onlyAllText",labelName:"Предыдущие имена",placeholder:"Alexey",maxlength:32,minlength:2,required:!1,inputHelper:""},fatherName:{id:"fatherName",fieldName:"fatherName",type:"text",className:"onlyAllText",labelName:"Имя отца",placeholder:"Alexey",maxlength:32,minlength:2,required:!0,inputHelper:""},motherName:{id:"motherName",fieldName:"motherName",type:"text",className:"onlyAllText",labelName:"Имя матери",placeholder:"Alexey",maxlength:32,minlength:2,required:!0,inputHelper:""},familyMotherSurname:{id:"familyMotherSurname",fieldName:"familyMotherSurname",type:"text",className:"onlyAllText",labelName:"Девичья фамилия матери",placeholder:"Alexey",maxlength:32,minlength:2,required:!0,inputHelper:""},birthday:{id:"birthday",fieldName:"birthday",type:"date",className:"date",labelName:"Дата рождения",placeholder:"",maxlength:32,minlength:2,required:!0,inputHelper:""},gender:{id:"gender",fieldName:"gender",type:"text",className:"onlyAllText",labelName:"Пол",placeholder:"",maxlength:32,minlength:2,required:!0,inputHelper:"Например: Мужской, Женский, Другой"},motherCity:{id:"motherCity",fieldName:"motherCity",type:"text",className:"onlyAllText",labelName:"Город рождения",placeholder:"",maxlength:32,minlength:2,required:!0,inputHelper:""},motherCountry:{id:"motherCountry",fieldName:"motherCountry",type:"text",className:"onlyAllText",labelName:"Страна рождения",placeholder:"",maxlength:32,minlength:2,required:!0,inputHelper:""},nationality:{id:"nationality",fieldName:"nationality",type:"text",className:"onlyText",labelName:"Гражданство",placeholder:"Poland",maxlength:32,minlength:2,required:!0,inputHelper:"Как в загранпаспорте (Латинскими буквами)"},familyStatus:{id:"familyStatus",fieldName:"familyStatus",type:"text",className:"onlyAllText",labelName:"Семейное положение",placeholder:"",maxlength:32,minlength:2,required:!0,inputHelper:""},education:{id:"education",fieldName:"education",type:"text",className:"onlyAllText",labelName:"Образование",placeholder:"",maxlength:32,minlength:2,required:!0,inputHelper:""},height:{id:"height",fieldName:"height",type:"text",className:"onlyDigits",labelName:"Рост",placeholder:"",maxlength:3,minlength:2,required:!0,inputHelper:"Рост в сантиметрах"},eyeColor:{id:"eyeColor",fieldName:"eyeColor",type:"text",className:"onlyAllText",labelName:"Цвет глаз",placeholder:"",maxlength:32,minlength:2,required:!0,inputHelper:""},specialSigns:{id:"specialSigns",fieldName:"specialSigns",type:"text",className:"onlyAllText",labelName:"Особые приметы",placeholder:"",maxlength:32,minlength:2,required:!1,inputHelper:"Если имеются. Например: татуировки, шрамы"},peselNum:{id:"peselNum",fieldName:"peselNum",type:"text",className:"onlyDigits",labelName:"Номер песеля",placeholder:"",maxlength:11,minlength:11,required:!1,inputHelper:""},phone:{id:"phone",fieldName:"phone",type:"text",className:"phone",labelName:"Номер телефона",placeholder:"+48579137807",maxlength:16,minlength:10,required:!0,inputHelper:""},email:{id:"email",fieldName:"email",type:"text",className:"email",labelName:"Электронная почта",placeholder:"adres@gmail.com",maxlength:32,minlength:2,required:!0,inputHelper:""},address:{id:"address",fieldName:"address",type:"text",className:"",labelName:"Адрес проживания в Польше",placeholder:"",maxlength:64,minlength:2,required:!1,inputHelper:"Eсли имеется"},reasonOfResidence:{id:"reasonOfResidence",fieldName:"reasonOfResidence",type:"text",className:"onlyAllText",labelName:"На каком основании хотите получить карту побыту",placeholder:"",maxlength:64,minlength:2,required:!1,inputHelper:"Работа/учета/воссоедение с семьей и т.д."},familyInfo:{id:"familyInfo",fieldName:"familyInfo",type:"textarea",className:"textarea",labelName:"Данные членов вашей семьи, которые проживают на територии Польши (имена, фамилии, даты рождения, город проживания в Польше, кем вам приходятся, делают ли они себе карту побыту на данный момент, находятся ли они на вашем содержании)",placeholder:"",maxlength:1e3,minlength:0,required:!1,inputHelper:""},firstEnteranceDate:{id:"firstEnteranceDate",fieldName:"firstEnteranceDate",type:"date",className:"date",labelName:"Дата первого вьезда на територию Польши",placeholder:"",maxlength:32,minlength:2,required:!1,inputHelper:""},lastEnteranceDate:{id:"lastEnteranceDate",fieldName:"lastEnteranceDate",type:"date",className:"date",labelName:"Дата последнего вьезда на територию Польши",placeholder:"",maxlength:32,minlength:2,required:!1,inputHelper:""},reasonOfEnterance:{id:"reasonOfEnterance",fieldName:"reasonOfEnterance",type:"text",className:"onlyAllText",labelName:"На каком основании вы заехали в Польшу",placeholder:"",maxlength:64,minlength:2,required:!1,inputHelper:"Виза, биометрия и т.д."},countriesVisitHistory:{id:"reasonOfEnterance",fieldName:"reasonOfEnterance",type:"textarea",className:"textarea",labelName:"Страны в которых вы были последние 5 лет",placeholder:"",maxlength:1e3,minlength:0,required:!1,inputHelper:""},income:{id:"income",fieldName:"income",type:"text",className:"",labelName:"Имеется ли у вас официальный доход в Польше",placeholder:"",maxlength:64,minlength:2,required:!0,inputHelper:""},passport:{id:"passport",fieldName:"passport",type:"text",className:"passport",labelName:"Номер паспорта",placeholder:"FA8243943",maxlength:9,minlength:9,required:!0,inputHelper:"Вверху в правом  углу на первой странице"},source:{id:"source",fieldName:"source",type:"textarea",className:"textarea",labelName:"Как о нас узнали",placeholder:"",maxlength:1e3,minlength:0,required:!1,inputHelper:""}}};function gr(e){const r=document.getElementById(e.id).value.length,a=Number(e.maxlength),i=Number(e.minlength);return!e.required||r>=i&&r<=a}function br(e){const t=e.target,n=t.value,r=t.getAttribute("maxlength")??32,a=/[^0-9]/g,i=n.replace(a,"");t.value=i.slice(0,r)}function yr(e){const t=e.target,n=t.value,r=t.getAttribute("maxlength")??32,a=/[^A-Za-zА-Яа-я]/g,i=n.replace(a,"");t.value=i.slice(0,r)}function vr(e){const t=e.target,n=t.value,r=t.getAttribute("maxlength")??32,a=/[^A-Za-z]/g,i=n.replace(a,"");t.value=i.slice(0,r)}function Ir(e){const t=e.target.value.toUpperCase(),n=t.substring(0,2).replace(/[^A-Z0-9]/g,""),r=t.substring(2).replace(/[^0-9]/g,"");e.target.value=n+r.substring(0,7)}function wr(e){const t=e.target,r=t.value.replace(/[^0-9+]/g,"");r.startsWith("+")?t.value=r.slice(0,t.maxLength):t.value=`+${r.replace("+","")}`;const a=t.parentElement.getElementsByClassName("error")[0];/^(\+[0-9]*)$/.test(r)?a.style.display="none":a.style.display="block"}function Nr(e){const t=e.target,n=t.value,r=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,a=t.parentElement.getElementsByClassName("error")[0];r.test(n)?a.style.display="none":a.style.display="block"}function Ce(e){const n=e.target.value,r=n.split("-"),a=Number(r[0]);!isNaN(a)&&a!==0&&a>3e3&&(e.target.value=String(3e3)+n.slice(-6))}const u={BASIC:"Basic",ADVANCED:"Advanced",ULTRA:"Ultra",OTHERS:"Others"},h={getServiceName:e=>new Object({[u.BASIC]:"Временный побыт<br>Только запись",[u.ADVANCED]:"Временный побыт<br>Запись и Заполнение внесков",[u.ULTRA]:"Временный побыт<br>Полное сопровождение вашего дела",[u.OTHERS]:"Другие услуги"})[e],getServiceDescription:e=>new Object({[u.BASIC]:"Оплата осуществляется только после получения точной даты регистрации - не позднея чем следующая пятница целью записи вас на подачу документов на временный побыт в Варшаве просим вас ответить на несколько вопросов.",[u.ADVANCED]:"Что такое внески - для регистрации на временный побыт требуются номера inPol и MOS. <br>Если у вас их нет или вы этого не знаете, мы вам поможем<br>Оплата осуществляется только после получения точной даты регистрации - не позднея чем следующая пятница целью заполнения внесков и записи вас на подачу документов на временный побыт в Варшаве просим вас ответить на несколько вопросов.",[u.ULTRA]:"Полное сопровождение, помощь во всех вопросах и на всех этапах <br>Чтобы наши специалисты могли лучше разобратся в вашем случае и определить для вас оптимальную цену - просьба оставить свои контактные данные отвечая на вопросы внизу. Наши специалисты связутся с вами в течении 15 минут.",[u.OTHERS]:"Стоимость зависит от конкретной услуги.<br>Примеры дополнительных услуг: <br>- Открытие/Закрытие компании <br> - Получение номера Песель в удаленном режиме <br> - Замена водительских прав<br> - Регистрация автомобиля <br> - Апелляция и возврат средств и т.д. и т.п."})[e],getServicePrize:e=>new Object({[u.BASIC]:"50 zł",[u.ADVANCED]:"100 zł",[u.ULTRA]:"1500 zł",[u.OTHERS]:""})[e],getHomePageHeader:()=>`
      <header>
        <div id="homePageHeader">
            <label id="headerHomeLbl">Наши услуги</label>
        </div>
      </header>
    `,getServiceBlock:(e,t)=>{const n=h.getServiceName(t),r=h.getServiceDescription(t),a=h.getServicePrize(t);return`
      <div class="serviceBtns" service-name="${e}">
          <span class="serviceName">${n}</span>
          <span class="serviceDescription">${r}</span>
          <span class="servicePrice">${a}</span>
      </div>
    `},getHomePageMain:()=>`
      <main>
        <div id="servicesBlock">
          ${Object.entries(u).reduce((e,[t,n])=>e+h.getServiceBlock(t,n),"")}
        </div>
      </main>
    `,getHomePageFooter:()=>`
      <footer id="contactFooter">
          <div class="footerContent">
              <div class="contactInfo">
                  <button id="openChatWithUsBtn">Открыть чат с нами в Телеграм</button>
              </div>
            <div class="contactInfo">
              <p>Наша почта: kontaktkartapobytu@gmail.com</p>
            </div>
          </div>
      </footer>
    `,getHomePage:()=>'<div id="homePage"></div>',getFormInput:e=>{const{id:t,fieldName:n,type:r,className:a,labelName:i,placeholder:s,maxlength:o,minlength:l,required:c,inputHelper:m}=e;return`
      <div class="inputWrapper">
        <label for="customInput" class="inputLabel">${i}:</label>
        ${c?' <label class="reuiresStart">*</label>':""}
          ${r=="textarea"?`<textarea type="${r}" id="${t}" class="inputField ${a}" fieldName="${n}"
            minlength="${l}" maxlength="${o}" placeholder="${s}"
            ${c?"required":""}></textarea>`:`<input type="${r}" id="${t}" class="inputField ${a}" fieldName="${n}"
            minlength="${l}" maxlength="${o}" placeholder="${s}" 
            ${c?"required":""}/>`}
        <small class="inputHelper">${m}</small>
        <span class="error inputError">Invalid input. Please check and try again.</span>
      </div>
    `},getSubmit:()=>`
      <label id="submitErrorLbl">The form cannot be submitted with invalid data</label>
      <button id="submitBtn">Отправить</button>
    `,getFormHeader:e=>{const t=h.getServiceName(e),n=h.getServiceDescription(e);return`
      <header>
        <div id="formPageHeader">
          <div class="iconLogotype"></div>
          <label id="formHeaderServiceNameLbl">${t}</label>
          <label id="formHeaderExplanationLbl">${n}</label>
          <div id="formHeaderBtnsBlock">
            <button id="formHeaderGoBackBtn">Выбрать другую услугу</button>
          </div>
        </div>
      </header>
    `},getFormContainer:()=>'<div id="formContainer"></div>',getSuccessMsgPage:e=>`
      <div id="successMsgPage">
          <div id="successMsgContainer">
              <label id="successMsgLbl">${e}</label>
              <button id="updPagebtn">Обновить страинцу</button>
          </div>
      </div>
    `,getDefaultSuccessMessage:()=>"Спасибо! <br>Ваш заказ принят, дата записи будет известна не позднее следующей пятницы. Данные подачи будут отправлены  вам на ваш адрес имейл вместе с фактурой для оплаты.",getAdvancedSuccessMessage:()=>"Спасибо!<br>Ваш заказ принят, дата записи будет известна не позднее следующей пятницы. Данные подачи будут отправлены  вам на ваш адрес имейл вместе с фактурой для оплаты.<br>Наши юристы свяжутся с вами в течении 15 минут."};let O=u.BASIC;const pt="#dc3545",ft=document.getElementsByTagName("body")[0],Er="https://t.me/+tbPfmAesDdBmYjEy";function ce(e){const t=document.querySelector(e);for(;t.firstChild;)t.removeChild(t.firstChild)}function Ar(){Array.from(document.getElementsByClassName("serviceBtns")).forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("service-name");O=u[t],Hr()})}),V("#openChatWithUsBtn","click",()=>window.open(Er,"_blank"))}function I(e,t,n="beforeend"){document.querySelector(e).insertAdjacentHTML(n,t)}function Sr(){ce("#app"),ft.style.backgroundColor="#7370a0",I("#app",h.getHomePage()),I("#homePage",h.getHomePageHeader()),I("#homePage",h.getHomePageMain()),I("#homePage",h.getHomePageFooter())}function gt(){Sr(),Ar(),window.scrollTo(0,0)}function V(e,t,n){document.querySelector(e).addEventListener(t,n)}function v(e,t,n){Array.from(document.getElementsByClassName(e)).forEach(r=>{r.addEventListener(t,n)})}function Tr(e){this.style.height="auto",this.style.height=this.scrollHeight+"px";const t=e.target,n=t.value.length,r=t.getAttribute("maxlength"),a=t.parentElement.getElementsByClassName("inputHelper")[0];n>r&&(t.value=t.value.substring(0,r)),a.textContent=`${t.value.length}/${r} characters used`}function xr(e){if(e){const t=e.parentElement.getElementsByClassName("inputError")[0];t&&(console.log("show error"),t.style.display="block"),e.style.outline="1px solid "+pt,e.scrollIntoView({behavior:"smooth",block:"center"}),setTimeout(()=>{t.style.display="none",e.style.outline="none"},3e3)}}function _r(){const e=mt[O];if(e==null)return;const t={};for(const[n,r]of Object.entries(e)){const a=gr(r),i=document.getElementById(r.id);if(a)t[n]=i.value??"";else{xr(i);return}}return t}let De;function Cr(){clearTimeout(De),De=setTimeout(()=>{document.getElementById("submitErrorLbl").style.color="transparent"},5e3),document.getElementById("submitErrorLbl").style.color=pt}function Dr(){ce("#app");const e=O==u.BASIC||O==u.ADVANCED?h.getDefaultSuccessMessage():h.getAdvancedSuccessMessage();I("#app",h.getSuccessMsgPage(e)),V("#updPagebtn","click",()=>location.reload())}async function Or(){console.log("submit btn clicked");const e=_r();if(e==null)return Cr();await fr(e,O),Dr()}function Br(){v("passport","input",Ir),v("onlyDigits","input",br),v("onlyText","input",vr),v("onlyAllText","input",yr),v("phone","input",wr),v("email","input",Nr),v("date","keydown",Ce),v("date","input",Ce),v("textarea","input",Tr),V("#submitBtn","click",Or)}function Rr(){ce("#app"),ft.style.backgroundColor="aquamarine",I("#app",h.getFormContainer()),I("#formContainer",h.getFormHeader(O));const e=mt[O]??{};Object.entries(e).forEach(([t,n])=>I("#formContainer",h.getFormInput(n))),I("#formContainer",h.getSubmit()),V("#formHeaderGoBackBtn","click",gt),window.scrollTo(0,0)}function Hr(){Rr(),Br()}function $r(){gt()}$r();
