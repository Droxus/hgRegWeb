(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))o(h);new MutationObserver(h=>{for(const c of h)if(c.type==="childList")for(const m of c.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function s(h){const c={};return h.integrity&&(c.integrity=h.integrity),h.referrerPolicy&&(c.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?c.credentials="include":h.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(h){if(h.ep)return;h.ep=!0;const c=s(h);fetch(h.href,c)}})();var _i={};/**
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
 */const Wi=function(n){const e=[];let s=0;for(let o=0;o<n.length;o++){let h=n.charCodeAt(o);h<128?e[s++]=h:h<2048?(e[s++]=h>>6|192,e[s++]=h&63|128):(h&64512)===55296&&o+1<n.length&&(n.charCodeAt(o+1)&64512)===56320?(h=65536+((h&1023)<<10)+(n.charCodeAt(++o)&1023),e[s++]=h>>18|240,e[s++]=h>>12&63|128,e[s++]=h>>6&63|128,e[s++]=h&63|128):(e[s++]=h>>12|224,e[s++]=h>>6&63|128,e[s++]=h&63|128)}return e},wr=function(n){const e=[];let s=0,o=0;for(;s<n.length;){const h=n[s++];if(h<128)e[o++]=String.fromCharCode(h);else if(h>191&&h<224){const c=n[s++];e[o++]=String.fromCharCode((h&31)<<6|c&63)}else if(h>239&&h<365){const c=n[s++],m=n[s++],w=n[s++],E=((h&7)<<18|(c&63)<<12|(m&63)<<6|w&63)-65536;e[o++]=String.fromCharCode(55296+(E>>10)),e[o++]=String.fromCharCode(56320+(E&1023))}else{const c=n[s++],m=n[s++];e[o++]=String.fromCharCode((h&15)<<12|(c&63)<<6|m&63)}}return e.join("")},Xi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const s=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,o=[];for(let h=0;h<n.length;h+=3){const c=n[h],m=h+1<n.length,w=m?n[h+1]:0,E=h+2<n.length,A=E?n[h+2]:0,S=c>>2,k=(c&3)<<4|w>>4;let R=(w&15)<<2|A>>6,N=A&63;E||(N=64,m||(R=64)),o.push(s[S],s[k],s[R],s[N])}return o.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Wi(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):wr(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const s=e?this.charToByteMapWebSafe_:this.charToByteMap_,o=[];for(let h=0;h<n.length;){const c=s[n.charAt(h++)],w=h<n.length?s[n.charAt(h)]:0;++h;const A=h<n.length?s[n.charAt(h)]:64;++h;const k=h<n.length?s[n.charAt(h)]:64;if(++h,c==null||w==null||A==null||k==null)throw new Ir;const R=c<<2|w>>4;if(o.push(R),A!==64){const N=w<<4&240|A>>2;if(o.push(N),k!==64){const C=A<<6&192|k;o.push(C)}}}return o},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ir extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Er=function(n){const e=Wi(n);return Xi.encodeByteArray(e,!0)},me=function(n){return Er(n).replace(/\./g,"")},_r=function(n){try{return Xi.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ar(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Tr=()=>Ar().__FIREBASE_DEFAULTS__,br=()=>{if(typeof process>"u"||typeof _i>"u")return;const n=_i.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Sr=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&_r(n[1]);return e&&JSON.parse(e)},Yi=()=>{try{return Tr()||br()||Sr()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Cr=n=>{var e,s;return(s=(e=Yi())===null||e===void 0?void 0:e.emulatorHosts)===null||s===void 0?void 0:s[n]},Dr=n=>{const e=Cr(n);if(!e)return;const s=e.lastIndexOf(":");if(s<=0||s+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const o=parseInt(e.substring(s+1),10);return e[0]==="["?[e.substring(1,s-1),o]:[e.substring(0,s),o]},Ji=()=>{var n;return(n=Yi())===null||n===void 0?void 0:n.config};/**
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
 */class Rr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,s)=>{this.resolve=e,this.reject=s})}wrapCallback(e){return(s,o)=>{s?this.reject(s):this.resolve(o),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(s):e(s,o))}}}/**
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
 */function Pr(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const s={alg:"none",type:"JWT"},o=e||"demo-project",h=n.iat||0,c=n.sub||n.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const m=Object.assign({iss:`https://securetoken.google.com/${o}`,aud:o,iat:h,exp:h+3600,auth_time:h,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},n);return[me(JSON.stringify(s)),me(JSON.stringify(m)),""].join(".")}function Or(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Qi(){try{return typeof indexedDB=="object"}catch{return!1}}function Zi(){return new Promise((n,e)=>{try{let s=!0;const o="validate-browser-context-for-indexeddb-analytics-module",h=self.indexedDB.open(o);h.onsuccess=()=>{h.result.close(),s||self.indexedDB.deleteDatabase(o),n(!0)},h.onupgradeneeded=()=>{s=!1},h.onerror=()=>{var c;e(((c=h.error)===null||c===void 0?void 0:c.message)||"")}}catch(s){e(s)}})}function kr(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Nr="FirebaseError";class gt extends Error{constructor(e,s,o){super(s),this.code=e,this.customData=o,this.name=Nr,Object.setPrototypeOf(this,gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_e.prototype.create)}}class _e{constructor(e,s,o){this.service=e,this.serviceName=s,this.errors=o}create(e,...s){const o=s[0]||{},h=`${this.service}/${e}`,c=this.errors[e],m=c?Lr(c,o):"Error",w=`${this.serviceName}: ${m} (${h}).`;return new gt(h,w,o)}}function Lr(n,e){return n.replace(Mr,(s,o)=>{const h=e[o];return h!=null?String(h):`<${o}?>`})}const Mr=/\{\$([^}]+)}/g;function ye(n,e){if(n===e)return!0;const s=Object.keys(n),o=Object.keys(e);for(const h of s){if(!o.includes(h))return!1;const c=n[h],m=e[h];if(Ai(c)&&Ai(m)){if(!ye(c,m))return!1}else if(c!==m)return!1}for(const h of o)if(!s.includes(h))return!1;return!0}function Ai(n){return n!==null&&typeof n=="object"}/**
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
 */const Fr=1e3,jr=2,xr=4*60*60*1e3,Br=.5;function Ti(n,e=Fr,s=jr){const o=e*Math.pow(s,n),h=Math.round(Br*o*(Math.random()-.5)*2);return Math.min(xr,o+h)}/**
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
 */function ts(n){return n&&n._delegate?n._delegate:n}class rt{constructor(e,s,o){this.name=e,this.instanceFactory=s,this.type=o,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const wt="[DEFAULT]";/**
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
 */class Ur{constructor(e,s){this.name=e,this.container=s,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const s=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(s)){const o=new Rr;if(this.instancesDeferred.set(s,o),this.isInitialized(s)||this.shouldAutoInitialize())try{const h=this.getOrInitializeService({instanceIdentifier:s});h&&o.resolve(h)}catch{}}return this.instancesDeferred.get(s).promise}getImmediate(e){var s;const o=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),h=(s=e==null?void 0:e.optional)!==null&&s!==void 0?s:!1;if(this.isInitialized(o)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:o})}catch(c){if(h)return null;throw c}else{if(h)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Vr(e))try{this.getOrInitializeService({instanceIdentifier:wt})}catch{}for(const[s,o]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(s);try{const c=this.getOrInitializeService({instanceIdentifier:h});o.resolve(c)}catch{}}}}clearInstance(e=wt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(s=>"INTERNAL"in s).map(s=>s.INTERNAL.delete()),...e.filter(s=>"_delete"in s).map(s=>s._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wt){return this.instances.has(e)}getOptions(e=wt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:s={}}=e,o=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(o))throw Error(`${this.name}(${o}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const h=this.getOrInitializeService({instanceIdentifier:o,options:s});for(const[c,m]of this.instancesDeferred.entries()){const w=this.normalizeInstanceIdentifier(c);o===w&&m.resolve(h)}return h}onInit(e,s){var o;const h=this.normalizeInstanceIdentifier(s),c=(o=this.onInitCallbacks.get(h))!==null&&o!==void 0?o:new Set;c.add(e),this.onInitCallbacks.set(h,c);const m=this.instances.get(h);return m&&e(m,h),()=>{c.delete(e)}}invokeOnInitCallbacks(e,s){const o=this.onInitCallbacks.get(s);if(o)for(const h of o)try{h(e,s)}catch{}}getOrInitializeService({instanceIdentifier:e,options:s={}}){let o=this.instances.get(e);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:$r(e),options:s}),this.instances.set(e,o),this.instancesOptions.set(e,s),this.invokeOnInitCallbacks(o,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,o)}catch{}return o||null}normalizeInstanceIdentifier(e=wt){return this.component?this.component.multipleInstances?e:wt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $r(n){return n===wt?void 0:n}function Vr(n){return n.instantiationMode==="EAGER"}/**
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
 */class Hr{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const s=this.getProvider(e.name);if(s.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);s.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const s=new Ur(e,this);return this.providers.set(e,s),s}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var D;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(D||(D={}));const zr={debug:D.DEBUG,verbose:D.VERBOSE,info:D.INFO,warn:D.WARN,error:D.ERROR,silent:D.SILENT},Gr=D.INFO,Kr={[D.DEBUG]:"log",[D.VERBOSE]:"log",[D.INFO]:"info",[D.WARN]:"warn",[D.ERROR]:"error"},qr=(n,e,...s)=>{if(e<n.logLevel)return;const o=new Date().toISOString(),h=Kr[e];if(h)console[h](`[${o}]  ${n.name}:`,...s);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class dn{constructor(e){this.name=e,this._logLevel=Gr,this._logHandler=qr,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in D))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zr[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,D.DEBUG,...e),this._logHandler(this,D.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,D.VERBOSE,...e),this._logHandler(this,D.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,D.INFO,...e),this._logHandler(this,D.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,D.WARN,...e),this._logHandler(this,D.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,D.ERROR,...e),this._logHandler(this,D.ERROR,...e)}}const Wr=(n,e)=>e.some(s=>n instanceof s);let bi,Si;function Xr(){return bi||(bi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Yr(){return Si||(Si=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const es=new WeakMap,on=new WeakMap,ns=new WeakMap,Je=new WeakMap,pn=new WeakMap;function Jr(n){const e=new Promise((s,o)=>{const h=()=>{n.removeEventListener("success",c),n.removeEventListener("error",m)},c=()=>{s(ft(n.result)),h()},m=()=>{o(n.error),h()};n.addEventListener("success",c),n.addEventListener("error",m)});return e.then(s=>{s instanceof IDBCursor&&es.set(s,n)}).catch(()=>{}),pn.set(e,n),e}function Qr(n){if(on.has(n))return;const e=new Promise((s,o)=>{const h=()=>{n.removeEventListener("complete",c),n.removeEventListener("error",m),n.removeEventListener("abort",m)},c=()=>{s(),h()},m=()=>{o(n.error||new DOMException("AbortError","AbortError")),h()};n.addEventListener("complete",c),n.addEventListener("error",m),n.addEventListener("abort",m)});on.set(n,e)}let an={get(n,e,s){if(n instanceof IDBTransaction){if(e==="done")return on.get(n);if(e==="objectStoreNames")return n.objectStoreNames||ns.get(n);if(e==="store")return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return ft(n[e])},set(n,e,s){return n[e]=s,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Zr(n){an=n(an)}function to(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...s){const o=n.call(Qe(this),e,...s);return ns.set(o,e.sort?e.sort():[e]),ft(o)}:Yr().includes(n)?function(...e){return n.apply(Qe(this),e),ft(es.get(this))}:function(...e){return ft(n.apply(Qe(this),e))}}function eo(n){return typeof n=="function"?to(n):(n instanceof IDBTransaction&&Qr(n),Wr(n,Xr())?new Proxy(n,an):n)}function ft(n){if(n instanceof IDBRequest)return Jr(n);if(Je.has(n))return Je.get(n);const e=eo(n);return e!==n&&(Je.set(n,e),pn.set(e,n)),e}const Qe=n=>pn.get(n);function is(n,e,{blocked:s,upgrade:o,blocking:h,terminated:c}={}){const m=indexedDB.open(n,e),w=ft(m);return o&&m.addEventListener("upgradeneeded",E=>{o(ft(m.result),E.oldVersion,E.newVersion,ft(m.transaction),E)}),s&&m.addEventListener("blocked",E=>s(E.oldVersion,E.newVersion,E)),w.then(E=>{c&&E.addEventListener("close",()=>c()),h&&E.addEventListener("versionchange",A=>h(A.oldVersion,A.newVersion,A))}).catch(()=>{}),w}const no=["get","getKey","getAll","getAllKeys","count"],io=["put","add","delete","clear"],Ze=new Map;function Ci(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ze.get(e))return Ze.get(e);const s=e.replace(/FromIndex$/,""),o=e!==s,h=io.includes(s);if(!(s in(o?IDBIndex:IDBObjectStore).prototype)||!(h||no.includes(s)))return;const c=async function(m,...w){const E=this.transaction(m,h?"readwrite":"readonly");let A=E.store;return o&&(A=A.index(w.shift())),(await Promise.all([A[s](...w),h&&E.done]))[0]};return Ze.set(e,c),c}Zr(n=>({...n,get:(e,s,o)=>Ci(e,s)||n.get(e,s,o),has:(e,s)=>!!Ci(e,s)||n.has(e,s)}));/**
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
 */class so{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(s=>{if(ro(s)){const o=s.getImmediate();return`${o.library}/${o.version}`}else return null}).filter(s=>s).join(" ")}}function ro(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hn="@firebase/app",Di="0.10.10";/**
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
 */const ot=new dn("@firebase/app"),oo="@firebase/app-compat",ao="@firebase/analytics-compat",ho="@firebase/analytics",lo="@firebase/app-check-compat",co="@firebase/app-check",uo="@firebase/auth",fo="@firebase/auth-compat",po="@firebase/database",go="@firebase/database-compat",mo="@firebase/functions",yo="@firebase/functions-compat",vo="@firebase/installations",wo="@firebase/installations-compat",Io="@firebase/messaging",Eo="@firebase/messaging-compat",_o="@firebase/performance",Ao="@firebase/performance-compat",To="@firebase/remote-config",bo="@firebase/remote-config-compat",So="@firebase/storage",Co="@firebase/storage-compat",Do="@firebase/firestore",Ro="@firebase/vertexai-preview",Po="@firebase/firestore-compat",Oo="firebase",ko="10.13.1";/**
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
 */const ln="[DEFAULT]",No={[hn]:"fire-core",[oo]:"fire-core-compat",[ho]:"fire-analytics",[ao]:"fire-analytics-compat",[co]:"fire-app-check",[lo]:"fire-app-check-compat",[uo]:"fire-auth",[fo]:"fire-auth-compat",[po]:"fire-rtdb",[go]:"fire-rtdb-compat",[mo]:"fire-fn",[yo]:"fire-fn-compat",[vo]:"fire-iid",[wo]:"fire-iid-compat",[Io]:"fire-fcm",[Eo]:"fire-fcm-compat",[_o]:"fire-perf",[Ao]:"fire-perf-compat",[To]:"fire-rc",[bo]:"fire-rc-compat",[So]:"fire-gcs",[Co]:"fire-gcs-compat",[Do]:"fire-fst",[Po]:"fire-fst-compat",[Ro]:"fire-vertex","fire-js":"fire-js",[Oo]:"fire-js-all"};/**
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
 */const ve=new Map,Lo=new Map,cn=new Map;function Ri(n,e){try{n.container.addComponent(e)}catch(s){ot.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,s)}}function pt(n){const e=n.name;if(cn.has(e))return ot.debug(`There were multiple attempts to register component ${e}.`),!1;cn.set(e,n);for(const s of ve.values())Ri(s,n);for(const s of Lo.values())Ri(s,n);return!0}function Yt(n,e){const s=n.container.getProvider("heartbeat").getImmediate({optional:!0});return s&&s.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const Mo={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},dt=new _e("app","Firebase",Mo);/**
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
 */class Fo{constructor(e,s,o){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},s),this._name=s.name,this._automaticDataCollectionEnabled=s.automaticDataCollectionEnabled,this._container=o,this.container.addComponent(new rt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dt.create("app-deleted",{appName:this._name})}}/**
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
 */const jo=ko;function ss(n,e={}){let s=n;typeof e!="object"&&(e={name:e});const o=Object.assign({name:ln,automaticDataCollectionEnabled:!1},e),h=o.name;if(typeof h!="string"||!h)throw dt.create("bad-app-name",{appName:String(h)});if(s||(s=Ji()),!s)throw dt.create("no-options");const c=ve.get(h);if(c){if(ye(s,c.options)&&ye(o,c.config))return c;throw dt.create("duplicate-app",{appName:h})}const m=new Hr(h);for(const E of cn.values())m.addComponent(E);const w=new Fo(s,o,m);return ve.set(h,w),w}function rs(n=ln){const e=ve.get(n);if(!e&&n===ln&&Ji())return ss();if(!e)throw dt.create("no-app",{appName:n});return e}function et(n,e,s){var o;let h=(o=No[n])!==null&&o!==void 0?o:n;s&&(h+=`-${s}`);const c=h.match(/\s|\//),m=e.match(/\s|\//);if(c||m){const w=[`Unable to register library "${h}" with version "${e}":`];c&&w.push(`library name "${h}" contains illegal characters (whitespace or "/")`),c&&m&&w.push("and"),m&&w.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ot.warn(w.join(" "));return}pt(new rt(`${h}-version`,()=>({library:h,version:e}),"VERSION"))}/**
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
 */const xo="firebase-heartbeat-database",Bo=1,Xt="firebase-heartbeat-store";let tn=null;function os(){return tn||(tn=is(xo,Bo,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Xt)}catch(s){console.warn(s)}}}}).catch(n=>{throw dt.create("idb-open",{originalErrorMessage:n.message})})),tn}async function Uo(n){try{const s=(await os()).transaction(Xt),o=await s.objectStore(Xt).get(as(n));return await s.done,o}catch(e){if(e instanceof gt)ot.warn(e.message);else{const s=dt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ot.warn(s.message)}}}async function Pi(n,e){try{const o=(await os()).transaction(Xt,"readwrite");await o.objectStore(Xt).put(e,as(n)),await o.done}catch(s){if(s instanceof gt)ot.warn(s.message);else{const o=dt.create("idb-set",{originalErrorMessage:s==null?void 0:s.message});ot.warn(o.message)}}}function as(n){return`${n.name}!${n.options.appId}`}/**
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
 */const $o=1024,Vo=30*24*60*60*1e3;class Ho{constructor(e){this.container=e,this._heartbeatsCache=null;const s=this.container.getProvider("app").getImmediate();this._storage=new Go(s),this._heartbeatsCachePromise=this._storage.read().then(o=>(this._heartbeatsCache=o,o))}async triggerHeartbeat(){var e,s;try{const h=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=Oi();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((s=this._heartbeatsCache)===null||s===void 0?void 0:s.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(m=>m.date===c)?void 0:(this._heartbeatsCache.heartbeats.push({date:c,agent:h}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(m=>{const w=new Date(m.date).valueOf();return Date.now()-w<=Vo}),this._storage.overwrite(this._heartbeatsCache))}catch(o){ot.warn(o)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const s=Oi(),{heartbeatsToSend:o,unsentEntries:h}=zo(this._heartbeatsCache.heartbeats),c=me(JSON.stringify({version:2,heartbeats:o}));return this._heartbeatsCache.lastSentHeartbeatDate=s,h.length>0?(this._heartbeatsCache.heartbeats=h,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(s){return ot.warn(s),""}}}function Oi(){return new Date().toISOString().substring(0,10)}function zo(n,e=$o){const s=[];let o=n.slice();for(const h of n){const c=s.find(m=>m.agent===h.agent);if(c){if(c.dates.push(h.date),ki(s)>e){c.dates.pop();break}}else if(s.push({agent:h.agent,dates:[h.date]}),ki(s)>e){s.pop();break}o=o.slice(1)}return{heartbeatsToSend:s,unsentEntries:o}}class Go{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Qi()?Zi().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const s=await Uo(this.app);return s!=null&&s.heartbeats?s:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var s;if(await this._canUseIndexedDBPromise){const h=await this.read();return Pi(this.app,{lastSentHeartbeatDate:(s=e.lastSentHeartbeatDate)!==null&&s!==void 0?s:h.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var s;if(await this._canUseIndexedDBPromise){const h=await this.read();return Pi(this.app,{lastSentHeartbeatDate:(s=e.lastSentHeartbeatDate)!==null&&s!==void 0?s:h.lastSentHeartbeatDate,heartbeats:[...h.heartbeats,...e.heartbeats]})}else return}}function ki(n){return me(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Ko(n){pt(new rt("platform-logger",e=>new so(e),"PRIVATE")),pt(new rt("heartbeat",e=>new Ho(e),"PRIVATE")),et(hn,Di,n),et(hn,Di,"esm2017"),et("fire-js","")}Ko("");var qo="firebase",Wo="10.13.1";/**
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
 */et(qo,Wo,"app");const hs="@firebase/installations",gn="0.6.8";/**
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
 */const ls=1e4,cs=`w:${gn}`,us="FIS_v2",Xo="https://firebaseinstallations.googleapis.com/v1",Yo=60*60*1e3,Jo="installations",Qo="Installations";/**
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
 */const Zo={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Et=new _e(Jo,Qo,Zo);function fs(n){return n instanceof gt&&n.code.includes("request-failed")}/**
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
 */function ds({projectId:n}){return`${Xo}/projects/${n}/installations`}function ps(n){return{token:n.token,requestStatus:2,expiresIn:ea(n.expiresIn),creationTime:Date.now()}}async function gs(n,e){const o=(await e.json()).error;return Et.create("request-failed",{requestName:n,serverCode:o.code,serverMessage:o.message,serverStatus:o.status})}function ms({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function ta(n,{refreshToken:e}){const s=ms(n);return s.append("Authorization",na(e)),s}async function ys(n){const e=await n();return e.status>=500&&e.status<600?n():e}function ea(n){return Number(n.replace("s","000"))}function na(n){return`${us} ${n}`}/**
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
 */async function ia({appConfig:n,heartbeatServiceProvider:e},{fid:s}){const o=ds(n),h=ms(n),c=e.getImmediate({optional:!0});if(c){const A=await c.getHeartbeatsHeader();A&&h.append("x-firebase-client",A)}const m={fid:s,authVersion:us,appId:n.appId,sdkVersion:cs},w={method:"POST",headers:h,body:JSON.stringify(m)},E=await ys(()=>fetch(o,w));if(E.ok){const A=await E.json();return{fid:A.fid||s,registrationStatus:2,refreshToken:A.refreshToken,authToken:ps(A.authToken)}}else throw await gs("Create Installation",E)}/**
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
 */function vs(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function sa(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const ra=/^[cdef][\w-]{21}$/,un="";function oa(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const s=aa(n);return ra.test(s)?s:un}catch{return un}}function aa(n){return sa(n).substr(0,22)}/**
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
 */function Ae(n){return`${n.appName}!${n.appId}`}/**
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
 */const ws=new Map;function Is(n,e){const s=Ae(n);Es(s,e),ha(s,e)}function Es(n,e){const s=ws.get(n);if(s)for(const o of s)o(e)}function ha(n,e){const s=la();s&&s.postMessage({key:n,fid:e}),ca()}let It=null;function la(){return!It&&"BroadcastChannel"in self&&(It=new BroadcastChannel("[Firebase] FID Change"),It.onmessage=n=>{Es(n.data.key,n.data.fid)}),It}function ca(){ws.size===0&&It&&(It.close(),It=null)}/**
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
 */const ua="firebase-installations-database",fa=1,_t="firebase-installations-store";let en=null;function mn(){return en||(en=is(ua,fa,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(_t)}}})),en}async function we(n,e){const s=Ae(n),h=(await mn()).transaction(_t,"readwrite"),c=h.objectStore(_t),m=await c.get(s);return await c.put(e,s),await h.done,(!m||m.fid!==e.fid)&&Is(n,e.fid),e}async function _s(n){const e=Ae(n),o=(await mn()).transaction(_t,"readwrite");await o.objectStore(_t).delete(e),await o.done}async function Te(n,e){const s=Ae(n),h=(await mn()).transaction(_t,"readwrite"),c=h.objectStore(_t),m=await c.get(s),w=e(m);return w===void 0?await c.delete(s):await c.put(w,s),await h.done,w&&(!m||m.fid!==w.fid)&&Is(n,w.fid),w}/**
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
 */async function yn(n){let e;const s=await Te(n.appConfig,o=>{const h=da(o),c=pa(n,h);return e=c.registrationPromise,c.installationEntry});return s.fid===un?{installationEntry:await e}:{installationEntry:s,registrationPromise:e}}function da(n){const e=n||{fid:oa(),registrationStatus:0};return As(e)}function pa(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const h=Promise.reject(Et.create("app-offline"));return{installationEntry:e,registrationPromise:h}}const s={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},o=ga(n,s);return{installationEntry:s,registrationPromise:o}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:ma(n)}:{installationEntry:e}}async function ga(n,e){try{const s=await ia(n,e);return we(n.appConfig,s)}catch(s){throw fs(s)&&s.customData.serverCode===409?await _s(n.appConfig):await we(n.appConfig,{fid:e.fid,registrationStatus:0}),s}}async function ma(n){let e=await Ni(n.appConfig);for(;e.registrationStatus===1;)await vs(100),e=await Ni(n.appConfig);if(e.registrationStatus===0){const{installationEntry:s,registrationPromise:o}=await yn(n);return o||s}return e}function Ni(n){return Te(n,e=>{if(!e)throw Et.create("installation-not-found");return As(e)})}function As(n){return ya(n)?{fid:n.fid,registrationStatus:0}:n}function ya(n){return n.registrationStatus===1&&n.registrationTime+ls<Date.now()}/**
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
 */async function va({appConfig:n,heartbeatServiceProvider:e},s){const o=wa(n,s),h=ta(n,s),c=e.getImmediate({optional:!0});if(c){const A=await c.getHeartbeatsHeader();A&&h.append("x-firebase-client",A)}const m={installation:{sdkVersion:cs,appId:n.appId}},w={method:"POST",headers:h,body:JSON.stringify(m)},E=await ys(()=>fetch(o,w));if(E.ok){const A=await E.json();return ps(A)}else throw await gs("Generate Auth Token",E)}function wa(n,{fid:e}){return`${ds(n)}/${e}/authTokens:generate`}/**
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
 */async function vn(n,e=!1){let s;const o=await Te(n.appConfig,c=>{if(!Ts(c))throw Et.create("not-registered");const m=c.authToken;if(!e&&_a(m))return c;if(m.requestStatus===1)return s=Ia(n,e),c;{if(!navigator.onLine)throw Et.create("app-offline");const w=Ta(c);return s=Ea(n,w),w}});return s?await s:o.authToken}async function Ia(n,e){let s=await Li(n.appConfig);for(;s.authToken.requestStatus===1;)await vs(100),s=await Li(n.appConfig);const o=s.authToken;return o.requestStatus===0?vn(n,e):o}function Li(n){return Te(n,e=>{if(!Ts(e))throw Et.create("not-registered");const s=e.authToken;return ba(s)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Ea(n,e){try{const s=await va(n,e),o=Object.assign(Object.assign({},e),{authToken:s});return await we(n.appConfig,o),s}catch(s){if(fs(s)&&(s.customData.serverCode===401||s.customData.serverCode===404))await _s(n.appConfig);else{const o=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await we(n.appConfig,o)}throw s}}function Ts(n){return n!==void 0&&n.registrationStatus===2}function _a(n){return n.requestStatus===2&&!Aa(n)}function Aa(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+Yo}function Ta(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function ba(n){return n.requestStatus===1&&n.requestTime+ls<Date.now()}/**
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
 */async function Sa(n){const e=n,{installationEntry:s,registrationPromise:o}=await yn(e);return o?o.catch(console.error):vn(e).catch(console.error),s.fid}/**
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
 */async function Ca(n,e=!1){const s=n;return await Da(s),(await vn(s,e)).token}async function Da(n){const{registrationPromise:e}=await yn(n);e&&await e}/**
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
 */function Ra(n){if(!n||!n.options)throw nn("App Configuration");if(!n.name)throw nn("App Name");const e=["projectId","apiKey","appId"];for(const s of e)if(!n.options[s])throw nn(s);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function nn(n){return Et.create("missing-app-config-values",{valueName:n})}/**
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
 */const bs="installations",Pa="installations-internal",Oa=n=>{const e=n.getProvider("app").getImmediate(),s=Ra(e),o=Yt(e,"heartbeat");return{app:e,appConfig:s,heartbeatServiceProvider:o,_delete:()=>Promise.resolve()}},ka=n=>{const e=n.getProvider("app").getImmediate(),s=Yt(e,bs).getImmediate();return{getId:()=>Sa(s),getToken:h=>Ca(s,h)}};function Na(){pt(new rt(bs,Oa,"PUBLIC")),pt(new rt(Pa,ka,"PRIVATE"))}Na();et(hs,gn);et(hs,gn,"esm2017");/**
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
 */const Ie="analytics",La="firebase_id",Ma="origin",Fa=60*1e3,ja="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",wn="https://www.googletagmanager.com/gtag/js";/**
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
 */const q=new dn("@firebase/analytics");/**
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
 */const xa={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},X=new _e("analytics","Analytics",xa);/**
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
 */function Ba(n){if(!n.startsWith(wn)){const e=X.create("invalid-gtag-resource",{gtagURL:n});return q.warn(e.message),""}return n}function Ss(n){return Promise.all(n.map(e=>e.catch(s=>s)))}function Ua(n,e){let s;return window.trustedTypes&&(s=window.trustedTypes.createPolicy(n,e)),s}function $a(n,e){const s=Ua("firebase-js-sdk-policy",{createScriptURL:Ba}),o=document.createElement("script"),h=`${wn}?l=${n}&id=${e}`;o.src=s?s==null?void 0:s.createScriptURL(h):h,o.async=!0,document.head.appendChild(o)}function Va(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function Ha(n,e,s,o,h,c){const m=o[h];try{if(m)await e[m];else{const E=(await Ss(s)).find(A=>A.measurementId===h);E&&await e[E.appId]}}catch(w){q.error(w)}n("config",h,c)}async function za(n,e,s,o,h){try{let c=[];if(h&&h.send_to){let m=h.send_to;Array.isArray(m)||(m=[m]);const w=await Ss(s);for(const E of m){const A=w.find(k=>k.measurementId===E),S=A&&e[A.appId];if(S)c.push(S);else{c=[];break}}}c.length===0&&(c=Object.values(e)),await Promise.all(c),n("event",o,h||{})}catch(c){q.error(c)}}function Ga(n,e,s,o){async function h(c,...m){try{if(c==="event"){const[w,E]=m;await za(n,e,s,w,E)}else if(c==="config"){const[w,E]=m;await Ha(n,e,s,o,w,E)}else if(c==="consent"){const[w,E]=m;n("consent",w,E)}else if(c==="get"){const[w,E,A]=m;n("get",w,E,A)}else if(c==="set"){const[w]=m;n("set",w)}else n(c,...m)}catch(w){q.error(w)}}return h}function Ka(n,e,s,o,h){let c=function(...m){window[o].push(arguments)};return window[h]&&typeof window[h]=="function"&&(c=window[h]),window[h]=Ga(c,n,e,s),{gtagCore:c,wrappedGtag:window[h]}}function qa(n){const e=window.document.getElementsByTagName("script");for(const s of Object.values(e))if(s.src&&s.src.includes(wn)&&s.src.includes(n))return s;return null}/**
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
 */const Wa=30,Xa=1e3;class Ya{constructor(e={},s=Xa){this.throttleMetadata=e,this.intervalMillis=s}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,s){this.throttleMetadata[e]=s}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Cs=new Ya;function Ja(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function Qa(n){var e;const{appId:s,apiKey:o}=n,h={method:"GET",headers:Ja(o)},c=ja.replace("{app-id}",s),m=await fetch(c,h);if(m.status!==200&&m.status!==304){let w="";try{const E=await m.json();!((e=E.error)===null||e===void 0)&&e.message&&(w=E.error.message)}catch{}throw X.create("config-fetch-failed",{httpStatus:m.status,responseMessage:w})}return m.json()}async function Za(n,e=Cs,s){const{appId:o,apiKey:h,measurementId:c}=n.options;if(!o)throw X.create("no-app-id");if(!h){if(c)return{measurementId:c,appId:o};throw X.create("no-api-key")}const m=e.getThrottleMetadata(o)||{backoffCount:0,throttleEndTimeMillis:Date.now()},w=new nh;return setTimeout(async()=>{w.abort()},Fa),Ds({appId:o,apiKey:h,measurementId:c},m,w,e)}async function Ds(n,{throttleEndTimeMillis:e,backoffCount:s},o,h=Cs){var c;const{appId:m,measurementId:w}=n;try{await th(o,e)}catch(E){if(w)return q.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${w} provided in the "measurementId" field in the local Firebase config. [${E==null?void 0:E.message}]`),{appId:m,measurementId:w};throw E}try{const E=await Qa(n);return h.deleteThrottleMetadata(m),E}catch(E){const A=E;if(!eh(A)){if(h.deleteThrottleMetadata(m),w)return q.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${w} provided in the "measurementId" field in the local Firebase config. [${A==null?void 0:A.message}]`),{appId:m,measurementId:w};throw E}const S=Number((c=A==null?void 0:A.customData)===null||c===void 0?void 0:c.httpStatus)===503?Ti(s,h.intervalMillis,Wa):Ti(s,h.intervalMillis),k={throttleEndTimeMillis:Date.now()+S,backoffCount:s+1};return h.setThrottleMetadata(m,k),q.debug(`Calling attemptFetch again in ${S} millis`),Ds(n,k,o,h)}}function th(n,e){return new Promise((s,o)=>{const h=Math.max(e-Date.now(),0),c=setTimeout(s,h);n.addEventListener(()=>{clearTimeout(c),o(X.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function eh(n){if(!(n instanceof gt)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class nh{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function ih(n,e,s,o,h){if(h&&h.global){n("event",s,o);return}else{const c=await e,m=Object.assign(Object.assign({},o),{send_to:c});n("event",s,m)}}/**
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
 */async function sh(){if(Qi())try{await Zi()}catch(n){return q.warn(X.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return q.warn(X.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function rh(n,e,s,o,h,c,m){var w;const E=Za(n);E.then(N=>{s[N.measurementId]=N.appId,n.options.measurementId&&N.measurementId!==n.options.measurementId&&q.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${N.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(N=>q.error(N)),e.push(E);const A=sh().then(N=>{if(N)return o.getId()}),[S,k]=await Promise.all([E,A]);qa(c)||$a(c,S.measurementId),h("js",new Date);const R=(w=m==null?void 0:m.config)!==null&&w!==void 0?w:{};return R[Ma]="firebase",R.update=!0,k!=null&&(R[La]=k),h("config",S.measurementId,R),S.measurementId}/**
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
 */class oh{constructor(e){this.app=e}_delete(){return delete Wt[this.app.options.appId],Promise.resolve()}}let Wt={},Mi=[];const Fi={};let sn="dataLayer",ah="gtag",ji,Rs,xi=!1;function hh(){const n=[];if(Or()&&n.push("This is a browser extension environment."),kr()||n.push("Cookies are not available."),n.length>0){const e=n.map((o,h)=>`(${h+1}) ${o}`).join(" "),s=X.create("invalid-analytics-context",{errorInfo:e});q.warn(s.message)}}function lh(n,e,s){hh();const o=n.options.appId;if(!o)throw X.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)q.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw X.create("no-api-key");if(Wt[o]!=null)throw X.create("already-exists",{id:o});if(!xi){Va(sn);const{wrappedGtag:c,gtagCore:m}=Ka(Wt,Mi,Fi,sn,ah);Rs=c,ji=m,xi=!0}return Wt[o]=rh(n,Mi,Fi,e,ji,sn,s),new oh(n)}function ch(n=rs()){n=ts(n);const e=Yt(n,Ie);return e.isInitialized()?e.getImmediate():uh(n)}function uh(n,e={}){const s=Yt(n,Ie);if(s.isInitialized()){const h=s.getImmediate();if(ye(e,s.getOptions()))return h;throw X.create("already-initialized")}return s.initialize({options:e})}function fh(n,e,s,o){n=ts(n),ih(Rs,Wt[n.app.options.appId],e,s,o).catch(h=>q.error(h))}const Bi="@firebase/analytics",Ui="0.10.7";function dh(){pt(new rt(Ie,(e,{options:s})=>{const o=e.getProvider("app").getImmediate(),h=e.getProvider("installations-internal").getImmediate();return lh(o,h,s)},"PUBLIC")),pt(new rt("analytics-internal",n,"PRIVATE")),et(Bi,Ui),et(Bi,Ui,"esm2017");function n(e){try{const s=e.getProvider(Ie).getImmediate();return{logEvent:(o,h,c)=>fh(s,o,h,c)}}catch(s){throw X.create("interop-component-reg-failed",{reason:s})}}}dh();var $i=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ps;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(g,l){function f(){}f.prototype=l.prototype,g.D=l.prototype,g.prototype=new f,g.prototype.constructor=g,g.C=function(d,p,v){for(var u=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)u[nt-2]=arguments[nt];return l.prototype[p].apply(d,u)}}function s(){this.blockSize=-1}function o(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(o,s),o.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function h(g,l,f){f||(f=0);var d=Array(16);if(typeof l=="string")for(var p=0;16>p;++p)d[p]=l.charCodeAt(f++)|l.charCodeAt(f++)<<8|l.charCodeAt(f++)<<16|l.charCodeAt(f++)<<24;else for(p=0;16>p;++p)d[p]=l[f++]|l[f++]<<8|l[f++]<<16|l[f++]<<24;l=g.g[0],f=g.g[1],p=g.g[2];var v=g.g[3],u=l+(v^f&(p^v))+d[0]+3614090360&4294967295;l=f+(u<<7&4294967295|u>>>25),u=v+(p^l&(f^p))+d[1]+3905402710&4294967295,v=l+(u<<12&4294967295|u>>>20),u=p+(f^v&(l^f))+d[2]+606105819&4294967295,p=v+(u<<17&4294967295|u>>>15),u=f+(l^p&(v^l))+d[3]+3250441966&4294967295,f=p+(u<<22&4294967295|u>>>10),u=l+(v^f&(p^v))+d[4]+4118548399&4294967295,l=f+(u<<7&4294967295|u>>>25),u=v+(p^l&(f^p))+d[5]+1200080426&4294967295,v=l+(u<<12&4294967295|u>>>20),u=p+(f^v&(l^f))+d[6]+2821735955&4294967295,p=v+(u<<17&4294967295|u>>>15),u=f+(l^p&(v^l))+d[7]+4249261313&4294967295,f=p+(u<<22&4294967295|u>>>10),u=l+(v^f&(p^v))+d[8]+1770035416&4294967295,l=f+(u<<7&4294967295|u>>>25),u=v+(p^l&(f^p))+d[9]+2336552879&4294967295,v=l+(u<<12&4294967295|u>>>20),u=p+(f^v&(l^f))+d[10]+4294925233&4294967295,p=v+(u<<17&4294967295|u>>>15),u=f+(l^p&(v^l))+d[11]+2304563134&4294967295,f=p+(u<<22&4294967295|u>>>10),u=l+(v^f&(p^v))+d[12]+1804603682&4294967295,l=f+(u<<7&4294967295|u>>>25),u=v+(p^l&(f^p))+d[13]+4254626195&4294967295,v=l+(u<<12&4294967295|u>>>20),u=p+(f^v&(l^f))+d[14]+2792965006&4294967295,p=v+(u<<17&4294967295|u>>>15),u=f+(l^p&(v^l))+d[15]+1236535329&4294967295,f=p+(u<<22&4294967295|u>>>10),u=l+(p^v&(f^p))+d[1]+4129170786&4294967295,l=f+(u<<5&4294967295|u>>>27),u=v+(f^p&(l^f))+d[6]+3225465664&4294967295,v=l+(u<<9&4294967295|u>>>23),u=p+(l^f&(v^l))+d[11]+643717713&4294967295,p=v+(u<<14&4294967295|u>>>18),u=f+(v^l&(p^v))+d[0]+3921069994&4294967295,f=p+(u<<20&4294967295|u>>>12),u=l+(p^v&(f^p))+d[5]+3593408605&4294967295,l=f+(u<<5&4294967295|u>>>27),u=v+(f^p&(l^f))+d[10]+38016083&4294967295,v=l+(u<<9&4294967295|u>>>23),u=p+(l^f&(v^l))+d[15]+3634488961&4294967295,p=v+(u<<14&4294967295|u>>>18),u=f+(v^l&(p^v))+d[4]+3889429448&4294967295,f=p+(u<<20&4294967295|u>>>12),u=l+(p^v&(f^p))+d[9]+568446438&4294967295,l=f+(u<<5&4294967295|u>>>27),u=v+(f^p&(l^f))+d[14]+3275163606&4294967295,v=l+(u<<9&4294967295|u>>>23),u=p+(l^f&(v^l))+d[3]+4107603335&4294967295,p=v+(u<<14&4294967295|u>>>18),u=f+(v^l&(p^v))+d[8]+1163531501&4294967295,f=p+(u<<20&4294967295|u>>>12),u=l+(p^v&(f^p))+d[13]+2850285829&4294967295,l=f+(u<<5&4294967295|u>>>27),u=v+(f^p&(l^f))+d[2]+4243563512&4294967295,v=l+(u<<9&4294967295|u>>>23),u=p+(l^f&(v^l))+d[7]+1735328473&4294967295,p=v+(u<<14&4294967295|u>>>18),u=f+(v^l&(p^v))+d[12]+2368359562&4294967295,f=p+(u<<20&4294967295|u>>>12),u=l+(f^p^v)+d[5]+4294588738&4294967295,l=f+(u<<4&4294967295|u>>>28),u=v+(l^f^p)+d[8]+2272392833&4294967295,v=l+(u<<11&4294967295|u>>>21),u=p+(v^l^f)+d[11]+1839030562&4294967295,p=v+(u<<16&4294967295|u>>>16),u=f+(p^v^l)+d[14]+4259657740&4294967295,f=p+(u<<23&4294967295|u>>>9),u=l+(f^p^v)+d[1]+2763975236&4294967295,l=f+(u<<4&4294967295|u>>>28),u=v+(l^f^p)+d[4]+1272893353&4294967295,v=l+(u<<11&4294967295|u>>>21),u=p+(v^l^f)+d[7]+4139469664&4294967295,p=v+(u<<16&4294967295|u>>>16),u=f+(p^v^l)+d[10]+3200236656&4294967295,f=p+(u<<23&4294967295|u>>>9),u=l+(f^p^v)+d[13]+681279174&4294967295,l=f+(u<<4&4294967295|u>>>28),u=v+(l^f^p)+d[0]+3936430074&4294967295,v=l+(u<<11&4294967295|u>>>21),u=p+(v^l^f)+d[3]+3572445317&4294967295,p=v+(u<<16&4294967295|u>>>16),u=f+(p^v^l)+d[6]+76029189&4294967295,f=p+(u<<23&4294967295|u>>>9),u=l+(f^p^v)+d[9]+3654602809&4294967295,l=f+(u<<4&4294967295|u>>>28),u=v+(l^f^p)+d[12]+3873151461&4294967295,v=l+(u<<11&4294967295|u>>>21),u=p+(v^l^f)+d[15]+530742520&4294967295,p=v+(u<<16&4294967295|u>>>16),u=f+(p^v^l)+d[2]+3299628645&4294967295,f=p+(u<<23&4294967295|u>>>9),u=l+(p^(f|~v))+d[0]+4096336452&4294967295,l=f+(u<<6&4294967295|u>>>26),u=v+(f^(l|~p))+d[7]+1126891415&4294967295,v=l+(u<<10&4294967295|u>>>22),u=p+(l^(v|~f))+d[14]+2878612391&4294967295,p=v+(u<<15&4294967295|u>>>17),u=f+(v^(p|~l))+d[5]+4237533241&4294967295,f=p+(u<<21&4294967295|u>>>11),u=l+(p^(f|~v))+d[12]+1700485571&4294967295,l=f+(u<<6&4294967295|u>>>26),u=v+(f^(l|~p))+d[3]+2399980690&4294967295,v=l+(u<<10&4294967295|u>>>22),u=p+(l^(v|~f))+d[10]+4293915773&4294967295,p=v+(u<<15&4294967295|u>>>17),u=f+(v^(p|~l))+d[1]+2240044497&4294967295,f=p+(u<<21&4294967295|u>>>11),u=l+(p^(f|~v))+d[8]+1873313359&4294967295,l=f+(u<<6&4294967295|u>>>26),u=v+(f^(l|~p))+d[15]+4264355552&4294967295,v=l+(u<<10&4294967295|u>>>22),u=p+(l^(v|~f))+d[6]+2734768916&4294967295,p=v+(u<<15&4294967295|u>>>17),u=f+(v^(p|~l))+d[13]+1309151649&4294967295,f=p+(u<<21&4294967295|u>>>11),u=l+(p^(f|~v))+d[4]+4149444226&4294967295,l=f+(u<<6&4294967295|u>>>26),u=v+(f^(l|~p))+d[11]+3174756917&4294967295,v=l+(u<<10&4294967295|u>>>22),u=p+(l^(v|~f))+d[2]+718787259&4294967295,p=v+(u<<15&4294967295|u>>>17),u=f+(v^(p|~l))+d[9]+3951481745&4294967295,g.g[0]=g.g[0]+l&4294967295,g.g[1]=g.g[1]+(p+(u<<21&4294967295|u>>>11))&4294967295,g.g[2]=g.g[2]+p&4294967295,g.g[3]=g.g[3]+v&4294967295}o.prototype.u=function(g,l){l===void 0&&(l=g.length);for(var f=l-this.blockSize,d=this.B,p=this.h,v=0;v<l;){if(p==0)for(;v<=f;)h(this,g,v),v+=this.blockSize;if(typeof g=="string"){for(;v<l;)if(d[p++]=g.charCodeAt(v++),p==this.blockSize){h(this,d),p=0;break}}else for(;v<l;)if(d[p++]=g[v++],p==this.blockSize){h(this,d),p=0;break}}this.h=p,this.o+=l},o.prototype.v=function(){var g=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);g[0]=128;for(var l=1;l<g.length-8;++l)g[l]=0;var f=8*this.o;for(l=g.length-8;l<g.length;++l)g[l]=f&255,f/=256;for(this.u(g),g=Array(16),l=f=0;4>l;++l)for(var d=0;32>d;d+=8)g[f++]=this.g[l]>>>d&255;return g};function c(g,l){var f=w;return Object.prototype.hasOwnProperty.call(f,g)?f[g]:f[g]=l(g)}function m(g,l){this.h=l;for(var f=[],d=!0,p=g.length-1;0<=p;p--){var v=g[p]|0;d&&v==l||(f[p]=v,d=!1)}this.g=f}var w={};function E(g){return-128<=g&&128>g?c(g,function(l){return new m([l|0],0>l?-1:0)}):new m([g|0],0>g?-1:0)}function A(g){if(isNaN(g)||!isFinite(g))return k;if(0>g)return M(A(-g));for(var l=[],f=1,d=0;g>=f;d++)l[d]=g/f|0,f*=4294967296;return new m(l,0)}function S(g,l){if(g.length==0)throw Error("number format error: empty string");if(l=l||10,2>l||36<l)throw Error("radix out of range: "+l);if(g.charAt(0)=="-")return M(S(g.substring(1),l));if(0<=g.indexOf("-"))throw Error('number format error: interior "-" character');for(var f=A(Math.pow(l,8)),d=k,p=0;p<g.length;p+=8){var v=Math.min(8,g.length-p),u=parseInt(g.substring(p,p+v),l);8>v?(v=A(Math.pow(l,v)),d=d.j(v).add(A(u))):(d=d.j(f),d=d.add(A(u)))}return d}var k=E(0),R=E(1),N=E(16777216);n=m.prototype,n.m=function(){if(j(this))return-M(this).m();for(var g=0,l=1,f=0;f<this.g.length;f++){var d=this.i(f);g+=(0<=d?d:4294967296+d)*l,l*=4294967296}return g},n.toString=function(g){if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(C(this))return"0";if(j(this))return"-"+M(this).toString(g);for(var l=A(Math.pow(g,6)),f=this,d="";;){var p=at(f,l).g;f=At(f,p.j(l));var v=((0<f.g.length?f.g[0]:f.h)>>>0).toString(g);if(f=p,C(f))return v+d;for(;6>v.length;)v="0"+v;d=v+d}},n.i=function(g){return 0>g?0:g<this.g.length?this.g[g]:this.h};function C(g){if(g.h!=0)return!1;for(var l=0;l<g.g.length;l++)if(g.g[l]!=0)return!1;return!0}function j(g){return g.h==-1}n.l=function(g){return g=At(this,g),j(g)?-1:C(g)?0:1};function M(g){for(var l=g.g.length,f=[],d=0;d<l;d++)f[d]=~g.g[d];return new m(f,~g.h).add(R)}n.abs=function(){return j(this)?M(this):this},n.add=function(g){for(var l=Math.max(this.g.length,g.g.length),f=[],d=0,p=0;p<=l;p++){var v=d+(this.i(p)&65535)+(g.i(p)&65535),u=(v>>>16)+(this.i(p)>>>16)+(g.i(p)>>>16);d=u>>>16,v&=65535,u&=65535,f[p]=u<<16|v}return new m(f,f[f.length-1]&-2147483648?-1:0)};function At(g,l){return g.add(M(l))}n.j=function(g){if(C(this)||C(g))return k;if(j(this))return j(g)?M(this).j(M(g)):M(M(this).j(g));if(j(g))return M(this.j(M(g)));if(0>this.l(N)&&0>g.l(N))return A(this.m()*g.m());for(var l=this.g.length+g.g.length,f=[],d=0;d<2*l;d++)f[d]=0;for(d=0;d<this.g.length;d++)for(var p=0;p<g.g.length;p++){var v=this.i(d)>>>16,u=this.i(d)&65535,nt=g.i(p)>>>16,Ot=g.i(p)&65535;f[2*d+2*p]+=u*Ot,Z(f,2*d+2*p),f[2*d+2*p+1]+=v*Ot,Z(f,2*d+2*p+1),f[2*d+2*p+1]+=u*nt,Z(f,2*d+2*p+1),f[2*d+2*p+2]+=v*nt,Z(f,2*d+2*p+2)}for(d=0;d<l;d++)f[d]=f[2*d+1]<<16|f[2*d];for(d=l;d<2*l;d++)f[d]=0;return new m(f,0)};function Z(g,l){for(;(g[l]&65535)!=g[l];)g[l+1]+=g[l]>>>16,g[l]&=65535,l++}function Y(g,l){this.g=g,this.h=l}function at(g,l){if(C(l))throw Error("division by zero");if(C(g))return new Y(k,k);if(j(g))return l=at(M(g),l),new Y(M(l.g),M(l.h));if(j(l))return l=at(g,M(l)),new Y(M(l.g),l.h);if(30<g.g.length){if(j(g)||j(l))throw Error("slowDivide_ only works with positive integers.");for(var f=R,d=l;0>=d.l(g);)f=Qt(f),d=Qt(d);var p=tt(f,1),v=tt(d,1);for(d=tt(d,2),f=tt(f,2);!C(d);){var u=v.add(d);0>=u.l(g)&&(p=p.add(f),v=u),d=tt(d,1),f=tt(f,1)}return l=At(g,p.j(l)),new Y(p,l)}for(p=k;0<=g.l(l);){for(f=Math.max(1,Math.floor(g.m()/l.m())),d=Math.ceil(Math.log(f)/Math.LN2),d=48>=d?1:Math.pow(2,d-48),v=A(f),u=v.j(l);j(u)||0<u.l(g);)f-=d,v=A(f),u=v.j(l);C(v)&&(v=R),p=p.add(v),g=At(g,u)}return new Y(p,g)}n.A=function(g){return at(this,g).h},n.and=function(g){for(var l=Math.max(this.g.length,g.g.length),f=[],d=0;d<l;d++)f[d]=this.i(d)&g.i(d);return new m(f,this.h&g.h)},n.or=function(g){for(var l=Math.max(this.g.length,g.g.length),f=[],d=0;d<l;d++)f[d]=this.i(d)|g.i(d);return new m(f,this.h|g.h)},n.xor=function(g){for(var l=Math.max(this.g.length,g.g.length),f=[],d=0;d<l;d++)f[d]=this.i(d)^g.i(d);return new m(f,this.h^g.h)};function Qt(g){for(var l=g.g.length+1,f=[],d=0;d<l;d++)f[d]=g.i(d)<<1|g.i(d-1)>>>31;return new m(f,g.h)}function tt(g,l){var f=l>>5;l%=32;for(var d=g.g.length-f,p=[],v=0;v<d;v++)p[v]=0<l?g.i(v+f)>>>l|g.i(v+f+1)<<32-l:g.i(v+f);return new m(p,g.h)}o.prototype.digest=o.prototype.v,o.prototype.reset=o.prototype.s,o.prototype.update=o.prototype.u,m.prototype.add=m.prototype.add,m.prototype.multiply=m.prototype.j,m.prototype.modulo=m.prototype.A,m.prototype.compare=m.prototype.l,m.prototype.toNumber=m.prototype.m,m.prototype.toString=m.prototype.toString,m.prototype.getBits=m.prototype.i,m.fromNumber=A,m.fromString=S,Ps=m}).apply(typeof $i<"u"?$i:typeof self<"u"?self:typeof window<"u"?window:{});var ge=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(t,i,r){return t==Array.prototype||t==Object.prototype||(t[i]=r.value),t};function s(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof ge=="object"&&ge];for(var i=0;i<t.length;++i){var r=t[i];if(r&&r.Math==Math)return r}throw Error("Cannot find global object")}var o=s(this);function h(t,i){if(i)t:{var r=o;t=t.split(".");for(var a=0;a<t.length-1;a++){var y=t[a];if(!(y in r))break t;r=r[y]}t=t[t.length-1],a=r[t],i=i(a),i!=a&&i!=null&&e(r,t,{configurable:!0,writable:!0,value:i})}}function c(t,i){t instanceof String&&(t+="");var r=0,a=!1,y={next:function(){if(!a&&r<t.length){var I=r++;return{value:i(I,t[I]),done:!1}}return a=!0,{done:!0,value:void 0}}};return y[Symbol.iterator]=function(){return y},y}h("Array.prototype.values",function(t){return t||function(){return c(this,function(i,r){return r})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var m=m||{},w=this||self;function E(t){var i=typeof t;return i=i!="object"?i:t?Array.isArray(t)?"array":i:"null",i=="array"||i=="object"&&typeof t.length=="number"}function A(t){var i=typeof t;return i=="object"&&t!=null||i=="function"}function S(t,i,r){return t.call.apply(t.bind,arguments)}function k(t,i,r){if(!t)throw Error();if(2<arguments.length){var a=Array.prototype.slice.call(arguments,2);return function(){var y=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(y,a),t.apply(i,y)}}return function(){return t.apply(i,arguments)}}function R(t,i,r){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?S:k,R.apply(null,arguments)}function N(t,i){var r=Array.prototype.slice.call(arguments,1);return function(){var a=r.slice();return a.push.apply(a,arguments),t.apply(this,a)}}function C(t,i){function r(){}r.prototype=i.prototype,t.aa=i.prototype,t.prototype=new r,t.prototype.constructor=t,t.Qb=function(a,y,I){for(var _=Array(arguments.length-2),P=2;P<arguments.length;P++)_[P-2]=arguments[P];return i.prototype[y].apply(a,_)}}function j(t){const i=t.length;if(0<i){const r=Array(i);for(let a=0;a<i;a++)r[a]=t[a];return r}return[]}function M(t,i){for(let r=1;r<arguments.length;r++){const a=arguments[r];if(E(a)){const y=t.length||0,I=a.length||0;t.length=y+I;for(let _=0;_<I;_++)t[y+_]=a[_]}else t.push(a)}}class At{constructor(i,r){this.i=i,this.j=r,this.h=0,this.g=null}get(){let i;return 0<this.h?(this.h--,i=this.g,this.g=i.next,i.next=null):i=this.i(),i}}function Z(t){return/^[\s\xa0]*$/.test(t)}function Y(){var t=w.navigator;return t&&(t=t.userAgent)?t:""}function at(t){return at[" "](t),t}at[" "]=function(){};var Qt=Y().indexOf("Gecko")!=-1&&!(Y().toLowerCase().indexOf("webkit")!=-1&&Y().indexOf("Edge")==-1)&&!(Y().indexOf("Trident")!=-1||Y().indexOf("MSIE")!=-1)&&Y().indexOf("Edge")==-1;function tt(t,i,r){for(const a in t)i.call(r,t[a],a,t)}function g(t,i){for(const r in t)i.call(void 0,t[r],r,t)}function l(t){const i={};for(const r in t)i[r]=t[r];return i}const f="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function d(t,i){let r,a;for(let y=1;y<arguments.length;y++){a=arguments[y];for(r in a)t[r]=a[r];for(let I=0;I<f.length;I++)r=f[I],Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}}function p(t){var i=1;t=t.split(":");const r=[];for(;0<i&&t.length;)r.push(t.shift()),i--;return t.length&&r.push(t.join(":")),r}function v(t){w.setTimeout(()=>{throw t},0)}function u(){var t=be;let i=null;return t.g&&(i=t.g,t.g=t.g.next,t.g||(t.h=null),i.next=null),i}class nt{constructor(){this.h=this.g=null}add(i,r){const a=Ot.get();a.set(i,r),this.h?this.h.next=a:this.g=a,this.h=a}}var Ot=new At(()=>new Fs,t=>t.reset());class Fs{constructor(){this.next=this.g=this.h=null}set(i,r){this.h=i,this.g=r,this.next=null}reset(){this.next=this.g=this.h=null}}let kt,Nt=!1,be=new nt,Tn=()=>{const t=w.Promise.resolve(void 0);kt=()=>{t.then(js)}};var js=()=>{for(var t;t=u();){try{t.h.call(t.g)}catch(r){v(r)}var i=Ot;i.j(t),100>i.h&&(i.h++,t.next=i.g,i.g=t)}Nt=!1};function ht(){this.s=this.s,this.C=this.C}ht.prototype.s=!1,ht.prototype.ma=function(){this.s||(this.s=!0,this.N())},ht.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function x(t,i){this.type=t,this.g=this.target=i,this.defaultPrevented=!1}x.prototype.h=function(){this.defaultPrevented=!0};var xs=function(){if(!w.addEventListener||!Object.defineProperty)return!1;var t=!1,i=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const r=()=>{};w.addEventListener("test",r,i),w.removeEventListener("test",r,i)}catch{}return t}();function Lt(t,i){if(x.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var r=this.type=t.type,a=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=i,i=t.relatedTarget){if(Qt){t:{try{at(i.nodeName);var y=!0;break t}catch{}y=!1}y||(i=null)}}else r=="mouseover"?i=t.fromElement:r=="mouseout"&&(i=t.toElement);this.relatedTarget=i,a?(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Bs[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Lt.aa.h.call(this)}}C(Lt,x);var Bs={2:"touch",3:"pen",4:"mouse"};Lt.prototype.h=function(){Lt.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Zt="closure_listenable_"+(1e6*Math.random()|0),Us=0;function $s(t,i,r,a,y){this.listener=t,this.proxy=null,this.src=i,this.type=r,this.capture=!!a,this.ha=y,this.key=++Us,this.da=this.fa=!1}function te(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function ee(t){this.src=t,this.g={},this.h=0}ee.prototype.add=function(t,i,r,a,y){var I=t.toString();t=this.g[I],t||(t=this.g[I]=[],this.h++);var _=Ce(t,i,a,y);return-1<_?(i=t[_],r||(i.fa=!1)):(i=new $s(i,this.src,I,!!a,y),i.fa=r,t.push(i)),i};function Se(t,i){var r=i.type;if(r in t.g){var a=t.g[r],y=Array.prototype.indexOf.call(a,i,void 0),I;(I=0<=y)&&Array.prototype.splice.call(a,y,1),I&&(te(i),t.g[r].length==0&&(delete t.g[r],t.h--))}}function Ce(t,i,r,a){for(var y=0;y<t.length;++y){var I=t[y];if(!I.da&&I.listener==i&&I.capture==!!r&&I.ha==a)return y}return-1}var De="closure_lm_"+(1e6*Math.random()|0),Re={};function bn(t,i,r,a,y){if(Array.isArray(i)){for(var I=0;I<i.length;I++)bn(t,i[I],r,a,y);return null}return r=Dn(r),t&&t[Zt]?t.K(i,r,A(a)?!!a.capture:!!a,y):Vs(t,i,r,!1,a,y)}function Vs(t,i,r,a,y,I){if(!i)throw Error("Invalid event type");var _=A(y)?!!y.capture:!!y,P=Oe(t);if(P||(t[De]=P=new ee(t)),r=P.add(i,r,a,_,I),r.proxy)return r;if(a=Hs(),r.proxy=a,a.src=t,a.listener=r,t.addEventListener)xs||(y=_),y===void 0&&(y=!1),t.addEventListener(i.toString(),a,y);else if(t.attachEvent)t.attachEvent(Cn(i.toString()),a);else if(t.addListener&&t.removeListener)t.addListener(a);else throw Error("addEventListener and attachEvent are unavailable.");return r}function Hs(){function t(r){return i.call(t.src,t.listener,r)}const i=zs;return t}function Sn(t,i,r,a,y){if(Array.isArray(i))for(var I=0;I<i.length;I++)Sn(t,i[I],r,a,y);else a=A(a)?!!a.capture:!!a,r=Dn(r),t&&t[Zt]?(t=t.i,i=String(i).toString(),i in t.g&&(I=t.g[i],r=Ce(I,r,a,y),-1<r&&(te(I[r]),Array.prototype.splice.call(I,r,1),I.length==0&&(delete t.g[i],t.h--)))):t&&(t=Oe(t))&&(i=t.g[i.toString()],t=-1,i&&(t=Ce(i,r,a,y)),(r=-1<t?i[t]:null)&&Pe(r))}function Pe(t){if(typeof t!="number"&&t&&!t.da){var i=t.src;if(i&&i[Zt])Se(i.i,t);else{var r=t.type,a=t.proxy;i.removeEventListener?i.removeEventListener(r,a,t.capture):i.detachEvent?i.detachEvent(Cn(r),a):i.addListener&&i.removeListener&&i.removeListener(a),(r=Oe(i))?(Se(r,t),r.h==0&&(r.src=null,i[De]=null)):te(t)}}}function Cn(t){return t in Re?Re[t]:Re[t]="on"+t}function zs(t,i){if(t.da)t=!0;else{i=new Lt(i,this);var r=t.listener,a=t.ha||t.src;t.fa&&Pe(t),t=r.call(a,i)}return t}function Oe(t){return t=t[De],t instanceof ee?t:null}var ke="__closure_events_fn_"+(1e9*Math.random()>>>0);function Dn(t){return typeof t=="function"?t:(t[ke]||(t[ke]=function(i){return t.handleEvent(i)}),t[ke])}function B(){ht.call(this),this.i=new ee(this),this.M=this,this.F=null}C(B,ht),B.prototype[Zt]=!0,B.prototype.removeEventListener=function(t,i,r,a){Sn(this,t,i,r,a)};function G(t,i){var r,a=t.F;if(a)for(r=[];a;a=a.F)r.push(a);if(t=t.M,a=i.type||i,typeof i=="string")i=new x(i,t);else if(i instanceof x)i.target=i.target||t;else{var y=i;i=new x(a,t),d(i,y)}if(y=!0,r)for(var I=r.length-1;0<=I;I--){var _=i.g=r[I];y=ne(_,a,!0,i)&&y}if(_=i.g=t,y=ne(_,a,!0,i)&&y,y=ne(_,a,!1,i)&&y,r)for(I=0;I<r.length;I++)_=i.g=r[I],y=ne(_,a,!1,i)&&y}B.prototype.N=function(){if(B.aa.N.call(this),this.i){var t=this.i,i;for(i in t.g){for(var r=t.g[i],a=0;a<r.length;a++)te(r[a]);delete t.g[i],t.h--}}this.F=null},B.prototype.K=function(t,i,r,a){return this.i.add(String(t),i,!1,r,a)},B.prototype.L=function(t,i,r,a){return this.i.add(String(t),i,!0,r,a)};function ne(t,i,r,a){if(i=t.i.g[String(i)],!i)return!0;i=i.concat();for(var y=!0,I=0;I<i.length;++I){var _=i[I];if(_&&!_.da&&_.capture==r){var P=_.listener,F=_.ha||_.src;_.fa&&Se(t.i,_),y=P.call(F,a)!==!1&&y}}return y&&!a.defaultPrevented}function Rn(t,i,r){if(typeof t=="function")r&&(t=R(t,r));else if(t&&typeof t.handleEvent=="function")t=R(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(i)?-1:w.setTimeout(t,i||0)}function Pn(t){t.g=Rn(()=>{t.g=null,t.i&&(t.i=!1,Pn(t))},t.l);const i=t.h;t.h=null,t.m.apply(null,i)}class Gs extends ht{constructor(i,r){super(),this.m=i,this.l=r,this.h=null,this.i=!1,this.g=null}j(i){this.h=arguments,this.g?this.i=!0:Pn(this)}N(){super.N(),this.g&&(w.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Mt(t){ht.call(this),this.h=t,this.g={}}C(Mt,ht);var On=[];function kn(t){tt(t.g,function(i,r){this.g.hasOwnProperty(r)&&Pe(i)},t),t.g={}}Mt.prototype.N=function(){Mt.aa.N.call(this),kn(this)},Mt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ne=w.JSON.stringify,Ks=w.JSON.parse,qs=class{stringify(t){return w.JSON.stringify(t,void 0)}parse(t){return w.JSON.parse(t,void 0)}};function Le(){}Le.prototype.h=null;function Nn(t){return t.h||(t.h=t.i())}function Ws(){}var Ft={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Me(){x.call(this,"d")}C(Me,x);function Fe(){x.call(this,"c")}C(Fe,x);var Tt={},Ln=null;function je(){return Ln=Ln||new B}Tt.La="serverreachability";function Mn(t){x.call(this,Tt.La,t)}C(Mn,x);function jt(t){const i=je();G(i,new Mn(i))}Tt.STAT_EVENT="statevent";function Fn(t,i){x.call(this,Tt.STAT_EVENT,t),this.stat=i}C(Fn,x);function K(t){const i=je();G(i,new Fn(i,t))}Tt.Ma="timingevent";function jn(t,i){x.call(this,Tt.Ma,t),this.size=i}C(jn,x);function xt(t,i){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return w.setTimeout(function(){t()},i)}function Bt(){this.g=!0}Bt.prototype.xa=function(){this.g=!1};function Xs(t,i,r,a,y,I){t.info(function(){if(t.g)if(I)for(var _="",P=I.split("&"),F=0;F<P.length;F++){var b=P[F].split("=");if(1<b.length){var U=b[0];b=b[1];var $=U.split("_");_=2<=$.length&&$[1]=="type"?_+(U+"="+b+"&"):_+(U+"=redacted&")}}else _=null;else _=I;return"XMLHTTP REQ ("+a+") [attempt "+y+"]: "+i+`
`+r+`
`+_})}function Ys(t,i,r,a,y,I,_){t.info(function(){return"XMLHTTP RESP ("+a+") [ attempt "+y+"]: "+i+`
`+r+`
`+I+" "+_})}function bt(t,i,r,a){t.info(function(){return"XMLHTTP TEXT ("+i+"): "+Qs(t,r)+(a?" "+a:"")})}function Js(t,i){t.info(function(){return"TIMEOUT: "+i})}Bt.prototype.info=function(){};function Qs(t,i){if(!t.g)return i;if(!i)return null;try{var r=JSON.parse(i);if(r){for(t=0;t<r.length;t++)if(Array.isArray(r[t])){var a=r[t];if(!(2>a.length)){var y=a[1];if(Array.isArray(y)&&!(1>y.length)){var I=y[0];if(I!="noop"&&I!="stop"&&I!="close")for(var _=1;_<y.length;_++)y[_]=""}}}}return Ne(r)}catch{return i}}var xe={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Zs={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Be;function ie(){}C(ie,Le),ie.prototype.g=function(){return new XMLHttpRequest},ie.prototype.i=function(){return{}},Be=new ie;function lt(t,i,r,a){this.j=t,this.i=i,this.l=r,this.R=a||1,this.U=new Mt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new xn}function xn(){this.i=null,this.g="",this.h=!1}var Bn={},Ue={};function $e(t,i,r){t.L=1,t.v=ae(it(i)),t.m=r,t.P=!0,Un(t,null)}function Un(t,i){t.F=Date.now(),se(t),t.A=it(t.v);var r=t.A,a=t.R;Array.isArray(a)||(a=[String(a)]),ti(r.i,"t",a),t.C=0,r=t.j.J,t.h=new xn,t.g=vi(t.j,r?i:null,!t.m),0<t.O&&(t.M=new Gs(R(t.Y,t,t.g),t.O)),i=t.U,r=t.g,a=t.ca;var y="readystatechange";Array.isArray(y)||(y&&(On[0]=y.toString()),y=On);for(var I=0;I<y.length;I++){var _=bn(r,y[I],a||i.handleEvent,!1,i.h||i);if(!_)break;i.g[_.key]=_}i=t.H?l(t.H):{},t.m?(t.u||(t.u="POST"),i["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,i)):(t.u="GET",t.g.ea(t.A,t.u,null,i)),jt(),Xs(t.i,t.u,t.A,t.l,t.R,t.m)}lt.prototype.ca=function(t){t=t.target;const i=this.M;i&&st(t)==3?i.j():this.Y(t)},lt.prototype.Y=function(t){try{if(t==this.g)t:{const $=st(this.g);var i=this.g.Ba();const Dt=this.g.Z();if(!(3>$)&&($!=3||this.g&&(this.h.h||this.g.oa()||ai(this.g)))){this.J||$!=4||i==7||(i==8||0>=Dt?jt(3):jt(2)),Ve(this);var r=this.g.Z();this.X=r;e:if($n(this)){var a=ai(this.g);t="";var y=a.length,I=st(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){mt(this),Ut(this);var _="";break e}this.h.i=new w.TextDecoder}for(i=0;i<y;i++)this.h.h=!0,t+=this.h.i.decode(a[i],{stream:!(I&&i==y-1)});a.length=0,this.h.g+=t,this.C=0,_=this.h.g}else _=this.g.oa();if(this.o=r==200,Ys(this.i,this.u,this.A,this.l,this.R,$,r),this.o){if(this.T&&!this.K){e:{if(this.g){var P,F=this.g;if((P=F.g?F.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Z(P)){var b=P;break e}}b=null}if(r=b)bt(this.i,this.l,r,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,He(this,r);else{this.o=!1,this.s=3,K(12),mt(this),Ut(this);break t}}if(this.P){r=!0;let Q;for(;!this.J&&this.C<_.length;)if(Q=tr(this,_),Q==Ue){$==4&&(this.s=4,K(14),r=!1),bt(this.i,this.l,null,"[Incomplete Response]");break}else if(Q==Bn){this.s=4,K(15),bt(this.i,this.l,_,"[Invalid Chunk]"),r=!1;break}else bt(this.i,this.l,Q,null),He(this,Q);if($n(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),$!=4||_.length!=0||this.h.h||(this.s=1,K(16),r=!1),this.o=this.o&&r,!r)bt(this.i,this.l,_,"[Invalid Chunked Response]"),mt(this),Ut(this);else if(0<_.length&&!this.W){this.W=!0;var U=this.j;U.g==this&&U.ba&&!U.M&&(U.j.info("Great, no buffering proxy detected. Bytes received: "+_.length),Xe(U),U.M=!0,K(11))}}else bt(this.i,this.l,_,null),He(this,_);$==4&&mt(this),this.o&&!this.J&&($==4?pi(this.j,this):(this.o=!1,se(this)))}else yr(this.g),r==400&&0<_.indexOf("Unknown SID")?(this.s=3,K(12)):(this.s=0,K(13)),mt(this),Ut(this)}}}catch{}finally{}};function $n(t){return t.g?t.u=="GET"&&t.L!=2&&t.j.Ca:!1}function tr(t,i){var r=t.C,a=i.indexOf(`
`,r);return a==-1?Ue:(r=Number(i.substring(r,a)),isNaN(r)?Bn:(a+=1,a+r>i.length?Ue:(i=i.slice(a,a+r),t.C=a+r,i)))}lt.prototype.cancel=function(){this.J=!0,mt(this)};function se(t){t.S=Date.now()+t.I,Vn(t,t.I)}function Vn(t,i){if(t.B!=null)throw Error("WatchDog timer not null");t.B=xt(R(t.ba,t),i)}function Ve(t){t.B&&(w.clearTimeout(t.B),t.B=null)}lt.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(Js(this.i,this.A),this.L!=2&&(jt(),K(17)),mt(this),this.s=2,Ut(this)):Vn(this,this.S-t)};function Ut(t){t.j.G==0||t.J||pi(t.j,t)}function mt(t){Ve(t);var i=t.M;i&&typeof i.ma=="function"&&i.ma(),t.M=null,kn(t.U),t.g&&(i=t.g,t.g=null,i.abort(),i.ma())}function He(t,i){try{var r=t.j;if(r.G!=0&&(r.g==t||ze(r.h,t))){if(!t.K&&ze(r.h,t)&&r.G==3){try{var a=r.Da.g.parse(i)}catch{a=null}if(Array.isArray(a)&&a.length==3){var y=a;if(y[0]==0){t:if(!r.u){if(r.g)if(r.g.F+3e3<t.F)de(r),ue(r);else break t;We(r),K(18)}}else r.za=y[1],0<r.za-r.T&&37500>y[2]&&r.F&&r.v==0&&!r.C&&(r.C=xt(R(r.Za,r),6e3));if(1>=Gn(r.h)&&r.ca){try{r.ca()}catch{}r.ca=void 0}}else vt(r,11)}else if((t.K||r.g==t)&&de(r),!Z(i))for(y=r.Da.g.parse(i),i=0;i<y.length;i++){let b=y[i];if(r.T=b[0],b=b[1],r.G==2)if(b[0]=="c"){r.K=b[1],r.ia=b[2];const U=b[3];U!=null&&(r.la=U,r.j.info("VER="+r.la));const $=b[4];$!=null&&(r.Aa=$,r.j.info("SVER="+r.Aa));const Dt=b[5];Dt!=null&&typeof Dt=="number"&&0<Dt&&(a=1.5*Dt,r.L=a,r.j.info("backChannelRequestTimeoutMs_="+a)),a=r;const Q=t.g;if(Q){const pe=Q.g?Q.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(pe){var I=a.h;I.g||pe.indexOf("spdy")==-1&&pe.indexOf("quic")==-1&&pe.indexOf("h2")==-1||(I.j=I.l,I.g=new Set,I.h&&(Ge(I,I.h),I.h=null))}if(a.D){const Ye=Q.g?Q.g.getResponseHeader("X-HTTP-Session-Id"):null;Ye&&(a.ya=Ye,O(a.I,a.D,Ye))}}r.G=3,r.l&&r.l.ua(),r.ba&&(r.R=Date.now()-t.F,r.j.info("Handshake RTT: "+r.R+"ms")),a=r;var _=t;if(a.qa=yi(a,a.J?a.ia:null,a.W),_.K){Kn(a.h,_);var P=_,F=a.L;F&&(P.I=F),P.B&&(Ve(P),se(P)),a.g=_}else fi(a);0<r.i.length&&fe(r)}else b[0]!="stop"&&b[0]!="close"||vt(r,7);else r.G==3&&(b[0]=="stop"||b[0]=="close"?b[0]=="stop"?vt(r,7):qe(r):b[0]!="noop"&&r.l&&r.l.ta(b),r.v=0)}}jt(4)}catch{}}var er=class{constructor(t,i){this.g=t,this.map=i}};function Hn(t){this.l=t||10,w.PerformanceNavigationTiming?(t=w.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(w.chrome&&w.chrome.loadTimes&&w.chrome.loadTimes()&&w.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function zn(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Gn(t){return t.h?1:t.g?t.g.size:0}function ze(t,i){return t.h?t.h==i:t.g?t.g.has(i):!1}function Ge(t,i){t.g?t.g.add(i):t.h=i}function Kn(t,i){t.h&&t.h==i?t.h=null:t.g&&t.g.has(i)&&t.g.delete(i)}Hn.prototype.cancel=function(){if(this.i=qn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function qn(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let i=t.i;for(const r of t.g.values())i=i.concat(r.D);return i}return j(t.i)}function nr(t){if(t.V&&typeof t.V=="function")return t.V();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(E(t)){for(var i=[],r=t.length,a=0;a<r;a++)i.push(t[a]);return i}i=[],r=0;for(a in t)i[r++]=t[a];return i}function ir(t){if(t.na&&typeof t.na=="function")return t.na();if(!t.V||typeof t.V!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(E(t)||typeof t=="string"){var i=[];t=t.length;for(var r=0;r<t;r++)i.push(r);return i}i=[],r=0;for(const a in t)i[r++]=a;return i}}}function Wn(t,i){if(t.forEach&&typeof t.forEach=="function")t.forEach(i,void 0);else if(E(t)||typeof t=="string")Array.prototype.forEach.call(t,i,void 0);else for(var r=ir(t),a=nr(t),y=a.length,I=0;I<y;I++)i.call(void 0,a[I],r&&r[I],t)}var Xn=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sr(t,i){if(t){t=t.split("&");for(var r=0;r<t.length;r++){var a=t[r].indexOf("="),y=null;if(0<=a){var I=t[r].substring(0,a);y=t[r].substring(a+1)}else I=t[r];i(I,y?decodeURIComponent(y.replace(/\+/g," ")):"")}}}function yt(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof yt){this.h=t.h,re(this,t.j),this.o=t.o,this.g=t.g,oe(this,t.s),this.l=t.l;var i=t.i,r=new Ht;r.i=i.i,i.g&&(r.g=new Map(i.g),r.h=i.h),Yn(this,r),this.m=t.m}else t&&(i=String(t).match(Xn))?(this.h=!1,re(this,i[1]||"",!0),this.o=$t(i[2]||""),this.g=$t(i[3]||"",!0),oe(this,i[4]),this.l=$t(i[5]||"",!0),Yn(this,i[6]||"",!0),this.m=$t(i[7]||"")):(this.h=!1,this.i=new Ht(null,this.h))}yt.prototype.toString=function(){var t=[],i=this.j;i&&t.push(Vt(i,Jn,!0),":");var r=this.g;return(r||i=="file")&&(t.push("//"),(i=this.o)&&t.push(Vt(i,Jn,!0),"@"),t.push(encodeURIComponent(String(r)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r=this.s,r!=null&&t.push(":",String(r))),(r=this.l)&&(this.g&&r.charAt(0)!="/"&&t.push("/"),t.push(Vt(r,r.charAt(0)=="/"?ar:or,!0))),(r=this.i.toString())&&t.push("?",r),(r=this.m)&&t.push("#",Vt(r,lr)),t.join("")};function it(t){return new yt(t)}function re(t,i,r){t.j=r?$t(i,!0):i,t.j&&(t.j=t.j.replace(/:$/,""))}function oe(t,i){if(i){if(i=Number(i),isNaN(i)||0>i)throw Error("Bad port number "+i);t.s=i}else t.s=null}function Yn(t,i,r){i instanceof Ht?(t.i=i,cr(t.i,t.h)):(r||(i=Vt(i,hr)),t.i=new Ht(i,t.h))}function O(t,i,r){t.i.set(i,r)}function ae(t){return O(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function $t(t,i){return t?i?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Vt(t,i,r){return typeof t=="string"?(t=encodeURI(t).replace(i,rr),r&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function rr(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Jn=/[#\/\?@]/g,or=/[#\?:]/g,ar=/[#\?]/g,hr=/[#\?@]/g,lr=/#/g;function Ht(t,i){this.h=this.g=null,this.i=t||null,this.j=!!i}function ct(t){t.g||(t.g=new Map,t.h=0,t.i&&sr(t.i,function(i,r){t.add(decodeURIComponent(i.replace(/\+/g," ")),r)}))}n=Ht.prototype,n.add=function(t,i){ct(this),this.i=null,t=St(this,t);var r=this.g.get(t);return r||this.g.set(t,r=[]),r.push(i),this.h+=1,this};function Qn(t,i){ct(t),i=St(t,i),t.g.has(i)&&(t.i=null,t.h-=t.g.get(i).length,t.g.delete(i))}function Zn(t,i){return ct(t),i=St(t,i),t.g.has(i)}n.forEach=function(t,i){ct(this),this.g.forEach(function(r,a){r.forEach(function(y){t.call(i,y,a,this)},this)},this)},n.na=function(){ct(this);const t=Array.from(this.g.values()),i=Array.from(this.g.keys()),r=[];for(let a=0;a<i.length;a++){const y=t[a];for(let I=0;I<y.length;I++)r.push(i[a])}return r},n.V=function(t){ct(this);let i=[];if(typeof t=="string")Zn(this,t)&&(i=i.concat(this.g.get(St(this,t))));else{t=Array.from(this.g.values());for(let r=0;r<t.length;r++)i=i.concat(t[r])}return i},n.set=function(t,i){return ct(this),this.i=null,t=St(this,t),Zn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[i]),this.h+=1,this},n.get=function(t,i){return t?(t=this.V(t),0<t.length?String(t[0]):i):i};function ti(t,i,r){Qn(t,i),0<r.length&&(t.i=null,t.g.set(St(t,i),j(r)),t.h+=r.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],i=Array.from(this.g.keys());for(var r=0;r<i.length;r++){var a=i[r];const I=encodeURIComponent(String(a)),_=this.V(a);for(a=0;a<_.length;a++){var y=I;_[a]!==""&&(y+="="+encodeURIComponent(String(_[a]))),t.push(y)}}return this.i=t.join("&")};function St(t,i){return i=String(i),t.j&&(i=i.toLowerCase()),i}function cr(t,i){i&&!t.j&&(ct(t),t.i=null,t.g.forEach(function(r,a){var y=a.toLowerCase();a!=y&&(Qn(this,a),ti(this,y,r))},t)),t.j=i}function ur(t,i){const r=new Bt;if(w.Image){const a=new Image;a.onload=N(ut,r,"TestLoadImage: loaded",!0,i,a),a.onerror=N(ut,r,"TestLoadImage: error",!1,i,a),a.onabort=N(ut,r,"TestLoadImage: abort",!1,i,a),a.ontimeout=N(ut,r,"TestLoadImage: timeout",!1,i,a),w.setTimeout(function(){a.ontimeout&&a.ontimeout()},1e4),a.src=t}else i(!1)}function fr(t,i){const r=new Bt,a=new AbortController,y=setTimeout(()=>{a.abort(),ut(r,"TestPingServer: timeout",!1,i)},1e4);fetch(t,{signal:a.signal}).then(I=>{clearTimeout(y),I.ok?ut(r,"TestPingServer: ok",!0,i):ut(r,"TestPingServer: server error",!1,i)}).catch(()=>{clearTimeout(y),ut(r,"TestPingServer: error",!1,i)})}function ut(t,i,r,a,y){try{y&&(y.onload=null,y.onerror=null,y.onabort=null,y.ontimeout=null),a(r)}catch{}}function dr(){this.g=new qs}function pr(t,i,r){const a=r||"";try{Wn(t,function(y,I){let _=y;A(y)&&(_=Ne(y)),i.push(a+I+"="+encodeURIComponent(_))})}catch(y){throw i.push(a+"type="+encodeURIComponent("_badmap")),y}}function he(t){this.l=t.Ub||null,this.j=t.eb||!1}C(he,Le),he.prototype.g=function(){return new le(this.l,this.j)},he.prototype.i=function(t){return function(){return t}}({});function le(t,i){B.call(this),this.D=t,this.o=i,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(le,B),n=le.prototype,n.open=function(t,i){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=i,this.readyState=1,Gt(this)},n.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const i={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(i.body=t),(this.D||w).fetch(new Request(this.A,i)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,zt(this)),this.readyState=0},n.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Gt(this)),this.g&&(this.readyState=3,Gt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof w.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ei(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))};function ei(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}n.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var i=t.value?t.value:new Uint8Array(0);(i=this.v.decode(i,{stream:!t.done}))&&(this.response=this.responseText+=i)}t.done?zt(this):Gt(this),this.readyState==3&&ei(this)}},n.Ra=function(t){this.g&&(this.response=this.responseText=t,zt(this))},n.Qa=function(t){this.g&&(this.response=t,zt(this))},n.ga=function(){this.g&&zt(this)};function zt(t){t.readyState=4,t.l=null,t.j=null,t.v=null,Gt(t)}n.setRequestHeader=function(t,i){this.u.append(t,i)},n.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],i=this.h.entries();for(var r=i.next();!r.done;)r=r.value,t.push(r[0]+": "+r[1]),r=i.next();return t.join(`\r
`)};function Gt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(le.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});function ni(t){let i="";return tt(t,function(r,a){i+=a,i+=":",i+=r,i+=`\r
`}),i}function Ke(t,i,r){t:{for(a in r){var a=!1;break t}a=!0}a||(r=ni(r),typeof t=="string"?r!=null&&encodeURIComponent(String(r)):O(t,i,r))}function L(t){B.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(L,B);var gr=/^https?$/i,mr=["POST","PUT"];n=L.prototype,n.Ha=function(t){this.J=t},n.ea=function(t,i,r,a){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);i=i?i.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Be.g(),this.v=this.o?Nn(this.o):Nn(Be),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(i,String(t),!0),this.B=!1}catch(I){ii(this,I);return}if(t=r||"",r=new Map(this.headers),a)if(Object.getPrototypeOf(a)===Object.prototype)for(var y in a)r.set(y,a[y]);else if(typeof a.keys=="function"&&typeof a.get=="function")for(const I of a.keys())r.set(I,a.get(I));else throw Error("Unknown input type for opt_headers: "+String(a));a=Array.from(r.keys()).find(I=>I.toLowerCase()=="content-type"),y=w.FormData&&t instanceof w.FormData,!(0<=Array.prototype.indexOf.call(mr,i,void 0))||a||y||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[I,_]of r)this.g.setRequestHeader(I,_);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{oi(this),this.u=!0,this.g.send(t),this.u=!1}catch(I){ii(this,I)}};function ii(t,i){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=i,t.m=5,si(t),ce(t)}function si(t){t.A||(t.A=!0,G(t,"complete"),G(t,"error"))}n.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,G(this,"complete"),G(this,"abort"),ce(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ce(this,!0)),L.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ri(this):this.bb())},n.bb=function(){ri(this)};function ri(t){if(t.h&&typeof m<"u"&&(!t.v[1]||st(t)!=4||t.Z()!=2)){if(t.u&&st(t)==4)Rn(t.Ea,0,t);else if(G(t,"readystatechange"),st(t)==4){t.h=!1;try{const _=t.Z();t:switch(_){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var i=!0;break t;default:i=!1}var r;if(!(r=i)){var a;if(a=_===0){var y=String(t.D).match(Xn)[1]||null;!y&&w.self&&w.self.location&&(y=w.self.location.protocol.slice(0,-1)),a=!gr.test(y?y.toLowerCase():"")}r=a}if(r)G(t,"complete"),G(t,"success");else{t.m=6;try{var I=2<st(t)?t.g.statusText:""}catch{I=""}t.l=I+" ["+t.Z()+"]",si(t)}}finally{ce(t)}}}}function ce(t,i){if(t.g){oi(t);const r=t.g,a=t.v[0]?()=>{}:null;t.g=null,t.v=null,i||G(t,"ready");try{r.onreadystatechange=a}catch{}}}function oi(t){t.I&&(w.clearTimeout(t.I),t.I=null)}n.isActive=function(){return!!this.g};function st(t){return t.g?t.g.readyState:0}n.Z=function(){try{return 2<st(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(t){if(this.g){var i=this.g.responseText;return t&&i.indexOf(t)==0&&(i=i.substring(t.length)),Ks(i)}};function ai(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function yr(t){const i={};t=(t.g&&2<=st(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let a=0;a<t.length;a++){if(Z(t[a]))continue;var r=p(t[a]);const y=r[0];if(r=r[1],typeof r!="string")continue;r=r.trim();const I=i[y]||[];i[y]=I,I.push(r)}g(i,function(a){return a.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Kt(t,i,r){return r&&r.internalChannelParams&&r.internalChannelParams[t]||i}function hi(t){this.Aa=0,this.i=[],this.j=new Bt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Kt("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Kt("baseRetryDelayMs",5e3,t),this.cb=Kt("retryDelaySeedMs",1e4,t),this.Wa=Kt("forwardChannelMaxRetries",2,t),this.wa=Kt("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new Hn(t&&t.concurrentRequestLimit),this.Da=new dr,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=hi.prototype,n.la=8,n.G=1,n.connect=function(t,i,r,a){K(0),this.W=t,this.H=i||{},r&&a!==void 0&&(this.H.OSID=r,this.H.OAID=a),this.F=this.X,this.I=yi(this,null,this.W),fe(this)};function qe(t){if(li(t),t.G==3){var i=t.U++,r=it(t.I);if(O(r,"SID",t.K),O(r,"RID",i),O(r,"TYPE","terminate"),qt(t,r),i=new lt(t,t.j,i),i.L=2,i.v=ae(it(r)),r=!1,w.navigator&&w.navigator.sendBeacon)try{r=w.navigator.sendBeacon(i.v.toString(),"")}catch{}!r&&w.Image&&(new Image().src=i.v,r=!0),r||(i.g=vi(i.j,null),i.g.ea(i.v)),i.F=Date.now(),se(i)}mi(t)}function ue(t){t.g&&(Xe(t),t.g.cancel(),t.g=null)}function li(t){ue(t),t.u&&(w.clearTimeout(t.u),t.u=null),de(t),t.h.cancel(),t.s&&(typeof t.s=="number"&&w.clearTimeout(t.s),t.s=null)}function fe(t){if(!zn(t.h)&&!t.s){t.s=!0;var i=t.Ga;kt||Tn(),Nt||(kt(),Nt=!0),be.add(i,t),t.B=0}}function vr(t,i){return Gn(t.h)>=t.h.j-(t.s?1:0)?!1:t.s?(t.i=i.D.concat(t.i),!0):t.G==1||t.G==2||t.B>=(t.Va?0:t.Wa)?!1:(t.s=xt(R(t.Ga,t,i),gi(t,t.B)),t.B++,!0)}n.Ga=function(t){if(this.s)if(this.s=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const y=new lt(this,this.j,t);let I=this.o;if(this.S&&(I?(I=l(I),d(I,this.S)):I=this.S),this.m!==null||this.O||(y.H=I,I=null),this.P)t:{for(var i=0,r=0;r<this.i.length;r++){e:{var a=this.i[r];if("__data__"in a.map&&(a=a.map.__data__,typeof a=="string")){a=a.length;break e}a=void 0}if(a===void 0)break;if(i+=a,4096<i){i=r;break t}if(i===4096||r===this.i.length-1){i=r+1;break t}}i=1e3}else i=1e3;i=ui(this,y,i),r=it(this.I),O(r,"RID",t),O(r,"CVER",22),this.D&&O(r,"X-HTTP-Session-Id",this.D),qt(this,r),I&&(this.O?i="headers="+encodeURIComponent(String(ni(I)))+"&"+i:this.m&&Ke(r,this.m,I)),Ge(this.h,y),this.Ua&&O(r,"TYPE","init"),this.P?(O(r,"$req",i),O(r,"SID","null"),y.T=!0,$e(y,r,null)):$e(y,r,i),this.G=2}}else this.G==3&&(t?ci(this,t):this.i.length==0||zn(this.h)||ci(this))};function ci(t,i){var r;i?r=i.l:r=t.U++;const a=it(t.I);O(a,"SID",t.K),O(a,"RID",r),O(a,"AID",t.T),qt(t,a),t.m&&t.o&&Ke(a,t.m,t.o),r=new lt(t,t.j,r,t.B+1),t.m===null&&(r.H=t.o),i&&(t.i=i.D.concat(t.i)),i=ui(t,r,1e3),r.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),Ge(t.h,r),$e(r,a,i)}function qt(t,i){t.H&&tt(t.H,function(r,a){O(i,a,r)}),t.l&&Wn({},function(r,a){O(i,a,r)})}function ui(t,i,r){r=Math.min(t.i.length,r);var a=t.l?R(t.l.Na,t.l,t):null;t:{var y=t.i;let I=-1;for(;;){const _=["count="+r];I==-1?0<r?(I=y[0].g,_.push("ofs="+I)):I=0:_.push("ofs="+I);let P=!0;for(let F=0;F<r;F++){let b=y[F].g;const U=y[F].map;if(b-=I,0>b)I=Math.max(0,y[F].g-100),P=!1;else try{pr(U,_,"req"+b+"_")}catch{a&&a(U)}}if(P){a=_.join("&");break t}}}return t=t.i.splice(0,r),i.D=t,a}function fi(t){if(!t.g&&!t.u){t.Y=1;var i=t.Fa;kt||Tn(),Nt||(kt(),Nt=!0),be.add(i,t),t.v=0}}function We(t){return t.g||t.u||3<=t.v?!1:(t.Y++,t.u=xt(R(t.Fa,t),gi(t,t.v)),t.v++,!0)}n.Fa=function(){if(this.u=null,di(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=xt(R(this.ab,this),t)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,K(10),ue(this),di(this))};function Xe(t){t.A!=null&&(w.clearTimeout(t.A),t.A=null)}function di(t){t.g=new lt(t,t.j,"rpc",t.Y),t.m===null&&(t.g.H=t.o),t.g.O=0;var i=it(t.qa);O(i,"RID","rpc"),O(i,"SID",t.K),O(i,"AID",t.T),O(i,"CI",t.F?"0":"1"),!t.F&&t.ja&&O(i,"TO",t.ja),O(i,"TYPE","xmlhttp"),qt(t,i),t.m&&t.o&&Ke(i,t.m,t.o),t.L&&(t.g.I=t.L);var r=t.g;t=t.ia,r.L=1,r.v=ae(it(i)),r.m=null,r.P=!0,Un(r,t)}n.Za=function(){this.C!=null&&(this.C=null,ue(this),We(this),K(19))};function de(t){t.C!=null&&(w.clearTimeout(t.C),t.C=null)}function pi(t,i){var r=null;if(t.g==i){de(t),Xe(t),t.g=null;var a=2}else if(ze(t.h,i))r=i.D,Kn(t.h,i),a=1;else return;if(t.G!=0){if(i.o)if(a==1){r=i.m?i.m.length:0,i=Date.now()-i.F;var y=t.B;a=je(),G(a,new jn(a,r)),fe(t)}else fi(t);else if(y=i.s,y==3||y==0&&0<i.X||!(a==1&&vr(t,i)||a==2&&We(t)))switch(r&&0<r.length&&(i=t.h,i.i=i.i.concat(r)),y){case 1:vt(t,5);break;case 4:vt(t,10);break;case 3:vt(t,6);break;default:vt(t,2)}}}function gi(t,i){let r=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(r*=2),r*i}function vt(t,i){if(t.j.info("Error code "+i),i==2){var r=R(t.fb,t),a=t.Xa;const y=!a;a=new yt(a||"//www.google.com/images/cleardot.gif"),w.location&&w.location.protocol=="http"||re(a,"https"),ae(a),y?ur(a.toString(),r):fr(a.toString(),r)}else K(2);t.G=0,t.l&&t.l.sa(i),mi(t),li(t)}n.fb=function(t){t?(this.j.info("Successfully pinged google.com"),K(2)):(this.j.info("Failed to ping google.com"),K(1))};function mi(t){if(t.G=0,t.ka=[],t.l){const i=qn(t.h);(i.length!=0||t.i.length!=0)&&(M(t.ka,i),M(t.ka,t.i),t.h.i.length=0,j(t.i),t.i.length=0),t.l.ra()}}function yi(t,i,r){var a=r instanceof yt?it(r):new yt(r);if(a.g!="")i&&(a.g=i+"."+a.g),oe(a,a.s);else{var y=w.location;a=y.protocol,i=i?i+"."+y.hostname:y.hostname,y=+y.port;var I=new yt(null);a&&re(I,a),i&&(I.g=i),y&&oe(I,y),r&&(I.l=r),a=I}return r=t.D,i=t.ya,r&&i&&O(a,r,i),O(a,"VER",t.la),qt(t,a),a}function vi(t,i,r){if(i&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return i=t.Ca&&!t.pa?new L(new he({eb:r})):new L(t.pa),i.Ha(t.J),i}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function wi(){}n=wi.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function J(t,i){B.call(this),this.g=new hi(i),this.l=t,this.h=i&&i.messageUrlParams||null,t=i&&i.messageHeaders||null,i&&i.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=i&&i.initMessageHeaders||null,i&&i.messageContentType&&(t?t["X-WebChannel-Content-Type"]=i.messageContentType:t={"X-WebChannel-Content-Type":i.messageContentType}),i&&i.va&&(t?t["X-WebChannel-Client-Profile"]=i.va:t={"X-WebChannel-Client-Profile":i.va}),this.g.S=t,(t=i&&i.Sb)&&!Z(t)&&(this.g.m=t),this.v=i&&i.supportsCrossDomainXhr||!1,this.u=i&&i.sendRawJson||!1,(i=i&&i.httpSessionIdParam)&&!Z(i)&&(this.g.D=i,t=this.h,t!==null&&i in t&&(t=this.h,i in t&&delete t[i])),this.j=new Ct(this)}C(J,B),J.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},J.prototype.close=function(){qe(this.g)},J.prototype.o=function(t){var i=this.g;if(typeof t=="string"){var r={};r.__data__=t,t=r}else this.u&&(r={},r.__data__=Ne(t),t=r);i.i.push(new er(i.Ya++,t)),i.G==3&&fe(i)},J.prototype.N=function(){this.g.l=null,delete this.j,qe(this.g),delete this.g,J.aa.N.call(this)};function Ii(t){Me.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var i=t.__sm__;if(i){t:{for(const r in i){t=r;break t}t=void 0}(this.i=t)&&(t=this.i,i=i!==null&&t in i?i[t]:void 0),this.data=i}else this.data=t}C(Ii,Me);function Ei(){Fe.call(this),this.status=1}C(Ei,Fe);function Ct(t){this.g=t}C(Ct,wi),Ct.prototype.ua=function(){G(this.g,"a")},Ct.prototype.ta=function(t){G(this.g,new Ii(t))},Ct.prototype.sa=function(t){G(this.g,new Ei)},Ct.prototype.ra=function(){G(this.g,"b")},J.prototype.send=J.prototype.o,J.prototype.open=J.prototype.m,J.prototype.close=J.prototype.close,xe.NO_ERROR=0,xe.TIMEOUT=8,xe.HTTP_ERROR=6,Zs.COMPLETE="complete",Ws.EventType=Ft,Ft.OPEN="a",Ft.CLOSE="b",Ft.ERROR="c",Ft.MESSAGE="d",B.prototype.listen=B.prototype.K,L.prototype.listenOnce=L.prototype.L,L.prototype.getLastError=L.prototype.Ka,L.prototype.getLastErrorCode=L.prototype.Ba,L.prototype.getStatus=L.prototype.Z,L.prototype.getResponseJson=L.prototype.Oa,L.prototype.getResponseText=L.prototype.oa,L.prototype.send=L.prototype.ea,L.prototype.setWithCredentials=L.prototype.Ha}).apply(typeof ge<"u"?ge:typeof self<"u"?self:typeof window<"u"?window:{});const Vi="@firebase/firestore";/**
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
 */class V{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}V.UNAUTHENTICATED=new V(null),V.GOOGLE_CREDENTIALS=new V("google-credentials-uid"),V.FIRST_PARTY=new V("first-party-uid"),V.MOCK_USER=new V("mock-user");/**
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
 */let Jt="10.13.1";/**
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
 */const Pt=new dn("@firebase/firestore");function W(n,...e){if(Pt.logLevel<=D.DEBUG){const s=e.map(En);Pt.debug(`Firestore (${Jt}): ${n}`,...s)}}function In(n,...e){if(Pt.logLevel<=D.ERROR){const s=e.map(En);Pt.error(`Firestore (${Jt}): ${n}`,...s)}}function ph(n,...e){if(Pt.logLevel<=D.WARN){const s=e.map(En);Pt.warn(`Firestore (${Jt}): ${n}`,...s)}}function En(n){if(typeof n=="string")return n;try{/**
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
*/return function(s){return JSON.stringify(s)}(n)}catch{return n}}/**
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
 */function _n(n="Unexpected state"){const e=`FIRESTORE (${Jt}) INTERNAL ASSERTION FAILED: `+n;throw In(e),new Error(e)}function fn(n,e){n||_n()}/**
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
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends gt{constructor(e,s){super(e,s),this.code=e,this.message=s,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Rt{constructor(){this.promise=new Promise((e,s)=>{this.resolve=e,this.reject=s})}}/**
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
 */class Os{constructor(e,s){this.user=s,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class gh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,s){e.enqueueRetryable(()=>s(V.UNAUTHENTICATED))}shutdown(){}}class mh{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,s){this.changeListener=s,e.enqueueRetryable(()=>s(this.token.user))}shutdown(){this.changeListener=null}}class yh{constructor(e){this.t=e,this.currentUser=V.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,s){let o=this.i;const h=E=>this.i!==o?(o=this.i,s(E)):Promise.resolve();let c=new Rt;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new Rt,e.enqueueRetryable(()=>h(this.currentUser))};const m=()=>{const E=c;e.enqueueRetryable(async()=>{await E.promise,await h(this.currentUser)})},w=E=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=E,this.auth.addAuthTokenListener(this.o),m()};this.t.onInit(E=>w(E)),setTimeout(()=>{if(!this.auth){const E=this.t.getImmediate({optional:!0});E?w(E):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new Rt)}},0),m()}getToken(){const e=this.i,s=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(s).then(o=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):o?(fn(typeof o.accessToken=="string"),new Os(o.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return fn(e===null||typeof e=="string"),new V(e)}}class vh{constructor(e,s,o){this.l=e,this.h=s,this.P=o,this.type="FirstParty",this.user=V.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class wh{constructor(e,s,o){this.l=e,this.h=s,this.P=o}getToken(){return Promise.resolve(new vh(this.l,this.h,this.P))}start(e,s){e.enqueueRetryable(()=>s(V.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ih{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Eh{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,s){const o=c=>{c.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const m=c.token!==this.R;return this.R=c.token,W("FirebaseAppCheckTokenProvider",`Received ${m?"new":"existing"} token.`),m?s(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable(()=>o(c))};const h=c=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.appCheck.addTokenListener(this.o)};this.A.onInit(c=>h(c)),setTimeout(()=>{if(!this.appCheck){const c=this.A.getImmediate({optional:!0});c?h(c):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(s=>s?(fn(typeof s.token=="string"),this.R=s.token,new Ih(s.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function _h(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),s=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(s);else for(let o=0;o<n;o++)s[o]=Math.floor(256*Math.random());return s}/**
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
 */class Ah{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=Math.floor(256/e.length)*e.length;let o="";for(;o.length<20;){const h=_h(40);for(let c=0;c<h.length;++c)o.length<20&&h[c]<s&&(o+=e.charAt(h[c]%e.length))}return o}}function ks(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Th{constructor(e,s,o,h,c,m,w,E,A){this.databaseId=e,this.appId=s,this.persistenceKey=o,this.host=h,this.ssl=c,this.forceLongPolling=m,this.autoDetectLongPolling=w,this.longPollingOptions=E,this.useFetchStreams=A}}class Ee{constructor(e,s){this.projectId=e,this.database=s||"(default)"}static empty(){return new Ee("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ee&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */var Hi,T;(T=Hi||(Hi={}))[T.OK=0]="OK",T[T.CANCELLED=1]="CANCELLED",T[T.UNKNOWN=2]="UNKNOWN",T[T.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",T[T.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",T[T.NOT_FOUND=5]="NOT_FOUND",T[T.ALREADY_EXISTS=6]="ALREADY_EXISTS",T[T.PERMISSION_DENIED=7]="PERMISSION_DENIED",T[T.UNAUTHENTICATED=16]="UNAUTHENTICATED",T[T.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",T[T.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",T[T.ABORTED=10]="ABORTED",T[T.OUT_OF_RANGE=11]="OUT_OF_RANGE",T[T.UNIMPLEMENTED=12]="UNIMPLEMENTED",T[T.INTERNAL=13]="INTERNAL",T[T.UNAVAILABLE=14]="UNAVAILABLE",T[T.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Ps([4294967295,4294967295],0);function rn(){return typeof document<"u"?document:null}/**
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
 */class bh{constructor(e,s,o=1e3,h=1.5,c=6e4){this.ui=e,this.timerId=s,this.ko=o,this.qo=h,this.Qo=c,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const s=Math.floor(this.Ko+this.zo()),o=Math.max(0,Date.now()-this.Uo),h=Math.max(0,s-o);h>0&&W("ExponentialBackoff",`Backing off for ${h} ms (base delay: ${this.Ko} ms, delay with jitter: ${s} ms, last attempt: ${o} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,h,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class An{constructor(e,s,o,h,c){this.asyncQueue=e,this.timerId=s,this.targetTimeMs=o,this.op=h,this.removalCallback=c,this.deferred=new Rt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(m=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,s,o,h,c){const m=Date.now()+o,w=new An(e,s,m,h,c);return w.start(o),w}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Sh(n,e){if(In("AsyncQueue",`${e}: ${n}`),ks(n))return new z(H.UNAVAILABLE,`${e}: ${n}`);throw n}var zi,Gi;(Gi=zi||(zi={})).ea="default",Gi.Cache="cache";/**
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
 */class Ch{constructor(e,s,o,h){this.authCredentials=e,this.appCheckCredentials=s,this.asyncQueue=o,this.databaseInfo=h,this.user=V.UNAUTHENTICATED,this.clientId=Ah.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(o,async c=>{W("FirestoreClient","Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(o,c=>(W("FirestoreClient","Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new z(H.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Rt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(s){const o=Sh(s,"Failed to shutdown persistence");e.reject(o)}}),e.promise}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function Ns(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Ki=new Map;function Dh(n,e,s,o){if(e===!0&&o===!0)throw new z(H.INVALID_ARGUMENT,`${n} and ${s} cannot be used together.`)}function Rh(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(o){return o.constructor?o.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":_n()}function Ph(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new z(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const s=Rh(n);throw new z(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${s}`)}}return n}/**
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
 */class qi{constructor(e){var s,o;if(e.host===void 0){if(e.ssl!==void 0)throw new z(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(s=e.ssl)===null||s===void 0||s;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Dh("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ns((o=e.experimentalLongPollingOptions)!==null&&o!==void 0?o:{}),function(c){if(c.timeoutSeconds!==void 0){if(isNaN(c.timeoutSeconds))throw new z(H.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (must not be NaN)`);if(c.timeoutSeconds<5)throw new z(H.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (minimum allowed value is 5)`);if(c.timeoutSeconds>30)throw new z(H.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(o,h){return o.timeoutSeconds===h.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ls{constructor(e,s,o,h){this._authCredentials=e,this._appCheckCredentials=s,this._databaseId=o,this._app=h,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qi({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new z(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new z(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qi(e),e.credentials!==void 0&&(this._authCredentials=function(o){if(!o)return new gh;switch(o.type){case"firstParty":return new wh(o.sessionIndex||"0",o.iamToken||null,o.authTokenFactory||null);case"provider":return o.client;default:throw new z(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(s){const o=Ki.get(s);o&&(W("ComponentProvider","Removing Datastore"),Ki.delete(s),o.terminate())}(this),Promise.resolve()}}function Oh(n,e,s,o={}){var h;const c=(n=Ph(n,Ls))._getSettings(),m=`${e}:${s}`;if(c.host!=="firestore.googleapis.com"&&c.host!==m&&ph("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},c),{host:m,ssl:!1})),o.mockUserToken){let w,E;if(typeof o.mockUserToken=="string")w=o.mockUserToken,E=V.MOCK_USER;else{w=Pr(o.mockUserToken,(h=n._app)===null||h===void 0?void 0:h.options.projectId);const A=o.mockUserToken.sub||o.mockUserToken.user_id;if(!A)throw new z(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new V(A)}n._authCredentials=new mh(new Os(w,E))}}/**
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
 */class kh{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new bh(this,"async_queue_retry"),this.Eu=()=>{const s=rn();s&&W("AsyncQueue","Visibility state changed to "+s.visibilityState),this.t_.jo()};const e=rn();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const s=rn();s&&typeof s.removeEventListener=="function"&&s.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise(()=>{});const s=new Rt;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(e().then(s.resolve,s.reject),s.promise)).then(()=>s.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.uu.push(e),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!ks(e))throw e;W("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(e){const s=this.au.then(()=>(this.Pu=!0,e().catch(o=>{this.hu=o,this.Pu=!1;const h=function(m){let w=m.message||"";return m.stack&&(w=m.stack.includes(m.message)?m.stack:m.message+`
`+m.stack),w}(o);throw In("INTERNAL UNHANDLED ERROR: ",h),o}).then(o=>(this.Pu=!1,o))));return this.au=s,s}enqueueAfterDelay(e,s,o){this.du(),this.Tu.indexOf(e)>-1&&(s=0);const h=An.createAndSchedule(this,e,s,o,c=>this.Vu(c));return this.lu.push(h),h}du(){this.hu&&_n()}verifyOperationInProgress(){}async mu(){let e;do e=this.au,await e;while(e!==this.au)}fu(e){for(const s of this.lu)if(s.timerId===e)return!0;return!1}gu(e){return this.mu().then(()=>{this.lu.sort((s,o)=>s.targetTimeMs-o.targetTimeMs);for(const s of this.lu)if(s.skipDelay(),e!=="all"&&s.timerId===e)break;return this.mu()})}pu(e){this.Tu.push(e)}Vu(e){const s=this.lu.indexOf(e);this.lu.splice(s,1)}}class Nh extends Ls{constructor(e,s,o,h){super(e,s,o,h),this.type="firestore",this._queue=function(){return new kh}(),this._persistenceKey=(h==null?void 0:h.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Mh(this),this._firestoreClient.terminate()}}function Lh(n,e){const s=typeof n=="object"?n:rs(),o=typeof n=="string"?n:"(default)",h=Yt(s,"firestore").getImmediate({identifier:o});if(!h._initialized){const c=Dr("firestore");c&&Oh(h,...c)}return h}function Mh(n){var e,s,o;const h=n._freezeSettings(),c=function(w,E,A,S){return new Th(w,E,A,S.host,S.ssl,S.experimentalForceLongPolling,S.experimentalAutoDetectLongPolling,Ns(S.experimentalLongPollingOptions),S.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,h);n._firestoreClient=new Ch(n._authCredentials,n._appCheckCredentials,n._queue,c),!((s=h.localCache)===null||s===void 0)&&s._offlineComponentProvider&&(!((o=h.localCache)===null||o===void 0)&&o._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:h.localCache.kind,_offline:h.localCache._offlineComponentProvider,_online:h.localCache._onlineComponentProvider})}(function(e,s=!0){(function(h){Jt=h})(jo),pt(new rt("firestore",(o,{instanceIdentifier:h,options:c})=>{const m=o.getProvider("app").getImmediate(),w=new Nh(new yh(o.getProvider("auth-internal")),new Eh(o.getProvider("app-check-internal")),function(A,S){if(!Object.prototype.hasOwnProperty.apply(A.options,["projectId"]))throw new z(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ee(A.options.projectId,S)}(m,h),m);return c=Object.assign({useFetchStreams:s},c),w._setSettings(c),w},"PUBLIC").setMultipleInstances(!0)),et(Vi,"4.7.1",e),et(Vi,"4.7.1","esm2017")})();const Fh={apiKey:"AIzaSyBwTbTG_auMrWy_e4aVUFMHs3794zZ4AXE",authDomain:"hgregusersdb.firebaseapp.com",projectId:"hgregusersdb",storageBucket:"hgregusersdb.appspot.com",messagingSenderId:"996459139126",appId:"1:996459139126:web:ca1d5184f0f5db61618897",measurementId:"G-LMF2MVSGER"},Ms=ss(Fh);Lh(Ms);ch(Ms);console.log("The script is executing");Array.from(document.getElementsByClassName("serviceBtns")).forEach(n=>{n.addEventListener("click",()=>{setTimeout(()=>{n.getAttribute("service-name")},250)})});
