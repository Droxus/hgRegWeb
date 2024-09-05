(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();var Ps={};/**
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
 */const Ao=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},zl=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],l=n[e++],c=n[e++],d=((s&7)<<18|(o&63)<<12|(l&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(d>>10)),t[r++]=String.fromCharCode(56320+(d&1023))}else{const o=n[e++],l=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|l&63)}}return t.join("")},wo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],l=s+1<n.length,c=l?n[s+1]:0,d=s+2<n.length,f=d?n[s+2]:0,I=o>>2,w=(o&3)<<4|c>>4;let S=(c&15)<<2|f>>6,C=f&63;d||(C=64,l||(S=64)),r.push(e[I],e[w],e[S],e[C])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Ao(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):zl(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],c=s<n.length?e[n.charAt(s)]:0;++s;const f=s<n.length?e[n.charAt(s)]:64;++s;const w=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||c==null||f==null||w==null)throw new Gl;const S=o<<2|c>>4;if(r.push(S),f!==64){const C=c<<4&240|f>>2;if(r.push(C),w!==64){const N=f<<6&192|w;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Gl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Kl=function(n){const t=Ao(n);return wo.encodeByteArray(t,!0)},On=function(n){return Kl(n).replace(/\./g,"")},Wl=function(n){try{return wo.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Ql(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Xl=()=>Ql().__FIREBASE_DEFAULTS__,Yl=()=>{if(typeof process>"u"||typeof Ps>"u")return;const n=Ps.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Jl=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Wl(n[1]);return t&&JSON.parse(t)},ri=()=>{try{return Xl()||Yl()||Jl()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Zl=n=>{var t,e;return(e=(t=ri())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},tu=n=>{const t=Zl(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},bo=()=>{var n;return(n=ri())===null||n===void 0?void 0:n.config};/**
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
 */class eu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function nu(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[On(JSON.stringify(e)),On(JSON.stringify(l)),""].join(".")}/**
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
 */function ru(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function iu(){var n;const t=(n=ri())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function su(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ou(){return!iu()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ro(){try{return typeof indexedDB=="object"}catch{return!1}}function So(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}function au(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const lu="FirebaseError";class Gt extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=lu,Object.setPrototypeOf(this,Gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xn.prototype.create)}}class Xn{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],l=o?uu(o,r):"Error",c=`${this.serviceName}: ${l} (${s}).`;return new Gt(s,c,r)}}function uu(n,t){return n.replace(cu,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const cu=/\{\$([^}]+)}/g;function Mn(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],l=t[s];if(Cs(o)&&Cs(l)){if(!Mn(o,l))return!1}else if(o!==l)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function Cs(n){return n!==null&&typeof n=="object"}/**
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
 */const hu=1e3,du=2,fu=4*60*60*1e3,pu=.5;function Ns(n,t=hu,e=du){const r=t*Math.pow(e,n),s=Math.round(pu*r*(Math.random()-.5)*2);return Math.min(fu,r+s)}/**
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
 */function ie(n){return n&&n._delegate?n._delegate:n}class xt{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Zt="[DEFAULT]";/**
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
 */class mu{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new eu;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(yu(t))try{this.getOrInitializeService({instanceIdentifier:Zt})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=Zt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Zt){return this.instances.has(t)}getOptions(t=Zt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,l]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&l.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const l=this.instances.get(s);return l&&t(l,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:gu(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Zt){return this.component?this.component.multipleInstances?t:Zt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gu(n){return n===Zt?void 0:n}function yu(n){return n.instantiationMode==="EAGER"}/**
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
 */class _u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new mu(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var F;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(F||(F={}));const vu={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},Eu=F.INFO,Tu={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},Iu=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=Tu[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ii{constructor(t){this.name=t,this._logLevel=Eu,this._logHandler=Iu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in F))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?vu[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...t),this._logHandler(this,F.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...t),this._logHandler(this,F.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,F.INFO,...t),this._logHandler(this,F.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,F.WARN,...t),this._logHandler(this,F.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...t),this._logHandler(this,F.ERROR,...t)}}const Au=(n,t)=>t.some(e=>n instanceof e);let Vs,Ds;function wu(){return Vs||(Vs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bu(){return Ds||(Ds=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Po=new WeakMap,qr=new WeakMap,Co=new WeakMap,xr=new WeakMap,si=new WeakMap;function Ru(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",l)},o=()=>{e(Bt(n.result)),s()},l=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",l)});return t.then(e=>{e instanceof IDBCursor&&Po.set(e,n)}).catch(()=>{}),si.set(t,n),t}function Su(n){if(qr.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",l),n.removeEventListener("abort",l)},o=()=>{e(),s()},l=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",l),n.addEventListener("abort",l)});qr.set(n,t)}let Hr={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return qr.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Co.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Bt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Pu(n){Hr=n(Hr)}function Cu(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(kr(this),t,...e);return Co.set(r,t.sort?t.sort():[t]),Bt(r)}:bu().includes(n)?function(...t){return n.apply(kr(this),t),Bt(Po.get(this))}:function(...t){return Bt(n.apply(kr(this),t))}}function Nu(n){return typeof n=="function"?Cu(n):(n instanceof IDBTransaction&&Su(n),Au(n,wu())?new Proxy(n,Hr):n)}function Bt(n){if(n instanceof IDBRequest)return Ru(n);if(xr.has(n))return xr.get(n);const t=Nu(n);return t!==n&&(xr.set(n,t),si.set(t,n)),t}const kr=n=>si.get(n);function No(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const l=indexedDB.open(n,t),c=Bt(l);return r&&l.addEventListener("upgradeneeded",d=>{r(Bt(l.result),d.oldVersion,d.newVersion,Bt(l.transaction),d)}),e&&l.addEventListener("blocked",d=>e(d.oldVersion,d.newVersion,d)),c.then(d=>{o&&d.addEventListener("close",()=>o()),s&&d.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const Vu=["get","getKey","getAll","getAllKeys","count"],Du=["put","add","delete","clear"],Or=new Map;function xs(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Or.get(t))return Or.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=Du.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Vu.includes(e)))return;const o=async function(l,...c){const d=this.transaction(l,s?"readwrite":"readonly");let f=d.store;return r&&(f=f.index(c.shift())),(await Promise.all([f[e](...c),s&&d.done]))[0]};return Or.set(t,o),o}Pu(n=>({...n,get:(t,e,r)=>xs(t,e)||n.get(t,e,r),has:(t,e)=>!!xs(t,e)||n.has(t,e)}));/**
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
 */class xu{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(ku(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function ku(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const zr="@firebase/app",ks="0.10.10";/**
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
 */const kt=new ii("@firebase/app"),Ou="@firebase/app-compat",Mu="@firebase/analytics-compat",Lu="@firebase/analytics",Fu="@firebase/app-check-compat",Bu="@firebase/app-check",Uu="@firebase/auth",$u="@firebase/auth-compat",ju="@firebase/database",qu="@firebase/database-compat",Hu="@firebase/functions",zu="@firebase/functions-compat",Gu="@firebase/installations",Ku="@firebase/installations-compat",Wu="@firebase/messaging",Qu="@firebase/messaging-compat",Xu="@firebase/performance",Yu="@firebase/performance-compat",Ju="@firebase/remote-config",Zu="@firebase/remote-config-compat",tc="@firebase/storage",ec="@firebase/storage-compat",nc="@firebase/firestore",rc="@firebase/vertexai-preview",ic="@firebase/firestore-compat",sc="firebase",oc="10.13.1";/**
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
 */const Gr="[DEFAULT]",ac={[zr]:"fire-core",[Ou]:"fire-core-compat",[Lu]:"fire-analytics",[Mu]:"fire-analytics-compat",[Bu]:"fire-app-check",[Fu]:"fire-app-check-compat",[Uu]:"fire-auth",[$u]:"fire-auth-compat",[ju]:"fire-rtdb",[qu]:"fire-rtdb-compat",[Hu]:"fire-fn",[zu]:"fire-fn-compat",[Gu]:"fire-iid",[Ku]:"fire-iid-compat",[Wu]:"fire-fcm",[Qu]:"fire-fcm-compat",[Xu]:"fire-perf",[Yu]:"fire-perf-compat",[Ju]:"fire-rc",[Zu]:"fire-rc-compat",[tc]:"fire-gcs",[ec]:"fire-gcs-compat",[nc]:"fire-fst",[ic]:"fire-fst-compat",[rc]:"fire-vertex","fire-js":"fire-js",[sc]:"fire-js-all"};/**
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
 */const Ln=new Map,lc=new Map,Kr=new Map;function Os(n,t){try{n.container.addComponent(t)}catch(e){kt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function jt(n){const t=n.name;if(Kr.has(t))return kt.debug(`There were multiple attempts to register component ${t}.`),!1;Kr.set(t,n);for(const e of Ln.values())Os(e,n);for(const e of lc.values())Os(e,n);return!0}function rn(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
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
 */const uc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ut=new Xn("app","Firebase",uc);/**
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
 */class cc{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ut.create("app-deleted",{appName:this._name})}}/**
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
 */const hc=oc;function Vo(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Gr,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Ut.create("bad-app-name",{appName:String(s)});if(e||(e=bo()),!e)throw Ut.create("no-options");const o=Ln.get(s);if(o){if(Mn(e,o.options)&&Mn(r,o.config))return o;throw Ut.create("duplicate-app",{appName:s})}const l=new _u(s);for(const d of Kr.values())l.addComponent(d);const c=new cc(e,r,l);return Ln.set(s,c),c}function Do(n=Gr){const t=Ln.get(n);if(!t&&n===Gr&&bo())return Vo();if(!t)throw Ut.create("no-app",{appName:n});return t}function bt(n,t,e){var r;let s=(r=ac[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),l=t.match(/\s|\//);if(o||l){const c=[`Unable to register library "${s}" with version "${t}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&l&&c.push("and"),l&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),kt.warn(c.join(" "));return}jt(new xt(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const dc="firebase-heartbeat-database",fc=1,Xe="firebase-heartbeat-store";let Mr=null;function xo(){return Mr||(Mr=No(dc,fc,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Xe)}catch(e){console.warn(e)}}}}).catch(n=>{throw Ut.create("idb-open",{originalErrorMessage:n.message})})),Mr}async function pc(n){try{const e=(await xo()).transaction(Xe),r=await e.objectStore(Xe).get(ko(n));return await e.done,r}catch(t){if(t instanceof Gt)kt.warn(t.message);else{const e=Ut.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});kt.warn(e.message)}}}async function Ms(n,t){try{const r=(await xo()).transaction(Xe,"readwrite");await r.objectStore(Xe).put(t,ko(n)),await r.done}catch(e){if(e instanceof Gt)kt.warn(e.message);else{const r=Ut.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});kt.warn(r.message)}}}function ko(n){return`${n.name}!${n.options.appId}`}/**
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
 */const mc=1024,gc=30*24*60*60*1e3;class yc{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new vc(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Ls();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const c=new Date(l.date).valueOf();return Date.now()-c<=gc}),this._storage.overwrite(this._heartbeatsCache))}catch(r){kt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ls(),{heartbeatsToSend:r,unsentEntries:s}=_c(this._heartbeatsCache.heartbeats),o=On(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return kt.warn(e),""}}}function Ls(){return new Date().toISOString().substring(0,10)}function _c(n,t=mc){const e=[];let r=n.slice();for(const s of n){const o=e.find(l=>l.agent===s.agent);if(o){if(o.dates.push(s.date),Fs(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Fs(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class vc{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ro()?So().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await pc(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ms(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ms(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Fs(n){return On(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Ec(n){jt(new xt("platform-logger",t=>new xu(t),"PRIVATE")),jt(new xt("heartbeat",t=>new yc(t),"PRIVATE")),bt(zr,ks,n),bt(zr,ks,"esm2017"),bt("fire-js","")}Ec("");var Tc="firebase",Ic="10.13.1";/**
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
 */bt(Tc,Ic,"app");const Oo="@firebase/installations",oi="0.6.8";/**
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
 */const Mo=1e4,Lo=`w:${oi}`,Fo="FIS_v2",Ac="https://firebaseinstallations.googleapis.com/v1",wc=60*60*1e3,bc="installations",Rc="Installations";/**
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
 */const Sc={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},se=new Xn(bc,Rc,Sc);function Bo(n){return n instanceof Gt&&n.code.includes("request-failed")}/**
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
 */function Uo({projectId:n}){return`${Ac}/projects/${n}/installations`}function $o(n){return{token:n.token,requestStatus:2,expiresIn:Cc(n.expiresIn),creationTime:Date.now()}}async function jo(n,t){const r=(await t.json()).error;return se.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function qo({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Pc(n,{refreshToken:t}){const e=qo(n);return e.append("Authorization",Nc(t)),e}async function Ho(n){const t=await n();return t.status>=500&&t.status<600?n():t}function Cc(n){return Number(n.replace("s","000"))}function Nc(n){return`${Fo} ${n}`}/**
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
 */async function Vc({appConfig:n,heartbeatServiceProvider:t},{fid:e}){const r=Uo(n),s=qo(n),o=t.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&s.append("x-firebase-client",f)}const l={fid:e,authVersion:Fo,appId:n.appId,sdkVersion:Lo},c={method:"POST",headers:s,body:JSON.stringify(l)},d=await Ho(()=>fetch(r,c));if(d.ok){const f=await d.json();return{fid:f.fid||e,registrationStatus:2,refreshToken:f.refreshToken,authToken:$o(f.authToken)}}else throw await jo("Create Installation",d)}/**
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
 */function zo(n){return new Promise(t=>{setTimeout(t,n)})}/**
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
 */function Dc(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const xc=/^[cdef][\w-]{21}$/,Wr="";function kc(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const e=Oc(n);return xc.test(e)?e:Wr}catch{return Wr}}function Oc(n){return Dc(n).substr(0,22)}/**
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
 */function Yn(n){return`${n.appName}!${n.appId}`}/**
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
 */const Go=new Map;function Ko(n,t){const e=Yn(n);Wo(e,t),Mc(e,t)}function Wo(n,t){const e=Go.get(n);if(e)for(const r of e)r(t)}function Mc(n,t){const e=Lc();e&&e.postMessage({key:n,fid:t}),Fc()}let te=null;function Lc(){return!te&&"BroadcastChannel"in self&&(te=new BroadcastChannel("[Firebase] FID Change"),te.onmessage=n=>{Wo(n.data.key,n.data.fid)}),te}function Fc(){Go.size===0&&te&&(te.close(),te=null)}/**
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
 */const Bc="firebase-installations-database",Uc=1,oe="firebase-installations-store";let Lr=null;function ai(){return Lr||(Lr=No(Bc,Uc,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(oe)}}})),Lr}async function Fn(n,t){const e=Yn(n),s=(await ai()).transaction(oe,"readwrite"),o=s.objectStore(oe),l=await o.get(e);return await o.put(t,e),await s.done,(!l||l.fid!==t.fid)&&Ko(n,t.fid),t}async function Qo(n){const t=Yn(n),r=(await ai()).transaction(oe,"readwrite");await r.objectStore(oe).delete(t),await r.done}async function Jn(n,t){const e=Yn(n),s=(await ai()).transaction(oe,"readwrite"),o=s.objectStore(oe),l=await o.get(e),c=t(l);return c===void 0?await o.delete(e):await o.put(c,e),await s.done,c&&(!l||l.fid!==c.fid)&&Ko(n,c.fid),c}/**
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
 */async function li(n){let t;const e=await Jn(n.appConfig,r=>{const s=$c(r),o=jc(n,s);return t=o.registrationPromise,o.installationEntry});return e.fid===Wr?{installationEntry:await t}:{installationEntry:e,registrationPromise:t}}function $c(n){const t=n||{fid:kc(),registrationStatus:0};return Xo(t)}function jc(n,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(se.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const e={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=qc(n,e);return{installationEntry:e,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Hc(n)}:{installationEntry:t}}async function qc(n,t){try{const e=await Vc(n,t);return Fn(n.appConfig,e)}catch(e){throw Bo(e)&&e.customData.serverCode===409?await Qo(n.appConfig):await Fn(n.appConfig,{fid:t.fid,registrationStatus:0}),e}}async function Hc(n){let t=await Bs(n.appConfig);for(;t.registrationStatus===1;)await zo(100),t=await Bs(n.appConfig);if(t.registrationStatus===0){const{installationEntry:e,registrationPromise:r}=await li(n);return r||e}return t}function Bs(n){return Jn(n,t=>{if(!t)throw se.create("installation-not-found");return Xo(t)})}function Xo(n){return zc(n)?{fid:n.fid,registrationStatus:0}:n}function zc(n){return n.registrationStatus===1&&n.registrationTime+Mo<Date.now()}/**
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
 */async function Gc({appConfig:n,heartbeatServiceProvider:t},e){const r=Kc(n,e),s=Pc(n,e),o=t.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&s.append("x-firebase-client",f)}const l={installation:{sdkVersion:Lo,appId:n.appId}},c={method:"POST",headers:s,body:JSON.stringify(l)},d=await Ho(()=>fetch(r,c));if(d.ok){const f=await d.json();return $o(f)}else throw await jo("Generate Auth Token",d)}function Kc(n,{fid:t}){return`${Uo(n)}/${t}/authTokens:generate`}/**
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
 */async function ui(n,t=!1){let e;const r=await Jn(n.appConfig,o=>{if(!Yo(o))throw se.create("not-registered");const l=o.authToken;if(!t&&Xc(l))return o;if(l.requestStatus===1)return e=Wc(n,t),o;{if(!navigator.onLine)throw se.create("app-offline");const c=Jc(o);return e=Qc(n,c),c}});return e?await e:r.authToken}async function Wc(n,t){let e=await Us(n.appConfig);for(;e.authToken.requestStatus===1;)await zo(100),e=await Us(n.appConfig);const r=e.authToken;return r.requestStatus===0?ui(n,t):r}function Us(n){return Jn(n,t=>{if(!Yo(t))throw se.create("not-registered");const e=t.authToken;return Zc(e)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Qc(n,t){try{const e=await Gc(n,t),r=Object.assign(Object.assign({},t),{authToken:e});return await Fn(n.appConfig,r),e}catch(e){if(Bo(e)&&(e.customData.serverCode===401||e.customData.serverCode===404))await Qo(n.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Fn(n.appConfig,r)}throw e}}function Yo(n){return n!==void 0&&n.registrationStatus===2}function Xc(n){return n.requestStatus===2&&!Yc(n)}function Yc(n){const t=Date.now();return t<n.creationTime||n.creationTime+n.expiresIn<t+wc}function Jc(n){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:t})}function Zc(n){return n.requestStatus===1&&n.requestTime+Mo<Date.now()}/**
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
 */async function th(n){const t=n,{installationEntry:e,registrationPromise:r}=await li(t);return r?r.catch(console.error):ui(t).catch(console.error),e.fid}/**
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
 */async function eh(n,t=!1){const e=n;return await nh(e),(await ui(e,t)).token}async function nh(n){const{registrationPromise:t}=await li(n);t&&await t}/**
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
 */function rh(n){if(!n||!n.options)throw Fr("App Configuration");if(!n.name)throw Fr("App Name");const t=["projectId","apiKey","appId"];for(const e of t)if(!n.options[e])throw Fr(e);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Fr(n){return se.create("missing-app-config-values",{valueName:n})}/**
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
 */const Jo="installations",ih="installations-internal",sh=n=>{const t=n.getProvider("app").getImmediate(),e=rh(t),r=rn(t,"heartbeat");return{app:t,appConfig:e,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},oh=n=>{const t=n.getProvider("app").getImmediate(),e=rn(t,Jo).getImmediate();return{getId:()=>th(e),getToken:s=>eh(e,s)}};function ah(){jt(new xt(Jo,sh,"PUBLIC")),jt(new xt(ih,oh,"PRIVATE"))}ah();bt(Oo,oi);bt(Oo,oi,"esm2017");/**
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
 */const Bn="analytics",lh="firebase_id",uh="origin",ch=60*1e3,hh="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ci="https://www.googletagmanager.com/gtag/js";/**
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
 */const yt=new ii("@firebase/analytics");/**
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
 */const dh={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Et=new Xn("analytics","Analytics",dh);/**
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
 */function fh(n){if(!n.startsWith(ci)){const t=Et.create("invalid-gtag-resource",{gtagURL:n});return yt.warn(t.message),""}return n}function Zo(n){return Promise.all(n.map(t=>t.catch(e=>e)))}function ph(n,t){let e;return window.trustedTypes&&(e=window.trustedTypes.createPolicy(n,t)),e}function mh(n,t){const e=ph("firebase-js-sdk-policy",{createScriptURL:fh}),r=document.createElement("script"),s=`${ci}?l=${n}&id=${t}`;r.src=e?e==null?void 0:e.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function gh(n){let t=[];return Array.isArray(window[n])?t=window[n]:window[n]=t,t}async function yh(n,t,e,r,s,o){const l=r[s];try{if(l)await t[l];else{const d=(await Zo(e)).find(f=>f.measurementId===s);d&&await t[d.appId]}}catch(c){yt.error(c)}n("config",s,o)}async function _h(n,t,e,r,s){try{let o=[];if(s&&s.send_to){let l=s.send_to;Array.isArray(l)||(l=[l]);const c=await Zo(e);for(const d of l){const f=c.find(w=>w.measurementId===d),I=f&&t[f.appId];if(I)o.push(I);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),n("event",r,s||{})}catch(o){yt.error(o)}}function vh(n,t,e,r){async function s(o,...l){try{if(o==="event"){const[c,d]=l;await _h(n,t,e,c,d)}else if(o==="config"){const[c,d]=l;await yh(n,t,e,r,c,d)}else if(o==="consent"){const[c,d]=l;n("consent",c,d)}else if(o==="get"){const[c,d,f]=l;n("get",c,d,f)}else if(o==="set"){const[c]=l;n("set",c)}else n(o,...l)}catch(c){yt.error(c)}}return s}function Eh(n,t,e,r,s){let o=function(...l){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(o=window[s]),window[s]=vh(o,n,t,e),{gtagCore:o,wrappedGtag:window[s]}}function Th(n){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(ci)&&e.src.includes(n))return e;return null}/**
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
 */const Ih=30,Ah=1e3;class wh{constructor(t={},e=Ah){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const ta=new wh;function bh(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function Rh(n){var t;const{appId:e,apiKey:r}=n,s={method:"GET",headers:bh(r)},o=hh.replace("{app-id}",e),l=await fetch(o,s);if(l.status!==200&&l.status!==304){let c="";try{const d=await l.json();!((t=d.error)===null||t===void 0)&&t.message&&(c=d.error.message)}catch{}throw Et.create("config-fetch-failed",{httpStatus:l.status,responseMessage:c})}return l.json()}async function Sh(n,t=ta,e){const{appId:r,apiKey:s,measurementId:o}=n.options;if(!r)throw Et.create("no-app-id");if(!s){if(o)return{measurementId:o,appId:r};throw Et.create("no-api-key")}const l=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new Nh;return setTimeout(async()=>{c.abort()},ch),ea({appId:r,apiKey:s,measurementId:o},l,c,t)}async function ea(n,{throttleEndTimeMillis:t,backoffCount:e},r,s=ta){var o;const{appId:l,measurementId:c}=n;try{await Ph(r,t)}catch(d){if(c)return yt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:l,measurementId:c};throw d}try{const d=await Rh(n);return s.deleteThrottleMetadata(l),d}catch(d){const f=d;if(!Ch(f)){if(s.deleteThrottleMetadata(l),c)return yt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:l,measurementId:c};throw d}const I=Number((o=f==null?void 0:f.customData)===null||o===void 0?void 0:o.httpStatus)===503?Ns(e,s.intervalMillis,Ih):Ns(e,s.intervalMillis),w={throttleEndTimeMillis:Date.now()+I,backoffCount:e+1};return s.setThrottleMetadata(l,w),yt.debug(`Calling attemptFetch again in ${I} millis`),ea(n,w,r,s)}}function Ph(n,t){return new Promise((e,r)=>{const s=Math.max(t-Date.now(),0),o=setTimeout(e,s);n.addEventListener(()=>{clearTimeout(o),r(Et.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Ch(n){if(!(n instanceof Gt)||!n.customData)return!1;const t=Number(n.customData.httpStatus);return t===429||t===500||t===503||t===504}class Nh{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Vh(n,t,e,r,s){if(s&&s.global){n("event",e,r);return}else{const o=await t,l=Object.assign(Object.assign({},r),{send_to:o});n("event",e,l)}}/**
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
 */async function Dh(){if(Ro())try{await So()}catch(n){return yt.warn(Et.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return yt.warn(Et.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function xh(n,t,e,r,s,o,l){var c;const d=Sh(n);d.then(C=>{e[C.measurementId]=C.appId,n.options.measurementId&&C.measurementId!==n.options.measurementId&&yt.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${C.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(C=>yt.error(C)),t.push(d);const f=Dh().then(C=>{if(C)return r.getId()}),[I,w]=await Promise.all([d,f]);Th(o)||mh(o,I.measurementId),s("js",new Date);const S=(c=l==null?void 0:l.config)!==null&&c!==void 0?c:{};return S[uh]="firebase",S.update=!0,w!=null&&(S[lh]=w),s("config",I.measurementId,S),I.measurementId}/**
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
 */class kh{constructor(t){this.app=t}_delete(){return delete ze[this.app.options.appId],Promise.resolve()}}let ze={},$s=[];const js={};let Br="dataLayer",Oh="gtag",qs,na,Hs=!1;function Mh(){const n=[];if(su()&&n.push("This is a browser extension environment."),au()||n.push("Cookies are not available."),n.length>0){const t=n.map((r,s)=>`(${s+1}) ${r}`).join(" "),e=Et.create("invalid-analytics-context",{errorInfo:t});yt.warn(e.message)}}function Lh(n,t,e){Mh();const r=n.options.appId;if(!r)throw Et.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)yt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Et.create("no-api-key");if(ze[r]!=null)throw Et.create("already-exists",{id:r});if(!Hs){gh(Br);const{wrappedGtag:o,gtagCore:l}=Eh(ze,$s,js,Br,Oh);na=o,qs=l,Hs=!0}return ze[r]=xh(n,$s,js,t,qs,Br,e),new kh(n)}function Fh(n=Do()){n=ie(n);const t=rn(n,Bn);return t.isInitialized()?t.getImmediate():Bh(n)}function Bh(n,t={}){const e=rn(n,Bn);if(e.isInitialized()){const s=e.getImmediate();if(Mn(t,e.getOptions()))return s;throw Et.create("already-initialized")}return e.initialize({options:t})}function Uh(n,t,e,r){n=ie(n),Vh(na,ze[n.app.options.appId],t,e,r).catch(s=>yt.error(s))}const zs="@firebase/analytics",Gs="0.10.7";function $h(){jt(new xt(Bn,(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return Lh(r,s,e)},"PUBLIC")),jt(new xt("analytics-internal",n,"PRIVATE")),bt(zs,Gs),bt(zs,Gs,"esm2017");function n(t){try{const e=t.getProvider(Bn).getImmediate();return{logEvent:(r,s,o)=>Uh(e,r,s,o)}}catch(e){throw Et.create("interop-component-reg-failed",{reason:e})}}}$h();var Ks=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ra;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,p){function g(){}g.prototype=p.prototype,v.D=p.prototype,v.prototype=new g,v.prototype.constructor=v,v.C=function(y,_,T){for(var m=Array(arguments.length-2),Pt=2;Pt<arguments.length;Pt++)m[Pt-2]=arguments[Pt];return p.prototype[_].apply(y,m)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,p,g){g||(g=0);var y=Array(16);if(typeof p=="string")for(var _=0;16>_;++_)y[_]=p.charCodeAt(g++)|p.charCodeAt(g++)<<8|p.charCodeAt(g++)<<16|p.charCodeAt(g++)<<24;else for(_=0;16>_;++_)y[_]=p[g++]|p[g++]<<8|p[g++]<<16|p[g++]<<24;p=v.g[0],g=v.g[1],_=v.g[2];var T=v.g[3],m=p+(T^g&(_^T))+y[0]+3614090360&4294967295;p=g+(m<<7&4294967295|m>>>25),m=T+(_^p&(g^_))+y[1]+3905402710&4294967295,T=p+(m<<12&4294967295|m>>>20),m=_+(g^T&(p^g))+y[2]+606105819&4294967295,_=T+(m<<17&4294967295|m>>>15),m=g+(p^_&(T^p))+y[3]+3250441966&4294967295,g=_+(m<<22&4294967295|m>>>10),m=p+(T^g&(_^T))+y[4]+4118548399&4294967295,p=g+(m<<7&4294967295|m>>>25),m=T+(_^p&(g^_))+y[5]+1200080426&4294967295,T=p+(m<<12&4294967295|m>>>20),m=_+(g^T&(p^g))+y[6]+2821735955&4294967295,_=T+(m<<17&4294967295|m>>>15),m=g+(p^_&(T^p))+y[7]+4249261313&4294967295,g=_+(m<<22&4294967295|m>>>10),m=p+(T^g&(_^T))+y[8]+1770035416&4294967295,p=g+(m<<7&4294967295|m>>>25),m=T+(_^p&(g^_))+y[9]+2336552879&4294967295,T=p+(m<<12&4294967295|m>>>20),m=_+(g^T&(p^g))+y[10]+4294925233&4294967295,_=T+(m<<17&4294967295|m>>>15),m=g+(p^_&(T^p))+y[11]+2304563134&4294967295,g=_+(m<<22&4294967295|m>>>10),m=p+(T^g&(_^T))+y[12]+1804603682&4294967295,p=g+(m<<7&4294967295|m>>>25),m=T+(_^p&(g^_))+y[13]+4254626195&4294967295,T=p+(m<<12&4294967295|m>>>20),m=_+(g^T&(p^g))+y[14]+2792965006&4294967295,_=T+(m<<17&4294967295|m>>>15),m=g+(p^_&(T^p))+y[15]+1236535329&4294967295,g=_+(m<<22&4294967295|m>>>10),m=p+(_^T&(g^_))+y[1]+4129170786&4294967295,p=g+(m<<5&4294967295|m>>>27),m=T+(g^_&(p^g))+y[6]+3225465664&4294967295,T=p+(m<<9&4294967295|m>>>23),m=_+(p^g&(T^p))+y[11]+643717713&4294967295,_=T+(m<<14&4294967295|m>>>18),m=g+(T^p&(_^T))+y[0]+3921069994&4294967295,g=_+(m<<20&4294967295|m>>>12),m=p+(_^T&(g^_))+y[5]+3593408605&4294967295,p=g+(m<<5&4294967295|m>>>27),m=T+(g^_&(p^g))+y[10]+38016083&4294967295,T=p+(m<<9&4294967295|m>>>23),m=_+(p^g&(T^p))+y[15]+3634488961&4294967295,_=T+(m<<14&4294967295|m>>>18),m=g+(T^p&(_^T))+y[4]+3889429448&4294967295,g=_+(m<<20&4294967295|m>>>12),m=p+(_^T&(g^_))+y[9]+568446438&4294967295,p=g+(m<<5&4294967295|m>>>27),m=T+(g^_&(p^g))+y[14]+3275163606&4294967295,T=p+(m<<9&4294967295|m>>>23),m=_+(p^g&(T^p))+y[3]+4107603335&4294967295,_=T+(m<<14&4294967295|m>>>18),m=g+(T^p&(_^T))+y[8]+1163531501&4294967295,g=_+(m<<20&4294967295|m>>>12),m=p+(_^T&(g^_))+y[13]+2850285829&4294967295,p=g+(m<<5&4294967295|m>>>27),m=T+(g^_&(p^g))+y[2]+4243563512&4294967295,T=p+(m<<9&4294967295|m>>>23),m=_+(p^g&(T^p))+y[7]+1735328473&4294967295,_=T+(m<<14&4294967295|m>>>18),m=g+(T^p&(_^T))+y[12]+2368359562&4294967295,g=_+(m<<20&4294967295|m>>>12),m=p+(g^_^T)+y[5]+4294588738&4294967295,p=g+(m<<4&4294967295|m>>>28),m=T+(p^g^_)+y[8]+2272392833&4294967295,T=p+(m<<11&4294967295|m>>>21),m=_+(T^p^g)+y[11]+1839030562&4294967295,_=T+(m<<16&4294967295|m>>>16),m=g+(_^T^p)+y[14]+4259657740&4294967295,g=_+(m<<23&4294967295|m>>>9),m=p+(g^_^T)+y[1]+2763975236&4294967295,p=g+(m<<4&4294967295|m>>>28),m=T+(p^g^_)+y[4]+1272893353&4294967295,T=p+(m<<11&4294967295|m>>>21),m=_+(T^p^g)+y[7]+4139469664&4294967295,_=T+(m<<16&4294967295|m>>>16),m=g+(_^T^p)+y[10]+3200236656&4294967295,g=_+(m<<23&4294967295|m>>>9),m=p+(g^_^T)+y[13]+681279174&4294967295,p=g+(m<<4&4294967295|m>>>28),m=T+(p^g^_)+y[0]+3936430074&4294967295,T=p+(m<<11&4294967295|m>>>21),m=_+(T^p^g)+y[3]+3572445317&4294967295,_=T+(m<<16&4294967295|m>>>16),m=g+(_^T^p)+y[6]+76029189&4294967295,g=_+(m<<23&4294967295|m>>>9),m=p+(g^_^T)+y[9]+3654602809&4294967295,p=g+(m<<4&4294967295|m>>>28),m=T+(p^g^_)+y[12]+3873151461&4294967295,T=p+(m<<11&4294967295|m>>>21),m=_+(T^p^g)+y[15]+530742520&4294967295,_=T+(m<<16&4294967295|m>>>16),m=g+(_^T^p)+y[2]+3299628645&4294967295,g=_+(m<<23&4294967295|m>>>9),m=p+(_^(g|~T))+y[0]+4096336452&4294967295,p=g+(m<<6&4294967295|m>>>26),m=T+(g^(p|~_))+y[7]+1126891415&4294967295,T=p+(m<<10&4294967295|m>>>22),m=_+(p^(T|~g))+y[14]+2878612391&4294967295,_=T+(m<<15&4294967295|m>>>17),m=g+(T^(_|~p))+y[5]+4237533241&4294967295,g=_+(m<<21&4294967295|m>>>11),m=p+(_^(g|~T))+y[12]+1700485571&4294967295,p=g+(m<<6&4294967295|m>>>26),m=T+(g^(p|~_))+y[3]+2399980690&4294967295,T=p+(m<<10&4294967295|m>>>22),m=_+(p^(T|~g))+y[10]+4293915773&4294967295,_=T+(m<<15&4294967295|m>>>17),m=g+(T^(_|~p))+y[1]+2240044497&4294967295,g=_+(m<<21&4294967295|m>>>11),m=p+(_^(g|~T))+y[8]+1873313359&4294967295,p=g+(m<<6&4294967295|m>>>26),m=T+(g^(p|~_))+y[15]+4264355552&4294967295,T=p+(m<<10&4294967295|m>>>22),m=_+(p^(T|~g))+y[6]+2734768916&4294967295,_=T+(m<<15&4294967295|m>>>17),m=g+(T^(_|~p))+y[13]+1309151649&4294967295,g=_+(m<<21&4294967295|m>>>11),m=p+(_^(g|~T))+y[4]+4149444226&4294967295,p=g+(m<<6&4294967295|m>>>26),m=T+(g^(p|~_))+y[11]+3174756917&4294967295,T=p+(m<<10&4294967295|m>>>22),m=_+(p^(T|~g))+y[2]+718787259&4294967295,_=T+(m<<15&4294967295|m>>>17),m=g+(T^(_|~p))+y[9]+3951481745&4294967295,v.g[0]=v.g[0]+p&4294967295,v.g[1]=v.g[1]+(_+(m<<21&4294967295|m>>>11))&4294967295,v.g[2]=v.g[2]+_&4294967295,v.g[3]=v.g[3]+T&4294967295}r.prototype.u=function(v,p){p===void 0&&(p=v.length);for(var g=p-this.blockSize,y=this.B,_=this.h,T=0;T<p;){if(_==0)for(;T<=g;)s(this,v,T),T+=this.blockSize;if(typeof v=="string"){for(;T<p;)if(y[_++]=v.charCodeAt(T++),_==this.blockSize){s(this,y),_=0;break}}else for(;T<p;)if(y[_++]=v[T++],_==this.blockSize){s(this,y),_=0;break}}this.h=_,this.o+=p},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var p=1;p<v.length-8;++p)v[p]=0;var g=8*this.o;for(p=v.length-8;p<v.length;++p)v[p]=g&255,g/=256;for(this.u(v),v=Array(16),p=g=0;4>p;++p)for(var y=0;32>y;y+=8)v[g++]=this.g[p]>>>y&255;return v};function o(v,p){var g=c;return Object.prototype.hasOwnProperty.call(g,v)?g[v]:g[v]=p(v)}function l(v,p){this.h=p;for(var g=[],y=!0,_=v.length-1;0<=_;_--){var T=v[_]|0;y&&T==p||(g[_]=T,y=!1)}this.g=g}var c={};function d(v){return-128<=v&&128>v?o(v,function(p){return new l([p|0],0>p?-1:0)}):new l([v|0],0>v?-1:0)}function f(v){if(isNaN(v)||!isFinite(v))return w;if(0>v)return D(f(-v));for(var p=[],g=1,y=0;v>=g;y++)p[y]=v/g|0,g*=4294967296;return new l(p,0)}function I(v,p){if(v.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(v.charAt(0)=="-")return D(I(v.substring(1),p));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=f(Math.pow(p,8)),y=w,_=0;_<v.length;_+=8){var T=Math.min(8,v.length-_),m=parseInt(v.substring(_,_+T),p);8>T?(T=f(Math.pow(p,T)),y=y.j(T).add(f(m))):(y=y.j(g),y=y.add(f(m)))}return y}var w=d(0),S=d(1),C=d(16777216);n=l.prototype,n.m=function(){if(O(this))return-D(this).m();for(var v=0,p=1,g=0;g<this.g.length;g++){var y=this.i(g);v+=(0<=y?y:4294967296+y)*p,p*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(N(this))return"0";if(O(this))return"-"+D(this).toString(v);for(var p=f(Math.pow(v,6)),g=this,y="";;){var _=st(g,p).g;g=G(g,_.j(p));var T=((0<g.g.length?g.g[0]:g.h)>>>0).toString(v);if(g=_,N(g))return T+y;for(;6>T.length;)T="0"+T;y=T+y}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function N(v){if(v.h!=0)return!1;for(var p=0;p<v.g.length;p++)if(v.g[p]!=0)return!1;return!0}function O(v){return v.h==-1}n.l=function(v){return v=G(this,v),O(v)?-1:N(v)?0:1};function D(v){for(var p=v.g.length,g=[],y=0;y<p;y++)g[y]=~v.g[y];return new l(g,~v.h).add(S)}n.abs=function(){return O(this)?D(this):this},n.add=function(v){for(var p=Math.max(this.g.length,v.g.length),g=[],y=0,_=0;_<=p;_++){var T=y+(this.i(_)&65535)+(v.i(_)&65535),m=(T>>>16)+(this.i(_)>>>16)+(v.i(_)>>>16);y=m>>>16,T&=65535,m&=65535,g[_]=m<<16|T}return new l(g,g[g.length-1]&-2147483648?-1:0)};function G(v,p){return v.add(D(p))}n.j=function(v){if(N(this)||N(v))return w;if(O(this))return O(v)?D(this).j(D(v)):D(D(this).j(v));if(O(v))return D(this.j(D(v)));if(0>this.l(C)&&0>v.l(C))return f(this.m()*v.m());for(var p=this.g.length+v.g.length,g=[],y=0;y<2*p;y++)g[y]=0;for(y=0;y<this.g.length;y++)for(var _=0;_<v.g.length;_++){var T=this.i(y)>>>16,m=this.i(y)&65535,Pt=v.i(_)>>>16,we=v.i(_)&65535;g[2*y+2*_]+=m*we,H(g,2*y+2*_),g[2*y+2*_+1]+=T*we,H(g,2*y+2*_+1),g[2*y+2*_+1]+=m*Pt,H(g,2*y+2*_+1),g[2*y+2*_+2]+=T*Pt,H(g,2*y+2*_+2)}for(y=0;y<p;y++)g[y]=g[2*y+1]<<16|g[2*y];for(y=p;y<2*p;y++)g[y]=0;return new l(g,0)};function H(v,p){for(;(v[p]&65535)!=v[p];)v[p+1]+=v[p]>>>16,v[p]&=65535,p++}function Q(v,p){this.g=v,this.h=p}function st(v,p){if(N(p))throw Error("division by zero");if(N(v))return new Q(w,w);if(O(v))return p=st(D(v),p),new Q(D(p.g),D(p.h));if(O(p))return p=st(v,D(p)),new Q(D(p.g),p.h);if(30<v.g.length){if(O(v)||O(p))throw Error("slowDivide_ only works with positive integers.");for(var g=S,y=p;0>=y.l(v);)g=Kt(g),y=Kt(y);var _=gt(g,1),T=gt(y,1);for(y=gt(y,2),g=gt(g,2);!N(y);){var m=T.add(y);0>=m.l(v)&&(_=_.add(g),T=m),y=gt(y,1),g=gt(g,1)}return p=G(v,_.j(p)),new Q(_,p)}for(_=w;0<=v.l(p);){for(g=Math.max(1,Math.floor(v.m()/p.m())),y=Math.ceil(Math.log(g)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),T=f(g),m=T.j(p);O(m)||0<m.l(v);)g-=y,T=f(g),m=T.j(p);N(T)&&(T=S),_=_.add(T),v=G(v,m)}return new Q(_,v)}n.A=function(v){return st(this,v).h},n.and=function(v){for(var p=Math.max(this.g.length,v.g.length),g=[],y=0;y<p;y++)g[y]=this.i(y)&v.i(y);return new l(g,this.h&v.h)},n.or=function(v){for(var p=Math.max(this.g.length,v.g.length),g=[],y=0;y<p;y++)g[y]=this.i(y)|v.i(y);return new l(g,this.h|v.h)},n.xor=function(v){for(var p=Math.max(this.g.length,v.g.length),g=[],y=0;y<p;y++)g[y]=this.i(y)^v.i(y);return new l(g,this.h^v.h)};function Kt(v){for(var p=v.g.length+1,g=[],y=0;y<p;y++)g[y]=v.i(y)<<1|v.i(y-1)>>>31;return new l(g,v.h)}function gt(v,p){var g=p>>5;p%=32;for(var y=v.g.length-g,_=[],T=0;T<y;T++)_[T]=0<p?v.i(T+g)>>>p|v.i(T+g+1)<<32-p:v.i(T+g);return new l(_,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=f,l.fromString=I,ra=l}).apply(typeof Ks<"u"?Ks:typeof self<"u"?self:typeof window<"u"?window:{});var Sn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ia,sa,He,oa,Dn,Qr,aa,la,ua;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,a,u){return i==Array.prototype||i==Object.prototype||(i[a]=u.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Sn=="object"&&Sn];for(var a=0;a<i.length;++a){var u=i[a];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=e(this);function s(i,a){if(a)t:{var u=r;i=i.split(".");for(var h=0;h<i.length-1;h++){var E=i[h];if(!(E in u))break t;u=u[E]}i=i[i.length-1],h=u[i],a=a(h),a!=h&&a!=null&&t(u,i,{configurable:!0,writable:!0,value:a})}}function o(i,a){i instanceof String&&(i+="");var u=0,h=!1,E={next:function(){if(!h&&u<i.length){var A=u++;return{value:a(A,i[A]),done:!1}}return h=!0,{done:!0,value:void 0}}};return E[Symbol.iterator]=function(){return E},E}s("Array.prototype.values",function(i){return i||function(){return o(this,function(a,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},c=this||self;function d(i){var a=typeof i;return a=a!="object"?a:i?Array.isArray(i)?"array":a:"null",a=="array"||a=="object"&&typeof i.length=="number"}function f(i){var a=typeof i;return a=="object"&&i!=null||a=="function"}function I(i,a,u){return i.call.apply(i.bind,arguments)}function w(i,a,u){if(!i)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var E=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(E,h),i.apply(a,E)}}return function(){return i.apply(a,arguments)}}function S(i,a,u){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?I:w,S.apply(null,arguments)}function C(i,a){var u=Array.prototype.slice.call(arguments,1);return function(){var h=u.slice();return h.push.apply(h,arguments),i.apply(this,h)}}function N(i,a){function u(){}u.prototype=a.prototype,i.aa=a.prototype,i.prototype=new u,i.prototype.constructor=i,i.Qb=function(h,E,A){for(var P=Array(arguments.length-2),U=2;U<arguments.length;U++)P[U-2]=arguments[U];return a.prototype[E].apply(h,P)}}function O(i){const a=i.length;if(0<a){const u=Array(a);for(let h=0;h<a;h++)u[h]=i[h];return u}return[]}function D(i,a){for(let u=1;u<arguments.length;u++){const h=arguments[u];if(d(h)){const E=i.length||0,A=h.length||0;i.length=E+A;for(let P=0;P<A;P++)i[E+P]=h[P]}else i.push(h)}}class G{constructor(a,u){this.i=a,this.j=u,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function H(i){return/^[\s\xa0]*$/.test(i)}function Q(){var i=c.navigator;return i&&(i=i.userAgent)?i:""}function st(i){return st[" "](i),i}st[" "]=function(){};var Kt=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function gt(i,a,u){for(const h in i)a.call(u,i[h],h,i)}function v(i,a){for(const u in i)a.call(void 0,i[u],u,i)}function p(i){const a={};for(const u in i)a[u]=i[u];return a}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(i,a){let u,h;for(let E=1;E<arguments.length;E++){h=arguments[E];for(u in h)i[u]=h[u];for(let A=0;A<g.length;A++)u=g[A],Object.prototype.hasOwnProperty.call(h,u)&&(i[u]=h[u])}}function _(i){var a=1;i=i.split(":");const u=[];for(;0<a&&i.length;)u.push(i.shift()),a--;return i.length&&u.push(i.join(":")),u}function T(i){c.setTimeout(()=>{throw i},0)}function m(){var i=ur;let a=null;return i.g&&(a=i.g,i.g=i.g.next,i.g||(i.h=null),a.next=null),a}class Pt{constructor(){this.h=this.g=null}add(a,u){const h=we.get();h.set(a,u),this.h?this.h.next=h:this.g=h,this.h=h}}var we=new G(()=>new cl,i=>i.reset());class cl{constructor(){this.next=this.g=this.h=null}set(a,u){this.h=a,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let be,Re=!1,ur=new Pt,Pi=()=>{const i=c.Promise.resolve(void 0);be=()=>{i.then(hl)}};var hl=()=>{for(var i;i=m();){try{i.h.call(i.g)}catch(u){T(u)}var a=we;a.j(i),100>a.h&&(a.h++,i.next=a.g,a.g=i)}Re=!1};function Ot(){this.s=this.s,this.C=this.C}Ot.prototype.s=!1,Ot.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ot.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ot(i,a){this.type=i,this.g=this.target=a,this.defaultPrevented=!1}ot.prototype.h=function(){this.defaultPrevented=!0};var dl=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var i=!1,a=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const u=()=>{};c.addEventListener("test",u,a),c.removeEventListener("test",u,a)}catch{}return i}();function Se(i,a){if(ot.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var u=this.type=i.type,h=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=a,a=i.relatedTarget){if(Kt){t:{try{st(a.nodeName);var E=!0;break t}catch{}E=!1}E||(a=null)}}else u=="mouseover"?a=i.fromElement:u=="mouseout"&&(a=i.toElement);this.relatedTarget=a,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:fl[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&Se.aa.h.call(this)}}N(Se,ot);var fl={2:"touch",3:"pen",4:"mouse"};Se.prototype.h=function(){Se.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var un="closure_listenable_"+(1e6*Math.random()|0),pl=0;function ml(i,a,u,h,E){this.listener=i,this.proxy=null,this.src=a,this.type=u,this.capture=!!h,this.ha=E,this.key=++pl,this.da=this.fa=!1}function cn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function hn(i){this.src=i,this.g={},this.h=0}hn.prototype.add=function(i,a,u,h,E){var A=i.toString();i=this.g[A],i||(i=this.g[A]=[],this.h++);var P=hr(i,a,h,E);return-1<P?(a=i[P],u||(a.fa=!1)):(a=new ml(a,this.src,A,!!h,E),a.fa=u,i.push(a)),a};function cr(i,a){var u=a.type;if(u in i.g){var h=i.g[u],E=Array.prototype.indexOf.call(h,a,void 0),A;(A=0<=E)&&Array.prototype.splice.call(h,E,1),A&&(cn(a),i.g[u].length==0&&(delete i.g[u],i.h--))}}function hr(i,a,u,h){for(var E=0;E<i.length;++E){var A=i[E];if(!A.da&&A.listener==a&&A.capture==!!u&&A.ha==h)return E}return-1}var dr="closure_lm_"+(1e6*Math.random()|0),fr={};function Ci(i,a,u,h,E){if(Array.isArray(a)){for(var A=0;A<a.length;A++)Ci(i,a[A],u,h,E);return null}return u=Di(u),i&&i[un]?i.K(a,u,f(h)?!!h.capture:!!h,E):gl(i,a,u,!1,h,E)}function gl(i,a,u,h,E,A){if(!a)throw Error("Invalid event type");var P=f(E)?!!E.capture:!!E,U=mr(i);if(U||(i[dr]=U=new hn(i)),u=U.add(a,u,h,P,A),u.proxy)return u;if(h=yl(),u.proxy=h,h.src=i,h.listener=u,i.addEventListener)dl||(E=P),E===void 0&&(E=!1),i.addEventListener(a.toString(),h,E);else if(i.attachEvent)i.attachEvent(Vi(a.toString()),h);else if(i.addListener&&i.removeListener)i.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return u}function yl(){function i(u){return a.call(i.src,i.listener,u)}const a=_l;return i}function Ni(i,a,u,h,E){if(Array.isArray(a))for(var A=0;A<a.length;A++)Ni(i,a[A],u,h,E);else h=f(h)?!!h.capture:!!h,u=Di(u),i&&i[un]?(i=i.i,a=String(a).toString(),a in i.g&&(A=i.g[a],u=hr(A,u,h,E),-1<u&&(cn(A[u]),Array.prototype.splice.call(A,u,1),A.length==0&&(delete i.g[a],i.h--)))):i&&(i=mr(i))&&(a=i.g[a.toString()],i=-1,a&&(i=hr(a,u,h,E)),(u=-1<i?a[i]:null)&&pr(u))}function pr(i){if(typeof i!="number"&&i&&!i.da){var a=i.src;if(a&&a[un])cr(a.i,i);else{var u=i.type,h=i.proxy;a.removeEventListener?a.removeEventListener(u,h,i.capture):a.detachEvent?a.detachEvent(Vi(u),h):a.addListener&&a.removeListener&&a.removeListener(h),(u=mr(a))?(cr(u,i),u.h==0&&(u.src=null,a[dr]=null)):cn(i)}}}function Vi(i){return i in fr?fr[i]:fr[i]="on"+i}function _l(i,a){if(i.da)i=!0;else{a=new Se(a,this);var u=i.listener,h=i.ha||i.src;i.fa&&pr(i),i=u.call(h,a)}return i}function mr(i){return i=i[dr],i instanceof hn?i:null}var gr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Di(i){return typeof i=="function"?i:(i[gr]||(i[gr]=function(a){return i.handleEvent(a)}),i[gr])}function at(){Ot.call(this),this.i=new hn(this),this.M=this,this.F=null}N(at,Ot),at.prototype[un]=!0,at.prototype.removeEventListener=function(i,a,u,h){Ni(this,i,a,u,h)};function pt(i,a){var u,h=i.F;if(h)for(u=[];h;h=h.F)u.push(h);if(i=i.M,h=a.type||a,typeof a=="string")a=new ot(a,i);else if(a instanceof ot)a.target=a.target||i;else{var E=a;a=new ot(h,i),y(a,E)}if(E=!0,u)for(var A=u.length-1;0<=A;A--){var P=a.g=u[A];E=dn(P,h,!0,a)&&E}if(P=a.g=i,E=dn(P,h,!0,a)&&E,E=dn(P,h,!1,a)&&E,u)for(A=0;A<u.length;A++)P=a.g=u[A],E=dn(P,h,!1,a)&&E}at.prototype.N=function(){if(at.aa.N.call(this),this.i){var i=this.i,a;for(a in i.g){for(var u=i.g[a],h=0;h<u.length;h++)cn(u[h]);delete i.g[a],i.h--}}this.F=null},at.prototype.K=function(i,a,u,h){return this.i.add(String(i),a,!1,u,h)},at.prototype.L=function(i,a,u,h){return this.i.add(String(i),a,!0,u,h)};function dn(i,a,u,h){if(a=i.i.g[String(a)],!a)return!0;a=a.concat();for(var E=!0,A=0;A<a.length;++A){var P=a[A];if(P&&!P.da&&P.capture==u){var U=P.listener,et=P.ha||P.src;P.fa&&cr(i.i,P),E=U.call(et,h)!==!1&&E}}return E&&!h.defaultPrevented}function xi(i,a,u){if(typeof i=="function")u&&(i=S(i,u));else if(i&&typeof i.handleEvent=="function")i=S(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(i,a||0)}function ki(i){i.g=xi(()=>{i.g=null,i.i&&(i.i=!1,ki(i))},i.l);const a=i.h;i.h=null,i.m.apply(null,a)}class vl extends Ot{constructor(a,u){super(),this.m=a,this.l=u,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:ki(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pe(i){Ot.call(this),this.h=i,this.g={}}N(Pe,Ot);var Oi=[];function Mi(i){gt(i.g,function(a,u){this.g.hasOwnProperty(u)&&pr(a)},i),i.g={}}Pe.prototype.N=function(){Pe.aa.N.call(this),Mi(this)},Pe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var yr=c.JSON.stringify,El=c.JSON.parse,Tl=class{stringify(i){return c.JSON.stringify(i,void 0)}parse(i){return c.JSON.parse(i,void 0)}};function _r(){}_r.prototype.h=null;function Li(i){return i.h||(i.h=i.i())}function Fi(){}var Ce={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function vr(){ot.call(this,"d")}N(vr,ot);function Er(){ot.call(this,"c")}N(Er,ot);var Wt={},Bi=null;function fn(){return Bi=Bi||new at}Wt.La="serverreachability";function Ui(i){ot.call(this,Wt.La,i)}N(Ui,ot);function Ne(i){const a=fn();pt(a,new Ui(a))}Wt.STAT_EVENT="statevent";function $i(i,a){ot.call(this,Wt.STAT_EVENT,i),this.stat=a}N($i,ot);function mt(i){const a=fn();pt(a,new $i(a,i))}Wt.Ma="timingevent";function ji(i,a){ot.call(this,Wt.Ma,i),this.size=a}N(ji,ot);function Ve(i,a){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){i()},a)}function De(){this.g=!0}De.prototype.xa=function(){this.g=!1};function Il(i,a,u,h,E,A){i.info(function(){if(i.g)if(A)for(var P="",U=A.split("&"),et=0;et<U.length;et++){var B=U[et].split("=");if(1<B.length){var lt=B[0];B=B[1];var ut=lt.split("_");P=2<=ut.length&&ut[1]=="type"?P+(lt+"="+B+"&"):P+(lt+"=redacted&")}}else P=null;else P=A;return"XMLHTTP REQ ("+h+") [attempt "+E+"]: "+a+`
`+u+`
`+P})}function Al(i,a,u,h,E,A,P){i.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+E+"]: "+a+`
`+u+`
`+A+" "+P})}function he(i,a,u,h){i.info(function(){return"XMLHTTP TEXT ("+a+"): "+bl(i,u)+(h?" "+h:"")})}function wl(i,a){i.info(function(){return"TIMEOUT: "+a})}De.prototype.info=function(){};function bl(i,a){if(!i.g)return a;if(!a)return null;try{var u=JSON.parse(a);if(u){for(i=0;i<u.length;i++)if(Array.isArray(u[i])){var h=u[i];if(!(2>h.length)){var E=h[1];if(Array.isArray(E)&&!(1>E.length)){var A=E[0];if(A!="noop"&&A!="stop"&&A!="close")for(var P=1;P<E.length;P++)E[P]=""}}}}return yr(u)}catch{return a}}var pn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},qi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Tr;function mn(){}N(mn,_r),mn.prototype.g=function(){return new XMLHttpRequest},mn.prototype.i=function(){return{}},Tr=new mn;function Mt(i,a,u,h){this.j=i,this.i=a,this.l=u,this.R=h||1,this.U=new Pe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Hi}function Hi(){this.i=null,this.g="",this.h=!1}var zi={},Ir={};function Ar(i,a,u){i.L=1,i.v=vn(Ct(a)),i.m=u,i.P=!0,Gi(i,null)}function Gi(i,a){i.F=Date.now(),gn(i),i.A=Ct(i.v);var u=i.A,h=i.R;Array.isArray(h)||(h=[String(h)]),os(u.i,"t",h),i.C=0,u=i.j.J,i.h=new Hi,i.g=ws(i.j,u?a:null,!i.m),0<i.O&&(i.M=new vl(S(i.Y,i,i.g),i.O)),a=i.U,u=i.g,h=i.ca;var E="readystatechange";Array.isArray(E)||(E&&(Oi[0]=E.toString()),E=Oi);for(var A=0;A<E.length;A++){var P=Ci(u,E[A],h||a.handleEvent,!1,a.h||a);if(!P)break;a.g[P.key]=P}a=i.H?p(i.H):{},i.m?(i.u||(i.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,a)):(i.u="GET",i.g.ea(i.A,i.u,null,a)),Ne(),Il(i.i,i.u,i.A,i.l,i.R,i.m)}Mt.prototype.ca=function(i){i=i.target;const a=this.M;a&&Nt(i)==3?a.j():this.Y(i)},Mt.prototype.Y=function(i){try{if(i==this.g)t:{const ut=Nt(this.g);var a=this.g.Ba();const pe=this.g.Z();if(!(3>ut)&&(ut!=3||this.g&&(this.h.h||this.g.oa()||fs(this.g)))){this.J||ut!=4||a==7||(a==8||0>=pe?Ne(3):Ne(2)),wr(this);var u=this.g.Z();this.X=u;e:if(Ki(this)){var h=fs(this.g);i="";var E=h.length,A=Nt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Qt(this),xe(this);var P="";break e}this.h.i=new c.TextDecoder}for(a=0;a<E;a++)this.h.h=!0,i+=this.h.i.decode(h[a],{stream:!(A&&a==E-1)});h.length=0,this.h.g+=i,this.C=0,P=this.h.g}else P=this.g.oa();if(this.o=u==200,Al(this.i,this.u,this.A,this.l,this.R,ut,u),this.o){if(this.T&&!this.K){e:{if(this.g){var U,et=this.g;if((U=et.g?et.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!H(U)){var B=U;break e}}B=null}if(u=B)he(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,br(this,u);else{this.o=!1,this.s=3,mt(12),Qt(this),xe(this);break t}}if(this.P){u=!0;let Tt;for(;!this.J&&this.C<P.length;)if(Tt=Rl(this,P),Tt==Ir){ut==4&&(this.s=4,mt(14),u=!1),he(this.i,this.l,null,"[Incomplete Response]");break}else if(Tt==zi){this.s=4,mt(15),he(this.i,this.l,P,"[Invalid Chunk]"),u=!1;break}else he(this.i,this.l,Tt,null),br(this,Tt);if(Ki(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ut!=4||P.length!=0||this.h.h||(this.s=1,mt(16),u=!1),this.o=this.o&&u,!u)he(this.i,this.l,P,"[Invalid Chunked Response]"),Qt(this),xe(this);else if(0<P.length&&!this.W){this.W=!0;var lt=this.j;lt.g==this&&lt.ba&&!lt.M&&(lt.j.info("Great, no buffering proxy detected. Bytes received: "+P.length),Vr(lt),lt.M=!0,mt(11))}}else he(this.i,this.l,P,null),br(this,P);ut==4&&Qt(this),this.o&&!this.J&&(ut==4?Es(this.j,this):(this.o=!1,gn(this)))}else ql(this.g),u==400&&0<P.indexOf("Unknown SID")?(this.s=3,mt(12)):(this.s=0,mt(13)),Qt(this),xe(this)}}}catch{}finally{}};function Ki(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function Rl(i,a){var u=i.C,h=a.indexOf(`
`,u);return h==-1?Ir:(u=Number(a.substring(u,h)),isNaN(u)?zi:(h+=1,h+u>a.length?Ir:(a=a.slice(h,h+u),i.C=h+u,a)))}Mt.prototype.cancel=function(){this.J=!0,Qt(this)};function gn(i){i.S=Date.now()+i.I,Wi(i,i.I)}function Wi(i,a){if(i.B!=null)throw Error("WatchDog timer not null");i.B=Ve(S(i.ba,i),a)}function wr(i){i.B&&(c.clearTimeout(i.B),i.B=null)}Mt.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(wl(this.i,this.A),this.L!=2&&(Ne(),mt(17)),Qt(this),this.s=2,xe(this)):Wi(this,this.S-i)};function xe(i){i.j.G==0||i.J||Es(i.j,i)}function Qt(i){wr(i);var a=i.M;a&&typeof a.ma=="function"&&a.ma(),i.M=null,Mi(i.U),i.g&&(a=i.g,i.g=null,a.abort(),a.ma())}function br(i,a){try{var u=i.j;if(u.G!=0&&(u.g==i||Rr(u.h,i))){if(!i.K&&Rr(u.h,i)&&u.G==3){try{var h=u.Da.g.parse(a)}catch{h=null}if(Array.isArray(h)&&h.length==3){var E=h;if(E[0]==0){t:if(!u.u){if(u.g)if(u.g.F+3e3<i.F)wn(u),In(u);else break t;Nr(u),mt(18)}}else u.za=E[1],0<u.za-u.T&&37500>E[2]&&u.F&&u.v==0&&!u.C&&(u.C=Ve(S(u.Za,u),6e3));if(1>=Yi(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else Yt(u,11)}else if((i.K||u.g==i)&&wn(u),!H(a))for(E=u.Da.g.parse(a),a=0;a<E.length;a++){let B=E[a];if(u.T=B[0],B=B[1],u.G==2)if(B[0]=="c"){u.K=B[1],u.ia=B[2];const lt=B[3];lt!=null&&(u.la=lt,u.j.info("VER="+u.la));const ut=B[4];ut!=null&&(u.Aa=ut,u.j.info("SVER="+u.Aa));const pe=B[5];pe!=null&&typeof pe=="number"&&0<pe&&(h=1.5*pe,u.L=h,u.j.info("backChannelRequestTimeoutMs_="+h)),h=u;const Tt=i.g;if(Tt){const Rn=Tt.g?Tt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Rn){var A=h.h;A.g||Rn.indexOf("spdy")==-1&&Rn.indexOf("quic")==-1&&Rn.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(Sr(A,A.h),A.h=null))}if(h.D){const Dr=Tt.g?Tt.g.getResponseHeader("X-HTTP-Session-Id"):null;Dr&&(h.ya=Dr,q(h.I,h.D,Dr))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-i.F,u.j.info("Handshake RTT: "+u.R+"ms")),h=u;var P=i;if(h.qa=As(h,h.J?h.ia:null,h.W),P.K){Ji(h.h,P);var U=P,et=h.L;et&&(U.I=et),U.B&&(wr(U),gn(U)),h.g=P}else _s(h);0<u.i.length&&An(u)}else B[0]!="stop"&&B[0]!="close"||Yt(u,7);else u.G==3&&(B[0]=="stop"||B[0]=="close"?B[0]=="stop"?Yt(u,7):Cr(u):B[0]!="noop"&&u.l&&u.l.ta(B),u.v=0)}}Ne(4)}catch{}}var Sl=class{constructor(i,a){this.g=i,this.map=a}};function Qi(i){this.l=i||10,c.PerformanceNavigationTiming?(i=c.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Xi(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Yi(i){return i.h?1:i.g?i.g.size:0}function Rr(i,a){return i.h?i.h==a:i.g?i.g.has(a):!1}function Sr(i,a){i.g?i.g.add(a):i.h=a}function Ji(i,a){i.h&&i.h==a?i.h=null:i.g&&i.g.has(a)&&i.g.delete(a)}Qi.prototype.cancel=function(){if(this.i=Zi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Zi(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let a=i.i;for(const u of i.g.values())a=a.concat(u.D);return a}return O(i.i)}function Pl(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(d(i)){for(var a=[],u=i.length,h=0;h<u;h++)a.push(i[h]);return a}a=[],u=0;for(h in i)a[u++]=i[h];return a}function Cl(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(d(i)||typeof i=="string"){var a=[];i=i.length;for(var u=0;u<i;u++)a.push(u);return a}a=[],u=0;for(const h in i)a[u++]=h;return a}}}function ts(i,a){if(i.forEach&&typeof i.forEach=="function")i.forEach(a,void 0);else if(d(i)||typeof i=="string")Array.prototype.forEach.call(i,a,void 0);else for(var u=Cl(i),h=Pl(i),E=h.length,A=0;A<E;A++)a.call(void 0,h[A],u&&u[A],i)}var es=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Nl(i,a){if(i){i=i.split("&");for(var u=0;u<i.length;u++){var h=i[u].indexOf("="),E=null;if(0<=h){var A=i[u].substring(0,h);E=i[u].substring(h+1)}else A=i[u];a(A,E?decodeURIComponent(E.replace(/\+/g," ")):"")}}}function Xt(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof Xt){this.h=i.h,yn(this,i.j),this.o=i.o,this.g=i.g,_n(this,i.s),this.l=i.l;var a=i.i,u=new Me;u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),ns(this,u),this.m=i.m}else i&&(a=String(i).match(es))?(this.h=!1,yn(this,a[1]||"",!0),this.o=ke(a[2]||""),this.g=ke(a[3]||"",!0),_n(this,a[4]),this.l=ke(a[5]||"",!0),ns(this,a[6]||"",!0),this.m=ke(a[7]||"")):(this.h=!1,this.i=new Me(null,this.h))}Xt.prototype.toString=function(){var i=[],a=this.j;a&&i.push(Oe(a,rs,!0),":");var u=this.g;return(u||a=="file")&&(i.push("//"),(a=this.o)&&i.push(Oe(a,rs,!0),"@"),i.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&i.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&i.push("/"),i.push(Oe(u,u.charAt(0)=="/"?xl:Dl,!0))),(u=this.i.toString())&&i.push("?",u),(u=this.m)&&i.push("#",Oe(u,Ol)),i.join("")};function Ct(i){return new Xt(i)}function yn(i,a,u){i.j=u?ke(a,!0):a,i.j&&(i.j=i.j.replace(/:$/,""))}function _n(i,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);i.s=a}else i.s=null}function ns(i,a,u){a instanceof Me?(i.i=a,Ml(i.i,i.h)):(u||(a=Oe(a,kl)),i.i=new Me(a,i.h))}function q(i,a,u){i.i.set(a,u)}function vn(i){return q(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function ke(i,a){return i?a?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Oe(i,a,u){return typeof i=="string"?(i=encodeURI(i).replace(a,Vl),u&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Vl(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var rs=/[#\/\?@]/g,Dl=/[#\?:]/g,xl=/[#\?]/g,kl=/[#\?@]/g,Ol=/#/g;function Me(i,a){this.h=this.g=null,this.i=i||null,this.j=!!a}function Lt(i){i.g||(i.g=new Map,i.h=0,i.i&&Nl(i.i,function(a,u){i.add(decodeURIComponent(a.replace(/\+/g," ")),u)}))}n=Me.prototype,n.add=function(i,a){Lt(this),this.i=null,i=de(this,i);var u=this.g.get(i);return u||this.g.set(i,u=[]),u.push(a),this.h+=1,this};function is(i,a){Lt(i),a=de(i,a),i.g.has(a)&&(i.i=null,i.h-=i.g.get(a).length,i.g.delete(a))}function ss(i,a){return Lt(i),a=de(i,a),i.g.has(a)}n.forEach=function(i,a){Lt(this),this.g.forEach(function(u,h){u.forEach(function(E){i.call(a,E,h,this)},this)},this)},n.na=function(){Lt(this);const i=Array.from(this.g.values()),a=Array.from(this.g.keys()),u=[];for(let h=0;h<a.length;h++){const E=i[h];for(let A=0;A<E.length;A++)u.push(a[h])}return u},n.V=function(i){Lt(this);let a=[];if(typeof i=="string")ss(this,i)&&(a=a.concat(this.g.get(de(this,i))));else{i=Array.from(this.g.values());for(let u=0;u<i.length;u++)a=a.concat(i[u])}return a},n.set=function(i,a){return Lt(this),this.i=null,i=de(this,i),ss(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[a]),this.h+=1,this},n.get=function(i,a){return i?(i=this.V(i),0<i.length?String(i[0]):a):a};function os(i,a,u){is(i,a),0<u.length&&(i.i=null,i.g.set(de(i,a),O(u)),i.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],a=Array.from(this.g.keys());for(var u=0;u<a.length;u++){var h=a[u];const A=encodeURIComponent(String(h)),P=this.V(h);for(h=0;h<P.length;h++){var E=A;P[h]!==""&&(E+="="+encodeURIComponent(String(P[h]))),i.push(E)}}return this.i=i.join("&")};function de(i,a){return a=String(a),i.j&&(a=a.toLowerCase()),a}function Ml(i,a){a&&!i.j&&(Lt(i),i.i=null,i.g.forEach(function(u,h){var E=h.toLowerCase();h!=E&&(is(this,h),os(this,E,u))},i)),i.j=a}function Ll(i,a){const u=new De;if(c.Image){const h=new Image;h.onload=C(Ft,u,"TestLoadImage: loaded",!0,a,h),h.onerror=C(Ft,u,"TestLoadImage: error",!1,a,h),h.onabort=C(Ft,u,"TestLoadImage: abort",!1,a,h),h.ontimeout=C(Ft,u,"TestLoadImage: timeout",!1,a,h),c.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=i}else a(!1)}function Fl(i,a){const u=new De,h=new AbortController,E=setTimeout(()=>{h.abort(),Ft(u,"TestPingServer: timeout",!1,a)},1e4);fetch(i,{signal:h.signal}).then(A=>{clearTimeout(E),A.ok?Ft(u,"TestPingServer: ok",!0,a):Ft(u,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(E),Ft(u,"TestPingServer: error",!1,a)})}function Ft(i,a,u,h,E){try{E&&(E.onload=null,E.onerror=null,E.onabort=null,E.ontimeout=null),h(u)}catch{}}function Bl(){this.g=new Tl}function Ul(i,a,u){const h=u||"";try{ts(i,function(E,A){let P=E;f(E)&&(P=yr(E)),a.push(h+A+"="+encodeURIComponent(P))})}catch(E){throw a.push(h+"type="+encodeURIComponent("_badmap")),E}}function Le(i){this.l=i.Ub||null,this.j=i.eb||!1}N(Le,_r),Le.prototype.g=function(){return new En(this.l,this.j)},Le.prototype.i=function(i){return function(){return i}}({});function En(i,a){at.call(this),this.D=i,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(En,at),n=En.prototype,n.open=function(i,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=a,this.readyState=1,Be(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(a.body=i),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fe(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Be(this)),this.g&&(this.readyState=3,Be(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;as(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function as(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var a=i.value?i.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!i.done}))&&(this.response=this.responseText+=a)}i.done?Fe(this):Be(this),this.readyState==3&&as(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,Fe(this))},n.Qa=function(i){this.g&&(this.response=i,Fe(this))},n.ga=function(){this.g&&Fe(this)};function Fe(i){i.readyState=4,i.l=null,i.j=null,i.v=null,Be(i)}n.setRequestHeader=function(i,a){this.u.append(i,a)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],a=this.h.entries();for(var u=a.next();!u.done;)u=u.value,i.push(u[0]+": "+u[1]),u=a.next();return i.join(`\r
`)};function Be(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(En.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function ls(i){let a="";return gt(i,function(u,h){a+=h,a+=":",a+=u,a+=`\r
`}),a}function Pr(i,a,u){t:{for(h in u){var h=!1;break t}h=!0}h||(u=ls(u),typeof i=="string"?u!=null&&encodeURIComponent(String(u)):q(i,a,u))}function K(i){at.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(K,at);var $l=/^https?$/i,jl=["POST","PUT"];n=K.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,a,u,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);a=a?a.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Tr.g(),this.v=this.o?Li(this.o):Li(Tr),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(a,String(i),!0),this.B=!1}catch(A){us(this,A);return}if(i=u||"",u=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var E in h)u.set(E,h[E]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const A of h.keys())u.set(A,h.get(A));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(u.keys()).find(A=>A.toLowerCase()=="content-type"),E=c.FormData&&i instanceof c.FormData,!(0<=Array.prototype.indexOf.call(jl,a,void 0))||h||E||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,P]of u)this.g.setRequestHeader(A,P);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ds(this),this.u=!0,this.g.send(i),this.u=!1}catch(A){us(this,A)}};function us(i,a){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=a,i.m=5,cs(i),Tn(i)}function cs(i){i.A||(i.A=!0,pt(i,"complete"),pt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,pt(this,"complete"),pt(this,"abort"),Tn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Tn(this,!0)),K.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?hs(this):this.bb())},n.bb=function(){hs(this)};function hs(i){if(i.h&&typeof l<"u"&&(!i.v[1]||Nt(i)!=4||i.Z()!=2)){if(i.u&&Nt(i)==4)xi(i.Ea,0,i);else if(pt(i,"readystatechange"),Nt(i)==4){i.h=!1;try{const P=i.Z();t:switch(P){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var u;if(!(u=a)){var h;if(h=P===0){var E=String(i.D).match(es)[1]||null;!E&&c.self&&c.self.location&&(E=c.self.location.protocol.slice(0,-1)),h=!$l.test(E?E.toLowerCase():"")}u=h}if(u)pt(i,"complete"),pt(i,"success");else{i.m=6;try{var A=2<Nt(i)?i.g.statusText:""}catch{A=""}i.l=A+" ["+i.Z()+"]",cs(i)}}finally{Tn(i)}}}}function Tn(i,a){if(i.g){ds(i);const u=i.g,h=i.v[0]?()=>{}:null;i.g=null,i.v=null,a||pt(i,"ready");try{u.onreadystatechange=h}catch{}}}function ds(i){i.I&&(c.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Nt(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Nt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var a=this.g.responseText;return i&&a.indexOf(i)==0&&(a=a.substring(i.length)),El(a)}};function fs(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function ql(i){const a={};i=(i.g&&2<=Nt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<i.length;h++){if(H(i[h]))continue;var u=_(i[h]);const E=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const A=a[E]||[];a[E]=A,A.push(u)}v(a,function(h){return h.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ue(i,a,u){return u&&u.internalChannelParams&&u.internalChannelParams[i]||a}function ps(i){this.Aa=0,this.i=[],this.j=new De,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ue("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ue("baseRetryDelayMs",5e3,i),this.cb=Ue("retryDelaySeedMs",1e4,i),this.Wa=Ue("forwardChannelMaxRetries",2,i),this.wa=Ue("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new Qi(i&&i.concurrentRequestLimit),this.Da=new Bl,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ps.prototype,n.la=8,n.G=1,n.connect=function(i,a,u,h){mt(0),this.W=i,this.H=a||{},u&&h!==void 0&&(this.H.OSID=u,this.H.OAID=h),this.F=this.X,this.I=As(this,null,this.W),An(this)};function Cr(i){if(ms(i),i.G==3){var a=i.U++,u=Ct(i.I);if(q(u,"SID",i.K),q(u,"RID",a),q(u,"TYPE","terminate"),$e(i,u),a=new Mt(i,i.j,a),a.L=2,a.v=vn(Ct(u)),u=!1,c.navigator&&c.navigator.sendBeacon)try{u=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!u&&c.Image&&(new Image().src=a.v,u=!0),u||(a.g=ws(a.j,null),a.g.ea(a.v)),a.F=Date.now(),gn(a)}Is(i)}function In(i){i.g&&(Vr(i),i.g.cancel(),i.g=null)}function ms(i){In(i),i.u&&(c.clearTimeout(i.u),i.u=null),wn(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&c.clearTimeout(i.s),i.s=null)}function An(i){if(!Xi(i.h)&&!i.s){i.s=!0;var a=i.Ga;be||Pi(),Re||(be(),Re=!0),ur.add(a,i),i.B=0}}function Hl(i,a){return Yi(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=a.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=Ve(S(i.Ga,i,a),Ts(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const E=new Mt(this,this.j,i);let A=this.o;if(this.S&&(A?(A=p(A),y(A,this.S)):A=this.S),this.m!==null||this.O||(E.H=A,A=null),this.P)t:{for(var a=0,u=0;u<this.i.length;u++){e:{var h=this.i[u];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break e}h=void 0}if(h===void 0)break;if(a+=h,4096<a){a=u;break t}if(a===4096||u===this.i.length-1){a=u+1;break t}}a=1e3}else a=1e3;a=ys(this,E,a),u=Ct(this.I),q(u,"RID",i),q(u,"CVER",22),this.D&&q(u,"X-HTTP-Session-Id",this.D),$e(this,u),A&&(this.O?a="headers="+encodeURIComponent(String(ls(A)))+"&"+a:this.m&&Pr(u,this.m,A)),Sr(this.h,E),this.Ua&&q(u,"TYPE","init"),this.P?(q(u,"$req",a),q(u,"SID","null"),E.T=!0,Ar(E,u,null)):Ar(E,u,a),this.G=2}}else this.G==3&&(i?gs(this,i):this.i.length==0||Xi(this.h)||gs(this))};function gs(i,a){var u;a?u=a.l:u=i.U++;const h=Ct(i.I);q(h,"SID",i.K),q(h,"RID",u),q(h,"AID",i.T),$e(i,h),i.m&&i.o&&Pr(h,i.m,i.o),u=new Mt(i,i.j,u,i.B+1),i.m===null&&(u.H=i.o),a&&(i.i=a.D.concat(i.i)),a=ys(i,u,1e3),u.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),Sr(i.h,u),Ar(u,h,a)}function $e(i,a){i.H&&gt(i.H,function(u,h){q(a,h,u)}),i.l&&ts({},function(u,h){q(a,h,u)})}function ys(i,a,u){u=Math.min(i.i.length,u);var h=i.l?S(i.l.Na,i.l,i):null;t:{var E=i.i;let A=-1;for(;;){const P=["count="+u];A==-1?0<u?(A=E[0].g,P.push("ofs="+A)):A=0:P.push("ofs="+A);let U=!0;for(let et=0;et<u;et++){let B=E[et].g;const lt=E[et].map;if(B-=A,0>B)A=Math.max(0,E[et].g-100),U=!1;else try{Ul(lt,P,"req"+B+"_")}catch{h&&h(lt)}}if(U){h=P.join("&");break t}}}return i=i.i.splice(0,u),a.D=i,h}function _s(i){if(!i.g&&!i.u){i.Y=1;var a=i.Fa;be||Pi(),Re||(be(),Re=!0),ur.add(a,i),i.v=0}}function Nr(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=Ve(S(i.Fa,i),Ts(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,vs(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=Ve(S(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,mt(10),In(this),vs(this))};function Vr(i){i.A!=null&&(c.clearTimeout(i.A),i.A=null)}function vs(i){i.g=new Mt(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var a=Ct(i.qa);q(a,"RID","rpc"),q(a,"SID",i.K),q(a,"AID",i.T),q(a,"CI",i.F?"0":"1"),!i.F&&i.ja&&q(a,"TO",i.ja),q(a,"TYPE","xmlhttp"),$e(i,a),i.m&&i.o&&Pr(a,i.m,i.o),i.L&&(i.g.I=i.L);var u=i.g;i=i.ia,u.L=1,u.v=vn(Ct(a)),u.m=null,u.P=!0,Gi(u,i)}n.Za=function(){this.C!=null&&(this.C=null,In(this),Nr(this),mt(19))};function wn(i){i.C!=null&&(c.clearTimeout(i.C),i.C=null)}function Es(i,a){var u=null;if(i.g==a){wn(i),Vr(i),i.g=null;var h=2}else if(Rr(i.h,a))u=a.D,Ji(i.h,a),h=1;else return;if(i.G!=0){if(a.o)if(h==1){u=a.m?a.m.length:0,a=Date.now()-a.F;var E=i.B;h=fn(),pt(h,new ji(h,u)),An(i)}else _s(i);else if(E=a.s,E==3||E==0&&0<a.X||!(h==1&&Hl(i,a)||h==2&&Nr(i)))switch(u&&0<u.length&&(a=i.h,a.i=a.i.concat(u)),E){case 1:Yt(i,5);break;case 4:Yt(i,10);break;case 3:Yt(i,6);break;default:Yt(i,2)}}}function Ts(i,a){let u=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(u*=2),u*a}function Yt(i,a){if(i.j.info("Error code "+a),a==2){var u=S(i.fb,i),h=i.Xa;const E=!h;h=new Xt(h||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||yn(h,"https"),vn(h),E?Ll(h.toString(),u):Fl(h.toString(),u)}else mt(2);i.G=0,i.l&&i.l.sa(a),Is(i),ms(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),mt(2)):(this.j.info("Failed to ping google.com"),mt(1))};function Is(i){if(i.G=0,i.ka=[],i.l){const a=Zi(i.h);(a.length!=0||i.i.length!=0)&&(D(i.ka,a),D(i.ka,i.i),i.h.i.length=0,O(i.i),i.i.length=0),i.l.ra()}}function As(i,a,u){var h=u instanceof Xt?Ct(u):new Xt(u);if(h.g!="")a&&(h.g=a+"."+h.g),_n(h,h.s);else{var E=c.location;h=E.protocol,a=a?a+"."+E.hostname:E.hostname,E=+E.port;var A=new Xt(null);h&&yn(A,h),a&&(A.g=a),E&&_n(A,E),u&&(A.l=u),h=A}return u=i.D,a=i.ya,u&&a&&q(h,u,a),q(h,"VER",i.la),$e(i,h),h}function ws(i,a,u){if(a&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=i.Ca&&!i.pa?new K(new Le({eb:u})):new K(i.pa),a.Ha(i.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function bs(){}n=bs.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function bn(){}bn.prototype.g=function(i,a){return new vt(i,a)};function vt(i,a){at.call(this),this.g=new ps(a),this.l=i,this.h=a&&a.messageUrlParams||null,i=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(i?i["X-WebChannel-Content-Type"]=a.messageContentType:i={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(i?i["X-WebChannel-Client-Profile"]=a.va:i={"X-WebChannel-Client-Profile":a.va}),this.g.S=i,(i=a&&a.Sb)&&!H(i)&&(this.g.m=i),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!H(a)&&(this.g.D=a,i=this.h,i!==null&&a in i&&(i=this.h,a in i&&delete i[a])),this.j=new fe(this)}N(vt,at),vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},vt.prototype.close=function(){Cr(this.g)},vt.prototype.o=function(i){var a=this.g;if(typeof i=="string"){var u={};u.__data__=i,i=u}else this.u&&(u={},u.__data__=yr(i),i=u);a.i.push(new Sl(a.Ya++,i)),a.G==3&&An(a)},vt.prototype.N=function(){this.g.l=null,delete this.j,Cr(this.g),delete this.g,vt.aa.N.call(this)};function Rs(i){vr.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var a=i.__sm__;if(a){t:{for(const u in a){i=u;break t}i=void 0}(this.i=i)&&(i=this.i,a=a!==null&&i in a?a[i]:void 0),this.data=a}else this.data=i}N(Rs,vr);function Ss(){Er.call(this),this.status=1}N(Ss,Er);function fe(i){this.g=i}N(fe,bs),fe.prototype.ua=function(){pt(this.g,"a")},fe.prototype.ta=function(i){pt(this.g,new Rs(i))},fe.prototype.sa=function(i){pt(this.g,new Ss)},fe.prototype.ra=function(){pt(this.g,"b")},bn.prototype.createWebChannel=bn.prototype.g,vt.prototype.send=vt.prototype.o,vt.prototype.open=vt.prototype.m,vt.prototype.close=vt.prototype.close,ua=function(){return new bn},la=function(){return fn()},aa=Wt,Qr={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},pn.NO_ERROR=0,pn.TIMEOUT=8,pn.HTTP_ERROR=6,Dn=pn,qi.COMPLETE="complete",oa=qi,Fi.EventType=Ce,Ce.OPEN="a",Ce.CLOSE="b",Ce.ERROR="c",Ce.MESSAGE="d",at.prototype.listen=at.prototype.K,He=Fi,sa=Le,K.prototype.listenOnce=K.prototype.L,K.prototype.getLastError=K.prototype.Ka,K.prototype.getLastErrorCode=K.prototype.Ba,K.prototype.getStatus=K.prototype.Z,K.prototype.getResponseJson=K.prototype.Oa,K.prototype.getResponseText=K.prototype.oa,K.prototype.send=K.prototype.ea,K.prototype.setWithCredentials=K.prototype.Ha,ia=K}).apply(typeof Sn<"u"?Sn:typeof self<"u"?self:typeof window<"u"?window:{});const Ws="@firebase/firestore";/**
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
 */class ht{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ht.UNAUTHENTICATED=new ht(null),ht.GOOGLE_CREDENTIALS=new ht("google-credentials-uid"),ht.FIRST_PARTY=new ht("first-party-uid"),ht.MOCK_USER=new ht("mock-user");/**
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
 */let Ie="10.13.1";/**
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
 */const ae=new ii("@firebase/firestore");function je(){return ae.logLevel}function V(n,...t){if(ae.logLevel<=F.DEBUG){const e=t.map(hi);ae.debug(`Firestore (${Ie}): ${n}`,...e)}}function le(n,...t){if(ae.logLevel<=F.ERROR){const e=t.map(hi);ae.error(`Firestore (${Ie}): ${n}`,...e)}}function Un(n,...t){if(ae.logLevel<=F.WARN){const e=t.map(hi);ae.warn(`Firestore (${Ie}): ${n}`,...e)}}function hi(n){if(typeof n=="string")return n;try{/**
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
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
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
 */function M(n="Unexpected state"){const t=`FIRESTORE (${Ie}) INTERNAL ASSERTION FAILED: `+n;throw le(t),new Error(t)}function Y(n,t){n||M()}function j(n,t){return n}/**
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
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends Gt{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ne{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class ca{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class jh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(ht.UNAUTHENTICATED))}shutdown(){}}class qh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Hh{constructor(t){this.t=t,this.currentUser=ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const s=d=>this.i!==r?(r=this.i,e(d)):Promise.resolve();let o=new ne;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ne,t.enqueueRetryable(()=>s(this.currentUser))};const l=()=>{const d=o;t.enqueueRetryable(async()=>{await d.promise,await s(this.currentUser)})},c=d=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.auth.addAuthTokenListener(this.o),l()};this.t.onInit(d=>c(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?c(d):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ne)}},0),l()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Y(typeof r.accessToken=="string"),new ca(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Y(t===null||typeof t=="string"),new ht(t)}}class zh{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=ht.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Gh{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new zh(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(ht.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Kh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Wh{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=o=>{o.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const l=o.token!==this.R;return this.R=o.token,V("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(Y(typeof e.token=="string"),this.R=e.token,new Kh(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Qh(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class ha{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=Qh(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%t.length))}return r}}function $(n,t){return n<t?-1:n>t?1:0}function ye(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
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
 */class tt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new x(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new x(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new x(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new x(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return tt.fromMillis(Date.now())}static fromDate(t){return tt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new tt(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?$(this.nanoseconds,t.nanoseconds):$(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class z{constructor(t){this.timestamp=t}static fromTimestamp(t){return new z(t)}static min(){return new z(new tt(0,0))}static max(){return new z(new tt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ye{constructor(t,e,r){e===void 0?e=0:e>t.length&&M(),r===void 0?r=t.length-e:r>t.length-e&&M(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Ye.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ye?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=t.get(s),l=e.get(s);if(o<l)return-1;if(o>l)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class W extends Ye{construct(t,e,r){return new W(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new x(R.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new W(e)}static emptyPath(){return new W([])}}const Xh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends Ye{construct(t,e,r){return new it(t,e,r)}static isValidIdentifier(t){return Xh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new it(["__name__"])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new x(R.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let l=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new x(R.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const d=t[s+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new x(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=d,s+=2}else c==="`"?(l=!l,s++):c!=="."||l?(r+=c,s++):(o(),s++)}if(o(),l)throw new x(R.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new it(e)}static emptyPath(){return new it([])}}/**
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
 */class k{constructor(t){this.path=t}static fromPath(t){return new k(W.fromString(t))}static fromName(t){return new k(W.fromString(t).popFirst(5))}static empty(){return new k(W.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&W.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return W.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new k(new W(t.slice()))}}function Yh(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=z.fromTimestamp(r===1e9?new tt(e+1,0):new tt(e,r));return new qt(s,k.empty(),t)}function Jh(n){return new qt(n.readTime,n.key,-1)}class qt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new qt(z.min(),k.empty(),-1)}static max(){return new qt(z.max(),k.empty(),-1)}}function Zh(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=k.comparator(n.documentKey,t.documentKey),e!==0?e:$(n.largestBatchId,t.largestBatchId))}/**
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
 */const td="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ed{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function da(n){if(n.code!==R.FAILED_PRECONDITION||n.message!==td)throw n;V("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class b{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new b((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof b?e:b.resolve(e)}catch(e){return b.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):b.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):b.reject(e)}static resolve(t){return new b((e,r)=>{e(t)})}static reject(t){return new b((e,r)=>{r(t)})}static waitFor(t){return new b((e,r)=>{let s=0,o=0,l=!1;t.forEach(c=>{++s,c.next(()=>{++o,l&&o===s&&e()},d=>r(d))}),l=!0,o===s&&e()})}static or(t){let e=b.resolve(!1);for(const r of t)e=e.next(s=>s?b.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new b((r,s)=>{const o=t.length,l=new Array(o);let c=0;for(let d=0;d<o;d++){const f=d;e(t[f]).next(I=>{l[f]=I,++c,c===o&&r(l)},I=>s(I))}})}static doWhile(t,e){return new b((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function nd(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Zn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class fa{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}fa.oe=-1;function di(n){return n==null}function $n(n){return n===0&&1/n==-1/0}function rd(n){return typeof n=="number"&&Number.isInteger(n)&&!$n(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Qs(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function sn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function pa(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class _t{constructor(t,e){this.comparator=t,this.root=e||nt.EMPTY}insert(t,e){return new _t(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,nt.BLACK,null,null))}remove(t){return new _t(this.comparator,this.root.remove(t,this.comparator).copy(null,null,nt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Pn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Pn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Pn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Pn(this.root,t,this.comparator,!0)}}class Pn{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class nt{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??nt.RED,this.left=s??nt.EMPTY,this.right=o??nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new nt(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return nt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return nt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();const t=this.left.check();if(t!==this.right.check())throw M();return t+(this.isRed()?0:1)}}nt.EMPTY=null,nt.RED=!0,nt.BLACK=!1;nt.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(t,e,r,s,o){return this}insert(t,e,r){return new nt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ft{constructor(t){this.comparator=t,this.data=new _t(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Xs(this.data.getIterator())}getIteratorFrom(t){return new Xs(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof ft)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ft(this.comparator);return e.data=t,e}}class Xs{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class wt{constructor(t){this.fields=t,t.sort(it.comparator)}static empty(){return new wt([])}unionWith(t){let e=new ft(it.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new wt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ye(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class id extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Rt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new id("Invalid base64 string: "+o):o}}(t);return new Rt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let l=0;l<s.length;++l)o+=String.fromCharCode(s[l]);return o}(t);return new Rt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return $(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Rt.EMPTY_BYTE_STRING=new Rt("");const sd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ue(n){if(Y(!!n),typeof n=="string"){let t=0;const e=sd.exec(n);if(Y(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:rt(n.seconds),nanos:rt(n.nanos)}}function rt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Je(n){return typeof n=="string"?Rt.fromBase64String(n):Rt.fromUint8Array(n)}/**
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
 */function fi(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function ma(n){const t=n.mapValue.fields.__previous_value__;return fi(t)?ma(t):t}function jn(n){const t=ue(n.mapValue.fields.__local_write_time__.timestampValue);return new tt(t.seconds,t.nanos)}/**
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
 */class od{constructor(t,e,r,s,o,l,c,d,f){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=l,this.autoDetectLongPolling=c,this.longPollingOptions=d,this.useFetchStreams=f}}class qn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new qn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof qn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Cn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function _e(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?fi(n)?4:ld(n)?9007199254740991:ad(n)?10:11:M()}function St(n,t){if(n===t)return!0;const e=_e(n);if(e!==_e(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return jn(n).isEqual(jn(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const l=ue(s.timestampValue),c=ue(o.timestampValue);return l.seconds===c.seconds&&l.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return Je(s.bytesValue).isEqual(Je(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return rt(s.geoPointValue.latitude)===rt(o.geoPointValue.latitude)&&rt(s.geoPointValue.longitude)===rt(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return rt(s.integerValue)===rt(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const l=rt(s.doubleValue),c=rt(o.doubleValue);return l===c?$n(l)===$n(c):isNaN(l)&&isNaN(c)}return!1}(n,t);case 9:return ye(n.arrayValue.values||[],t.arrayValue.values||[],St);case 10:case 11:return function(s,o){const l=s.mapValue.fields||{},c=o.mapValue.fields||{};if(Qs(l)!==Qs(c))return!1;for(const d in l)if(l.hasOwnProperty(d)&&(c[d]===void 0||!St(l[d],c[d])))return!1;return!0}(n,t);default:return M()}}function Ze(n,t){return(n.values||[]).find(e=>St(e,t))!==void 0}function ve(n,t){if(n===t)return 0;const e=_e(n),r=_e(t);if(e!==r)return $(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return $(n.booleanValue,t.booleanValue);case 2:return function(o,l){const c=rt(o.integerValue||o.doubleValue),d=rt(l.integerValue||l.doubleValue);return c<d?-1:c>d?1:c===d?0:isNaN(c)?isNaN(d)?0:-1:1}(n,t);case 3:return Ys(n.timestampValue,t.timestampValue);case 4:return Ys(jn(n),jn(t));case 5:return $(n.stringValue,t.stringValue);case 6:return function(o,l){const c=Je(o),d=Je(l);return c.compareTo(d)}(n.bytesValue,t.bytesValue);case 7:return function(o,l){const c=o.split("/"),d=l.split("/");for(let f=0;f<c.length&&f<d.length;f++){const I=$(c[f],d[f]);if(I!==0)return I}return $(c.length,d.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,l){const c=$(rt(o.latitude),rt(l.latitude));return c!==0?c:$(rt(o.longitude),rt(l.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Js(n.arrayValue,t.arrayValue);case 10:return function(o,l){var c,d,f,I;const w=o.fields||{},S=l.fields||{},C=(c=w.value)===null||c===void 0?void 0:c.arrayValue,N=(d=S.value)===null||d===void 0?void 0:d.arrayValue,O=$(((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0,((I=N==null?void 0:N.values)===null||I===void 0?void 0:I.length)||0);return O!==0?O:Js(C,N)}(n.mapValue,t.mapValue);case 11:return function(o,l){if(o===Cn.mapValue&&l===Cn.mapValue)return 0;if(o===Cn.mapValue)return 1;if(l===Cn.mapValue)return-1;const c=o.fields||{},d=Object.keys(c),f=l.fields||{},I=Object.keys(f);d.sort(),I.sort();for(let w=0;w<d.length&&w<I.length;++w){const S=$(d[w],I[w]);if(S!==0)return S;const C=ve(c[d[w]],f[I[w]]);if(C!==0)return C}return $(d.length,I.length)}(n.mapValue,t.mapValue);default:throw M()}}function Ys(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return $(n,t);const e=ue(n),r=ue(t),s=$(e.seconds,r.seconds);return s!==0?s:$(e.nanos,r.nanos)}function Js(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=ve(e[s],r[s]);if(o)return o}return $(e.length,r.length)}function Ee(n){return Xr(n)}function Xr(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=ue(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Je(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return k.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=Xr(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const l of r)o?o=!1:s+=",",s+=`${l}:${Xr(e.fields[l])}`;return s+"}"}(n.mapValue):M()}function Yr(n){return!!n&&"integerValue"in n}function pi(n){return!!n&&"arrayValue"in n}function xn(n){return!!n&&"mapValue"in n}function ad(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function Ge(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return sn(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Ge(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Ge(n.arrayValue.values[e]);return t}return Object.assign({},n)}function ld(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class At{constructor(t){this.value=t}static empty(){return new At({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!xn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ge(e)}setAll(t){let e=it.emptyPath(),r={},s=[];t.forEach((l,c)=>{if(!e.isImmediateParentOf(c)){const d=this.getFieldsMap(e);this.applyChanges(d,r,s),r={},s=[],e=c.popLast()}l?r[c.lastSegment()]=Ge(l):s.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());xn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return St(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];xn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){sn(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new At(Ge(this.value))}}function ga(n){const t=[];return sn(n.fields,(e,r)=>{const s=new it([e]);if(xn(r)){const o=ga(r.mapValue).fields;if(o.length===0)t.push(s);else for(const l of o)t.push(s.child(l))}else t.push(s)}),new wt(t)}/**
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
 */class It{constructor(t,e,r,s,o,l,c){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=l,this.documentState=c}static newInvalidDocument(t){return new It(t,0,z.min(),z.min(),z.min(),At.empty(),0)}static newFoundDocument(t,e,r,s){return new It(t,1,e,z.min(),r,s,0)}static newNoDocument(t,e){return new It(t,2,e,z.min(),z.min(),At.empty(),0)}static newUnknownDocument(t,e){return new It(t,3,e,z.min(),z.min(),At.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof It&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new It(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Hn{constructor(t,e){this.position=t,this.inclusive=e}}function Zs(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],l=n.position[s];if(o.field.isKeyField()?r=k.comparator(k.fromName(l.referenceValue),e.key):r=ve(l,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function to(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!St(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class zn{constructor(t,e="asc"){this.field=t,this.dir=e}}function ud(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class ya{}class Z extends ya{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new hd(t,e,r):e==="array-contains"?new pd(t,r):e==="in"?new md(t,r):e==="not-in"?new gd(t,r):e==="array-contains-any"?new yd(t,r):new Z(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new dd(t,r):new fd(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(ve(e,this.value)):e!==null&&_e(this.value)===_e(e)&&this.matchesComparison(ve(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ht extends ya{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Ht(t,e)}matches(t){return _a(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function _a(n){return n.op==="and"}function va(n){return cd(n)&&_a(n)}function cd(n){for(const t of n.filters)if(t instanceof Ht)return!1;return!0}function Jr(n){if(n instanceof Z)return n.field.canonicalString()+n.op.toString()+Ee(n.value);if(va(n))return n.filters.map(t=>Jr(t)).join(",");{const t=n.filters.map(e=>Jr(e)).join(",");return`${n.op}(${t})`}}function Ea(n,t){return n instanceof Z?function(r,s){return s instanceof Z&&r.op===s.op&&r.field.isEqual(s.field)&&St(r.value,s.value)}(n,t):n instanceof Ht?function(r,s){return s instanceof Ht&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,l,c)=>o&&Ea(l,s.filters[c]),!0):!1}(n,t):void M()}function Ta(n){return n instanceof Z?function(e){return`${e.field.canonicalString()} ${e.op} ${Ee(e.value)}`}(n):n instanceof Ht?function(e){return e.op.toString()+" {"+e.getFilters().map(Ta).join(" ,")+"}"}(n):"Filter"}class hd extends Z{constructor(t,e,r){super(t,e,r),this.key=k.fromName(r.referenceValue)}matches(t){const e=k.comparator(t.key,this.key);return this.matchesComparison(e)}}class dd extends Z{constructor(t,e){super(t,"in",e),this.keys=Ia("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class fd extends Z{constructor(t,e){super(t,"not-in",e),this.keys=Ia("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Ia(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>k.fromName(r.referenceValue))}class pd extends Z{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return pi(e)&&Ze(e.arrayValue,this.value)}}class md extends Z{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Ze(this.value.arrayValue,e)}}class gd extends Z{constructor(t,e){super(t,"not-in",e)}matches(t){if(Ze(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Ze(this.value.arrayValue,e)}}class yd extends Z{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!pi(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Ze(this.value.arrayValue,r))}}/**
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
 */class _d{constructor(t,e=null,r=[],s=[],o=null,l=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=l,this.endAt=c,this.ue=null}}function eo(n,t=null,e=[],r=[],s=null,o=null,l=null){return new _d(n,t,e,r,s,o,l)}function mi(n){const t=j(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Jr(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),di(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Ee(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Ee(r)).join(",")),t.ue=e}return t.ue}function gi(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!ud(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Ea(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!to(n.startAt,t.startAt)&&to(n.endAt,t.endAt)}/**
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
 */class tr{constructor(t,e=null,r=[],s=[],o=null,l="F",c=null,d=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=l,this.startAt=c,this.endAt=d,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function vd(n,t,e,r,s,o,l,c){return new tr(n,t,e,r,s,o,l,c)}function Ed(n){return new tr(n)}function no(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Td(n){return n.collectionGroup!==null}function Ke(n){const t=j(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(l){let c=new ft(it.comparator);return l.filters.forEach(d=>{d.getFlattenedFilters().forEach(f=>{f.isInequality()&&(c=c.add(f.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new zn(o,r))}),e.has(it.keyField().canonicalString())||t.ce.push(new zn(it.keyField(),r))}return t.ce}function re(n){const t=j(n);return t.le||(t.le=Id(t,Ke(n))),t.le}function Id(n,t){if(n.limitType==="F")return eo(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new zn(s.field,o)});const e=n.endAt?new Hn(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Hn(n.startAt.position,n.startAt.inclusive):null;return eo(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Zr(n,t,e){return new tr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Aa(n,t){return gi(re(n),re(t))&&n.limitType===t.limitType}function wa(n){return`${mi(re(n))}|lt:${n.limitType}`}function qe(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>Ta(s)).join(", ")}]`),di(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(l){return`${l.field.canonicalString()} (${l.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>Ee(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>Ee(s)).join(",")),`Target(${r})`}(re(n))}; limitType=${n.limitType})`}function yi(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):k.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of Ke(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(l,c,d){const f=Zs(l,c,d);return l.inclusive?f<=0:f<0}(r.startAt,Ke(r),s)||r.endAt&&!function(l,c,d){const f=Zs(l,c,d);return l.inclusive?f>=0:f>0}(r.endAt,Ke(r),s))}(n,t)}function Ad(n){return(t,e)=>{let r=!1;for(const s of Ke(n)){const o=wd(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function wd(n,t,e){const r=n.field.isKeyField()?k.comparator(t.key,e.key):function(o,l,c){const d=l.data.field(o),f=c.data.field(o);return d!==null&&f!==null?ve(d,f):M()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return M()}}/**
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
 */class Ae{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){sn(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return pa(this.inner)}size(){return this.innerSize}}/**
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
 */const bd=new _t(k.comparator);function Gn(){return bd}const ba=new _t(k.comparator);function Nn(...n){let t=ba;for(const e of n)t=t.insert(e.key,e);return t}function Ra(n){let t=ba;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function ee(){return We()}function Sa(){return We()}function We(){return new Ae(n=>n.toString(),(n,t)=>n.isEqual(t))}const Rd=new _t(k.comparator),Sd=new ft(k.comparator);function dt(...n){let t=Sd;for(const e of n)t=t.add(e);return t}const Pd=new ft($);function Cd(){return Pd}/**
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
 */function _i(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$n(t)?"-0":t}}function Pa(n){return{integerValue:""+n}}function Nd(n,t){return rd(t)?Pa(t):_i(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class er{constructor(){this._=void 0}}function Vd(n,t,e){return n instanceof Kn?function(s,o){const l={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&fi(o)&&(o=ma(o)),o&&(l.fields.__previous_value__=o),{mapValue:l}}(e,t):n instanceof tn?Na(n,t):n instanceof en?Va(n,t):function(s,o){const l=Ca(s,o),c=ro(l)+ro(s.Pe);return Yr(l)&&Yr(s.Pe)?Pa(c):_i(s.serializer,c)}(n,t)}function Dd(n,t,e){return n instanceof tn?Na(n,t):n instanceof en?Va(n,t):e}function Ca(n,t){return n instanceof Wn?function(r){return Yr(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class Kn extends er{}class tn extends er{constructor(t){super(),this.elements=t}}function Na(n,t){const e=Da(t);for(const r of n.elements)e.some(s=>St(s,r))||e.push(r);return{arrayValue:{values:e}}}class en extends er{constructor(t){super(),this.elements=t}}function Va(n,t){let e=Da(t);for(const r of n.elements)e=e.filter(s=>!St(s,r));return{arrayValue:{values:e}}}class Wn extends er{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function ro(n){return rt(n.integerValue||n.doubleValue)}function Da(n){return pi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function xd(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof tn&&s instanceof tn||r instanceof en&&s instanceof en?ye(r.elements,s.elements,St):r instanceof Wn&&s instanceof Wn?St(r.Pe,s.Pe):r instanceof Kn&&s instanceof Kn}(n.transform,t.transform)}class kd{constructor(t,e){this.version=t,this.transformResults=e}}class Vt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Vt}static exists(t){return new Vt(void 0,t)}static updateTime(t){return new Vt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function kn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class nr{}function xa(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Oa(n.key,Vt.none()):new on(n.key,n.data,Vt.none());{const e=n.data,r=At.empty();let s=new ft(it.comparator);for(let o of t.fields)if(!s.has(o)){let l=e.field(o);l===null&&o.length>1&&(o=o.popLast(),l=e.field(o)),l===null?r.delete(o):r.set(o,l),s=s.add(o)}return new ce(n.key,r,new wt(s.toArray()),Vt.none())}}function Od(n,t,e){n instanceof on?function(s,o,l){const c=s.value.clone(),d=so(s.fieldTransforms,o,l.transformResults);c.setAll(d),o.convertToFoundDocument(l.version,c).setHasCommittedMutations()}(n,t,e):n instanceof ce?function(s,o,l){if(!kn(s.precondition,o))return void o.convertToUnknownDocument(l.version);const c=so(s.fieldTransforms,o,l.transformResults),d=o.data;d.setAll(ka(s)),d.setAll(c),o.convertToFoundDocument(l.version,d).setHasCommittedMutations()}(n,t,e):function(s,o,l){o.convertToNoDocument(l.version).setHasCommittedMutations()}(0,t,e)}function Qe(n,t,e,r){return n instanceof on?function(o,l,c,d){if(!kn(o.precondition,l))return c;const f=o.value.clone(),I=oo(o.fieldTransforms,d,l);return f.setAll(I),l.convertToFoundDocument(l.version,f).setHasLocalMutations(),null}(n,t,e,r):n instanceof ce?function(o,l,c,d){if(!kn(o.precondition,l))return c;const f=oo(o.fieldTransforms,d,l),I=l.data;return I.setAll(ka(o)),I.setAll(f),l.convertToFoundDocument(l.version,I).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(w=>w.field))}(n,t,e,r):function(o,l,c){return kn(o.precondition,l)?(l.convertToNoDocument(l.version).setHasLocalMutations(),null):c}(n,t,e)}function Md(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=Ca(r.transform,s||null);o!=null&&(e===null&&(e=At.empty()),e.set(r.field,o))}return e||null}function io(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ye(r,s,(o,l)=>xd(o,l))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class on extends nr{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ce extends nr{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function ka(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function so(n,t,e){const r=new Map;Y(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],l=o.transform,c=t.data.field(o.field);r.set(o.field,Dd(l,c,e[s]))}return r}function oo(n,t,e){const r=new Map;for(const s of n){const o=s.transform,l=e.data.field(s.field);r.set(s.field,Vd(o,l,t))}return r}class Oa extends nr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ld extends nr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Fd{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&Od(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Qe(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Qe(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Sa();return this.mutations.forEach(s=>{const o=t.get(s.key),l=o.overlayedDocument;let c=this.applyToLocalView(l,o.mutatedFields);c=e.has(s.key)?null:c;const d=xa(l,c);d!==null&&r.set(s.key,d),l.isValidDocument()||l.convertToNoDocument(z.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),dt())}isEqual(t){return this.batchId===t.batchId&&ye(this.mutations,t.mutations,(e,r)=>io(e,r))&&ye(this.baseMutations,t.baseMutations,(e,r)=>io(e,r))}}class vi{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){Y(t.mutations.length===r.length);let s=function(){return Rd}();const o=t.mutations;for(let l=0;l<o.length;l++)s=s.insert(o[l].key,r[l].version);return new vi(t,e,r,s)}}/**
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
 */class Bd{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */var X,L;function Ud(n){switch(n){default:return M();case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0}}function $d(n){if(n===void 0)return le("GRPC error has no .code"),R.UNKNOWN;switch(n){case X.OK:return R.OK;case X.CANCELLED:return R.CANCELLED;case X.UNKNOWN:return R.UNKNOWN;case X.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case X.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case X.INTERNAL:return R.INTERNAL;case X.UNAVAILABLE:return R.UNAVAILABLE;case X.UNAUTHENTICATED:return R.UNAUTHENTICATED;case X.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case X.NOT_FOUND:return R.NOT_FOUND;case X.ALREADY_EXISTS:return R.ALREADY_EXISTS;case X.PERMISSION_DENIED:return R.PERMISSION_DENIED;case X.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case X.ABORTED:return R.ABORTED;case X.OUT_OF_RANGE:return R.OUT_OF_RANGE;case X.UNIMPLEMENTED:return R.UNIMPLEMENTED;case X.DATA_LOSS:return R.DATA_LOSS;default:return M()}}(L=X||(X={}))[L.OK=0]="OK",L[L.CANCELLED=1]="CANCELLED",L[L.UNKNOWN=2]="UNKNOWN",L[L.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",L[L.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",L[L.NOT_FOUND=5]="NOT_FOUND",L[L.ALREADY_EXISTS=6]="ALREADY_EXISTS",L[L.PERMISSION_DENIED=7]="PERMISSION_DENIED",L[L.UNAUTHENTICATED=16]="UNAUTHENTICATED",L[L.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",L[L.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",L[L.ABORTED=10]="ABORTED",L[L.OUT_OF_RANGE=11]="OUT_OF_RANGE",L[L.UNIMPLEMENTED=12]="UNIMPLEMENTED",L[L.INTERNAL=13]="INTERNAL",L[L.UNAVAILABLE=14]="UNAVAILABLE",L[L.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new ra([4294967295,4294967295],0);class jd{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ti(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function qd(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Hd(n,t){return ti(n,t.toTimestamp())}function ge(n){return Y(!!n),z.fromTimestamp(function(e){const r=ue(e);return new tt(r.seconds,r.nanos)}(n))}function Ma(n,t){return ei(n,t).canonicalString()}function ei(n,t){const e=function(s){return new W(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function zd(n){const t=W.fromString(n);return Y(Zd(t)),t}function ni(n,t){return Ma(n.databaseId,t.path)}function Gd(n){const t=zd(n);return t.length===4?W.emptyPath():Wd(t)}function Kd(n){return new W(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Wd(n){return Y(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function ao(n,t,e){return{name:ni(n,t),fields:e.value.mapValue.fields}}function Qd(n,t){let e;if(t instanceof on)e={update:ao(n,t.key,t.value)};else if(t instanceof Oa)e={delete:ni(n,t.key)};else if(t instanceof ce)e={update:ao(n,t.key,t.data),updateMask:Jd(t.fieldMask)};else{if(!(t instanceof Ld))return M();e={verify:ni(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,l){const c=l.transform;if(c instanceof Kn)return{fieldPath:l.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof tn)return{fieldPath:l.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof en)return{fieldPath:l.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Wn)return{fieldPath:l.field.canonicalString(),increment:c.Pe};throw M()}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:Hd(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:M()}(n,t.precondition)),e}function Xd(n,t){return n&&n.length>0?(Y(t!==void 0),n.map(e=>function(s,o){let l=s.updateTime?ge(s.updateTime):ge(o);return l.isEqual(z.min())&&(l=ge(o)),new kd(l,s.transformResults||[])}(e,t))):[]}function Yd(n){let t=Gd(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){Y(r===1);const I=e.from[0];I.allDescendants?s=I.collectionId:t=t.child(I.collectionId)}let o=[];e.where&&(o=function(w){const S=La(w);return S instanceof Ht&&va(S)?S.getFilters():[S]}(e.where));let l=[];e.orderBy&&(l=function(w){return w.map(S=>function(N){return new zn(me(N.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(S))}(e.orderBy));let c=null;e.limit&&(c=function(w){let S;return S=typeof w=="object"?w.value:w,di(S)?null:S}(e.limit));let d=null;e.startAt&&(d=function(w){const S=!!w.before,C=w.values||[];return new Hn(C,S)}(e.startAt));let f=null;return e.endAt&&(f=function(w){const S=!w.before,C=w.values||[];return new Hn(C,S)}(e.endAt)),vd(t,s,l,o,c,"F",d,f)}function La(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=me(e.unaryFilter.field);return Z.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=me(e.unaryFilter.field);return Z.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=me(e.unaryFilter.field);return Z.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const l=me(e.unaryFilter.field);return Z.create(l,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(n):n.fieldFilter!==void 0?function(e){return Z.create(me(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Ht.create(e.compositeFilter.filters.map(r=>La(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return M()}}(e.compositeFilter.op))}(n):M()}function me(n){return it.fromServerFormat(n.fieldPath)}function Jd(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Zd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class tf{constructor(t){this.ct=t}}function ef(n){const t=Yd({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Zr(t,t.limit,"L"):t}/**
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
 */class nf{constructor(){this.un=new rf}addToCollectionParentIndex(t,e){return this.un.add(e),b.resolve()}getCollectionParents(t,e){return b.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return b.resolve()}deleteFieldIndex(t,e){return b.resolve()}deleteAllFieldIndexes(t){return b.resolve()}createTargetIndexes(t,e){return b.resolve()}getDocumentsMatchingTarget(t,e){return b.resolve(null)}getIndexType(t,e){return b.resolve(0)}getFieldIndexes(t,e){return b.resolve([])}getNextCollectionGroupToUpdate(t){return b.resolve(null)}getMinOffset(t,e){return b.resolve(qt.min())}getMinOffsetFromCollectionGroup(t,e){return b.resolve(qt.min())}updateCollectionGroup(t,e,r){return b.resolve()}updateIndexEntries(t,e){return b.resolve()}}class rf{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new ft(W.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new ft(W.comparator)).toArray()}}/**
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
 */class Te{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new Te(0)}static kn(){return new Te(-1)}}/**
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
 */class sf{constructor(){this.changes=new Ae(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,It.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?b.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 *//**
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
 */class of{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class af{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&Qe(r.mutation,s,wt.empty(),tt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,dt()).next(()=>r))}getLocalViewOfDocuments(t,e,r=dt()){const s=ee();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let l=Nn();return o.forEach((c,d)=>{l=l.insert(c,d.overlayedDocument)}),l}))}getOverlayedDocuments(t,e){const r=ee();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,dt()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((l,c)=>{e.set(l,c)})})}computeViews(t,e,r,s){let o=Gn();const l=We(),c=function(){return We()}();return e.forEach((d,f)=>{const I=r.get(f.key);s.has(f.key)&&(I===void 0||I.mutation instanceof ce)?o=o.insert(f.key,f):I!==void 0?(l.set(f.key,I.mutation.getFieldMask()),Qe(I.mutation,f,I.mutation.getFieldMask(),tt.now())):l.set(f.key,wt.empty())}),this.recalculateAndSaveOverlays(t,o).next(d=>(d.forEach((f,I)=>l.set(f,I)),e.forEach((f,I)=>{var w;return c.set(f,new of(I,(w=l.get(f))!==null&&w!==void 0?w:null))}),c))}recalculateAndSaveOverlays(t,e){const r=We();let s=new _t((l,c)=>l-c),o=dt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(l=>{for(const c of l)c.keys().forEach(d=>{const f=e.get(d);if(f===null)return;let I=r.get(d)||wt.empty();I=c.applyToLocalView(f,I),r.set(d,I);const w=(s.get(c.batchId)||dt()).add(d);s=s.insert(c.batchId,w)})}).next(()=>{const l=[],c=s.getReverseIterator();for(;c.hasNext();){const d=c.getNext(),f=d.key,I=d.value,w=Sa();I.forEach(S=>{if(!o.has(S)){const C=xa(e.get(S),r.get(S));C!==null&&w.set(S,C),o=o.add(S)}}),l.push(this.documentOverlayCache.saveOverlays(t,f,w))}return b.waitFor(l)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(l){return k.isDocumentKey(l.path)&&l.collectionGroup===null&&l.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Td(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const l=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):b.resolve(ee());let c=-1,d=o;return l.next(f=>b.forEach(f,(I,w)=>(c<w.largestBatchId&&(c=w.largestBatchId),o.get(I)?b.resolve():this.remoteDocumentCache.getEntry(t,I).next(S=>{d=d.insert(I,S)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,d,f,dt())).next(I=>({batchId:c,changes:Ra(I)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new k(e)).next(r=>{let s=Nn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let l=Nn();return this.indexManager.getCollectionParents(t,o).next(c=>b.forEach(c,d=>{const f=function(w,S){return new tr(S,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(e,d.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,s).next(I=>{I.forEach((w,S)=>{l=l.insert(w,S)})})}).next(()=>l))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(l=>(o=l,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(l=>{o.forEach((d,f)=>{const I=f.getKey();l.get(I)===null&&(l=l.insert(I,It.newInvalidDocument(I)))});let c=Nn();return l.forEach((d,f)=>{const I=o.get(d);I!==void 0&&Qe(I.mutation,f,wt.empty(),tt.now()),yi(e,f)&&(c=c.insert(d,f))}),c})}}/**
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
 */class lf{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return b.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:ge(s.createTime)}}(e)),b.resolve()}getNamedQuery(t,e){return b.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(s){return{name:s.name,query:ef(s.bundledQuery),readTime:ge(s.readTime)}}(e)),b.resolve()}}/**
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
 */class uf{constructor(){this.overlays=new _t(k.comparator),this.Ir=new Map}getOverlay(t,e){return b.resolve(this.overlays.get(e))}getOverlays(t,e){const r=ee();return b.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.ht(t,e,o)}),b.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(r)),b.resolve()}getOverlaysForCollection(t,e,r){const s=ee(),o=e.length+1,l=new k(e.child("")),c=this.overlays.getIteratorFrom(l);for(;c.hasNext();){const d=c.getNext().value,f=d.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&d.largestBatchId>r&&s.set(d.getKey(),d)}return b.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new _t((f,I)=>f-I);const l=this.overlays.getIterator();for(;l.hasNext();){const f=l.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let I=o.get(f.largestBatchId);I===null&&(I=ee(),o=o.insert(f.largestBatchId,I)),I.set(f.getKey(),f)}}const c=ee(),d=o.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((f,I)=>c.set(f,I)),!(c.size()>=s)););return b.resolve(c)}ht(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const l=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,l)}this.overlays=this.overlays.insert(r.key,new Bd(e,r));let o=this.Ir.get(e);o===void 0&&(o=dt(),this.Ir.set(e,o)),this.Ir.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class cf{constructor(){this.sessionToken=Rt.EMPTY_BYTE_STRING}getSessionToken(t){return b.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,b.resolve()}}/**
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
 */class Ei{constructor(){this.Tr=new ft(J.Er),this.dr=new ft(J.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const r=new J(t,e);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Vr(new J(t,e))}mr(t,e){t.forEach(r=>this.removeReference(r,e))}gr(t){const e=new k(new W([])),r=new J(e,t),s=new J(e,t+1),o=[];return this.dr.forEachInRange([r,s],l=>{this.Vr(l),o.push(l.key)}),o}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new k(new W([])),r=new J(e,t),s=new J(e,t+1);let o=dt();return this.dr.forEachInRange([r,s],l=>{o=o.add(l.key)}),o}containsKey(t){const e=new J(t,0),r=this.Tr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class J{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return k.comparator(t.key,e.key)||$(t.wr,e.wr)}static Ar(t,e){return $(t.wr,e.wr)||k.comparator(t.key,e.key)}}/**
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
 */class hf{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new ft(J.Er)}checkEmpty(t){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const l=new Fd(o,e,r,s);this.mutationQueue.push(l);for(const c of s)this.br=this.br.add(new J(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return b.resolve(l)}lookupMutationBatch(t,e){return b.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.vr(r),o=s<0?0:s;return b.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new J(e,0),s=new J(e,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([r,s],l=>{const c=this.Dr(l.wr);o.push(c)}),b.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new ft($);return e.forEach(s=>{const o=new J(s,0),l=new J(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,l],c=>{r=r.add(c.wr)})}),b.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;k.isDocumentKey(o)||(o=o.child(""));const l=new J(new k(o),0);let c=new ft($);return this.br.forEachWhile(d=>{const f=d.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(c=c.add(d.wr)),!0)},l),b.resolve(this.Cr(c))}Cr(t){const e=[];return t.forEach(r=>{const s=this.Dr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){Y(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return b.forEach(e.mutations,s=>{const o=new J(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.br=r})}On(t){}containsKey(t,e){const r=new J(e,0),s=this.br.firstAfterOrEqual(r);return b.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,b.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class df{constructor(t){this.Mr=t,this.docs=function(){return new _t(k.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,l=this.Mr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:l}),this.size+=l-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return b.resolve(r?r.document.mutableCopy():It.newInvalidDocument(e))}getEntries(t,e){let r=Gn();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():It.newInvalidDocument(s))}),b.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=Gn();const l=e.path,c=new k(l.child("")),d=this.docs.getIteratorFrom(c);for(;d.hasNext();){const{key:f,value:{document:I}}=d.getNext();if(!l.isPrefixOf(f.path))break;f.path.length>l.length+1||Zh(Jh(I),r)<=0||(s.has(I.key)||yi(e,I))&&(o=o.insert(I.key,I.mutableCopy()))}return b.resolve(o)}getAllFromCollectionGroup(t,e,r,s){M()}Or(t,e){return b.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new ff(this)}getSize(t){return b.resolve(this.size)}}class ff extends sf{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.cr.addEntry(t,s)):this.cr.removeEntry(r)}),b.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
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
 */class pf{constructor(t){this.persistence=t,this.Nr=new Ae(e=>mi(e),gi),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Ei,this.targetCount=0,this.kr=Te.Bn()}forEachTarget(t,e){return this.Nr.forEach((r,s)=>e(s)),b.resolve()}getLastRemoteSnapshotVersion(t){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return b.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Lr&&(this.Lr=e),b.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new Te(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,b.resolve()}updateTargetData(t,e){return this.Kn(e),b.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,b.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.Nr.forEach((l,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.Nr.delete(l),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),b.waitFor(o).next(()=>s)}getTargetCount(t){return b.resolve(this.targetCount)}getTargetData(t,e){const r=this.Nr.get(e)||null;return b.resolve(r)}addMatchingKeys(t,e,r){return this.Br.Rr(e,r),b.resolve()}removeMatchingKeys(t,e,r){this.Br.mr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(l=>{o.push(s.markPotentiallyOrphaned(t,l))}),b.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),b.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Br.yr(e);return b.resolve(r)}containsKey(t,e){return b.resolve(this.Br.containsKey(e))}}/**
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
 */class mf{constructor(t,e){this.qr={},this.overlays={},this.Qr=new fa(0),this.Kr=!1,this.Kr=!0,this.$r=new cf,this.referenceDelegate=t(this),this.Ur=new pf(this),this.indexManager=new nf,this.remoteDocumentCache=function(s){return new df(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new tf(e),this.Gr=new lf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new uf,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.qr[t.toKey()];return r||(r=new hf(e,this.referenceDelegate),this.qr[t.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,r){V("MemoryPersistence","Starting transaction:",t);const s=new gf(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(o=>this.referenceDelegate.jr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Hr(t,e){return b.or(Object.values(this.qr).map(r=>()=>r.containsKey(t,e)))}}class gf extends ed{constructor(t){super(),this.currentSequenceNumber=t}}class Ti{constructor(t){this.persistence=t,this.Jr=new Ei,this.Yr=null}static Zr(t){return new Ti(t)}get Xr(){if(this.Yr)return this.Yr;throw M()}addReference(t,e,r){return this.Jr.addReference(r,e),this.Xr.delete(r.toString()),b.resolve()}removeReference(t,e,r){return this.Jr.removeReference(r,e),this.Xr.add(r.toString()),b.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),b.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.Xr.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Xr,r=>{const s=k.fromPath(r);return this.ei(t,s).next(o=>{o||e.removeEntry(s,z.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(r=>{r?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return b.or([()=>b.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
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
 */class Ii{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.$i=r,this.Ui=s}static Wi(t,e){let r=dt(),s=dt();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Ii(t,e.fromCache,r,s)}}/**
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
 */class yf{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class _f{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return ou()?8:nd(ru())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.Yi(t,e).next(l=>{o.result=l}).next(()=>{if(!o.result)return this.Zi(t,e,s,r).next(l=>{o.result=l})}).next(()=>{if(o.result)return;const l=new yf;return this.Xi(t,e,l).next(c=>{if(o.result=c,this.zi)return this.es(t,e,l,c.size)})}).next(()=>o.result)}es(t,e,r,s){return r.documentReadCount<this.ji?(je()<=F.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",qe(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),b.resolve()):(je()<=F.DEBUG&&V("QueryEngine","Query:",qe(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(je()<=F.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",qe(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,re(e))):b.resolve())}Yi(t,e){if(no(e))return b.resolve(null);let r=re(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Zr(e,null,"F"),r=re(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const l=dt(...o);return this.Ji.getDocuments(t,l).next(c=>this.indexManager.getMinOffset(t,r).next(d=>{const f=this.ts(e,c);return this.ns(e,f,l,d.readTime)?this.Yi(t,Zr(e,null,"F")):this.rs(t,f,e,d)}))})))}Zi(t,e,r,s){return no(e)||s.isEqual(z.min())?b.resolve(null):this.Ji.getDocuments(t,r).next(o=>{const l=this.ts(e,o);return this.ns(e,l,r,s)?b.resolve(null):(je()<=F.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),qe(e)),this.rs(t,l,e,Yh(s,-1)).next(c=>c))})}ts(t,e){let r=new ft(Ad(t));return e.forEach((s,o)=>{yi(t,o)&&(r=r.add(o))}),r}ns(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Xi(t,e,r){return je()<=F.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",qe(e)),this.Ji.getDocumentsMatchingQuery(t,e,qt.min(),r)}rs(t,e,r,s){return this.Ji.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(l=>{o=o.insert(l.key,l)}),o))}}/**
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
 */class vf{constructor(t,e,r,s){this.persistence=t,this.ss=e,this.serializer=s,this.os=new _t($),this._s=new Ae(o=>mi(o),gi),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(r)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new af(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function Ef(n,t,e,r){return new vf(n,t,e,r)}async function Fa(n,t){const e=j(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.ls(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const l=[],c=[];let d=dt();for(const f of s){l.push(f.batchId);for(const I of f.mutations)d=d.add(I.key)}for(const f of o){c.push(f.batchId);for(const I of f.mutations)d=d.add(I.key)}return e.localDocuments.getDocuments(r,d).next(f=>({hs:f,removedBatchIds:l,addedBatchIds:c}))})})}function Tf(n,t){const e=j(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.cs.newChangeBuffer({trackRemovals:!0});return function(c,d,f,I){const w=f.batch,S=w.keys();let C=b.resolve();return S.forEach(N=>{C=C.next(()=>I.getEntry(d,N)).next(O=>{const D=f.docVersions.get(N);Y(D!==null),O.version.compareTo(D)<0&&(w.applyToRemoteDocument(O,f),O.isValidDocument()&&(O.setReadTime(f.commitVersion),I.addEntry(O)))})}),C.next(()=>c.mutationQueue.removeMutationBatch(d,w))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let d=dt();for(let f=0;f<c.mutationResults.length;++f)c.mutationResults[f].transformResults.length>0&&(d=d.add(c.batch.mutations[f].key));return d}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function If(n){const t=j(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function Af(n,t){const e=j(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}class lo{constructor(){this.activeTargetIds=Cd()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class wf{constructor(){this.so=new lo,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,r){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new lo,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class bf{_o(t){}shutdown(){}}/**
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
 */class uo{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Vn=null;function Ur(){return Vn===null?Vn=function(){return 268435456+Math.round(2147483648*Math.random())}():Vn++,"0x"+Vn.toString(16)}/**
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
 */const Rf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Sf{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
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
 */const ct="WebChannelConnection";class Pf extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+e.host,this.vo=`projects/${s}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Fo(){return!1}Mo(e,r,s,o,l){const c=Ur(),d=this.xo(e,r.toUriEncodedString());V("RestConnection",`Sending RPC '${e}' ${c}:`,d,s);const f={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(f,o,l),this.No(e,d,f,s).then(I=>(V("RestConnection",`Received RPC '${e}' ${c}: `,I),I),I=>{throw Un("RestConnection",`RPC '${e}' ${c} failed with error: `,I,"url: ",d,"request:",s),I})}Lo(e,r,s,o,l,c){return this.Mo(e,r,s,o,l)}Oo(e,r,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ie}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,l)=>e[l]=o),s&&s.headers.forEach((o,l)=>e[l]=o)}xo(e,r){const s=Rf[e];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,r,s){const o=Ur();return new Promise((l,c)=>{const d=new ia;d.setWithCredentials(!0),d.listenOnce(oa.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Dn.NO_ERROR:const I=d.getResponseJson();V(ct,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(I)),l(I);break;case Dn.TIMEOUT:V(ct,`RPC '${t}' ${o} timed out`),c(new x(R.DEADLINE_EXCEEDED,"Request time out"));break;case Dn.HTTP_ERROR:const w=d.getStatus();if(V(ct,`RPC '${t}' ${o} failed with status:`,w,"response text:",d.getResponseText()),w>0){let S=d.getResponseJson();Array.isArray(S)&&(S=S[0]);const C=S==null?void 0:S.error;if(C&&C.status&&C.message){const N=function(D){const G=D.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(G)>=0?G:R.UNKNOWN}(C.status);c(new x(N,C.message))}else c(new x(R.UNKNOWN,"Server responded with status "+d.getStatus()))}else c(new x(R.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{V(ct,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(s);V(ct,`RPC '${t}' ${o} sending request:`,s),d.send(e,"POST",f,r,15)})}Bo(t,e,r){const s=Ur(),o=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],l=ua(),c=la(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(d.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(d.xmlHttpFactory=new sa({})),this.Oo(d.initMessageHeaders,e,r),d.encodeInitMessageHeaders=!0;const I=o.join("");V(ct,`Creating RPC '${t}' stream ${s}: ${I}`,d);const w=l.createWebChannel(I,d);let S=!1,C=!1;const N=new Sf({Io:D=>{C?V(ct,`Not sending because RPC '${t}' stream ${s} is closed:`,D):(S||(V(ct,`Opening RPC '${t}' stream ${s} transport.`),w.open(),S=!0),V(ct,`RPC '${t}' stream ${s} sending:`,D),w.send(D))},To:()=>w.close()}),O=(D,G,H)=>{D.listen(G,Q=>{try{H(Q)}catch(st){setTimeout(()=>{throw st},0)}})};return O(w,He.EventType.OPEN,()=>{C||(V(ct,`RPC '${t}' stream ${s} transport opened.`),N.yo())}),O(w,He.EventType.CLOSE,()=>{C||(C=!0,V(ct,`RPC '${t}' stream ${s} transport closed`),N.So())}),O(w,He.EventType.ERROR,D=>{C||(C=!0,Un(ct,`RPC '${t}' stream ${s} transport errored:`,D),N.So(new x(R.UNAVAILABLE,"The operation could not be completed")))}),O(w,He.EventType.MESSAGE,D=>{var G;if(!C){const H=D.data[0];Y(!!H);const Q=H,st=Q.error||((G=Q[0])===null||G===void 0?void 0:G.error);if(st){V(ct,`RPC '${t}' stream ${s} received error:`,st);const Kt=st.status;let gt=function(g){const y=X[g];if(y!==void 0)return $d(y)}(Kt),v=st.message;gt===void 0&&(gt=R.INTERNAL,v="Unknown error status: "+Kt+" with message "+st.message),C=!0,N.So(new x(gt,v)),w.close()}else V(ct,`RPC '${t}' stream ${s} received:`,H),N.bo(H)}}),O(c,aa.STAT_EVENT,D=>{D.stat===Qr.PROXY?V(ct,`RPC '${t}' stream ${s} detected buffering proxy`):D.stat===Qr.NOPROXY&&V(ct,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{N.wo()},0),N}}function $r(){return typeof document<"u"?document:null}/**
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
 */function rr(n){return new jd(n,!0)}/**
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
 */class Ba{constructor(t,e,r=1e3,s=1.5,o=6e4){this.ui=t,this.timerId=e,this.ko=r,this.qo=s,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,e-r);s>0&&V("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Cf{constructor(t,e,r,s,o,l,c,d){this.ui=t,this.Ho=r,this.Jo=s,this.connection=o,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=c,this.listener=d,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Ba(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===R.RESOURCE_EXHAUSTED?(le(e.toString()),le("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===e&&this.P_(r,s)},r=>{t(()=>{const s=new x(R.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(t,e){const r=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return V("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Nf extends Cf{constructor(t,e,r,s,o,l){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,l),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return Y(!!t.streamToken),this.lastStreamToken=t.streamToken,Y(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){Y(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=Xd(t.writeResults,t.commitTime),r=ge(t.commitTime);return this.listener.g_(r,e)}p_(){const t={};t.database=Kd(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>Qd(this.serializer,r))};this.a_(e)}}/**
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
 */class Vf extends class{}{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new x(R.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Mo(t,ei(e,r),s,o,l)).catch(o=>{throw o.name==="FirebaseError"?(o.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new x(R.UNKNOWN,o.toString())})}Lo(t,e,r,s,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.Lo(t,ei(e,r),s,l,c,o)).catch(l=>{throw l.name==="FirebaseError"?(l.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new x(R.UNKNOWN,l.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Df{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(le(e),this.D_=!1):V("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class xf{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(l=>{r.enqueueAndForget(async()=>{ln(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(d){const f=j(d);f.L_.add(4),await an(f),f.q_.set("Unknown"),f.L_.delete(4),await ir(f)}(this))})}),this.q_=new Df(r,s)}}async function ir(n){if(ln(n))for(const t of n.B_)await t(!0)}async function an(n){for(const t of n.B_)await t(!1)}function ln(n){return j(n).L_.size===0}async function Ua(n,t,e){if(!Zn(t))throw t;n.L_.add(1),await an(n),n.q_.set("Offline"),e||(e=()=>If(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await ir(n)})}function $a(n,t){return t().catch(e=>Ua(n,e,t))}async function sr(n){const t=j(n),e=zt(t);let r=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;kf(t);)try{const s=await Af(t.localStore,r);if(s===null){t.O_.length===0&&e.o_();break}r=s.batchId,Of(t,s)}catch(s){await Ua(t,s)}ja(t)&&qa(t)}function kf(n){return ln(n)&&n.O_.length<10}function Of(n,t){n.O_.push(t);const e=zt(n);e.r_()&&e.V_&&e.m_(t.mutations)}function ja(n){return ln(n)&&!zt(n).n_()&&n.O_.length>0}function qa(n){zt(n).start()}async function Mf(n){zt(n).p_()}async function Lf(n){const t=zt(n);for(const e of n.O_)t.m_(e.mutations)}async function Ff(n,t,e){const r=n.O_.shift(),s=vi.from(r,t,e);await $a(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await sr(n)}async function Bf(n,t){t&&zt(n).V_&&await async function(r,s){if(function(l){return Ud(l)&&l!==R.ABORTED}(s.code)){const o=r.O_.shift();zt(r).s_(),await $a(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await sr(r)}}(n,t),ja(n)&&qa(n)}async function co(n,t){const e=j(n);e.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const r=ln(e);e.L_.add(3),await an(e),r&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await ir(e)}async function Uf(n,t){const e=j(n);t?(e.L_.delete(2),await ir(e)):t||(e.L_.add(2),await an(e),e.q_.set("Unknown"))}function zt(n){return n.U_||(n.U_=function(e,r,s){const o=j(e);return o.w_(),new Nf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Mf.bind(null,n),mo:Bf.bind(null,n),f_:Lf.bind(null,n),g_:Ff.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await sr(n)):(await n.U_.stop(),n.O_.length>0&&(V("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class Ai{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new ne,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const l=Date.now()+r,c=new Ai(t,e,l,s,o);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(R.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ha(n,t){if(le("AsyncQueue",`${t}: ${n}`),Zn(n))return new x(R.UNAVAILABLE,`${t}: ${n}`);throw n}class $f{constructor(){this.queries=ho(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,r){const s=j(e),o=s.queries;s.queries=ho(),o.forEach((l,c)=>{for(const d of c.j_)d.onError(r)})})(this,new x(R.ABORTED,"Firestore shutting down"))}}function ho(){return new Ae(n=>wa(n),Aa)}function jf(n){n.Y_.forEach(t=>{t.next()})}var fo,po;(po=fo||(fo={})).ea="default",po.Cache="cache";class qf{constructor(t,e,r,s,o,l){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=l,this.Ca={},this.Fa=new Ae(c=>wa(c),Aa),this.Ma=new Map,this.xa=new Set,this.Oa=new _t(k.comparator),this.Na=new Map,this.La=new Ei,this.Ba={},this.ka=new Map,this.qa=Te.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Hf(n,t,e){const r=Wf(n);try{const s=await function(l,c){const d=j(l),f=tt.now(),I=c.reduce((C,N)=>C.add(N.key),dt());let w,S;return d.persistence.runTransaction("Locally write mutations","readwrite",C=>{let N=Gn(),O=dt();return d.cs.getEntries(C,I).next(D=>{N=D,N.forEach((G,H)=>{H.isValidDocument()||(O=O.add(G))})}).next(()=>d.localDocuments.getOverlayedDocuments(C,N)).next(D=>{w=D;const G=[];for(const H of c){const Q=Md(H,w.get(H.key).overlayedDocument);Q!=null&&G.push(new ce(H.key,Q,ga(Q.value.mapValue),Vt.exists(!0)))}return d.mutationQueue.addMutationBatch(C,f,G,c)}).next(D=>{S=D;const G=D.applyToLocalDocumentSet(w,O);return d.documentOverlayCache.saveOverlays(C,D.batchId,G)})}).then(()=>({batchId:S.batchId,changes:Ra(w)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(l,c,d){let f=l.Ba[l.currentUser.toKey()];f||(f=new _t($)),f=f.insert(c,d),l.Ba[l.currentUser.toKey()]=f}(r,s.batchId,e),await or(r,s.changes),await sr(r.remoteStore)}catch(s){const o=Ha(s,"Failed to persist write");e.reject(o)}}function mo(n,t,e){const r=j(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Fa.forEach((o,l)=>{const c=l.view.Z_(t);c.snapshot&&s.push(c.snapshot)}),function(l,c){const d=j(l);d.onlineState=c;let f=!1;d.queries.forEach((I,w)=>{for(const S of w.j_)S.Z_(c)&&(f=!0)}),f&&jf(d)}(r.eventManager,t),s.length&&r.Ca.d_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function zf(n,t){const e=j(n),r=t.batch.batchId;try{const s=await Tf(e.localStore,t);Ga(e,r,null),za(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await or(e,s)}catch(s){await da(s)}}async function Gf(n,t,e){const r=j(n);try{const s=await function(l,c){const d=j(l);return d.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let I;return d.mutationQueue.lookupMutationBatch(f,c).next(w=>(Y(w!==null),I=w.keys(),d.mutationQueue.removeMutationBatch(f,w))).next(()=>d.mutationQueue.performConsistencyCheck(f)).next(()=>d.documentOverlayCache.removeOverlaysForBatchId(f,I,c)).next(()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,I)).next(()=>d.localDocuments.getDocuments(f,I))})}(r.localStore,t);Ga(r,t,e),za(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await or(r,s)}catch(s){await da(s)}}function za(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function Ga(n,t,e){const r=j(n);let s=r.Ba[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.Ba[r.currentUser.toKey()]=s}}async function or(n,t,e){const r=j(n),s=[],o=[],l=[];r.Fa.isEmpty()||(r.Fa.forEach((c,d)=>{l.push(r.Ka(d,t,e).then(f=>{var I;if((f||e)&&r.isPrimaryClient){const w=f?!f.fromCache:(I=void 0)===null||I===void 0?void 0:I.current;r.sharedClientState.updateQueryState(d.targetId,w?"current":"not-current")}if(f){s.push(f);const w=Ii.Wi(d.targetId,f);o.push(w)}}))}),await Promise.all(l),r.Ca.d_(s),await async function(d,f){const I=j(d);try{await I.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>b.forEach(f,S=>b.forEach(S.$i,C=>I.persistence.referenceDelegate.addReference(w,S.targetId,C)).next(()=>b.forEach(S.Ui,C=>I.persistence.referenceDelegate.removeReference(w,S.targetId,C)))))}catch(w){if(!Zn(w))throw w;V("LocalStore","Failed to update sequence numbers: "+w)}for(const w of f){const S=w.targetId;if(!w.fromCache){const C=I.os.get(S),N=C.snapshotVersion,O=C.withLastLimboFreeSnapshotVersion(N);I.os=I.os.insert(S,O)}}}(r.localStore,o))}async function Kf(n,t){const e=j(n);if(!e.currentUser.isEqual(t)){V("SyncEngine","User change. New user:",t.toKey());const r=await Fa(e.localStore,t);e.currentUser=t,function(o,l){o.ka.forEach(c=>{c.forEach(d=>{d.reject(new x(R.CANCELLED,l))})}),o.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await or(e,r.hs)}}function Wf(n){const t=j(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=zf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Gf.bind(null,t),t}class go{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=rr(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return Ef(this.persistence,new _f,t.initialUser,this.serializer)}createPersistence(t){return new mf(Ti.Zr,this.serializer)}createSharedClientState(t){return new wf}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Qf{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>mo(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Kf.bind(null,this.syncEngine),await Uf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new $f}()}createDatastore(t){const e=rr(t.databaseInfo.databaseId),r=function(o){return new Pf(o)}(t.databaseInfo);return function(o,l,c,d){return new Vf(o,l,c,d)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,l,c){return new xf(r,s,o,l,c)}(this.localStore,this.datastore,t.asyncQueue,e=>mo(this.syncEngine,e,0),function(){return uo.D()?new uo:new bf}())}createSyncEngine(t,e){return function(s,o,l,c,d,f,I){const w=new qf(s,o,l,c,d,f);return I&&(w.Qa=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=j(s);V("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await an(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}/**
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
 */class Xf{constructor(t,e,r,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=ht.UNAUTHENTICATED,this.clientId=ha.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{V("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(V("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new x(R.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ne;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Ha(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function jr(n,t){n.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Fa(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function yo(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Jf(n);V("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>co(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>co(t.remoteStore,s)),n._onlineComponents=t}function Yf(n){return n.name==="FirebaseError"?n.code===R.FAILED_PRECONDITION||n.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Jf(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await jr(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!Yf(e))throw e;Un("Error using user provided cache. Falling back to memory cache: "+e),await jr(n,new go)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await jr(n,new go);return n._offlineComponents}async function Zf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await yo(n,n._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await yo(n,new Qf))),n._onlineComponents}function tp(n){return Zf(n).then(t=>t.syncEngine)}/**
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
 */function Ka(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const _o=new Map;/**
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
 */function Wa(n,t,e){if(!e)throw new x(R.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function ep(n,t,e,r){if(t===!0&&r===!0)throw new x(R.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function vo(n){if(!k.isDocumentKey(n))throw new x(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Eo(n){if(k.isDocumentKey(n))throw new x(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function wi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":M()}function Qa(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new x(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=wi(n);throw new x(R.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */class To{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new x(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new x(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}ep("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ka((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new x(R.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new x(R.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new x(R.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ar{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new To({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new x(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new x(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new To(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new jh;switch(r.type){case"firstParty":return new Gh(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new x(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=_o.get(e);r&&(V("ComponentProvider","Removing Datastore"),_o.delete(e),r.terminate())}(this),Promise.resolve()}}function np(n,t,e,r={}){var s;const o=(n=Qa(n,ar))._getSettings(),l=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==l&&Un("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:l,ssl:!1})),r.mockUserToken){let c,d;if(typeof r.mockUserToken=="string")c=r.mockUserToken,d=ht.MOCK_USER;else{c=nu(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new x(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new ht(f)}n._authCredentials=new qh(new ca(c,d))}}/**
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
 */class bi{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new bi(this.firestore,t,this._query)}}class Dt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $t(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Dt(this.firestore,t,this._key)}}class $t extends bi{constructor(t,e,r){super(t,e,Ed(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Dt(this.firestore,null,new k(t))}withConverter(t){return new $t(this.firestore,t,this._path)}}function rp(n,t,...e){if(n=ie(n),Wa("collection","path",t),n instanceof ar){const r=W.fromString(t,...e);return Eo(r),new $t(n,null,r)}{if(!(n instanceof Dt||n instanceof $t))throw new x(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(W.fromString(t,...e));return Eo(r),new $t(n.firestore,null,r)}}function ip(n,t,...e){if(n=ie(n),arguments.length===1&&(t=ha.newId()),Wa("doc","path",t),n instanceof ar){const r=W.fromString(t,...e);return vo(r),new Dt(n,null,new k(r))}{if(!(n instanceof Dt||n instanceof $t))throw new x(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(W.fromString(t,...e));return vo(r),new Dt(n.firestore,n instanceof $t?n.converter:null,new k(r))}}/**
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
 */class sp{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new Ba(this,"async_queue_retry"),this.Eu=()=>{const e=$r();e&&V("AsyncQueue","Visibility state changed to "+e.visibilityState),this.t_.jo()};const t=$r();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.du(),this.Au(t)}enterRestrictedMode(t){if(!this.cu){this.cu=!0,this.Iu=t||!1;const e=$r();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Eu)}}enqueue(t){if(this.du(),this.cu)return new Promise(()=>{});const e=new ne;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.uu.push(t),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(t){if(!Zn(t))throw t;V("AsyncQueue","Operation failed with retryable error: "+t)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(t){const e=this.au.then(()=>(this.Pu=!0,t().catch(r=>{this.hu=r,this.Pu=!1;const s=function(l){let c=l.message||"";return l.stack&&(c=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),c}(r);throw le("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Pu=!1,r))));return this.au=e,e}enqueueAfterDelay(t,e,r){this.du(),this.Tu.indexOf(t)>-1&&(e=0);const s=Ai.createAndSchedule(this,t,e,r,o=>this.Vu(o));return this.lu.push(s),s}du(){this.hu&&M()}verifyOperationInProgress(){}async mu(){let t;do t=this.au,await t;while(t!==this.au)}fu(t){for(const e of this.lu)if(e.timerId===t)return!0;return!1}gu(t){return this.mu().then(()=>{this.lu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.lu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.mu()})}pu(t){this.Tu.push(t)}Vu(t){const e=this.lu.indexOf(t);this.lu.splice(e,1)}}class Xa extends ar{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=function(){return new sp}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ya(this),this._firestoreClient.terminate()}}function op(n,t){const e=typeof n=="object"?n:Do(),r=typeof n=="string"?n:"(default)",s=rn(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=tu("firestore");o&&np(s,...o)}return s}function ap(n){return n._firestoreClient||Ya(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Ya(n){var t,e,r;const s=n._freezeSettings(),o=function(c,d,f,I){return new od(c,d,f,I.host,I.ssl,I.experimentalForceLongPolling,I.experimentalAutoDetectLongPolling,Ka(I.experimentalLongPollingOptions),I.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new Xf(n._authCredentials,n._appCheckCredentials,n._queue,o),!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class nn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new nn(Rt.fromBase64String(t))}catch(e){throw new x(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new nn(Rt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Ja{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new x(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Za{constructor(t){this._methodName=t}}/**
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
 */class tl{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new x(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new x(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return $(this._lat,t._lat)||$(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class el{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
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
 */const lp=/^__.*__$/;class up{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new ce(t,this.data,this.fieldMask,e,this.fieldTransforms):new on(t,this.data,e,this.fieldTransforms)}}function nl(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}class Ri{constructor(t,e,r,s,o,l){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.yu(),this.fieldTransforms=o||[],this.fieldMask=l||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(t){return new Ri(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Su({path:r,Du:!1});return s.vu(t),s}Cu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Su({path:r,Du:!1});return s.yu(),s}Fu(t){return this.Su({path:void 0,Du:!0})}Mu(t){return Qn(t,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}yu(){if(this.path)for(let t=0;t<this.path.length;t++)this.vu(this.path.get(t))}vu(t){if(t.length===0)throw this.Mu("Document fields must not be empty");if(nl(this.wu)&&lp.test(t))throw this.Mu('Document fields cannot begin and end with "__"')}}class cp{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||rr(t)}Nu(t,e,r,s=!1){return new Ri({wu:t,methodName:e,Ou:r,path:it.emptyPath(),Du:!1,xu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hp(n){const t=n._freezeSettings(),e=rr(n._databaseId);return new cp(n._databaseId,!!t.ignoreUndefinedProperties,e)}function dp(n,t,e,r,s,o={}){const l=n.Nu(o.merge||o.mergeFields?2:0,t,e,s);ol("Data must be an object, but it was:",l,r);const c=il(r,l);let d,f;if(o.merge)d=new wt(l.fieldMask),f=l.fieldTransforms;else if(o.mergeFields){const I=[];for(const w of o.mergeFields){const S=fp(t,w,e);if(!l.contains(S))throw new x(R.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);gp(I,S)||I.push(S)}d=new wt(I),f=l.fieldTransforms.filter(w=>d.covers(w.field))}else d=null,f=l.fieldTransforms;return new up(new At(c),d,f)}function rl(n,t){if(sl(n=ie(n)))return ol("Unsupported field value:",t,n),il(n,t);if(n instanceof Za)return function(r,s){if(!nl(s.wu))throw s.Mu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Mu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.Du&&t.wu!==4)throw t.Mu("Nested arrays are not supported");return function(r,s){const o=[];let l=0;for(const c of r){let d=rl(c,s.Fu(l));d==null&&(d={nullValue:"NULL_VALUE"}),o.push(d),l++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=ie(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Nd(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=tt.fromDate(r);return{timestampValue:ti(s.serializer,o)}}if(r instanceof tt){const o=new tt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ti(s.serializer,o)}}if(r instanceof tl)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof nn)return{bytesValue:qd(s.serializer,r._byteString)};if(r instanceof Dt){const o=s.databaseId,l=r.firestore._databaseId;if(!l.isEqual(o))throw s.Mu(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Ma(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof el)return function(l,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:l.toArray().map(d=>{if(typeof d!="number")throw c.Mu("VectorValues must only contain numeric values.");return _i(c.serializer,d)})}}}}}}(r,s);throw s.Mu(`Unsupported field value: ${wi(r)}`)}(n,t)}function il(n,t){const e={};return pa(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):sn(n,(r,s)=>{const o=rl(s,t.bu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function sl(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof tt||n instanceof tl||n instanceof nn||n instanceof Dt||n instanceof Za||n instanceof el)}function ol(n,t,e){if(!sl(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=wi(e);throw r==="an object"?t.Mu(n+" a custom object"):t.Mu(n+" "+r)}}function fp(n,t,e){if((t=ie(t))instanceof Ja)return t._internalPath;if(typeof t=="string")return mp(n,t);throw Qn("Field path arguments must be of type string or ",n,!1,void 0,e)}const pp=new RegExp("[~\\*/\\[\\]]");function mp(n,t,e){if(t.search(pp)>=0)throw Qn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Ja(...t.split("."))._internalPath}catch{throw Qn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Qn(n,t,e,r,s){const o=r&&!r.isEmpty(),l=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let d="";return(o||l)&&(d+=" (found",o&&(d+=` in field ${r}`),l&&(d+=` in document ${s}`),d+=")"),new x(R.INVALID_ARGUMENT,c+n+d)}function gp(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */function yp(n,t,e){let r;return r=n?n.toFirestore(t):t,r}function _p(n,t){const e=Qa(n.firestore,Xa),r=ip(n),s=yp(n.converter,t);return vp(e,[dp(hp(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Vt.exists(!1))]).then(()=>r)}function vp(n,t){return function(r,s){const o=new ne;return r.asyncQueue.enqueueAndForget(async()=>Hf(await tp(r),s,o)),o.promise}(ap(n),t)}(function(t,e=!0){(function(s){Ie=s})(hc),jt(new xt("firestore",(r,{instanceIdentifier:s,options:o})=>{const l=r.getProvider("app").getImmediate(),c=new Xa(new Hh(r.getProvider("auth-internal")),new Wh(r.getProvider("app-check-internal")),function(f,I){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new x(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qn(f.options.projectId,I)}(l,s),l);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),bt(Ws,"4.7.1",t),bt(Ws,"4.7.1","esm2017")})();const Ep={apiKey:"AIzaSyBwTbTG_auMrWy_e4aVUFMHs3794zZ4AXE",authDomain:"hgregusersdb.firebaseapp.com",projectId:"hgregusersdb",storageBucket:"hgregusersdb.appspot.com",messagingSenderId:"996459139126",appId:"1:996459139126:web:ca1d5184f0f5db61618897",measurementId:"G-LMF2MVSGER"},al=Vo(Ep),Tp=op(al);Fh(al);async function Ip(n,t){console.log("Hello world!"),console.log(n);const e=`Data/Services/${t}/`,r=rp(Tp,e),s=await _p(r,n);console.log("Document written with ID: ",s.id)}const Si={Basic:{inpol:{id:"inpol",fieldName:"inpol",type:"number",className:"onlyDigits",labelName:"Номер внеска на inPol",placeholder:"00641410",maxlength:8,minlength:8,required:!0,inputHelper:"Находится на заполненом внеске рядом со штрих кодом"},mos:{id:"mos",fieldName:"mos",type:"number",className:"onlyDigits",labelName:"Номер внеска на MOS",placeholder:"42354528",maxlength:8,minlength:8,required:!0,inputHelper:"Находится на заполненом внеске рядом со штрих кодом"},name:{id:"name",fieldName:"name",type:"text",className:"onlyText",labelName:"Имя",placeholder:"Alexey",maxlength:32,minlength:2,required:!0,inputHelper:"Как в загранпаспорте (Латинскими буквами)"},surname:{id:"surname",fieldName:"surname",type:"text",className:"onlyText",labelName:"Фамилия",placeholder:"Rzayev",maxlength:32,minlength:2,required:!0,inputHelper:"Как в загранпаспорте (Латинскими буквами)"},nationality:{id:"nationality",fieldName:"nationality",type:"text",className:"onlyText",labelName:"Гражданство",placeholder:"Poland",maxlength:32,minlength:2,required:!0,inputHelper:"Как в загранпаспорте (Латинскими буквами)"},birthday:{id:"birthday",fieldName:"birthday",type:"date",className:"date",labelName:"Дата рождения",placeholder:"",maxlength:32,minlength:2,required:!0,inputHelper:""},passport:{id:"passport",fieldName:"passport",type:"text",className:"passport",labelName:"Номер паспорта",placeholder:"FA8243943",maxlength:9,minlength:9,required:!0,inputHelper:"Вверху в правом  углу на первой странице"},phone:{id:"phone",fieldName:"phone",type:"text",className:"phone",labelName:"Номер телефона",placeholder:"+48579137807",maxlength:12,minlength:12,required:!1,inputHelper:"Для связи с нами"},email:{id:"email",fieldName:"email",type:"text",className:"email",labelName:"Электронная почта",placeholder:"adres@gmail.com",maxlength:32,minlength:2,required:!0,inputHelper:"Для связи с нами"},source:{id:"source",fieldName:"source",type:"textarea",className:"textarea",labelName:"Как о нас узнали",placeholder:"",maxlength:250,minlength:0,required:!1,inputHelper:""}},Advanced:{inpol:{id:"inpol",fieldName:"inpol",type:"number",className:"onlyDigits",labelName:"Номер внеска на inPol",placeholder:"00641410",maxlength:8,minlength:8,required:!1,inputHelper:"Находится на заполненом внеске рядом со штрих кодом"},mos:{id:"mos",fieldName:"mos",type:"number",className:"onlyDigits",labelName:"Номер внеска на MOS",placeholder:"42354528",maxlength:8,minlength:8,required:!1,inputHelper:"Находится на заполненом внеске рядом со штрих кодом"},name:{id:"name",fieldName:"name",type:"text",className:"onlyText",labelName:"Имя",placeholder:"Alexey",maxlength:32,minlength:2,required:!1,inputHelper:"Как в загранпаспорте (Латинскими буквами)"},surname:{id:"surname",fieldName:"surname",type:"text",className:"onlyText",labelName:"Фамилия",placeholder:"Rzayev",maxlength:32,minlength:2,required:!1,inputHelper:"Как в загранпаспорте (Латинскими буквами)"},nationality:{id:"nationality",fieldName:"nationality",type:"text",className:"onlyText",labelName:"Гражданство",placeholder:"Poland",maxlength:32,minlength:2,required:!1,inputHelper:"Как в загранпаспорте (Латинскими буквами)"},birthday:{id:"birthday",fieldName:"birthday",type:"date",className:"date",labelName:"Дата рождения",placeholder:"",maxlength:32,minlength:2,required:!1,inputHelper:""},passport:{id:"passport",fieldName:"passport",type:"text",className:"passport",labelName:"Номер паспорта",placeholder:"FA8243943",maxlength:9,minlength:9,required:!1,inputHelper:"Вверху в правом  углу на первой странице"},phone:{id:"phone",fieldName:"phone",type:"text",className:"phone",labelName:"Номер телефона",placeholder:"+48579137807",maxlength:12,minlength:12,required:!0,inputHelper:"Для связи с нами"},email:{id:"email",fieldName:"email",type:"text",className:"email",labelName:"Электронная почта",placeholder:"adres@gmail.com",maxlength:32,minlength:2,required:!1,inputHelper:"Для связи с нами"},source:{id:"source",fieldName:"source",type:"textarea",className:"textarea",labelName:"Как о нас узнали",placeholder:"",maxlength:250,minlength:0,required:!1,inputHelper:""}},Others:{name:{id:"name",fieldName:"name",type:"text",className:"onlyText",labelName:"Имя",placeholder:"Alexey",maxlength:32,minlength:2,required:!1,inputHelper:"Как в загранпаспорте (Латинскими буквами)"},surname:{id:"surname",fieldName:"surname",type:"text",className:"onlyText",labelName:"Фамилия",placeholder:"Rzayev",maxlength:32,minlength:2,required:!1,inputHelper:"Как в загранпаспорте (Латинскими буквами)"},phone:{id:"phone",fieldName:"phone",type:"text",className:"phone",labelName:"Номер телефона",placeholder:"+48579137807",maxlength:12,minlength:12,required:!1,inputHelper:"Для связи с нами"},email:{id:"email",fieldName:"email",type:"text",className:"email",labelName:"Электронная почта",placeholder:"adres@gmail.com",maxlength:32,minlength:2,required:!1,inputHelper:"Для связи с нами"},source:{id:"source",fieldName:"source",type:"textarea",className:"textarea",labelName:"Как о нас узнали",placeholder:"",maxlength:250,minlength:0,required:!1,inputHelper:""}},Ultra:{surname:{id:"surname",fieldName:"surname",type:"text",className:"onlyText",labelName:"Фамилия",placeholder:"Rzayev",maxlength:32,minlength:2,required:!0,inputHelper:"Как в загранпаспорте (Латинскими буквами)"},familySurname:{id:"familySurname",fieldName:"familySurname",type:"text",className:"onlyText",labelName:"Родовая фамилия",placeholder:"Rzayev",maxlength:32,minlength:2,required:!0,inputHelper:"(Латинскими буквами)"},name:{id:"name",fieldName:"name",type:"text",className:"onlyText",labelName:"Имя",placeholder:"Alexey",maxlength:32,minlength:2,required:!0,inputHelper:"Как в загранпаспорте (Латинскими буквами)"},previousName:{id:"previousName",fieldName:"previousName",type:"text",className:"onlyAllText",labelName:"Предыдущие имена",placeholder:"Alexey",maxlength:32,minlength:2,required:!1,inputHelper:""},fatherName:{id:"fatherName",fieldName:"fatherName",type:"text",className:"onlyAllText",labelName:"Имя отца",placeholder:"Alexey",maxlength:32,minlength:2,required:!0,inputHelper:""},motherName:{id:"motherName",fieldName:"motherName",type:"text",className:"onlyAllText",labelName:"Имя матери",placeholder:"Alexey",maxlength:32,minlength:2,required:!0,inputHelper:""},familyMotherSurname:{id:"familyMotherSurname",fieldName:"familyMotherSurname",type:"text",className:"onlyAllText",labelName:"Девичья фамилия матери",placeholder:"Alexey",maxlength:32,minlength:2,required:!0,inputHelper:""},birthday:{id:"birthday",fieldName:"birthday",type:"date",className:"date",labelName:"Дата рождения",placeholder:"",maxlength:32,minlength:2,required:!0,inputHelper:""},gender:{id:"gender",fieldName:"gender",type:"text",className:"onlyAllText",labelName:"Пол",placeholder:"",maxlength:32,minlength:2,required:!0,inputHelper:"Например: Мужской, Женский, Другой"},motherCity:{id:"motherCity",fieldName:"motherCity",type:"text",className:"onlyAllText",labelName:"Город рождения",placeholder:"",maxlength:32,minlength:2,required:!0,inputHelper:""},motherCountry:{id:"motherCountry",fieldName:"motherCountry",type:"text",className:"onlyAllText",labelName:"Страна рождения",placeholder:"",maxlength:32,minlength:2,required:!0,inputHelper:""},nationality:{id:"nationality",fieldName:"nationality",type:"text",className:"onlyText",labelName:"Гражданство",placeholder:"Poland",maxlength:32,minlength:2,required:!0,inputHelper:"Как в загранпаспорте (Латинскими буквами)"},familyStatus:{id:"familyStatus",fieldName:"familyStatus",type:"text",className:"onlyAllText",labelName:"Семейное положение",placeholder:"",maxlength:32,minlength:2,required:!0,inputHelper:""},education:{id:"education",fieldName:"education",type:"text",className:"onlyAllText",labelName:"Образование",placeholder:"",maxlength:32,minlength:2,required:!0,inputHelper:""},height:{id:"height",fieldName:"height",type:"text",className:"onlyDigits",labelName:"Рост",placeholder:"",maxlength:3,minlength:2,required:!0,inputHelper:"Рост в сантиметрах"},eyeColor:{id:"eyeColor",fieldName:"eyeColor",type:"text",className:"onlyAllText",labelName:"Цвет глаз",placeholder:"",maxlength:32,minlength:2,required:!0,inputHelper:""},specialSigns:{id:"specialSigns",fieldName:"specialSigns",type:"text",className:"onlyAllText",labelName:"Особые приметы",placeholder:"",maxlength:32,minlength:2,required:!1,inputHelper:"Если имеются. Например: татуировки, шрамы"},pecelNum:{id:"pecelNum",fieldName:"pecelNum",type:"text",className:"onlyAllText",labelName:"Номер песеля",placeholder:"",maxlength:32,minlength:2,required:!1,inputHelper:""},phone:{id:"phone",fieldName:"phone",type:"text",className:"phone",labelName:"Номер телефона",placeholder:"+48579137807",maxlength:12,minlength:12,required:!0,inputHelper:""},email:{id:"email",fieldName:"email",type:"text",className:"email",labelName:"Электронная почта",placeholder:"adres@gmail.com",maxlength:32,minlength:2,required:!1,inputHelper:""},address:{id:"address",fieldName:"address",type:"text",className:"",labelName:"Адрес проживания в Польше",placeholder:"",maxlength:64,minlength:2,required:!1,inputHelper:"Eсли имеется"},reasonOfResidence:{id:"reasonOfResidence",fieldName:"reasonOfResidence",type:"text",className:"onlyAllText",labelName:"На каком основании хотите получить карту побыту",placeholder:"",maxlength:64,minlength:2,required:!0,inputHelper:"Работа/учета/воссоедение с семьей и т.д."},familyInfo:{id:"familyInfo",fieldName:"familyInfo",type:"textarea",className:"textarea",labelName:"Данные членов вашей семьи, которые проживают на територии Польши (имена, фамилии, даты рождения, город проживания в Польше, кем вам приходятся, делают ли они себе карту побыту на данный момент, находятся ли они на вашем содержании)",placeholder:"",maxlength:500,minlength:2,required:!1,inputHelper:""},firstEnteranceDate:{id:"firstEnteranceDate",fieldName:"firstEnteranceDate",type:"date",className:"",labelName:"Дата первого вьезда на територию Польши",placeholder:"",maxlength:32,minlength:2,required:!0,inputHelper:""},lastEnteranceDate:{id:"lastEnteranceDate",fieldName:"lastEnteranceDate",type:"date",className:"",labelName:"Дата последнего вьезда на територию Польши",placeholder:"",maxlength:32,minlength:2,required:!0,inputHelper:""},reasonOfEnterance:{id:"reasonOfEnterance",fieldName:"reasonOfEnterance",type:"text",className:"onlyAllText",labelName:"На каком основании вы заехали в Польшу",placeholder:"",maxlength:64,minlength:2,required:!0,inputHelper:"Виза, биометрия и т.д."},countriesVisitHistory:{id:"reasonOfEnterance",fieldName:"reasonOfEnterance",type:"textarea",className:"textarea",labelName:"Страны в которых вы были последние 5 лет",placeholder:"",maxlength:250,minlength:2,required:!0,inputHelper:""},income:{id:"income",fieldName:"income",type:"text",className:"",labelName:"Имеется ли у вас официальный доход в Польше",placeholder:"",maxlength:64,minlength:2,required:!1,inputHelper:""},passport:{id:"passport",fieldName:"passport",type:"text",className:"passport",labelName:"Номер паспорта",placeholder:"FA8243943",maxlength:9,minlength:9,required:!0,inputHelper:"Вверху в правом  углу на первой странице"},source:{id:"source",fieldName:"source",type:"textarea",className:"textarea",labelName:"Как о нас узнали",placeholder:"",maxlength:250,minlength:0,required:!1,inputHelper:""}}};function Ap(n){const r=document.getElementById(n.id).value.length,s=Number(n.maxlength),o=Number(n.minlength);return!n.required||r>=o&&r<=s}function wp(n){const t=n.target,e=t.value,r=t.getAttribute("maxlength")??32,s=/[^0-9]/g,o=e.replace(s,"");t.value=o.slice(0,r)}function bp(n){const t=n.target,e=t.value,r=t.getAttribute("maxlength")??32,s=/[^A-Za-zА-Яа-я]/g,o=e.replace(s,"");t.value=o.slice(0,r)}function Rp(n){const t=n.target,e=t.value,r=t.getAttribute("maxlength")??32,s=/[^A-Za-z]/g,o=e.replace(s,"");t.value=o.slice(0,r)}function Sp(n){const t=n.target.value.toUpperCase(),e=t.substring(0,2).replace(/[^A-Z]/g,""),r=t.substring(2).replace(/[^0-9]/g,"");n.target.value=e+r.substring(0,7)}function Pp(n){const t=n.target,r=t.value.replace(/[^0-9+]/g,"");r.startsWith("+")?t.value=r.slice(0,t.maxLength):t.value=`+${r.replace("+","")}`;const s=t.parentElement.getElementsByClassName("error")[0];/^(\+[0-9]*)$/.test(r)?s.style.display="none":s.style.display="block"}function Cp(n){const t=n.target,e=t.value,r=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,s=t.parentElement.getElementsByClassName("error")[0];r.test(e)?s.style.display="none":s.style.display="block"}console.log("The script is executing");const ll={BASIC:"Basic",ADVANCED:"Advanced",ULTRA:"Ultra",OTHERS:"Others"};let lr=ll.BASIC;const ul="#dc3545";function Np(n){const t=document.getElementById(n);for(;t.firstChild;)t.removeChild(t.firstChild)}function Vp(){Array.from(document.getElementsByClassName("serviceBtns")).forEach(n=>{n.addEventListener("click",()=>{const t=n.getAttribute("service-name");lr=ll[t],$p()})})}function Dp(){Vp()}function Jt(n,t,e){Array.from(document.getElementsByClassName(n)).forEach(r=>{r.addEventListener(t,e)})}function xp(n){this.style.height="auto",this.style.height=this.scrollHeight+"px";const t=n.target,e=t.value.length,r=t.getAttribute("maxlength"),s=t.parentElement.getElementsByClassName("inputHelper")[0];e>r&&(t.value=t.value.substring(0,r)),s.textContent=`${t.value.length}/${r} characters used`}function kp(n){if(n){const t=n.parentElement.getElementsByClassName("inputError")[0];t&&(console.log("show error"),t.style.display="block"),n.style.outline="1px solid "+ul,n.scrollIntoView({behavior:"smooth",block:"center"}),setTimeout(()=>{t.style.display="none",n.style.outline="none"},3e3)}}function Op(){const n=Si[lr];if(n==null)return;const t={};for(const[e,r]of Object.entries(n)){const s=Ap(r),o=document.getElementById(r.id);if(s)t[e]=o.value??"";else{kp(o);return}}return t}let Io;function Mp(){clearTimeout(Io),Io=setTimeout(()=>{document.getElementById("submitErrorLbl").style.color="transparent"},5e3),document.getElementById("submitErrorLbl").style.color=ul}async function Lp(){console.log("submit btn clicked");const n=Op();n==null&&Mp(),console.log(n),await Ip(n,lr)}function Fp(){Jt("passport","input",Sp),Jt("onlyDigits","input",wp),Jt("onlyText","input",Rp),Jt("onlyAllText","input",bp),Jt("phone","input",Pp),Jt("email","input",Cp),Jt("textarea","input",xp),document.getElementById("submitBtn").addEventListener("click",Lp)}function Bp(n){const{id:t,fieldName:e,type:r,className:s,labelName:o,placeholder:l,maxlength:c,minlength:d,required:f,inputHelper:I}=n;return r=="textarea"?`
    <div class="inputWrapper">
      <label for="customInput" class="inputLabel">${o}:</label>
      ${f?' <label class="reuiresStart">*</label>':""}
      <textarea type="${r}" id="${t}" class="inputField ${s}" fieldName="${e}"
      minlength="${d}" maxlength="${c}" placeholder="${l}" 
      ${f?"required":""}></textarea>
      <small class="inputHelper">${I}</small>
      <span class="error inputError">Invalid input. Please check and try again.</span>
    </div>
  `:`
      <div class="inputWrapper">
        <label for="customInput" class="inputLabel">${o}:</label>
        ${f?' <label class="reuiresStart">*</label>':""}
        <input type="${r}" id="${t}" class="inputField ${s}" fieldName="${e}"
        minlength="${d}" maxlength="${c}" placeholder="${l}" 
        ${f?"required":""}>
        <small class="inputHelper">${I}</small>
        <span class="error inputError">Invalid input. Please check and try again.</span>
      </div>
    `}function Up(){Np("app"),document.getElementById("app").insertAdjacentHTML("beforeend",'<div id="formContainer"></div>');const n=Si[lr]??{},t=document.getElementById("formContainer");Object.entries(n).forEach(([e,r])=>{const s=Bp(r);t.insertAdjacentHTML("beforeend",s)}),t.insertAdjacentHTML("beforeend",`
    <label id="submitErrorLbl">The form cannot be submitted with invalid data</label>
     <button id="submitBtn">Submit</button>`)}function $p(){Up(),Fp()}function jp(){Dp(),console.log(Si)}jp();
