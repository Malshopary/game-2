(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1e3,t=1001,n=1002,r=1003,i=1004,a=1005,o=1006,s=1007,c=1008,l=1009,u=1010,d=1011,f=1012,p=1013,m=1014,h=1015,g=1016,_=1017,v=1018,y=1020,b=35902,x=35899,S=1021,C=1022,w=1023,T=1026,E=1027,D=1028,O=1029,k=1030,A=1031,j=1033,M=33776,N=33777,P=33778,ee=33779,F=35840,te=35841,ne=35842,re=35843,ie=36196,ae=37492,oe=37496,se=37488,I=37489,ce=37490,le=37491,ue=37808,de=37809,fe=37810,pe=37811,me=37812,he=37813,ge=37814,_e=37815,ve=37816,ye=37817,be=37818,xe=37819,Se=37820,Ce=37821,we=36492,Te=36494,Ee=36495,De=36283,Oe=36284,ke=36285,Ae=36286,je=2300,L=2301,Me=2302,Ne=2303,Pe=2400,R=2401,Fe=2402,z=3200,Ie=`srgb`,Le=`srgb-linear`,Re=`linear`,ze=`srgb`,Be=7680,Ve=35044,He=2e3;function Ue(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function We(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ge(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Ke(){let e=Ge(`canvas`);return e.style.display=`block`,e}var qe={};function Je(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Ye(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function B(...e){e=Ye(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function V(...e){e=Ye(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Xe(...e){let t=e.join(` `);t in qe||(qe[t]=!0,B(...e))}function Ze(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var Qe={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},$e=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},et=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),tt=1234567,nt=Math.PI/180,rt=180/Math.PI;function it(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(et[e&255]+et[e>>8&255]+et[e>>16&255]+et[e>>24&255]+`-`+et[t&255]+et[t>>8&255]+`-`+et[t>>16&15|64]+et[t>>24&255]+`-`+et[n&63|128]+et[n>>8&255]+`-`+et[n>>16&255]+et[n>>24&255]+et[r&255]+et[r>>8&255]+et[r>>16&255]+et[r>>24&255]).toLowerCase()}function at(e,t,n){return Math.max(t,Math.min(n,e))}function ot(e,t){return(e%t+t)%t}function st(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function ct(e,t,n){return e===t?0:(n-e)/(t-e)}function lt(e,t,n){return(1-n)*e+n*t}function ut(e,t,n,r){return lt(e,t,1-Math.exp(-n*r))}function dt(e,t=1){return t-Math.abs(ot(e,t*2)-t)}function ft(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function pt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function mt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function ht(e,t){return e+Math.random()*(t-e)}function gt(e){return e*(.5-Math.random())}function _t(e){e!==void 0&&(tt=e);let t=tt+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function vt(e){return e*nt}function yt(e){return e*rt}function bt(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function xt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function St(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Ct(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:B(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function wt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function Tt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var Et={DEG2RAD:nt,RAD2DEG:rt,generateUUID:it,clamp:at,euclideanModulo:ot,mapLinear:st,inverseLerp:ct,lerp:lt,damp:ut,pingpong:dt,smoothstep:ft,smootherstep:pt,randInt:mt,randFloat:ht,randFloatSpread:gt,seededRandom:_t,degToRad:vt,radToDeg:yt,isPowerOfTwo:bt,ceilPowerOfTwo:xt,floorPowerOfTwo:St,setQuaternionFromProperEuler:Ct,normalize:Tt,denormalize:wt},H=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Dt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:B(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ot.copy(this).projectOnVector(e),this.sub(Ot)}reflect(e){return this.sub(Ot.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ot=new U,kt=new Dt,W=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Xe(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(At.makeScale(e,t)),this}rotate(e){return Xe(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(At.makeRotation(-e)),this}translate(e,t){return Xe(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(At.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},At=new W,jt=new W().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mt=new W().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Nt(){let e={enabled:!0,workingColorSpace:Le,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=Ft(e.r),e.g=Ft(e.g),e.b=Ft(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=It(e.r),e.g=It(e.g),e.b=It(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Re:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return Xe(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return Xe(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Le]:{primaries:t,whitePoint:r,transfer:Re,toXYZ:jt,fromXYZ:Mt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:t,whitePoint:r,transfer:ze,toXYZ:jt,fromXYZ:Mt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}}),e}var Pt=Nt();function Ft(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function It(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Lt,Rt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Lt===void 0&&(Lt=Ge(`canvas`)),Lt.width=e.width,Lt.height=e.height;let t=Lt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Lt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Ge(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Ft(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Ft(t[e]/255)*255):t[e]=Ft(t[e]);return{data:t,width:e.width,height:e.height}}return B(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},zt=0,Bt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:zt++}),this.uuid=it(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Vt(r[t].image)):e.push(Vt(r[t]))}else e=Vt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Vt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Rt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(B(`Texture: Unable to serialize Texture.`),{})}var Ht=0,Ut=new U,Wt=class r extends $e{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=t,a=t,s=o,u=c,d=w,f=l,p=r.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ht++}),this.uuid=it(),this.name=``,this.source=new Bt(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new H(0,0),this.repeat=new H(1,1),this.center=new H(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new W,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ut).x}get height(){return this.source.getSize(Ut).y}get depth(){return this.source.getSize(Ut).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){B(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){B(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x)}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y)}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Wt.DEFAULT_IMAGE=null,Wt.DEFAULT_MAPPING=300,Wt.DEFAULT_ANISOTROPY=1;var Gt=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Kt=class extends $e{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:o,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Gt(0,0,e,t),this.scissorTest=!1,this.viewport=new Gt(0,0,e,t),this.textures=[];let r=new Wt({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:o,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Bt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},qt=class extends Kt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Jt=class extends Wt{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Yt=class extends Wt{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Xt=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Zt.setFromMatrixColumn(e,0).length(),i=1/Zt.setFromMatrixColumn(e,1).length(),a=1/Zt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($t,e,en)}lookAt(e,t,n){let r=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),tn.crossVectors(n,rn),tn.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),tn.crossVectors(n,rn)),tn.normalize(),nn.crossVectors(rn,tn),r[0]=tn.x,r[4]=nn.x,r[8]=rn.x,r[1]=tn.y,r[5]=nn.y,r[9]=rn.y,r[2]=tn.z,r[6]=nn.z,r[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],P=r[7],ee=r[11],F=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*P,i[8]=a*C+o*D+s*j+c*ee,i[12]=a*w+o*O+s*M+c*F,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*P,i[9]=l*C+u*D+d*j+f*ee,i[13]=l*w+u*O+d*M+f*F,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*P,i[10]=p*C+m*D+h*j+g*ee,i[14]=p*w+m*O+h*M+g*F,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*P,i[11]=_*C+v*D+y*j+b*ee,i[15]=_*w+v*O+y*M+b*F,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Zt.set(r[0],r[1],r[2]).length(),o=Zt.set(r[4],r[5],r[6]).length(),s=Zt.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Qt.copy(this);let c=1/a,l=1/o,u=1/s;return Qt.elements[0]*=c,Qt.elements[1]*=c,Qt.elements[2]*=c,Qt.elements[4]*=l,Qt.elements[5]*=l,Qt.elements[6]*=l,Qt.elements[8]*=u,Qt.elements[9]*=u,Qt.elements[10]*=u,t.setFromRotationMatrix(Qt),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=He,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=He,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Zt=new U,Qt=new Xt,$t=new U(0,0,0),en=new U(1,1,1),tn=new U,nn=new U,rn=new U,an=new Xt,on=new Dt,sn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-at(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(at(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(at(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:B(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return an.makeRotationFromQuaternion(e),this.setFromRotationMatrix(an,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return on.setFromEuler(this),this.setFromQuaternion(on,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};sn.DEFAULT_ORDER=`XYZ`;var cn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},ln=0,un=new U,dn=new Dt,fn=new Xt,pn=new U,mn=new U,hn=new U,gn=new Dt,_n=new U(1,0,0),vn=new U(0,1,0),yn=new U(0,0,1),bn={type:`added`},xn={type:`removed`},Sn={type:`childadded`,child:null},Cn={type:`childremoved`,child:null},wn=class e extends $e{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ln++}),this.uuid=it(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new U,n=new sn,r=new Dt,i=new U(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xt},normalMatrix:{value:new W}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return dn.setFromAxisAngle(e,t),this.quaternion.multiply(dn),this}rotateOnWorldAxis(e,t){return dn.setFromAxisAngle(e,t),this.quaternion.premultiply(dn),this}rotateX(e){return this.rotateOnAxis(_n,e)}rotateY(e){return this.rotateOnAxis(vn,e)}rotateZ(e){return this.rotateOnAxis(yn,e)}translateOnAxis(e,t){return un.copy(e).applyQuaternion(this.quaternion),this.position.add(un.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_n,e)}translateY(e){return this.translateOnAxis(vn,e)}translateZ(e){return this.translateOnAxis(yn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?pn.copy(e):pn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),mn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(mn,pn,this.up):fn.lookAt(pn,mn,this.up),this.quaternion.setFromRotationMatrix(fn),r&&(fn.extractRotation(r.matrixWorld),dn.setFromRotationMatrix(fn),this.quaternion.premultiply(dn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(V(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bn),Sn.child=e,this.dispatchEvent(Sn),Sn.child=null):V(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xn),Cn.child=e,this.dispatchEvent(Cn),Cn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(fn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bn),Sn.child=e,this.dispatchEvent(Sn),Sn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mn,e,hn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mn,gn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};wn.DEFAULT_UP=new U(0,1,0),wn.DEFAULT_MATRIX_AUTO_UPDATE=!0,wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var G=class extends wn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Tn={type:`move`},En=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new G,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new G,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new G,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new G;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Dn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},kn={h:0,s:0,l:0};function An(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var jn=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ie){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Pt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Pt.workingColorSpace){if(e=ot(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=An(i,r,e+1/3),this.g=An(i,r,e),this.b=An(i,r,e-1/3)}return Pt.colorSpaceToWorking(this,r),this}setStyle(e,t=Ie){function n(t){t!==void 0&&parseFloat(t)<1&&B(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:B(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);B(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ie){let n=Dn[e.toLowerCase()];return n===void 0?B(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ft(e.r),this.g=Ft(e.g),this.b=Ft(e.b),this}copyLinearToSRGB(e){return this.r=It(e.r),this.g=It(e.g),this.b=It(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ie){return Pt.workingToColorSpace(Mn.copy(this),e),Math.round(at(Mn.r*255,0,255))*65536+Math.round(at(Mn.g*255,0,255))*256+Math.round(at(Mn.b*255,0,255))}getHexString(e=Ie){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Pt.workingColorSpace){Pt.workingToColorSpace(Mn.copy(this),t);let n=Mn.r,r=Mn.g,i=Mn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Pt.workingColorSpace){return Pt.workingToColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=Ie){Pt.workingToColorSpace(Mn.copy(this),e);let t=Mn.r,n=Mn.g,r=Mn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(On),this.setHSL(On.h+e,On.s+t,On.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(On),e.getHSL(kn);let n=lt(On.h,kn.h,t),r=lt(On.s,kn.s,t),i=lt(On.l,kn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mn=new jn;jn.NAMES=Dn;var Nn=class e{constructor(e,t=25e-5){this.isFogExp2=!0,this.name=``,this.color=new jn(e),this.density=t}clone(){return new e(this.color,this.density)}toJSON(){return{type:`FogExp2`,name:this.name,color:this.color.getHex(),density:this.density}}},Pn=class extends wn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Fn=new U,In=new U,Ln=new U,Rn=new U,zn=new U,Bn=new U,Vn=new U,Hn=new U,Un=new U,Wn=new U,Gn=new Gt,Kn=new Gt,qn=new Gt,Jn=class e{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Fn.subVectors(e,t),r.cross(Fn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Fn.subVectors(r,t),In.subVectors(n,t),Ln.subVectors(e,t);let a=Fn.dot(Fn),o=Fn.dot(In),s=Fn.dot(Ln),c=In.dot(In),l=In.dot(Ln),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Rn)!==null&&Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Rn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Rn.x),s.addScaledVector(a,Rn.y),s.addScaledVector(o,Rn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Gn.setScalar(0),Kn.setScalar(0),qn.setScalar(0),Gn.fromBufferAttribute(e,t),Kn.fromBufferAttribute(e,n),qn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Gn,i.x),a.addScaledVector(Kn,i.y),a.addScaledVector(qn,i.z),a}static isFrontFacing(e,t,n,r){return Fn.subVectors(n,t),In.subVectors(e,t),Fn.cross(In).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),Fn.cross(In).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;zn.subVectors(r,n),Bn.subVectors(i,n),Hn.subVectors(e,n);let s=zn.dot(Hn),c=Bn.dot(Hn);if(s<=0&&c<=0)return t.copy(n);Un.subVectors(e,r);let l=zn.dot(Un),u=Bn.dot(Un);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(zn,a);Wn.subVectors(e,i);let f=zn.dot(Wn),p=Bn.dot(Wn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Bn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Vn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Vn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(zn,a).addScaledVector(Bn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Yn=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Zn):Zn.fromBufferAttribute(r,t),Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Qn.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Qn.copy(e.boundingBox)),Qn.applyMatrix4(e.matrixWorld),this.union(Qn)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ar),or.subVectors(this.max,ar),$n.subVectors(e.a,ar),er.subVectors(e.b,ar),tr.subVectors(e.c,ar),nr.subVectors(er,$n),rr.subVectors(tr,er),ir.subVectors($n,tr);let t=[0,-nr.z,nr.y,0,-rr.z,rr.y,0,-ir.z,ir.y,nr.z,0,-nr.x,rr.z,0,-rr.x,ir.z,0,-ir.x,-nr.y,nr.x,0,-rr.y,rr.x,0,-ir.y,ir.x,0];return!lr(t,$n,er,tr,or)||(t=[1,0,0,0,1,0,0,0,1],!lr(t,$n,er,tr,or))?!1:(sr.crossVectors(nr,rr),t=[sr.x,sr.y,sr.z],lr(t,$n,er,tr,or))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Xn=[new U,new U,new U,new U,new U,new U,new U,new U],Zn=new U,Qn=new Yn,$n=new U,er=new U,tr=new U,nr=new U,rr=new U,ir=new U,ar=new U,or=new U,sr=new U,cr=new U;function lr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){cr.fromArray(e,a);let o=i.x*Math.abs(cr.x)+i.y*Math.abs(cr.y)+i.z*Math.abs(cr.z),s=t.dot(cr),c=n.dot(cr),l=r.dot(cr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var ur=new U,dr=new H,fr=0,pr=class extends $e{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ve,this.updateRanges=[],this.gpuType=h,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)dr.fromBufferAttribute(this,t),dr.applyMatrix3(e),this.setXY(t,dr.x,dr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ur.fromBufferAttribute(this,t),ur.applyMatrix3(e),this.setXYZ(t,ur.x,ur.y,ur.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ur.fromBufferAttribute(this,t),ur.applyMatrix4(e),this.setXYZ(t,ur.x,ur.y,ur.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ur.fromBufferAttribute(this,t),ur.applyNormalMatrix(e),this.setXYZ(t,ur.x,ur.y,ur.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ur.fromBufferAttribute(this,t),ur.transformDirection(e),this.setXYZ(t,ur.x,ur.y,ur.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=wt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),r=Tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),r=Tt(r,this.array),i=Tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},mr=class extends pr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},hr=class extends pr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},gr=class extends pr{constructor(e,t,n){super(new Float32Array(e),t,n)}},_r=new Yn,vr=new U,yr=new U,br=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?_r.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vr.subVectors(e,this.center);let t=vr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(vr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vr.copy(e.center).add(yr)),this.expandByPoint(vr.copy(e.center).sub(yr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},xr=0,Sr=new Xt,Cr=new wn,wr=new U,Tr=new Yn,Er=new Yn,Dr=new U,Or=class e extends $e{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xr++}),this.uuid=it(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Ue(e)?hr:mr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new W().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Sr.makeRotationFromQuaternion(e),this.applyMatrix4(Sr),this}rotateX(e){return Sr.makeRotationX(e),this.applyMatrix4(Sr),this}rotateY(e){return Sr.makeRotationY(e),this.applyMatrix4(Sr),this}rotateZ(e){return Sr.makeRotationZ(e),this.applyMatrix4(Sr),this}translate(e,t,n){return Sr.makeTranslation(e,t,n),this.applyMatrix4(Sr),this}scale(e,t,n){return Sr.makeScale(e,t,n),this.applyMatrix4(Sr),this}lookAt(e){return Cr.lookAt(e),Cr.updateMatrix(),this.applyMatrix4(Cr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wr).negate(),this.translate(wr.x,wr.y,wr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new gr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&B(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){V(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Tr.setFromBufferAttribute(n),this.morphTargetsRelative?(Dr.addVectors(this.boundingBox.min,Tr.min),this.boundingBox.expandByPoint(Dr),Dr.addVectors(this.boundingBox.max,Tr.max),this.boundingBox.expandByPoint(Dr)):(this.boundingBox.expandByPoint(Tr.min),this.boundingBox.expandByPoint(Tr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&V(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new br);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){V(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(Tr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Er.setFromBufferAttribute(n),this.morphTargetsRelative?(Dr.addVectors(Tr.min,Er.min),Tr.expandByPoint(Dr),Dr.addVectors(Tr.max,Er.max),Tr.expandByPoint(Dr)):(Tr.expandByPoint(Er.min),Tr.expandByPoint(Er.max))}Tr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Dr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Dr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Dr.fromBufferAttribute(a,t),o&&(wr.fromBufferAttribute(e,t),Dr.add(wr)),r=Math.max(r,n.distanceToSquared(Dr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&V(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){V(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new pr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new U,s[e]=new U;let c=new U,l=new U,u=new U,d=new H,f=new H,p=new H,m=new U,h=new U;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new U,y=new U,b=new U,x=new U;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new pr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new U,i=new U,a=new U,o=new U,s=new U,c=new U,l=new U,u=new U;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dr.fromBufferAttribute(e,t),Dr.normalize(),e.setXYZ(t,Dr.x,Dr.y,Dr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new pr(a,r,i)}if(this.index===null)return B(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},kr=new U,Ar=new U,jr=new W,Mr=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=kr.subVectors(n,t).cross(Ar.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(kr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||jr.getNormalMatrix(e),r=this.coplanarPoint(kr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Nr=0,Pr=class extends $e{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nr++}),this.uuid=it(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jn(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Be,this.stencilZFail=Be,this.stencilZPass=Be,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){B(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){B(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new jn().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Mr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new H().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new H().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Fr=new U,Ir=new U,Lr=new U,Rr=new U,zr=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Fr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fr.copy(this.origin).addScaledVector(this.direction,t),Fr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ir.copy(e).add(t).multiplyScalar(.5),Lr.copy(t).sub(e).normalize(),Rr.copy(this.origin).sub(Ir);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Lr),o=Rr.dot(this.direction),s=-Rr.dot(Lr),c=Rr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Ir).addScaledVector(Lr,d),f}intersectSphere(e,t){if(e.radius<0)return null;Fr.subVectors(e.center,this.origin);let n=Fr.dot(this.direction),r=Fr.dot(Fr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Fr)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,N;if(y>=b&&y>=x?(w=s,D=u,A=p,N=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,N=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,N=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let P=S/w,ee=C/w,F=1/w,te=T-P*D,ne=E-ee*D,re=O-P*A,ie=k-ee*A,ae=j-P*N,oe=M-ee*N,se=ae*ie-oe*re,I=te*oe-ne*ae,ce=re*ne-ie*te;if(r){if(se<0||I<0||ce<0)return null}else if((se<0||I<0||ce<0)&&(se>0||I>0||ce>0))return null;let le=se+I+ce;if(le===0)return null;let ue=F*(se*D+I*A+ce*N);return(le>0?ue<0:ue>0)?null:this.at(ue/le,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Br=class extends Pr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new jn(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Vr=new Xt,Hr=new zr,Ur=new br,Wr=new U,Gr=new U,Kr=new U,qr=new U,Jr=new U,Yr=new U,Xr=new U,Zr=new U,K=class extends wn{constructor(e=new Or,t=new Br){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Yr.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Jr.fromBufferAttribute(s,e),a?Yr.addScaledVector(Jr,r):Yr.addScaledVector(Jr.sub(t),r))}t.add(Yr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(i),Hr.copy(e.ray).recast(e.near),!(Ur.containsPoint(Hr.origin)===!1&&(Hr.intersectSphere(Ur,Wr)===null||Hr.origin.distanceToSquared(Wr)>(e.far-e.near)**2))&&(Vr.copy(i).invert(),Hr.copy(e.ray).applyMatrix4(Vr),(n.boundingBox===null||Hr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Hr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=$r(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=$r(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=$r(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=$r(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Qr(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Zr.copy(s),Zr.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Zr);return l<n.near||l>n.far?null:{distance:l,point:Zr.clone(),object:e}}function $r(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Gr),e.getVertexPosition(c,Kr),e.getVertexPosition(l,qr);let u=Qr(e,t,n,r,Gr,Kr,qr,Xr);if(u){let e=new U;Jn.getBarycoord(Xr,Gr,Kr,qr,e),i&&(u.uv=Jn.getInterpolatedAttribute(i,s,c,l,e,new H)),a&&(u.uv1=Jn.getInterpolatedAttribute(a,s,c,l,e,new H)),o&&(u.normal=Jn.getInterpolatedAttribute(o,s,c,l,e,new U),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new U,materialIndex:0};Jn.getNormal(Gr,Kr,qr,t.normal),u.face=t,u.barycoord=e}return u}var ei=class extends Wt{constructor(e=null,t=1,n=1,i,a,o,s,c,l=r,u=r,d,f){super(null,o,s,c,l,u,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ti=class extends pr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ni=new Xt,ri=new Xt,ii=[],ai=new Yn,oi=new Xt,si=new K,ci=new br,li=class extends K{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ti(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,oi)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Yn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ni),ai.copy(e.boundingBox).applyMatrix4(ni),this.boundingBox.union(ai)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new br),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ni),ci.copy(e.boundingSphere).applyMatrix4(ni),this.boundingSphere.union(ci)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(si.geometry=this.geometry,si.material=this.material,si.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ci.copy(this.boundingSphere),ci.applyMatrix4(n),e.ray.intersectsSphere(ci)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,ni),ri.multiplyMatrices(n,ni),si.matrixWorld=ri,si.raycast(e,ii);for(let e=0,n=ii.length;e<n;e++){let n=ii[e];n.instanceId=i,n.object=this,t.push(n)}ii.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ti(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new ei(new Float32Array(r*this.count),r,this.count,D,h));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ui=new br,di=new H(.5,.5),fi=new U,pi=class{constructor(e=new Mr,t=new Mr,n=new Mr,r=new Mr,i=new Mr,a=new Mr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=He,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ui)}intersectsSprite(e){return ui.center.set(0,0,0),ui.radius=.7071067811865476+di.distanceTo(e.center),ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(fi.x=r.normal.x>0?e.max.x:e.min.x,fi.y=r.normal.y>0?e.max.y:e.min.y,fi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(fi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},mi=class extends Pr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new jn(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},hi=new U,gi=new U,_i=new Xt,vi=new zr,yi=new br,bi=new U,xi=new U,Si=class extends wn{constructor(e=new Or,t=new mi){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)hi.fromBufferAttribute(t,e-1),gi.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=hi.distanceTo(gi);e.setAttribute(`lineDistance`,new gr(n,1))}else B(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yi.copy(n.boundingSphere),yi.applyMatrix4(r),yi.radius+=i,e.ray.intersectsSphere(yi)===!1)return;_i.copy(r).invert(),vi.copy(e.ray).applyMatrix4(_i);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Ci(this,e,vi,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Ci(this,e,vi,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Ci(this,e,vi,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=Ci(this,e,vi,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Ci(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(hi.fromBufferAttribute(s,i),gi.fromBufferAttribute(s,a),n.distanceSqToSegment(hi,gi,bi,xi)>r)return;bi.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(bi);if(!(c<t.near||c>t.far))return{distance:c,point:xi.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var wi=new U,Ti=new U,Ei=class extends Si{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)wi.fromBufferAttribute(t,e),Ti.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+wi.distanceTo(Ti);e.setAttribute(`lineDistance`,new gr(n,1))}else B(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},Di=class extends Pr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new jn(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Oi=new Xt,ki=new zr,Ai=new br,ji=new U,Mi=class extends wn{constructor(e=new Or,t=new Di){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ai.copy(n.boundingSphere),Ai.applyMatrix4(r),Ai.radius+=i,e.ray.intersectsSphere(Ai)===!1)return;Oi.copy(r).invert(),ki.copy(e.ray).applyMatrix4(Oi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);ji.fromBufferAttribute(l,n),Ni(ji,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)ji.fromBufferAttribute(l,a),Ni(ji,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Ni(e,t,n,r,i,a,o){let s=ki.distanceSqToPoint(e);if(s<n){let n=new U;ki.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Pi=class extends Wt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Fi=class extends Wt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ii=class extends Wt{constructor(e,t,n=m,i,a,o,s=r,c=r,l,u=T,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},i,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Bt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Li=class extends Ii{constructor(e,t=m,n=301,i,a,o=r,s=r,c,l=T){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ri=class extends Wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},q=class e extends Or{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new gr(c,3)),this.setAttribute(`normal`,new gr(l,3)),this.setAttribute(`uv`,new gr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new U;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},zi=class e extends Or{constructor(e=1,t=1,n=4,r=8,i=1){super(),this.type=`CapsuleGeometry`,this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:i},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),i=Math.max(1,Math.floor(i));let a=[],o=[],s=[],c=[],l=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+i,m=r+1,h=new U,g=new U;for(let _=0;_<=p;_++){let v=0,y=0,b=0,x=0;if(_<=n){let t=_/n,r=t*Math.PI/2;y=-l-e*Math.cos(r),b=e*Math.sin(r),x=-e*Math.cos(r),v=t*u}else if(_<=n+i){let r=(_-n)/i;y=-l+r*t,b=e,x=0,v=u+r*d}else{let t=(_-n-i)/n,r=t*Math.PI/2;y=l+e*Math.sin(r),b=e*Math.cos(r),x=e*Math.sin(r),v=u+d+t*u}let S=Math.max(0,Math.min(1,v/f)),C=0;_===0?C=.5/r:_===p&&(C=-.5/r);for(let e=0;e<=r;e++){let t=e/r,n=t*Math.PI*2,i=Math.sin(n),a=Math.cos(n);g.x=-b*a,g.y=y,g.z=b*i,o.push(g.x,g.y,g.z),h.set(-b*a,x,b*i),h.normalize(),s.push(h.x,h.y,h.z),c.push(t+C,S)}if(_>0){let e=(_-1)*m;for(let t=0;t<r;t++){let n=e+t,r=e+t+1,i=_*m+t,o=_*m+t+1;a.push(n,r,i),a.push(r,o,i)}}}this.setIndex(a),this.setAttribute(`position`,new gr(o,3)),this.setAttribute(`normal`,new gr(s,3)),this.setAttribute(`uv`,new gr(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Bi=class e extends Or{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new U,l=new H;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new gr(a,3)),this.setAttribute(`normal`,new gr(o,3)),this.setAttribute(`uv`,new gr(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},J=class e extends Or{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new gr(u,3)),this.setAttribute(`normal`,new gr(d,3)),this.setAttribute(`uv`,new gr(f,2));function _(){let a=new U,_=new U,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new H,m=new U,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Vi=class e extends J{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Hi=class e extends Or{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new gr(i,3)),this.setAttribute(`normal`,new gr(i.slice(),3)),this.setAttribute(`uv`,new gr(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new U,r=new U,i=new U;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new U;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new U;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new U,t=new U,n=new U,r=new U,o=new H,s=new H,c=new H;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Ui=class e extends Hi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n,i=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r];super(i,[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type=`DodecahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Wi=new U,Gi=new U,Ki=new U,qi=new Jn,Ji=class extends Or{constructor(e=null,t=1){if(super(),this.type=`EdgesGeometry`,this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=1e4,r=Math.cos(nt*t),i=e.getIndex(),a=e.getAttribute(`position`),o=i?i.count:a.count,s=[0,0,0],c=[`a`,`b`,`c`],l=[,,,],u={},d=[];for(let e=0;e<o;e+=3){i?(s[0]=i.getX(e),s[1]=i.getX(e+1),s[2]=i.getX(e+2)):(s[0]=e,s[1]=e+1,s[2]=e+2);let{a:t,b:o,c:f}=qi;if(t.fromBufferAttribute(a,s[0]),o.fromBufferAttribute(a,s[1]),f.fromBufferAttribute(a,s[2]),qi.getNormal(Ki),l[0]=`${Math.round(t.x*n)},${Math.round(t.y*n)},${Math.round(t.z*n)}`,l[1]=`${Math.round(o.x*n)},${Math.round(o.y*n)},${Math.round(o.z*n)}`,l[2]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,l[0]!==l[1]&&l[1]!==l[2]&&l[2]!==l[0])for(let e=0;e<3;e++){let t=(e+1)%3,n=l[e],i=l[t],a=qi[c[e]],o=qi[c[t]],f=`${n}_${i}`,p=`${i}_${n}`;p in u&&u[p]?(Ki.dot(u[p].normal)<=r&&(d.push(a.x,a.y,a.z),d.push(o.x,o.y,o.z)),u[p]=null):f in u||(u[f]={index0:s[e],index1:s[t],normal:Ki.clone()})}}for(let e in u)if(u[e]){let{index0:t,index1:n}=u[e];Wi.fromBufferAttribute(a,t),Gi.fromBufferAttribute(a,n),d.push(Wi.x,Wi.y,Wi.z),d.push(Gi.x,Gi.y,Gi.z)}this.setAttribute(`position`,new gr(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Yi=class e extends Or{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new gr(p,3)),this.setAttribute(`normal`,new gr(m,3)),this.setAttribute(`uv`,new gr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Xi=class e extends Or{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new U,p=new H;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new gr(s,3)),this.setAttribute(`normal`,new gr(c,3)),this.setAttribute(`uv`,new gr(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Y=class e extends Or{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new U,d=new U,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new gr(p,3)),this.setAttribute(`normal`,new gr(m,3)),this.setAttribute(`uv`,new gr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Zi=class e extends Or{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new U,f=new U,p=new U;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new gr(c,3)),this.setAttribute(`normal`,new gr(l,3)),this.setAttribute(`uv`,new gr(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Qi(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(ea(i))i.isRenderTargetTexture?(B(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(ea(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function $i(e){let t={};for(let n=0;n<e.length;n++){let r=Qi(e[n]);for(let e in r)t[e]=r[e]}return t}function ea(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function ta(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function na(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Pt.workingColorSpace}var ra={clone:Qi,merge:$i},ia=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,aa=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,oa=class extends Pr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ia,this.fragmentShader=aa,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qi(e.uniforms),this.uniformsGroups=ta(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new jn().setHex(r.value);break;case`v2`:this.uniforms[n].value=new H().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new U().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Gt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new W().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Xt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},sa=class extends oa{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},X=class extends Pr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new jn(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jn(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new H(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ca=class extends Pr{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type=`MeshNormalMaterial`,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new H(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},Z=class extends Pr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new jn(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jn(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new H(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},la=class extends Pr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=z,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ua=class extends Pr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function da(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function fa(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var pa=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},ma=class extends pa{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pe,endingEnd:Pe}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case R:i=e,o=2*t-n;break;case Fe:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case R:a=e,s=2*n-t;break;case Fe:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},ha=class extends pa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},ga=class extends pa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},_a=class extends pa{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=ba(n,t,g,y,r);i[p]=va(x,o,_,b,m)}return i}};function va(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function ya(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function ba(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=va(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=ya(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var xa=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=da(t,this.TimeBufferType),this.values=da(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:da(e.times,Array),values:da(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),fa(e.settings)&&(n.settings={inTangents:da(e.settings.inTangents,Array),outTangents:da(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ga(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ha(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ma(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new _a(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case je:t=this.InterpolantFactoryMethodDiscrete;break;case L:t=this.InterpolantFactoryMethodLinear;break;case Me:t=this.InterpolantFactoryMethodSmooth;break;case Ne:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return B(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return je;case this.InterpolantFactoryMethodLinear:return L;case this.InterpolantFactoryMethodSmooth:return Me;case this.InterpolantFactoryMethodBezier:return Ne}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;fa(this.settings)&&(Sa(this.settings.inTangents,e),Sa(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(V(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(V(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){V(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){V(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&We(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){V(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Me,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,fa(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Sa(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}xa.prototype.ValueTypeName=``,xa.prototype.TimeBufferType=Float32Array,xa.prototype.ValueBufferType=Float32Array,xa.prototype.DefaultInterpolation=L;var Ca=class extends xa{constructor(e,t,n){super(e,t,n)}};Ca.prototype.ValueTypeName=`bool`,Ca.prototype.ValueBufferType=Array,Ca.prototype.DefaultInterpolation=je,Ca.prototype.InterpolantFactoryMethodLinear=void 0,Ca.prototype.InterpolantFactoryMethodSmooth=void 0;var wa=class extends xa{constructor(e,t,n,r){super(e,t,n,r)}};wa.prototype.ValueTypeName=`color`;var Ta=class extends xa{constructor(e,t,n,r){super(e,t,n,r)}};Ta.prototype.ValueTypeName=`number`;var Ea=class extends pa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Dt.slerpFlat(i,0,a,c-o,a,c,s);return i}},Da=class extends xa{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Ea(this.times,this.values,this.getValueSize(),e)}};Da.prototype.ValueTypeName=`quaternion`,Da.prototype.InterpolantFactoryMethodSmooth=void 0;var Oa=class extends xa{constructor(e,t,n){super(e,t,n)}};Oa.prototype.ValueTypeName=`string`,Oa.prototype.ValueBufferType=Array,Oa.prototype.DefaultInterpolation=je,Oa.prototype.InterpolantFactoryMethodLinear=void 0,Oa.prototype.InterpolantFactoryMethodSmooth=void 0;var ka=class extends xa{constructor(e,t,n,r){super(e,t,n,r)}};ka.prototype.ValueTypeName=`vector`;var Aa=class extends wn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new jn(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ja=class extends Aa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new jn(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Ma=new Xt,Na=new U,Pa=new U,Fa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new H(512,512),this.mapType=l,this.map=null,this.mapPass=null,this.matrix=new Xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pi,this._frameExtents=new H(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Na.setFromMatrixPosition(e.matrixWorld),t.position.copy(Na),Pa.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pa),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Ma.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ma,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Ma)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ia=new U,La=new Dt,Ra=new U,za=class extends wn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=He,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ia,La,Ra),Ra.x===1&&Ra.y===1&&Ra.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ia,La,Ra.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ia,La,Ra),Ra.x===1&&Ra.y===1&&Ra.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ia,La,Ra.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ba=new U,Va=new H,Ha=new H,Ua=class extends za{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=rt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(nt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rt*2*Math.atan(Math.tan(nt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ba.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ba.x,Ba.y).multiplyScalar(-e/Ba.z),Ba.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ba.x,Ba.y).multiplyScalar(-e/Ba.z)}getViewSize(e,t){return this.getViewBounds(e,Va,Ha),t.subVectors(Ha,Va)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(nt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Wa=class extends Fa{constructor(){super(new Ua(90,1,.5,500)),this.isPointLightShadow=!0}},Ga=class extends Aa{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new Wa}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ka=class extends za{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},qa=class extends Fa{constructor(){super(new Ka(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ja=class extends Aa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.shadow=new qa}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Ya=class extends Aa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type=`AmbientLight`}},Xa=-90,Za=1,Qa=class extends wn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ua(Xa,Za,e,t);r.layers=this.layers,this.add(r);let i=new Ua(Xa,Za,e,t);i.layers=this.layers,this.add(i);let a=new Ua(Xa,Za,e,t);a.layers=this.layers,this.add(a);let o=new Ua(Xa,Za,e,t);o.layers=this.layers,this.add(o);let s=new Ua(Xa,Za,e,t);s.layers=this.layers,this.add(s);let c=new Ua(Xa,Za,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},$a=class extends Ua{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},eo=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=to.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function to(){this._document.hidden===!1&&this.reset()}var no=`\\[\\]\\.:\\/`,ro=RegExp(`[\\[\\]\\.:\\/]`,`g`),io=`[^\\[\\]\\.:\\/]`,ao=`[^`+no.replace(`\\.`,``)+`]`,oo=`((?:WC+[\\/:])*)`.replace(`WC`,io),so=`(WCOD+)?`.replace(`WCOD`,ao),co=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,io),lo=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,io),uo=RegExp(`^`+oo+so+co+lo+`$`),fo=[`material`,`materials`,`bones`,`map`],po=class{constructor(e,t,n){let r=n||mo.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},mo=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(ro,``)}static parseTrackName(e){let t=uo.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);fo.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){B(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){V(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){V(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){V(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){V(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){V(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){V(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){V(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;V(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){V(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){V(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};mo.Composite=po,mo.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},mo.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},mo.prototype.GetterByBindingType=[mo.prototype._getValue_direct,mo.prototype._getValue_array,mo.prototype._getValue_arrayElement,mo.prototype._getValue_toArray],mo.prototype.SetterByBindingTypeAndVersioning=[[mo.prototype._setValue_direct,mo.prototype._setValue_direct_setNeedsUpdate,mo.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[mo.prototype._setValue_array,mo.prototype._setValue_array_setNeedsUpdate,mo.prototype._setValue_array_setMatrixWorldNeedsUpdate],[mo.prototype._setValue_arrayElement,mo.prototype._setValue_arrayElement_setNeedsUpdate,mo.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[mo.prototype._setValue_fromArray,mo.prototype._setValue_fromArray_setNeedsUpdate,mo.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ho=new Xt,go=class{constructor(e,t,n=0,r=1/0){this.ray=new zr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new cn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):V(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return ho.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ho),this}intersectObject(e,t=!0,n=[]){return vo(e,this,n,t),n.sort(_o),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)vo(e[r],this,n,t);return n.sort(_o),n}};function _o(e,t){return e.distance-t.distance}function vo(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)vo(r[e],t,n,!0)}}(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});function yo(e,t,n,r){let i=bo(r);switch(n){case S:return e*t;case D:return e*t/i.components*i.byteLength;case O:return e*t/i.components*i.byteLength;case k:return e*t*2/i.components*i.byteLength;case A:return e*t*2/i.components*i.byteLength;case C:return e*t*3/i.components*i.byteLength;case w:return e*t*4/i.components*i.byteLength;case j:return e*t*4/i.components*i.byteLength;case M:case N:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case P:case ee:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case te:case re:return Math.max(e,16)*Math.max(t,8)/4;case F:case ne:return Math.max(e,8)*Math.max(t,8)/2;case ie:case ae:case se:case I:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case oe:case ce:case le:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ue:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case de:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case fe:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case pe:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case me:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case he:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ge:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case _e:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case ve:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case ye:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case be:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case xe:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Se:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ce:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case we:case Te:case Ee:return Math.ceil(e/4)*Math.ceil(t/4)*16;case De:case Oe:return Math.ceil(e/4)*Math.ceil(t/4)*8;case ke:case Ae:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function bo(e){switch(e){case l:case u:return{byteLength:1,components:1};case f:case d:case g:return{byteLength:2,components:1};case _:case v:return{byteLength:2,components:4};case m:case p:case h:return{byteLength:4,components:1};case b:case x:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?B(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function xo(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function So(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Co={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Q={common:{diffuse:{value:new jn(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new W},alphaMap:{value:null},alphaMapTransform:{value:new W},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new W}},envmap:{envMap:{value:null},envMapRotation:{value:new W},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new W}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new W}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new W},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new W},normalScale:{value:new H(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new W},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new W}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new W}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new W}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jn(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new jn(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new W},alphaTest:{value:0},uvTransform:{value:new W}},sprite:{diffuse:{value:new jn(16777215)},opacity:{value:1},center:{value:new H(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new W},alphaMap:{value:null},alphaMapTransform:{value:new W},alphaTest:{value:0}}},wo={basic:{uniforms:$i([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.fog]),vertexShader:Co.meshbasic_vert,fragmentShader:Co.meshbasic_frag},lambert:{uniforms:$i([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new jn(0)},envMapIntensity:{value:1}}]),vertexShader:Co.meshlambert_vert,fragmentShader:Co.meshlambert_frag},phong:{uniforms:$i([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new jn(0)},specular:{value:new jn(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Co.meshphong_vert,fragmentShader:Co.meshphong_frag},standard:{uniforms:$i([Q.common,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.roughnessmap,Q.metalnessmap,Q.fog,Q.lights,{emissive:{value:new jn(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Co.meshphysical_vert,fragmentShader:Co.meshphysical_frag},toon:{uniforms:$i([Q.common,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.gradientmap,Q.fog,Q.lights,{emissive:{value:new jn(0)}}]),vertexShader:Co.meshtoon_vert,fragmentShader:Co.meshtoon_frag},matcap:{uniforms:$i([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,{matcap:{value:null}}]),vertexShader:Co.meshmatcap_vert,fragmentShader:Co.meshmatcap_frag},points:{uniforms:$i([Q.points,Q.fog]),vertexShader:Co.points_vert,fragmentShader:Co.points_frag},dashed:{uniforms:$i([Q.common,Q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Co.linedashed_vert,fragmentShader:Co.linedashed_frag},depth:{uniforms:$i([Q.common,Q.displacementmap]),vertexShader:Co.depth_vert,fragmentShader:Co.depth_frag},normal:{uniforms:$i([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,{opacity:{value:1}}]),vertexShader:Co.meshnormal_vert,fragmentShader:Co.meshnormal_frag},sprite:{uniforms:$i([Q.sprite,Q.fog]),vertexShader:Co.sprite_vert,fragmentShader:Co.sprite_frag},background:{uniforms:{uvTransform:{value:new W},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Co.background_vert,fragmentShader:Co.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new W}},vertexShader:Co.backgroundCube_vert,fragmentShader:Co.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Co.cube_vert,fragmentShader:Co.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Co.equirect_vert,fragmentShader:Co.equirect_frag},distance:{uniforms:$i([Q.common,Q.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Co.distance_vert,fragmentShader:Co.distance_frag},shadow:{uniforms:$i([Q.lights,Q.fog,{color:{value:new jn(0)},opacity:{value:1}}]),vertexShader:Co.shadow_vert,fragmentShader:Co.shadow_frag}};wo.physical={uniforms:$i([wo.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new W},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new W},clearcoatNormalScale:{value:new H(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new W},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new W},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new W},sheen:{value:0},sheenColor:{value:new jn(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new W},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new W},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new W},transmissionSamplerSize:{value:new H},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new W},attenuationDistance:{value:0},attenuationColor:{value:new jn(0)},specularColor:{value:new jn(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new W},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new W},anisotropyVector:{value:new H},anisotropyMap:{value:null},anisotropyMapTransform:{value:new W}}]),vertexShader:Co.meshphysical_vert,fragmentShader:Co.meshphysical_frag};var To={r:0,b:0,g:0},Eo=new Xt,Do=new W;Do.set(-1,0,0,0,1,0,0,0,1);function Oo(e,t,n,r,i,a){let o=new jn(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new K(new q(1,1,1),new oa({name:`BackgroundCubeMaterial`,uniforms:Qi(wo.backgroundCube.uniforms),vertexShader:wo.backgroundCube.vertexShader,fragmentShader:wo.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Eo.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Do),l.material.toneMapped=Pt.getTransfer(i.colorSpace)!==ze,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new K(new Yi(2,2),new oa({name:`BackgroundMaterial`,uniforms:Qi(wo.background.uniforms),vertexShader:wo.background.vertexShader,fragmentShader:wo.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Pt.getTransfer(i.colorSpace)!==ze,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(To,na(e)),n.buffers.color.setClear(To.r,To.g,To.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function ko(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Ao(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function jo(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(B(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&B(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Mo(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Mr,s=new W,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var No=4,Po=6,Fo=20,Io=256,Lo=new Ka,Ro=new jn,zo=null,Bo=0,Vo=0,Ho=!1,Uo=new U,Wo=new U,Go=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Uo}=i;zo=this._renderer.getRenderTarget(),Bo=this._renderer.getActiveCubeFace(),Vo=this._renderer.getActiveMipmapLevel(),Ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(zo,Bo,Vo),this._renderer.xr.enabled=Ho,e.scissorTest=!1,Jo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zo=this._renderer.getRenderTarget(),Bo=this._renderer.getActiveCubeFace(),Vo=this._renderer.getActiveMipmapLevel(),Ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:o,minFilter:o,generateMipmaps:!1,type:g,format:w,colorSpace:Le,depthBuffer:!1},r=qo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qo(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ko(r)),this._blurMaterial=Xo(r,e,t),this._ggxMaterial=Yo(r,e,t)}return r}_compileMaterial(e){let t=new K(new Or,e);this._renderer.compile(t,Lo)}_sceneToCubeUV(e,t,n,r,i){let a=new Ua(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Ro),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new K(new q,new Br({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Ro),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Jo(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zo());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Jo(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Lo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-No?n-d+No:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Jo(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Lo),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Jo(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Lo)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];Jo(t,3*l*(r>this._lodMax-No?r-this._lodMax+No:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,Lo)}};function Ko(e){let t=[],n=[],r=e,i=e-No+1+Po;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?Wo.set(1,r,n):e===1?Wo.set(-n,1,-r):e===2?Wo.set(-n,r,1):e===3?Wo.set(-1,r,-n):e===4?Wo.set(-n,-1,r):Wo.set(n,r,-1),Wo.toArray(l,(e*6+t)*3)}}let u=new Or;u.setAttribute(`position`,new pr(c,3)),u.setAttribute(`outputDirection`,new pr(l,3)),n.push(new K(u,null)),r>No&&r--}return{lodMeshes:n,sizeLods:t}}function qo(e,t,n){let r=new qt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Jo(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Yo(e,t,n){return new oa({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Io,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$o(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Xo(e,t,n){return new oa({name:`SphericalGaussianBlur`,defines:{SAMPLES:Fo,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:$o(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Zo(){return new oa({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:$o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Qo(){return new oa({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function $o(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var es=class extends qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Pi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new q(5,5,5),i=new oa({name:`CubemapFromEquirect`,uniforms:Qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new K(r,i),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=o),new Qa(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function ts(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new es(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Go(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Go(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function ns(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Xe(`WebGLRenderer: `+e+` extension not supported.`),t}}}function rs(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?hr:mr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function is(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function as(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:V(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function os(e,t,n){let r=new WeakMap,i=new Gt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let g=new Float32Array(p*m*4*u),_=new Jt(g,p,m,u);_.type=h,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new H(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function ss(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var cs={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function ls(e,t,n,r,i,a){let o=new qt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new Or;l.setAttribute(`position`,new gr([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new gr([0,2,0,0,2,0],2));let u=new sa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new K(l,u),f=new Ka(-1,1,1,-1,0,1),p=null,m=null,h=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new qt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}),c=new qt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<y.length;e++){let r=y[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,h=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},Pt.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=cs[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(d,f),v=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var us=new Wt,ds=new Ii(1,1),fs=new Jt,ps=new Yt,ms=new Pi,hs=[],gs=[],_s=new Float32Array(16),vs=new Float32Array(9),ys=new Float32Array(4);function bs(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=hs[i];if(a===void 0&&(a=new Float32Array(i),hs[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function xs(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Ss(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Cs(e,t){let n=gs[t];n===void 0&&(n=new Int32Array(t),gs[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function ws(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Ts(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(xs(n,t))return;e.uniform2fv(this.addr,t),Ss(n,t)}}function Es(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(xs(n,t))return;e.uniform3fv(this.addr,t),Ss(n,t)}}function Ds(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(xs(n,t))return;e.uniform4fv(this.addr,t),Ss(n,t)}}function Os(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(xs(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ss(n,t)}else{if(xs(n,r))return;ys.set(r),e.uniformMatrix2fv(this.addr,!1,ys),Ss(n,r)}}function ks(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(xs(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ss(n,t)}else{if(xs(n,r))return;vs.set(r),e.uniformMatrix3fv(this.addr,!1,vs),Ss(n,r)}}function As(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(xs(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ss(n,t)}else{if(xs(n,r))return;_s.set(r),e.uniformMatrix4fv(this.addr,!1,_s),Ss(n,r)}}function js(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Ms(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(xs(n,t))return;e.uniform2iv(this.addr,t),Ss(n,t)}}function Ns(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(xs(n,t))return;e.uniform3iv(this.addr,t),Ss(n,t)}}function Ps(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(xs(n,t))return;e.uniform4iv(this.addr,t),Ss(n,t)}}function Fs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Is(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(xs(n,t))return;e.uniform2uiv(this.addr,t),Ss(n,t)}}function Ls(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(xs(n,t))return;e.uniform3uiv(this.addr,t),Ss(n,t)}}function Rs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(xs(n,t))return;e.uniform4uiv(this.addr,t),Ss(n,t)}}function zs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(ds.compareFunction=n.isReversedDepthBuffer()?518:515,a=ds):a=us,n.setTexture2D(t||a,i)}function Bs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||ps,i)}function Vs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||ms,i)}function Hs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||fs,i)}function Us(e){switch(e){case 5126:return ws;case 35664:return Ts;case 35665:return Es;case 35666:return Ds;case 35674:return Os;case 35675:return ks;case 35676:return As;case 5124:case 35670:return js;case 35667:case 35671:return Ms;case 35668:case 35672:return Ns;case 35669:case 35673:return Ps;case 5125:return Fs;case 36294:return Is;case 36295:return Ls;case 36296:return Rs;case 35678:case 36198:case 36298:case 36306:case 35682:return zs;case 35679:case 36299:case 36307:return Bs;case 35680:case 36300:case 36308:case 36293:return Vs;case 36289:case 36303:case 36311:case 36292:return Hs}}function Ws(e,t){e.uniform1fv(this.addr,t)}function Gs(e,t){let n=bs(t,this.size,2);e.uniform2fv(this.addr,n)}function Ks(e,t){let n=bs(t,this.size,3);e.uniform3fv(this.addr,n)}function qs(e,t){let n=bs(t,this.size,4);e.uniform4fv(this.addr,n)}function Js(e,t){let n=bs(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Ys(e,t){let n=bs(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Xs(e,t){let n=bs(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Zs(e,t){e.uniform1iv(this.addr,t)}function Qs(e,t){e.uniform2iv(this.addr,t)}function $s(e,t){e.uniform3iv(this.addr,t)}function ec(e,t){e.uniform4iv(this.addr,t)}function tc(e,t){e.uniform1uiv(this.addr,t)}function nc(e,t){e.uniform2uiv(this.addr,t)}function rc(e,t){e.uniform3uiv(this.addr,t)}function ic(e,t){e.uniform4uiv(this.addr,t)}function ac(e,t,n){let r=this.cache,i=t.length,a=Cs(n,i);xs(r,a)||(e.uniform1iv(this.addr,a),Ss(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?ds:us;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function oc(e,t,n){let r=this.cache,i=t.length,a=Cs(n,i);xs(r,a)||(e.uniform1iv(this.addr,a),Ss(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||ps,a[e])}function sc(e,t,n){let r=this.cache,i=t.length,a=Cs(n,i);xs(r,a)||(e.uniform1iv(this.addr,a),Ss(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||ms,a[e])}function cc(e,t,n){let r=this.cache,i=t.length,a=Cs(n,i);xs(r,a)||(e.uniform1iv(this.addr,a),Ss(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||fs,a[e])}function lc(e){switch(e){case 5126:return Ws;case 35664:return Gs;case 35665:return Ks;case 35666:return qs;case 35674:return Js;case 35675:return Ys;case 35676:return Xs;case 5124:case 35670:return Zs;case 35667:case 35671:return Qs;case 35668:case 35672:return $s;case 35669:case 35673:return ec;case 5125:return tc;case 36294:return nc;case 36295:return rc;case 36296:return ic;case 35678:case 36198:case 36298:case 36306:case 35682:return ac;case 35679:case 36299:case 36307:return oc;case 35680:case 36300:case 36308:case 36293:return sc;case 36289:case 36303:case 36311:case 36292:return cc}}var uc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Us(t.type)}},dc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=lc(t.type)}},fc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},pc=/(\w+)(\])?(\[|\.)?/g;function mc(e,t){e.seq.push(t),e.map[t.id]=t}function hc(e,t,n){let r=e.name,i=r.length;for(pc.lastIndex=0;;){let a=pc.exec(r),o=pc.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){mc(n,l===void 0?new uc(s,e,t):new dc(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new fc(s),mc(n,e)),n=e}}}var gc=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);hc(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function _c(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var vc=37297,yc=0;function bc(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var xc=new W;function Sc(e){Pt._getMatrix(xc,Pt.workingColorSpace,e);let t=`mat3( ${xc.elements.map(e=>e.toFixed(4))} )`;switch(Pt.getTransfer(e)){case Re:return[t,`LinearTransferOETF`];case ze:return[t,`sRGBTransferOETF`];default:return B(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Cc(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+bc(e.getShaderSource(t),r)}return i}function wc(e,t){let n=Sc(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Tc={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Ec(e,t){let n=Tc[t];return n===void 0?(B(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Dc=new U;function Oc(){return Pt.getLuminanceCoefficients(Dc),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Dc.x.toFixed(4)}, ${Dc.y.toFixed(4)}, ${Dc.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function kc(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Mc).join(`
`)}function Ac(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function jc(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Mc(e){return e!==``}function Nc(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Pc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Fc=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ic(e){return e.replace(Fc,Rc)}var Lc=new Map;function Rc(e,t){let n=Co[t];if(n===void 0){let e=Lc.get(t);if(e!==void 0)n=Co[e],B(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Ic(n)}var zc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bc(e){return e.replace(zc,Vc)}function Vc(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Hc(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Uc={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Wc(e){return Uc[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Gc={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Kc(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Gc[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var qc={302:`ENVMAP_MODE_REFRACTION`};function Jc(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:qc[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Yc={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Xc(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Yc[e.combine]||`ENVMAP_BLENDING_NONE`}function Zc(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Qc(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Wc(n),l=Kc(n),u=Jc(n),d=Xc(n),f=Zc(n),p=kc(n),m=Ac(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Mc).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Mc).join(`
`),_.length>0&&(_+=`
`)):(g=[Hc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Mc).join(`
`),_=[Hc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Co.tonemapping_pars_fragment,n.toneMapping===0?``:Ec(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Co.colorspace_pars_fragment,wc(`linearToOutputTexel`,n.outputColorSpace),Oc(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Mc).join(`
`)),o=Ic(o),o=Nc(o,n),o=Pc(o,n),s=Ic(s),s=Nc(s,n),s=Pc(s,n),o=Bc(o),s=Bc(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=_c(i,i.VERTEX_SHADER,y),S=_c(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Cc(i,x,`vertex`),n=Cc(i,S,`fragment`);V(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):B(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new gc(i,h),T=jc(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,vc)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=yc++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var $c=0,el=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new tl(e),t.set(e,n)),n}},tl=class{constructor(e){this.id=$c++,this.code=e,this.usedTimes=0}};function nl(e){return e===1030||e===37490||e===36285}function rl(e,t,n,r,i,a){let o=new cn,s=new el,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&B(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=wo[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),M=e.state.buffers.depth.getReversed(),N=h.isInstancedMesh===!0,P=h.isBatchedMesh===!0,ee=!!i.map,F=!!i.matcap,te=!!x,ne=!!i.aoMap,re=!!i.lightMap,ie=!!i.bumpMap&&i.wireframe===!1,ae=!!i.normalMap,oe=!!i.displacementMap,se=!!i.emissiveMap,I=!!i.metalnessMap,ce=!!i.roughnessMap,le=i.anisotropy>0,ue=i.clearcoat>0,de=i.dispersion>0,fe=i.retroreflectivity>0,pe=i.iridescence>0,me=i.sheen>0,he=i.transmission>0,ge=le&&!!i.anisotropyMap,_e=ue&&!!i.clearcoatMap,ve=ue&&!!i.clearcoatNormalMap,ye=ue&&!!i.clearcoatRoughnessMap,be=pe&&!!i.iridescenceMap,xe=pe&&!!i.iridescenceThicknessMap,Se=me&&!!i.sheenColorMap,Ce=me&&!!i.sheenRoughnessMap,we=!!i.specularMap,Te=!!i.specularColorMap,Ee=!!i.specularIntensityMap,De=he&&!!i.transmissionMap,Oe=he&&!!i.thicknessMap,ke=!!i.gradientMap,Ae=!!i.alphaMap,je=i.alphaTest>0,L=!!i.alphaHash,Me=!!i.extensions,Ne=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ne=e.toneMapping);let Pe={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:P,batchingColor:P&&h._colorsTexture!==null,instancing:N,instancingColor:N&&h.instanceColor!==null,instancingMorph:N&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Pt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ee,matcap:F,envMap:te,envMapMode:te&&x.mapping,envMapCubeUVHeight:S,aoMap:ne,lightMap:re,bumpMap:ie,normalMap:ae,displacementMap:oe,emissiveMap:se,normalMapObjectSpace:ae&&i.normalMapType===1,normalMapTangentSpace:ae&&i.normalMapType===0,packedNormalMap:ae&&i.normalMapType===0&&nl(i.normalMap.format),metalnessMap:I,roughnessMap:ce,anisotropy:le,anisotropyMap:ge,clearcoat:ue,clearcoatMap:_e,clearcoatNormalMap:ve,clearcoatRoughnessMap:ye,dispersion:de,retroreflection:fe,iridescence:pe,iridescenceMap:be,iridescenceThicknessMap:xe,sheen:me,sheenColorMap:Se,sheenRoughnessMap:Ce,specularMap:we,specularColorMap:Te,specularIntensityMap:Ee,transmission:he,transmissionMap:De,thicknessMap:Oe,gradientMap:ke,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ae,alphaTest:je,alphaHash:L,combine:i.combine,mapUv:ee&&m(i.map.channel),aoMapUv:ne&&m(i.aoMap.channel),lightMapUv:re&&m(i.lightMap.channel),bumpMapUv:ie&&m(i.bumpMap.channel),normalMapUv:ae&&m(i.normalMap.channel),displacementMapUv:oe&&m(i.displacementMap.channel),emissiveMapUv:se&&m(i.emissiveMap.channel),metalnessMapUv:I&&m(i.metalnessMap.channel),roughnessMapUv:ce&&m(i.roughnessMap.channel),anisotropyMapUv:ge&&m(i.anisotropyMap.channel),clearcoatMapUv:_e&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:ve&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&m(i.sheenRoughnessMap.channel),specularMapUv:we&&m(i.specularMap.channel),specularColorMapUv:Te&&m(i.specularColorMap.channel),specularIntensityMapUv:Ee&&m(i.specularIntensityMap.channel),transmissionMapUv:De&&m(i.transmissionMap.channel),thicknessMapUv:Oe&&m(i.thicknessMap.channel),alphaMapUv:Ae&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(ae||le),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(ee||Ae),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&ae===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:M,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ne,decodeVideoTexture:ee&&i.map.isVideoTexture===!0&&Pt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:se&&i.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Me&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Me&&i.extensions.multiDraw===!0||P)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Pe.vertexUv1s=c.has(1),Pe.vertexUv2s=c.has(2),Pe.vertexUv3s=c.has(3),c.clear(),Pe}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=wo[t];n=ra.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Qc(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function il(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function al(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function ol(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function sl(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||al),r.length>1&&r.sort(t||ol),i.length>1&&i.sort(t||ol)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function cl(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new sl,e.set(t,[i])):n>=r.length?(i=new sl,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function ll(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new U,color:new jn};break;case`SpotLight`:n={position:new U,direction:new U,color:new jn,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new U,color:new jn,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new U,skyColor:new jn,groundColor:new jn};break;case`RectAreaLight`:n={color:new jn,position:new U,halfWidth:new U,halfHeight:new U}}return e[t.id]=n,n}}}function ul(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var dl=0;function fl(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function pl(e){let t=new ll,n=ul(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new U);let i=new U,a=new Xt,o=new Xt;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(fl);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Q.LTC_FLOAT_1,r.rectAreaLTC2=Q.LTC_FLOAT_2):(r.rectAreaLTC1=Q.LTC_HALF_1,r.rectAreaLTC2=Q.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=dl++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function ml(e){let t=new pl(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function hl(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new ml(e),t.set(n,[a])):r>=i.length?(a=new ml(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var gl=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_l=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,vl=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],yl=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],bl=new Xt,xl=new U,Sl=new U;function Cl(e,t,n){let i=new pi,a=new H,s=new H,c=new Gt,l=new la,u=new ua,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},_=new oa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new H},radius:{value:4}},vertexShader:gl,fragmentShader:_l}),v=_.clone();v.defines.HORIZONTAL_PASS=1;let y=new Or;y.setAttribute(`position`,new pr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new K(y,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(B(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.state;_.setBlending(0),_.buffers.depth.getReversed()===!0?_.buffers.color.setClear(0,0,0,0):_.buffers.color.setClear(1,1,1,1),_.buffers.depth.setTest(!0),_.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){B(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),s.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(s.x=Math.floor(f/y.x),a.x=s.x*y.x,p.mapSize.x=s.x),a.y>f&&(s.y=Math.floor(f/y.y),a.y=s.y*y.y,p.mapSize.y=s.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){B(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new qt(a.x,a.y,{format:k,type:g,minFilter:o,magFilter:o,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new Ii(a.x,a.y,h),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=T,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r}else d.isPointLight?(p.map=new es(a.x),p.map.depthTexture=new Li(a.x,m)):(p.map=new qt(a.x,a.y),p.map.depthTexture=new Ii(a.x,a.y,m)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=T,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==a.x||p.map.height!==a.y)&&p.map.setSize(a.x,a.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);for(let t=0;t<x;t++){let r=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),xl.setFromMatrixPosition(d.matrixWorld),e.position.copy(xl),Sl.copy(e.position),Sl.add(vl[t]),e.up.copy(yl[t]),e.lookAt(Sl),e.updateMatrixWorld(),n.makeTranslation(-xl.x,-xl.y,-xl.z),bl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(bl,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(s.x*n.x,s.y*n.y,s.x*n.z,s.y*n.w),_.viewport(c)}i=p.getFrustum(t),E(n,l,r,d,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);_.defines.VSM_SAMPLES!==n.blurSamples&&(_.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,_.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null?n.mapPass=new qt(a.x,a.y,{format:k,type:g}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),_.uniforms.shadow_pass.value=n.map.depthTexture,_.uniforms.resolution.value.set(n.map.width,n.map.height),_.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,_,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value.set(n.map.width,n.map.height),v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function E(n,r,a,o,s){if(n.visible===!1)return;if(n.layers.test(r.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(i))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),c=n.material;if(Array.isArray(c)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)E(c[e],r,a,o,s)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function wl(e,t){function n(){let t=!1,n=new Gt,r=null,i=new Gt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?I(e.DEPTH_TEST):ce(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Qe[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?I(e.STENCIL_TEST):ce(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new jn(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,P=0,ee=e.getParameter(e.VERSION);ee.indexOf(`WebGL`)===-1?ee.indexOf(`OpenGL ES`)!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),N=P>=2):(P=parseFloat(/^WebGL (\d)/.exec(ee)[1]),N=P>=1);let F=null,te={},ne=e.getParameter(e.SCISSOR_BOX),re=e.getParameter(e.VIEWPORT),ie=new Gt().fromArray(ne),ae=new Gt().fromArray(re);function oe(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let se={};se[e.TEXTURE_2D]=oe(e.TEXTURE_2D,e.TEXTURE_2D,1),se[e.TEXTURE_CUBE_MAP]=oe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[e.TEXTURE_2D_ARRAY]=oe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),se[e.TEXTURE_3D]=oe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),I(e.DEPTH_TEST),o.setFunc(3),ge(!1),_e(1),I(e.CULL_FACE),me(0);function I(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ce(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function le(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function ue(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function de(t){return h!==t&&(e.useProgram(t),h=t,!0)}let fe={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};fe[103]=e.MIN,fe[104]=e.MAX;let pe={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function me(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(ce(e.BLEND),g=!1);return}if(g===!1&&(I(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:V(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:V(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:V(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:V(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(fe[n],fe[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(pe[r],pe[i],pe[o],pe[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function he(t,n){t.side===2?ce(e.CULL_FACE):I(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ge(r),t.blending===1&&t.transparent===!1?me(0):me(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),ye(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?I(e.SAMPLE_ALPHA_TO_COVERAGE):ce(e.SAMPLE_ALPHA_TO_COVERAGE)}function ge(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function _e(t){t===0?ce(e.CULL_FACE):(I(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function ve(t){t!==k&&(N&&e.lineWidth(t),k=t)}function ye(t,n,r){t?(I(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):ce(e.POLYGON_OFFSET_FILL)}function be(t){t?I(e.SCISSOR_TEST):ce(e.SCISSOR_TEST)}function xe(t){t===void 0&&(t=e.TEXTURE0+M-1),F!==t&&(e.activeTexture(t),F=t)}function Se(t,n,r){r===void 0&&(r=F===null?e.TEXTURE0+M-1:F);let i=te[r];i===void 0&&(i={type:void 0,texture:void 0},te[r]=i),(i.type!==t||i.texture!==n)&&(F!==r&&(e.activeTexture(r),F=r),e.bindTexture(t,n||se[t]),i.type=t,i.texture=n)}function Ce(){let t=te[F];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function we(){try{e.compressedTexImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Te(){try{e.compressedTexImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Ee(){try{e.texSubImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function De(){try{e.texSubImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Oe(){try{e.compressedTexSubImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function ke(){try{e.compressedTexSubImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Ae(){try{e.texStorage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function je(){try{e.texStorage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function L(){try{e.texImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Me(){try{e.texImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Ne(t){return d[t]===void 0?e.getParameter(t):d[t]}function Pe(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function R(t){ie.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ie.copy(t))}function Fe(t){ae.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ae.copy(t))}function z(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Ie(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Le(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},F=null,te={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new jn(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ie.set(0,0,e.canvas.width,e.canvas.height),ae.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:I,disable:ce,bindFramebuffer:le,drawBuffers:ue,useProgram:de,setBlending:me,setMaterial:he,setFlipSided:ge,setCullFace:_e,setLineWidth:ve,setPolygonOffset:ye,setScissorTest:be,activeTexture:xe,bindTexture:Se,unbindTexture:Ce,compressedTexImage2D:we,compressedTexImage3D:Te,texImage2D:L,texImage3D:Me,pixelStorei:Pe,getParameter:Ne,updateUBOMapping:z,uniformBlockBinding:Ie,texStorage2D:Ae,texStorage3D:je,texSubImage2D:Ee,texSubImage3D:De,compressedTexSubImage2D:Oe,compressedTexSubImage3D:ke,scissor:R,viewport:Fe,reset:Le}}function Tl(l,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new H,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):Ge(`canvas`)}function T(e,t,n){let r=1,i=Ne(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),B(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&B(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function D(e){return e.generateMipmaps}function O(e){l.generateMipmap(e)}function k(e){return e.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:e.isWebGL3DRenderTarget?l.TEXTURE_3D:e.isWebGLArrayRenderTarget||e.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function A(e,t,n,r,i,a=!1){if(e!==null){if(l[e]!==void 0)return l[e];B(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let o;r&&(o=u.get(`EXT_texture_norm16`),o||B(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let s=t;if(t===l.RED&&(n===l.FLOAT&&(s=l.R32F),n===l.HALF_FLOAT&&(s=l.R16F),n===l.UNSIGNED_BYTE&&(s=l.R8),n===l.UNSIGNED_SHORT&&o&&(s=o.R16_EXT),n===l.SHORT&&o&&(s=o.R16_SNORM_EXT)),t===l.RED_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.R8UI),n===l.UNSIGNED_SHORT&&(s=l.R16UI),n===l.UNSIGNED_INT&&(s=l.R32UI),n===l.BYTE&&(s=l.R8I),n===l.SHORT&&(s=l.R16I),n===l.INT&&(s=l.R32I)),t===l.RG&&(n===l.FLOAT&&(s=l.RG32F),n===l.HALF_FLOAT&&(s=l.RG16F),n===l.UNSIGNED_BYTE&&(s=l.RG8),n===l.UNSIGNED_SHORT&&o&&(s=o.RG16_EXT),n===l.SHORT&&o&&(s=o.RG16_SNORM_EXT)),t===l.RG_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RG8UI),n===l.UNSIGNED_SHORT&&(s=l.RG16UI),n===l.UNSIGNED_INT&&(s=l.RG32UI),n===l.BYTE&&(s=l.RG8I),n===l.SHORT&&(s=l.RG16I),n===l.INT&&(s=l.RG32I)),t===l.RGB_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGB8UI),n===l.UNSIGNED_SHORT&&(s=l.RGB16UI),n===l.UNSIGNED_INT&&(s=l.RGB32UI),n===l.BYTE&&(s=l.RGB8I),n===l.SHORT&&(s=l.RGB16I),n===l.INT&&(s=l.RGB32I)),t===l.RGBA_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGBA8UI),n===l.UNSIGNED_SHORT&&(s=l.RGBA16UI),n===l.UNSIGNED_INT&&(s=l.RGBA32UI),n===l.BYTE&&(s=l.RGBA8I),n===l.SHORT&&(s=l.RGBA16I),n===l.INT&&(s=l.RGBA32I)),t===l.RGB&&(n===l.UNSIGNED_SHORT&&o&&(s=o.RGB16_EXT),n===l.SHORT&&o&&(s=o.RGB16_SNORM_EXT),n===l.UNSIGNED_INT_5_9_9_9_REV&&(s=l.RGB9_E5),n===l.UNSIGNED_INT_10F_11F_11F_REV&&(s=l.R11F_G11F_B10F)),t===l.RGBA){let e=a?Re:Pt.getTransfer(i);n===l.FLOAT&&(s=l.RGBA32F),n===l.HALF_FLOAT&&(s=l.RGBA16F),n===l.UNSIGNED_BYTE&&(s=e===`srgb`?l.SRGB8_ALPHA8:l.RGBA8),n===l.UNSIGNED_SHORT&&o&&(s=o.RGBA16_EXT),n===l.SHORT&&o&&(s=o.RGBA16_SNORM_EXT),n===l.UNSIGNED_SHORT_4_4_4_4&&(s=l.RGBA4),n===l.UNSIGNED_SHORT_5_5_5_1&&(s=l.RGB5_A1)}return(s===l.R16F||s===l.R32F||s===l.RG16F||s===l.RG32F||s===l.RGBA16F||s===l.RGBA32F)&&u.get(`EXT_color_buffer_float`),s}function j(e,t){let n;return e?t===null||t===1014||t===1020?n=l.DEPTH24_STENCIL8:t===1015?n=l.DEPTH32F_STENCIL8:t===1012&&(n=l.DEPTH24_STENCIL8,B(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):t===null||t===1014||t===1020?n=l.DEPTH_COMPONENT24:t===1015?n=l.DEPTH_COMPONENT32F:t===1012&&(n=l.DEPTH_COMPONENT16),n}function M(e,t){return D(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function N(e){let t=e.target;t.removeEventListener(`dispose`,N),ee(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function P(e){let t=e.target;t.removeEventListener(`dispose`,P),te(t)}function ee(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&F(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function F(e){let t=f.get(e);l.deleteTexture(t.__webglTexture);let n=e.source,r=S.get(n);delete r[t.__cacheKey],h.memory.textures--}function te(e){let t=f.get(e);if(e.depthTexture&&(e.depthTexture.dispose(),f.remove(e.depthTexture)),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(t.__webglFramebuffer[e]))for(let n=0;n<t.__webglFramebuffer[e].length;n++)l.deleteFramebuffer(t.__webglFramebuffer[e][n]);else l.deleteFramebuffer(t.__webglFramebuffer[e]);t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer[e])}else{if(Array.isArray(t.__webglFramebuffer))for(let e=0;e<t.__webglFramebuffer.length;e++)l.deleteFramebuffer(t.__webglFramebuffer[e]);else l.deleteFramebuffer(t.__webglFramebuffer);if(t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer),t.__webglMultisampledFramebuffer&&l.deleteFramebuffer(t.__webglMultisampledFramebuffer),t.__webglColorRenderbuffer)for(let e=0;e<t.__webglColorRenderbuffer.length;e++)t.__webglColorRenderbuffer[e]&&l.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);t.__webglDepthRenderbuffer&&l.deleteRenderbuffer(t.__webglDepthRenderbuffer)}let n=e.textures;for(let e=0,t=n.length;e<t;e++){let t=f.get(n[e]);t.__webglTexture&&(l.deleteTexture(t.__webglTexture),h.memory.textures--),f.remove(n[e])}f.remove(e)}let ne=0;function re(){ne=0}function ie(){return ne}function ae(e){ne=e}function oe(){let e=ne;return e>=p.maxTextures&&B(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),ne+=1,e}function se(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function I(e,t){let n=f.get(e);if(e.isVideoTexture&&L(e),e.isRenderTargetTexture===!1&&e.isExternalTexture!==!0&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)B(`WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)B(`WebGLRenderer: Texture marked for update but image is incomplete`);else{ve(n,e,t);return}}else e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null);d.bindTexture(l.TEXTURE_2D,n.__webglTexture,l.TEXTURE0+t)}function ce(e,t){let n=f.get(e);if(e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version){ve(n,e,t);return}e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null),d.bindTexture(l.TEXTURE_2D_ARRAY,n.__webglTexture,l.TEXTURE0+t)}function le(e,t){let n=f.get(e);if(e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version){ve(n,e,t);return}d.bindTexture(l.TEXTURE_3D,n.__webglTexture,l.TEXTURE0+t)}function ue(e,t){let n=f.get(e);if(e.isCubeDepthTexture!==!0&&e.version>0&&n.__version!==e.version){ye(n,e,t);return}d.bindTexture(l.TEXTURE_CUBE_MAP,n.__webglTexture,l.TEXTURE0+t)}let de={[e]:l.REPEAT,[t]:l.CLAMP_TO_EDGE,[n]:l.MIRRORED_REPEAT},fe={[r]:l.NEAREST,[i]:l.NEAREST_MIPMAP_NEAREST,[a]:l.NEAREST_MIPMAP_LINEAR,[o]:l.LINEAR,[s]:l.LINEAR_MIPMAP_NEAREST,[c]:l.LINEAR_MIPMAP_LINEAR},pe={512:l.NEVER,519:l.ALWAYS,513:l.LESS,515:l.LEQUAL,514:l.EQUAL,518:l.GEQUAL,516:l.GREATER,517:l.NOTEQUAL};function me(e,t){if(t.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(t.magFilter===1006||t.magFilter===1007||t.magFilter===1005||t.magFilter===1008||t.minFilter===1006||t.minFilter===1007||t.minFilter===1005||t.minFilter===1008)&&B(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),l.texParameteri(e,l.TEXTURE_WRAP_S,de[t.wrapS]),l.texParameteri(e,l.TEXTURE_WRAP_T,de[t.wrapT]),(e===l.TEXTURE_3D||e===l.TEXTURE_2D_ARRAY)&&l.texParameteri(e,l.TEXTURE_WRAP_R,de[t.wrapR]),l.texParameteri(e,l.TEXTURE_MAG_FILTER,fe[t.magFilter]),l.texParameteri(e,l.TEXTURE_MIN_FILTER,fe[t.minFilter]),t.compareFunction&&(l.texParameteri(e,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(e,l.TEXTURE_COMPARE_FUNC,pe[t.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(t.anisotropy>1||f.get(t).__currentAnisotropy){let n=u.get(`EXT_texture_filter_anisotropic`);l.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,p.getMaxAnisotropy())),f.get(t).__currentAnisotropy=t.anisotropy}}}function he(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,N));let r=t.source,i=S.get(r);i===void 0&&(i={},S.set(r,i));let a=se(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:l.createTexture(),usedTimes:0},h.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&F(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function ge(e,t,n){return Math.floor(Math.floor(e/n)/t)}function _e(e,t,n,r){let i=e.updateRanges;if(i.length===0)d.texSubImage2D(l.TEXTURE_2D,0,0,0,t.width,t.height,n,r,t.data);else{i.sort((e,t)=>e.start-t.start);let a=0;for(let e=1;e<i.length;e++){let n=i[a],r=i[e],o=n.start+n.count,s=ge(r.start,t.width,4),c=ge(n.start,t.width,4);r.start<=o+1&&s===c&&ge(r.start+r.count-1,t.width,4)===s?n.count=Math.max(n.count,r.start+r.count-n.start):(++a,i[a]=r)}i.length=a+1;let o=d.getParameter(l.UNPACK_ROW_LENGTH),s=d.getParameter(l.UNPACK_SKIP_PIXELS),c=d.getParameter(l.UNPACK_SKIP_ROWS);d.pixelStorei(l.UNPACK_ROW_LENGTH,t.width);for(let e=0,a=i.length;e<a;e++){let a=i[e],o=Math.floor(a.start/4),s=Math.ceil(a.count/4),c=o%t.width,u=Math.floor(o/t.width),f=s;d.pixelStorei(l.UNPACK_SKIP_PIXELS,c),d.pixelStorei(l.UNPACK_SKIP_ROWS,u),d.texSubImage2D(l.TEXTURE_2D,0,c,u,f,1,n,r,t.data)}e.clearUpdateRanges(),d.pixelStorei(l.UNPACK_ROW_LENGTH,o),d.pixelStorei(l.UNPACK_SKIP_PIXELS,s),d.pixelStorei(l.UNPACK_SKIP_ROWS,c)}}function ve(e,t,n){let r=l.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=l.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=l.TEXTURE_3D);let i=he(e,t),a=t.source;d.bindTexture(r,e.__webglTexture,l.TEXTURE0+n);let o=f.get(a);if(a.version!==o.__version||i===!0){if(d.activeTexture(l.TEXTURE0+n),!(typeof ImageBitmap<`u`&&t.image instanceof ImageBitmap)){let e=Pt.getPrimaries(Pt.workingColorSpace),n=t.colorSpace===``?null:Pt.getPrimaries(t.colorSpace),r=t.colorSpace===``||e===n?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,r)}d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment);let e=T(t.image,!1,p.maxTextureSize);e=Me(t,e);let s=m.convert(t.format,t.colorSpace),c=m.convert(t.type),u=A(t.internalFormat,s,c,t.normalized,t.colorSpace,t.isVideoTexture);me(r,t);let f,h=t.mipmaps,g=t.isVideoTexture!==!0,_=o.__version===void 0||i===!0,v=a.dataReady,y=M(t,e);if(t.isDepthTexture)u=j(t.format===E,t.type),_&&(g?d.texStorage2D(l.TEXTURE_2D,1,u,e.width,e.height):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,null));else if(t.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data);t.generateMipmaps=!1}else g?(_&&d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height),v&&_e(t,e,s,c)):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,e.data)}else if(t.isCompressedTexture){if(t.isCompressedArrayTexture){g&&_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,e.depth);for(let n=0,r=h.length;n<r;n++)if(f=h[n],t.format!==1023){if(s!==null){if(g){if(v){if(t.layerUpdates.size>0){let e=yo(f.width,f.height,t.format,t.type);for(let r of t.layerUpdates){let t=f.data.subarray(r*e/f.data.BYTES_PER_ELEMENT,(r+1)*e/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,r,f.width,f.height,1,s,t)}}else d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,f.data)}}else d.compressedTexImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,f.data,0,0)}else B(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,c,f.data):d.texImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,s,c,f.data);t.layerUpdates.size>0&&t.clearLayerUpdates()}else{g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,n=h.length;e<n;e++)f=h[e],t.format===1023?g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data):s===null?B(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,f.data):d.compressedTexImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,f.data)}}else if(t.isDataArrayTexture){if(g){if(_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,e.width,e.height,e.depth),v){if(t.layerUpdates.size>0){let n=yo(e.width,e.height,t.format,t.type);for(let r of t.layerUpdates){let t=e.data.subarray(r*n/e.data.BYTES_PER_ELEMENT,(r+1)*n/e.data.BYTES_PER_ELEMENT);d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,r,e.width,e.height,1,s,c,t)}t.clearLayerUpdates()}else d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)}}else d.texImage3D(l.TEXTURE_2D_ARRAY,0,u,e.width,e.height,e.depth,0,s,c,e.data)}else if(t.isData3DTexture)g?(_&&d.texStorage3D(l.TEXTURE_3D,y,u,e.width,e.height,e.depth),v&&d.texSubImage3D(l.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)):d.texImage3D(l.TEXTURE_3D,0,u,e.width,e.height,e.depth,0,s,c,e.data);else if(t.isFramebufferTexture){if(_){if(g)d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height);else{let t=e.width,n=e.height;for(let e=0;e<y;e++)d.texImage2D(l.TEXTURE_2D,e,u,t,n,0,s,c,null),t>>=1,n>>=1}}}else if(t.isHTMLTexture){if(`texElementImage2D`in l){let n=l.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),e.parentNode!==n){n.appendChild(e),b.add(t),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(l.texElementImage2D.length===3)l.texElementImage2D(l.TEXTURE_2D,l.RGBA8,e);else{let t=l.RGBA,n=l.RGBA,r=l.UNSIGNED_BYTE;l.texElementImage2D(l.TEXTURE_2D,0,t,n,r,e)}l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let e=Ne(h[0]);d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height)}for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,s,c,f):d.texImage2D(l.TEXTURE_2D,e,u,s,c,f);t.generateMipmaps=!1}else if(g){if(_){let t=Ne(e);d.texStorage2D(l.TEXTURE_2D,y,u,t.width,t.height)}v&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,s,c,e)}else d.texImage2D(l.TEXTURE_2D,0,u,s,c,e);D(t)&&O(r),o.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function ye(e,t,n){if(t.image.length!==6)return;let r=he(e,t),i=t.source;d.bindTexture(l.TEXTURE_CUBE_MAP,e.__webglTexture,l.TEXTURE0+n);let a=f.get(i);if(i.version!==a.__version||r===!0){d.activeTexture(l.TEXTURE0+n);let e=Pt.getPrimaries(Pt.workingColorSpace),o=t.colorSpace===``?null:Pt.getPrimaries(t.colorSpace),s=t.colorSpace===``||e===o?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let c=t.isCompressedTexture||t.image[0].isCompressedTexture,u=t.image[0]&&t.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!c&&!u?f[e]=T(t.image[e],!0,p.maxCubemapSize):f[e]=u?t.image[e].image:t.image[e],f[e]=Me(t,f[e]);let h=f[0],g=m.convert(t.format,t.colorSpace),_=m.convert(t.type),v=A(t.internalFormat,g,_,t.normalized,t.colorSpace),y=t.isVideoTexture!==!0,b=a.__version===void 0||r===!0,x=i.dataReady,S=M(t,h);me(l.TEXTURE_CUBE_MAP,t);let C;if(c){y&&b&&d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let e=0;e<6;e++){C=f[e].mipmaps;for(let n=0;n<C.length;n++){let r=C[n];t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,_,r.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,g,_,r.data):g===null?B(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,r.data):d.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,r.data)}}}else{if(C=t.mipmaps,y&&b){C.length>0&&S++;let e=Ne(f[0]);d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,e.width,e.height)}for(let e=0;e<6;e++)if(u){y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,f[e].width,f[e].height,g,_,f[e].data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,f[e].width,f[e].height,0,g,_,f[e].data);for(let t=0;t<C.length;t++){let n=C[t].image[e].image;y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,g,_,n.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,n.width,n.height,0,g,_,n.data)}}else{y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,g,_,f[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,g,_,f[e]);for(let t=0;t<C.length;t++){let n=C[t];y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,g,_,n.image[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,g,_,n.image[e])}}}D(t)&&O(l.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function be(e,t,n,r,i,a){let o=m.convert(n.format,n.colorSpace),s=m.convert(n.type),c=A(n.internalFormat,o,s,n.normalized,n.colorSpace),u=f.get(t),p=f.get(n);if(p.__renderTarget=t,!u.__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===l.TEXTURE_3D||i===l.TEXTURE_2D_ARRAY?d.texImage3D(i,a,c,e,n,t.depth,0,o,s,null):d.texImage2D(i,a,c,e,n,0,o,s,null)}d.bindFramebuffer(l.FRAMEBUFFER,e),je(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,r,i,p.__webglTexture,0,Ae(t)):(i===l.TEXTURE_2D||i>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,r,i,p.__webglTexture,a),d.bindFramebuffer(l.FRAMEBUFFER,null)}function xe(e,t,n){if(l.bindRenderbuffer(l.RENDERBUFFER,e),t.depthBuffer){let r=t.depthTexture,i=r&&r.isDepthTexture?r.type:null,a=j(t.stencilBuffer,i),o=t.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;je(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Ae(t),a,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Ae(t),a,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,a,t.width,t.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,o,l.RENDERBUFFER,e)}else{let e=t.textures;for(let r=0;r<e.length;r++){let i=e[r],a=m.convert(i.format,i.colorSpace),o=m.convert(i.type),s=A(i.internalFormat,a,o,i.normalized,i.colorSpace);je(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Ae(t),s,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Ae(t),s,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,s,t.width,t.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function Se(e,t,n){let r=t.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(l.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let i=f.get(t.depthTexture);if(i.__renderTarget=t,(!i.__webglTexture||t.depthTexture.image.width!==t.width||t.depthTexture.image.height!==t.height)&&(t.depthTexture.image.width=t.width,t.depthTexture.image.height=t.height,t.depthTexture.needsUpdate=!0),r){if(i.__webglInit===void 0&&(i.__webglInit=!0,t.depthTexture.addEventListener(`dispose`,N)),i.__webglTexture===void 0){i.__webglTexture=l.createTexture(),d.bindTexture(l.TEXTURE_CUBE_MAP,i.__webglTexture),me(l.TEXTURE_CUBE_MAP,t.depthTexture);let e=m.convert(t.depthTexture.format),n=m.convert(t.depthTexture.type),r;t.depthTexture.format===1026?r=l.DEPTH_COMPONENT24:t.depthTexture.format===1027&&(r=l.DEPTH24_STENCIL8);for(let i=0;i<6;i++)l.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,r,t.width,t.height,0,e,n,null)}}else I(t.depthTexture,0);let a=i.__webglTexture,o=Ae(t),s=r?l.TEXTURE_CUBE_MAP_POSITIVE_X+n:l.TEXTURE_2D,c=t.depthTexture.format===1027?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;if(t.depthTexture.format===1026)je(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,c,s,a,0,o):l.framebufferTexture2D(l.FRAMEBUFFER,c,s,a,0);else if(t.depthTexture.format===1027)je(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,c,s,a,0,o):l.framebufferTexture2D(l.FRAMEBUFFER,c,s,a,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Ce(e){let t=f.get(e),n=e.isWebGLCubeRenderTarget===!0;if(t.__boundDepthTexture!==e.depthTexture){let n=e.depthTexture;if(t.__depthDisposeCallback&&t.__depthDisposeCallback(),n){let e=()=>{delete t.__boundDepthTexture,delete t.__depthDisposeCallback,n.removeEventListener(`dispose`,e)};n.addEventListener(`dispose`,e),t.__depthDisposeCallback=e}t.__boundDepthTexture=n}if(e.depthTexture&&!t.__autoAllocateDepthBuffer){if(n)for(let n=0;n<6;n++)Se(t.__webglFramebuffer[n],e,n);else{let n=e.texture.mipmaps;n&&n.length>0?Se(t.__webglFramebuffer[0],e,0):Se(t.__webglFramebuffer,e,0)}}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]===void 0)t.__webglDepthbuffer[n]=l.createRenderbuffer(),xe(t.__webglDepthbuffer[n],e,!1);else{let r=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,i=t.__webglDepthbuffer[n];l.bindRenderbuffer(l.RENDERBUFFER,i),l.framebufferRenderbuffer(l.FRAMEBUFFER,r,l.RENDERBUFFER,i)}}else{let n=e.texture.mipmaps;if(n&&n.length>0?d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[0]):d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer===void 0)t.__webglDepthbuffer=l.createRenderbuffer(),xe(t.__webglDepthbuffer,e,!1);else{let n=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,r=t.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,r),l.framebufferRenderbuffer(l.FRAMEBUFFER,n,l.RENDERBUFFER,r)}}d.bindFramebuffer(l.FRAMEBUFFER,null)}function we(e,t,n){let r=f.get(e);t!==void 0&&be(r.__webglFramebuffer,e,e.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),n!==void 0&&Ce(e)}function Te(e){let t=e.texture,n=f.get(e),r=f.get(t);e.addEventListener(`dispose`,P);let i=e.textures,a=e.isWebGLCubeRenderTarget===!0,o=i.length>1;if(o||(r.__webglTexture===void 0&&(r.__webglTexture=l.createTexture()),r.__version=t.version,h.memory.textures++),a){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=l.createFramebuffer()}else n.__webglFramebuffer[e]=l.createFramebuffer()}else{if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=l.createFramebuffer()}else n.__webglFramebuffer=l.createFramebuffer();if(o)for(let e=0,t=i.length;e<t;e++){let t=f.get(i[e]);t.__webglTexture===void 0&&(t.__webglTexture=l.createTexture(),h.memory.textures++)}if(e.samples>0&&je(e)===!1){n.__webglMultisampledFramebuffer=l.createFramebuffer(),n.__webglColorRenderbuffer=[],d.bindFramebuffer(l.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<i.length;t++){let r=i[t];n.__webglColorRenderbuffer[t]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=m.convert(r.format,r.colorSpace),o=m.convert(r.type),s=A(r.internalFormat,a,o,r.normalized,r.colorSpace,e.isXRRenderTarget===!0),c=Ae(e);l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,e.width,e.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+t,l.RENDERBUFFER,n.__webglColorRenderbuffer[t])}l.bindRenderbuffer(l.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=l.createRenderbuffer(),xe(n.__webglDepthRenderbuffer,e,!0)),d.bindFramebuffer(l.FRAMEBUFFER,null)}}if(a){d.bindTexture(l.TEXTURE_CUBE_MAP,r.__webglTexture),me(l.TEXTURE_CUBE_MAP,t);for(let r=0;r<6;r++)if(t.mipmaps&&t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)be(n.__webglFramebuffer[r][i],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else be(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);D(t)&&O(l.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(o){for(let t=0,r=i.length;t<r;t++){let r=i[t],a=f.get(r),o=l.TEXTURE_2D;(e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(o=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(o,a.__webglTexture),me(o,r),be(n.__webglFramebuffer,e,r,l.COLOR_ATTACHMENT0+t,o,0),D(r)&&O(o)}d.unbindTexture()}else{let i=l.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(i=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(i,r.__webglTexture),me(i,t),t.mipmaps&&t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)be(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,i,r);else be(n.__webglFramebuffer,e,t,l.COLOR_ATTACHMENT0,i,0);D(t)&&O(i),d.unbindTexture()}e.depthBuffer&&Ce(e)}function Ee(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(D(r)){let t=k(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),O(t),d.unbindTexture()}}}let De=[],Oe=[];function ke(e){if(e.samples>0){if(je(e)===!1){let t=e.textures,n=e.width,r=e.height,i=l.COLOR_BUFFER_BIT,a=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,o=f.get(e),s=t.length>1;if(s)for(let e=0;e<t.length;e++)d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,null),d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,null,0);d.bindFramebuffer(l.READ_FRAMEBUFFER,o.__webglMultisampledFramebuffer);let c=e.texture.mipmaps;c&&c.length>0?d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer[0]):d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer);for(let c=0;c<t.length;c++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(i|=l.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(i|=l.STENCIL_BUFFER_BIT)),s){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,o.__webglColorRenderbuffer[c]);let e=f.get(t[c]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,e,0)}l.blitFramebuffer(0,0,n,r,0,0,n,r,i,l.NEAREST),_===!0&&(De.length=0,Oe.length=0,De.push(l.COLOR_ATTACHMENT0+c),e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&(De.push(a),Oe.push(a),l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,Oe)),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,De))}if(d.bindFramebuffer(l.READ_FRAMEBUFFER,null),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),s)for(let e=0;e<t.length;e++){d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,o.__webglColorRenderbuffer[e]);let n=f.get(t[e]).__webglTexture;d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,n,0)}d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&_){let t=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[t])}}}function Ae(e){return Math.min(p.maxSamples,e.samples)}function je(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function L(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Me(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Pt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&B(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):V(`WebGLTextures: Unsupported texture color space:`,n)),t}function Ne(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=oe,this.resetTextureUnits=re,this.getTextureUnits=ie,this.setTextureUnits=ae,this.setTexture2D=I,this.setTexture2DArray=ce,this.setTexture3D=le,this.setTextureCube=ue,this.rebindTextures=we,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=be,this.useMultisampledRTT=je,this.isReversedDepthBuffer=function(){return d.buffers.depth.getReversed()}}function El(e,t){function n(n,r=``){let i,a=Pt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Dl=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ol=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,kl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ri(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new oa({vertexShader:Dl,fragmentShader:Ol,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new K(new Yi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Al=class extends $e{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,u=null,d=null,f=null,p=null,h=null,g=typeof XRWebGLBinding<`u`,_=new kl,v={},b=t.getContextAttributes(),x=null,S=null,C=[],D=[],O=new H,k=null,A=null,j=new Ua;j.viewport=new Gt;let M=new Ua;M.viewport=new Gt;let N=[j,M],P=new $a,ee=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new En,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new En,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new En,C[e]=t),t.getHandSpace()};function te(e){let t=D.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ne(){r.removeEventListener(`select`,te),r.removeEventListener(`selectstart`,te),r.removeEventListener(`selectend`,te),r.removeEventListener(`squeeze`,te),r.removeEventListener(`squeezestart`,te),r.removeEventListener(`squeezeend`,te),r.removeEventListener(`end`,ne),r.removeEventListener(`inputsourceschange`,re);for(let e=0;e<C.length;e++){let t=D[e];t!==null&&(D[e]=null,C[e].disconnect(t))}ee=null,F=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,ue.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(O.width,O.height,!1),A!==null){let e=A.camera;e.fov=A.fov,e.zoom=A.zoom,e.updateProjectionMatrix(),A=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&B(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&B(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(u){if(r=u,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,te),r.addEventListener(`selectstart`,te),r.addEventListener(`selectend`,te),r.addEventListener(`squeeze`,te),r.addEventListener(`squeezestart`,te),r.addEventListener(`squeezeend`,te),r.addEventListener(`end`,ne),r.addEventListener(`inputsourceschange`,re),b.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(O),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;b.depth&&(o=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=b.stencil?E:T,a=b.stencil?y:m);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new qt(f.textureWidth,f.textureHeight,{format:w,type:l,depthTexture:new Ii(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new qt(p.framebufferWidth,p.framebufferHeight,{format:w,type:l,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ue.setContext(r),ue.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function re(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=D.indexOf(n);r>=0&&(D[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=D.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=D.length){D.push(n),r=e;break}else if(D[e]===null){D[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let ie=new U,ae=new U;function oe(e,t,n){ie.setFromMatrixPosition(t.matrixWorld),ae.setFromMatrixPosition(n.matrixWorld);let r=ie.distanceTo(ae),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function se(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),P.near=M.near=j.near=t,P.far=M.far=j.far=n,(ee!==P.near||F!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),ee=P.near,F=P.far),P.layers.mask=e.layers.mask|6,j.layers.mask=P.layers.mask&-5,M.layers.mask=P.layers.mask&-3;let i=e.parent,a=P.cameras;se(P,i);for(let e=0;e<a.length;e++)se(a[e],i);a.length===2?oe(P,j,M):P.projectionMatrix.copy(j.projectionMatrix),A===null&&e.isPerspectiveCamera&&(A={camera:e,fov:e.fov,zoom:e.zoom}),I(e,P,i)};function I(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=rt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(P)},this.getCameraTexture=function(e){return v[e]};let ce=null;function le(t,i){if(u=i.getViewerPose(c||a),h=i,u!==null){let t=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==P.cameras.length&&(P.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=N[n];o===void 0&&(o=new Ua,o.layers.enable(n),o.viewport=new Gt,N[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(P.matrix.copy(o.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),i===!0&&P.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new Ri,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=D[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ce&&ce(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let ue=new xo;ue.setAnimationLoop(le),this.setAnimationLoop=function(e){ce=e},this.dispose=function(){}}},jl=new Xt,Ml=new W;Ml.set(-1,0,0,0,1,0,0,0,1);function Nl(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,na(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(jl.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Ml),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Pl(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return V(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?B(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):B(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Fl=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Il=null;function Ll(){return Il===null&&(Il=new ei(Fl,16,16,k,g),Il.name=`DFG_LUT`,Il.minFilter=o,Il.magFilter=o,Il.wrapS=t,Il.wrapT=t,Il.generateMipmaps=!1,Il.needsUpdate=!0),Il}var Rl=class{constructor(e={}){let{canvas:t=Ke(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:b=l}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=b,C=new Set([j,A,O]),w=new Set([l,m,f,y,_,v]),T=new Uint32Array(4),E=new Int32Array(4),D=new U,k=null,M=null,N=[],P=[],ee=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let F=this,te=!1,ne=null,re=null,ie=null,ae=null;this._outputColorSpace=Ie;let oe=0,se=0,I=null,ce=-1,le=null,ue=new Gt,de=new Gt,fe=null,pe=new jn(0),me=0,he=t.width,ge=t.height,_e=1,ve=null,ye=null,be=new Gt(0,0,he,ge),xe=new Gt(0,0,he,ge),Se=!1,Ce=new pi,we=!1,Te=!1,Ee=new Xt,De=new U,Oe=new Gt,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ae=!1;function je(){return I===null?_e:1}let L=n;function Me(e,n){return t.getContext(e,n)}let Ne,Pe,R,Fe,z,Le,Re,ze,Be,Ve,Ue,We,Ge,qe,Ye,Xe,Qe,$e,et,tt,nt,rt,it;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,st,!1),t.addEventListener(`webglcontextrestored`,ct,!1),t.addEventListener(`webglcontextcreationerror`,lt,!1),L===null){let t=`webgl2`;if(L=Me(t,e),L===null)throw Me(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}at()}catch(e){throw t.removeEventListener(`webglcontextlost`,st,!1),t.removeEventListener(`webglcontextrestored`,ct,!1),t.removeEventListener(`webglcontextcreationerror`,lt,!1),V(`WebGLRenderer: `+e.message),e}function at(){Ne=new ns(L),Ne.init(),nt=new El(L,Ne),Pe=new jo(L,Ne,e,nt),R=new wl(L,Ne),Pe.reversedDepthBuffer&&h&&R.buffers.depth.setReversed(!0),re=L.createFramebuffer(),ie=L.createFramebuffer(),ae=L.createFramebuffer(),Fe=new as(L),z=new il,Le=new Tl(L,Ne,R,z,Pe,nt,Fe),Re=new ts(F),ze=new So(L),rt=new ko(L,ze),Be=new rs(L,ze,Fe,rt),Ve=new ss(L,Be,ze,rt,Fe),$e=new os(L,Pe,Le),Ye=new Mo(z),Ue=new rl(F,Re,Ne,Pe,rt,Ye),We=new Nl(F,z),Ge=new cl,qe=new hl(Ne),Qe=new Oo(F,Re,R,Ve,x,s),Xe=new Cl(F,Ve,Pe),it=new Pl(L,Fe,Pe,R),et=new Ao(L,Ne,Fe),tt=new is(L,Ne,Fe),Fe.programs=Ue.programs,F.capabilities=Pe,F.extensions=Ne,F.properties=z,F.renderLists=Ge,F.shadowMap=Xe,F.state=R,F.info=Fe}S!==1009&&(ee=new ls(S,t.width,t.height,o,r,i));let ot=new Al(F,L);this.xr=ot,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let e=Ne.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ne.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(e){e!==void 0&&(_e=e,this.setSize(he,ge,!1))},this.getSize=function(e){return e.set(he,ge)},this.setSize=function(e,n,r=!0){if(ot.isPresenting){B(`WebGLRenderer: Can't change size while VR device is presenting.`);return}he=e,ge=n,t.width=Math.floor(e*_e),t.height=Math.floor(n*_e),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),ee!==null&&ee.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(he*_e,ge*_e).floor()},this.setDrawingBufferSize=function(e,n,r){he=e,ge=n,_e=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009){V(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){B(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}ee.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(ue)},this.getViewport=function(e){return e.copy(be)},this.setViewport=function(e,t,n,r){e.isVector4?be.set(e.x,e.y,e.z,e.w):be.set(e,t,n,r),R.viewport(ue.copy(be).multiplyScalar(_e).round())},this.getScissor=function(e){return e.copy(xe)},this.setScissor=function(e,t,n,r){e.isVector4?xe.set(e.x,e.y,e.z,e.w):xe.set(e,t,n,r),R.scissor(de.copy(xe).multiplyScalar(_e).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(e){R.setScissorTest(Se=e)},this.setOpaqueSort=function(e){ve=e},this.setTransparentSort=function(e){ye=e},this.getClearColor=function(e){return e.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor(...arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(I!==null){let t=I.texture.format;e=C.has(t)}if(e){let e=I.texture.type,t=w.has(e),n=Qe.getClearColor(),r=Qe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,L.clearBufferuiv(L.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,L.clearBufferiv(L.COLOR,0,E))}else r|=L.COLOR_BUFFER_BIT}t&&(r|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&L.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),ne=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,st,!1),t.removeEventListener(`webglcontextrestored`,ct,!1),t.removeEventListener(`webglcontextcreationerror`,lt,!1),Qe.dispose(),Ge.dispose(),qe.dispose(),z.dispose(),Re.dispose(),Ve.dispose(),rt.dispose(),it.dispose(),Ue.dispose(),ot.dispose(),ot.removeEventListener(`sessionstart`,gt),ot.removeEventListener(`sessionend`,_t),vt.stop()};function st(e){e.preventDefault(),Je(`WebGLRenderer: Context Lost.`),te=!0}function ct(){Je(`WebGLRenderer: Context Restored.`),te=!1;let e=Fe.autoReset,t=Xe.enabled,n=Xe.autoUpdate,r=Xe.needsUpdate,i=Xe.type;at(),Fe.autoReset=e,Xe.enabled=t,Xe.autoUpdate=n,Xe.needsUpdate=r,Xe.type=i}function lt(e){V(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ut(e){let t=e.target;t.removeEventListener(`dispose`,ut),dt(t)}function dt(e){ft(e),z.remove(e)}function ft(e){let t=z.get(e).programs;t!==void 0&&(t.forEach(function(e){Ue.releaseProgram(e)}),e.isShaderMaterial&&Ue.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=ke);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Dt(e,t,n,r,i);R.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Be.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;rt.setup(i,r,s,n,c);let h,g=et;if(c!==null&&(h=ze.get(c),g=tt,g.setIndex(h)),i.isMesh)r.wireframe===!0?(R.setLineWidth(r.wireframeLinewidth*je()),g.setMode(L.LINES)):g.setMode(L.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),R.setLineWidth(e*je()),i.isLineSegments?g.setMode(L.LINES):i.isLineLoop?g.setMode(L.LINE_LOOP):g.setMode(L.LINE_STRIP)}else i.isPoints?g.setMode(L.POINTS):i.isSprite&&g.setMode(L.TRIANGLES);if(i.isBatchedMesh){if(Ne.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?ze.get(c).bytesPerElement:1,o=z.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(L,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function pt(e,t,n,r){ne!==null&&e.isNodeMaterial&&ne.setObject(r,e),we===!0&&Ye.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,wt(e,t,r),e.side=0,e.needsUpdate=!0,wt(e,t,r),e.side=2):wt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),ne!==null&&ne.renderStart(e,t,n),M=qe.get(n),M.init(t),P.push(M),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(M.pushLight(e),e.castShadow&&M.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(M.pushLight(e),e.castShadow&&M.pushShadow(e))}),M.setupLights(),ne!==null&&ne.updateLights(M.state.lightsArray),Te=this.localClippingEnabled,we=Ye.init(this.clippingPlanes,Te),we===!0&&Ye.setGlobalState(this.clippingPlanes,t),ne!==null&&Xe.render(M.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];pt(o,n,t,e),r.add(o)}else pt(i,n,t,e),r.add(i)}}),M=P.pop(),ne!==null&&ne.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){let t=z.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Ne.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let mt=null;function ht(e){mt&&mt(e)}function gt(){vt.stop()}function _t(){vt.start()}let vt=new xo;vt.setAnimationLoop(ht),typeof self<`u`&&vt.setContext(self),this.setAnimationLoop=function(e){mt=e,ot.setAnimationLoop(e),e===null?vt.stop():vt.start()},ot.addEventListener(`sessionstart`,gt),ot.addEventListener(`sessionend`,_t),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){V(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(te===!0)return;ne!==null&&ne.renderStart(e,t);let n=ot.enabled===!0&&ot.isPresenting===!0,r=ee!==null&&(I===null||n)&&ee.begin(F,I);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ee===null||ee.isCompositing()===!1)&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(t),t=ot.getCamera()),e.isScene===!0&&e.onBeforeRender(F,e,t,I),M=qe.get(e,P.length),M.init(t),M.state.textureUnits=Le.getTextureUnits(),P.push(M),Ee.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),Ce.setFromProjectionMatrix(Ee,He,t.reversedDepth),Te=this.localClippingEnabled,we=Ye.init(this.clippingPlanes,Te),k=Ge.get(e,N.length),k.init(),N.push(k),ot.enabled===!0&&ot.isPresenting===!0){let e=F.xr.getDepthSensingMesh();e!==null&&yt(e,t,-1/0,F.sortObjects)}yt(e,t,0,F.sortObjects),k.finish(),ne!==null&&ne.updateLights(M.state.lightsArray),F.sortObjects===!0&&k.sort(ve,ye),Ae=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Ae&&Qe.addToRenderList(k,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),we===!0&&Ye.beginShadows();let i=M.state.shadowsArray;if(Xe.render(i,e,t),we===!0&&Ye.endShadows(),(r&&ee.hasRenderPass())===!1){let n=k.opaque,r=k.transmissive;if(M.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];xt(n,r,e,a)}Ae&&Qe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];bt(k,e,n,n.viewport)}}else r.length>0&&xt(n,r,e,t),Ae&&Qe.render(e),bt(k,e,t)}I!==null&&se===0&&(Le.updateMultisampleRenderTarget(I),Le.updateRenderTargetMipmap(I)),r&&ee.end(F),e.isScene===!0&&e.onAfterRender(F,e,t),rt.resetDefaultState(),ce=-1,le=null,P.pop(),P.length>0?(M=P[P.length-1],Le.setTextureUnits(M.state.textureUnits),we===!0&&Ye.setGlobalState(F.clippingPlanes,M.state.camera)):M=null,N.pop(),k=N.length>0?N[N.length-1]:null,ne!==null&&ne.renderEnd()};function yt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)M.pushLightProbeGrid(e);else if(e.isLight)M.pushLight(e),e.castShadow&&M.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(Ce)){r&&Oe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ee);let i=Ve.update(e),a=e.material;a.visible&&k.push(e,i,a,n,Oe.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(Ce))){let i=Ve.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Oe.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Oe.copy(e.boundingSphere.center)),Oe.applyMatrix4(e.matrixWorld).applyMatrix4(Ee)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&k.push(e,i,c,n,Oe.z,s,t)}}else a.visible&&k.push(e,i,a,n,Oe.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)yt(i[e],t,n,r)}function bt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;M.setupLightsView(n),we===!0&&Ye.setGlobalState(F.clippingPlanes,n),r&&R.viewport(ue.copy(r)),i.length>0&&St(i,t,n),a.length>0&&St(a,t,n),o.length>0&&St(o,t,n),R.buffers.depth.setTest(!0),R.buffers.depth.setMask(!0),R.buffers.color.setMask(!0),R.setPolygonOffset(!1)}function xt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[r.id]===void 0){let e=Ne.has(`EXT_color_buffer_half_float`)||Ne.has(`EXT_color_buffer_float`);M.state.transmissionRenderTarget[r.id]=new qt(1,1,{generateMipmaps:!0,type:e?g:l,minFilter:c,samples:Math.max(4,Pe.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Pt.workingColorSpace})}let a=M.state.transmissionRenderTarget[r.id],o=r.viewport||ue;a.setSize(o.z*F.transmissionResolutionScale,o.w*F.transmissionResolutionScale);let s=F.getRenderTarget(),u=F.getActiveCubeFace(),d=F.getActiveMipmapLevel();F.setRenderTarget(a),F.getClearColor(pe),me=F.getClearAlpha(),me<1&&F.setClearColor(16777215,.5),F.clear(),Ae&&Qe.render(n);let f=F.toneMapping;F.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),M.setupLightsView(r),we===!0&&Ye.setGlobalState(F.clippingPlanes,r),St(e,n,r),Le.updateMultisampleRenderTarget(a),Le.updateRenderTargetMipmap(a),Ne.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Ct(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Le.updateMultisampleRenderTarget(a),Le.updateRenderTargetMipmap(a))}F.setRenderTarget(s,u,d),F.setClearColor(pe,me),p!==void 0&&(r.viewport=p),F.toneMapping=f}function St(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Ct(o,t,n,s,l,c)}}function Ct(e,t,n,r,i,a){ne!==null&&i.isNodeMaterial&&ne.setObject(e,i),e.onBeforeRender(F,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(F,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,F.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,F.renderBufferDirect(n,t,r,i,e,a),i.side=2):F.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(F,t,n,r,i,a)}function wt(e,t,n){t.isScene!==!0&&(t=ke);let r=z.get(e),i=M.state.lights,a=M.state.shadowsArray,o=i.state.version,s=Ue.getParameters(e,i.state,a,t,n,M.state.lightProbeGridArray),c=Ue.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Re.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ut),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Et(e,s),d}else s.uniforms=Ue.getUniforms(e),ne!==null&&e.isNodeMaterial&&ne.build(e,n,s),e.onBeforeCompile(s,F),d=Ue.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ye.uniform),Et(e,s),r.needsLights=kt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=M.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Tt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=gc.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Et(e,t){let n=z.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function H(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];D.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(D))return n}return null}function Dt(e,t,n,r,i){t.isScene!==!0&&(t=ke),Le.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=I===null?F.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Pt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Re.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(h=F.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=z.get(r),y=M.state.lights;if(we===!0&&(Te===!0||e!==le)){let t=e===le&&r.id===ce;Ye.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ye.numPlanes||v.numIntersection!==Ye.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=M.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=wt(r,t,i),ne&&r.isNodeMaterial&&ne.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(R.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==ce&&(ce=r.id,C=!0),v.needsLights){let e=H(M.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||le!==e){R.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(L,`projectionMatrix`,e.projectionMatrix),T.setValue(L,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(L,De.setFromMatrixPosition(e.matrixWorld)),Pe.logarithmicDepthBuffer&&T.setValue(L,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(L,`isOrthographic`,e.isOrthographicCamera===!0),le!==e&&(le=e,C=!0,w=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&T.setValue(L,`sunShadowMap`,y.state.sunShadowMap,Le),y.state.directionalShadowMap.length>0&&T.setValue(L,`directionalShadowMap`,y.state.directionalShadowMap,Le),y.state.spotShadowMap.length>0&&T.setValue(L,`spotShadowMap`,y.state.spotShadowMap,Le),y.state.pointShadowMap.length>0&&T.setValue(L,`pointShadowMap`,y.state.pointShadowMap,Le)),i.isSkinnedMesh){T.setOptional(L,i,`bindMatrix`),T.setOptional(L,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(L,`boneTexture`,e.boneTexture,Le))}i.isBatchedMesh&&(T.setOptional(L,i,`batchingTexture`),T.setValue(L,`batchingTexture`,i._matricesTexture,Le),T.setOptional(L,i,`batchingIdTexture`),T.setValue(L,`batchingIdTexture`,i._indirectTexture,Le),T.setOptional(L,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(L,`batchingColorTexture`,i._colorsTexture,Le));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&$e.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(L,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=Ll()),C){if(T.setValue(L,`toneMappingExposure`,F.toneMappingExposure),v.needsLights&&Ot(E,w),a&&r.fog===!0&&We.refreshFogUniforms(E,a),We.refreshMaterialUniforms(E,r,_e,ge,M.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}gc.upload(L,Tt(v),E,Le)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(gc.upload(L,Tt(v),E,Le),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(L,`center`,i.center),T.setValue(L,`modelViewMatrix`,i.modelViewMatrix),T.setValue(L,`normalMatrix`,i.normalMatrix),T.setValue(L,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];it.update(n,x),it.bind(n,x)}}return x}function Ot(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function kt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return oe},this.getActiveMipmapLevel=function(){return se},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(e,t,n){let r=z.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),z.get(e.texture).__webglTexture=t,z.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=z.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){I=e,oe=t,se=n;let r=null,i=!1,a=!1;if(e){let o=z.get(e);if(o.__useDefaultFramebuffer!==void 0){R.bindFramebuffer(L.FRAMEBUFFER,o.__webglFramebuffer),ue.copy(e.viewport),de.copy(e.scissor),fe=e.scissorTest,R.viewport(ue),R.scissor(de),R.setScissorTest(fe),ce=-1;return}if(o.__webglFramebuffer===void 0)Le.setupRenderTarget(e);else if(o.__hasExternalTextures)Le.rebindTextures(e,z.get(e.texture).__webglTexture,z.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&z.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Le.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=z.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Le.useMultisampledRTT(e)===!1?z.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,ue.copy(e.viewport),de.copy(e.scissor),fe=e.scissorTest}else ue.copy(be).multiplyScalar(_e).floor(),de.copy(xe).multiplyScalar(_e).floor(),fe=Se;if(n!==0&&(r=re),R.bindFramebuffer(L.FRAMEBUFFER,r)&&R.drawBuffers(e,r),R.viewport(ue),R.scissor(de),R.setScissorTest(fe),i){let r=z.get(e.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=z.get(e.textures[t]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=z.get(e.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,t.__webglTexture,n)}ce=-1};function W(e){let t=z.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Pe.textureFormatReadable(e.format),t.__typeReadable=Pe.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){V(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=z.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){R.bindFramebuffer(L.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+s);let u=W(o);if(u.__formatReadable===!1){V(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){V(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&L.readPixels(t,n,r,i,nt.convert(c),nt.convert(l),a)}finally{let e=I===null?null:z.get(I).__webglFramebuffer;R.bindFramebuffer(L.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=z.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){R.bindFramebuffer(L.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+s);let d=W(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,f),L.bufferData(L.PIXEL_PACK_BUFFER,a.byteLength,L.STREAM_READ),L.readPixels(t,n,r,i,nt.convert(l),nt.convert(u),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let p=I===null?null:z.get(I).__webglFramebuffer;R.bindFramebuffer(L.FRAMEBUFFER,p);let m=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Ze(L,m,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,f),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,a),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(f),L.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Le.setTexture2D(e,0),L.copyTexSubImage2D(L.TEXTURE_2D,n,0,0,o,s,i,a),R.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=nt.convert(t.format),_=nt.convert(t.type),v;t.isData3DTexture?(Le.setTexture3D(t,0),v=L.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Le.setTexture2DArray(t,0),v=L.TEXTURE_2D_ARRAY):(Le.setTexture2D(t,0),v=L.TEXTURE_2D),R.activeTexture(L.TEXTURE0),R.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,t.flipY),R.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),R.pixelStorei(L.UNPACK_ALIGNMENT,t.unpackAlignment);let y=R.getParameter(L.UNPACK_ROW_LENGTH),b=R.getParameter(L.UNPACK_IMAGE_HEIGHT),x=R.getParameter(L.UNPACK_SKIP_PIXELS),S=R.getParameter(L.UNPACK_SKIP_ROWS),C=R.getParameter(L.UNPACK_SKIP_IMAGES);R.pixelStorei(L.UNPACK_ROW_LENGTH,h.width),R.pixelStorei(L.UNPACK_IMAGE_HEIGHT,h.height),R.pixelStorei(L.UNPACK_SKIP_PIXELS,l),R.pixelStorei(L.UNPACK_SKIP_ROWS,u),R.pixelStorei(L.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=z.get(e),r=z.get(t),h=z.get(n.__renderTarget),g=z.get(r.__renderTarget);R.bindFramebuffer(L.READ_FRAMEBUFFER,h.__webglFramebuffer),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,z.get(e).__webglTexture,i,d+n),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,z.get(t).__webglTexture,a,m+n)),L.blitFramebuffer(l,u,o,s,f,p,o,s,L.DEPTH_BUFFER_BIT,L.NEAREST);R.bindFramebuffer(L.READ_FRAMEBUFFER,null),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||z.has(e)){let n=z.get(e),r=z.get(t);R.bindFramebuffer(L.READ_FRAMEBUFFER,ie),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,ae);for(let e=0;e<c;e++)w?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,n.__webglTexture,i),T?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,r.__webglTexture,a),i===0?T?L.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):L.copyTexSubImage2D(v,a,f,p,l,u,o,s):L.blitFramebuffer(l,u,o,s,f,p,o,s,L.COLOR_BUFFER_BIT,L.NEAREST);R.bindFramebuffer(L.READ_FRAMEBUFFER,null),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?L.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?L.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):L.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):L.texSubImage2D(L.TEXTURE_2D,a,f,p,o,s,g,_,h);R.pixelStorei(L.UNPACK_ROW_LENGTH,y),R.pixelStorei(L.UNPACK_IMAGE_HEIGHT,b),R.pixelStorei(L.UNPACK_SKIP_PIXELS,x),R.pixelStorei(L.UNPACK_SKIP_ROWS,S),R.pixelStorei(L.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&L.generateMipmap(v),R.unbindTexture()},this.initRenderTarget=function(e){z.get(e).__webglFramebuffer===void 0&&Le.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Le.setTextureCube(e,0):e.isData3DTexture?Le.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Le.setTexture2DArray(e,0):Le.setTexture2D(e,0),R.unbindTexture()},this.resetState=function(){oe=0,se=0,I=null,R.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return He}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Pt._getUnpackColorSpace()}},zl={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},Bl=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},Vl=new Ka(-1,1,1,-1,0,1),Hl=new class extends Or{constructor(){super(),this.setAttribute(`position`,new gr([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new gr([0,2,0,0,2,0],2))}},Ul=class{constructor(e){this._mesh=new K(Hl,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Vl)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},Wl=class extends Bl{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof oa?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ra.clone(e.uniforms),this.material=new oa({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ul(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Gl=class extends Bl{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},Kl=class extends Bl{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},ql=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new H);this._width=n.width,this._height=n.height,t=new qt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:g}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Wl(zl),this.copyPass.material.blending=0,this.timer=new eo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}Gl!==void 0&&(r instanceof Gl?n=!0:r instanceof Kl&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new H);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},Jl={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new jn(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},Yl=class e extends Bl{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new H(256,256):new H(e.x,e.y),this.clearColor=new jn(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new qt(i,a,{type:g,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new qt(i,a,{type:g,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new qt(i,a,{type:g,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=Jl;this.highPassUniforms=ra.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new oa({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new H(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ra.clone(zl.uniforms),this.blendMaterial=new oa({uniforms:this.copyUniforms,vertexShader:zl.vertexShader,fragmentShader:zl.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new jn,this._oldClearAlpha=1,this._basic=new Br,this._fsQuad=new Ul(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new H(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new oa({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new H(.5,.5)},direction:{value:new H(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new oa({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Yl.BlurDirectionX=new H(1,0),Yl.BlurDirectionY=new H(0,1);var Xl={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},Zl=class extends Bl{constructor(){super(),this.isOutputPass=!0,this.uniforms=ra.clone(Xl.uniforms),this.material=new sa({name:Xl.name,uniforms:this.uniforms,vertexShader:Xl.vertexShader,fragmentShader:Xl.fragmentShader}),this._fsQuad=new Ul(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Pt.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Ql=class extends Bl{constructor(e,t,n,i={}){super(),this.pixelSize=e,this.scene=t,this.camera=n,this.normalEdgeStrength=i.normalEdgeStrength||.3,this.depthEdgeStrength=i.depthEdgeStrength||.4,this.pixelatedMaterial=this._createPixelatedMaterial(),this._resolution=new H,this._renderResolution=new H,this._normalMaterial=new ca,this._beautyRenderTarget=new qt,this._beautyRenderTarget.texture.minFilter=r,this._beautyRenderTarget.texture.magFilter=r,this._beautyRenderTarget.texture.type=g,this._beautyRenderTarget.depthTexture=new Ii,this._normalRenderTarget=new qt,this._normalRenderTarget.texture.minFilter=r,this._normalRenderTarget.texture.magFilter=r,this._normalRenderTarget.texture.type=g,this._fsQuad=new Ul(this.pixelatedMaterial)}dispose(){this._beautyRenderTarget.dispose(),this._normalRenderTarget.dispose(),this.pixelatedMaterial.dispose(),this._normalMaterial.dispose(),this._fsQuad.dispose()}setSize(e,t){this._resolution.set(e,t),this._renderResolution.set(e/this.pixelSize|0,t/this.pixelSize|0);let{x:n,y:r}=this._renderResolution;this._beautyRenderTarget.setSize(n,r),this._normalRenderTarget.setSize(n,r),this._fsQuad.material.uniforms.resolution.value.set(n,r,1/n,1/r)}setPixelSize(e){this.pixelSize=e,this.setSize(this._resolution.x,this._resolution.y)}render(e,t){let n=this._fsQuad.material.uniforms;n.normalEdgeStrength.value=this.normalEdgeStrength,n.depthEdgeStrength.value=this.depthEdgeStrength,e.setRenderTarget(this._beautyRenderTarget),e.render(this.scene,this.camera);let r=this.scene.overrideMaterial;e.setRenderTarget(this._normalRenderTarget),this.scene.overrideMaterial=this._normalMaterial,e.render(this.scene,this.camera),this.scene.overrideMaterial=r,n.tDiffuse.value=this._beautyRenderTarget.texture,n.tDepth.value=this._beautyRenderTarget.depthTexture,n.tNormal.value=this._normalRenderTarget.texture,this.renderToScreen?e.setRenderTarget(null):(e.setRenderTarget(t),this.clear&&e.clear()),this._fsQuad.render(e)}_createPixelatedMaterial(){return new oa({uniforms:{tDiffuse:{value:null},tDepth:{value:null},tNormal:{value:null},resolution:{value:new Gt},normalEdgeStrength:{value:0},depthEdgeStrength:{value:0}},vertexShader:`
				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`
				uniform sampler2D tDiffuse;
				uniform sampler2D tDepth;
				uniform sampler2D tNormal;
				uniform vec4 resolution;
				uniform float normalEdgeStrength;
				uniform float depthEdgeStrength;
				varying vec2 vUv;

				float getDepth(int x, int y) {

					return texture2D( tDepth, vUv + vec2(x, y) * resolution.zw ).r;

				}

				vec3 getNormal(int x, int y) {

					return texture2D( tNormal, vUv + vec2(x, y) * resolution.zw ).rgb * 2.0 - 1.0;

				}

				float depthEdgeIndicator(float depth, vec3 normal) {

					float diff = 0.0;
					diff += clamp(getDepth(1, 0) - depth, 0.0, 1.0);
					diff += clamp(getDepth(-1, 0) - depth, 0.0, 1.0);
					diff += clamp(getDepth(0, 1) - depth, 0.0, 1.0);
					diff += clamp(getDepth(0, -1) - depth, 0.0, 1.0);
					return floor(smoothstep(0.01, 0.02, diff) * 2.) / 2.;

				}

				float neighborNormalEdgeIndicator(int x, int y, float depth, vec3 normal) {

					float depthDiff = getDepth(x, y) - depth;
					vec3 neighborNormal = getNormal(x, y);

					// Edge pixels should yield to faces who's normals are closer to the bias normal.
					vec3 normalEdgeBias = vec3(1., 1., 1.); // This should probably be a parameter.
					float normalDiff = dot(normal - neighborNormal, normalEdgeBias);
					float normalIndicator = clamp(smoothstep(-.01, .01, normalDiff), 0.0, 1.0);

					// Only the shallower pixel should detect the normal edge.
					float depthIndicator = clamp(sign(depthDiff * .25 + .0025), 0.0, 1.0);

					return (1.0 - dot(normal, neighborNormal)) * depthIndicator * normalIndicator;

				}

				float normalEdgeIndicator(float depth, vec3 normal) {

					float indicator = 0.0;

					indicator += neighborNormalEdgeIndicator(0, -1, depth, normal);
					indicator += neighborNormalEdgeIndicator(0, 1, depth, normal);
					indicator += neighborNormalEdgeIndicator(-1, 0, depth, normal);
					indicator += neighborNormalEdgeIndicator(1, 0, depth, normal);

					return step(0.1, indicator);

				}

				void main() {

					vec4 texel = texture2D( tDiffuse, vUv );

					float depth = 0.0;
					vec3 normal = vec3(0.0);

					if (depthEdgeStrength > 0.0 || normalEdgeStrength > 0.0) {

						depth = getDepth(0, 0);
						normal = getNormal(0, 0);

					}

					float dei = 0.0;
					if (depthEdgeStrength > 0.0)
						dei = depthEdgeIndicator(depth, normal);

					float nei = 0.0;
					if (normalEdgeStrength > 0.0)
						nei = normalEdgeIndicator(depth, normal);

					float Strength = dei > 0.0 ? (1.0 - depthEdgeStrength * dei) : (1.0 + normalEdgeStrength * nei);

					gl_FragColor = texel * Strength;

				}
			`})}};function $l(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function eu(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var tu={autoSleep:120,force3D:`auto`,nullTargetWarn:1,units:{lineHeight:``}},nu={duration:.5,overwrite:!1,delay:0},ru,iu,au,ou=1e8,su=1/ou,cu=Math.PI*2,lu=cu/4,uu=0,du=Math.sqrt,fu=Math.cos,pu=Math.sin,mu=function(e){return typeof e==`string`},hu=function(e){return typeof e==`function`},gu=function(e){return typeof e==`number`},_u=function(e){return e===void 0},vu=function(e){return typeof e==`object`},yu=function(e){return e!==!1},bu=function(){return typeof window<`u`},xu=function(e){return hu(e)||mu(e)},Su=typeof ArrayBuffer==`function`&&ArrayBuffer.isView||function(){},Cu=Array.isArray,wu=/random\([^)]+\)/g,Tu=/,\s*/g,Eu=/(?:-?\.?\d|\.)+/gi,Du=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ou=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ku=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Au=/[+-]=-?[.\d]+/,ju=/[^,'"\[\]\s]+/gi,Mu=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Nu,Pu,Fu,Iu,Lu={},Ru={},zu,Bu=function(e){return(Ru=vd(e,Lu))&&Rp},Vu=function(e,t){return console.warn(`Invalid property`,e,`set to`,t,`Missing plugin? gsap.registerPlugin()`)},Hu=function(e,t){return!t&&console.warn(e)},Uu=function(e,t){return e&&(Lu[e]=t)&&Ru&&(Ru[e]=t)||Lu},Wu=function(){return 0},Gu={suppressEvents:!0,isStart:!0,kill:!1},Ku={suppressEvents:!0,kill:!1},qu={suppressEvents:!0},Ju={},Yu=[],Xu={},Zu,Qu={},$u={},ed=30,td=[],nd=``,rd=function(e){var t=e[0],n,r;if(vu(t)||hu(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=td.length;r--&&!td[r].targetTest(t););n=td[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Jf(e[r],n)))||e.splice(r,1);return e},id=function(e){return e._gsap||rd(tf(e))[0]._gsap},ad=function(e,t,n){return(n=e[t])&&hu(n)?e[t]():_u(n)&&e.getAttribute&&e.getAttribute(t)||n},od=function(e,t){return(e=e.split(`,`)).forEach(t)||e},sd=function(e){return Math.round(e*1e5)/1e5||0},cd=function(e){return Math.round(e*1e7)/1e7||0},ld=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n===`+`?e+r:n===`-`?e-r:n===`*`?e*r:e/r},ud=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},dd=function(){var e=Yu.length,t=Yu.slice(0),n,r;for(Xu={},Yu.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},fd=function(e){return!!(e._initted||e._startAt||e.add)},pd=function(e,t,n,r){Yu.length&&!iu&&dd(),e.render(t,n,r||!!(iu&&t<0&&fd(e))),Yu.length&&!iu&&dd()},md=function(e){var t=parseFloat(e);return(t||t===0)&&(e+``).match(ju).length<2?t:mu(e)?e.trim():e},hd=function(e){return e},gd=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},_d=function(e){return function(t,n){for(var r in n)r in t||r===`duration`&&e||r===`ease`||(t[r]=n[r])}},vd=function(e,t){for(var n in t)e[n]=t[n];return e},yd=function e(t,n){for(var r in n)r!==`__proto__`&&r!==`constructor`&&r!==`prototype`&&(t[r]=vu(n[r])?e(t[r]||(t[r]={}),n[r]):n[r]);return t},bd=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},xd=function(e){var t=e.parent||Nu,n=e.keyframes?_d(Cu(e.keyframes)):gd;if(yu(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Sd=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},Cd=function(e,t,n,r,i){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var a=e[r],o;if(i)for(o=t[i];a&&a[i]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},wd=function(e,t,n,r){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var i=t._prev,a=t._next;i?i._next=a:e[n]===t&&(e[n]=a),a?a._prev=i:e[r]===t&&(e[r]=i),t._next=t._prev=t.parent=null},Td=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ed=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Dd=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Od=function(e,t,n,r){return e._startAt&&(iu?e._startAt.revert(Ku):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},kd=function e(t){return!t||t._ts&&e(t.parent)},Ad=function(e){return e._repeat?jd(e._tTime,e=e.duration()+e._rDelay)*e:0},jd=function(e,t){var n=Math.floor(e=cd(e/t));return e&&n===e?n-1:n},Md=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Nd=function(e){return e._end=cd(e._start+(e._tDur/Math.abs(e._ts||e._rts||su)||0))},Pd=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=cd(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Nd(e),n._dirty||Ed(n,e)),e},Fd=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Md(e.rawTime(),t),(!t._dur||Yd(0,t.totalDuration(),n)-t._tTime>su)&&t.render(n,!0)),Ed(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-su}},Id=function(e,t,n,r){return t.parent&&Td(t),t._start=cd((gu(n)?n:n||e!==Nu?Kd(e,n,t):e._time)+t._delay),t._end=cd(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Cd(e,t,`_first`,`_last`,e._sort?`_start`:0),Bd(t)||(e._recent=t),r||Fd(e,t),e._ts<0&&Pd(e,e._tTime),e},Ld=function(e,t){return(Lu.ScrollTrigger||Vu(`scrollTrigger`,t))&&Lu.ScrollTrigger.create(t,e)},Rd=function(e,t,n,r,i){if(rp(e,t,i),!e._initted)return 1;if(!n&&e._pt&&!iu&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Zu!==Pf.frame)return Yu.push(e),e._lazy=[i,r],1},zd=function e(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||e(n))},Bd=function(e){var t=e.data;return t===`isFromStart`||t===`isStart`},Vd=function(e,t,n,r){var i=e.ratio,a=t<0||!t&&(!e._start&&zd(e)&&(e._initted||!Bd(e))||(e._ts<0||e._dp._ts<0)&&!Bd(e))?0:1,o=e._rDelay,s=0,c,l,u;if(o&&e._repeat&&(s=Yd(0,e._tDur,t),l=jd(s,o),e._yoyo&&l&1&&(a=1-a),l!==jd(e._tTime,o)&&(i=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==i||iu||r||e._zTime===su||!t&&e._zTime){if(!e._initted&&Rd(e,t,r,n,s))return;for(u=e._zTime,e._zTime=t||(n?su:0),n||=t&&!u,e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=s,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Od(e,t,n,!0),e._onUpdate&&!n&&yf(e,`onUpdate`),s&&e._repeat&&!n&&e.parent&&yf(e,`onRepeat`),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Td(e,1),!n&&!iu&&(yf(e,a?`onComplete`:`onReverseComplete`,!0),e._prom&&e._prom()))}else e._zTime||=t},Hd=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data===`isPause`&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data===`isPause`&&r._start<t)return r;r=r._prev}},Ud=function(e,t,n,r){var i=e._repeat,a=cd(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=i?i<0?1e10:cd(a*(i+1)+e._rDelay*i):a,o>0&&!r&&Pd(e,e._tTime=e._tDur*o),e.parent&&Nd(e),n||Ed(e.parent,e),e},Wd=function(e){return e instanceof Xf?Ed(e):Ud(e,e._dur)},Gd={_start:0,endTime:Wu,totalDuration:Wu},Kd=function e(t,n,r){var i=t.labels,a=t._recent||Gd,o=t.duration()>=ou?a.endTime(!1):t._dur,s,c,l;return mu(n)&&(isNaN(n)||n in i)?(c=n.charAt(0),l=n.substr(-1)===`%`,s=n.indexOf(`=`),c===`<`||c===`>`?(s>=0&&(n=n.replace(/=/,``)),(c===`<`?a._start:a.endTime(a._repeat>=0))+(parseFloat(n.substr(1))||0)*(l?(s<0?a:r).totalDuration()/100:1)):s<0?(n in i||(i[n]=o),i[n]):(c=parseFloat(n.charAt(s-1)+n.substr(s+1)),l&&r&&(c=c/100*(Cu(r)?r[0]:r).totalDuration()),s>1?e(t,n.substr(0,s-1),r)+c:o+c)):n==null?o:+n},qd=function(e,t,n){var r=gu(t[1]),i=(r?2:1)+(e<2?0:1),a=t[i],o,s;if(r&&(a.duration=t[1]),a.parent=n,e){for(o=a,s=n;s&&!(`immediateRender`in o);)o=s.vars.defaults||{},s=yu(s.vars.inherit)&&s.parent;a.immediateRender=yu(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[i-1]}return new up(t[0],a,t[i+1])},Jd=function(e,t){return e||e===0?t(e):t},Yd=function(e,t,n){return n<e?e:n>t?t:n},Xd=function(e,t){return!mu(e)||!(t=Mu.exec(e))?``:t[1]},Zd=function(e,t,n){return Jd(n,function(n){return Yd(e,t,n)})},Qd=[].slice,$d=function(e,t){return e&&vu(e)&&`length`in e&&(!t&&!e.length||e.length-1 in e&&vu(e[0]))&&!e.nodeType&&e!==Pu},ef=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(e){var r;return mu(e)&&!t||$d(e,1)?(r=n).push.apply(r,tf(e)):n.push(e)})||n},tf=function(e,t,n){return au&&!t&&au.selector?au.selector(e):mu(e)&&!n&&(Fu||!Ff())?Qd.call((t||Iu).querySelectorAll(e),0):Cu(e)?ef(e,n):$d(e)?Qd.call(e,0):e?[e]:[]},nf=function(e){return e=tf(e)[0]||Hu(`Invalid scope`)||{},function(t){var n=e.current||e.nativeElement||e;return tf(t,n.querySelectorAll?n:n===e?Hu(`Invalid scope`)||Iu.createElement(`div`):e)}},rf=function(e){return e.sort(function(){return .5-Math.random()})},af=function(e){if(hu(e))return e;var t=vu(e)?e:{each:e},n=Uf(t.ease),r=t.from||0,i=parseFloat(t.base)||0,a={},o=r>0&&r<1,s=isNaN(r)||o,c=t.axis,l=r,u=r;return mu(r)?l=u={center:.5,edges:.5,end:1}[r]||0:!o&&s&&(l=r[0],u=r[1]),function(e,o,d){var f=(d||t).length,p=a[f],m,h,g,_,v,y,b,x,S;if(!p){if(S=t.grid===`auto`?0:(t.grid||[1,ou])[1],!S){for(b=-ou;b<(b=d[S++].getBoundingClientRect().left)&&S<f;);S<f&&S--}for(p=a[f]=[],m=s?Math.min(S,f)*l-.5:r%S,h=S===ou?0:s?f*u/S-.5:r/S|0,b=0,x=ou,y=0;y<f;y++)g=y%S-m,_=h-(y/S|0),p[y]=v=c?Math.abs(c===`y`?_:g):du(g*g+_*_),v>b&&(b=v),v<x&&(x=v);r===`random`&&rf(p),p.max=b-x,p.min=x,p.v=f=(parseFloat(t.amount)||parseFloat(t.each)*(S>f?f-1:c?c===`y`?f/S:S:Math.max(S,f/S))||0)*(r===`edges`?-1:1),p.b=f<0?i-f:i,p.u=Xd(t.amount||t.each)||0,n=n&&f<0?Hf(n):n}return f=(p[e]-p.min)/p.max||0,cd(p.b+(n?n(f):f)*p.v)+p.u}},of=function(e){var t=10**((e+``).split(`.`)[1]||``).length;return function(n){var r=cd(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(gu(n)?0:Xd(n))}},sf=function(e,t){var n=Cu(e),r,i;return!n&&vu(e)&&(r=n=e.radius||ou,e.values?(e=tf(e.values),(i=!gu(e[0]))&&(r*=r)):e=of(e.increment)),Jd(t,n?hu(e)?function(t){return i=e(t),Math.abs(i-t)<=r?i:t}:function(t){for(var n=parseFloat(i?t.x:t),a=parseFloat(i?t.y:0),o=ou,s=0,c=e.length,l,u;c--;)i?(l=e[c].x-n,u=e[c].y-a,l=l*l+u*u):l=Math.abs(e[c]-n),l<o&&(o=l,s=c);return s=!r||o<=r?e[s]:t,i||s===t||gu(t)?s:s+Xd(t)}:of(e))},cf=function(e,t,n,r){return Jd(Cu(e)?!t:n===!0?!!(n=0):!r,function(){return Cu(e)?e[~~(Math.random()*e.length)]:(n||=1e-5)&&(r=n<1?10**((n+``).length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},lf=function(){var e=[...arguments];return function(t){return e.reduce(function(e,t){return t(e)},t)}},uf=function(e,t){return function(n){return e(parseFloat(n))+(t||Xd(n))}},df=function(e,t,n){return gf(e,t,0,1,n)},ff=function(e,t,n){return Jd(n,function(n){return e[~~t(n)]})},pf=function e(t,n,r){var i=n-t;return Cu(t)?ff(t,e(0,t.length),n):Jd(r,function(e){return(i+(e-t)%i)%i+t})},mf=function e(t,n,r){var i=n-t,a=i*2;return Cu(t)?ff(t,e(0,t.length-1),n):Jd(r,function(e){return e=(a+(e-t)%a)%a||0,t+(e>i?a-e:e)})},hf=function(e){return e.replace(wu,function(e){var t=e.indexOf(`[`)+1,n=e.substring(t||7,t?e.indexOf(`]`):e.length-1).split(Tu);return cf(t?n:+n[0],t?0:+n[1],+n[2]||1e-5)})},gf=function(e,t,n,r,i){var a=t-e,o=r-n;return Jd(i,function(t){return n+((t-e)/a*o||0)})},_f=function e(t,n,r,i){var a=isNaN(t+n)?0:function(e){return(1-e)*t+e*n};if(!a){var o=mu(t),s={},c,l,u,d,f;if(r===!0&&(i=1)&&(r=null),o)t={p:t},n={p:n};else if(Cu(t)&&!Cu(n)){for(u=[],d=t.length,f=d-2,l=1;l<d;l++)u.push(e(t[l-1],t[l]));d--,a=function(e){e*=d;var t=Math.min(f,~~e);return u[t](e-t)},r=n}else i||(t=vd(Cu(t)?[]:{},t));if(!u){for(c in n)Qf.call(s,t,c,`get`,n[c]);a=function(e){return yp(e,s)||(o?t.p:t)}}}return Jd(r,a)},vf=function(e,t,n){var r=e.labels,i=ou,a,o,s;for(a in r)o=r[a]-t,o<0==!!n&&o&&i>(o=Math.abs(o))&&(s=a,i=o);return s},yf=function(e,t,n){var r=e.vars,i=r[t],a=au,o=e._ctx,s,c,l;if(i)return s=r[t+`Params`],c=r.callbackScope||e,n&&Yu.length&&dd(),o&&(au=o),l=s?i.apply(c,s):i.call(c),au=a,l},bf=function(e){return Td(e),e.scrollTrigger&&e.scrollTrigger.kill(!!iu),e.progress()<1&&yf(e,`onInterrupt`),e},xf,Sf=[],Cf=function(e){if(e){if(e=!e.name&&e.default||e,bu()||e.headless){var t=e.name,n=hu(e),r=t&&!n&&e.init?function(){this._props=[]}:e,i={init:Wu,render:yp,add:Qf,kill:xp,modifier:bp,rawVars:0},a={targetTest:0,get:0,getSetter:hp,aliases:{},register:0};if(Ff(),e!==r){if(Qu[t])return;gd(r,gd(bd(e,i),a)),vd(r.prototype,vd(i,bd(e,a))),Qu[r.prop=t]=r,e.targetTest&&(td.push(r),Ju[t]=1),t=(t===`css`?`CSS`:t.charAt(0).toUpperCase()+t.substr(1))+`Plugin`}Uu(t,r),e.register&&e.register(Rp,r,wp)}else Sf.push(e)}},wf=255,Tf={aqua:[0,wf,wf],lime:[0,wf,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,wf],navy:[0,0,128],white:[wf,wf,wf],olive:[128,128,0],yellow:[wf,wf,0],orange:[wf,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[wf,0,0],pink:[wf,192,203],cyan:[0,wf,wf],transparent:[wf,wf,wf,0]},Ef=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*wf+.5|0},Df=function(e,t,n){var r=e?gu(e)?[e>>16,e>>8&wf,e&wf]:0:Tf.black,i,a,o,s,c,l,u,d,f,p;if(!r){if(e.substr(-1)===`,`&&(e=e.substr(0,e.length-1)),Tf[e])r=Tf[e];else if(e.charAt(0)===`#`){if(e.length<6&&(i=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e=`#`+i+i+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):``)),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&wf,r&wf,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&wf,e&wf]}else if(e.substr(0,3)===`hsl`){if(r=p=e.match(Eu),!t)s=r[0]%360/360,c=r[1]/100,l=r[2]/100,a=l<=.5?l*(c+1):l+c-l*c,i=l*2-a,r.length>3&&(r[3]*=1),r[0]=Ef(s+1/3,i,a),r[1]=Ef(s,i,a),r[2]=Ef(s-1/3,i,a);else if(~e.indexOf(`=`))return r=e.match(Du),n&&r.length<4&&(r[3]=1),r}else r=e.match(Eu)||Tf.transparent;r=r.map(Number)}return t&&!p&&(i=r[0]/wf,a=r[1]/wf,o=r[2]/wf,u=Math.max(i,a,o),d=Math.min(i,a,o),l=(u+d)/2,u===d?s=c=0:(f=u-d,c=l>.5?f/(2-u-d):f/(u+d),s=u===i?(a-o)/f+(a<o?6:0):u===a?(o-i)/f+2:(i-a)/f+4,s*=60),r[0]=~~(s+.5),r[1]=~~(c*100+.5),r[2]=~~(l*100+.5)),n&&r.length<4&&(r[3]=1),r},Of=function(e){var t=[],n=[],r=-1;return e.split(Af).forEach(function(e){var i=e.match(Ou)||[];t.push.apply(t,i),n.push(r+=i.length+1)}),t.c=n,t},kf=function(e,t,n){var r=``,i=(e+r).match(Af),a=t?`hsla(`:`rgba(`,o=0,s,c,l,u;if(!i)return e;if(i=i.map(function(e){return(e=Df(e,t,1))&&a+(t?e[0]+`,`+e[1]+`%,`+e[2]+`%,`+e[3]:e.join(`,`))+`)`}),n&&(l=Of(e),s=n.c,s.join(r)!==l.c.join(r)))for(c=e.replace(Af,`1`).split(Ou),u=c.length-1;o<u;o++)r+=c[o]+(~s.indexOf(o)?i.shift()||a+`0,0,0,0)`:(l.length?l:i.length?i:n).shift());if(!c)for(c=e.split(Af),u=c.length-1;o<u;o++)r+=c[o]+i[o];return r+c[u]},Af=function(){var e=`(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b`,t;for(t in Tf)e+=`|`+t+`\\b`;return RegExp(e+`)`,`gi`)}(),jf=/hsl[a]?\(/,Mf=function(e){var t=e.join(` `),n;if(Af.lastIndex=0,Af.test(t))return n=jf.test(t),e[1]=kf(e[1],n),e[0]=kf(e[0],n,Of(e[1])),!0},Nf,Pf=function(){var e=Date.now,t=500,n=33,r=e(),i=r,a=1e3/240,o=a,s=[],c,l,u,d,f,p,m=function u(m){var h=e()-i,g=m===!0,_,v,y,b;if((h>t||h<0)&&(r+=h-n),i+=h,y=i-r,_=y-o,(_>0||g)&&(b=++d.frame,f=y-d.time*1e3,d.time=y/=1e3,o+=_+(_>=a?4:a-_),v=1),g||(c=l(u)),v)for(p=0;p<s.length;p++)s[p](y,f,b,m)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(e){return f/(1e3/(e||60))},wake:function(){zu&&(!Fu&&bu()&&(Pu=Fu=window,Iu=Pu.document||{},Lu.gsap=Rp,(Pu.gsapVersions||(Pu.gsapVersions=[])).push(Rp.version),Bu(Ru||Pu.GreenSockGlobals||!Pu.gsap&&Pu||{}),Sf.forEach(Cf)),u=typeof requestAnimationFrame<`u`&&requestAnimationFrame,c&&d.sleep(),l=u||function(e){return setTimeout(e,o-d.time*1e3+1|0)},Nf=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),Nf=0,l=Wu},lagSmoothing:function(e,r){t=e||1/0,n=Math.min(r||33,t)},fps:function(e){a=1e3/(e||240),o=d.time*1e3+a},add:function(e,t,n){var r=t?function(t,n,i,a){e(t,n,i,a),d.remove(r)}:e;return d.remove(e),s[n?`unshift`:`push`](r),Ff(),r},remove:function(e,t){~(t=s.indexOf(e))&&s.splice(t,1)&&p>=t&&p--},_listeners:s},d}(),Ff=function(){return!Nf&&Pf.wake()},If={},Lf=/^[\d.\-M][\d.\-,\s]/,Rf=/["']/g,zf=function(e){for(var t={},n=e.substr(1,e.length-3).split(`:`),r=n[0],i=1,a=n.length,o,s,c;i<a;i++)s=n[i],o=i===a-1?s.length:s.lastIndexOf(`,`),c=s.substr(0,o),t[r]=isNaN(c)?c.replace(Rf,``).trim():+c,r=s.substr(o+1).trim();return t},Bf=function(e){var t=e.indexOf(`(`)+1,n=e.indexOf(`)`),r=e.indexOf(`(`,t);return e.substring(t,~r&&r<n?e.indexOf(`)`,n+1):n)},Vf=function(e){var t=(e+``).split(`(`),n=If[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf(`{`)?[zf(t[1])]:Bf(e).split(`,`).map(md)):If._CE&&Lf.test(e)?If._CE(``,e):n},Hf=function(e){return function(t){return 1-e(1-t)}},Uf=function(e,t){return e&&(hu(e)?e:If[e]||Vf(e))||t},Wf=function(e,t,n,r){n===void 0&&(n=function(e){return 1-t(1-e)}),r===void 0&&(r=function(e){return e<.5?t(e*2)/2:1-t((1-e)*2)/2});var i={easeIn:t,easeOut:n,easeInOut:r},a;return od(e,function(e){for(var t in If[e]=Lu[e]=i,If[a=e.toLowerCase()]=n,i)If[a+(t===`easeIn`?`.in`:t===`easeOut`?`.out`:`.inOut`)]=If[e+`.`+t]=i[t]}),i},Gf=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Kf=function e(t,n,r){var i=n>=1?n:1,a=(r||(t?.3:.45))/(n<1?n:1),o=a/cu*(Math.asin(1/i)||0),s=function(e){return e===1?1:i*2**(-10*e)*pu((e-o)*a)+1},c=t===`out`?s:t===`in`?function(e){return 1-s(1-e)}:Gf(s);return a=cu/a,c.config=function(n,r){return e(t,n,r)},c},qf=function e(t,n){n===void 0&&(n=1.70158);var r=function(e){return e?--e*e*((n+1)*e+n)+1:0},i=t===`out`?r:t===`in`?function(e){return 1-r(1-e)}:Gf(r);return i.config=function(n){return e(t,n)},i};od(`Linear,Quad,Cubic,Quart,Quint,Strong`,function(e,t){var n=t<5?t+1:t;Wf(e+`,Power`+(n-1),t?function(e){return e**+n}:function(e){return e},function(e){return 1-(1-e)**n},function(e){return e<.5?(e*2)**n/2:1-((1-e)*2)**n/2})}),If.Linear.easeNone=If.none=If.Linear.easeIn,Wf(`Elastic`,Kf(`in`),Kf(`out`),Kf()),(function(e,t){var n=1/t,r=2*n,i=2.5*n,a=function(a){return a<n?e*a*a:a<r?e*(a-1.5/t)**2+.75:a<i?e*(a-=2.25/t)*a+.9375:e*(a-2.625/t)**2+.984375};Wf(`Bounce`,function(e){return 1-a(1-e)},a)})(7.5625,2.75),Wf(`Expo`,function(e){return 2**(10*(e-1))*e+e*e*e*e*e*e*(1-e)}),Wf(`Circ`,function(e){return-(du(1-e*e)-1)}),Wf(`Sine`,function(e){return e===1?1:-fu(e*lu)+1}),Wf(`Back`,qf(`in`),qf(`out`),qf()),If.SteppedEase=If.steps=Lu.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+ +!t,i=+!!t,a=1-su;return function(e){return((r*Yd(0,a,e)|0)+i)*n}}},nu.ease=If[`quad.out`],od(`onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt`,function(e){return nd+=e+`,`+e+`Params,`});var Jf=function(e,t){this.id=uu++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:ad,this.set=t?t.getSetter:hp},Yf=function(){function e(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Ud(this,+e.duration,1,1),this.data=e.data,au&&(this._ctx=au,au.data.push(this)),Nf||Pf.wake()}var t=e.prototype;return t.delay=function(e){return e||e===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+e-this._delay),this._delay=e,this):this._delay},t.duration=function(e){return arguments.length?this.totalDuration(this._repeat>0?e+(e+this._rDelay)*this._repeat:e):this.totalDuration()&&this._dur},t.totalDuration=function(e){return arguments.length?(this._dirty=0,Ud(this,this._repeat<0?e:(e-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(e,t){if(Ff(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for(Pd(this,e),!n._dp||n.parent||Fd(n,this);n&&n.parent;)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&e<this._tDur||this._ts<0&&e>0||!this._tDur&&!e)&&Id(this._dp,this,this._start-this._delay)}return(this._tTime!==e||!this._dur&&!t||this._initted&&Math.abs(this._zTime)===su||!this._initted&&this._dur&&e||!e&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=e),pd(this,e,t)),this},t.time=function(e,t){return arguments.length?this.totalTime(Math.min(this.totalDuration(),e+Ad(this))%(this._dur+this._rDelay)||(e?this._dur:0),t):this._time},t.totalProgress=function(e,t){return arguments.length?this.totalTime(this.totalDuration()*e,t):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(e,t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-e:e)+Ad(this),t):this.duration()?Math.min(1,this._time/this._dur):+(this.rawTime()>0)},t.iteration=function(e,t){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(e-1)*n,t):this._repeat?jd(this._tTime,n)+1:1},t.timeScale=function(e,t){if(!arguments.length)return this._rts===-su?0:this._rts;if(this._rts===e)return this;var n=this.parent&&this._ts?Md(this.parent._time,this):this._tTime;return this._rts=+e||0,this._ts=this._ps||e===-su?0:this._rts,this.totalTime(Yd(-Math.abs(this._delay),this.totalDuration(),n),t!==!1),Nd(this),Dd(this)},t.paused=function(e){return arguments.length?(this._ps!==e&&(this._ps=e,e?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ff(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==su&&(this._tTime-=su)))),this):this._ps},t.startTime=function(e){if(arguments.length){this._start=cd(e);var t=this.parent||this._dp;return t&&(t._sort||!this.parent)&&Id(t,this,this._start-this._delay),this}return this._start},t.endTime=function(e){return this._start+(yu(e)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(e){var t=this.parent||this._dp;return t?e&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Md(t.rawTime(e),this):this._tTime:this._tTime},t.revert=function(e){e===void 0&&(e=qu);var t=iu;return iu=e,fd(this)&&(this.timeline&&this.timeline.revert(e),this.totalTime(-.01,e.suppressEvents)),this.data!==`nested`&&e.kill!==!1&&this.kill(),iu=t,this},t.globalTime=function(e){for(var t=this,n=arguments.length?e:t.rawTime();t;)n=t._start+n/(Math.abs(t._ts)||1),t=t._dp;return!this.parent&&this._sat?this._sat.globalTime(e):n},t.repeat=function(e){return arguments.length?(this._repeat=e===1/0?-2:e,Wd(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(e){if(arguments.length){var t=this._time;return this._rDelay=e,Wd(this),t?this.time(t):this}return this._rDelay},t.yoyo=function(e){return arguments.length?(this._yoyo=e,this):this._yoyo},t.seek=function(e,t){return this.totalTime(Kd(this,e),yu(t))},t.restart=function(e,t){return this.play().totalTime(e?-this._delay:0,yu(t)),this._dur||(this._zTime=-su),this},t.play=function(e,t){return e!=null&&this.seek(e,t),this.reversed(!1).paused(!1)},t.reverse=function(e,t){return e!=null&&this.seek(e||this.totalDuration(),t),this.reversed(!0).paused(!1)},t.pause=function(e,t){return e!=null&&this.seek(e,t),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(e){return arguments.length?(!!e!==this.reversed()&&this.timeScale(-this._rts||(e?-su:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-su,this},t.isActive=function(){var e=this.parent||this._dp,t=this._start,n;return!!(!e||this._ts&&this._initted&&e.isActive()&&(n=e.rawTime(!0))>=t&&n<this.endTime(!0)-su)},t.eventCallback=function(e,t,n){var r=this.vars;return arguments.length>1?(t?(r[e]=t,n&&(r[e+`Params`]=n),e===`onUpdate`&&(this._onUpdate=t)):delete r[e],this):r[e]},t.then=function(e){var t=this,n=t._prom;return new Promise(function(r){var i=hu(e)?e:hd,a=function(){var e=t.then;t.then=null,n&&n(),hu(i)&&(i=i(t))&&(i.then||i===t)&&(t.then=e),r(i),t.then=e};t._initted&&t.totalProgress()===1&&t._ts>=0||!t._tTime&&t._ts<0?a():t._prom=a})},t.kill=function(){bf(this)},e}();gd(Yf.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-su,_prom:0,_ps:!1,_rts:1});var Xf=function(e){eu(t,e);function t(t,n){var r;return t===void 0&&(t={}),r=e.call(this,t)||this,r.labels={},r.smoothChildTiming=!!t.smoothChildTiming,r.autoRemoveChildren=!!t.autoRemoveChildren,r._sort=yu(t.sortChildren),Nu&&Id(t.parent||Nu,$l(r),n),t.reversed&&r.reverse(),t.paused&&r.paused(!0),t.scrollTrigger&&Ld($l(r),t.scrollTrigger),r}var n=t.prototype;return n.to=function(e,t,n){return qd(0,arguments,this),this},n.from=function(e,t,n){return qd(1,arguments,this),this},n.fromTo=function(e,t,n,r){return qd(2,arguments,this),this},n.set=function(e,t,n){return t.duration=0,t.parent=this,xd(t).repeatDelay||(t.repeat=0),t.immediateRender=!!t.immediateRender,new up(e,t,Kd(this,n),1),this},n.call=function(e,t,n){return Id(this,up.delayedCall(0,e,t),n)},n.staggerTo=function(e,t,n,r,i,a,o){return n.duration=t,n.stagger=n.stagger||r,n.onComplete=a,n.onCompleteParams=o,n.parent=this,new up(e,n,Kd(this,i)),this},n.staggerFrom=function(e,t,n,r,i,a,o){return n.runBackwards=1,xd(n).immediateRender=yu(n.immediateRender),this.staggerTo(e,t,n,r,i,a,o)},n.staggerFromTo=function(e,t,n,r,i,a,o,s){return r.startAt=n,xd(r).immediateRender=yu(r.immediateRender),this.staggerTo(e,t,r,i,a,o,s)},n.render=function(e,t,n){var r=this._time,i=this._dirty?this.totalDuration():this._tDur,a=this._dur,o=e<=0?0:cd(e),s=this._zTime<0!=e<0&&(this._initted||!a),c,l,u,d,f,p,m,h,g,_,v,y;if(this!==Nu&&o>i&&e>=0&&(o=i),o!==this._tTime||n||s){if(r!==this._time&&a&&(o+=this._time-r,e+=this._time-r),c=o,g=this._start,h=this._ts,p=!h,s&&(a||(r=this._zTime),(e||!t)&&(this._zTime=e)),this._repeat){if(v=this._yoyo,f=a+this._rDelay,this._repeat<-1&&e<0)return this.totalTime(f*100+e,t,n);if(c=cd(o%f),o===i?(d=this._repeat,c=a):(_=cd(o/f),d=~~_,d&&d===_&&(c=a,d--),c>a&&(c=a)),_=jd(this._tTime,f),!r&&this._tTime&&_!==d&&this._tTime-_*f-this._dur<=0&&(_=d),v&&d&1&&(c=a-c,y=1),d!==_&&!this._lock){var b=v&&_&1,x=b===(v&&d&1);if(d<_&&(b=!b),r=b?0:o%a?a:o,this._lock=1,this.render(r||(y?0:cd(d*f)),t,!a)._lock=0,this._tTime=o,!t&&this.parent&&yf(this,`onRepeat`),this.vars.repeatRefresh&&!y&&(this.invalidate()._lock=1,_=d),r&&r!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act||(a=this._dur,i=this._tDur,x&&(this._lock=2,r=b?a:-1e-4,this.render(r,!0),this.vars.repeatRefresh&&!y&&this.invalidate()),this._lock=0,!this._ts&&!p))return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(m=Hd(this,cd(r),cd(c)),m&&(o-=c-(c=m._start))),this._tTime=o,this._time=c,this._act=!!h,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=e,r=0),!r&&o&&a&&!t&&!_&&(yf(this,`onStart`),this._tTime!==o))return this;if(c>=r&&e>=0)for(l=this._first;l;){if(u=l._next,(l._act||c>=l._start)&&l._ts&&m!==l){if(l.parent!==this)return this.render(e,t,n);if(l.render(l._ts>0?(c-l._start)*l._ts:(l._dirty?l.totalDuration():l._tDur)+(c-l._start)*l._ts,t,n),c!==this._time||!this._ts&&!p){m=0,u&&(o+=this._zTime=-su);break}}l=u}else{l=this._last;for(var S=e<0?e:c;l;){if(u=l._prev,(l._act||S<=l._end)&&l._ts&&m!==l){if(l.parent!==this)return this.render(e,t,n);if(l.render(l._ts>0?(S-l._start)*l._ts:(l._dirty?l.totalDuration():l._tDur)+(S-l._start)*l._ts,t,n||iu&&fd(l)),c!==this._time||!this._ts&&!p){m=0,u&&(o+=this._zTime=S?-su:su);break}}l=u}}if(m&&!t&&(this.pause(),m.render(c>=r?0:-su)._zTime=c>=r?1:-1,this._ts))return this._start=g,Nd(this),this.render(e,t,n);this._onUpdate&&!t&&yf(this,`onUpdate`,!0),(o===i&&this._tTime>=this.totalDuration()||!o&&r)&&(g===this._start||Math.abs(h)!==Math.abs(this._ts))&&(this._lock||((e||!a)&&(o===i&&this._ts>0||!o&&this._ts<0)&&Td(this,1),!t&&!(e<0&&!r)&&(o||r||!i)&&(yf(this,o===i&&e>=0?`onComplete`:`onReverseComplete`,!0),this._prom&&!(o<i&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(e,t){var n=this;if(gu(t)||(t=Kd(this,t,e)),!(e instanceof Yf)){if(Cu(e))return e.forEach(function(e){return n.add(e,t)}),this;if(mu(e))return this.addLabel(e,t);if(hu(e))e=up.delayedCall(0,e);else return this}return this===e?this:Id(this,e,t)},n.getChildren=function(e,t,n,r){e===void 0&&(e=!0),t===void 0&&(t=!0),n===void 0&&(n=!0),r===void 0&&(r=-ou);for(var i=[],a=this._first;a;)a._start>=r&&(a instanceof up?t&&i.push(a):(n&&i.push(a),e&&i.push.apply(i,a.getChildren(!0,t,n)))),a=a._next;return i},n.getById=function(e){for(var t=this.getChildren(1,1,1),n=t.length;n--;)if(t[n].vars.id===e)return t[n]},n.remove=function(e){return mu(e)?this.removeLabel(e):hu(e)?this.killTweensOf(e):(e.parent===this&&wd(this,e),e===this._recent&&(this._recent=this._last),Ed(this))},n.totalTime=function(t,n){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=cd(Pf.time-(this._ts>0?t/this._ts:(this.totalDuration()-t)/-this._ts))),e.prototype.totalTime.call(this,t,n),this._forcing=0,this):this._tTime},n.addLabel=function(e,t){return this.labels[e]=Kd(this,t),this},n.removeLabel=function(e){return delete this.labels[e],this},n.addPause=function(e,t,n){var r=up.delayedCall(0,t||Wu,n);return r.data=`isPause`,this._hasPause=1,Id(this,r,Kd(this,e))},n.removePause=function(e){var t=this._first;for(e=Kd(this,e);t;)t._start===e&&t.data===`isPause`&&Td(t),t=t._next},n.killTweensOf=function(e,t,n){for(var r=this.getTweensOf(e,n),i=r.length;i--;)tp!==r[i]&&r[i].kill(e,t);return this},n.getTweensOf=function(e,t){for(var n=[],r=tf(e),i=this._first,a=gu(t),o;i;)i instanceof up?ud(i._targets,r)&&(a?(!tp||i._initted&&i._ts)&&i.globalTime(0)<=t&&i.globalTime(i.totalDuration())>t:!t||i.isActive())&&n.push(i):(o=i.getTweensOf(r,t)).length&&n.push.apply(n,o),i=i._next;return n},n.tweenTo=function(e,t){t||={};var n=this,r=Kd(n,e),i=t,a=i.startAt,o=i.onStart,s=i.onStartParams,c=i.immediateRender,l,u=up.to(n,gd({ease:t.ease||`none`,lazy:!1,immediateRender:!1,time:r,overwrite:`auto`,duration:t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale())||su,onStart:function(){if(n.pause(),!l){var e=t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale());u._dur!==e&&Ud(u,e,0,1).render(u._time,!0,!0),l=1}o&&o.apply(u,s||[])}},t));return c?u.render(0):u},n.tweenFromTo=function(e,t,n){return this.tweenTo(t,gd({startAt:{time:Kd(this,e)}},n))},n.recent=function(){return this._recent},n.nextLabel=function(e){return e===void 0&&(e=this._time),vf(this,Kd(this,e))},n.previousLabel=function(e){return e===void 0&&(e=this._time),vf(this,Kd(this,e),1)},n.currentLabel=function(e){return arguments.length?this.seek(e,!0):this.previousLabel(this._time+su)},n.shiftChildren=function(e,t,n){n===void 0&&(n=0);var r=this._first,i=this.labels,a;for(e=cd(e);r;)r._start>=n&&(r._start+=e,r._end+=e),r=r._next;if(t)for(a in i)i[a]>=n&&(i[a]+=e);return Ed(this)},n.invalidate=function(t){var n=this._first;for(this._lock=0;n;)n.invalidate(t),n=n._next;return e.prototype.invalidate.call(this,t)},n.clear=function(e){e===void 0&&(e=!0);for(var t=this._first,n;t;)n=t._next,this.remove(t),t=n;return this._dp&&(this._time=this._tTime=this._pTime=0),e&&(this.labels={}),Ed(this)},n.totalDuration=function(e){var t=0,n=this,r=n._last,i=ou,a,o,s;if(arguments.length)return n.timeScale((n._repeat<0?n.duration():n.totalDuration())/(n.reversed()?-e:e));if(n._dirty){for(s=n.parent;r;)a=r._prev,r._dirty&&r.totalDuration(),o=r._start,o>i&&n._sort&&r._ts&&!n._lock?(n._lock=1,Id(n,r,o-r._delay,1)._lock=0):i=o,o<0&&r._ts&&(t-=o,(!s&&!n._dp||s&&s.smoothChildTiming)&&(n._start+=cd(o/n._ts),n._time-=o,n._tTime-=o),n.shiftChildren(-o,!1,-1/0),i=0),r._end>t&&r._ts&&(t=r._end),r=a;Ud(n,n===Nu&&n._time>t?n._time:t,1,1),n._dirty=0}return n._tDur},t.updateRoot=function(e){if(Nu._ts&&(pd(Nu,Md(e,Nu)),Zu=Pf.frame),Pf.frame>=ed){ed+=tu.autoSleep||120;var t=Nu._first;if((!t||!t._ts)&&tu.autoSleep&&Pf._listeners.length<2){for(;t&&!t._ts;)t=t._next;t||Pf.sleep()}}},t}(Yf);gd(Xf.prototype,{_lock:0,_hasPause:0,_forcing:0});var Zf=function(e,t,n,r,i,a,o){var s=new wp(this._pt,e,t,0,1,vp,null,i),c=0,l=0,u,d,f,p,m,h,g,_;for(s.b=n,s.e=r,n+=``,r+=``,(g=~r.indexOf(`random(`))&&(r=hf(r)),a&&(_=[n,r],a(_,e,t),n=_[0],r=_[1]),d=n.match(ku)||[];u=ku.exec(r);)p=u[0],m=r.substring(c,u.index),f?f=(f+1)%5:m.substr(-5)===`rgba(`&&(f=1),p!==d[l++]&&(h=parseFloat(d[l-1])||0,s._pt={_next:s._pt,p:m||l===1?m:`,`,s:h,c:p.charAt(1)===`=`?ld(h,p)-h:parseFloat(p)-h,m:f&&f<4?Math.round:0},c=ku.lastIndex);return s.c=c<r.length?r.substring(c,r.length):``,s.fp=o,(Au.test(r)||g)&&(s.e=0),this._pt=s,s},Qf=function(e,t,n,r,i,a,o,s,c,l){hu(r)&&(r=r(i||0,e,a));var u=e[t],d=n===`get`?hu(u)?c?e[t.indexOf(`set`)||!hu(e[`get`+t.substr(3)])?t:`get`+t.substr(3)](c):e[t]():u:n,f=hu(u)?c?pp:fp:dp,p;if(mu(r)&&(~r.indexOf(`random(`)&&(r=hf(r)),r.charAt(1)===`=`&&(p=ld(d,r)+(Xd(d)||0),(p||p===0)&&(r=p))),!l||d!==r||np)return!isNaN(d*r)&&r!==``?(p=new wp(this._pt,e,t,+d||0,r-(d||0),typeof u==`boolean`?_p:gp,0,f),c&&(p.fp=c),o&&p.modifier(o,this,e),this._pt=p):(!u&&!(t in e)&&Vu(t,r),Zf.call(this,e,t,d,r,f,s||tu.stringFilter,c))},$f=function(e,t,n,r,i){if(hu(e)&&(e=sp(e,i,t,n,r)),!vu(e)||e.style&&e.nodeType||Cu(e)||Su(e))return mu(e)?sp(e,i,t,n,r):e;var a={},o;for(o in e)a[o]=sp(e[o],i,t,n,r);return a},ep=function(e,t,n,r,i,a){var o,s,c,l;if(Qu[e]&&(o=new Qu[e]).init(i,o.rawVars?t[e]:$f(t[e],r,i,a,n),n,r,a)!==!1&&(n._pt=s=new wp(n._pt,i,e,0,1,o.render,o,0,o.priority),n!==xf))for(c=n._ptLookup[n._targets.indexOf(i)],l=o._props.length;l--;)c[o._props[l]]=s;return o},tp,np,rp=function e(t,n,r){var i=t.vars,a=i.ease,o=i.startAt,s=i.immediateRender,c=i.lazy,l=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,f=i.keyframes,p=i.autoRevert,m=t._dur,h=t._startAt,g=t._targets,_=t.parent,v=_&&_.data===`nested`?_.vars.targets:g,y=t._overwrite===`auto`&&!ru,b=t.timeline,x=i.easeReverse||d,S,C,w,T,E,D,O,k,A,j,M,N,P;if(b&&(!f||!a)&&(a=`none`),t._ease=Uf(a,nu.ease),t._rEase=x&&(Uf(x)||t._ease),t._from=!b&&!!i.runBackwards,t._from&&(t.ratio=1),!b||f&&!i.stagger){if(k=g[0]?id(g[0]).harness:0,N=k&&i[k.prop],S=bd(i,Ju),h&&(h._zTime<0&&h.progress(1),n<0&&u&&s&&!p?h.render(-1,!0):h.revert(u&&m?Ku:Gu),h._lazy=0),o){if(Td(t._startAt=up.set(g,gd({data:`isStart`,overwrite:!1,parent:_,immediateRender:!0,lazy:!h&&yu(c),startAt:null,delay:0,onUpdate:l&&function(){return yf(t,`onUpdate`)},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(iu||!s&&!p)&&t._startAt.revert(Ku),s&&m&&n<=0&&r<=0){n&&(t._zTime=n);return}}else if(u&&m&&!h){if(n&&(s=!1),w=gd({overwrite:!1,data:`isFromStart`,lazy:s&&!h&&yu(c),immediateRender:s,stagger:0,parent:_},S),N&&(w[k.prop]=N),Td(t._startAt=up.set(g,w)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(iu?t._startAt.revert(Ku):t._startAt.render(-1,!0)),t._zTime=n,!s)e(t._startAt,su,su);else if(!n)return}for(t._pt=t._ptCache=0,c=m&&yu(c)||c&&!m,C=0;C<g.length;C++){if(E=g[C],O=E._gsap||rd(g)[C]._gsap,t._ptLookup[C]=j={},Xu[O.id]&&Yu.length&&dd(),M=v===g?C:v.indexOf(E),k&&(A=new k).init(E,N||S,t,M,v)!==!1&&(t._pt=T=new wp(t._pt,E,A.name,0,1,A.render,A,0,A.priority),A._props.forEach(function(e){j[e]=T}),A.priority&&(D=1)),!k||N)for(w in S)Qu[w]&&(A=ep(w,S,t,M,E,v))?A.priority&&(D=1):j[w]=T=Qf.call(t,E,w,`get`,S[w],M,v,0,i.stringFilter);t._op&&t._op[C]&&t.kill(E,t._op[C]),y&&t._pt&&(tp=t,Nu.killTweensOf(E,j,t.globalTime(n)),P=!t.parent,tp=0),t._pt&&c&&(Xu[O.id]=1)}D&&Cp(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!P,f&&n<=0&&b.render(ou,!0,!0)},ip=function(e,t,n,r,i,a,o,s){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],l,u,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(l=d[f][t],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==t&&l.fp!==t;)l=l._next;if(!l)return np=1,e.vars[t]=`+=0`,rp(e,o),np=0,s?Hu(t+` not eligible for reset. Try splitting into individual properties`):1;c.push(l)}for(f=c.length;f--;)u=c[f],l=u._pt||u,l.s=(r||r===0)&&!i?r:l.s+(r||0)+a*l.c,l.c=n-l.s,u.e&&(u.e=sd(n)+Xd(u.e)),u.b&&(u.b=l.s+Xd(u.b))},ap=function(e,t){var n=e[0]?id(e[0]).harness:0,r=n&&n.aliases,i,a,o,s;if(!r)return t;for(a in i=vd({},t),r)if(a in i)for(s=r[a].split(`,`),o=s.length;o--;)i[s[o]]=i[a];return i},op=function(e,t,n,r){var i=t.ease||r||`power1.inOut`,a,o;if(Cu(t))o=n[e]||(n[e]=[]),t.forEach(function(e,n){return o.push({t:n/(t.length-1)*100,v:e,e:i})});else for(a in t)o=n[a]||(n[a]=[]),a===`ease`||o.push({t:parseFloat(e),v:t[a],e:i})},sp=function(e,t,n,r,i){return hu(e)?e.call(t,n,r,i):mu(e)&&~e.indexOf(`random(`)?hf(e):e},cp=nd+`repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert`,lp={};od(cp+`,id,stagger,delay,duration,paused,scrollTrigger`,function(e){return lp[e]=1});var up=function(e){eu(t,e);function t(t,n,r,i){var a;typeof n==`number`&&(r.duration=n,n=r,r=null),a=e.call(this,i?n:xd(n))||this;var o=a.vars,s=o.duration,c=o.delay,l=o.immediateRender,u=o.stagger,d=o.overwrite,f=o.keyframes,p=o.defaults,m=o.scrollTrigger,h=n.parent||Nu,g=(Cu(t)||Su(t)?gu(t[0]):`length`in n)?[t]:tf(t),_,v,y,b,x,S,C,w;if(a._targets=g.length?rd(g):Hu(`GSAP target `+t+` not found. https://gsap.com`,!tu.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,f||u||xu(s)||xu(c)){n=a.vars;var T=n.easeReverse||n.yoyoEase;if(_=a.timeline=new Xf({data:`nested`,defaults:p||{},targets:h&&h.data===`nested`?h.vars.targets:g}),_.kill(),_.parent=_._dp=$l(a),_._start=0,u||xu(s)||xu(c)){if(b=g.length,C=u&&af(u),vu(u))for(x in u)~cp.indexOf(x)&&(w||={},w[x]=u[x]);for(v=0;v<b;v++)y=bd(n,lp),y.stagger=0,T&&(y.easeReverse=T),w&&vd(y,w),S=g[v],y.duration=+sp(s,$l(a),v,S,g),y.delay=(+sp(c,$l(a),v,S,g)||0)-a._delay,!u&&b===1&&y.delay&&(a._delay=c=y.delay,a._start+=c,y.delay=0),_.to(S,y,C?C(v,S,g):0),_._ease=If.none;_.duration()?s=c=0:a.timeline=0}else if(f){xd(gd(_.vars.defaults,{ease:`none`})),_._ease=Uf(f.ease||n.ease||`none`);var E=0,D,O,k;if(Cu(f))f.forEach(function(e){return _.to(g,e,`>`)}),_.duration();else{for(x in y={},f)x===`ease`||x===`easeEach`||op(x,f[x],y,f.easeEach);for(x in y)for(D=y[x].sort(function(e,t){return e.t-t.t}),E=0,v=0;v<D.length;v++)O=D[v],k={ease:O.e,duration:(O.t-(v?D[v-1].t:0))/100*s},k[x]=O.v,_.to(g,k,E),E+=k.duration;_.duration()<s&&_.to({},{duration:s-_.duration()})}}s||a.duration(s=_.duration())}else a.timeline=0;return d===!0&&!ru&&(tp=$l(a),Nu.killTweensOf(g),tp=0),Id(h,$l(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(l||!s&&!f&&a._start===cd(h._time)&&yu(l)&&kd($l(a))&&h.data!==`nested`)&&(a._tTime=-su,a.render(Math.max(0,-c)||0)),m&&Ld($l(a),m),a}var n=t.prototype;return n.render=function(e,t,n){var r=this._time,i=this._tDur,a=this._dur,o=e<0,s=e>i-su&&!o?i:e<su?0:e,c,l,u,d,f,p,m,h;if(!a)Vd(this,e,t,n);else if(s!==this._tTime||!e||n||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==o||this._lazy){if(c=s,h=this.timeline,this._repeat){if(d=a+this._rDelay,this._repeat<-1&&o)return this.totalTime(d*100+e,t,n);if(c=cd(s%d),s===i?(u=this._repeat,c=a):(f=cd(s/d),u=~~f,u&&u===f?(c=a,u--):c>a&&(c=a)),p=this._yoyo&&u&1,p&&(c=a-c),f=jd(this._tTime,d),c===r&&!n&&this._initted&&u===f)return this._tTime=s,this;u!==f&&this.vars.repeatRefresh&&!p&&!this._lock&&c!==d&&this._initted&&(this._lock=n=1,this.render(cd(d*u),!0).invalidate()._lock=0)}if(!this._initted){if(Rd(this,o?e:c,n,t,s))return this._tTime=0,this;if(r!==this._time&&!(n&&this.vars.repeatRefresh&&u!==f))return this;if(a!==this._dur)return this.render(e,t,n)}if(this._rEase){var g=c<r;if(g!==this._inv){var _=g?r:a-r;this._inv=g,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=r,this._invRecip=_?(g?-1:1)/_:0,this._invScale=g?-this.ratio:1-this.ratio,this._invEase=g?this._rEase:this._ease}this.ratio=m=this._invRatio+this._invScale*this._invEase((c-this._invTime)*this._invRecip)}else this.ratio=m=this._ease(c/a);if(this._from&&(this.ratio=m=1-m),this._tTime=s,this._time=c,!this._act&&this._ts&&(this._act=1,this._lazy=0),!r&&s&&!t&&!f&&(yf(this,`onStart`),this._tTime!==s))return this;for(l=this._pt;l;)l.r(m,l.d),l=l._next;h&&h.render(e<0?e:h._dur*h._ease(c/this._dur),t,n)||this._startAt&&(this._zTime=e),this._onUpdate&&!t&&(o&&Od(this,e,t,n),yf(this,`onUpdate`)),this._repeat&&u!==f&&this.vars.onRepeat&&!t&&this.parent&&yf(this,`onRepeat`),(s===this._tDur||!s)&&this._tTime===s&&(o&&!this._onUpdate&&Od(this,e,!0,!0),(e||!a)&&(s===this._tDur&&this._ts>0||!s&&this._ts<0)&&Td(this,1),!t&&(!o||r)&&(s||r||p)&&(yf(this,s===i?`onComplete`:`onReverseComplete`,!0),this._prom&&!(s<i&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(t){return(!t||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(t),e.prototype.invalidate.call(this,t)},n.resetTo=function(e,t,n,r,i){Nf||Pf.wake(),this._ts||this.play();var a=Math.min(this._dur,(this._dp._time-this._start)*this._ts),o;return this._initted||rp(this,a),o=this._ease(a/this._dur),ip(this,e,t,n,r,o,a,i)?this.resetTo(e,t,n,r,1):(Pd(this,0),this.parent||Cd(this._dp,this,`_first`,`_last`,this._dp._sort?`_start`:0),this.render(0))},n.kill=function(e,t){if(t===void 0&&(t=`all`),!e&&(!t||t===`all`))return this._lazy=this._pt=0,this.parent?bf(this):this.scrollTrigger&&this.scrollTrigger.kill(!!iu),this;if(this.timeline){var n=this.timeline.totalDuration();return this.timeline.killTweensOf(e,t,tp&&tp.vars.overwrite!==!0)._first||bf(this),this.parent&&n!==this.timeline.totalDuration()&&Ud(this,this._dur*this.timeline._tDur/n,0,1),this}var r=this._targets,i=e?tf(e):r,a=this._ptLookup,o=this._pt,s,c,l,u,d,f,p;if((!t||t===`all`)&&Sd(r,i))return t===`all`&&(this._pt=0),bf(this);for(s=this._op=this._op||[],t!==`all`&&(mu(t)&&(d={},od(t,function(e){return d[e]=1}),t=d),t=ap(r,t)),p=r.length;p--;)if(~i.indexOf(r[p]))for(d in c=a[p],t===`all`?(s[p]=t,u=c,l={}):(l=s[p]=s[p]||{},u=t),u)f=c&&c[d],f&&((!(`kill`in f.d)||f.d.kill(d)===!0)&&wd(this,f,`_pt`),delete c[d]),l!==`all`&&(l[d]=1);return this._initted&&!this._pt&&o&&bf(this),this},t.to=function(e,n){return new t(e,n,arguments[2])},t.from=function(e,t){return qd(1,arguments)},t.delayedCall=function(e,n,r,i){return new t(n,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:e,onComplete:n,onReverseComplete:n,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},t.fromTo=function(e,t,n){return qd(2,arguments)},t.set=function(e,n){return n.duration=0,n.repeatDelay||(n.repeat=0),new t(e,n)},t.killTweensOf=function(e,t,n){return Nu.killTweensOf(e,t,n)},t}(Yf);gd(up.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),od(`staggerTo,staggerFrom,staggerFromTo`,function(e){up[e]=function(){var t=new Xf,n=Qd.call(arguments,0);return n.splice(e===`staggerFromTo`?5:4,0,0),t[e].apply(t,n)}});var dp=function(e,t,n){return e[t]=n},fp=function(e,t,n){return e[t](n)},pp=function(e,t,n,r){return e[t](r.fp,n)},mp=function(e,t,n){return e.setAttribute(t,n)},hp=function(e,t){return hu(e[t])?fp:_u(e[t])&&e.setAttribute?mp:dp},gp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},_p=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},vp=function(e,t){var n=t._pt,r=``;if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},yp=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},bp=function(e,t,n,r){for(var i=this._pt,a;i;)a=i._next,i.p===r&&i.modifier(e,t,n),i=a},xp=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?wd(this,t,`_pt`):t.dep||(n=1),t=r;return!n},Sp=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Cp=function(e){for(var t=e._pt,n,r,i,a;t;){for(n=t._next,r=i;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:i=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=i},wp=function(){function e(e,t,n,r,i,a,o,s,c){this.t=t,this.s=r,this.c=i,this.p=n,this.r=a||gp,this.d=o||this,this.set=s||dp,this.pr=c||0,this._next=e,e&&(e._prev=this)}var t=e.prototype;return t.modifier=function(e,t,n){this.mSet=this.mSet||this.set,this.set=Sp,this.m=e,this.mt=n,this.tween=t},e}();od(nd+`parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse`,function(e){return Ju[e]=1}),Lu.TweenMax=Lu.TweenLite=up,Lu.TimelineLite=Lu.TimelineMax=Xf,Nu=new Xf({sortChildren:!1,defaults:nu,autoRemoveChildren:!0,id:`root`,smoothChildTiming:!0}),tu.stringFilter=Mf;var Tp=[],Ep={},Dp=[],Op=0,kp=0,Ap=function(e){return(Ep[e]||Dp).map(function(e){return e()})},jp=function(){var e=Date.now(),t=[];e-Op>2&&(Ap(`matchMediaInit`),Tp.forEach(function(e){var n=e.queries,r=e.conditions,i,a,o,s;for(a in n)i=Pu.matchMedia(n[a]).matches,i&&(o=1),i!==r[a]&&(r[a]=i,s=1);s&&(e.revert(),o&&t.push(e))}),Ap(`matchMediaRevert`),t.forEach(function(e){return e.onMatch(e,function(t){return e.add(null,t)})}),Op=e,Ap(`matchMedia`))},Mp=function(){function e(e,t){this.selector=t&&nf(t),this.data=[],this._r=[],this.isReverted=!1,this.id=kp++,e&&this.add(e)}var t=e.prototype;return t.add=function(e,t,n){hu(e)&&(n=t,t=e,e=hu);var r=this,i=function(){var e=au,i=r.selector,a;return e&&e!==r&&e.data.push(r),n&&(r.selector=nf(n)),au=r,a=t.apply(r,arguments),hu(a)&&r._r.push(a),au=e,r.selector=i,r.isReverted=!1,a};return r.last=i,e===hu?i(r,function(e){return r.add(null,e)}):e?r[e]=i:i},t.ignore=function(e){var t=au;au=null,e(this),au=t},t.getTweens=function(){var t=[];return this.data.forEach(function(n){return n instanceof e?t.push.apply(t,n.getTweens()):n instanceof up&&!(n.parent&&n.parent.data===`nested`)&&t.push(n)}),t},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(e,t){var n=this;if(e?(function(){for(var t=n.getTweens(),r=n.data.length,i;r--;)i=n.data[r],i.data===`isFlip`&&(i.revert(),i.getChildren(!0,!0,!1).forEach(function(e){return t.splice(t.indexOf(e),1)}));for(t.map(function(e){return{g:e._dur||e._delay||e._sat&&!e._sat.vars.immediateRender?e.globalTime(0):-1/0,t:e}}).sort(function(e,t){return t.g-e.g||-1/0}).forEach(function(t){return t.t.revert(e)}),r=n.data.length;r--;)i=n.data[r],i instanceof Xf?i.data!==`nested`&&(i.scrollTrigger&&i.scrollTrigger.revert(),i.kill()):!(i instanceof up)&&i.revert&&i.revert(e);n._r.forEach(function(t){return t(e,n)}),n.isReverted=!0})():this.data.forEach(function(e){return e.kill&&e.kill()}),this.clear(),t)for(var r=Tp.length;r--;)Tp[r].id===this.id&&Tp.splice(r,1)},t.revert=function(e){this.kill(e||{})},e}(),Np=function(){function e(e){this.contexts=[],this.scope=e,au&&au.data.push(this)}var t=e.prototype;return t.add=function(e,t,n){vu(e)||(e={matches:e});var r=new Mp(0,n||this.scope),i=r.conditions={},a,o,s;for(o in au&&!r.selector&&(r.selector=au.selector),this.contexts.push(r),t=r.add(`onMatch`,t),r.queries=e,e)o===`all`?s=1:(a=Pu.matchMedia(e[o]),a&&(Tp.indexOf(r)<0&&Tp.push(r),(i[o]=a.matches)&&(s=1),a.addListener?a.addListener(jp):a.addEventListener(`change`,jp)));return s&&t(r,function(e){return r.add(null,e)}),this},t.revert=function(e){this.kill(e||{})},t.kill=function(e){this.contexts.forEach(function(t){return t.kill(e,!0)})},e}(),Pp={registerPlugin:function(){[...arguments].forEach(function(e){return Cf(e)})},timeline:function(e){return new Xf(e)},getTweensOf:function(e,t){return Nu.getTweensOf(e,t)},getProperty:function(e,t,n,r){mu(e)&&(e=tf(e)[0]);var i=id(e||{}).get,a=n?hd:md;return n===`native`&&(n=``),e&&(t?a((Qu[t]&&Qu[t].get||i)(e,t,n,r)):function(t,n,r){return a((Qu[t]&&Qu[t].get||i)(e,t,n,r))})},quickSetter:function(e,t,n){if(e=tf(e),e.length>1){var r=e.map(function(e){return Rp.quickSetter(e,t,n)}),i=r.length;return function(e){for(var t=i;t--;)r[t](e)}}e=e[0]||{};var a=Qu[t],o=id(e),s=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(t){var r=new a;xf._pt=0,r.init(e,n?t+n:t,xf,0,[e]),r.render(1,r),xf._pt&&yp(1,xf)}:o.set(e,s);return a?c:function(t){return c(e,s,n?t+n:t,o,1)}},quickTo:function(e,t,n){var r,i=Rp.to(e,gd((r={},r[t]=`+=0.1`,r.paused=!0,r.stagger=0,r),n||{})),a=function(e,n,r){return i.resetTo(t,e,n,r)};return a.tween=i,a},isTweening:function(e){return Nu.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Uf(e.ease,nu.ease)),yd(nu,e||{})},config:function(e){return yd(tu,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,i=e.defaults,a=e.extendTimeline;(r||``).split(`,`).forEach(function(e){return e&&!Qu[e]&&!Lu[e]&&Hu(t+` effect requires `+e+` plugin.`)}),$u[t]=function(e,t,r){return n(tf(e),gd(t||{},i),r)},a&&(Xf.prototype[t]=function(e,n,r){return this.add($u[t](e,vu(n)?n:(r=n)&&{},this),r)})},registerEase:function(e,t){If[e]=Uf(t)},parseEase:function(e,t){return arguments.length?Uf(e,t):If},getById:function(e){return Nu.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Xf(e),r,i;for(n.smoothChildTiming=yu(e.smoothChildTiming),Nu.remove(n),n._dp=0,n._time=n._tTime=Nu._time,r=Nu._first;r;)i=r._next,(t||!(!r._dur&&r instanceof up&&r.vars.onComplete===r._targets[0]))&&Id(n,r,r._start-r._delay),r=i;return Id(Nu,n,0),n},context:function(e,t){return e?new Mp(e,t):au},matchMedia:function(e){return new Np(e)},matchMediaRefresh:function(){return Tp.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||jp()},addEventListener:function(e,t){var n=Ep[e]||(Ep[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Ep[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:pf,wrapYoyo:mf,distribute:af,random:cf,snap:sf,normalize:df,getUnit:Xd,clamp:Zd,splitColor:Df,toArray:tf,selector:nf,mapRange:gf,pipe:lf,unitize:uf,interpolate:_f,shuffle:rf},install:Bu,effects:$u,ticker:Pf,updateRoot:Xf.updateRoot,plugins:Qu,globalTimeline:Nu,core:{PropTween:wp,globals:Uu,Tween:up,Timeline:Xf,Animation:Yf,getCache:id,_removeLinkedListItem:wd,reverting:function(){return iu},context:function(e){return e&&au&&(au.data.push(e),e._ctx=au),au},suppressOverwrites:function(e){return ru=e}}};od(`to,from,fromTo,delayedCall,set,killTweensOf`,function(e){return Pp[e]=up[e]}),Pf.add(Xf.updateRoot),xf=Pp.to({},{duration:0});var Fp=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Ip=function(e,t){var n=e._targets,r,i,a;for(r in t)for(i=n.length;i--;)a=e._ptLookup[i][r],(a&&=a.d)&&(a._pt&&(a=Fp(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[i],r))},Lp=function(e,t){return{name:e,headless:1,rawVars:1,init:function(e,n,r){r._onInit=function(e){var r,i;if(mu(n)&&(r={},od(n,function(e){return r[e]=1}),n=r),t){for(i in r={},n)r[i]=t(n[i]);n=r}Ip(e,n)}}}},Rp=Pp.registerPlugin({name:`attr`,init:function(e,t,n,r,i){var a,o,s;for(a in this.tween=n,t)s=e.getAttribute(a)||``,o=this.add(e,`setAttribute`,(s||0)+``,t[a],r,i,0,0,a),o.op=a,o.b=s,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)iu?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:`endArray`,headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Lp(`roundProps`,of),Lp(`modifiers`),Lp(`snap`,sf))||Pp;up.version=Xf.version=Rp.version=`3.15.0`,zu=1,bu()&&Ff(),If.Power0,If.Power1,If.Power2,If.Power3,If.Power4,If.Linear,If.Quad,If.Cubic,If.Quart,If.Quint,If.Strong,If.Elastic,If.Back,If.SteppedEase,If.Bounce,If.Sine,If.Expo,If.Circ;var zp,Bp,Vp,Hp,Up,Wp,Gp,Kp=function(){return typeof window<`u`},qp={},Jp=180/Math.PI,Yp=Math.PI/180,Xp=Math.atan2,Zp=1e8,Qp=/([A-Z])/g,$p=/(left|right|width|margin|padding|x)/i,em=/[\s,\(]\S/,tm={autoAlpha:`opacity,visibility`,scale:`scaleX,scaleY`,alpha:`opacity`},nm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},rm=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},im=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},am=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},om=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},sm=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},cm=function(e,t){return t.set(t.t,t.p,e===1?t.e:t.b,t)},lm=function(e,t,n){return e.style[t]=n},um=function(e,t,n){return e.style.setProperty(t,n)},dm=function(e,t,n){return e._gsap[t]=n},fm=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},pm=function(e,t,n,r,i){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(i,a)},mm=function(e,t,n,r,i){var a=e._gsap;a[t]=n,a.renderTransform(i,a)},hm=`transform`,gm=hm+`Origin`,_m=function e(t,n){var r=this,i=this.target,a=i.style,o=i._gsap;if(t in qp&&a){if(this.tfm=this.tfm||{},t!==`transform`)t=tm[t]||t,~t.indexOf(`,`)?t.split(`,`).forEach(function(e){return r.tfm[e]=Im(i,e)}):this.tfm[t]=o.x?o[t]:Im(i,t),t===gm&&(this.tfm.zOrigin=o.zOrigin);else return tm.transform.split(`,`).forEach(function(t){return e.call(r,t,n)});if(this.props.indexOf(hm)>=0)return;o.svg&&(this.svgo=i.getAttribute(`data-svg-origin`),this.props.push(gm,n,``)),t=hm}(a||n)&&this.props.push(t,n,a[t])},vm=function(e){e.translate&&(e.removeProperty(`translate`),e.removeProperty(`scale`),e.removeProperty(`rotate`))},ym=function(){for(var e=this.props,t=this.target,n=t.style,r=t._gsap,i=0,a;i<e.length;i+=3)e[i+1]?e[i+1]===2?t[e[i]](e[i+2]):t[e[i]]=e[i+2]:e[i+2]?n[e[i]]=e[i+2]:n.removeProperty(e[i].substr(0,2)===`--`?e[i]:e[i].replace(Qp,`-$1`).toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute(`data-svg-origin`,this.svgo||``)),i=Gp(),(!i||!i.isStart)&&!n[hm]&&(vm(n),r.zOrigin&&n[gm]&&(n[gm]+=` `+r.zOrigin+`px`,r.zOrigin=0,r.renderTransform()),r.uncache=1)}},bm=function(e,t){var n={target:e,props:[],revert:ym,save:_m};return e._gsap||Rp.core.getCache(e),t&&e.style&&e.nodeType&&t.split(`,`).forEach(function(e){return n.save(e)}),n},xm,Sm=function(e,t){var n=Bp.createElementNS?Bp.createElementNS((t||`http://www.w3.org/1999/xhtml`).replace(/^https/,`http`),e):Bp.createElement(e);return n&&n.style?n:Bp.createElement(e)},Cm=function e(t,n,r){var i=getComputedStyle(t);return i[n]||i.getPropertyValue(n.replace(Qp,`-$1`).toLowerCase())||i.getPropertyValue(n)||!r&&e(t,Tm(n)||n,1)||``},wm=`O,Moz,ms,Ms,Webkit`.split(`,`),Tm=function(e,t,n){var r=(t||Up).style,i=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);i--&&!(wm[i]+e in r););return i<0?null:(i===3?`ms`:i>=0?wm[i]:``)+e},Em=function(){Kp()&&window.document&&(zp=window,Bp=zp.document,Vp=Bp.documentElement,Up=Sm(`div`)||{style:{}},Sm(`div`),hm=Tm(hm),gm=hm+`Origin`,Up.style.cssText=`border-width:0;line-height:0;position:absolute;padding:0`,xm=!!Tm(`perspective`),Gp=Rp.core.reverting,Hp=1)},Dm=function(e){var t=e.ownerSVGElement,n=Sm(`svg`,t&&t.getAttribute(`xmlns`)||`http://www.w3.org/2000/svg`),r=e.cloneNode(!0),i;r.style.display=`block`,n.appendChild(r),Vp.appendChild(n);try{i=r.getBBox()}catch{}return n.removeChild(r),Vp.removeChild(n),i},Om=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},km=function(e){var t,n;try{t=e.getBBox()}catch{t=Dm(e),n=1}return t&&(t.width||t.height)||n||(t=Dm(e)),t&&!t.width&&!t.x&&!t.y?{x:+Om(e,[`x`,`cx`,`x1`])||0,y:+Om(e,[`y`,`cy`,`y1`])||0,width:0,height:0}:t},Am=function(e){return!(!e.getCTM||e.parentNode&&!e.ownerSVGElement||!km(e))},jm=function(e,t){if(t){var n=e.style,r;t in qp&&t!==gm&&(t=hm),n.removeProperty?(r=t.substr(0,2),(r===`ms`||t.substr(0,6)===`webkit`)&&(t=`-`+t),n.removeProperty(r===`--`?t:t.replace(Qp,`-$1`).toLowerCase())):n.removeAttribute(t)}},Mm=function(e,t,n,r,i,a){var o=new wp(e._pt,t,n,0,1,a?cm:sm);return e._pt=o,o.b=r,o.e=i,e._props.push(n),o},Nm={deg:1,rad:1,turn:1},Pm={grid:1,flex:1},Fm=function e(t,n,r,i){var a=parseFloat(r)||0,o=(r+``).trim().substr((a+``).length)||`px`,s=Up.style,c=$p.test(n),l=t.tagName.toLowerCase()===`svg`,u=(l?`client`:`offset`)+(c?`Width`:`Height`),d=100,f=i===`px`,p=i===`%`,m,h,g,_;if(i===o||!a||Nm[i]||Nm[o])return a;if(o!==`px`&&!f&&(a=e(t,n,r,`px`)),_=t.getCTM&&Am(t),(p||o===`%`)&&(qp[n]||~n.indexOf(`adius`)))return m=_?t.getBBox()[c?`width`:`height`]:t[u],sd(p?a/m*d:a/100*m);if(s[c?`width`:`height`]=d+(f?o:i),h=i!==`rem`&&~n.indexOf(`adius`)||i===`em`&&t.appendChild&&!l?t:t.parentNode,_&&(h=(t.ownerSVGElement||{}).parentNode),(!h||h===Bp||!h.appendChild)&&(h=Bp.body),g=h._gsap,g&&p&&g.width&&c&&g.time===Pf.time&&!g.uncache)return sd(a/g.width*d);if(p&&(n===`height`||n===`width`)){var v=t.style[n];t.style[n]=d+i,m=t[u],v?t.style[n]=v:jm(t,n)}else(p||o===`%`)&&!Pm[Cm(h,`display`)]&&(s.position=Cm(t,`position`)),h===t&&(s.position=`static`),h.appendChild(Up),m=Up[u],h.removeChild(Up),s.position=`absolute`;return c&&p&&(g=id(h),g.time=Pf.time,g.width=h[u]),sd(f?m*a/d:m&&a?d/m*a:0)},Im=function(e,t,n,r){var i;return Hp||Em(),t in tm&&t!==`transform`&&(t=tm[t],~t.indexOf(`,`)&&(t=t.split(`,`)[0])),qp[t]&&t!==`transform`?(i=Jm(e,r),i=t===`transformOrigin`?i.svg?i.origin:Ym(Cm(e,gm))+` `+i.zOrigin+`px`:i[t]):(i=e.style[t],(!i||i===`auto`||r||~(i+``).indexOf(`calc(`))&&(i=Vm[t]&&Vm[t](e,t,n)||Cm(e,t)||ad(e,t)||+(t===`opacity`))),n&&!~(i+``).trim().indexOf(` `)?Fm(e,t,i,n)+n:i},Lm=function(e,t,n,r){if(!n||n===`none`){var i=Tm(t,e,1),a=i&&Cm(e,i,1);a&&a!==n?(t=i,n=a):t===`borderColor`&&(n=Cm(e,`borderTopColor`))}var o=new wp(this._pt,e.style,t,0,1,vp),s=0,c=0,l,u,d,f,p,m,h,g,_,v,y,b;if(o.b=n,o.e=r,n+=``,r+=``,r.substring(0,6)===`var(--`&&(r=Cm(e,r.substring(4,r.indexOf(`)`)))),r===`auto`&&(m=e.style[t],e.style[t]=r,r=Cm(e,t)||r,m?e.style[t]=m:jm(e,t)),l=[n,r],Mf(l),n=l[0],r=l[1],d=n.match(Ou)||[],b=r.match(Ou)||[],b.length){for(;u=Ou.exec(r);)h=u[0],_=r.substring(s,u.index),p?p=(p+1)%5:(_.substr(-5)===`rgba(`||_.substr(-5)===`hsla(`)&&(p=1),h!==(m=d[c++]||``)&&(f=parseFloat(m)||0,y=m.substr((f+``).length),h.charAt(1)===`=`&&(h=ld(f,h)+y),g=parseFloat(h),v=h.substr((g+``).length),s=Ou.lastIndex-v.length,v||(v=v||tu.units[t]||y,s===r.length&&(r+=v,o.e+=v)),y!==v&&(f=Fm(e,t,m,v)||0),o._pt={_next:o._pt,p:_||c===1?_:`,`,s:f,c:g-f,m:p&&p<4||t===`zIndex`?Math.round:0});o.c=s<r.length?r.substring(s,r.length):``}else o.r=t===`display`&&r===`none`?cm:sm;return Au.test(r)&&(o.e=0),this._pt=o,o},Rm={top:`0%`,bottom:`100%`,left:`0%`,right:`100%`,center:`50%`},zm=function(e){var t=e.split(` `),n=t[0],r=t[1]||`50%`;return(n===`top`||n===`bottom`||r===`left`||r===`right`)&&(e=n,n=r,r=e),t[0]=Rm[n]||n,t[1]=Rm[r]||r,t.join(` `)},Bm=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,i=t.u,a=n._gsap,o,s,c;if(i===`all`||i===!0)r.cssText=``,s=1;else for(i=i.split(`,`),c=i.length;--c>-1;)o=i[c],qp[o]&&(s=1,o=o===`transformOrigin`?gm:hm),jm(n,o);s&&(jm(n,hm),a&&(a.svg&&n.removeAttribute(`transform`),r.scale=r.rotate=r.translate=`none`,Jm(n,1),a.uncache=1,vm(r)))}},Vm={clearProps:function(e,t,n,r,i){if(i.data!==`isFromStart`){var a=e._pt=new wp(e._pt,t,n,0,0,Bm);return a.u=r,a.pr=-10,a.tween=i,e._props.push(n),1}}},Hm=[1,0,0,1,0,0],Um={},Wm=function(e){return e===`matrix(1, 0, 0, 1, 0, 0)`||e===`none`||!e},Gm=function(e){var t=Cm(e,hm);return Wm(t)?Hm:t.substr(7).match(Du).map(sd)},Km=function(e,t){var n=e._gsap||id(e),r=e.style,i=Gm(e),a,o,s,c;return n.svg&&e.getAttribute(`transform`)?(s=e.transform.baseVal.consolidate().matrix,i=[s.a,s.b,s.c,s.d,s.e,s.f],i.join(`,`)===`1,0,0,1,0,0`?Hm:i):(i===Hm&&!e.offsetParent&&e!==Vp&&!n.svg&&(s=r.display,r.display=`block`,a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Vp.appendChild(e)),i=Gm(e),s?r.display=s:jm(e,`display`),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Vp.removeChild(e))),t&&i.length>6?[i[0],i[1],i[4],i[5],i[12],i[13]]:i)},qm=function(e,t,n,r,i,a){var o=e._gsap,s=i||Km(e,!0),c=o.xOrigin||0,l=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,f=s[0],p=s[1],m=s[2],h=s[3],g=s[4],_=s[5],v=t.split(` `),y=parseFloat(v[0])||0,b=parseFloat(v[1])||0,x,S,C,w;n?s!==Hm&&(S=f*h-p*m)&&(C=h/S*y+b*(-m/S)+(m*_-h*g)/S,w=y*(-p/S)+f/S*b-(f*_-p*g)/S,y=C,b=w):(x=km(e),y=x.x+(~v[0].indexOf(`%`)?y/100*x.width:y),b=x.y+(~(v[1]||v[0]).indexOf(`%`)?b/100*x.height:b)),r||r!==!1&&o.smooth?(g=y-c,_=b-l,o.xOffset=u+(g*f+_*m)-g,o.yOffset=d+(g*p+_*h)-_):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=b,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[gm]=`0px 0px`,a&&(Mm(a,o,`xOrigin`,c,y),Mm(a,o,`yOrigin`,l,b),Mm(a,o,`xOffset`,u,o.xOffset),Mm(a,o,`yOffset`,d,o.yOffset)),e.setAttribute(`data-svg-origin`,y+` `+b)},Jm=function(e,t){var n=e._gsap||new Jf(e);if(`x`in n&&!t&&!n.uncache)return n;var r=e.style,i=n.scaleX<0,a=`px`,o=`deg`,s=getComputedStyle(e),c=Cm(e,gm)||`0`,l=u=d=m=h=g=_=v=y=0,u,d,f=p=1,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,ee,F,te,ne,re,ie;return n.svg=!!(e.getCTM&&Am(e)),s.translate&&((s.translate!==`none`||s.scale!==`none`||s.rotate!==`none`)&&(r[hm]=(s.translate===`none`?``:`translate3d(`+(s.translate+` 0 0`).split(` `).slice(0,3).join(`, `)+`) `)+(s.rotate===`none`?``:`rotate(`+s.rotate+`) `)+(s.scale===`none`?``:`scale(`+s.scale.split(` `).join(`,`)+`) `)+(s[hm]===`none`?``:s[hm])),r.scale=r.rotate=r.translate=`none`),S=Km(e,n.svg),n.svg&&(n.uncache?(N=e.getBBox(),c=n.xOrigin-N.x+`px `+(n.yOrigin-N.y)+`px`,M=``):M=!t&&e.getAttribute(`data-svg-origin`),qm(e,M||c,!!M||n.originIsAbsolute,n.smooth!==!1,S)),b=n.xOrigin||0,x=n.yOrigin||0,S!==Hm&&(E=S[0],D=S[1],O=S[2],k=S[3],l=A=S[4],u=j=S[5],S.length===6?(f=Math.sqrt(E*E+D*D),p=Math.sqrt(k*k+O*O),m=E||D?Xp(D,E)*Jp:0,_=O||k?Xp(O,k)*Jp+m:0,_&&(p*=Math.abs(Math.cos(_*Yp))),n.svg&&(l-=b-(b*E+x*O),u-=x-(b*D+x*k))):(ie=S[6],ne=S[7],ee=S[8],F=S[9],te=S[10],re=S[11],l=S[12],u=S[13],d=S[14],C=Xp(ie,te),h=C*Jp,C&&(w=Math.cos(-C),T=Math.sin(-C),M=A*w+ee*T,N=j*w+F*T,P=ie*w+te*T,ee=A*-T+ee*w,F=j*-T+F*w,te=ie*-T+te*w,re=ne*-T+re*w,A=M,j=N,ie=P),C=Xp(-O,te),g=C*Jp,C&&(w=Math.cos(-C),T=Math.sin(-C),M=E*w-ee*T,N=D*w-F*T,P=O*w-te*T,re=k*T+re*w,E=M,D=N,O=P),C=Xp(D,E),m=C*Jp,C&&(w=Math.cos(C),T=Math.sin(C),M=E*w+D*T,N=A*w+j*T,D=D*w-E*T,j=j*w-A*T,E=M,A=N),h&&Math.abs(h)+Math.abs(m)>359.9&&(h=m=0,g=180-g),f=sd(Math.sqrt(E*E+D*D+O*O)),p=sd(Math.sqrt(j*j+ie*ie)),C=Xp(A,j),_=Math.abs(C)>2e-4?C*Jp:0,y=re?1/(re<0?-re:re):0),n.svg&&(M=e.getAttribute(`transform`),n.forceCSS=e.setAttribute(`transform`,``)||!Wm(Cm(e,hm)),M&&e.setAttribute(`transform`,M))),Math.abs(_)>90&&Math.abs(_)<270&&(i?(f*=-1,_+=m<=0?180:-180,m+=m<=0?180:-180):(p*=-1,_+=_<=0?180:-180)),t||=n.uncache,n.x=l-((n.xPercent=l&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-l)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=sd(f),n.scaleY=sd(p),n.rotation=sd(m)+o,n.rotationX=sd(h)+o,n.rotationY=sd(g)+o,n.skewX=_+o,n.skewY=v+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(` `)[2])||!t&&n.zOrigin||0)&&(r[gm]=Ym(c)),n.xOffset=n.yOffset=0,n.force3D=tu.force3D,n.renderTransform=n.svg?nh:xm?th:Zm,n.uncache=0,n},Ym=function(e){return(e=e.split(` `))[0]+` `+e[1]},Xm=function(e,t,n){var r=Xd(t);return sd(parseFloat(t)+parseFloat(Fm(e,`x`,n+`px`,r)))+r},Zm=function(e,t){t.z=`0px`,t.rotationY=t.rotationX=`0deg`,t.force3D=0,th(e,t)},Qm=`0deg`,$m=`0px`,eh=`) `,th=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.z,c=n.rotation,l=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,p=n.scaleX,m=n.scaleY,h=n.transformPerspective,g=n.force3D,_=n.target,v=n.zOrigin,y=``,b=g===`auto`&&e&&e!==1||g===!0;if(v&&(u!==Qm||l!==Qm)){var x=parseFloat(l)*Yp,S=Math.sin(x),C=Math.cos(x),w;x=parseFloat(u)*Yp,w=Math.cos(x),a=Xm(_,a,S*w*-v),o=Xm(_,o,-Math.sin(x)*-v),s=Xm(_,s,C*w*-v+v)}h!==$m&&(y+=`perspective(`+h+eh),(r||i)&&(y+=`translate(`+r+`%, `+i+`%) `),(b||a!==$m||o!==$m||s!==$m)&&(y+=s!==$m||b?`translate3d(`+a+`, `+o+`, `+s+`) `:`translate(`+a+`, `+o+eh),c!==Qm&&(y+=`rotate(`+c+eh),l!==Qm&&(y+=`rotateY(`+l+eh),u!==Qm&&(y+=`rotateX(`+u+eh),(d!==Qm||f!==Qm)&&(y+=`skew(`+d+`, `+f+eh),(p!==1||m!==1)&&(y+=`scale(`+p+`, `+m+eh),_.style[hm]=y||`translate(0, 0)`},nh=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.rotation,c=n.skewX,l=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,p=n.xOrigin,m=n.yOrigin,h=n.xOffset,g=n.yOffset,_=n.forceCSS,v=parseFloat(a),y=parseFloat(o),b,x,S,C,w;s=parseFloat(s),c=parseFloat(c),l=parseFloat(l),l&&(l=parseFloat(l),c+=l,s+=l),s||c?(s*=Yp,c*=Yp,b=Math.cos(s)*u,x=Math.sin(s)*u,S=Math.sin(s-c)*-d,C=Math.cos(s-c)*d,c&&(l*=Yp,w=Math.tan(c-l),w=Math.sqrt(1+w*w),S*=w,C*=w,l&&(w=Math.tan(l),w=Math.sqrt(1+w*w),b*=w,x*=w)),b=sd(b),x=sd(x),S=sd(S),C=sd(C)):(b=u,C=d,x=S=0),(v&&!~(a+``).indexOf(`px`)||y&&!~(o+``).indexOf(`px`))&&(v=Fm(f,`x`,a,`px`),y=Fm(f,`y`,o,`px`)),(p||m||h||g)&&(v=sd(v+p-(p*b+m*S)+h),y=sd(y+m-(p*x+m*C)+g)),(r||i)&&(w=f.getBBox(),v=sd(v+r/100*w.width),y=sd(y+i/100*w.height)),w=`matrix(`+b+`,`+x+`,`+S+`,`+C+`,`+v+`,`+y+`)`,f.setAttribute(`transform`,w),_&&(f.style[hm]=w)},rh=function(e,t,n,r,i){var a=360,o=mu(i),s=parseFloat(i)*(o&&~i.indexOf(`rad`)?Jp:1)-r,c=r+s+`deg`,l,u;return o&&(l=i.split(`_`)[1],l===`short`&&(s%=a,s!==s%(a/2)&&(s+=s<0?a:-a)),l===`cw`&&s<0?s=(s+a*Zp)%a-~~(s/a)*a:l===`ccw`&&s>0&&(s=(s-a*Zp)%a-~~(s/a)*a)),e._pt=u=new wp(e._pt,t,n,r,s,rm),u.e=c,u.u=`deg`,e._props.push(n),u},ih=function(e,t){for(var n in t)e[n]=t[n];return e},ah=function(e,t,n){var r=ih({},n._gsap),i=`perspective,force3D,transformOrigin,svgOrigin`,a=n.style,o,s,c,l,u,d,f,p;for(s in r.svg?(c=n.getAttribute(`transform`),n.setAttribute(`transform`,``),a[hm]=t,o=Jm(n,1),jm(n,hm),n.setAttribute(`transform`,c)):(c=getComputedStyle(n)[hm],a[hm]=t,o=Jm(n,1),a[hm]=c),qp)c=r[s],l=o[s],c!==l&&i.indexOf(s)<0&&(f=Xd(c),p=Xd(l),u=f===p?parseFloat(c):Fm(n,s,c,p),d=parseFloat(l),e._pt=new wp(e._pt,o,s,u,d-u,nm),e._pt.u=p||0,e._props.push(s));ih(o,r)};od(`padding,margin,Width,Radius`,function(e,t){var n=`Top`,r=`Right`,i=`Bottom`,a=`Left`,o=(t<3?[n,r,i,a]:[n+a,n+r,i+r,i+a]).map(function(n){return t<2?e+n:`border`+n+e});Vm[t>1?`border`+e:e]=function(e,t,n,r,i){var a,s;if(arguments.length<4)return a=o.map(function(t){return Im(e,t,n)}),s=a.join(` `),s.split(a[0]).length===5?a[0]:s;a=(r+``).split(` `),s={},o.forEach(function(e,t){return s[e]=a[t]=a[t]||a[(t-1)/2|0]}),e.init(t,s,i)}});var oh={name:`css`,register:Em,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,i){var a=this._props,o=e.style,s=n.vars.startAt,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;for(m in Hp||Em(),this.styles=this.styles||bm(e),C=this.styles.props,this.tween=n,t)if(m!==`autoRound`&&(l=t[m],!(Qu[m]&&ep(m,t,n,r,e,i)))){if(f=typeof l,p=Vm[m],f===`function`&&(l=l.call(n,r,e,i),f=typeof l),f===`string`&&~l.indexOf(`random(`)&&(l=hf(l)),p)p(this,e,m,l,n)&&(S=1);else if(m.substr(0,2)===`--`)c=(getComputedStyle(e).getPropertyValue(m)+``).trim(),l+=``,Af.lastIndex=0,Af.test(c)||(h=Xd(c),g=Xd(l),g?h!==g&&(c=Fm(e,m,c,g)+g):h&&(l+=h)),this.add(o,`setProperty`,c,l,r,i,0,0,m),a.push(m),C.push(m,0,o[m]);else if(f!==`undefined`){if(s&&m in s?(c=typeof s[m]==`function`?s[m].call(n,r,e,i):s[m],mu(c)&&~c.indexOf(`random(`)&&(c=hf(c)),Xd(c+``)||c===`auto`||(c+=tu.units[m]||Xd(Im(e,m))||``),(c+``).charAt(1)===`=`&&(c=Im(e,m))):c=Im(e,m),d=parseFloat(c),_=f===`string`&&l.charAt(1)===`=`&&l.substr(0,2),_&&(l=l.substr(2)),u=parseFloat(l),m in tm&&(m===`autoAlpha`&&(d===1&&Im(e,`visibility`)===`hidden`&&u&&(d=0),C.push(`visibility`,0,o.visibility),Mm(this,o,`visibility`,d?`inherit`:`hidden`,u?`inherit`:`hidden`,!u)),m!==`scale`&&m!==`transform`&&(m=tm[m],~m.indexOf(`,`)&&(m=m.split(`,`)[0]))),v=m in qp,v){if(this.styles.save(m),w=l,f===`string`&&l.substring(0,6)===`var(--`){if(l=Cm(e,l.substring(4,l.indexOf(`)`))),l.substring(0,5)===`calc(`){var T=e.style.perspective;e.style.perspective=l,l=Cm(e,`perspective`),T?e.style.perspective=T:jm(e,`perspective`)}u=parseFloat(l)}if(y||(b=e._gsap,b.renderTransform&&!t.parseTransform||Jm(e,t.parseTransform),x=t.smoothOrigin!==!1&&b.smooth,y=this._pt=new wp(this._pt,o,hm,0,1,b.renderTransform,b,0,-1),y.dep=1),m===`scale`)this._pt=new wp(this._pt,b,`scaleY`,b.scaleY,(_?ld(b.scaleY,_+u):u)-b.scaleY||0,nm),this._pt.u=0,a.push(`scaleY`,m),m+=`X`;else if(m===`transformOrigin`){C.push(gm,0,o[gm]),l=zm(l),b.svg?qm(e,l,0,x,0,this):(g=parseFloat(l.split(` `)[2])||0,g!==b.zOrigin&&Mm(this,b,`zOrigin`,b.zOrigin,g),Mm(this,o,m,Ym(c),Ym(l)));continue}else if(m===`svgOrigin`){qm(e,l,1,x,0,this);continue}else if(m in Um){rh(this,b,m,d,_?ld(d,_+l):l);continue}else if(m===`smoothOrigin`){Mm(this,b,`smooth`,b.smooth,l);continue}else if(m===`force3D`){b[m]=l;continue}else if(m===`transform`){ah(this,l,e);continue}}else m in o||(m=Tm(m)||m);if(v||(u||u===0)&&(d||d===0)&&!em.test(l)&&m in o)h=(c+``).substr((d+``).length),u||=0,g=Xd(l)||(m in tu.units?tu.units[m]:h),h!==g&&(d=Fm(e,m,c,g)),this._pt=new wp(this._pt,v?b:o,m,d,(_?ld(d,_+u):u)-d,!v&&(g===`px`||m===`zIndex`)&&t.autoRound!==!1?om:nm),this._pt.u=g||0,v&&w!==l?(this._pt.b=c,this._pt.e=w,this._pt.r=am):h!==g&&g!==`%`&&(this._pt.b=c,this._pt.r=im);else if(m in o)Lm.call(this,e,m,c,_?_+l:l);else if(m in e)this.add(e,m,c||e[m],_?_+l:l,r,i);else if(m!==`parseTransform`){Vu(m,l);continue}v||(m in o?C.push(m,0,o[m]):typeof e[m]==`function`?C.push(m,2,e[m]()):C.push(m,1,c||e[m])),a.push(m)}}S&&Cp(this)},render:function(e,t){if(t.tween._time||!Gp())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Im,aliases:tm,getSetter:function(e,t,n){var r=tm[t];return r&&r.indexOf(`,`)<0&&(t=r),t in qp&&t!==gm&&(e._gsap.x||Im(e,`x`))?n&&Wp===n?t===`scale`?fm:dm:(Wp=n||{})&&(t===`scale`?pm:mm):e.style&&!_u(e.style[t])?lm:~t.indexOf(`-`)?um:hp(e,t)},core:{_removeProperty:jm,_getMatrix:Km}};Rp.utils.checkPrefix=Tm,Rp.core.getStyleSaver=bm,(function(e,t,n,r){var i=od(e+`,`+t+`,`+n,function(e){qp[e]=1});od(t,function(e){tu.units[e]=`deg`,Um[e]=1}),tm[i[13]]=e+`,`+t,od(r,function(e){var t=e.split(`:`);tm[t[1]]=i[t[0]]})})(`x,y,z,scale,scaleX,scaleY,xPercent,yPercent`,`rotation,rotationX,rotationY,skewX,skewY`,`transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective`,`0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY`),od(`x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective`,function(e){tu.units[e]=`px`}),Rp.registerPlugin(oh);var sh=Rp.registerPlugin(oh)||Rp;sh.core.Tween;var ch=[`SPRING`,`SUMMER`,`FALL`,`WINTER`],lh=[`SUN`,`MON`,`TUE`,`WED`,`THU`,`FRI`,`SAT`],uh={corn:{id:`corn`,name:`ذرة شمسية`,nameEn:`Corn`,icon:`🌽`,growthTime:10,seedCost:6,sellPrice:18,xp:12,minLevel:1,stages:4,color:`#eab308`,description:`المحصول الأساسي للمزرعة! سريع النمو ويدر أرباحاً لبدء مسيرتك الزراعية.`},carrot:{id:`carrot`,name:`جزر برتقالي`,nameEn:`Carrot`,icon:`🥕`,growthTime:15,seedCost:12,sellPrice:32,xp:20,minLevel:2,stages:4,color:`#ff7700`,description:`جزر برتقالي مقرمش ومغذي ومحبوب من الأرانب!`},wheat:{id:`wheat`,name:`قمح ذهبي`,nameEn:`Golden Wheat`,icon:`🌾`,growthTime:20,seedCost:18,sellPrice:48,xp:28,minLevel:2,stages:4,color:`#facc15`,description:`محصول القمح الذهبي! يُستخدم كعلف للحيوانات ولخبز المعجنات في المخبز.`},tomato:{id:`tomato`,name:`طماطم حمراء`,nameEn:`Tomato`,icon:`🍅`,growthTime:28,seedCost:28,sellPrice:75,xp:40,minLevel:3,stages:4,color:`#dc2626`,description:`ثمار طماطم طازجة على أوتاد خشبية مطلوبة في صفقات التجار.`},strawberry:{id:`strawberry`,name:`فراولة المروج`,nameEn:`Strawberry`,icon:`🍓`,growthTime:36,seedCost:40,sellPrice:110,xp:60,minLevel:3,stages:4,color:`#e63946`,description:`شجيرة فراولة حمراء غنية وسكرية يعشقها سكان القرية.`},sunflower:{id:`sunflower`,name:`دوار الشمس الذهبي`,nameEn:`Sunflower`,icon:`🌻`,growthTime:45,seedCost:55,sellPrice:155,xp:80,minLevel:4,stages:4,color:`#fbbf24`,description:`زهرة ذهبية براقة تسعد النحل وتزيد إنتاج العسل بنسبة 50%!`},eggplant:{id:`eggplant`,name:`باذنجان ملكي`,nameEn:`Eggplant`,icon:`🍆`,growthTime:55,seedCost:70,sellPrice:200,xp:105,minLevel:4,stages:4,color:`#7e22ce`,description:`باذنجان داكن لامع ذو قيمة غذائية وتجارية عالية.`},pumpkin:{id:`pumpkin`,name:`قرع عملاق`,nameEn:`Pumpkin`,icon:`🎃`,growthTime:70,seedCost:95,sellPrice:290,xp:145,minLevel:5,stages:4,color:`#ea580c`,description:`قرع ضخم وثقيل يدر ثروة طائلة في موسم الخريف.`},watermelon:{id:`watermelon`,name:`بطيخ صيفي منعش`,nameEn:`Watermelon`,icon:`🍉`,growthTime:85,seedCost:130,sellPrice:410,xp:190,minLevel:6,stages:4,color:`#15803d`,description:`بطيخ عملاق مخطط يروي العطش ويباع بأعلى الأسعار في الصيف!`},grape:{id:`grape`,name:`عنب معرش فاخر`,nameEn:`Grapes`,icon:`🍇`,growthTime:105,seedCost:180,sellPrice:580,xp:260,minLevel:7,stages:4,color:`#6b21a8`,description:`عناقيد عنب أرجوانية ملكية تُصنع منها المربيات الفاخرة.`},pineapple:{id:`pineapple`,name:`أناناس استوائي نادر`,nameEn:`Pineapple`,icon:`🍍`,growthTime:130,seedCost:260,sellPrice:850,xp:380,minLevel:8,stages:4,color:`#d97706`,description:`فاكهة استوائية نادرة ذات تاج زمردي وثمار ذهبية تسيل لها اللعاب!`},apple:{id:`apple`,name:`تفاح أحمر مقرمش`,nameEn:`Apple`,icon:`🍎`,growthTime:60,seedCost:65,sellPrice:90,xp:45,minLevel:3,color:`#d90429`,description:`يُقطف من أشجار التفاح ويستعيد 3 نقاط طاقة فوراً ⚡.`}},dh=[{id:`hoe`,name:`فأس الحراثة`,nameEn:`Hoe`,icon:`⛏️`,type:`tool`,count:1},{id:`water`,name:`مرشة الماء`,nameEn:`Watering Can`,icon:`💧`,type:`tool`,count:25},{id:`harvest`,name:`منجل الحصاد`,nameEn:`Harvest Scythe`,icon:`🌾`,type:`tool`,count:1},{id:`corn`,name:`بذور ذرة`,nameEn:`Corn Seeds`,icon:`🌽`,type:`seed`,count:12},{id:`empty_4`,name:`خانة فارغة`,nameEn:`Empty`,icon:``,type:`none`,count:0},{id:`empty_5`,name:`خانة فارغة`,nameEn:`Empty`,icon:``,type:`none`,count:0},{id:`empty_6`,name:`خانة فارغة`,nameEn:`Empty`,icon:``,type:`none`,count:0},{id:`empty_7`,name:`خانة فارغة`,nameEn:`Empty`,icon:``,type:`none`,count:0},{id:`empty_8`,name:`خانة فارغة`,nameEn:`Empty`,icon:``,type:`none`,count:0},{id:`empty_9`,name:`خانة فارغة`,nameEn:`Empty`,icon:``,type:`none`,count:0}],fh={chicken:{id:`chicken`,name:`دجاجة نشيطة`,nameEn:`Chicken`,icon:`🐔`,cost:150,product:`egg`,productName:`بيض طازج`,productIcon:`🥚`,productPrice:35,productInterval:25,xp:25,minLevel:1,desc:`تتجول في الحظيرة وتضع البيض الذهبي بانتظام.`},duck:{id:`duck`,name:`بطة برية مرحة`,nameEn:`Duck`,icon:`🦆`,cost:320,product:`feather`,productName:`ريش بط ناعم`,productIcon:`🪶`,productPrice:70,productInterval:35,xp:45,minLevel:2,desc:`تحب السباحة والمروج الرطبة وتنتج ريشاً فاخراً وبيض بط.`},cow:{id:`cow`,name:`بقرة حلوب ودودة`,nameEn:`Dairy Cow`,icon:`🐮`,cost:500,product:`milk`,productName:`حليب كامل الدسم`,productIcon:`🥛`,productPrice:85,productInterval:45,xp:65,minLevel:3,desc:`بقرة هولشتاين تعطي أطيب زجاجات الحليب عند تدليلها.`},goat:{id:`goat`,name:`ماعز المروج الوثابة`,nameEn:`Goat`,icon:`🐐`,cost:750,product:`goat_cheese`,productName:`جبن ماعز ريفي`,productIcon:`🧀`,productPrice:150,productInterval:60,xp:90,minLevel:4,desc:`حيوان نشيط يقفز بمرح وينتج حليباً يُصنع منه أشهى الأجبان.`},sheep:{id:`sheep`,name:`خروف صوفي قطني`,nameEn:`Fluffy Sheep`,icon:`🐑`,cost:850,product:`wool`,productName:`صوف دافئ ناعم`,productIcon:`🧶`,productPrice:140,productInterval:70,xp:100,minLevel:4,desc:`يمتلك فروة صوفية غنية يمكن قصها لصناعة أقمشة فاخرة.`},rabbit:{id:`rabbit`,name:`أرنب أنجورا ظريف`,nameEn:`Angora Rabbit`,icon:`🐇`,cost:1100,product:`rabbit_wool`,productName:`صوف أنجورا الملكي`,productIcon:`☁️`,productPrice:230,productInterval:80,xp:140,minLevel:5,desc:`يقفز بخفة وينتج أنعم أنواع الفرو الحريري النادر.`},horse:{id:`horse`,name:`حصان عربي أصيل`,nameEn:`Arabian Horse`,icon:`🐎`,cost:1800,product:`ride`,productName:`ركوب سريع مضاعف`,productIcon:`🏇`,productPrice:0,productInterval:0,xp:200,minLevel:5,desc:`يمكنك امتطاءه للتنقل في جميع أرجاء المزرعة بسرعة خيالية!`}},ph={chicken:{id:`chicken`,name:`حظيرة الدجاج البلدي`,nameEn:`Chicken Yard`,icon:`🐔`,minLevel:1,cost:150,side:`west_upper`,desc:`حظيرة خشبية مسيجة مخصصة للدجاج البلدي مع أعشاش قش لجمع البيض الطازج.`},duck:{id:`duck`,name:`بركة ومأوى البط النهري`,nameEn:`Duck Pond & Pen`,icon:`🦆`,minLevel:2,cost:300,side:`west_mid`,desc:`مأوى مسيج مع بركة ماء متلألئة مخصصة للبط لجمع الريش الناعم وبيض البط.`},sheep:{id:`sheep`,name:`مرعى الأغنام الصوفية`,nameEn:`Wool Meadow`,icon:`🐑`,minLevel:2,cost:450,side:`west_lower`,desc:`مروج خضراء مسيجة ومأوى خشبي مظلل لتربية الأغنام وإنتاج الصوف الفاخر.`},rabbit:{id:`rabbit`,name:`حديقة ومستعمرة الأرانب`,nameEn:`Rabbit Warren`,icon:`🐇`,minLevel:3,cost:600,side:`west_bottom`,desc:`حديقة مسيجة مع جحور وأكواخ خشبية للأرانب الأنجورا لإنتاج الفرو الحريري.`},cow:{id:`cow`,name:`مرعى الأبقار الحلوب`,nameEn:`Dairy Pasture`,icon:`🐮`,minLevel:2,cost:500,side:`east_upper`,desc:`مرعى مسيج فسيح مع حظيرة حمراء كلاسيكية وحوض ماء وعلف لإنتاج أشهى الحليب.`},goat:{id:`goat`,name:`مروج وهضبة الماعز`,nameEn:`Goat Hills`,icon:`🐐`,minLevel:3,cost:700,side:`east_mid`,desc:`مرعى جبلي مع منصات تسلق خشبية مخصص للماعز لإنتاج حليب الأجبان.`},horse:{id:`horse`,name:`إسطبل ومضمار الخيول الملكية`,nameEn:`Horse Stables`,icon:`🐎`,minLevel:4,cost:1200,side:`east_lower`,desc:`إسطبل فاخر مسيج مع حلبة ركض وحوض شرب لتربية خيول الركوب السريعة.`}},mh={silo:{id:`silo`,name:`صومعة الغلال والحبوب`,nameEn:`Grain Silo`,icon:`🌾`,cost:350,woodCost:60,minLevel:2,desc:`تخزن الحبوب وتحول القمح المحصود تلقائياً إلى علف مغذي للحيوانات يضاعف إنتاجها.`,perks:[`سعة تخزين +150`,`إنتاج علف حيواني تلقائي`],position:{x:-8,z:-27}},well:{id:`well`,name:`بئر المياه العذبة`,nameEn:`Freshwater Well`,icon:`⛲`,cost:200,woodCost:40,minLevel:2,desc:`بئر حجري أثري يوفر تعبئة مجانية فورية لمرشة الماء ويروي الحقول القريبة في الصباح.`,perks:[`تعبئة فورية غير محدودة`,`ري تلقائي للمربعات المحيطة صباحاً`],position:{x:5,z:-18}},beehive:{id:`beehive`,name:`خلية النحل المزهرة`,nameEn:`Flower Beehive`,icon:`🐝`,cost:450,woodCost:50,minLevel:3,desc:`خلية نحل خشبية بجانب الزهور تنتج برطمانات عسل المروج الصافي 🍯 كل يومين.`,perks:[`إنتاج عسل بري (+120 G)`,`يزداد سعره عند زراعة دوار الشمس`],position:{x:14,z:-25}},bakery:{id:`bakery`,name:`مخبز ومطحنة المزرعة`,nameEn:`Farm Bakery`,icon:`🥖`,cost:850,woodCost:100,minLevel:4,desc:`يحول القمح والحليب والبيض إلى خبز ريفي وفطائر فراولة تباع بأرباح خيالية!`,perks:[`صناعة الخبز والكعك`,`أرباح تجارة مضاعفة 3x`],position:{x:-14,z:-24}},greenhouse:{id:`greenhouse`,name:`الصوبة الزراعية الزجاجية`,nameEn:`Glass Greenhouse`,icon:`🏡`,cost:1600,woodCost:150,minLevel:6,desc:`بيت زجاجي دافئ يحمي المحاصيل من برد الشتاء ويضاعف سرعة نموها بنسبة 100%!`,perks:[`زراعة جميع المحاصيل صيفاً وشتاءً`,`سرعة نمو مضاعفة 2x`],position:{x:18,z:-27}}},hh={sunny:{id:`sunny`,name:`مشمس مشرق`,nameEn:`Sunny`,icon:`☀️`,color:`#facc15`,desc:`طقس دافئ ومثالي، ترعى فيه الحيوانات بسعادة في المروج وتكتسب طاقة مضاعفة.`,buff:`سعادة الحيوانات +30%`},rainy:{id:`rainy`,name:`أمطار هادئة`,nameEn:`Rainy`,icon:`🌧️`,color:`#38bdf8`,desc:`أمطار متواصلة تروي جميع قطع الأراضي الزراعية تلقائياً دون الحاجة للمرشة!`,buff:`ري تلقائي لجميع المحاصيل`},stormy:{id:`stormy`,name:`عاصفة رعدية`,nameEn:`Thunderstorm`,icon:`⛈️`,color:`#818cf8`,desc:`برق ورعود وأمطار غزيرة تجعل المحاصيل تمتص المعادن وتنمو أسرع بنسبة 50%!`,buff:`ري فائق + 50% سرعة نمو المحاصيل`},windy:{id:`windy`,name:`نسيم الخريف العليل`,nameEn:`Windy Breeze`,icon:`🍃`,color:`#4ade80`,desc:`رياح عليلة تحرك أوراق الشجر وتدير طاحونة الهواء بسرعة مضاعفة مع فرصة سقوط بذور نادرة!`,buff:`سرعة الطاحونة 3x + بذور مجانية`},snowy:{id:`snowy`,name:`ثلج أبيض دافئ`,nameEn:`Snowy`,icon:`❄️`,color:`#e2e8f0`,desc:`بلورات ثلجية تغطي المروج بنقاء، تزداد فيها قيمة المنتجات الحيوانية الدافئة.`,buff:`قيمة الصوف والحليب +40%`}},gh=[{id:`order_bakery_supply`,merchant:`الخَبّاز منصور`,merchantIcon:`👨‍🍳`,title:`طلبية مخبز القرية الأسبوعية`,desc:`نحتاج قمحاً ذهبياً طازجاً وبيضاً لإعداد كعكة الاحتفال السنوي!`,requires:[{id:`wheat`,count:12,name:`قمح ذهبي`,icon:`🌾`},{id:`egg`,count:4,name:`بيض طازج`,icon:`🥚`}],rewardCoins:550,rewardXp:180,bonusItem:{id:`carrot`,count:10,name:`بذور جزر ممتازة`,icon:`🥕`}},{id:`order_summer_festival`,merchant:`التاجر كمال`,merchantIcon:`👳‍♂️`,title:`قافلة الواحة الصيفية`,desc:`سكان الواحة يبحثون عن بطيخ منعش وذرة مسلوقة بأي ثمن!`,requires:[{id:`watermelon`,count:4,name:`بطيخ صيفي`,icon:`🍉`},{id:`corn`,count:8,name:`ذرة شمسية`,icon:`🌽`}],rewardCoins:1100,rewardXp:320,bonusItem:{id:`wood`,count:40,name:`أخشاب بناء صلبة`,icon:`🪵`}},{id:`order_textile_guild`,merchant:`نقابة النسيج الرفيع`,merchantIcon:`🧕`,title:`طلب صوف شتوي دافئ`,desc:`نود شراء صوف الخراف وريش البط الفاخر لصناعة المعاطف الملكية.`,requires:[{id:`wool`,count:5,name:`صوف ناعم`,icon:`🧶`},{id:`feather`,count:4,name:`ريش بط`,icon:`🪶`}],rewardCoins:950,rewardXp:260,bonusItem:{id:`strawberry`,count:8,name:`بذور فراولة`,icon:`🍓`}},{id:`order_healthy_harvest`,merchant:`طبيبة الأعشاب لينا`,merchantIcon:`👩‍⚕️`,title:`سلة الخضار العلاجية`,desc:`أحتاج جزر وطماطم ودوار شمس لصنع خلطات المناعة الطبيعية.`,requires:[{id:`carrot`,count:15,name:`جزر`,icon:`🥕`},{id:`tomato`,count:10,name:`طماطم`,icon:`🍅`},{id:`sunflower`,count:3,name:`دوار الشمس`,icon:`🌻`}],rewardCoins:850,rewardXp:240,bonusItem:{id:`pineapple`,count:3,name:`بذور أناناس نادرة`,icon:`🍍`}}],_h=[{id:`q_till_plots`,category:`story`,title:`تجهيز الأرض الطيبة`,desc:`احرث 6 بقع عشبية جديدة بفأس الحراثة ⛏️`,targetType:`till`,targetCount:6,rewardCoins:80,rewardXp:45,icon:`⛏️`},{id:`q_plant_crops`,category:`story`,title:`غرس بذور الخير`,desc:`ازرع 8 بذور متنوعة في التربة المحروثة 🌱`,targetType:`plant`,targetCount:8,rewardCoins:120,rewardXp:60,icon:`🌱`},{id:`q_harvest_any`,category:`story`,title:`حصاد المروج الوفير`,desc:`احصد 10 محاصيل ناضجة بمنجل الحصاد 🌾`,targetType:`harvest`,targetCount:10,rewardCoins:200,rewardXp:100,icon:`🧺`},{id:`q_pet_animals`,category:`animals`,title:`صديق الحيوانات الوفي`,desc:`دلل والمس 5 حيوانات في مزارعك لنشر السعادة ❤️`,targetType:`pet_animal`,targetCount:5,rewardCoins:150,rewardXp:80,icon:`❤️`},{id:`q_collect_milk`,category:`animals`,title:`إنتاج الحليب والأجبان`,desc:`اجمع 3 زجاجات حليب طازجة من الأبقار أو الماعز 🥛`,targetType:`milk`,targetCount:3,rewardCoins:220,rewardXp:120,icon:`🥛`},{id:`q_collect_eggs`,category:`animals`,title:`سلة البيض الصباحية`,desc:`اجمع 5 بيضات من حظيرة الدواجن والبط 🥚`,targetType:`egg`,targetCount:5,rewardCoins:180,rewardXp:90,icon:`🥚`},{id:`q_expand_farm`,category:`building`,title:`توسعة الأفق الأخضر`,desc:`قم بتوسيع أرضك الزراعية بمقدار 20 مربعاً إضافياً ➕`,targetType:`expand`,targetCount:1,rewardCoins:300,rewardXp:150,icon:`🚜`},{id:`q_build_facility`,category:`building`,title:`نهضة المزرعة العمرانية`,desc:`شيد مبنى جديداً مثل الصومعة أو البئر أو المخبز 🏛️`,targetType:`build`,targetCount:1,rewardCoins:400,rewardXp:200,icon:`🏛️`},{id:`q_trade_contract`,category:`trade`,title:`تاجر المروج المعتمد`,desc:`أتمم صفقة تجارية مع أحد تجار القرية بنجاح 📦`,targetType:`trade_order`,targetCount:1,rewardCoins:350,rewardXp:250,icon:`📦`},{id:`q_earn_gold`,category:`trade`,title:`ثروة المروج المتراكمة`,desc:`اجمع ما مجموعه 15,000 قطعة ذهبية في خزينتك 🪙`,targetType:`coins`,targetCount:15e3,rewardCoins:600,rewardXp:300,icon:`🪙`},{id:`q_ride_horse`,category:`story`,title:`فارس الريف المغوار`,desc:`امتطِ الحصان الأصيل وانطلق بسرعة البرق 🐎`,targetType:`ride`,targetCount:1,rewardCoins:250,rewardXp:120,icon:`🏇`}],vh={waterCapacity:{id:`waterCapacity`,name:`سعة المرشة`,levels:[{level:1,cap:25,cost:0,desc:`مرشة عادية (25 رشة)`},{level:2,cap:55,cost:250,desc:`مرشة نحاسية مطورة (55 رشة)`},{level:3,cap:120,cost:650,desc:`مرشة ذهبية فائقة (120 رشة)`}]},speedBoots:{id:`speedBoots`,name:`حذاء المروج المريح`,levels:[{level:1,speed:1,cost:0,desc:`السرعة العادية`},{level:2,speed:1.35,cost:200,desc:`+35% سرعة ركض`},{level:3,speed:1.75,cost:500,desc:`+75% سرعة ركض فائقة`}]}},$=new class{constructor(){this.ctx=null,this.muted=!1,this.volume=.28,this.rainNode=null,this.rainGain=null}init(){if(!this.ctx){let e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state===`suspended`&&this.ctx.resume()}toggleMute(){return this.muted=!this.muted,this.rainGain&&this.rainGain.gain.setValueAtTime(this.muted?0:.05,this.ctx.currentTime),this.muted}axe(){if(this.muted||(this.init(),!this.ctx))return;let e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type=`sawtooth`,t.frequency.setValueAtTime(180,e),t.frequency.exponentialRampToValueAtTime(50,e+.09),n.gain.setValueAtTime(this.volume*.9,e),n.gain.exponentialRampToValueAtTime(.001,e+.09),t.connect(n),n.connect(this.ctx.destination),t.start(e),t.stop(e+.09)}till(){if(this.muted||(this.init(),!this.ctx))return;let e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type=`triangle`,t.frequency.setValueAtTime(130,e),t.frequency.exponentialRampToValueAtTime(40,e+.12),n.gain.setValueAtTime(this.volume*.8,e),n.gain.exponentialRampToValueAtTime(.001,e+.12),t.connect(n),n.connect(this.ctx.destination),t.start(e),t.stop(e+.12)}water(){if(this.muted||(this.init(),!this.ctx))return;let e=this.ctx.currentTime,t=this.ctx.sampleRate*.22,n=this.ctx.createBuffer(1,t,this.ctx.sampleRate),r=n.getChannelData(0);for(let e=0;e<t;e++)r[e]=Math.random()*2-1;let i=this.ctx.createBufferSource();i.buffer=n;let a=this.ctx.createBiquadFilter();a.type=`bandpass`,a.frequency.setValueAtTime(950,e),a.frequency.exponentialRampToValueAtTime(320,e+.22),a.Q.value=1.8;let o=this.ctx.createGain();o.gain.setValueAtTime(this.volume*.65,e),o.gain.exponentialRampToValueAtTime(.001,e+.22),i.connect(a),a.connect(o),o.connect(this.ctx.destination),i.start(e)}plant(){if(this.muted||(this.init(),!this.ctx))return;let e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type=`sine`,t.frequency.setValueAtTime(360,e),t.frequency.exponentialRampToValueAtTime(620,e+.08),n.gain.setValueAtTime(this.volume*.55,e),n.gain.exponentialRampToValueAtTime(.001,e+.08),t.connect(n),n.connect(this.ctx.destination),t.start(e),t.stop(e+.08)}harvest(){if(this.muted||(this.init(),!this.ctx))return;let e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type=`sine`,t.frequency.setValueAtTime(520,e),t.frequency.exponentialRampToValueAtTime(980,e+.15),n.gain.setValueAtTime(this.volume*.75,e),n.gain.exponentialRampToValueAtTime(.001,e+.15),t.connect(n),n.connect(this.ctx.destination),t.start(e),t.stop(e+.15)}coin(){if(this.muted||(this.init(),!this.ctx))return;let e=this.ctx.currentTime,t=(e,t,n)=>{let r=this.ctx.createOscillator(),i=this.ctx.createGain();r.type=`sine`,r.frequency.setValueAtTime(e,t),i.gain.setValueAtTime(this.volume*.65,t),i.gain.exponentialRampToValueAtTime(.001,t+n),r.connect(i),i.connect(this.ctx.destination),r.start(t),r.stop(t+n)};t(1046.5,e,.12),t(1567.98,e+.08,.22)}levelUp(){if(this.muted||(this.init(),!this.ctx))return;let e=this.ctx.currentTime;[523.25,659.25,783.99,1046.5,1318.51].forEach((t,n)=>{let r=e+n*.09,i=this.ctx.createOscillator(),a=this.ctx.createGain();i.type=`triangle`,i.frequency.setValueAtTime(t,r),a.gain.setValueAtTime(this.volume*.85,r),a.gain.exponentialRampToValueAtTime(.001,r+.24),i.connect(a),a.connect(this.ctx.destination),i.start(r),i.stop(r+.24)})}eat(){if(this.muted||(this.init(),!this.ctx))return;let e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type=`triangle`,t.frequency.setValueAtTime(450,e),t.frequency.exponentialRampToValueAtTime(250,e+.12),n.gain.setValueAtTime(this.volume*.6,e),n.gain.exponentialRampToValueAtTime(.001,e+.12),t.connect(n),n.connect(this.ctx.destination),t.start(e),t.stop(e+.12)}meow(){if(this.muted||(this.init(),!this.ctx))return;let e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type=`sine`,t.frequency.setValueAtTime(450,e),t.frequency.linearRampToValueAtTime(750,e+.15),t.frequency.exponentialRampToValueAtTime(520,e+.35),n.gain.setValueAtTime(.001,e),n.gain.linearRampToValueAtTime(this.volume*.5,e+.05),n.gain.exponentialRampToValueAtTime(.001,e+.35),t.connect(n),n.connect(this.ctx.destination),t.start(e),t.stop(e+.35)}chicken(){this.animal(`chicken`)}animal(e=`chicken`){if(!this.muted&&(this.init(),this.ctx))try{let t=this.ctx.currentTime,n=this.ctx.createOscillator(),r=this.ctx.createGain();e===`chicken`?(n.type=`sine`,n.frequency.setValueAtTime(580,t),n.frequency.exponentialRampToValueAtTime(320,t+.08),r.gain.setValueAtTime(this.volume*.45,t),r.gain.exponentialRampToValueAtTime(.001,t+.08),n.connect(r),r.connect(this.ctx.destination),n.start(t),n.stop(t+.08)):e===`cow`?(n.type=`sawtooth`,n.frequency.setValueAtTime(140,t),n.frequency.exponentialRampToValueAtTime(90,t+.45),r.gain.setValueAtTime(this.volume*.35,t),r.gain.exponentialRampToValueAtTime(.001,t+.45),n.connect(r),r.connect(this.ctx.destination),n.start(t),n.stop(t+.45)):e===`sheep`?(n.type=`triangle`,n.frequency.setValueAtTime(260,t),n.frequency.exponentialRampToValueAtTime(200,t+.35),r.gain.setValueAtTime(this.volume*.4,t),r.gain.exponentialRampToValueAtTime(.001,t+.35),n.connect(r),r.connect(this.ctx.destination),n.start(t),n.stop(t+.35)):e===`horse`?(n.type=`sine`,n.frequency.setValueAtTime(420,t),n.frequency.exponentialRampToValueAtTime(580,t+.12),n.frequency.exponentialRampToValueAtTime(350,t+.3),r.gain.setValueAtTime(this.volume*.45,t),r.gain.exponentialRampToValueAtTime(.001,t+.3),n.connect(r),r.connect(this.ctx.destination),n.start(t),n.stop(t+.3)):e===`dog`?(n.type=`triangle`,n.frequency.setValueAtTime(320,t),n.frequency.exponentialRampToValueAtTime(150,t+.14),r.gain.setValueAtTime(this.volume*.5,t),r.gain.exponentialRampToValueAtTime(.001,t+.14),n.connect(r),r.connect(this.ctx.destination),n.start(t),n.stop(t+.14)):e===`pig`&&(n.type=`sawtooth`,n.frequency.setValueAtTime(120,t),n.frequency.exponentialRampToValueAtTime(70,t+.15),r.gain.setValueAtTime(this.volume*.35,t),r.gain.exponentialRampToValueAtTime(.001,t+.15),n.connect(r),r.connect(this.ctx.destination),n.start(t),n.stop(t+.15))}catch{}}fish(){if(this.muted||(this.init(),!this.ctx))return;let e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type=`triangle`,t.frequency.setValueAtTime(250,e),t.frequency.exponentialRampToValueAtTime(650,e+.15),n.gain.setValueAtTime(this.volume*.5,e),n.gain.exponentialRampToValueAtTime(.001,e+.15),t.connect(n),n.connect(this.ctx.destination),t.start(e),t.stop(e+.15)}click(){if(this.muted||(this.init(),!this.ctx))return;let e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type=`sine`,t.frequency.setValueAtTime(500,e),n.gain.setValueAtTime(this.volume*.3,e),n.gain.exponentialRampToValueAtTime(.001,e+.04),t.connect(n),n.connect(this.ctx.destination),t.start(e),t.stop(e+.04)}pop(){if(this.muted||(this.init(),!this.ctx))return;let e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type=`sine`,t.frequency.setValueAtTime(420,e),t.frequency.exponentialRampToValueAtTime(840,e+.06),n.gain.setValueAtTime(this.volume*.45,e),n.gain.exponentialRampToValueAtTime(.001,e+.06),t.connect(n),n.connect(this.ctx.destination),t.start(e),t.stop(e+.06)}startRainSound(){if(this.rainNode||(this.init(),!this.ctx))return;let e=this.ctx.sampleRate*2,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),n=t.getChannelData(0),r=0;for(let t=0;t<e;t++){let e=Math.random()*2-1;n[t]=(r+.02*e)/1.02,r=n[t],n[t]*=3.5}this.rainNode=this.ctx.createBufferSource(),this.rainNode.buffer=t,this.rainNode.loop=!0;let i=this.ctx.createBiquadFilter();i.type=`lowpass`,i.frequency.value=900,this.rainGain=this.ctx.createGain(),this.rainGain.gain.setValueAtTime(this.muted?0:.05,this.ctx.currentTime),this.rainNode.connect(i),i.connect(this.rainGain),this.rainGain.connect(this.ctx.destination),this.rainNode.start()}stopRainSound(){if(this.rainNode){try{this.rainNode.stop(),this.rainNode.disconnect()}catch{}this.rainNode=null,this.rainGain=null}}thunder(){if(this.muted||(this.init(),!this.ctx))return;let e=this.ctx.currentTime,t=this.ctx.sampleRate*1.5,n=this.ctx.createBuffer(1,t,this.ctx.sampleRate),r=n.getChannelData(0);for(let e=0;e<t;e++)r[e]=(Math.random()*2-1)*Math.exp(-e/(this.ctx.sampleRate*.45));let i=this.ctx.createBufferSource();i.buffer=n;let a=this.ctx.createBiquadFilter();a.type=`lowpass`,a.frequency.setValueAtTime(350,e),a.frequency.exponentialRampToValueAtTime(80,e+1.2);let o=this.ctx.createGain();o.gain.setValueAtTime(this.volume*1.1,e),o.gain.exponentialRampToValueAtTime(.001,e+1.4),i.connect(a),a.connect(o),o.connect(this.ctx.destination),i.start(e)}duck(){if(this.muted||(this.init(),!this.ctx))return;let e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type=`sawtooth`,t.frequency.setValueAtTime(320,e),t.frequency.exponentialRampToValueAtTime(220,e+.18);let r=this.ctx.createBiquadFilter();r.type=`bandpass`,r.frequency.value=850,r.Q.value=3.5,n.gain.setValueAtTime(this.volume*.7,e),n.gain.exponentialRampToValueAtTime(.001,e+.18),t.connect(r),r.connect(n),n.connect(this.ctx.destination),t.start(e),t.stop(e+.18)}goat(){if(this.muted||(this.init(),!this.ctx))return;let e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createOscillator(),r=this.ctx.createGain(),i=this.ctx.createGain();n.frequency.value=16,r.gain.value=25,n.connect(t.frequency),t.type=`triangle`,t.frequency.setValueAtTime(280,e),t.frequency.exponentialRampToValueAtTime(240,e+.35),i.gain.setValueAtTime(this.volume*.7,e),i.gain.exponentialRampToValueAtTime(.001,e+.35),t.connect(i),i.connect(this.ctx.destination),n.start(e),t.start(e),n.stop(e+.35),t.stop(e+.35)}trade(){if(this.muted||(this.init(),!this.ctx))return;let e=this.ctx.currentTime;[523.25,659.25,783.99,1046.5].forEach((t,n)=>{let r=this.ctx.createOscillator(),i=this.ctx.createGain();r.type=`sine`,r.frequency.setValueAtTime(t,e+n*.06),i.gain.setValueAtTime(this.volume*.5,e+n*.06),i.gain.exponentialRampToValueAtTime(.001,e+n*.06+.25),r.connect(i),i.connect(this.ctx.destination),r.start(e+n*.06),r.stop(e+n*.06+.25)})}hammer(){if(this.muted||(this.init(),!this.ctx))return;let e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type=`square`,t.frequency.setValueAtTime(140,e),t.frequency.exponentialRampToValueAtTime(30,e+.08),n.gain.setValueAtTime(this.volume*.8,e),n.gain.exponentialRampToValueAtTime(.001,e+.08),t.connect(n),n.connect(this.ctx.destination),t.start(e),t.stop(e+.08)}pet(){if(this.muted||(this.init(),!this.ctx))return;let e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type=`sine`,t.frequency.setValueAtTime(440,e),t.frequency.exponentialRampToValueAtTime(660,e+.15),n.gain.setValueAtTime(this.volume*.45,e),n.gain.exponentialRampToValueAtTime(.001,e+.15),t.connect(n),n.connect(this.ctx.destination),t.start(e),t.stop(e+.15)}},yh=`stardew_farm_save_v3`,bh={hoe:{id:`hoe`,name:`فأس الحراثة`,nameEn:`Hoe`,icon:`⛏️`,type:`tool`},water:{id:`water`,name:`مرشة الماء`,nameEn:`Watering Can`,icon:`💧`,type:`tool`},harvest:{id:`harvest`,name:`منجل الحصاد`,nameEn:`Harvest Scythe`,icon:`🌾`,type:`tool`},axe:{id:`axe`,name:`فأس الخشب`,nameEn:`Axe`,icon:`🪓`,type:`tool`},wood:{id:`wood`,name:`خشب بناء`,nameEn:`Wood`,icon:`🪵`,type:`resource`,price:8},apple:{id:`apple`,name:`تفاح مقرمش`,nameEn:`Apple`,icon:`🍎`,type:`consumable`,price:40},carrot:{id:`carrot`,name:`جزر برتقالي`,nameEn:`Carrot`,icon:`🥕`,type:`seed`,price:18},wheat:{id:`wheat`,name:`قمح ذهبي`,nameEn:`Wheat`,icon:`🌾`,type:`seed`,price:24},corn:{id:`corn`,name:`ذرة شمسية`,nameEn:`Corn`,icon:`🌽`,type:`seed`,price:48},tomato:{id:`tomato`,name:`طماطم حمراء`,nameEn:`Tomato`,icon:`🍅`,type:`seed`,price:65},strawberry:{id:`strawberry`,name:`فراولة المروج`,nameEn:`Strawberry`,icon:`🍓`,type:`seed`,price:95},sunflower:{id:`sunflower`,name:`دوار الشمس`,nameEn:`Sunflower`,icon:`🌻`,type:`seed`,price:120},pumpkin:{id:`pumpkin`,name:`قرع عملاق`,nameEn:`Pumpkin`,icon:`🎃`,type:`seed`,price:220},eggplant:{id:`eggplant`,name:`باذنجان ملكي`,nameEn:`Eggplant`,icon:`🍆`,type:`seed`,price:160},watermelon:{id:`watermelon`,name:`بطيخ صيفي`,nameEn:`Watermelon`,icon:`🍉`,type:`seed`,price:320},grape:{id:`grape`,name:`عنب معرش`,nameEn:`Grapes`,icon:`🍇`,type:`seed`,price:420},pineapple:{id:`pineapple`,name:`أناناس استوائي`,nameEn:`Pineapple`,icon:`🍍`,type:`seed`,price:650},egg:{id:`egg`,name:`بيض طازج`,nameEn:`Egg`,icon:`🥚`,type:`resource`,price:35},feather:{id:`feather`,name:`ريش بط ناعم`,nameEn:`Duck Feather`,icon:`🪶`,type:`resource`,price:70},milk:{id:`milk`,name:`حليب كامل الدسم`,nameEn:`Milk`,icon:`🥛`,type:`resource`,price:85},goat_cheese:{id:`goat_cheese`,name:`جبن ماعز ريفي`,nameEn:`Goat Cheese`,icon:`🧀`,type:`resource`,price:150},wool:{id:`wool`,name:`صوف خراف ناعم`,nameEn:`Fluffy Wool`,icon:`🧶`,type:`resource`,price:140},rabbit_wool:{id:`rabbit_wool`,name:`صوف أنجورا ملكي`,nameEn:`Angora Wool`,icon:`☁️`,type:`resource`,price:230},honey:{id:`honey`,name:`عسل زهور المروج`,nameEn:`Flower Honey`,icon:`🍯`,type:`resource`,price:160},bread:{id:`bread`,name:`خبز ريفي طازج`,nameEn:`Fresh Bread`,icon:`🍞`,type:`consumable`,price:120}},xh=class{constructor(e){this.particles=e,this.listeners=[],this.level=1,this.xp=0,this.coins=50,this.health=10,this.maxHealth=10,this.energy=10,this.maxEnergy=10,this.farmingSkill=1,this.farmerOutfit=`default`,this.unlockedPlotCount=20,this.currentExpansionIndex=0,this.customPlotPositions={},this.seasonIndex=0,this.dayOfSeason=1,this.dayOfWeekIndex=0,this.hotbar=JSON.parse(JSON.stringify(dh)),this.selectedSlot=0,this.inventory={},this.unlockedFarms={chicken:!1,duck:!1,sheep:!1,rabbit:!1,cow:!1,goat:!1,horse:!1},this.buildings={silo:!1,well:!0,beehive:!1,bakery:!1,greenhouse:!1},this.upgrades={waterCapacity:1,speedBoots:1},this.animalsCare={chicken:{count:0,happiness:100,fed:!1,productReady:!1},duck:{count:0,happiness:100,fed:!1,productReady:!1},cow:{count:0,happiness:100,fed:!1,productReady:!1},goat:{count:0,happiness:100,fed:!1,productReady:!1},sheep:{count:0,happiness:100,fed:!1,productReady:!1},rabbit:{count:0,happiness:100,fed:!1,productReady:!1},horse:{count:0,happiness:100,fed:!1,productReady:!1}},this.quests=JSON.parse(JSON.stringify(_h)).map(e=>({...e,current:0,completed:!1,claimed:!1})),this.merchantOrders=JSON.parse(JSON.stringify(gh)).map(e=>({...e,fulfilled:!1})),this.stats={cropsHarvested:0,coinsEarned:0,woodChopped:0,animalsPetted:0,ordersCompleted:0,buildingsConstructed:0},this.farmCustomLayout=null,this.load()}saveFarmCustomLayout(e){this.farmCustomLayout=e,this.save(),this.notify()}onChange(e){this.listeners.push(e)}notify(){for(let e of this.listeners)try{e(this)}catch{}}getXpNeededForLevel(e){return Math.round(180*1.18**(e-1))}addXp(e){this.xp+=e;let t=this.getXpNeededForLevel(this.level);if(this.xp>=t){this.xp-=t,this.level++,this.farmingSkill=Math.min(10,Math.floor(this.level/2)+1),$.levelUp();let e=this.level*100;this.coins+=e,this.onLevelUpCallback&&this.onLevelUpCallback(this.level,this.farmingSkill,e)}this.notify(),this.save()}addCoins(e){this.coins+=e,e>0&&(this.stats.coinsEarned+=e,this.checkQuests(`coins`,this.coins),$.coin()),this.notify(),this.save()}spendCoins(e){return this.coins>=e&&(this.coins-=e,this.notify(),this.save(),!0)}useCoins(e){return this.spendCoins(e)}getSelectedItem(){return this.hotbar[this.selectedSlot]||null}getItemTotalCount(e){let t=0,n=this.hotbar.find(t=>t.id===e);return n&&(t+=n.count),this.inventory[e]&&(t+=this.inventory[e]),t}addItem(e,t=1){let n=this.hotbar.find(t=>t.id===e);if(n)n.count+=t;else{let n=this.hotbar.find(e=>!e||e.count<=0);if(n&&bh[e]){let r=bh[e];n.id=r.id,n.name=r.name,n.nameEn=r.nameEn,n.icon=r.icon,n.type=r.type,n.count=t}else this.inventory[e]=(this.inventory[e]||0)+t}this.notify(),this.save()}consumeItem(e,t=1){if(this.getItemTotalCount(e)<t)return!1;let n=t,r=this.hotbar.find(t=>t.id===e);if(r&&r.count>0){let e=Math.min(r.count,n);r.count-=e,n-=e}if(n>0&&this.inventory[e]){let t=Math.min(this.inventory[e],n);this.inventory[e]-=t,n-=t}return this.notify(),this.save(),!0}useSelectedItem(e=1){let t=this.getSelectedItem();return t&&t.count>=e?(t.count-=e,this.notify(),this.save(),!0):!1}useEnergy(e=.5){return this.energy>0&&(this.energy=Math.max(0,Math.round((this.energy-e)*10)/10),this.notify(),!0)}restoreEnergy(e=2){this.energy=Math.min(this.maxEnergy,this.energy+e),this.notify()}addHarvestedItem(e,t=1){this.addItem(e,t),this.stats.cropsHarvested+=t,this.checkQuests(`harvest_${e}`,t),this.checkQuests(`harvest`,t),this.notify(),this.save()}addWood(e=3){this.addItem(`wood`,e),this.stats.woodChopped+=e,this.checkQuests(`chop`,e),this.notify(),this.save()}useWater(){let e=this.hotbar.find(e=>e.id===`water`);return e&&e.count>0?(e.count--,this.checkQuests(`water`,1),this.useEnergy(.2),this.notify(),!0):!1}refillWater(){let e=this.hotbar.find(e=>e.id===`water`);return e?(e.count=vh.waterCapacity.levels[this.upgrades.waterCapacity-1]?.cap||25,$.water(),this.notify(),!0):!1}eatApple(){return this.consumeItem(`apple`,1)?(this.restoreEnergy(3),$.eat(),this.particles.addFloatingText(`+3 طاقة! ⚡`,400,300,`#38bdf8`,20),this.notify(),!0):!1}petAnimal(e){let t=this.animalsCare[e];return t?(t.happiness=Math.min(100,t.happiness+8),$.pet(),this.stats.animalsPetted++,this.checkQuests(`pet_animal`,1),this.addXp(10),this.notify(),this.save(),!0):!1}feedAnimal(e){let t=this.animalsCare[e];if(!t)return!1;let n=null;return this.consumeItem(`wheat`,1)?n=`wheat`:this.consumeItem(`carrot`,1)?n=`carrot`:this.consumeItem(`apple`,1)&&(n=`apple`),n?(t.fed=!0,t.happiness=Math.min(100,t.happiness+15),t.productReady=!0,$.eat(),this.addXp(18),this.notify(),this.save(),!0):!1}collectAnimalProduct(e){let t=this.animalsCare[e],n=fh[e];return t&&n&&n.product&&n.product!==`ride`?(t.productReady=!1,this.addItem(n.product,1),this.addXp(n.xp||25),this.checkQuests(n.product,1),$.pop(),this.notify(),this.save(),!0):!1}constructBuilding(e){let t=mh[e];return!t||this.buildings[e]||this.level<t.minLevel||this.coins<t.cost||this.getItemTotalCount(`wood`)<t.woodCost?!1:(this.spendCoins(t.cost),this.consumeItem(`wood`,t.woodCost),this.buildings[e]=!0,this.stats.buildingsConstructed++,this.checkQuests(`build`,1),$.hammer(),$.levelUp(),this.addXp(250),this.notify(),this.save(),!0)}isBuildingConstructed(e){return!!this.buildings[e]}fulfillOrder(e){let t=this.merchantOrders.find(t=>t.id===e);if(!t||t.fulfilled)return!1;for(let e of t.requires)if(this.getItemTotalCount(e.id)<e.count)return!1;for(let e of t.requires)this.consumeItem(e.id,e.count);return t.fulfilled=!0,this.addCoins(t.rewardCoins),this.addXp(t.rewardXp),$.trade(),t.bonusItem&&this.addItem(t.bonusItem.id,t.bonusItem.count),this.stats.ordersCompleted++,this.checkQuests(`trade_order`,1),this.notify(),this.save(),!0}checkQuests(e,t){for(let n of this.quests)n.completed||n.targetType===e&&(e===`coins`?n.current=t:n.current+=t,n.current>=n.targetCount&&(n.current=n.targetCount,n.completed=!0,$.levelUp()))}claimQuest(e){let t=this.quests.find(t=>t.id===e);return t&&t.completed&&!t.claimed?(t.claimed=!0,this.addCoins(t.rewardCoins),this.addXp(t.rewardXp),$.coin(),this.notify(),this.save(),!0):!1}nextDay(){this.dayOfSeason++,this.dayOfSeason>28&&(this.dayOfSeason=1,this.seasonIndex=(this.seasonIndex+1)%4),this.dayOfWeekIndex=(this.dayOfWeekIndex+1)%7,this.energy=this.maxEnergy;for(let[e,t]of Object.entries(this.animalsCare))t.fed=!1,t.productReady=!0;this.dayOfSeason%3==0&&this.merchantOrders.forEach(e=>{e.fulfilled=!1}),this.notify(),this.save()}save(){try{let e={level:this.level,xp:this.xp,coins:this.coins,health:this.health,energy:this.energy,farmingSkill:this.farmingSkill,seasonIndex:this.seasonIndex,dayOfSeason:this.dayOfSeason,hotbar:this.hotbar,inventory:this.inventory,buildings:this.buildings,animalsCare:this.animalsCare,unlockedFarms:this.unlockedFarms,farmingPlotLayout:this.farmingPlotLayout,unlockedPlotCount:this.unlockedPlotCount||20,currentExpansionIndex:this.currentExpansionIndex||0,customPlotPositions:this.customPlotPositions||{},farmerOutfit:this.farmerOutfit,farmCustomLayout:this.farmCustomLayout||null,quests:this.quests,merchantOrders:this.merchantOrders,stats:this.stats};localStorage.setItem(yh,JSON.stringify(e))}catch(e){console.warn(`LocalStorage save error:`,e)}}load(){try{let e=localStorage.getItem(yh);if(e){let t=JSON.parse(e);this.coins=t.coins??this.coins,this.level=t.level??this.level,this.xp=t.xp??this.xp,this.energy=t.energy??this.energy,this.health=t.health??this.health,this.farmingSkill=t.farmingSkill??this.farmingSkill,this.dayOfSeason=t.dayOfSeason??this.dayOfSeason,t.hotbar&&(this.hotbar=t.hotbar),t.inventory&&(this.inventory={...this.inventory,...t.inventory}),t.buildings&&(this.buildings={...this.buildings,...t.buildings}),t.animalsCare&&(this.animalsCare={...this.animalsCare,...t.animalsCare}),t.unlockedFarms&&(this.unlockedFarms={...this.unlockedFarms,...t.unlockedFarms}),t.farmingPlotLayout&&(this.farmingPlotLayout=t.farmingPlotLayout),t.unlockedPlotCount&&(this.unlockedPlotCount=t.unlockedPlotCount),t.currentExpansionIndex!==void 0&&(this.currentExpansionIndex=t.currentExpansionIndex),t.customPlotPositions&&(this.customPlotPositions=t.customPlotPositions),t.farmerOutfit&&(this.farmerOutfit=t.farmerOutfit),t.farmCustomLayout&&(this.farmCustomLayout=t.farmCustomLayout),t.merchantOrders&&(this.merchantOrders=t.merchantOrders),t.quests&&(this.quests=this.quests.map(e=>{let n=t.quests.find(t=>t.id===e.id);return n?{...e,current:n.current,completed:n.completed,claimed:n.claimed}:e}))}}catch(e){console.warn(`LocalStorage load error:`,e)}}setPlotPosition(e,t,n){this.customPlotPositions||={},this.customPlotPositions[e]={posX:t,posZ:n},this.save()}resetPlotPositions(){this.customPlotPositions={},this.save()}startNewGame(){try{localStorage.removeItem(yh),localStorage.removeItem(`stardew_farm_save_v1`),localStorage.removeItem(`stardew_farm_save_v2`),localStorage.removeItem(`stardew_farm_save_v3`),localStorage.removeItem(`farm_unlocked_farms`),localStorage.removeItem(`farm_plot_layout`),localStorage.clear()}catch(e){console.warn(`LocalStorage clear error:`,e)}window.location.reload()}reset(){this.startNewGame()}},Sh=class{constructor(){this.particles=[],this.floatingTexts=[],this.rainDrops=[],this.fireflies=[],this.initFireflies(18)}initFireflies(e){for(let t=0;t<e;t++)this.fireflies.push({x:Math.random()*1200,y:Math.random()*900,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4,baseAlpha:.3+Math.random()*.7,phase:Math.random()*Math.PI*2,size:1.5+Math.random()*2})}addFloatingText(e,t,n,r=`#ffd700`,i=18){this.floatingTexts.push({text:e,x:t+(Math.random()-.5)*10,y:n,vy:-1.2,alpha:1,life:1,maxLife:1,color:r,size:i})}addDirtBurst(e,t){for(let n=0;n<8;n++){let n=Math.random()*Math.PI*2,r=.8+Math.random()*1.8;this.particles.push({x:e,y:t,vx:Math.cos(n)*r,vy:Math.sin(n)*r-1.2,gravity:.12,size:2.5+Math.random()*2.5,color:Math.random()>.5?`#7c4f2d`:`#5a361a`,life:.4+Math.random()*.3,maxLife:.7})}}addWaterSplash(e,t){for(let n=0;n<10;n++){let n=Math.random()*Math.PI*2,r=.5+Math.random()*1.5;this.particles.push({x:e,y:t,vx:Math.cos(n)*r,vy:Math.sin(n)*r-1.5,gravity:.15,size:2+Math.random()*2,color:`#64b5f6`,life:.35+Math.random()*.25,maxLife:.6})}}addHarvestBurst(e,t,n=`#ffb703`){let r=[n,`#ffffff`,`#ffd166`,`#06d6a0`];for(let n=0;n<16;n++){let n=Math.random()*Math.PI*2,i=1.2+Math.random()*2.5;this.particles.push({x:e,y:t,vx:Math.cos(n)*i,vy:Math.sin(n)*i-2,gravity:.14,size:3+Math.random()*3,color:r[Math.floor(Math.random()*r.length)],life:.6+Math.random()*.4,maxLife:1,shape:Math.random()>.5?`circle`:`star`})}}addHeart(e,t){this.floatingTexts.push({text:`❤️`,x:e,y:t,vy:-1,alpha:1,life:.9,maxLife:.9,color:`#ff4d6d`,size:20})}update(e,t,n=0,r=1200,i=900){for(let t=this.particles.length-1;t>=0;t--){let n=this.particles[t];n.x+=n.vx,n.y+=n.vy,n.gravity&&(n.vy+=n.gravity),n.life-=e,n.life<=0&&this.particles.splice(t,1)}for(let t=this.floatingTexts.length-1;t>=0;t--){let n=this.floatingTexts[t];n.y+=n.vy,n.life-=e,n.alpha=Math.max(0,n.life/n.maxLife),n.life<=0&&this.floatingTexts.splice(t,1)}if(t)for(let e=0;e<8;e++)this.rainDrops.push({x:Math.random()*(r+200)-100,y:-20,length:12+Math.random()*10,speed:12+Math.random()*6,targetY:Math.random()*i});for(let e=this.rainDrops.length-1;e>=0;e--){let t=this.rainDrops[e];t.x-=2,t.y+=t.speed,t.y>=t.targetY&&(Math.random()<.25&&this.particles.push({x:t.x,y:t.y,vx:0,vy:0,size:2,maxSize:6,isRipple:!0,color:`rgba(255, 255, 255, 0.4)`,life:.2,maxLife:.2}),this.rainDrops.splice(e,1))}if(n>.15)for(let t of this.fireflies)t.phase+=e*3,t.x+=t.vx,t.y+=t.vy,t.x<0&&(t.x=r),t.x>r&&(t.x=0),t.y<0&&(t.y=i),t.y>i&&(t.y=0),Math.random()<.02&&(t.vx=(Math.random()-.5)*.5,t.vy=(Math.random()-.5)*.5)}render(e){for(let t of this.particles){let n=Math.max(0,t.life/t.maxLife);if(e.save(),e.globalAlpha=n,t.isRipple){e.strokeStyle=t.color,e.lineWidth=1;let n=t.maxSize*(1-t.life/t.maxLife);e.beginPath(),e.ellipse(t.x,t.y,n,n*.5,0,0,Math.PI*2),e.stroke()}else e.fillStyle=t.color,e.beginPath(),e.arc(t.x,t.y,t.size*(t.life/t.maxLife),0,Math.PI*2),e.fill();e.restore()}if(this.rainDrops.length>0){e.save(),e.strokeStyle=`rgba(190, 225, 255, 0.65)`,e.lineWidth=1.5,e.lineCap=`round`,e.beginPath();for(let t of this.rainDrops)e.moveTo(t.x,t.y),e.lineTo(t.x-3,t.y+t.length);e.stroke(),e.restore()}for(let t of this.fireflies){let n=Math.sin(t.phase)*.3+.7,r=t.baseAlpha*n;e.save(),e.globalAlpha=r,e.fillStyle=`#fffa65`,e.shadowColor=`#ffeaa7`,e.shadowBlur=8,e.beginPath(),e.arc(t.x,t.y,t.size,0,Math.PI*2),e.fill(),e.restore()}for(let t of this.floatingTexts)e.save(),e.globalAlpha=t.alpha,e.font=`bold ${t.size}px 'Outfit', 'Cairo', sans-serif`,e.textAlign=`center`,e.shadowColor=`rgba(0, 0, 0, 0.7)`,e.shadowBlur=4,e.shadowOffsetX=1,e.shadowOffsetY=2,e.fillStyle=t.color,e.fillText(t.text,t.x,t.y),e.restore()}},Ch=new class{constructor(){let e=`./`.endsWith(`/`)?`./sounds/backgroundmusic.m4a`:`.//sounds/backgroundmusic.m4a`;this.audio=new Audio(e),this.audio.loop=!0,this.audio.volume=.35,this.isPlaying=!1,this.isMuted=!1,this.userInteracted=!1;let t=()=>{this.userInteracted||(this.userInteracted=!0,this.play(),window.removeEventListener(`click`,t),window.removeEventListener(`keydown`,t),window.removeEventListener(`touchstart`,t))};window.addEventListener(`click`,t,{once:!0}),window.addEventListener(`keydown`,t,{once:!0}),window.addEventListener(`touchstart`,t,{once:!0})}play(){this.isMuted||this.audio.play().then(()=>{this.isPlaying=!0}).catch(e=>{console.log(`Audio autoplay prevented, will start on next click`)})}pause(){this.audio.pause(),this.isPlaying=!1}toggleMute(){return this.isMuted=!this.isMuted,this.isMuted?(this.audio.pause(),this.isPlaying=!1):this.play(),this.isMuted}setVolume(e){this.audio.volume=Math.max(0,Math.min(1,e))}},wh=class{constructor(e){this.day=1,this.time=420,this.minuteRate=2.5,this.weather=`sunny`,this.nextWeather=`rainy`,this.onDayEndCallback=e,this.weatherListeners=[],this.lightSources=[],this.thunderTimer=0,this.nextThunderIn=5+Math.random()*8,this.isLightning=!1}onWeatherChange(e){this.weatherListeners.push(e)}notifyWeather(){this.weatherListeners.forEach(e=>{try{e(this.weather,this.getWeatherDef())}catch{}})}getWeatherDef(){return hh[this.weather]||hh.sunny}getNextWeatherDef(){return hh[this.nextWeather]||hh.sunny}pickNextWeather(e=1){let t=Math.random();return e===3?t<.45?`snowy`:t<.7?`windy`:t<.85?`rainy`:`sunny`:t<.45?`sunny`:t<.7?`rainy`:t<.82?`stormy`:t<.95?`windy`:`snowy`}update(e,t=1){this.time+=e*this.minuteRate,this.time>=1440&&(this.time=0,this.day++,this.setWeather(this.nextWeather),this.nextWeather=this.pickNextWeather(t),this.onDayEndCallback&&this.onDayEndCallback(this.day,this.weather)),this.weather===`stormy`?(this.thunderTimer+=e,this.thunderTimer>=this.nextThunderIn&&(this.thunderTimer=0,this.nextThunderIn=6+Math.random()*12,$.thunder(),this.isLightning=!0,setTimeout(()=>{this.isLightning=!1},180))):this.isLightning=!1,(this.weather===`rainy`||this.weather===`stormy`)&&!$.rainNode&&!$.muted?$.startRainSound():this.weather!==`rainy`&&this.weather!==`stormy`&&$.rainNode&&$.stopRainSound()}setWeather(e){hh[e]||(e=`sunny`),this.weather=e,e===`rainy`||e===`stormy`?$.startRainSound():$.stopRainSound(),this.notifyWeather()}getTimeFormatted(){let e=Math.floor(this.time/60)%24,t=Math.floor(this.time%60),n=e>=12?`م`:`ص`;return`${e%12==0?12:e%12}:${t.toString().padStart(2,`0`)} ${n}`}getHourFloat(){return this.time/60}getAmbientColor(){let e=this.getHourFloat();return e>=5&&e<8?{r:255,g:180,b:120,alpha:(1-(e-5)/3)*.45}:e>=8&&e<16.5?this.weather===`stormy`?{r:50,g:55,b:85,alpha:.48}:this.weather===`rainy`?{r:70,g:90,b:120,alpha:.32}:this.weather===`snowy`?{r:180,g:215,b:245,alpha:.22}:this.weather===`windy`?{r:220,g:235,b:200,alpha:.12}:{r:255,g:255,b:255,alpha:0}:e>=16.5&&e<19.5?{r:240,g:115,b:65,alpha:(e-16.5)/3*.55}:e>=19.5||e<5?{r:15,g:25,b:65,alpha:.72}:{r:0,g:0,b:0,alpha:0}}},Th={};(function e(t,n,r,i){var a=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),o=typeof Path2D==`function`&&typeof DOMMatrix==`function`,s=(function(){if(!t.OffscreenCanvas)return!1;try{var e=new OffscreenCanvas(1,1),n=e.getContext(`2d`);n.fillRect(0,0,1,1);var r=e.transferToImageBitmap();n.createPattern(r,`no-repeat`)}catch{return!1}return!0})();function c(){}function l(e){var r=n.exports.Promise,i=r===void 0?t.Promise:r;return typeof i==`function`?new i(e):(e(c,c),null)}var u=(function(e,t){return{transform:function(n){if(e)return n;if(t.has(n))return t.get(n);var r=new OffscreenCanvas(n.width,n.height);return r.getContext(`2d`).drawImage(n,0,0),t.set(n,r),r},clear:function(){t.clear()}}})(s,new Map),d=function(){var e,t,n={},r=0;return typeof requestAnimationFrame==`function`&&typeof cancelAnimationFrame==`function`?(e=function(e){var t=Math.random();return n[t]=requestAnimationFrame(function i(a){r===a||r+16-1<a?(r=a,delete n[t],e()):n[t]=requestAnimationFrame(i)}),t},t=function(e){n[e]&&cancelAnimationFrame(n[e])}):(e=function(e){return setTimeout(e,16)},t=function(e){return clearTimeout(e)}),{frame:e,cancel:t}}(),f=(function(){var t,n,i={};function o(e){function t(t,n){e.postMessage({options:t||{},callback:n})}e.init=function(t){var n=t.transferControlToOffscreen();e.postMessage({canvas:n},[n])},e.fire=function(r,a,o){if(n)return t(r,null),n;var s=Math.random().toString(36).slice(2);return n=l(function(a){function c(t){t.data.callback===s&&(delete i[s],e.removeEventListener(`message`,c),n=null,u.clear(),o(),a())}e.addEventListener(`message`,c),t(r,s),i[s]=c.bind(null,{data:{callback:s}})}),n},e.reset=function(){for(var t in e.postMessage({reset:!0}),i)i[t](),delete i[t]}}return function(){if(t)return t;if(!r&&a){var n=[`var CONFETTI, SIZE = {}, module = {};`,`(`+e.toString()+`)(this, module, true, SIZE);`,`onmessage = function(msg) {`,`  if (msg.data.options) {`,`    CONFETTI(msg.data.options).then(function () {`,`      if (msg.data.callback) {`,`        postMessage({ callback: msg.data.callback });`,`      }`,`    });`,`  } else if (msg.data.reset) {`,`    CONFETTI && CONFETTI.reset();`,`  } else if (msg.data.resize) {`,`    SIZE.width = msg.data.resize.width;`,`    SIZE.height = msg.data.resize.height;`,`  } else if (msg.data.canvas) {`,`    SIZE.width = msg.data.canvas.width;`,`    SIZE.height = msg.data.canvas.height;`,`    CONFETTI = module.exports.create(msg.data.canvas);`,`  }`,`}`].join(`
`);try{t=new Worker(URL.createObjectURL(new Blob([n])))}catch(e){return typeof console<`u`&&typeof console.warn==`function`&&console.warn(`🎊 Could not load worker`,e),null}o(t)}return t}})(),p={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:[`square`,`circle`],zIndex:100,colors:[`#26ccff`,`#a25afd`,`#ff5e7e`,`#88ff5a`,`#fcff42`,`#ffa62d`,`#ff36ff`],disableForReducedMotion:!1,scalar:1};function m(e,t){return t?t(e):e}function h(e){return e!=null}function g(e,t,n){return m(e&&h(e[t])?e[t]:p[t],n)}function _(e){return e<0?0:Math.floor(e)}function v(e,t){return Math.floor(Math.random()*(t-e))+e}function y(e){return parseInt(e,16)}function b(e){return e.map(x)}function x(e){var t=String(e).replace(/[^0-9a-f]/gi,``);return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:y(t.substring(0,2)),g:y(t.substring(2,4)),b:y(t.substring(4,6))}}function S(e){var t=g(e,`origin`,Object);return t.x=g(t,`x`,Number),t.y=g(t,`y`,Number),t}function C(e){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}function w(e){var t=e.getBoundingClientRect();e.width=t.width,e.height=t.height}function T(e){var t=document.createElement(`canvas`);return t.style.position=`fixed`,t.style.top=`0px`,t.style.left=`0px`,t.style.pointerEvents=`none`,t.style.zIndex=e,t}function E(e,t,n,r,i,a,o,s,c){e.save(),e.translate(t,n),e.rotate(a),e.scale(r,i),e.arc(0,0,1,o,s,c),e.restore()}function D(e){var t=e.angle*(Math.PI/180),n=e.spread*(Math.PI/180);return{x:e.x,y:e.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:e.startVelocity*.5+Math.random()*e.startVelocity,angle2D:-t+(.5*n-Math.random()*n),tiltAngle:(Math.random()*.5+.25)*Math.PI,color:e.color,shape:e.shape,tick:0,totalTicks:e.ticks,decay:e.decay,drift:e.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:e.gravity*3,ovalScalar:.6,scalar:e.scalar,flat:e.flat}}function O(e,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.velocity*=t.decay,t.flat?(t.wobble=0,t.wobbleX=t.x+10*t.scalar,t.wobbleY=t.y+10*t.scalar,t.tiltSin=0,t.tiltCos=0,t.random=1):(t.wobble+=t.wobbleSpeed,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble),t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2);var n=t.tick++/t.totalTicks,r=t.x+t.random*t.tiltCos,i=t.y+t.random*t.tiltSin,a=t.wobbleX+t.random*t.tiltCos,s=t.wobbleY+t.random*t.tiltSin;if(e.fillStyle=`rgba(`+t.color.r+`, `+t.color.g+`, `+t.color.b+`, `+(1-n)+`)`,e.beginPath(),o&&t.shape.type===`path`&&typeof t.shape.path==`string`&&Array.isArray(t.shape.matrix))e.fill(N(t.shape.path,t.shape.matrix,t.x,t.y,Math.abs(a-r)*.1,Math.abs(s-i)*.1,Math.PI/10*t.wobble));else if(t.shape.type===`bitmap`){var c=Math.PI/10*t.wobble,l=Math.abs(a-r)*.1,d=Math.abs(s-i)*.1,f=t.shape.bitmap.width*t.scalar,p=t.shape.bitmap.height*t.scalar,m=new DOMMatrix([Math.cos(c)*l,Math.sin(c)*l,-Math.sin(c)*d,Math.cos(c)*d,t.x,t.y]);m.multiplySelf(new DOMMatrix(t.shape.matrix));var h=e.createPattern(u.transform(t.shape.bitmap),`no-repeat`);h.setTransform(m),e.globalAlpha=1-n,e.fillStyle=h,e.fillRect(t.x-f/2,t.y-p/2,f,p),e.globalAlpha=1}else if(t.shape===`circle`)e.ellipse?e.ellipse(t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(s-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):E(e,t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(s-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI);else if(t.shape===`star`)for(var g=Math.PI/2*3,_=4*t.scalar,v=8*t.scalar,y=t.x,b=t.y,x=5,S=Math.PI/x;x--;)y=t.x+Math.cos(g)*v,b=t.y+Math.sin(g)*v,e.lineTo(y,b),g+=S,y=t.x+Math.cos(g)*_,b=t.y+Math.sin(g)*_,e.lineTo(y,b),g+=S;else e.moveTo(Math.floor(t.x),Math.floor(t.y)),e.lineTo(Math.floor(t.wobbleX),Math.floor(i)),e.lineTo(Math.floor(a),Math.floor(s)),e.lineTo(Math.floor(r),Math.floor(t.wobbleY));return e.closePath(),e.fill(),t.tick<t.totalTicks}function k(e,t,n,a,o){var s=t.slice(),c=e.getContext(`2d`),f,p,m=l(function(t){function l(){f=p=null,c.clearRect(0,0,a.width,a.height),u.clear(),o(),t()}function m(){r&&(a.width!==i.width||a.height!==i.height)&&(a.width=e.width=i.width,a.height=e.height=i.height),!a.width&&!a.height&&(n(e),a.width=e.width,a.height=e.height),c.clearRect(0,0,a.width,a.height),s=s.filter(function(e){return O(c,e)}),s.length?f=d.frame(m):l()}f=d.frame(m),p=l});return{addFettis:function(e){return s=s.concat(e),m},canvas:e,promise:m,reset:function(){f&&d.cancel(f),p&&p()}}}function A(e,n){var r=!e,i=!!g(n||{},`resize`),o=!1,s=g(n,`disableForReducedMotion`,Boolean),c=a&&g(n||{},`useWorker`)?f():null,u=r?C:w,d=e&&c?!!e.__confetti_initialized:!1,p=typeof matchMedia==`function`&&matchMedia(`(prefers-reduced-motion)`).matches,m;function h(t,n,r){for(var i=g(t,`particleCount`,_),a=g(t,`angle`,Number),o=g(t,`spread`,Number),s=g(t,`startVelocity`,Number),c=g(t,`decay`,Number),l=g(t,`gravity`,Number),d=g(t,`drift`,Number),f=g(t,`colors`,b),p=g(t,`ticks`,Number),h=g(t,`shapes`),y=g(t,`scalar`),x=!!g(t,`flat`),C=S(t),w=i,T=[],E=e.width*C.x,O=e.height*C.y;w--;)T.push(D({x:E,y:O,angle:a,spread:o,startVelocity:s,color:f[w%f.length],shape:h[v(0,h.length)],ticks:p,decay:c,gravity:l,drift:d,scalar:y,flat:x}));return m?m.addFettis(T):(m=k(e,T,u,n,r),m.promise)}function y(n){var a=s||g(n,`disableForReducedMotion`,Boolean),f=g(n,`zIndex`,Number);if(a&&p)return l(function(e){e()});r&&m?e=m.canvas:r&&!e&&(e=T(f),document.body.appendChild(e)),i&&!d&&u(e);var _={width:e.width,height:e.height};c&&!d&&c.init(e),d=!0,c&&(e.__confetti_initialized=!0);function v(){if(c){var t={getBoundingClientRect:function(){if(!r)return e.getBoundingClientRect()}};u(t),c.postMessage({resize:{width:t.width,height:t.height}});return}_.width=_.height=null}function y(){m=null,i&&(o=!1,t.removeEventListener(`resize`,v)),r&&e&&(document.body.contains(e)&&document.body.removeChild(e),e=null,d=!1)}return i&&!o&&(o=!0,t.addEventListener(`resize`,v,!1)),c?c.fire(n,_,y):h(n,_,y)}return y.reset=function(){c&&c.reset(),m&&m.reset()},y}var j;function M(){return j||=A(null,{useWorker:!0,resize:!0}),j}function N(e,t,n,r,i,a,o){var s=new Path2D(e),c=new Path2D;c.addPath(s,new DOMMatrix(t));var l=new Path2D;return l.addPath(c,new DOMMatrix([Math.cos(o)*i,Math.sin(o)*i,-Math.sin(o)*a,Math.cos(o)*a,n,r])),l}function P(e){if(!o)throw Error(`path confetti are not supported in this browser`);var t,n;typeof e==`string`?t=e:(t=e.path,n=e.matrix);var r=new Path2D(t),i=document.createElement(`canvas`).getContext(`2d`);if(!n){for(var a=1e3,s=a,c=a,l=0,u=0,d,f,p=0;p<a;p+=2)for(var m=0;m<a;m+=2)i.isPointInPath(r,p,m,`nonzero`)&&(s=Math.min(s,p),c=Math.min(c,m),l=Math.max(l,p),u=Math.max(u,m));d=l-s,f=u-c;var h=10,g=Math.min(h/d,h/f);n=[g,0,0,g,-Math.round(d/2+s)*g,-Math.round(f/2+c)*g]}return{type:`path`,path:t,matrix:n}}function ee(e){var t,n=1,r=`#000000`,i=`"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif`;typeof e==`string`?t=e:(t=e.text,n=`scalar`in e?e.scalar:n,i=`fontFamily`in e?e.fontFamily:i,r=`color`in e?e.color:r);var a=10*n,o=``+a+`px `+i,s=new OffscreenCanvas(a,a),c=s.getContext(`2d`);c.font=o;var l=c.measureText(t),u=Math.ceil(l.actualBoundingBoxRight+l.actualBoundingBoxLeft),d=Math.ceil(l.actualBoundingBoxAscent+l.actualBoundingBoxDescent),f=2,p=l.actualBoundingBoxLeft+f,m=l.actualBoundingBoxAscent+f;u+=f+f,d+=f+f,s=new OffscreenCanvas(u,d),c=s.getContext(`2d`),c.font=o,c.fillStyle=r,c.fillText(t,p,m);var h=1/n;return{type:`bitmap`,bitmap:s.transferToImageBitmap(),matrix:[h,0,0,h,-u*h/2,-d*h/2]}}n.exports=function(){return M().apply(this,arguments)},n.exports.reset=function(){M().reset()},n.exports.create=A,n.exports.shapeFromPath=P,n.exports.shapeFromText=ee})((function(){return typeof window<`u`?window:typeof self<`u`?self:this||{}})(),Th,!1);var Eh=Th.exports;Th.exports.create;var Dh=class{constructor(e){this.canvas=e,this.particles=new Sh,this.state=new xh(this.particles),this.timeWeather=new wh((e,t)=>{this.state.nextDay(),this.particles.addFloatingText(`يوم جديد أشرق في المزرعة! ☀️`,0,30,`#ffd166`,22)}),this.unlockedPlotCount=this.state&&this.state.unlockedPlotCount||20,this.currentExpansionIndex=this.state&&this.state.currentExpansionIndex!==void 0?this.state.currentExpansionIndex:0,this.unlockedFarms=this.state&&this.state.unlockedFarms?{...this.state.unlockedFarms}:{chicken:!1,duck:!1,sheep:!1,rabbit:!1,cow:!1,goat:!1,horse:!1},this.farmingPlotLayout=this.state&&this.state.farmingPlotLayout||`twin_blocks`,this.isMovingPlotMode=!1,this.selectedPlotToMove=null,this.plotGhostBox=null,this.plotMoveHighlight=null,this.isPlacingNewPlotMode=!1,this.plotPlacementGhost=null,this.isFarmerWalkMode=!1,this.roadTiles=new Map,this.isRoadEditMode=!1,this.roadEditTool=`move`,this.selectedRoadTile=null,this.roadGhostBox=null,this.roadHighlightBox=null,this.edgePanMargin=38,this.edgePanSpeed=24,this.edgePanDir=new H(0,0),this.isEdgePanning=!1,this.cameraFocusPoint=new U(0,0,0),this.troughStations=new Map,this.staticColliders=[],this.buildings3D=new Map,this.initThree(),this.createWorld(),this.createCentralFarmingPlots(),this.createSideAnimalZones(),this.createBuildings(),this.createFarmer(),this.createDecorations(),this.createAtmosphericEffects(),this.initEvents(),this.initBuilderMode(),this.loadFarmLayout(),this.isRunning=!1,this.lastTime=performance.now(),this.elapsedTime=0,Ch.play()}initThree(){this.renderer=new Rl({canvas:this.canvas,antialias:!0,powerPreference:`high-performance`}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=1,this.renderer.outputColorSpace=Ie,this.renderer.toneMapping=4,this.renderer.toneMappingExposure=1.15,this.scene=new Pn,this.scene.background=new jn(`#78c850`),this.scene.fog=new Nn(`#78c850`,.007),this.isIsometric=!0,this.isOrthographic=!0,this.isoAngle=Math.PI/4,this.targetIsoAngle=Math.PI/4,this.frustumSize=34,this.cameraDistance=32,this.cameraHeight=26;let e=window.innerWidth/window.innerHeight;this.orthoCamera=new Ka(-this.frustumSize*e/2,this.frustumSize*e/2,this.frustumSize/2,-this.frustumSize/2,-200,400),this.perspCamera=new Ua(35,e,1,350),this.camera=this.isOrthographic?this.orthoCamera:this.perspCamera;let t=Math.sin(this.isoAngle)*this.cameraDistance,n=Math.cos(this.isoAngle)*this.cameraDistance;this.camera.position.set(t,this.cameraHeight,n),this.camera.lookAt(0,1,0),this.pixelSize=2,this.composer=new ql(this.renderer),this.pixelPass=new Ql(this.pixelSize,this.scene,this.camera,{normalEdgeStrength:.28,depthEdgeStrength:.34}),this.pixelPass.setSize(window.innerWidth,window.innerHeight),this.composer.addPass(this.pixelPass),this.bloomPass=new Yl(new H(window.innerWidth,window.innerHeight),.14,.4,.9),this.composer.addPass(this.bloomPass);let r=new Zl;this.composer.addPass(r);let i=new Ya(16774630,.75);this.scene.add(i);let a=new ja(14482663,3560212,.45);this.scene.add(a),this.sunLight=new Ja(16775920,1.25),this.sunLight.position.set(30,48,25),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.width=2048,this.sunLight.shadow.mapSize.height=2048,this.sunLight.shadow.camera.near=.5,this.sunLight.shadow.camera.far=160,this.sunLight.shadow.camera.left=-45,this.sunLight.shadow.camera.right=45,this.sunLight.shadow.camera.top=45,this.sunLight.shadow.camera.bottom=-45,this.sunLight.shadow.bias=-5e-4,this.scene.add(this.sunLight),this.raycaster=new go,this.mouse=new H(-1e3,-1e3),this.hoveredTile=null;let o=new G,s=new Xi(.35,.65,32);s.rotateX(-Math.PI/2);let c=new K(s,new Br({color:16765286,transparent:!0,opacity:.85,side:2}));o.add(c);let l=new Bi(.16,16);l.rotateX(-Math.PI/2);let u=new K(l,new Br({color:16776171,transparent:!0,opacity:.95,side:2}));o.add(u),this.moveIndicator=o,this.moveIndicator.position.y=.08,this.moveIndicator.visible=!1,this.scene.add(this.moveIndicator);let d=new G,f=new Ei(new Ji(new q(2.45,.32,2.45)),new mi({color:16765286,linewidth:3,transparent:!0,opacity:.95}));d.add(f);let p=new Yi(2.35,2.35);p.rotateX(-Math.PI/2);let m=new K(p,new Br({color:16498468,transparent:!0,opacity:.22,side:2}));m.position.y=.05,d.add(m),d.raycast=()=>{},f.raycast=()=>{},m.raycast=()=>{},d.visible=!1,this.cursorMesh=d,this.cursorFrameMesh=f,this.cursorGlowMesh=m,this.scene.add(d),this.initProceduralTextures()}initProceduralTextures(){this.textures={};let t=document.createElement(`canvas`);t.width=512,t.height=512;let n=t.getContext(`2d`);n.fillStyle=`#fdfbf7`,n.fillRect(0,0,512,512),n.fillStyle=`#1e293b`,[{x:120,y:150,r:85},{x:180,y:120,r:60},{x:370,y:190,r:90},{x:330,y:270,r:65},{x:240,y:390,r:80},{x:90,y:370,r:65},{x:440,y:390,r:55},{x:260,y:80,r:45}].forEach(e=>{n.beginPath(),n.arc(e.x,e.y,e.r,0,Math.PI*2),n.fill();for(let t=0;t<6;t++){let r=t/6*Math.PI*2,i=e.x+Math.cos(r)*(e.r*.7),a=e.y+Math.sin(r)*(e.r*.7);n.beginPath(),n.arc(i,a,e.r*.4,0,Math.PI*2),n.fill()}}),this.textures.cow=new Fi(t);let r=document.createElement(`canvas`);r.width=256,r.height=256;let i=r.getContext(`2d`);i.fillStyle=`#f8f5ee`,i.fillRect(0,0,256,256),i.strokeStyle=`rgba(215, 205, 185, 0.4)`,i.lineWidth=3;for(let e=0;e<90;e++){let e=Math.random()*256,t=Math.random()*256,n=6+Math.random()*10;i.beginPath(),i.arc(e,t,n,0,Math.PI*1.5),i.stroke()}this.textures.wool=new Fi(r),this.textures.wool.wrapS=e,this.textures.wool.wrapT=e,this.textures.wool.repeat.set(3,3);let a=document.createElement(`canvas`);a.width=256,a.height=256;let o=a.getContext(`2d`);o.fillStyle=`#7c3f15`,o.fillRect(0,0,256,256),o.fillStyle=`#8f4a1a`;for(let e=0;e<256;e+=4)o.fillRect(0,e,256,2);this.textures.horse=new Fi(a);let s=document.createElement(`canvas`);s.width=256,s.height=256;let c=s.getContext(`2d`);c.fillStyle=`#fcfbf7`,c.fillRect(0,0,256,256),c.fillStyle=`#ea580c`,c.beginPath(),c.arc(60,80,50,0,Math.PI*2),c.arc(190,180,55,0,Math.PI*2),c.fill(),c.fillStyle=`#1e293b`,c.beginPath(),c.arc(170,70,42,0,Math.PI*2),c.arc(70,200,48,0,Math.PI*2),c.fill(),this.textures.calico=new Fi(s);let l=document.createElement(`canvas`);l.width=256,l.height=256;let u=l.getContext(`2d`);u.fillStyle=`#dc582a`,u.fillRect(0,0,256,256),u.fillStyle=`#8f2317`;for(let e=0;e<256;e+=64)u.fillRect(e,0,28,256);for(let e=0;e<256;e+=64)u.fillRect(0,e,256,28);u.fillStyle=`#5c130b`;for(let e=0;e<256;e+=64)for(let t=0;t<256;t+=64)u.fillRect(e,t,28,28);u.strokeStyle=`rgba(251, 191, 36, 0.85)`,u.lineWidth=3;for(let e=32;e<256;e+=64)u.beginPath(),u.moveTo(e,0),u.lineTo(e,256),u.stroke();for(let e=32;e<256;e+=64)u.beginPath(),u.moveTo(0,e),u.lineTo(256,e),u.stroke();this.textures.farmerShirt=new Fi(l),this.textures.farmerShirt.wrapS=e,this.textures.farmerShirt.wrapT=e,this.textures.farmerShirt.repeat.set(2,2),this.textures.flannel=this.textures.farmerShirt;let d=document.createElement(`canvas`);d.width=256,d.height=256;let f=d.getContext(`2d`);f.fillStyle=`#475569`,f.fillRect(0,0,256,256),f.fillStyle=`#1e293b`;for(let e=0;e<256;e+=64)f.fillRect(e,0,28,256);for(let e=0;e<256;e+=64)f.fillRect(0,e,256,28);f.fillStyle=`#0f172a`;for(let e=0;e<256;e+=64)for(let t=0;t<256;t+=64)f.fillRect(e,t,28,28);f.strokeStyle=`rgba(148, 163, 184, 0.75)`,f.lineWidth=2.5;for(let e=32;e<256;e+=64)f.beginPath(),f.moveTo(e,0),f.lineTo(e,256),f.stroke();for(let e=32;e<256;e+=64)f.beginPath(),f.moveTo(0,e),f.lineTo(256,e),f.stroke();this.textures.farmerShirtAlt=new Fi(d),this.textures.farmerShirtAlt.wrapS=e,this.textures.farmerShirtAlt.wrapT=e,this.textures.farmerShirtAlt.repeat.set(2,2);let p=document.createElement(`canvas`);p.width=128,p.height=128;let m=p.getContext(`2d`);m.fillStyle=`#223854`,m.fillRect(0,0,128,128),m.strokeStyle=`rgba(25, 41, 62, 0.7)`,m.lineWidth=2;for(let e=-128;e<256;e+=5)m.beginPath(),m.moveTo(e,0),m.lineTo(e+128,128),m.stroke();this.textures.farmerDenim=new Fi(p),this.textures.farmerDenim.wrapS=e,this.textures.farmerDenim.wrapT=e,this.textures.farmerDenim.repeat.set(3,3),this.textures.denim=this.textures.farmerDenim;let h=document.createElement(`canvas`);h.width=128,h.height=128;let g=h.getContext(`2d`);g.fillStyle=`#4c6c8e`,g.fillRect(0,0,128,128),g.strokeStyle=`rgba(43, 67, 92, 0.65)`,g.lineWidth=2;for(let e=-128;e<256;e+=5)g.beginPath(),g.moveTo(e,0),g.lineTo(e+128,128),g.stroke();this.textures.farmerDenimAlt=new Fi(h),this.textures.farmerDenimAlt.wrapS=e,this.textures.farmerDenimAlt.wrapT=e,this.textures.farmerDenimAlt.repeat.set(3,3);let _=document.createElement(`canvas`);_.width=128,_.height=128;let v=_.getContext(`2d`);v.fillStyle=`#deb06c`,v.fillRect(0,0,128,128),v.strokeStyle=`#c5954c`,v.lineWidth=2;for(let e=0;e<128;e+=8)v.beginPath(),v.moveTo(e,0),v.lineTo(e,128),v.stroke(),v.beginPath(),v.moveTo(0,e),v.lineTo(128,e),v.stroke();this.textures.strawHat=new Fi(_),this.textures.strawHat.wrapS=e,this.textures.strawHat.wrapT=e,this.textures.strawHat.repeat.set(4,4);let y=document.createElement(`canvas`);y.width=512,y.height=512;let b=y.getContext(`2d`),x=b.createLinearGradient(0,0,512,512);x.addColorStop(0,`#5cb82e`),x.addColorStop(.5,`#4ea624`),x.addColorStop(1,`#55aa28`),b.fillStyle=x,b.fillRect(0,0,512,512);for(let e=0;e<4e3;e++){let e=Math.random()*512,t=Math.random()*512,n=3+Math.random()*5;b.strokeStyle=Math.random()>.5?`#6ec539`:`#3e8c1b`,b.lineWidth=1+Math.random(),b.beginPath(),b.moveTo(e,t),b.lineTo(e+(Math.random()-.5)*2,t-n),b.stroke()}for(let e=0;e<140;e++){let e=Math.random()*512,t=Math.random()*512;b.fillStyle=`#68be32`;for(let n=0;n<3;n++){let r=n/3*Math.PI*2;b.beginPath(),b.arc(e+Math.cos(r)*2.8,t+Math.sin(r)*2.8,2.2,0,Math.PI*2),b.fill()}}this.textures.grass=new Fi(y),this.textures.grass.wrapS=e,this.textures.grass.wrapT=e,this.textures.grass.repeat.set(40,40);let S=document.createElement(`canvas`);S.width=256,S.height=256;let C=S.getContext(`2d`);C.fillStyle=`#dfa552`,C.fillRect(0,0,256,256),C.strokeStyle=`#b87c33`,C.lineWidth=2;for(let e=0;e<256;e+=24){let t=e/24%2==0?0:16;for(let n=-16;n<272;n+=32)C.strokeRect(n+t,e,30,22)}this.textures.cobblestone=new Fi(S),this.textures.cobblestone.wrapS=e,this.textures.cobblestone.wrapT=e,this.textures.cobblestone.repeat.set(2,2)}createWorld(){let e=new K(new Yi(320,320,32,32),new Z({map:this.textures.grass,color:`#ffffff`}));e.rotation.x=-Math.PI/2,e.position.y=-.05,e.receiveShadow=!0,e.userData={isGroundTerrain:!0},this.groundMesh=e,this.scene.add(e),this.roadsGroup=new G,this.scene.add(this.roadsGroup),this.customWatersGroup=new G,this.scene.add(this.customWatersGroup),this.customRoadTiles=new Map,this.customWaterTiles=new Map,this.createRoads(),this.createRealisticMeadowGrass(),this.createPlotMoveHelpers()}createPlotMoveHelpers(){let e=new q(2.4,.32,2.4),t=new Br({color:2278750,transparent:!0,opacity:.45});this.plotGhostBox=new K(e,t),this.plotGhostBox.position.set(0,.16,0),this.plotGhostBox.visible=!1;let n=new Ei(new Ji(e),new mi({color:16777215,linewidth:2}));this.plotGhostBox.add(n),this.scene.add(this.plotGhostBox);let r=new Ji(new q(2.5,.36,2.5));this.plotMoveHighlight=new Ei(r,new mi({color:16498468,linewidth:3})),this.plotMoveHighlight.visible=!1,this.scene.add(this.plotMoveHighlight)}createRealisticMeadowGrass(){this.grassTuftsGroup=new G;let e=new Yi(.18,.45);e.translate(0,.225,0);let t=new Z({color:`#4da624`,side:2}),n=new Z({color:`#68bd36`,side:2});this.grassTufts=[];for(let r=0;r<420;r++){let r=(Math.random()-.5)*115,i=(Math.random()-.5)*115;if(Math.abs(r)<17&&Math.abs(i)<15||i>17&&i<39&&Math.abs(r)<20)continue;let a=new G;a.position.set(r,0,i);let o=3+Math.floor(Math.random()*3);for(let r=0;r<o;r++){let i=new K(e,Math.random()>.5?t:n);i.rotation.y=r/o*Math.PI+(Math.random()-.5)*.4,i.rotation.z=(Math.random()-.5)*.35;let s=.8+Math.random()*.5;i.scale.set(s,s,s),a.add(i)}this.grassTuftsGroup.add(a),this.grassTufts.push({group:a,baseX:r,baseZ:i,swayOffset:Math.random()*Math.PI*2})}this.scene.add(this.grassTuftsGroup)}updateMeadowGrass(e){if(this.grassTufts)for(let t=0;t<this.grassTufts.length;t++){let n=this.grassTufts[t];n.group.rotation.z=Math.sin(e*2.2+n.swayOffset)*.08}}generateDefaultRoadCoordinates(){let e=new Set;for(let t=-26;t<=18;t+=2)e.add(`-1,${t}`),e.add(`1,${t}`);for(let t=-19;t<=19;t+=2)e.add(`${t},-1`),e.add(`${t},1`);for(let t=-22;t<=20;t+=2)e.add(`-19,${t}`);for(let t=-22;t<=14;t+=2)e.add(`19,${t}`);for(let t=-19;t<=19;t+=2)e.add(`${t},-22`);for(let t=-19;t<=19;t+=2)e.add(`${t},16`);for(let t=-6;t<=0;t+=2)e.add(`${t},-24`);return Array.from(e).map(e=>{let[t,n]=e.split(`,`).map(Number);return{x:t,z:n}})}createRoads(){if(this.roadsGroup)for(;this.roadsGroup.children.length>0;)this.roadsGroup.remove(this.roadsGroup.children[0]);else this.roadsGroup=new G,this.scene.add(this.roadsGroup);this.roadTiles=new Map;let e=this.state&&this.state.farmCustomLayout,t=null;t=e&&Array.isArray(e.roads)&&e.roads.length>0?e.roads:this.generateDefaultRoadCoordinates(),t.forEach(e=>{this.createSingleRoadTileMesh(e.x,e.z)})}createSingleRoadTileMesh(e,t,n){let r=n||`${Math.round(e)},${Math.round(t)}`;if(this.roadTiles.has(r))return this.roadTiles.get(r);let i=new G;i.position.set(e,.02,t);let a=new K(new q(2,.05,2),new Z({color:`#8c5a24`}));a.position.y=.01,a.receiveShadow=!0,i.add(a);let o=new K(new q(1.84,.06,1.84),new Z({map:this.textures.cobblestone||null,color:`#dfa552`}));return o.position.y=.03,o.receiveShadow=!0,i.add(o),i.userData={isRoadTile:!0,key:r,posX:e,posZ:t,rootRoadTile:i},i.traverse(e=>{e.userData={isRoadTilePart:!0,rootRoadTile:i,isRoadTile:!0,key:r}}),this.roadsGroup.add(i),this.roadTiles.set(r,i),i}deleteRoadTile(e){let t=this.roadTiles.get(e);t&&(this.roadsGroup.remove(t),this.roadTiles.delete(e),this.roadHighlightBox&&(this.roadHighlightBox.visible=!1),$.till(),this.particles.addDirtBurst(t.position.x,t.position.z),this.particles.addFloatingText(`تم مسح مربع الطريق وإعادة العشب! 🌱`,t.position.x,25,`#84cc16`,18),this.saveFarmLayout())}moveRoadTile(e,t,n){let r=this.roadTiles.get(e);if(!r)return;let i=`${t},${n}`;if(i!==e&&this.roadTiles.has(i)){$.click(),this.particles.addFloatingText(`⚠️ يوجد مربع طريق آخر هنا بالفعل!`,t,25,`#ef4444`,18);return}r.position.set(t,.02,n),r.userData.key=i,r.userData.posX=t,r.userData.posZ=n,r.traverse(e=>{e.userData&&(e.userData.key=i)}),this.roadTiles.delete(e),this.roadTiles.set(i,r),$.place(),this.particles.addDirtBurst(t,n),this.particles.addFloatingText(`✅ تم نقل مربع الطريق بنجاح!`,t,25,`#f59e0b`,18),this.saveFarmLayout()}addRoadTile(e,t){let n=`${e},${t}`;if(this.roadTiles.has(n)){$.click(),this.particles.addFloatingText(`⚠️ يوجد مربع طريق هنا بالفعل!`,e,25,`#ef4444`,18);return}this.createSingleRoadTileMesh(e,t,n),$.place(),this.particles.addDirtBurst(e,t),this.particles.addFloatingText(`+1 مربع طريق جديد! 🛣️`,e,25,`#22c55e`,18),this.saveFarmLayout()}resetDefaultRoads(){for(let e of this.roadTiles.values())this.roadsGroup.remove(e);this.roadTiles.clear(),this.deselectRoadTile(),this.generateDefaultRoadCoordinates().forEach(e=>{this.createSingleRoadTileMesh(e.x,e.z)}),this.saveFarmLayout(),$.levelUp(),Eh({particleCount:40,spread:70,origin:{x:.5,y:.5}}),this.particles.addFloatingText(`تمت استعادة شبكة الطرق الأصلية بنجاح! 📐`,0,25,`#ffd166`,22)}toggleRoadEditMode(e){if(this.isRoadEditMode=e===void 0?!this.isRoadEditMode:e,this.isRoadEditMode?(this.isPlacingNewPlotMode&&this.stopPlacingNewPlotMode(),this.isMovingPlotMode&&this.toggleMovePlotMode(!1),this.isFarmerWalkMode&&this.toggleFarmerWalkMode(!1),this.roadEditTool=`move`):this.deselectRoadTile(),!this.roadHighlightBox){let e=new q(2.05,.12,2.05),t=new Br({color:16096779,wireframe:!0});this.roadHighlightBox=new K(e,t),this.roadHighlightBox.userData={isHelper:!0},this.roadHighlightBox.raycast=()=>{},this.scene.add(this.roadHighlightBox)}if(!this.roadGhostBox){let e=new q(2,.08,2),t=new Br({color:2278750,transparent:!0,opacity:.45});this.roadGhostBox=new K(e,t),this.roadGhostBox.userData={isHelper:!0},this.roadGhostBox.raycast=()=>{},this.scene.add(this.roadGhostBox)}let t=document.getElementById(`road-edit-mode-banner`),n=document.getElementById(`btn-action-road-mode`);this.isRoadEditMode?(t&&t.classList.remove(`hidden`),n&&n.classList.add(`active`),this.setRoadEditTool(this.roadEditTool||`move`),$.click(),this.particles.addFloatingText(`🛣️ وضع تعديل الطريق: اختر أداة (نقل، مسح، أو رصف)`,0,25,`#fbbf24`,20)):(t&&t.classList.add(`hidden`),n&&n.classList.remove(`active`),this.roadHighlightBox&&(this.roadHighlightBox.visible=!1),this.roadGhostBox&&(this.roadGhostBox.visible=!1),this.saveFarmLayout(),$.pop(),this.particles.addFloatingText(`تم حفظ تخطيط الطرق بنجاح ✓`,0,25,`#22c55e`,18))}setRoadEditTool(e){this.roadEditTool=e,this.deselectRoadTile(),document.querySelectorAll(`.road-tool-btn`).forEach(t=>{t.getAttribute(`data-tool`)===e?t.classList.add(`active`):t.classList.remove(`active`)});let t=document.getElementById(`road-edit-status-hint`);t&&(e===`move`?t.textContent=`✋ انقر على أي مربع طريق لاختياره، ثم انقر في المكان الجديد لنقله`:e===`erase`?t.textContent=`🧹 انقر على أي مربع طريق لمسحه فوراً وإعادة العشب الأخضر`:e===`add`&&(t.textContent=`➕ انقر على أي مساحة خضراء لإضافة ورصف مربع طريق جديد`)),$.click()}selectRoadTileToMove(e){if(this.selectedRoadTile===e){this.deselectRoadTile(),$.pop();return}this.selectedRoadTile&&(this.selectedRoadTile.position.y=.02),this.selectedRoadTile=e,e.position.y=.35,$.click(),this.particles.addFloatingText(`📍 تم تحديد المربع: انقر في أي مكان جديد لنقله`,e.position.x,25,`#fbbf24`,18)}deselectRoadTile(){this.selectedRoadTile&&=(this.selectedRoadTile.position.y=.02,null),this.roadGhostBox&&(this.roadGhostBox.visible=!1),this.roadHighlightBox&&(this.roadHighlightBox.visible=!1)}updateRoadEditHover(){this.raycaster.setFromCamera(this.mouse,this.camera);let e=this.raycaster.intersectObjects(this.scene.children,!0),t=null;for(let n of e){let e=n.object;if(!(e===this.roadGhostBox||e===this.roadHighlightBox||e?.userData?.isHelper)){if(e.userData?.rootRoadTile){t=e.userData.rootRoadTile;break}if(e.userData?.isRoadTile){t=e;break}}}if(this.roadEditTool===`erase`){this.roadGhostBox&&(this.roadGhostBox.visible=!1),t&&this.roadHighlightBox?(this.roadHighlightBox.position.set(t.position.x,.05,t.position.z),this.roadHighlightBox.material.color.setHex(15680580),this.roadHighlightBox.visible=!0):this.roadHighlightBox&&(this.roadHighlightBox.visible=!1);return}if(this.roadEditTool===`move`){if(this.selectedRoadTile){if(this.roadHighlightBox&&(this.roadHighlightBox.visible=!1),this.planeIntersection&&this.roadGhostBox){let e=Math.round(this.planeIntersection.x),t=Math.round(this.planeIntersection.z),n=Math.round((e-1)/2)*2+1,r=Math.round((t-1)/2)*2+1;this.roadGhostBox.position.set(n,.04,r),this.roadGhostBox.material.color.setHex(2278750),this.roadGhostBox.visible=!0}}else this.roadGhostBox&&(this.roadGhostBox.visible=!1),t&&this.roadHighlightBox?(this.roadHighlightBox.position.set(t.position.x,.05,t.position.z),this.roadHighlightBox.material.color.setHex(16096779),this.roadHighlightBox.visible=!0):this.roadHighlightBox&&(this.roadHighlightBox.visible=!1);return}if(this.roadEditTool===`add`){if(this.roadHighlightBox&&(this.roadHighlightBox.visible=!1),this.planeIntersection&&this.roadGhostBox){let e=Math.round(this.planeIntersection.x),t=Math.round(this.planeIntersection.z),n=Math.round((e-1)/2)*2+1,r=Math.round((t-1)/2)*2+1;this.roadGhostBox.position.set(n,.04,r),this.roadGhostBox.material.color.setHex(2278750),this.roadGhostBox.visible=!0}return}}handleRoadEditClick(e){this.raycaster.setFromCamera(this.mouse,this.camera);let t=this.raycaster.intersectObjects(this.scene.children,!0),n=null;for(let e of t){let t=e.object;if(!(t===this.roadGhostBox||t===this.roadHighlightBox||t?.userData?.isHelper)){if(t.userData?.rootRoadTile){n=t.userData.rootRoadTile;break}if(t.userData?.isRoadTile){n=t;break}}}if(this.roadEditTool===`erase`){n&&this.deleteRoadTile(n.userData.key);return}if(this.roadEditTool===`add`){let e=this.raycaster.intersectObject(this.groundMesh);if(e.length>0){let t=e[0].point,n=Math.round(t.x),r=Math.round(t.z),i=Math.round((n-1)/2)*2+1,a=Math.round((r-1)/2)*2+1;this.addRoadTile(i,a)}return}if(this.roadEditTool===`move`){if(this.selectedRoadTile){let e=this.raycaster.intersectObject(this.groundMesh);if(e.length>0){let t=e[0].point,n=Math.round(t.x),r=Math.round(t.z),i=Math.round((n-1)/2)*2+1,a=Math.round((r-1)/2)*2+1;this.moveRoadTile(this.selectedRoadTile.userData.key,i,a),this.deselectRoadTile()}}else n&&this.selectRoadTileToMove(n)}}addCustomRoadTile(e,t){let n=`${e},${t}`;if(this.customRoadTiles.has(n))return;this.customWaterTiles.has(n)&&this.removeCustomTile(e,t);let r=new K(new q(2.1,.08,2.1),new Z({map:this.textures.cobblestone,color:`#dfa552`}));r.position.set(e,.03,t),r.receiveShadow=!0;let i=new Z({color:`#8c5a24`}),a=new K(new q(2.2,.06,2.2),i);a.position.set(e,.01,t),a.receiveShadow=!0;let o=new G;o.add(a),o.add(r),o.userData={isCustomRoad:!0,key:n,gridX:e,gridZ:t},this.roadsGroup.add(o),this.customRoadTiles.set(n,o),this.saveFarmLayout()}addCustomWaterTile(e,t){let n=`${e},${t}`;if(this.customWaterTiles.has(n))return;this.customRoadTiles.has(n)&&this.removeCustomTile(e,t);let r=new G;r.position.set(e,0,t);let i=new Z({color:`#dfb06f`}),a=new K(new q(2.3,.06,2.3),i);a.position.y=.01,r.add(a);let o=new Yi(2.1,2.1,4,4);o.rotateX(-Math.PI/2);let s=new K(o,new X({color:`#0284c7`,roughness:.08,metalness:.4,transparent:!0,opacity:.85}));s.position.y=.04,r.add(s);let c=this.createFishMesh({isBig:!1,bodyColor:`#f97316`,scale:.35,speed:1.2,tailSpeed:9,depth:-.05});r.add(c.group),this.lakeFish&&this.lakeFish.push(c),r.userData={isCustomWater:!0,key:n,gridX:e,gridZ:t},this.customWatersGroup.add(r),this.customWaterTiles.set(n,r),this.saveFarmLayout()}removeCustomTile(e,t){let n=`${e},${t}`;if(this.customRoadTiles.has(n)){let e=this.customRoadTiles.get(n);this.roadsGroup.remove(e),this.customRoadTiles.delete(n)}if(this.customWaterTiles.has(n)){let e=this.customWaterTiles.get(n);this.customWatersGroup.remove(e),this.customWaterTiles.delete(n)}this.saveFarmLayout()}createCentralFarmingPlots(){this.plots=[],this.plotObjects=new Map,this.crops=new Map,this.fieldBedsGroup=new G,this.scene.add(this.fieldBedsGroup),this.rebuildFarmingPlots()}calculatePlotCoordinates(e,t=20){let n=[],r=2.6;if(e===`twin_blocks`){let e=Math.ceil(t/2),i=e>20?4:e>10?3:2,a=Math.min(5,Math.ceil(e/i)),o=0;for(let e=0;e<a;e++){let a=-4.2-e*r;for(let s=0;s<i;s++){let i=4.2+s*r,c=-4.2-s*r;o<t&&(n.push({col:s+1,row:-(e+1),posX:i,posZ:a}),o++),o<t&&(n.push({col:-(s+1),row:-(e+1),posX:c,posZ:a}),o++)}}if(o<t)for(let e=0;e<a;e++){let a=4.2+e*r;for(let s=0;s<i;s++){let i=4.2+s*r,c=-4.2-s*r;o<t&&(n.push({col:s+1,row:e+1,posX:i,posZ:a}),o++),o<t&&(n.push({col:-(s+1),row:e+1,posX:c,posZ:a}),o++)}}}else if(e===`quad_blocks`){let e=Math.ceil(t/4),i=3,a=2;e>25?(i=5,a=Math.ceil(e/i)):e>20?(i=5,a=5):e>15?(i=5,a=4):e>10?(i=5,a=3):e>5?(i=5,a=2):(i=3,a=2);let o=[{signX:1,signZ:-1},{signX:-1,signZ:-1},{signX:1,signZ:1},{signX:-1,signZ:1}],s=0;for(let e=0;e<a;e++)for(let a=0;a<i;a++)for(let i=0;i<4&&!(s>=t);i++){let t=o[i],c=t.signX*(4.2+a*r),l=t.signZ*(4.2+e*r),u=t.signX*(a+1),d=t.signZ*(e+1);n.push({col:u,row:d,posX:c,posZ:l}),s++}}else if(e===`long_terraces`){let e=Math.ceil(t/2),i=Math.min(5,Math.max(3,Math.ceil(e/2))),a=Math.ceil(e/i),o=0;for(let e=0;e<a;e++){let a=4.2+e*r,s=-4.2-e*r;for(let c=0;c<i;c++){let i=-4.2-c*r;o<t&&(n.push({col:e+1,row:-(c+1),posX:a,posZ:i}),o++),o<t&&(n.push({col:-(e+1),row:-(c+1),posX:s,posZ:i}),o++)}}}else{let e=[{baseX:4.2,baseZ:-8.2,signX:1},{baseX:-4.2,baseZ:-8.2,signX:-1},{baseX:4.2,baseZ:8.2,signX:1},{baseX:-4.2,baseZ:8.2,signX:-1}],i=Math.ceil(t/20),a=0;for(let o=0;o<Math.max(1,i);o++){let i=e[o%e.length];for(let e=0;e<4;e++){let s=i.baseZ+(e-1.5)*r;for(let c=0;c<5&&!(a>=t);c++){let t=i.baseX+i.signX*(c*r),l=i.signX*(c+1)+o*10,u=e+1+o*10;n.push({col:l,row:u,posX:t,posZ:s}),a++}}}}return n.slice(0,t)}createFieldBedMeshes(e){}createSinglePlotMesh(e,t,n,r=`grass`,i=0,a=0){let o=2.4,s=r===`watered`?this.soilWetMat:r===`tilled`?this.soilDryMat:this.soilGrassMat,c=new G;c.position.set(t,0,n);let l=new K(new q(o,.28,o),this.woodBoxMat);l.position.set(0,.14,0),l.receiveShadow=!0,l.castShadow=!0,c.add(l);let u=new K(new q(2.04,.14,2.04),s);u.position.set(0,.19,0),u.receiveShadow=!0,c.add(u);let d=.18;[{x:0,z:-1.1099999999999999,sx:o,sz:d},{x:0,z:o/2-d/2,sx:o,sz:d},{x:-1.1099999999999999,z:0,sx:d,sz:o-d*2},{x:o/2-d/2,z:0,sx:d,sz:o-d*2}].forEach(e=>{let t=new K(new q(e.sx,.08,e.sz),this.woodTrimMat);t.position.set(e.x,.28,e.z),t.castShadow=!0,t.receiveShadow=!0,c.add(t)});let f=new q(.2,.34,.2);for(let e of[-2.4/2+.1,o/2-.1])for(let t of[-2.4/2+.1,o/2-.1]){let n=new K(f,this.pegMat);n.position.set(e,.17,t),n.castShadow=!0,c.add(n)}let p=[],m=new J(.06,.06,1.92,6);for(let e=-1;e<=1;e++){let t=new K(m,s);t.rotation.z=Math.PI/2,t.position.set(0,.26,e*.55),t.visible=r===`tilled`||r===`watered`,c.add(t),p.push(t)}if(c.userData={isPlot:!0,isPlotRoot:!0,plotGroup:c,col:i,row:a,key:e,state:r,furrows:p,soilMesh:u,outerBox:l},c.traverse(e=>{e!==c&&(e.userData={isPlotPart:!0,rootPlot:c})}),this.scene.add(c),this.plotObjects.set(e,c),this.crops&&this.crops.has(e)){let r=this.crops.get(e);r&&r.group&&r.group.position.set(t,.26,n)}return c}setLayout(e){this.farmingPlotLayout=e,this.state&&(this.state.farmingPlotLayout=e,this.state.save()),this.rebuildFarmingPlots()}rebuildFarmingPlots(){for(let e of this.plotObjects.values())this.scene.remove(e);if(this.plotObjects.clear(),this.fieldBedsGroup)for(;this.fieldBedsGroup.children.length>0;){let e=this.fieldBedsGroup.children[0];this.fieldBedsGroup.remove(e)}else this.fieldBedsGroup=new G,this.scene.add(this.fieldBedsGroup);this.woodBoxMat=new Z({color:`#c28b50`}),this.woodTrimMat=new Z({color:`#965b25`}),this.pegMat=new Z({color:`#784315`}),this.soilDryMat=new Z({color:`#3d1f0a`}),this.soilWetMat=new X({color:`#1f0d03`,roughness:.18,metalness:.12}),this.soilGrassMat=new Z({color:`#4a8c2a`});let e=this.unlockedPlotCount||20,t=this.farmingPlotLayout||`twin_blocks`,n=this.calculatePlotCoordinates(t,e);if(this.state&&this.state.customPlotPositions){let e=!1;for(let t of Object.keys(this.state.customPlotPositions)){let n=this.state.customPlotPositions[t];n&&(Math.abs(n.posX)<3.45||Math.abs(n.posZ)<3.25||n.posZ>15.2||n.posZ<-18.6)&&(delete this.state.customPlotPositions[t],e=!0)}e&&typeof this.saveFarmLayout==`function`&&this.saveFarmLayout()}if(n.forEach((e,t)=>{let n=`${e.col},${e.row}`,r=e.posX,i=e.posZ;if(this.state&&this.state.customPlotPositions&&this.state.customPlotPositions[n]){let e=this.state.customPlotPositions[n];this.canPlacePlotAt(e.posX,e.posZ,n)?(r=e.posX,i=e.posZ):delete this.state.customPlotPositions[n]}let a=t<4?`tilled`:`grass`;this.createSinglePlotMesh(n,r,i,a,e.col,e.row)}),this.state&&this.state.customPlotPositions)for(let[e,t]of Object.entries(this.state.customPlotPositions))!this.plotObjects.has(e)&&t&&this.canPlacePlotAt(t.posX,t.posZ,e)&&this.createSinglePlotMesh(e,t.posX,t.posZ,`grass`);this.createExpansionSignpost()}createExpansionSignpost(){this.expansionSign&&=(this.scene.remove(this.expansionSign),null);let e=new G,t=new K(new J(.12,.12,2.2,8),new Z({color:`#78350f`}));t.position.y=1.1,t.castShadow=!0,e.add(t);let n=new K(new q(2.4,1.2,.2),new Z({color:`#b45309`}));n.position.set(0,1.8,0),n.castShadow=!0,e.add(n);let r=new K(new Y(.35,8,8),new Br({color:16765286}));r.position.set(0,2.7,0),e.add(r),e.position.set(3.8,0,3.8),e.rotation.y=-Math.PI/4,e.userData={isExpansionSign:!0},e.traverse(t=>{t!==e&&(t.userData=e.userData)}),this.scene.add(e),this.expansionSign=e}expandFarmingPlots(){this.startPlacingNewPlotMode()}startPlacingNewPlotMode(){this.isPlacingNewPlotMode=!0,this.isMovingPlotMode=!1,this.isFarmerWalkMode=!1,this.isRoadEditMode&&this.toggleRoadEditMode(!1),this.deselectPlotToMove();let e=document.getElementById(`btn-action-walk`);if(e&&e.classList.remove(`active`),!this.plotPlacementGhost){let e=2.4,t=new q(e,.35,e),n=new Br({color:2278750,transparent:!0,opacity:.45});this.plotPlacementGhost=new K(t,n),this.plotPlacementGhost.userData={isHelper:!0},this.plotPlacementGhost.raycast=()=>{},this.scene.add(this.plotPlacementGhost)}this.plotPlacementGhost.visible=!0;let t=document.getElementById(`plot-place-mode-banner`);t&&t.classList.remove(`hidden`);let n=document.getElementById(`plot-move-mode-banner`);n&&n.classList.add(`hidden`);let r=document.getElementById(`btn-action-expand`);r&&r.classList.add(`active`),$.click(),this.particles.addFloatingText(`🪵 وضع إضافة الأحواض: انقر في المكان المراد لوضع حوض (50 ذهب)`,0,25,`#38bdf8`,20)}stopPlacingNewPlotMode(){this.isPlacingNewPlotMode=!1,this.plotPlacementGhost&&(this.plotPlacementGhost.visible=!1);let e=document.getElementById(`plot-place-mode-banner`);e&&e.classList.add(`hidden`);let t=document.getElementById(`btn-action-expand`);t&&t.classList.remove(`active`),$.pop()}togglePlacingNewPlotMode(){this.isPlacingNewPlotMode?this.stopPlacingNewPlotMode():this.startPlacingNewPlotMode()}buyAndPlacePlotAt(e,t){if(this.state.coins<50)return $.click(),this.particles.addFloatingText(`الذهب غير كافٍ! الحوض بـ 50 ذهب 🪙`,e,25,`#ef4444`,20),!1;let n=`plot_custom_${Date.now()}_${Math.floor(Math.random()*1e3)}`;return this.canPlacePlotAt(e,t,n)?(this.state.useCoins(50),typeof this.state.setPlotPosition==`function`&&this.state.setPlotPosition(n,e,t),this.unlockedPlotCount=(this.unlockedPlotCount||20)+1,this.state&&(this.state.unlockedPlotCount=this.unlockedPlotCount,this.state.save()),this.createSinglePlotMesh(n,e,t,`grass`),$.till(),Eh({particleCount:30,spread:60,origin:{x:.5,y:.5}}),this.particles.addDirtBurst(e,t),this.particles.addFloatingText(`+1 حوض زراعي جديد! (-50 G) 🪵`,e,25,`#4ade80`,20),!0):($.click(),this.particles.addFloatingText(`⚠️ لا يمكن وضع الحوض هنا! اختر مكاناً خالياً على العشب`,e,25,`#ef4444`,18),!1)}toggleFarmerWalkMode(e){this.isFarmerWalkMode=e===void 0?!this.isFarmerWalkMode:e,this.isFarmerWalkMode&&(this.isPlacingNewPlotMode&&this.stopPlacingNewPlotMode(),this.isMovingPlotMode&&this.toggleMovePlotMode(!1),this.isRoadEditMode&&this.toggleRoadEditMode(!1));let t=document.getElementById(`btn-action-walk`),n=document.getElementById(`virtual-dpad`);return this.isFarmerWalkMode?(t&&t.classList.add(`active`),n&&n.classList.remove(`hidden`),$.click(),this.particles.addFloatingText(`🚶‍♂️ تم تفعيل حركة المزارع: انقر أو اسحب على الأرض لتوجيه الشخصية`,0,25,`#38bdf8`,20)):(t&&t.classList.remove(`active`),this.isPointerDown=!1,this.isDragMoving=!1,this.targetMovePoint=null,this.moveIndicator&&(this.moveIndicator.visible=!1),$.pop(),this.particles.addFloatingText(`🌾 تم تثبيت الشخصية (حركة المزارع متوقفة)`,0,25,`#ffd166`,18)),this.isFarmerWalkMode}isInteractiveObject(e){if(!e||!e.userData)return!1;let t=e.userData;return!!(t.isPlot||t.isPlotPart||t.rootPlot||t.plotGroup||t.isLockTrigger||t.isExpansionSign||t.isPet||t.isTrough||t.isAnimal)}toggleMovePlotMode(e){this.isMovingPlotMode=e===void 0?!this.isMovingPlotMode:e;let t=document.getElementById(`plot-move-mode-banner`),n=document.getElementById(`btn-action-move-plot`);this.isMovingPlotMode?(this.isPlacingNewPlotMode&&this.stopPlacingNewPlotMode(),this.isFarmerWalkMode&&this.toggleFarmerWalkMode(!1),this.isRoadEditMode&&this.toggleRoadEditMode(!1),t&&t.classList.remove(`hidden`),n&&n.classList.add(`active`),$.click(),this.particles.addFloatingText(`🪴 وضع نقل الأحواض: انقر على أي حوض لاختياره`,0,25,`#34d399`,20)):(this.deselectPlotToMove(),t&&t.classList.add(`hidden`),n&&n.classList.remove(`active`),$.pop(),this.particles.addFloatingText(`تم حفظ مواضع الأحواض ✓`,0,25,`#ffd166`,18))}setPixelArtScale(e){this.pixelSize=e,this.pixelPass&&(e<=1?(this.pixelPass.setPixelSize(1),this.pixelPass.normalEdgeStrength=.12,this.pixelPass.depthEdgeStrength=.18):e===2?(this.pixelPass.setPixelSize(2),this.pixelPass.normalEdgeStrength=.28,this.pixelPass.depthEdgeStrength=.34):(this.pixelPass.setPixelSize(e),this.pixelPass.normalEdgeStrength=.35,this.pixelPass.depthEdgeStrength=.4));let t=e<=1?`عالي الدقة (HD)`:e===2?`بكسل متوازن فائق الوضوح (2x)`:`بكسل ريترو (${e}x)`;return this.particles.addFloatingText(`👾 أسلوب العرض: ${t}`,0,25,`#38bdf8`,20),$.click(),this.pixelSize}cyclePixelArtScale(){let e=[2,1,3,4],t=e[(e.indexOf(this.pixelSize)+1)%e.length];return this.setPixelArtScale(t)}toggleCameraProjection(){this.isOrthographic=!this.isOrthographic,this.camera=this.isOrthographic?this.orthoCamera:this.perspCamera,this.pixelPass&&(this.pixelPass.camera=this.camera),this.onResize();let e=this.isOrthographic?`مجسم أيزومترك 📐 (Orthographic)`:`منظور حر 🎥 (Perspective)`;return this.particles.addFloatingText(`كاميرا: ${e}`,0,25,`#fbbf24`,20),$.click(),this.isOrthographic}rotateIsometricAngle(e=1){this.targetIsoAngle+=Math.PI/2*e,sh.to(this,{isoAngle:this.targetIsoAngle,duration:.45,ease:`power2.out`,onComplete:()=>{$.click()}}),this.particles.addFloatingText(`🔄 تدوير الزاوية الأيزومترية 90°`,0,25,`#a7f3d0`,18)}updateCameraFrustum(){let e=window.innerWidth/window.innerHeight;this.orthoCamera&&(this.orthoCamera.left=-this.frustumSize*e/2,this.orthoCamera.right=this.frustumSize*e/2,this.orthoCamera.top=this.frustumSize/2,this.orthoCamera.bottom=-this.frustumSize/2,this.orthoCamera.updateProjectionMatrix()),this.perspCamera&&(this.perspCamera.aspect=e,this.perspCamera.updateProjectionMatrix())}selectPlotToMove(e){if(!e)return;if(this.selectedPlotToMove===e){this.deselectPlotToMove(),$.pop();return}if(this.selectedPlotToMove){this.selectedPlotToMove.position.y=0;let e=this.selectedPlotToMove.userData.key,t=this.crops.get(e);t&&t.group&&(t.group.position.y=.26)}this.selectedPlotToMove=e;let t=e.userData.key;e.position.y=.35;let n=this.crops.get(t);n&&n.group&&(n.group.position.y=.61),this.plotMoveHighlight&&(this.plotMoveHighlight.position.set(e.position.x,.4,e.position.z),this.plotMoveHighlight.visible=!0),$.click(),this.particles.addFloatingText(`اختر مكاناً خالياً لنقل الحوض 📍`,e.position.x,25,`#fbbf24`,18)}deselectPlotToMove(){if(this.selectedPlotToMove){this.selectedPlotToMove.position.y=0;let e=this.selectedPlotToMove.userData.key,t=this.crops.get(e);t&&t.group&&(t.group.position.y=.26),this.selectedPlotToMove=null}this.plotGhostBox&&(this.plotGhostBox.visible=!1),this.plotMoveHighlight&&(this.plotMoveHighlight.visible=!1)}canPlacePlotAt(e,t,n){for(let[r,i]of this.plotObjects.entries())if(r!==n&&Math.hypot(e-i.position.x,t-i.position.z)<2.38)return!1;if(this.roadTiles&&this.roadTiles.size>0)for(let n of this.roadTiles.values()){let r=Math.abs(e-n.position.x),i=Math.abs(t-n.position.z);if(r<2.1&&i<2.1)return!1}if(e<-16||e>16||t<-18.6||t>15.2)return!1;if(this.customRoadTiles){for(let n of this.customRoadTiles.values())if(Math.hypot(e-n.position.x,t-n.position.z)<2.2)return!1}if(this.customWaterTiles){for(let n of this.customWaterTiles.values())if(Math.hypot(e-n.position.x,t-n.position.z)<2.2)return!1}return!(Math.abs(e)>36||Math.abs(t)>34)}moveSelectedPlotTo(e,t){if(!this.selectedPlotToMove)return;let n=this.selectedPlotToMove.userData.key;if(!this.canPlacePlotAt(e,t,n)){$.click(),this.particles.addFloatingText(`⚠️ لا يمكن نقل الحوض هنا! اختر مكاناً خالياً لمنع التداخل`,e,25,`#ef4444`,18);return}this.selectedPlotToMove.position.set(e,0,t);let r=this.crops.get(n);r&&r.group&&r.group.position.set(e,.26,t),this.state&&typeof this.state.setPlotPosition==`function`&&this.state.setPlotPosition(n,e,t),$.till(),this.particles.addDirtBurst(e,t),this.particles.addFloatingText(`✅ تم نقل الحوض وثباته بنجاح!`,e,25,`#22c55e`,20),this.deselectPlotToMove()}resetAllPlotPositions(){this.state&&typeof this.state.resetPlotPositions==`function`&&this.state.resetPlotPositions(),this.deselectPlotToMove(),this.rebuildFarmingPlots(),$.till(),Eh({particleCount:40,spread:70,origin:{x:.5,y:.6}}),this.particles.addFloatingText(`تمت إعادة المحاذاة التلقائية للأحواض بنجاح! 📐`,0,25,`#ffd166`,22)}handlePlotMoveInteraction(){this.raycaster.setFromCamera(this.mouse,this.camera);let e=this.raycaster.intersectObjects(this.scene.children,!0);if(this.selectedPlotToMove){for(let t of e){let e=t.object;for(;e&&!e.userData.isPlot&&e.parent;)e=e.parent;if(e===this.selectedPlotToMove){this.deselectPlotToMove(),$.pop();return}}let t=this.raycaster.intersectObject(this.groundMesh);if(t.length>0){let e=t[0].point,n=Math.round(e.x/1.3)*1.3,r=Math.round(e.z/1.3)*1.3;this.moveSelectedPlotTo(n,r);return}}else for(let t of e){let e=t.object;for(;e&&!e.userData.isPlot&&e.parent;)e=e.parent;if(e&&e.userData&&e.userData.isPlot){this.selectPlotToMove(e);return}}}constructBuildingAction(e){return this.state&&this.state.constructBuilding(e)?(this.syncConstructedBuildings(),Eh({particleCount:45,spread:85,origin:{x:.5,y:.5}}),this.particles.addFloatingText(`تم تشييد المبنى بنجاح! 🏛️`,0,30,`#4ade80`,22),!0):!1}createSideAnimalZones(){this.animalZoneObjects=new Map,this.troughStations=new Map,this.animals3D=[],this.createZone(`chicken`,-27,-21,ph.chicken,14,10,`east`),this.createZone(`duck`,-27,-8,ph.duck,14,10,`east`),this.createZone(`sheep`,-27,6,ph.sheep,14,10,`east`),this.createZone(`rabbit`,-27,19,ph.rabbit,14,10,`east`),this.createZone(`cow`,27,-21,ph.cow,15,11,`west`),this.createZone(`goat`,27,-8,ph.goat,14,10,`west`),this.createZone(`horse`,27,12,ph.horse,16,15,`west`)}createZone(e,t,n,r,i=14,a=10,o=`east`){let s=new G;s.position.set(t,0,n);let c=!!(this.unlockedFarms&&this.unlockedFarms[e]===!0);if(this.create3DFencePerimeter(s,i,a,c,o,t,n),c)this.populateUnlockedFarm(s,e,t,n,i,a,o);else{let e=this.createLockedSign(r,o,i,a);s.add(e)}s.userData={isAnimalZone:!0,type:e,config:r,isUnlocked:c,width:i,depth:a,gateSide:o},this.scene.add(s),this.animalZoneObjects.set(e,s)}create3DTroughStation(e,t,n,r,i,a){let o=new G;o.position.set(i,0,a);let s=new Z({color:`#78350f`}),c=new X({color:`#475569`,roughness:.5,metalness:.6}),l=new X({color:`#eab308`,roughness:.8}),u=new X({color:`#38bdf8`,roughness:.1,metalness:.4,transparent:!0,opacity:.88}),d=new K(new q(2.4,.55,1),s);d.position.y=.28,d.castShadow=!0,o.add(d);let f=new K(new q(.95,.15,.75),l);f.position.set(-.55,.52,0),o.add(f);let p=new K(new q(.95,.15,.75),u);p.position.set(.55,.52,0),o.add(p);for(let e of[-1.15,1.15])for(let t of[-.45,.45]){let n=new K(new q(.12,.6,.12),c);n.position.set(e,.3,t),o.add(n)}let m=new K(new J(.06,.06,1.6,6),s);m.position.set(0,1.05,-.45),m.castShadow=!0,o.add(m);let h=new K(new q(1.6,.5,.1),s);h.position.set(0,1.7,-.45),h.castShadow=!0,o.add(h);let g=new Br({color:4906624}),_=new K(new Y(.18,8,8),g);_.position.set(0,2.05,-.45),o.add(_);let v={isTrough:!0,penType:t,worldX:n+i,worldZ:r+a,group:o,foodMesh:f,waterMesh:p,statusSphere:_,statusMat:g,hasFood:!0,hasWater:!0};return o.userData=v,e.add(o),this.troughStations.set(t,v),this.staticColliders&&this.staticColliders.push({type:`box`,minX:n+i-1.4,maxX:n+i+1.4,minZ:r+a-.7,maxZ:r+a+.7}),v}fillTroughStation(e){if(!e)return;e.hasFood=!0,e.hasWater=!0,sh.to(e.foodMesh.scale,{y:1.25,duration:.15,yoyo:!0,repeat:1}),sh.to(e.waterMesh.scale,{y:1.25,duration:.15,yoyo:!0,repeat:1}),e.statusMat.color.setHex(4906624),$.water?$.water():$.click(),Eh({particleCount:30,spread:60,origin:{x:.5,y:.5}});let t=ph[e.penType]?.name||`المزرعة`;this.particles.addFloatingText(`تم ملء المعلفة وحوض الماء في ${t}! 🌾💧 الحيوانات تتجه للأكل!`,e.worldX,25,`#22c55e`,22),this.animals3D.forEach(t=>{t.penType===e.penType&&(t.state=`HEADING_TO_FEED`,t.timer=15)})}createLockedSign(e,t=`east`,n=14,r=10){let i=new G,a=n/2;r/2;let o=t===`east`?a-.5:-a+.5;i.position.set(o,0,0);let s=new Z({color:`#78350f`}),c=new K(new J(.12,.12,2.2,8),s);c.position.set(0,1.1,-1.2),c.castShadow=!0,i.add(c);let l=c.clone();l.position.set(0,1.1,1.2),i.add(l);let u=new Z({color:`#b91c1c`}),d=new K(new q(.15,1.1,3),u);d.position.set(0,1.5,0),d.castShadow=!0,i.add(d);let f=new Z({color:`#fbbf24`}),p=new K(new Y(.35,10,10),f);return p.position.set(0,2.3,0),i.add(p),i.userData={isLockTrigger:!0,farmType:e.id,config:e},i}unlockAnimalFarm(e){let t=ph[e];if(!t)return;if(this.state.coins<t.cost){this.particles.addFloatingText(`الذهب غير كافٍ! مطلوب ${t.cost} G 🪙`,0,25,`#ef4444`,20),$.click();return}if(this.state.level<t.minLevel){this.particles.addFloatingText(`مطلوب مستوى ${t.minLevel}! 🔒`,0,25,`#ef4444`,20),$.click();return}this.state.useCoins(t.cost),this.unlockedFarms[e]=!0,this.state&&(this.state.unlockedFarms={...this.unlockedFarms},this.state.save()),$.levelUp(),Eh({particleCount:60,spread:90,origin:{x:.5,y:.5}}),this.particles.addFloatingText(`تهانينا! تم بناء ${t.name}! 🎉`,0,25,`#ffd166`,22);let n=this.animalZoneObjects.get(e);if(n){let r=n.position.clone(),i=n.userData;this.scene.remove(n),this.createZone(e,r.x,r.z,t,i.width||14,i.depth||10,i.gateSide||`east`)}}populateUnlockedFarm(e,t,n,r,i=14,a=10,o=`east`){let s=i/2,c=a/2,l={minX:n-s+1.8,maxX:n+s-1.8,minZ:r-c+1.8,maxZ:r+c-1.8},u={minX:-s+1.8,maxX:s-1.8,minZ:-c+1.8,maxZ:c-1.8},d=o===`east`?-s+2.4:s-2.4,f={x:d,z:0},p={x:n+d,z:r+0};this.create3DTroughStation(e,t,n,r,d,0);let m=[{minX:d-1.5,maxX:d+1.5,minZ:-.85,maxZ:.85,id:`trough`}];if(t===`chicken`){let t=this.create3DCoop();t.position.set(-s+3.2,0,-c+3),e.add(t),m.push({minX:-s+1,maxX:-s+5.4,minZ:-c+1,maxZ:-c+5,id:`coop`}),this.staticColliders.push({type:`box`,minX:n-s+1.2,maxX:n-s+5.2,minZ:r-c+1.2,maxZ:r-c+4.8}),[[.5,0,-1.5,.4,`rooster`],[-.8,0,1.8,-1.2,`hen`],[2.2,0,.5,2.1,`hen`]].forEach(([t,n,r,i,a],o)=>{let s=this.create3DChicken(a);s.position.set(t,n,r),s.rotation.y=i,s.userData.isAnimal=!0,e.add(s),this.animals3D.push({mesh:s,type:`chicken`,penType:`chicken`,speed:1.4,timer:2.5+o*1.2,state:`IDLE`,penBounds:l,localBounds:u,localObstacles:m,troughLocalPos:f,troughWorldPos:p,radius:.55})})}else if(t===`duck`){let t=this.create3DDuckShelter();t.position.set(0,0,0),e.add(t),m.push({minX:-4.4,maxX:-1.2,minZ:-3.6,maxZ:-.8,id:`shed`}),[[-1.8,0,1.6,.8],[1.5,0,-1.8,-.5],[2,0,1.8,1.4]].forEach(([t,n,r,i],a)=>{let o=this.create3DDuck();o.position.set(t,n,r),o.rotation.y=i,o.userData.isAnimal=!0,e.add(o),this.animals3D.push({mesh:o,type:`duck`,penType:`duck`,speed:1.2,timer:2.2+a*1.1,state:`IDLE`,penBounds:l,localBounds:u,localObstacles:m,troughLocalPos:f,troughWorldPos:p,radius:.55})})}else if(t===`cow`){let t=this.create3DRedBarn();t.position.set(s-3.8,0,-c+3.2),e.add(t),m.push({minX:s-7.6,maxX:s+.5,minZ:-c-.5,maxZ:-c+6.6,id:`barn`}),this.staticColliders.push({type:`box`,minX:n+s-7.5,maxX:n+s-.5,minZ:r-c+.5,maxZ:r-c+6}),[[-3.2,0,1.8,.5],[-3,0,-1.5,-.8]].forEach(([t,n,r,i],a)=>{let o=this.create3DCow();o.position.set(t,n,r),o.rotation.y=i,o.userData.isAnimal=!0,e.add(o),this.animals3D.push({mesh:o,type:`cow`,penType:`cow`,speed:.95,timer:3.5+a*1.5,state:`IDLE`,penBounds:l,localBounds:u,localObstacles:m,troughLocalPos:f,troughWorldPos:p,radius:1.15})})}else if(t===`goat`){let t=this.create3DGoatShelter();t.position.set(s-3.2,0,-c+2.8),e.add(t),m.push({minX:s-5.8,maxX:s+.5,minZ:-c-.5,maxZ:-c+5.2,id:`goat_shelter`}),this.staticColliders.push({type:`box`,minX:n+s-5.5,maxX:n+s-1,minZ:r-c+.8,maxZ:r-c+4.8}),[[-1.6,0,1.2,1.1],[-1,0,-1.5,-1.4]].forEach(([t,n,r,i],a)=>{let o=this.create3DGoat();o.position.set(t,n,r),o.rotation.y=i,o.userData.isAnimal=!0,e.add(o),this.animals3D.push({mesh:o,type:`goat`,penType:`goat`,speed:1.4,timer:2.8+a*1.3,state:`IDLE`,penBounds:l,localBounds:u,localObstacles:m,troughLocalPos:f,troughWorldPos:p,radius:.75})})}else if(t===`sheep`){let t=this.create3DSheepShelter();t.position.set(-s+3.2,0,-c+2.8),e.add(t),m.push({minX:-s-.5,maxX:-s+5.8,minZ:-c-.5,maxZ:-c+5.2,id:`sheep_shelter`}),this.staticColliders.push({type:`box`,minX:n-s+1,maxX:n-s+5.5,minZ:r-c+.8,maxZ:r-c+4.8}),[[-.5,0,1.5,.6],[1.8,0,-.8,-.7],[.8,0,2.2,1.9]].forEach(([t,n,r,i],a)=>{let o=this.create3DSheep();o.position.set(t,n,r),o.rotation.y=i,o.userData.isAnimal=!0,e.add(o),this.animals3D.push({mesh:o,type:`sheep`,penType:`sheep`,speed:1.05,timer:3+a*1.2,state:`IDLE`,penBounds:l,localBounds:u,localObstacles:m,troughLocalPos:f,troughWorldPos:p,radius:.85})})}else if(t===`rabbit`){let t=this.create3DRabbitHutch();t.position.set(-s+3,0,-c+2.8),e.add(t),m.push({minX:-s-.5,maxX:-s+5.4,minZ:-c-.5,maxZ:-c+4.8,id:`rabbit_hutch`}),this.staticColliders.push({type:`box`,minX:n-s+1,maxX:n-s+5,minZ:r-c+.8,maxZ:r-c+4.5}),[[.8,0,-.8,1.2],[-.5,0,1.8,-.6],[2,0,1.2,2.3]].forEach(([t,n,r,i],a)=>{let o=this.create3DRabbit();o.position.set(t,n,r),o.rotation.y=i,o.userData.isAnimal=!0,e.add(o),this.animals3D.push({mesh:o,type:`rabbit`,penType:`rabbit`,speed:1.6,timer:1.8+a*.9,state:`IDLE`,penBounds:l,localBounds:u,localObstacles:m,troughLocalPos:f,troughWorldPos:p,radius:.45})})}else if(t===`horse`){let t=this.create3DStable();t.position.set(s-3.8,0,-c+3.5),e.add(t),m.push({minX:s-7.5,maxX:s+.5,minZ:-c-.5,maxZ:-c+6.8,id:`stable`}),this.staticColliders.push({type:`box`,minX:n+s-7,maxX:n+s-.5,minZ:r-c+.8,maxZ:r-c+6.2}),[[-3,0,1.8,-.4],[-3.2,0,-2,.8]].forEach(([t,n,r,i],a)=>{let o=this.create3DHorse();o.position.set(t,n,r),o.rotation.y=i,o.userData.isAnimal=!0,e.add(o),this.animals3D.push({mesh:o,type:`horse`,penType:`horse`,speed:2.2,timer:4+a*1.5,state:`IDLE`,penBounds:l,localBounds:u,localObstacles:m,troughLocalPos:f,troughWorldPos:p,radius:1.3}),a===0&&(this.horseMesh=o)})}}create3DFencePerimeter(e,t,n,r,i=`east`,a=0,o=0){let s=new Z({color:r?`#92400e`:`#78350f`}),c=new Z({color:r?`#b45309`:`#9a3412`}),l=t/2,u=n/2,d=(t,n)=>{let r=new K(new J(.1,.1,1.4,8),s);r.position.set(t,.7,n),r.castShadow=!0,e.add(r)},f=(t,n,r,i)=>{let a=r-t,o=i-n,s=Math.hypot(a,o),l=Math.atan2(o,a),u=new K(new q(s,.12,.08),c);u.position.set((t+r)/2,.5,(n+i)/2),u.rotation.y=-l,u.castShadow=!0,e.add(u);let d=u.clone();d.position.y=.95,e.add(d)};for(let e=-l;e<=l;e+=3)d(e,-u),d(e,u);for(let e=-u;e<=u;e+=3)(i!==`west`||Math.abs(e)>1.8)&&d(-l,e),(i!==`east`||Math.abs(e)>1.8)&&d(l,e);f(-l,-u,l,-u),f(-l,u,l,u),i===`west`?(f(-l,-u,-l,-1.8),f(-l,1.8,-l,u)):f(-l,-u,-l,u),i===`east`?(f(l,-u,l,-1.8),f(l,1.8,l,u)):f(l,-u,l,u),this.staticColliders&&(this.staticColliders.push({type:`box`,minX:a-l-.2,maxX:a+l+.2,minZ:o-u-.3,maxZ:o-u+.3}),this.staticColliders.push({type:`box`,minX:a-l-.2,maxX:a+l+.2,minZ:o+u-.3,maxZ:o+u+.3}),i===`west`?(this.staticColliders.push({type:`box`,minX:a+l-.3,maxX:a+l+.3,minZ:o-u,maxZ:o+u}),this.staticColliders.push({type:`box`,minX:a-l-.3,maxX:a-l+.3,minZ:o-u,maxZ:o-1.8}),this.staticColliders.push({type:`box`,minX:a-l-.3,maxX:a-l+.3,minZ:o+1.8,maxZ:o+u})):(this.staticColliders.push({type:`box`,minX:a-l-.3,maxX:a-l+.3,minZ:o-u,maxZ:o+u}),this.staticColliders.push({type:`box`,minX:a+l-.3,maxX:a+l+.3,minZ:o-u,maxZ:o-1.8}),this.staticColliders.push({type:`box`,minX:a+l-.3,maxX:a+l+.3,minZ:o+1.8,maxZ:o+u})))}create3DRedBarn(){let e=new G,t=new Z({color:`#b91c1c`}),n=new K(new q(7,4.5,6),t);n.position.y=2.25,n.castShadow=!0,n.receiveShadow=!0,e.add(n);let r=new Z({color:`#7f1d1d`}),i=new K(new Vi(5.2,2.5,4),r);i.position.y=5.6,i.rotation.y=Math.PI/4,i.castShadow=!0,e.add(i);let a=new Z({color:`#f8fafc`}),o=new K(new q(2.6,2.8,.2),a);o.position.set(0,1.4,3.05),e.add(o);let s=new Z({color:`#94a3b8`}),c=new K(new J(1.2,1.2,6,16),s);c.position.set(4.6,3,0),c.castShadow=!0,e.add(c);let l=new Z({color:`#64748b`}),u=new K(new Y(1.2,16,16,0,Math.PI*2,0,Math.PI/2),l);return u.position.set(4.6,6,0),e.add(u),e}create3DCoop(){let e=new G,t=new Z({color:`#d97706`}),n=new Z({color:`#92400e`}),r=new Z({color:`#78350f`});for(let t of[-1.5,1.5])for(let n of[-1.2,1.2]){let i=new K(new q(.25,1.2,.25),r);i.position.set(t,.6,n),i.castShadow=!0,e.add(i)}let i=new K(new q(3.6,2.4,2.8),t);i.position.y=2.2,i.castShadow=!0,e.add(i);let a=new K(new Vi(3,1.6,4),n);a.position.y=3.9,a.rotation.y=Math.PI/4,a.castShadow=!0,e.add(a);let o=new K(new q(.9,.08,2.2),t);return o.position.set(0,.7,1.9),o.rotation.x=-.55,e.add(o),e}create3DStable(){let e=new G,t=new Z({color:`#78350f`}),n=new Z({color:`#b91c1c`}),r=new K(new q(5.5,3.2,.3),t);r.position.set(0,1.6,-1.8),r.castShadow=!0,e.add(r);let i=new K(new q(6,.25,4.4),n);i.position.set(0,3.3,0),i.rotation.x=.12,i.castShadow=!0,e.add(i);for(let n of[-2.4,2.4]){let r=new K(new q(.3,3.2,.3),t);r.position.set(n,1.6,1.8),r.castShadow=!0,e.add(r)}let a=new Z({color:`#fbbf24`}),o=new K(new q(1.6,1,1.2),a);return o.position.set(1.4,.5,-.6),o.castShadow=!0,e.add(o),e}create3DDuckShelter(){let e=new G,t=new Z({color:`#78350f`}),n=new Z({color:`#065f46`}),r=new X({color:`#0284c7`,roughness:.1,metalness:.5,transparent:!0,opacity:.88}),i=new Z({color:`#64748b`}),a=new Z({color:`#15803d`}),o=new K(new Bi(2.4,16),r);o.rotation.x=-Math.PI/2,o.position.set(0,.04,0),e.add(o);for(let t=0;t<14;t++){let n=t/14*Math.PI*2,r=new K(new Ui(.3,0),i);r.position.set(Math.cos(n)*2.45,.15,Math.sin(n)*2.45),r.scale.set(1.1,.7,1.1),e.add(r)}for(let t=0;t<6;t++){let n=new K(new J(.04,.04,1.2,5),a);n.position.set(1.8+Math.cos(t)*.4,.6,1.4+Math.sin(t)*.4),e.add(n)}let s=new K(new q(2.4,1.6,2),t);s.position.set(-2.8,.8,-2.2),s.castShadow=!0,e.add(s);let c=new K(new Vi(2,1.2,4),n);return c.position.set(-2.8,2.1,-2.2),c.rotation.y=Math.PI/4,c.castShadow=!0,e.add(c),e}create3DGoatShelter(){let e=new G,t=new Z({color:`#78350f`}),n=new Z({color:`#57534e`}),r=new Z({color:`#b45309`}),i=new K(new q(3.6,.8,2.8),n);i.position.y=.4,i.castShadow=!0,e.add(i);let a=new K(new q(2.4,.7,2),n);a.position.set(.4,1.15,0),a.castShadow=!0,e.add(a);let o=new K(new q(1.2,.12,1.8),t);o.position.set(-1.6,.6,0),o.rotation.z=-.45,o.castShadow=!0,e.add(o);let s=new K(new q(2.2,1.8,2),t);s.position.set(.4,2.4,0),s.castShadow=!0,e.add(s);let c=new K(new Vi(1.9,1.1,4),r);return c.position.set(.4,3.8,0),c.rotation.y=Math.PI/4,c.castShadow=!0,e.add(c),e}create3DSheepShelter(){let e=new G,t=new Z({color:`#78350f`}),n=new Z({color:`#a16207`}),r=new Z({color:`#f8fafc`}),i=new Z({color:`#eab308`}),a=new K(new q(4.2,2.6,.25),t);a.position.set(0,1.3,-1.4),a.castShadow=!0,e.add(a);for(let n of[-1,1]){let r=new K(new q(.25,2.6,2.8),t);r.position.set(n*2,1.3,0),r.castShadow=!0,e.add(r)}let o=new K(new q(4.6,.18,3.4),n);o.position.set(0,2.7,.1),o.rotation.x=.18,o.castShadow=!0,e.add(o);let s=new K(new q(3.6,.15,2.4),i);s.position.set(0,.08,0),e.add(s);let c=new K(new q(1,.8,.9),r);c.position.set(1.2,.45,-.6),c.castShadow=!0,e.add(c);let l=new K(new q(.9,.7,.8),r);return l.position.set(1.2,1.15,-.6),l.castShadow=!0,e.add(l),e}create3DRabbitHutch(){let e=new G,t=new Z({color:`#78350f`}),n=new Z({color:`#dc2626`}),r=new Br({color:`#94a3b8`,wireframe:!0}),i=new Z({color:`#713f12`});for(let n of[-1.1,1.1])for(let r of[-.8,.8]){let i=new K(new J(.08,.08,1.1,6),t);i.position.set(n,.55,r),i.castShadow=!0,e.add(i)}let a=new K(new q(2.6,1.4,1.8),t);a.position.y=1.7,a.castShadow=!0,e.add(a);let o=new K(new Yi(1.2,.9),r);o.position.set(-.4,1.7,.92),e.add(o);let s=new K(new Vi(2.2,1.2,4),n);s.position.y=2.9,s.rotation.y=Math.PI/4,s.castShadow=!0,e.add(s);let c=new K(new Y(1.1,8,8),i);return c.scale.set(1.3,.55,1.1),c.position.set(2.2,.35,.5),e.add(c),e}create3DCow(){let e=new G,t=new X({map:this.textures?this.textures.cow:null,color:`#fdfbf7`,roughness:.65}),n=new X({color:`#fbcfe8`,roughness:.5}),r=new X({color:`#1e293b`,roughness:.7}),i=new X({color:`#fef08a`,roughness:.3,metalness:.1}),a=new X({color:`#0f172a`,roughness:.5}),o=new X({color:`#facc15`,roughness:.4}),s=new zi(.9,1.4,12,16);s.rotateZ(Math.PI/2);let c=new K(s,t);c.position.y=1.45,c.castShadow=!0,c.receiveShadow=!0,e.add(c);let l=new K(new Y(.88,12,12),t);l.position.set(.65,1.5,0),l.scale.set(.9,1.05,.95),e.add(l);let u=new K(new Y(.85,12,12),t);u.position.set(-.65,1.45,0),u.scale.set(.9,1.02,.95),e.add(u);let d=new K(new Y(.38,10,10),n);d.position.set(-.45,.85,0),d.scale.set(1.1,.75,1),e.add(d);for(let t of[-.14,.14])for(let r of[-.14,.14]){let i=new K(new J(.035,.045,.22,8),n);i.position.set(-.45+t,.65,r),e.add(i)}let f=new G;f.position.set(1.25,1.65,0);let p=new K(new J(.5,.65,.9,12),t);p.position.set(-.15,.25,0),p.rotation.z=-.55,p.castShadow=!0,f.add(p);let m=new K(new Y(.55,14,14),t);m.position.set(.35,.45,0),m.scale.set(1.1,1,.92),m.castShadow=!0,f.add(m);let h=new K(new zi(.35,.4,10,12),n);h.rotation.x=Math.PI/2,h.position.set(.85,.32,0),h.scale.set(.95,.85,1.05),f.add(h);for(let e of[-1,1]){let t=new K(new Y(.05,6,6),r);t.position.set(1.05,.35,e*.14),f.add(t)}let g=new Br({color:`#ffffff`}),_=new Br({color:`#1e293b`});for(let e of[-1,1]){let t=new K(new Y(.12,10,10),g);t.position.set(.5,.58,e*.42),f.add(t);let n=new K(new Y(.08,8,8),_);n.position.set(.56,.58,e*.45),f.add(n)}for(let e of[-1,1]){let r=new K(new Vi(.09,.55,10),i);r.position.set(.25,.98,e*.4),r.rotation.x=e*.45,r.rotation.z=-.35,r.castShadow=!0,f.add(r);let a=new K(new zi(.12,.4,8,8),t);a.position.set(.08,.65,e*.58),a.rotation.z=-.25,a.rotation.x=e*.65,f.add(a);let o=new K(new zi(.07,.3,8,8),n);o.position.set(.12,.65,e*.58),o.rotation.z=-.25,o.rotation.x=e*.65,f.add(o)}let v=new K(new q(.04,.18,.14),o);v.position.set(.12,.55,.72),f.add(v),e.add(f);let y=new G;y.position.set(-1.15,1.8,0);let b=new K(new J(.04,.04,1.1,8),t);b.position.set(-.2,-.5,0),b.rotation.z=.35,y.add(b);let x=new K(new Vi(.16,.4,8),r);x.position.set(-.45,-1.05,0),x.rotation.z=.35,y.add(x),e.add(y);let S=[];for(let n of[-.65,.65])for(let r of[-.42,.42]){let i=new G;i.position.set(n,1,r);let o=new K(new J(.18,.14,.6,10),t);o.position.y=-.2,o.castShadow=!0,i.add(o);let s=new K(new J(.12,.11,.55,10),t);s.position.y=-.65,s.castShadow=!0,i.add(s);let c=new K(new J(.13,.16,.22,10),a);c.position.y=-.92,i.add(c),e.add(i),S.push(i)}return e.userData={headGroup:f,tailGroup:y,legs:S,type:`cow`},e}create3DSheep(){let e=new G,t=new X({color:`#fdfbf7`,roughness:.95,metalness:0,flatShading:!0}),n=new X({color:`#2d3748`,roughness:.7}),r=new X({color:`#fbcfe8`,roughness:.6}),i=new X({color:`#0f172a`,roughness:.6}),a=new G;a.position.y=1.25;let o=new zi(.8,1.2,12,16);o.rotateZ(Math.PI/2);let s=new K(o,t);s.castShadow=!0,a.add(s),[[-.6,.55,0],[-.2,.65,0],[.2,.65,0],[.6,.55,0],[-.5,.35,.55],[-.1,.45,.65],[.3,.45,.65],[.6,.35,.55],[-.5,.35,-.55],[-.1,.45,-.65],[.3,.45,-.65],[.6,.35,-.55],[-.85,.25,.25],[-.85,.25,-.25],[-.95,.4,0],[.85,.25,.25],[.85,.25,-.25],[.95,.4,0]].forEach(([e,n,r],i)=>{let o=new K(new Y(.42+i%3*.05,10,10),t);o.position.set(e,n,r),o.castShadow=!0,a.add(o)}),e.add(a);let c=new G;c.position.set(1.2,1.35,0);let l=new zi(.35,.6,10,12);l.rotateZ(-Math.PI/3);let u=new K(l,n);u.position.set(.15,0,0),u.castShadow=!0,c.add(u);let d=new K(new Y(.36,10,10),t);d.position.set(.08,.35,0),d.scale.set(1.1,.85,1.05),c.add(d);let f=new Br({color:`#ffffff`}),p=new Br({color:`#0f172a`});for(let e of[-1,1]){let t=new K(new Y(.08,8,8),f);t.position.set(.25,.12,e*.32),c.add(t);let n=new K(new Y(.05,6,6),p);n.position.set(.3,.12,e*.34),c.add(n)}for(let e of[-1,1]){let t=new K(new zi(.09,.4,8,8),n);t.position.set(-.05,.15,e*.42),t.rotation.z=-.4,t.rotation.x=e*.75,c.add(t);let i=new K(new zi(.06,.3,8,8),r);i.position.set(-.02,.15,e*.42),i.rotation.z=-.4,i.rotation.x=e*.75,c.add(i)}e.add(c);let m=new K(new Y(.24,8,8),t);m.position.set(-1.3,1.35,0),m.scale.set(1.2,.9,.9),e.add(m);let h=[];for(let r of[-.55,.55])for(let a of[-.34,.34]){let o=new G;o.position.set(r,.75,a);let s=new K(new Y(.18,8,8),t);s.position.y=0,o.add(s);let c=new K(new J(.08,.07,.7,8),n);c.position.y=-.35,c.castShadow=!0,o.add(c);let l=new K(new J(.08,.1,.15,8),i);l.position.y=-.7,o.add(l),e.add(o),h.push(o)}return e.userData={headGroup:c,tail:m,legs:h,fleeceGroup:a,type:`sheep`},e}create3DChicken(e=`hen`){let t=new G,n=e===`rooster`,r=new X({color:n?`#9a3412`:`#fdfbf7`,roughness:.65}),i=new X({color:`#dc2626`,roughness:.4}),a=new X({color:`#f59e0b`,roughness:.3}),o=new X({color:n?`#14532d`:`#f8fafc`,roughness:.4,metalness:n?.3:0}),s=new K(new Y(.52,14,12),r);s.position.y=.65,s.scale.set(1.3,1.1,.95),s.castShadow=!0,t.add(s);let c=new K(new Y(.38,10,10),r);c.position.set(.35,.68,0),t.add(c);let l=new K(new zi(.24,.45,8,8),r);l.position.set(0,.68,.46),l.rotation.x=.2,l.rotation.z=-Math.PI/4,l.scale.set(1,1,.3),t.add(l);let u=new K(new zi(.24,.45,8,8),r);u.position.set(0,.68,-.46),u.rotation.x=-.2,u.rotation.z=-Math.PI/4,u.scale.set(1,1,.3),t.add(u);let d=new G;d.position.set(.45,.9,0);let f=new K(new Y(.26,12,12),r);f.position.y=.15,f.castShadow=!0,d.add(f);let p=new K(new q(.35,n?.35:.2,.06),i);p.position.set(-.02,n?.42:.32,0),d.add(p);for(let e of[-1,1]){let t=new K(new Vi(.06,n?.28:.16,6),i);t.rotation.x=Math.PI,t.position.set(.18,-.06,e*.05),d.add(t)}let m=new K(new Vi(.09,.26,8),a);m.rotation.z=-Math.PI/2,m.position.set(.35,.14,0),d.add(m);let h=new Br({color:`#ffffff`}),g=new Br({color:`#1e293b`});for(let e of[-1,1]){let t=new K(new Y(.06,6,6),h);t.position.set(.18,.22,e*.22),d.add(t);let n=new K(new Y(.038,6,6),g);n.position.set(.22,.22,e*.23),d.add(n)}t.add(d);let _=new G;if(_.position.set(-.55,.8,0),n)for(let e=0;e<4;e++){let t=new K(new Zi(.45+e*.08,.06,6,16,Math.PI*.7),o);t.rotation.z=Math.PI/4+e*.12,t.position.set(-.15-e*.08,e*.08,(e-1.5)*.05),t.castShadow=!0,_.add(t)}else for(let e=0;e<3;e++){let t=new K(new q(.14,.45,.06),r);t.rotation.z=Math.PI/3+(e-1)*.15,t.position.set(-.15,.15+e*.05,(e-1)*.08),_.add(t)}t.add(_);for(let e of[-.18,.18]){let n=new K(new J(.035,.035,.45,6),a);n.position.set(.08,.25,e),n.castShadow=!0,t.add(n);let r=new K(new q(.22,.05,.16),a);r.position.set(.14,.04,e),t.add(r)}return t.userData={headGroup:d,leftWing:l,rightWing:u,tailGroup:_,type:`chicken`},t}create3DHorse(){let e=new G,t=new X({color:`#854d0e`,roughness:.5}),n=new X({color:`#3f1f0a`,roughness:.7}),r=new X({color:`#f8fafc`,roughness:.6}),i=new X({color:`#451a03`,roughness:.4}),a=new X({color:`#dc2626`,roughness:.6}),o=new X({color:`#fbbf24`,roughness:.2,metalness:.8}),s=new X({color:`#0f172a`,roughness:.5,metalness:.3}),c=new zi(.7,1.45,12,16);c.rotateZ(Math.PI/2);let l=new K(c,t);l.position.set(0,1.78,0),l.scale.set(1,1.05,.92),l.castShadow=!0,e.add(l);let u=new K(new Y(.68,12,12),t);u.position.set(.65,1.82,0),u.scale.set(.95,1.08,.88),u.castShadow=!0,e.add(u);let d=new K(new Y(.68,12,12),t);d.position.set(-.65,1.76,0),d.scale.set(.95,1.02,.9),d.castShadow=!0,e.add(d);let f=new K(new q(1.05,.1,1.3),a);f.position.set(0,2.38,0),e.add(f);let p=new K(new q(.85,.22,1.05),i);p.position.set(0,2.48,0),e.add(p);for(let t of[-1,1]){let n=new K(new q(.06,.8,.04),i);n.position.set(0,2.1,t*.72),e.add(n);let r=new K(new Zi(.12,.03,8,16),o);r.position.set(0,1.68,t*.72),e.add(r)}let m=new G;m.position.set(1,2.1,0);let h=new K(new J(.55,.72,1.6,12),t);h.position.set(.35,.65,0),h.rotation.z=-.55,h.scale.set(.85,1,.75),h.castShadow=!0,m.add(h);let g=new K(new zi(.32,.95,10,14),t);g.rotation.z=-Math.PI/3,g.position.set(.95,1.25,0),g.scale.set(1,1,.85),g.castShadow=!0,m.add(g);let _=new K(new zi(.08,.55,8,8),r);_.rotation.z=-Math.PI/3,_.position.set(.98,1.35,0),m.add(_);for(let e of[-1,1]){let n=new K(new Vi(.09,.38,8),t);n.position.set(.72,1.75,e*.22),n.rotation.z=-.2,n.rotation.x=e*.15,m.add(n)}let v=new Br({color:`#0f172a`}),y=new Br({color:`#ffffff`});for(let e of[-1,1]){let t=new K(new Y(.08,8,8),y);t.position.set(.88,1.38,e*.28),m.add(t);let n=new K(new Y(.06,6,6),v);n.position.set(.92,1.38,e*.3),m.add(n)}for(let e=0;e<5;e++){let t=new K(new zi(.12,.45,6,8),n);t.position.set(.15+e*.18,.35+e*.28,0),t.rotation.z=.4,m.add(t)}e.add(m);let b=new G;b.position.set(-1.3,2.3,0);for(let e=0;e<3;e++){let t=new K(new Vi(.18-e*.03,1.5,8),n);t.position.set(-.25-e*.08,-.65-e*.15,(e-1)*.06),t.rotation.z=.35,t.castShadow=!0,b.add(t)}e.add(b);let x=[];for(let n of[-.85,.75])for(let i of[-.38,.38]){let a=new G;a.position.set(n,1.25,i);let o=new K(new J(.18,.13,.75,10),t);o.position.y=-.3,o.castShadow=!0,a.add(o);let c=n>0,l=new K(new J(.11,.09,.7,10),c?r:t);l.position.y=-.85,l.castShadow=!0,a.add(l);let u=new K(new J(.11,.14,.22,10),s);u.position.y=-1.25,a.add(u),e.add(a),x.push(a)}return e.userData={headGroup:m,tailGroup:b,legs:x,type:`horse`},e}create3DDuck(){let e=new G,t=new X({color:`#78350f`,roughness:.7}),n=new X({color:`#065f46`,roughness:.4}),r=new X({color:`#ea580c`,roughness:.3}),i=new X({color:`#f8fafc`,roughness:.5}),a=new Br({color:`#0f172a`}),o=new K(new Y(.42,10,10),t);o.position.y=.45,o.scale.set(1.2,.9,.85),o.castShadow=!0,e.add(o);let s=new K(new zi(.18,.35,6,6),t);s.position.set(0,.48,.36),s.rotation.z=-Math.PI/4,e.add(s);let c=s.clone();c.position.set(0,.48,-.36),e.add(c);let l=new K(new J(.14,.16,.35,8),i);l.position.set(.32,.72,0),e.add(l);let u=new G;u.position.set(.35,.92,0);let d=new K(new Y(.22,10,10),n);u.add(d);let f=new K(new q(.24,.06,.16),r);f.position.set(.22,-.04,0),u.add(f);let p=new K(new Y(.04,6,6),a);p.position.set(.08,.08,.16),u.add(p);let m=p.clone();m.position.set(.08,.08,-.16),u.add(m),e.add(u);let h=new K(new q(.22,.04,.14),r);h.position.set(0,.04,.15),e.add(h);let g=h.clone();return g.position.set(0,.04,-.15),e.add(g),e.userData={headGroup:u,type:`duck`},e}create3DGoat(){let e=new G,t=new X({color:`#e7e5e4`,roughness:.75}),n=new X({color:`#44403c`,roughness:.4});new X({color:`#292524`,roughness:.5}),new Br({color:`#0f172a`});let r=new K(new J(.55,.6,1.4,8),t);r.rotation.z=Math.PI/2,r.position.set(0,.95,0),r.castShadow=!0,e.add(r);let i=new G;i.position.set(.75,1.35,0);let a=new K(new Y(.32,10,10),t);a.scale.set(1.2,.9,.85),i.add(a);for(let e of[-1,1]){let r=new K(new Vi(.08,.55,6),n);r.position.set(-.1,.35,e*.16),r.rotation.z=-.55,r.rotation.x=e*.15,i.add(r);let a=new K(new Vi(.07,.32,5),t);a.position.set(-.15,.12,e*.32),a.rotation.z=-1.1,i.add(a)}let o=new K(new Vi(.08,.28,4),t);o.position.set(.35,-.3,0),o.rotation.z=.4,i.add(o),e.add(i);let s=[];for(let n of[-.5,.5])for(let r of[-.25,.25]){let i=new K(new J(.08,.08,.85,6),t);i.position.set(n,.42,r),i.castShadow=!0,e.add(i),s.push(i)}let c=new K(new Vi(.09,.25,5),t);return c.position.set(-.75,1.1,0),c.rotation.z=1.1,e.add(c),e.userData={headGroup:i,legs:s,type:`goat`},e}create3DRabbit(){let e=new G,t=new X({color:`#fafaf9`,roughness:.85}),n=new X({color:`#f472b6`,roughness:.4}),r=new Br({color:`#e11d48`}),i=new K(new Y(.38,10,10),t);i.position.y=.38,i.scale.set(1.15,.9,.85),i.castShadow=!0,e.add(i);let a=new G;a.position.set(.32,.62,0);let o=new K(new Y(.22,10,10),t);a.add(o);for(let e of[-1,1]){let r=new K(new zi(.06,.42,6,6),t);r.position.set(-.06,.35,e*.12),r.rotation.x=e*.15,r.rotation.z=-.2,a.add(r);let i=new K(new zi(.035,.32,4,4),n);i.position.set(-.04,.35,e*.12),i.rotation.x=e*.15,i.rotation.z=-.2,a.add(i)}let s=new K(new Y(.04,6,6),n);s.position.set(.22,-.02,0),a.add(s);let c=new K(new Y(.035,6,6),r);c.position.set(.12,.08,.14),a.add(c);let l=c.clone();l.position.set(.12,.08,-.14),a.add(l),e.add(a);let u=new K(new Y(.12,8,8),t);return u.position.set(-.42,.38,0),e.add(u),e.userData={headGroup:a,type:`rabbit`},e}create3DDog(){let e=new G;e.position.set(-3.6,0,-15),e.rotation.y=0;let t=new X({color:`#d97706`,roughness:.65}),n=new X({color:`#fffbeb`,roughness:.6}),r=new X({color:`#4a220a`,roughness:.65}),i=new X({color:`#09090b`,roughness:.25}),a=new X({color:`#e11d48`,roughness:.35}),o=new X({color:`#facc15`,roughness:.2,metalness:.85}),s=new X({color:`#f43f5e`,roughness:.45}),c=new Br({color:`#ffffff`}),l=new Br({color:`#09090b`}),u=new Br({color:`#1e293b`}),d=new zi(.32,.5,10,10);d.rotateZ(Math.PI/2);let f=new K(d,t);f.position.set(0,.68,.12),f.scale.set(.96,1.12,1),f.castShadow=!0,e.add(f);let p=new zi(.24,.36,8,8);p.rotateZ(Math.PI/2);let m=new K(p,n);m.position.set(0,.66,.24),m.scale.set(.85,1.05,.7),e.add(m);let h=new K(new J(.26,.3,.38,10),t);h.rotation.x=Math.PI/2,h.position.set(0,.66,-.22),h.scale.set(.9,1,1),h.castShadow=!0,e.add(h);let g=new K(new q(.34,.08,.42),n);g.position.set(0,.48,-.08),e.add(g);let _=new K(new Y(.3,10,10),t);_.position.set(0,.65,-.38),_.scale.set(.92,1.05,1.05),_.castShadow=!0,e.add(_);let v=new K(new J(.25,.27,.1,14),a);v.rotation.x=.45,v.position.set(0,.94,.32),e.add(v);let y=new K(new J(.07,.07,.025,12),o);y.rotation.x=Math.PI/2,y.position.set(0,.86,.46),e.add(y);let b=new G;b.position.set(0,1.14,.42);let x=new K(new Y(.32,14,14),t);x.scale.set(1,.96,1.06),x.castShadow=!0,b.add(x);let S=new K(new q(.08,.22,.12),n);S.position.set(0,.12,.24),S.rotation.x=-.35,b.add(S);let C=new K(new zi(.14,.26,10,10),n);C.rotation.x=Math.PI/2,C.position.set(0,-.06,.29),b.add(C);let w=new K(new q(.08,.06,.18),r);w.position.set(0,.03,.32),b.add(w);let T=new K(new Y(.068,10,10),i);T.position.set(0,.02,.46),b.add(T);let E=new K(new Y(.02,6,6),c);E.position.set(.02,.045,.51),b.add(E);let D=new K(new q(.12,.03,.12),i);D.position.set(0,-.11,.36),b.add(D);let O=new K(new q(.09,.03,.18),s);O.position.set(0,-.13,.39),O.rotation.x=.28,b.add(O);for(let e of[-1,1]){let t=new K(new Y(.062,8,8),c);t.position.set(e*.13,.08,.26),b.add(t);let n=new K(new Y(.045,8,8),l);n.position.set(e*.13,.08,.3),b.add(n);let i=new K(new Y(.018,6,6),c);i.position.set(e*.12+.012,.095,.33),b.add(i);let a=new G;a.position.set(e*.28,.12,.02);let o=new K(new zi(.09,.38,8,8),r);o.position.set(0,-.14,0),o.rotation.z=-e*.32,o.rotation.x=.22,a.add(o),b.add(a)}e.add(b);let k=new G;k.position.set(0,.72,-.46);let A=new K(new Vi(.12,.52,10),t);A.rotation.x=-.85,A.position.set(0,.2,-.16),k.add(A);let j=new K(new Y(.1,8,8),n);j.position.set(0,.44,-.34),k.add(j),e.add(k);let M=(r,i)=>{let a=new G;a.position.set(r,.62,i);let o=new K(new J(.095,.075,.35,10),t);o.position.y=-.16,o.castShadow=!0,a.add(o);let s=new K(new J(.07,.06,.28,10),t);s.position.y=-.42,s.castShadow=!0,a.add(s);let c=new K(new q(.14,.1,.2),n);c.position.set(0,-.57,.04),a.add(c);let l=new K(new q(.1,.02,.12),u);return l.position.set(0,-.62,.04),a.add(l),e.add(a),a};e.userData={isPet:!0,petType:`dog`,headGroup:b,tailGroup:k,legFL:M(.22,.22),legFR:M(-.22,.22),legBL:M(.22,-.32),legBR:M(-.22,-.32),state:`WANDER`,targetX:-3.6,targetZ:-14,timer:3,speed:2.6,isMoving:!1,sitProgress:0},this.scene.add(e),this.petDog=e}create3DCat(){let e=new G;e.position.set(-2,0,-20),e.rotation.y=0;let t=new X({color:`#ea580c`,roughness:.6}),n=new X({color:`#f8fafc`,roughness:.6}),r=new X({color:`#1e293b`,roughness:.6}),i=new X({color:`#fbcfe8`,roughness:.5}),a=new Br({color:`#10b981`}),o=new Br({color:`#0f172a`}),s=new zi(.19,.5,8,8);s.rotateZ(Math.PI/2);let c=new K(s,t);c.position.set(0,.44,0),c.scale.set(.92,1.05,1),c.castShadow=!0,e.add(c);let l=new K(new Y(.17,8,8),n);l.position.set(0,.42,.22),e.add(l);let u=new K(new Y(.15,6,6),r);u.position.set(-.1,.5,-.12),e.add(u);let d=new G;d.position.set(0,.65,.34);let f=new K(new Y(.2,10,10),t);f.scale.set(1.05,.95,.95),f.castShadow=!0,d.add(f);let p=new K(new zi(.08,.12,6,6),n);p.rotation.x=Math.PI/2,p.position.set(0,-.04,.16),d.add(p);let m=new K(new Vi(.03,.04,6),i);m.rotation.z=Math.PI,m.position.set(0,.01,.24),d.add(m);for(let e of[-1,1]){let t=new K(new Y(.045,6,6),a);t.position.set(e*.09,.06,.16),d.add(t);let n=new K(new q(.015,.06,.03),o);n.position.set(e*.09,.06,.19),d.add(n);let s=new K(new Vi(.07,.18,6),r);s.position.set(e*.12,.2,-.01),s.rotation.z=-e*.25,d.add(s);let c=new K(new Vi(.045,.13,6),i);c.position.set(e*.12,.19,.01),c.rotation.z=-e*.25,d.add(c)}e.add(d);let h=new G;h.position.set(0,.48,-.32);let g=new K(new Zi(.22,.04,8,16,Math.PI*.85),r);g.rotation.y=Math.PI/2,g.rotation.z=-.4,h.add(g),e.add(h);let _=(t,r)=>{let i=new G;i.position.set(t,.42,r);let a=new K(new J(.05,.04,.38,8),n);a.position.y=-.19,a.castShadow=!0,i.add(a);let o=new K(new Y(.055,6,6),n);return o.position.set(0,-.37,.03),i.add(o),e.add(i),i};e.userData={isPet:!0,petType:`cat`,headGroup:d,tailGroup:h,legFL:_(.14,.16),legFR:_(-.14,.16),legBL:_(.14,-.22),legBR:_(-.14,-.22),state:`WANDER`,targetX:2,targetZ:-16,timer:4,speed:1.8,isMoving:!1,sitProgress:0},this.scene.add(e),this.petCat=e}createFarmer(){this.farmerGroup=new G,this.farmerPos=new U(0,0,0),this.cameraFocusPoint&&this.cameraFocusPoint.copy(this.farmerPos),this.farmerSpeed=11,this.isRiding=!1,this.isTPose=!1,this.farmerOutfit=this.state&&this.state.farmerOutfit||`default`,this.farmerBodyGroup=new G,this.farmerGroup.add(this.farmerBodyGroup),this.farmerMaterials={skin:new X({color:`#f7c6a5`,roughness:.55}),hair:new X({color:`#5c2e0b`,roughness:.65}),shirt:new X({map:this.farmerOutfit===`alternative`?this.textures.farmerShirtAlt:this.textures.farmerShirt,roughness:.65}),overalls:new X({map:this.farmerOutfit===`alternative`?this.textures.farmerDenimAlt:this.textures.farmerDenim,roughness:.65}),strawHat:new X({map:this.textures.strawHat,color:this.farmerOutfit===`alternative`?`#f1d29d`:`#e2b36e`,roughness:.6}),hatBand:new X({color:`#542d13`,roughness:.5}),boot:new X({color:this.farmerOutfit===`alternative`?`#254737`:`#1f4e38`,roughness:.28,metalness:.08}),sole:new X({color:`#141816`,roughness:.9}),metal:new X({color:`#cbd5e1`,roughness:.25,metalness:.85}),brass:new X({color:`#d97706`,roughness:.35,metalness:.7}),eyeWhite:new Br({color:`#ffffff`}),iris:new Br({color:`#5a381e`}),pupil:new Br({color:`#111827`}),blush:new Br({color:`#f87171`,transparent:!0,opacity:.65}),smile:new Br({color:`#8f2d21`}),collar:new X({color:`#fef3c7`,roughness:.7})};let e=this.farmerMaterials;this.farmerHeadGroup=new G,this.farmerHeadGroup.position.set(0,1.96,0),this.farmerBodyGroup.add(this.farmerHeadGroup);let t=new K(new J(.12,.13,.16,12),e.skin);t.position.y=-.16,t.castShadow=!0,this.farmerHeadGroup.add(t);let n=new Y(.38,18,18);n.scale(.95,1.06,.98);let r=new K(n,e.skin);r.castShadow=!0,this.farmerHeadGroup.add(r);let i=new K(new Y(.065,10,10),e.skin);i.position.set(0,.02,.38),i.scale.set(1,.85,1.1),i.castShadow=!0,this.farmerHeadGroup.add(i);let a=new K(new Zi(.085,.018,8,14,Math.PI*.72),e.smile);a.rotation.z=Math.PI*1.14,a.position.set(0,-.12,.35),this.farmerHeadGroup.add(a);for(let t of[-1,1]){let n=new K(new Y(.072,10,10),e.eyeWhite);n.scale.set(1.15,.95,.75),n.position.set(t*.155,.09,.34),n.rotation.y=t*.12,this.farmerHeadGroup.add(n);let r=new K(new Y(.048,8,8),e.iris);r.position.set(t*.155,.09,.38),this.farmerHeadGroup.add(r);let i=new K(new Y(.034,6,6),e.pupil);i.position.set(t*.155,.09,.405),this.farmerHeadGroup.add(i);let a=new K(new Y(.014,4,4),e.eyeWhite);a.position.set(t*.155+.016,.108,.425),this.farmerHeadGroup.add(a);let o=new K(new q(.12,.028,.035),e.hair);o.position.set(t*.155,.2,.36),o.rotation.z=t*-.12,o.rotation.y=t*.15,this.farmerHeadGroup.add(o);let s=new K(new Bi(.065,10),e.blush);s.position.set(t*.22,-.04,.33),s.rotation.y=t*.35,this.farmerHeadGroup.add(s);let c=new K(new Y(.075,8,8),e.skin);c.position.set(t*.37,.02,-.02),c.scale.set(.4,1.1,.8),this.farmerHeadGroup.add(c)}let o=new K(new q(.56,.16,.32),e.hair);o.position.set(0,.24,.22),this.farmerHeadGroup.add(o);for(let t of[-1,1]){let n=new K(new q(.12,.28,.22),e.hair);n.position.set(t*.35,.06,.08),this.farmerHeadGroup.add(n)}let s=new K(new Y(.34,10,10),e.hair);s.position.set(0,.02,-.2),s.scale.set(1,1.05,.85),this.farmerHeadGroup.add(s),this.farmerHatGroup=new G,this.farmerHatGroup.position.set(0,.25,-.04),this.farmerHatGroup.rotation.x=-.16,this.farmerHeadGroup.add(this.farmerHatGroup);let c=new K(new J(.82,.88,.045,24),e.strawHat);c.castShadow=!0,c.receiveShadow=!0,this.farmerHatGroup.add(c);let l=new K(new Zi(.84,.035,8,24),e.strawHat);l.rotation.x=Math.PI/2,l.position.y=.025,this.farmerHatGroup.add(l);let u=new K(new J(.38,.45,.34,20),e.strawHat);u.position.y=.18,u.castShadow=!0,this.farmerHatGroup.add(u);let d=new K(new Y(.38,16,8,0,Math.PI*2,0,Math.PI/2),e.strawHat);d.position.y=.35,this.farmerHatGroup.add(d);let f=new K(new J(.46,.46,.08,20),e.hatBand);f.position.y=.07,this.farmerHatGroup.add(f);let p=new K(new q(.7,.88,.48),e.shirt);p.position.set(0,1.35,0),p.castShadow=!0,this.farmerBodyGroup.add(p);let m=new K(new q(.14,.08,.04),e.collar);m.position.set(-.16,1.76,.25),m.rotation.z=.4,this.farmerBodyGroup.add(m);let h=new K(new q(.14,.08,.04),e.collar);h.position.set(.16,1.76,.25),h.rotation.z=-.4,this.farmerBodyGroup.add(h);let g=new K(new q(.54,.58,.1),e.overalls);g.position.set(0,1.3,.22),g.castShadow=!0,this.farmerBodyGroup.add(g);let _=new K(new q(.28,.22,.04),e.overalls);_.position.set(0,1.28,.28),this.farmerBodyGroup.add(_);let v=new K(new q(.72,.38,.5),e.overalls);v.position.set(0,.98,0),v.castShadow=!0,this.farmerBodyGroup.add(v);for(let t of[-1,1]){let n=new K(new q(.1,.8,.04),e.overalls);n.position.set(t*.21,1.45,0),n.rotation.x=0,this.farmerBodyGroup.add(n);let r=new K(new Zi(.045,.016,6,12),e.metal);r.position.set(t*.21,1.54,.28),this.farmerBodyGroup.add(r);let i=new K(new J(.035,.035,.03,8),e.brass);i.rotation.x=Math.PI/2,i.position.set(t*.21,1.5,.29),this.farmerBodyGroup.add(i);let a=new K(new J(.03,.03,.03,8),e.brass);a.rotation.z=Math.PI/2,a.position.set(t*.37,1.05,.05),this.farmerBodyGroup.add(a)}let y=t=>{let n=new G;n.position.set(t*.46,1.66,0);let r=new K(new J(.12,.13,.38,12),e.shirt);r.position.y=-.19,r.castShadow=!0,n.add(r);let i=new K(new Zi(.135,.035,8,16),e.shirt);i.rotation.x=Math.PI/2,i.position.y=-.38,i.castShadow=!0,n.add(i);let a=new K(new J(.095,.105,.38,10),e.skin);a.position.y=-.58,a.castShadow=!0,n.add(a);let o=new G;o.position.set(0,-.8,0);let s=new K(new q(.13,.07,.15),e.skin);s.castShadow=!0,o.add(s);let c=new K(new J(.028,.032,.1,6),e.skin);return c.position.set(t*-.065,-.01,.05),c.rotation.z=t*.5,c.rotation.x=.3,o.add(c),[-.045,-.015,.015,.045].forEach((n,r)=>{let i=new K(new J(.022,.025,r===1?.11:r===2?.1:.085,6),e.skin);i.position.set(t*n,-.07,0),i.rotation.z=n*1.5*t,i.castShadow=!0,o.add(i)}),n.add(o),n};this.leftArm=y(-1),this.farmerBodyGroup.add(this.leftArm),this.rightArm=y(1),this.farmerBodyGroup.add(this.rightArm),this.leftArm.rotation.z=-.16,this.rightArm.rotation.z=.16,this.toolHolder=new G,this.rightArm.add(this.toolHolder);let b=t=>{let n=new G;n.position.set(t*.22,.88,0);let r=new K(new J(.165,.175,.48,12),e.overalls);r.position.y=-.24,r.castShadow=!0,n.add(r);let i=new K(new J(.185,.175,.42,12),e.boot);i.position.y=-.54,i.castShadow=!0,n.add(i);let a=new K(new Zi(.18,.025,8,16),e.boot);a.rotation.x=Math.PI/2,a.position.y=-.33,n.add(a);let o=new K(new q(.24,.18,.4),e.boot);o.position.set(0,-.73,.08),o.castShadow=!0,n.add(o);let s=new K(new Y(.12,8,8),e.boot);s.position.set(0,-.73,.24),s.scale.set(1,.75,1),n.add(s);let c=new K(new q(.26,.07,.44),e.sole);return c.position.set(0,-.83,.08),c.castShadow=!0,c.receiveShadow=!0,n.add(c),n};this.leftLeg=b(-1),this.farmerGroup.add(this.leftLeg),this.rightLeg=b(1),this.farmerGroup.add(this.rightLeg),this.farmerGroup.position.set(0,0,0),this.scene.add(this.farmerGroup)}setFarmerOutfit(e){if(this.farmerOutfit=e===`alternative`?`alternative`:`default`,this.state&&(this.state.farmerOutfit=this.farmerOutfit,this.state.save()),this.farmerMaterials){let e=this.farmerOutfit===`alternative`;this.farmerMaterials.shirt&&(this.farmerMaterials.shirt.map=e?this.textures.farmerShirtAlt:this.textures.farmerShirt,this.farmerMaterials.shirt.needsUpdate=!0),this.farmerMaterials.overalls&&(this.farmerMaterials.overalls.map=e?this.textures.farmerDenimAlt:this.textures.farmerDenim,this.farmerMaterials.overalls.needsUpdate=!0),this.farmerMaterials.strawHat&&(this.farmerMaterials.strawHat.color.setHex(e?15848093:14857070),this.farmerMaterials.strawHat.needsUpdate=!0),this.farmerMaterials.boot&&(this.farmerMaterials.boot.color.setHex(e?2443063:2051640),this.farmerMaterials.boot.needsUpdate=!0)}}toggleFarmerOutfit(){let e=this.farmerOutfit==="default"?`alternative`:`default`;return this.setFarmerOutfit(e),this.farmerOutfit}toggleTPose(){return this.isTPose=!this.isTPose,this.isTPose?(this.leftArm&&this.leftArm.rotation.set(0,0,Math.PI/2),this.rightArm&&this.rightArm.rotation.set(0,0,-Math.PI/2),this.leftLeg&&this.leftLeg.rotation.set(0,0,0),this.rightLeg&&this.rightLeg.rotation.set(0,0,0),this.farmerBodyGroup&&(this.farmerBodyGroup.position.y=0)):(this.leftArm&&this.leftArm.rotation.set(0,0,-.16),this.rightArm&&this.rightArm.rotation.set(0,0,.16)),this.isTPose}buildFarmerHeldTools(){this.tools3D={},this.toolHolder&&this.toolHolder.clear()}updateFarmerToolDisplay(){}plantCrop3D(e,t,n,r,i=0){let a=new G;a.position.set(t,.26,n);let o=new Z({color:`#16a34a`}),s=new Z({color:`#22c55e`,side:2}),c=new Z({color:`#4ade80`});if(i===0||i===1){let e=new Z({color:`#d4a373`}),t=new Y(.07,6,6);if(t.scale(1.2,.6,.9),[{x:.12,z:.08,r:.4},{x:-.14,z:.1,r:-.7},{x:-.06,z:-.12,r:1.2},{x:.15,z:-.07,r:-.3}].forEach(n=>{let r=new K(t,e);r.position.set(n.x,.02,n.z),r.rotation.y=n.r,r.castShadow=!0,a.add(r)}),i===1){let e=new K(new J(.02,.025,.12,5),c);e.position.set(0,.06,0),a.add(e)}}else if(i===2){let e=new K(new J(.035,.04,.32,6),c);e.position.y=.16,e.castShadow=!0,a.add(e);let t=new Vi(.09,.28,5);t.scale(1,.35,1);let n=new K(t,s);n.position.set(-.11,.28,0),n.rotation.z=Math.PI/3.2,a.add(n);let r=new K(t,s);r.position.set(.11,.28,0),r.rotation.z=-Math.PI/3.2,a.add(r)}else if(i===3){let e=new K(new J(.05,.06,.24,6),o);e.position.y=.12,a.add(e);for(let e=0;e<7;e++){let t=e/7*Math.PI*2,n=new Vi(.14,.44,5);n.scale(1,.35,1);let r=new K(n,o);r.position.set(Math.cos(t)*.18,.26+e%2*.06,Math.sin(t)*.18),r.rotation.y=t,r.rotation.x=.48,r.castShadow=!0,a.add(r)}}else if(i===4){if(r===`carrot`){let e=new Z({color:`#ea580c`}),t=new K(new J(.24,.14,.45,12),e);t.position.y=.18,t.castShadow=!0,a.add(t);let n=new K(new Y(.24,12,8,0,Math.PI*2,0,Math.PI/2),e);n.position.y=.4,a.add(n);for(let e=0;e<7;e++){let t=e/7*Math.PI*2,n=new K(new Vi(.12,.65,5),o);n.position.set(Math.cos(t)*.1,.65,Math.sin(t)*.1),n.rotation.y=t,n.rotation.x=.35+e%2*.15,n.castShadow=!0,a.add(n)}}else if(r===`tomato`){let e=new X({color:`#dc2626`,roughness:.22,metalness:.1}),t=new Z({color:`#166534`}),n=new K(new Ui(.55,1),o);n.position.y=.48,n.castShadow=!0,a.add(n),[{x:.24,y:.44,z:.2,r:.22},{x:-.22,y:.48,z:.16,r:.24},{x:.05,y:.62,z:-.22,r:.2}].forEach(n=>{let r=new K(new Y(n.r,10,10),e);r.position.set(n.x,n.y,n.z),r.castShadow=!0,a.add(r);let i=new K(new Vi(n.r*.8,.06,5),t);i.position.set(n.x,n.y+n.r+.02,n.z),i.rotation.x=Math.PI,a.add(i)})}else if(r===`corn`){let e=new Z({color:`#facc15`}),t=new Z({color:`#86efac`}),n=new K(new J(.08,.09,1.8,8),o);n.position.y=.9,n.castShadow=!0,a.add(n);for(let e=0;e<4;e++){let t=e/4*Math.PI*2,n=new K(new q(.12,.02,.75),o);n.position.set(Math.cos(t)*.32,.7+e*.25,Math.sin(t)*.32),n.rotation.y=t,n.rotation.x=.45,a.add(n)}[-1,1].forEach((n,r)=>{let i=new K(new zi(.18,.52,6,8),e);i.position.set(n*.22,.95+r*.2,0),i.rotation.z=-n*.35,i.castShadow=!0,a.add(i);let o=new K(new Vi(.24,.6,5),t);o.position.copy(i.position),o.rotation.copy(i.rotation),a.add(o)})}else if(r===`wheat`){let e=new Z({color:`#eab308`}),t=new Z({color:`#ca8a04`});for(let n=0;n<6;n++){let r=n/6*Math.PI*2,i=.16+n%2*.08,o=new K(new J(.035,.04,1.5,6),e);o.position.set(Math.cos(r)*i,.75,Math.sin(r)*i),o.rotation.z=Math.cos(r)*.18,o.rotation.x=Math.sin(r)*.18,o.castShadow=!0,a.add(o);let s=new K(new Vi(.11,.58,6),t);s.position.copy(o.position),s.position.y+=.68,s.rotation.copy(o.rotation),a.add(s)}}else if(r===`strawberry`){let e=new X({color:`#e11d48`,roughness:.28}),t=new Z({color:`#15803d`}),n=new K(new Ui(.52,1),o);n.position.y=.38,n.scale.set(1.2,.7,1.2),n.castShadow=!0,a.add(n),[{x:.22,y:.34,z:.22},{x:-.24,y:.32,z:.14},{x:.04,y:.38,z:-.24}].forEach(n=>{let r=new K(new Vi(.16,.32,7),e);r.position.set(n.x,n.y,n.z),r.rotation.x=Math.PI,r.castShadow=!0,a.add(r);let i=new K(new Vi(.18,.05,5),t);i.position.set(n.x,n.y+.18,n.z),a.add(i)})}else if(r===`pumpkin`){let e=new Z({color:`#ea580c`}),t=new Z({color:`#5c3d18`}),n=new G;for(let t=0;t<6;t++){let r=new K(new Y(.48,8,8),e);r.scale.set(1.15,.85,1.15),r.rotation.y=t/6*Math.PI,n.add(r)}n.position.y=.44,n.castShadow=!0,a.add(n);let r=new K(new J(.07,.09,.35,6),t);r.position.y=.86,r.rotation.z=.3,a.add(r)}else if(r===`sunflower`){let e=new Z({color:`#3b1803`}),t=new Z({color:`#fbbf24`}),n=new K(new J(.08,.09,1.9,8),o);n.position.y=.95,n.castShadow=!0,a.add(n);let r=new G;r.position.set(0,1.88,.15),r.rotation.x=Math.PI/4.5;let i=new K(new J(.36,.36,.12,14),e);i.rotation.x=Math.PI/2,r.add(i);for(let e=0;e<14;e++){let n=e/14*Math.PI*2,i=new K(new Vi(.12,.38,5),t);i.position.set(Math.cos(n)*.48,Math.sin(n)*.48,0),i.rotation.z=n-Math.PI/2,r.add(i)}a.add(r)}else if(r===`eggplant`){let e=new X({color:`#4c1d95`,roughness:.22}),t=new Z({color:`#166534`}),n=new K(new Ui(.55,1),o);n.position.y=.52,n.castShadow=!0,a.add(n),[-.22,.22].forEach((n,r)=>{let i=new K(new Y(.32,10,10),e);i.scale.set(.9,1.6,.9),i.position.set(n,.48+r*.1,.18),i.castShadow=!0,a.add(i);let o=new K(new Vi(.28,.25,5),t);o.position.set(n,.92+r*.1,.18),a.add(o)})}else if(r===`watermelon`){let e=new Z({color:`#16a34a`}),t=new Z({color:`#052e16`}),n=new K(new Y(.62,14,12),e);n.scale.set(1.35,.95,.95),n.position.y=.5,n.castShadow=!0,a.add(n);for(let e=-2;e<=2;e++){let n=new K(new Zi(.63,.05,5,16),t);n.scale.set(1.35,.95,.95),n.position.set(e*.22,.5,0),n.rotation.y=Math.PI/2,a.add(n)}}else if(r===`grape`){let e=new Z({color:`#78350f`}),t=new X({color:`#7e22ce`,roughness:.3}),n=new K(new q(.12,1.8,.12),e);n.position.set(-.45,.9,0),a.add(n);let r=new K(new q(.12,1.8,.12),e);r.position.set(.45,.9,0),a.add(r);let i=new K(new q(1.2,.12,.12),e);i.position.set(0,1.75,0),a.add(i),[-.22,.22].forEach(e=>{for(let n=0;n<4;n++){let r=4-n;for(let i=0;i<r;i++){let o=new K(new Y(.1,6,6),t);o.position.set(e+(i-(r-1)/2)*.14,1.45-n*.16,.08),a.add(o)}}})}else if(r===`pineapple`){let e=new X({color:`#d97706`,roughness:.4}),t=new K(new J(.36,.42,1,10),e);t.position.y=.58,t.castShadow=!0,a.add(t);for(let e=0;e<8;e++){let t=e/8*Math.PI*2,n=new K(new Vi(.11,.75,4),o);n.position.set(Math.cos(t)*.16,1.35,Math.sin(t)*.16),n.rotation.y=t,n.rotation.x=.38+e%2*.12,n.castShadow=!0,a.add(n)}}else{let e=new Z({color:`#e63946`}),t=new K(new Ui(.55,1),o);t.position.y=.5,t.castShadow=!0,a.add(t);let n=new K(new Y(.24,8,8),e);n.position.set(.3,.6,.3),a.add(n)}}this.scene.add(a),this.crops.set(e,{group:a,cropType:r,stage:i,isMature:i===4})}createBuildings(){let e=new G;e.position.set(-6,0,-26),e.userData={isMovableBuilding:!0,id:`farmhouse`,name:`البيت الريفي (Farmhouse)`},this.houseGroup=e,this.buildings3D.set(`farmhouse`,e);let t=new Z({color:`#b45309`}),n=new Z({color:`#b91c1c`}),r=new Z({color:`#475569`}),i=new Br({color:`#fef08a`}),a=new K(new q(9,5,7),t);a.position.y=2.5,a.castShadow=!0,e.add(a);let o=new K(new Vi(6.5,3.5,4),n);o.position.y=6.4,o.rotation.y=Math.PI/4,o.castShadow=!0,e.add(o);let s=new K(new q(1.2,5.5,1.2),r);s.position.set(3.2,4.5,-1.8),s.castShadow=!0,e.add(s);let c=new K(new Yi(1.4,1.4),i);c.position.set(-2,2.8,3.52),e.add(c);let l=c.clone();l.position.set(2,2.8,3.52),e.add(l),this.scene.add(e);let u=new G;u.position.set(8,0,-26),u.userData={isMovableBuilding:!0,id:`windmill`,name:`طاحونة الهواء (Windmill)`},this.millGroup=u,this.buildings3D.set(`windmill`,u);let d=new K(new J(2,3,8,8),r);d.position.y=4,d.castShadow=!0,u.add(d),this.bladesGroup=new G,this.bladesGroup.position.set(0,7.2,2.3);let f=new Z({color:`#f8fafc`});for(let e=0;e<4;e++){let t=new K(new q(.5,4.5,.08),f);t.position.y=2.25;let n=new G;n.rotation.z=Math.PI/2*e,n.add(t),this.bladesGroup.add(n)}u.add(this.bladesGroup),this.scene.add(u),this.createLivingLake(),this.staticColliders&&(this.staticColliders.push({type:`box`,minX:-10.8,maxX:-1.2,minZ:-29.8,maxZ:-22.2,id:`farmhouse`}),this.staticColliders.push({type:`circle`,x:8,z:-26,radius:3.2,id:`windmill`})),this.syncConstructedBuildings()}createLivingLake(){this.lakeGroup=new G;let e=new Yi(37,21);e.rotateX(-Math.PI/2);let t=new K(e,new X({color:`#0f172a`,roughness:.9,metalness:.1}));t.position.set(0,-.45,28),t.receiveShadow=!0,this.lakeGroup.add(t);let n=new Yi(37,21,48,32);n.rotateX(-Math.PI/2);let r=n.attributes.position,i=new Float32Array(r.count);for(let e=0;e<r.count;e++)i[e]=r.getY(e);n.userData={initialY:i,posAttr:r};let a=new K(n,new X({color:`#0284c7`,roughness:.05,metalness:.35,transparent:!0,opacity:.86}));a.position.set(0,.04,28),a.receiveShadow=!0,this.lakeMesh=a,this.lakeGroup.add(a);let o=new Z({color:`#78716c`}),s=new Z({color:`#57534e`}),c=new Z({color:`#94a3b8`}),l=[];for(let e=-18.5;e<=18.5;e+=2.5)l.push({x:e,z:17.5+(Math.random()-.5)*.8}),l.push({x:e,z:38.5+(Math.random()-.5)*.8});for(let e=18.5;e<=37.5;e+=2.5)l.push({x:-18.5+(Math.random()-.5)*.8,z:e}),l.push({x:18.5+(Math.random()-.5)*.8,z:e});l.forEach((e,t)=>{if(Math.abs(e.x)<3.2&&e.z<21)return;let n=new Ui(.45+Math.random()*.45,0),r=[o,s,c],i=new K(n,r[t%r.length]);i.position.set(e.x,.22,e.z),i.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),i.scale.set(1+Math.random()*.5,.6+Math.random()*.4,1+Math.random()*.5),i.castShadow=!0,i.receiveShadow=!0,this.lakeGroup.add(i)});let u=new G;u.position.set(0,0,24);let d=new Z({color:`#b45309`}),f=new Z({color:`#78350f`}),p=new K(new q(4.2,.22,10.5),d);p.position.y=.24,p.castShadow=!0,p.receiveShadow=!0,u.add(p);for(let e of[-1.8,1.8])for(let t of[-4,-1,2,4.8]){let n=new K(new J(.14,.16,1.8,8),f);n.position.set(e,-.2,t),n.castShadow=!0,u.add(n)}let m=new K(new J(.1,.12,2.2,8),f);m.position.set(1.7,1.1,4.8),u.add(m);let h=new K(new q(.35,.5,.35),new Br({color:`#fef08a`}));h.position.set(1.7,2.1,4.8),u.add(h);let g=new Ga(16772565,1.2,8);g.position.set(1.7,2.1,4.8),u.add(g),this.lakeGroup.add(u),this.lilyPads=[];let _=new Z({color:`#16a34a`,side:2}),v=new X({color:`#f43f5e`,roughness:.3}),y=new Br({color:`#fef08a`});[{x:-11,z:23},{x:-13,z:32},{x:-6,z:35},{x:7,z:34},{x:12,z:25},{x:10,z:31},{x:-7,z:22}].forEach((e,t)=>{let n=new G;n.position.set(e.x,.06,e.z);let r=new Bi(.65,12,0,Math.PI*1.8);r.rotateX(-Math.PI/2);let i=new K(r,_);if(n.add(i),t%2==0){for(let e=0;e<6;e++){let t=new K(new Vi(.1,.22,5),v),r=e/6*Math.PI*2;t.position.set(Math.cos(r)*.15,.1,Math.sin(r)*.15),t.rotation.x=Math.PI/5,t.rotation.y=-r,n.add(t)}let e=new K(new Y(.08,6,6),y);e.position.y=.12,n.add(e)}this.lakeGroup.add(n),this.lilyPads.push({group:n,baseX:e.x,baseZ:e.z,phase:t*1.1})}),this.lakeFish=[],[{isBig:!0,bodyColor:`#ea580c`,secondaryColor:`#fef08a`,scale:1.25,speed:1.1,tailSpeed:3.8,depth:-.18,startX:-8,startZ:26},{isBig:!0,bodyColor:`#d97706`,secondaryColor:`#ffffff`,scale:1.2,speed:1.2,tailSpeed:4,depth:-.22,startX:6,startZ:32},{isBig:!0,bodyColor:`#15803d`,secondaryColor:`#ca8a04`,scale:1.35,speed:.95,tailSpeed:3.4,depth:-.28,startX:10,startZ:24},{isBig:!0,bodyColor:`#c2410c`,secondaryColor:`#fed7aa`,scale:1.28,speed:1.05,tailSpeed:3.6,depth:-.2,startX:-5,startZ:33}].forEach(e=>{let t=this.createFishMesh(e);t.group.position.set(e.startX,e.depth,e.startZ),this.lakeGroup.add(t.group),this.lakeFish.push(t)});let b=[{body:`#0284c7`,fin:`#38bdf8`},{body:`#eab308`,fin:`#fef08a`},{body:`#ef4444`,fin:`#fca5a5`},{body:`#06b6d4`,fin:`#a5f3fc`},{body:`#f97316`,fin:`#fed7aa`},{body:`#10b981`,fin:`#6ee7b7`}];for(let e=0;e<12;e++){let t=b[e%b.length],n=this.createFishMesh({isBig:!1,bodyColor:t.body,secondaryColor:t.fin,scale:.35+Math.random()*.12,speed:1.4+Math.random()*.7,tailSpeed:7.5+Math.random()*3,depth:-.1-Math.random()*.18}),r=(Math.random()-.5)*26,i=21+Math.random()*14;n.group.position.set(r,n.depth,i),this.lakeGroup.add(n.group),this.lakeFish.push(n)}this.scene.add(this.lakeGroup)}createFishMesh({isBig:e=!1,bodyColor:t=`#ea580c`,secondaryColor:n=`#fef08a`,scale:r=1,speed:i=1,tailSpeed:a=4,depth:o=-.15}){let s=new G,c=new X({color:t,roughness:.18,metalness:.35}),l=new Vi(.32,1.15,8);l.rotateX(Math.PI/2);let u=new K(l,c);s.add(u);let d=new Y(.32,8,8);d.scale(.85,.85,1.1);let f=new K(d,c);f.position.set(0,0,.48),s.add(f);let p=new Br({color:`#f8fafc`}),m=new Br({color:`#0f172a`});for(let e of[-1,1]){let t=new K(new Y(.07,6,6),p);t.position.set(e*.24,.08,.62);let n=new K(new Y(.04,6,6),m);n.position.set(e*.26,.08,.66),s.add(t),s.add(n)}let h=new K(new q(.04,.24,.42),c);h.position.set(0,.26,.05),h.rotation.x=-.25,s.add(h);for(let e of[-1,1]){let t=new K(new q(.24,.03,.16),c);t.position.set(e*.3,-.05,.28),t.rotation.z=e*.4,t.rotation.y=e*.2,s.add(t)}let g=new G;g.position.set(0,0,-.5);let _=new K(new J(.1,.2,.35,6),c);_.rotation.x=Math.PI/2,_.position.set(0,0,-.14),g.add(_);let v=new X({color:n||t,roughness:.25,side:2,transparent:!0,opacity:.92}),y=new Or,b=new Float32Array([0,0,0,0,.28,-.42,0,-.28,-.42,0,0,0,0,.18,-.52,0,-.18,-.52]);y.setAttribute(`position`,new pr(b,3));let x=new K(y,v);return x.position.set(0,0,-.32),g.add(x),s.add(g),s.scale.set(r,r,r),{group:s,tailGroup:g,isBig:e,scale:r,speed:i,tailSpeed:a,depth:o,swimPhase:Math.random()*Math.PI*2,targetX:(Math.random()-.5)*26,targetZ:21+Math.random()*14,heading:Math.random()*Math.PI*2,turnTimer:Math.random()*2}}updateLakeWaterAndFish(e,t){if(this.lakeMesh&&this.lakeMesh.geometry&&this.lakeMesh.geometry.userData){let{initialY:e,posAttr:n}=this.lakeMesh.geometry.userData;if(n&&e){for(let r=0;r<n.count;r++){let i=n.getX(r),a=n.getZ(r),o=Math.sin(i*.42+t*2.2)*.15+Math.cos(a*.52+t*1.8)*.11+Math.sin((i+a)*.32+t*2.7)*.07;n.setY(r,e[r]+o)}n.needsUpdate=!0,this.lakeMesh.geometry.computeVertexNormals()}}if(this.lilyPads)for(let e=0;e<this.lilyPads.length;e++){let n=this.lilyPads[e],r=Math.sin(t*2+n.phase)*.06;n.group.position.y=.06+r,n.group.rotation.z=Math.sin(t*1.6+n.phase)*.05,n.group.rotation.x=Math.cos(t*1.4+n.phase)*.04}if(this.lakeFish&&this.lakeFish.length>0)for(let n=0;n<this.lakeFish.length;n++){let r=this.lakeFish[n],i=r.group.position;r.tailGroup&&(r.tailGroup.rotation.y=Math.sin(t*r.tailSpeed+r.swimPhase)*.46),r.group.rotation.z=Math.sin(t*r.tailSpeed+r.swimPhase)*.08,r.group.position.y=r.depth+Math.sin(t*1.6+r.swimPhase)*.05,r.turnTimer-=e;let a=r.targetX-i.x,o=r.targetZ-i.z;(Math.hypot(a,o)<1.8||r.turnTimer<=0)&&(r.targetX=(Math.random()-.5)*28,r.targetZ=20.5+Math.random()*15,Math.abs(r.targetX)<3&&r.targetZ<28&&(r.targetX=(Math.random()>.5?1:-1)*(5+Math.random()*8)),r.turnTimer=3+Math.random()*4);let s=Math.atan2(a,o)-r.group.rotation.y;for(;s<-Math.PI;)s+=Math.PI*2;for(;s>Math.PI;)s-=Math.PI*2;r.group.rotation.y+=s*Math.min(1,e*2.8);let c=r.speed*(r.isBig?1:1.35);i.x+=Math.sin(r.group.rotation.y)*c*e,i.z+=Math.cos(r.group.rotation.y)*c*e,i.x=Math.max(-16.5,Math.min(16.5,i.x)),i.z=Math.max(19.5,Math.min(36.5,i.z))}}initBuilderMode(){this.isBuilderMode=!1,this.builderTool=`road`,this.selectedBuilderObject=null,this.builderCamFocus=new U(0,0,0);let e=new q(1,1,1),t=new Br({color:3718648,wireframe:!0,transparent:!0,opacity:.8});this.builderHighlightMesh=new K(e,t),this.builderHighlightMesh.visible=!1,this.scene.add(this.builderHighlightMesh)}toggleBuilderMode(e){this.isBuilderMode=typeof e==`boolean`?e:!this.isBuilderMode;let t=document.getElementById(`farm-builder-bar`);this.isBuilderMode?(t&&(t.style.display=`flex`),$.click(),this.particles.addFloatingText(`🏗️ وضع تخطيط وترتيب المزرعة نشط!`,0,30,`#ffd166`,22),this.selectedBuilderObject=null,this.builderHighlightMesh&&(this.builderHighlightMesh.visible=!1),this.setBuilderTool(this.builderTool||`road`)):(t&&(t.style.display=`none`),$.click(),this.selectedBuilderObject=null,this.builderHighlightMesh&&(this.builderHighlightMesh.visible=!1),this.saveFarmLayout(),this.particles.addFloatingText(`✅ تم حفظ التخطيط بنجاح!`,0,30,`#22c55e`,22))}setBuilderTool(e){this.builderTool=e,this.selectedBuilderObject=null,this.builderHighlightMesh&&(this.builderHighlightMesh.visible=!1),document.querySelectorAll(`.b-tool-btn`).forEach(t=>{t.getAttribute(`data-tool`)===e?t.classList.add(`active`):t.classList.remove(`active`)});let t=document.getElementById(`builder-status-hint`);t&&(e===`road`?t.textContent=`🛣️ انقر أو اسحب لرصف طرق حجرية بين الحقول`:e===`erase`?t.textContent=`🧹 انقر على الطريق أو الماء لمسحه وإعادة النجيله الخضراء`:e===`water`?t.textContent=`💧 انقر على الأرض لحفر بركة مياه حقيقية بأسماك صغيرة`:e===`move_building`?t.textContent=`🏠 انقر على أي مبنى (البيت، الطاحونة، البئر..) ثم انقر لنقله`:e===`move_farm`&&(t.textContent=`🐄 انقر على أي حظيرة حيوانات ثم انقر لنقلها بالكامل`))}handleBuilderClick(e,t){let n=Math.round(e.x/2)*2,r=Math.round(e.z/2)*2;if(this.builderTool===`road`){this.addCustomRoadTile(n,r),$.tap(),this.particles.addFloatingText(`🛣️ رصف طريق`,n,r,`#f59e0b`,16);return}if(this.builderTool===`erase`){this.removeCustomTile(n,r),$.tap(),this.particles.addFloatingText(`🌱 إرجاع نجيله`,n,r,`#84cc16`,16);return}if(this.builderTool===`water`){this.addCustomWaterTile(n,r),$.water(),this.particles.addFloatingText(`💧 بركة مياه`,n,r,`#0284c7`,16);return}if(this.builderTool===`move_building`){if(this.selectedBuilderObject){this.selectedBuilderObject.position.set(n,0,r),this.updateBuildingColliders(),this.saveFarmLayout(),$.place(),this.particles.addFloatingText(`✅ تم نقل المبنى بنجاح!`,n,r,`#22c55e`,22),this.selectedBuilderObject=null,this.builderHighlightMesh&&(this.builderHighlightMesh.visible=!1);let e=document.getElementById(`builder-status-hint`);e&&(e.textContent=`🏠 تم النقل! يمكنك تحديد مبنى آخر أو اختيار أداة ثانية.`)}else{let e=t;for(;e&&!e.userData?.isMovableBuilding&&e.parent;)e=e.parent;if(e&&e.userData?.isMovableBuilding){this.selectedBuilderObject=e,this.builderHighlightMesh&&(this.builderHighlightMesh.visible=!0,this.builderHighlightMesh.position.copy(e.position),this.builderHighlightMesh.position.y+=2.5,this.builderHighlightMesh.scale.set(10,6,8)),$.click(),this.particles.addFloatingText(`📍 تم تحديد: ${e.userData.name||`المبنى`}`,e.position.x,e.position.z,`#fbbf24`,18);let t=document.getElementById(`builder-status-hint`);t&&(t.textContent=`📍 تم تحديد [${e.userData.name}] - انقر الآن على أي مكان في الأرض لنقله إليه!`)}}return}if(this.builderTool===`move_farm`){if(this.selectedBuilderObject){let e=this.selectedBuilderObject;e.position.set(n,0,r),this.updateAnimalZoneAfterMove(e,n,r),this.updateBuildingColliders(),this.saveFarmLayout(),$.place(),this.particles.addFloatingText(`✅ تم نقل الحظيرة بنجاح!`,n,r,`#22c55e`,22),this.selectedBuilderObject=null,this.builderHighlightMesh&&(this.builderHighlightMesh.visible=!1);let t=document.getElementById(`builder-status-hint`);t&&(t.textContent=`🐄 تم النقل! يمكنك نقل مزرعة أخرى أو اختيار أداة ثانية.`)}else{let e=t;for(;e&&!e.userData?.isAnimalZone&&e.parent;)e=e.parent;if(e&&e.userData?.isAnimalZone){this.selectedBuilderObject=e,this.builderHighlightMesh&&(this.builderHighlightMesh.visible=!0,this.builderHighlightMesh.position.copy(e.position),this.builderHighlightMesh.position.y+=1.5,this.builderHighlightMesh.scale.set(e.userData.width||14,3,e.userData.depth||10)),$.click(),this.particles.addFloatingText(`📍 تم تحديد مزرعة: ${e.userData.name||e.userData.type}`,e.position.x,e.position.z,`#fbbf24`,18);let t=document.getElementById(`builder-status-hint`);t&&(t.textContent=`📍 تم تحديد [مزرعة ${e.userData.name||e.userData.type}] - انقر الآن على الأرض لنقلها!`)}}return}}updateAnimalZoneAfterMove(e,t,n){let r=e.userData.type;e.userData.worldX=t,e.userData.worldZ=n;let i=this.troughStations?this.troughStations.get(r):null;i&&i.localPos&&(i.worldX=t+i.localPos.x,i.worldZ=n+i.localPos.z),this.animals3D&&this.animals3D.filter(e=>e.penType===r).forEach(e=>{e.troughLocalPos&&(e.troughWorldPos={x:t+e.troughLocalPos.x,z:n+e.troughLocalPos.z})})}updateBuildingColliders(){if(this.staticColliders=[],this.houseGroup){let e=this.houseGroup.position.x,t=this.houseGroup.position.z;this.staticColliders.push({type:`box`,minX:e-4.8,maxX:e+4.8,minZ:t-3.8,maxZ:t+3.8,id:`farmhouse`})}if(this.millGroup){let e=this.millGroup.position.x,t=this.millGroup.position.z;this.staticColliders.push({type:`circle`,x:e,z:t,radius:3.2,id:`windmill`})}this.buildings3D&&this.buildings3D.forEach((e,t)=>{if(t===`farmhouse`||t===`windmill`)return;let n=e.position.x,r=e.position.z;t===`well`?this.staticColliders.push({type:`circle`,x:n,z:r,radius:1.8,id:t}):t===`silo`?this.staticColliders.push({type:`circle`,x:n,z:r,radius:2.2,id:t}):t===`beehive`?this.staticColliders.push({type:`circle`,x:n,z:r,radius:1.2,id:t}):t===`bakery`?this.staticColliders.push({type:`box`,minX:n-3.2,maxX:n+3.2,minZ:r-2.8,maxZ:r+2.8,id:t}):t===`greenhouse`&&this.staticColliders.push({type:`box`,minX:n-4.2,maxX:n+4.2,minZ:r-3.2,maxZ:r+3.2,id:t})}),this.animalZoneObjects&&this.animalZoneObjects.forEach((e,t)=>{let n=e.userData,r=e.position.x,i=e.position.z,a=(n.width||14)/2,o=(n.depth||10)/2;this.staticColliders.push({type:`box`,minX:r-a-.2,maxX:r+a+.2,minZ:i-o-.3,maxZ:i-o+.3}),this.staticColliders.push({type:`box`,minX:r-a-.2,maxX:r+a+.2,minZ:i+o-.3,maxZ:i+o+.3}),n.gateSide===`west`?(this.staticColliders.push({type:`box`,minX:r+a-.3,maxX:r+a+.3,minZ:i-o,maxZ:i+o}),this.staticColliders.push({type:`box`,minX:r-a-.3,maxX:r-a+.3,minZ:i-o,maxZ:i-1.8}),this.staticColliders.push({type:`box`,minX:r-a-.3,maxX:r-a+.3,minZ:i+1.8,maxZ:i+o})):(this.staticColliders.push({type:`box`,minX:r-a-.3,maxX:r-a+.3,minZ:i-o,maxZ:i+o}),this.staticColliders.push({type:`box`,minX:r+a-.3,maxX:r+a+.3,minZ:i-o,maxZ:i-1.8}),this.staticColliders.push({type:`box`,minX:r+a-.3,maxX:r+a+.3,minZ:i+1.8,maxZ:i+o}))})}saveFarmLayout(){if(!this.state)return;let e=[];this.roadTiles&&this.roadTiles.size>0?this.roadTiles.forEach((t,n)=>{let[r,i]=n.split(`,`).map(Number);e.push({x:r,z:i})}):this.customRoadTiles&&this.customRoadTiles.forEach((t,n)=>{let[r,i]=n.split(`,`).map(Number);e.push({x:r,z:i})});let t=[];this.customWaterTiles.forEach((e,n)=>{let[r,i]=n.split(`,`).map(Number);t.push({x:r,z:i})});let n={};this.houseGroup&&(n.farmhouse={x:this.houseGroup.position.x,z:this.houseGroup.position.z}),this.millGroup&&(n.windmill={x:this.millGroup.position.x,z:this.millGroup.position.z}),this.buildings3D&&this.buildings3D.forEach((e,t)=>{n[t]={x:e.position.x,z:e.position.z}});let r={};this.animalZoneObjects&&this.animalZoneObjects.forEach((e,t)=>{r[t]={x:e.position.x,z:e.position.z}}),this.state.saveFarmCustomLayout({roads:e,waters:t,buildings:n,animalZones:r})}loadFarmLayout(){let e=this.state&&this.state.farmCustomLayout;if(e){if(Array.isArray(e.roads)&&e.roads.length>0&&(!this.roadTiles||this.roadTiles.size===0)&&e.roads.forEach(e=>this.createSingleRoadTileMesh(e.x,e.z)),Array.isArray(e.waters)&&e.waters.forEach(e=>this.addCustomWaterTile(e.x,e.z)),e.buildings&&(e.buildings.farmhouse&&this.houseGroup&&this.houseGroup.position.set(e.buildings.farmhouse.x,0,e.buildings.farmhouse.z),e.buildings.windmill&&this.millGroup&&this.millGroup.position.set(e.buildings.windmill.x,0,e.buildings.windmill.z),this.buildings3D))for(let[t,n]of Object.entries(e.buildings)){let e=this.buildings3D.get(t);e&&n&&e.position.set(n.x,0,n.z)}if(e.animalZones&&this.animalZoneObjects)for(let[t,n]of Object.entries(e.animalZones)){let e=this.animalZoneObjects.get(t);e&&n&&(e.position.set(n.x,0,n.z),this.updateAnimalZoneAfterMove(e,n.x,n.z))}this.updateBuildingColliders()}}resetFarmLayout(){Array.from(this.customRoadTiles.keys()).forEach(e=>{let[t,n]=e.split(`,`).map(Number);this.removeCustomTile(t,n)}),Array.from(this.customWaterTiles.keys()).forEach(e=>{let[t,n]=e.split(`,`).map(Number);this.removeCustomTile(t,n)}),this.houseGroup&&this.houseGroup.position.set(-6,0,-26),this.millGroup&&this.millGroup.position.set(8,0,-26);let e={well:{x:5.5,z:-19},silo:{x:-12.5,z:-25.5},beehive:{x:13.5,z:-22},bakery:{x:-16,z:-21},greenhouse:{x:16.5,z:-25.5}};this.buildings3D&&this.buildings3D.forEach((t,n)=>{e[n]&&t.position.set(e[n].x,0,e[n].z)});let t={chicken:{x:-27,z:-21},duck:{x:-27,z:-8},sheep:{x:-27,z:6},rabbit:{x:-27,z:19},cow:{x:27,z:-21},goat:{x:27,z:-8},horse:{x:27,z:12}};if(this.animalZoneObjects)for(let[e,n]of Object.entries(t)){let t=this.animalZoneObjects.get(e);t&&(t.position.set(n.x,0,n.z),this.updateAnimalZoneAfterMove(t,n.x,n.z))}this.updateBuildingColliders(),this.saveFarmLayout(),this.particles.addFloatingText(`🔄 تم استرجاع التخطيط الافتراضي للمزرعة!`,0,30,`#ffd166`,22),$.click()}syncConstructedBuildings(){if(this.state&&this.state.buildings){for(let[e,t]of Object.entries(this.state.buildings))if(t&&!this.buildings3D.has(e)){let t=null;e===`well`?t=this.create3DWell(5.5,-19):e===`silo`?t=this.create3DSilo(-12.5,-25.5):e===`beehive`?t=this.create3DBeehive(13.5,-22):e===`bakery`?t=this.create3DBakery(-16,-21):e===`greenhouse`&&(t=this.create3DGreenhouse(16.5,-25.5)),t&&(this.scene.add(t),this.buildings3D.set(e,t),t.scale.set(.1,.1,.1),sh.to(t.scale,{x:1,y:1,z:1,duration:.6,ease:`back.out(1.7)`}))}}}constructBuildingAction(e){return this.state&&this.state.constructBuilding(e)?(this.syncConstructedBuildings(),Eh({particleCount:65,spread:85,origin:{x:.5,y:.5}}),this.particles.addFloatingText(`تم تشييد المبنى بنجاح! 🏛️✨`,0,30,`#ffd166`,22),!0):!1}create3DWell(e,t){let n=new G;n.position.set(e,0,t);let r=new Z({color:`#64748b`}),i=new Z({color:`#78350f`}),a=new Z({color:`#b45309`}),o=new X({color:`#38bdf8`,roughness:.1,metalness:.6}),s=new K(new J(1.65,1.75,.12,16),r);s.position.y=.06,s.receiveShadow=!0,n.add(s);let c=new K(new J(1.2,1.3,1.2,12),r);c.position.y=.6,c.castShadow=!0,n.add(c);let l=new K(new Bi(1.05,12),o);l.rotation.x=-Math.PI/2,l.position.y=.95,n.add(l);for(let e of[-.9,.9]){let t=new K(new J(.08,.08,2.4,6),i);t.position.set(e,1.5,0),t.castShadow=!0,n.add(t)}let u=new K(new Vi(1.6,.9,4),a);u.position.y=2.9,u.rotation.y=Math.PI/4,u.castShadow=!0,n.add(u);let d=new K(new J(.02,.02,1.1,4),i);d.position.set(0,2,0),n.add(d);let f=new K(new J(.2,.16,.35,8),i);return f.position.set(0,1.4,0),n.add(f),this.staticColliders&&this.staticColliders.push({type:`circle`,x:e,z:t,radius:1.6,id:`well`}),n.userData={buildingType:`well`},n}create3DSilo(e,t){let n=new G;n.position.set(e,0,t);let r=new Z({color:`#94a3b8`}),i=new Z({color:`#475569`}),a=new Z({color:`#dc2626`}),o=new K(new J(2,2.2,9.5,16),r);o.position.y=4.75,o.castShadow=!0,n.add(o);for(let e of[2.5,5,7.5]){let t=new K(new Zi(2.1,.06,6,16),i);t.position.y=e,t.rotation.x=Math.PI/2,n.add(t)}let s=new K(new Vi(2.4,2.2,16),a);s.position.y=10.4,s.castShadow=!0,n.add(s);let c=new Z({color:`#334155`});for(let e=0;e<9;e++){let t=new K(new q(.6,.06,.08),c);t.position.set(0,1.2+e*.9,2.15),n.add(t)}return this.staticColliders&&this.staticColliders.push({type:`circle`,x:e,z:t,radius:2.3,id:`silo`}),n.userData={buildingType:`silo`},n}create3DBeehive(e,t){let n=new G;n.position.set(e,0,t);let r=new Z({color:`#fef08a`}),i=new Z({color:`#78350f`}),a=new Br({color:`#f59e0b`});for(let e of[-.4,.4])for(let t of[-.4,.4]){let r=new K(new J(.04,.04,.7,4),i);r.position.set(e,.35,t),n.add(r)}for(let e=0;e<3;e++){let t=new K(new q(1.1-e*.06,.4,1.1-e*.06),r);t.position.y=.85+e*.42,t.castShadow=!0,n.add(t)}let o=new K(new q(1.2,.12,1.2),i);o.position.y=2.15,n.add(o);let s=new K(new q(.4,.06,.04),i);s.position.set(0,.85,.54),n.add(s),this.beesGroup=new G;for(let e=0;e<5;e++){let t=new K(new Y(.06,4,4),a);t.position.set(Math.cos(e*1.3)*.8,1.5+Math.sin(e*1.5)*.4,Math.sin(e*1.3)*.8),this.beesGroup.add(t)}return n.add(this.beesGroup),this.staticColliders&&this.staticColliders.push({type:`circle`,x:e,z:t,radius:1.2,id:`beehive`}),n.userData={buildingType:`beehive`},n}create3DBakery(e,t){let n=new G;n.position.set(e,0,t);let r=new Z({color:`#cbd5e1`}),i=new Z({color:`#78350f`}),a=new Z({color:`#b91c1c`}),o=new Z({color:`#7f1d1d`}),s=new Br({color:`#f97316`}),c=new K(new q(6.5,4.2,5.5),r);c.position.y=2.1,c.castShadow=!0,n.add(c);let l=new K(new Vi(5.2,2.6,4),a);l.position.y=5.2,l.rotation.y=Math.PI/4,l.castShadow=!0,n.add(l);let u=new K(new q(1,4.8,1),r);u.position.set(2.2,4,-1.5),n.add(u);let d=new K(new Y(1.3,10,8),o);d.scale.set(1.1,.9,1.1),d.position.set(-4.2,1.1,.5),d.castShadow=!0,n.add(d);let f=new K(new Bi(.45,8),s);f.position.set(-4.2,.9,1.62),n.add(f);let p=new K(new q(2.5,1,1),i);return p.position.set(0,.5,3.2),p.castShadow=!0,n.add(p),this.staticColliders&&this.staticColliders.push({type:`box`,minX:e-3.5,maxX:e+3.5,minZ:t-3,maxZ:t+3,id:`bakery`}),n.userData={buildingType:`bakery`},n}create3DGreenhouse(e,t){let n=new G;n.position.set(e,0,t);let r=new Z({color:`#475569`}),i=new X({color:`#0f172a`,roughness:.3}),a=new X({color:`#e0f2fe`,transparent:!0,opacity:.35,roughness:.1,metalness:.2}),o=new Z({color:`#16a34a`}),s=new K(new q(8,.7,6),r);s.position.y=.35,s.castShadow=!0,n.add(s);let c=new K(new q(7.6,3.2,5.6),a);c.position.y=2.2,n.add(c);let l=new K(new Vi(5.2,2.2,4),a);l.position.y=4.8,l.rotation.y=Math.PI/4,n.add(l);for(let e of[-3.8,3.8])for(let t of[-2.8,2.8]){let r=new K(new q(.16,3.2,.16),i);r.position.set(e,2.2,t),n.add(r)}for(let e=0;e<6;e++){let t=new K(new Ui(.45,1),o);t.position.set((e%3-1)*2.2,1.1,e<3?-1.2:1.2),n.add(t)}return this.staticColliders&&this.staticColliders.push({type:`box`,minX:e-4.2,maxX:e+4.2,minZ:t-3.2,maxZ:t+3.2,id:`greenhouse`}),n.userData={buildingType:`greenhouse`},n}createDecorations(){[[-16,-26],[16,-26],[-28,0],[28,0],[-18,26],[18,26],[-36,-18],[36,-18],[-36,18],[36,18]].forEach(([e,t],n)=>{let r=this.create3DTree(n%2==0?`pine`:`apple`);r.position.set(e,0,t),this.scene.add(r),this.staticColliders&&this.staticColliders.push({type:`circle`,x:e,z:t,radius:.95,id:`tree`})}),this.create3DDog(),this.create3DCat(),this.createFlowerBeds(),this.createLanterns()}createFlowerBeds(){let e=new X({color:`#ef4444`,roughness:.5}),t=new X({color:`#facc15`,roughness:.5}),n=new X({color:`#ec4899`,roughness:.5}),r=new X({color:`#16a34a`,roughness:.6});[[-2.6,-14],[2.6,-14],[-2.6,14],[2.6,14],[-2.6,-3],[2.6,-3],[-2.6,3],[2.6,3],[-5,-23],[4,-23],[-16.5,-2],[16.5,-2]].forEach(([i,a],o)=>{let s=new G;s.position.set(i,0,a);for(let i=0;i<4;i++){let a=new K(new J(.03,.03,.45,6),r);a.position.set((Math.random()-.5)*.8,.22,(Math.random()-.5)*.8),s.add(a);let o=i%3==0?e:i%3==1?t:n,c=new K(new Ui(.14,1),o);c.position.set(a.position.x,.45,a.position.z),s.add(c)}this.scene.add(s)})}createLanterns(){let e=new X({color:`#451a03`,roughness:.7}),t=new X({color:`#fef08a`,roughness:.2,emissive:`#fef08a`,emissiveIntensity:.6});[[-3.2,0,-18],[3.2,0,-18],[-3.2,0,18],[3.2,0,18]].forEach(([n,r,i])=>{let a=new G;a.position.set(n,r,i);let o=new K(new J(.08,.1,2.5,8),e);o.position.y=1.25,o.castShadow=!0,a.add(o);let s=new K(new q(.3,.4,.3),t);s.position.set(0,2.4,.2),s.castShadow=!0,a.add(s);let c=new Ga(16707722,.65,10);c.position.set(0,2.4,.2),a.add(c),this.scene.add(a)})}createRealisticMeadowGrass(){let e=new Vi(.12,.8,4);e.translate(0,.4,0);let t=new X({color:`#4ade80`,roughness:.6,metalness:.05,flatShading:!0}),n=1400;this.grassMesh=new li(e,t,n),this.grassMesh.receiveShadow=!0;let r=new wn,i=0;for(let e=0;e<n;e++){let e=(Math.random()-.5)*160,t=(Math.random()-.5)*160;if(Math.abs(e)<3.8||Math.abs(t)<3.8||Math.abs(e)<17&&Math.abs(t)<17)continue;r.position.set(e,0,t);let n=.5+Math.random()*.75,a=.7+Math.random()*.6;r.scale.set(a,n,a),r.rotation.y=Math.random()*Math.PI*2,r.rotation.z=(Math.random()-.5)*.2,r.updateMatrix(),this.grassMesh.setMatrixAt(i,r.matrix),i++}this.grassMesh.count=i,this.grassMesh.instanceMatrix.needsUpdate=!0,this.scene.add(this.grassMesh)}createAtmosphericEffects(){this.smokePuffs=[];let e=new Ui(.35,1);this.smokeGroup=new G,this.smokeGroup.position.set(-2.8,7.5,-27.8);for(let t=0;t<14;t++){let n=new K(e,new Br({color:15857145,transparent:!0,opacity:.4}));n.position.set((Math.random()-.5)*.35,t*.45,(Math.random()-.5)*.35),n.userData={baseY:t*.45,speed:.75+Math.random()*.5,driftX:(Math.random()-.35)*.4,scaleRate:.16+Math.random()*.1},this.smokeGroup.add(n),this.smokePuffs.push(n)}this.scene.add(this.smokeGroup);let t=new Or,n=new Float32Array(300);for(let e=0;e<100;e++)n[e*3]=(Math.random()-.5)*75,n[e*3+1]=1+Math.random()*14,n[e*3+2]=(Math.random()-.5)*75;t.setAttribute(`position`,new pr(n,3));let r=new Di({color:16707722,size:.28,transparent:!0,opacity:.75,blending:2});this.sunMotes=new Mi(t,r),this.scene.add(this.sunMotes);let i=new Or,a=new Float32Array(2400);this.rainData=[];for(let e=0;e<400;e++){let t=(Math.random()-.5)*80,n=1+Math.random()*26,r=(Math.random()-.5)*80;a[e*6]=t,a[e*6+1]=n,a[e*6+2]=r,a[e*6+3]=t-.15,a[e*6+4]=n-1.2,a[e*6+5]=r-.15,this.rainData.push({x:t,y:n,z:r,speed:28+Math.random()*12})}i.setAttribute(`position`,new pr(a,3));let o=new mi({color:9684477,transparent:!0,opacity:.65});this.rainMesh=new Ei(i,o),this.rainMesh.visible=!1,this.scene.add(this.rainMesh);let s=new Or,c=new Float32Array(900);this.snowData=[];for(let e=0;e<300;e++){let t=(Math.random()-.5)*75,n=1+Math.random()*24,r=(Math.random()-.5)*75;c[e*3]=t,c[e*3+1]=n,c[e*3+2]=r,this.snowData.push({x:t,y:n,z:r,speed:2.2+Math.random()*1.8,sway:Math.random()*Math.PI*2})}s.setAttribute(`position`,new pr(c,3));let l=new Di({color:16777215,size:.35,transparent:!0,opacity:.85});this.snowMesh=new Mi(s,l),this.snowMesh.visible=!1,this.scene.add(this.snowMesh),this.windLeaves=[];let u=new Z({color:`#ea580c`,side:2}),d=new Yi(.35,.25);for(let e=0;e<60;e++){let e=new K(d,u);e.position.set((Math.random()-.5)*70,1+Math.random()*8,(Math.random()-.5)*70),e.userData={speedX:5.5+Math.random()*4,speedY:(Math.random()-.5)*.8,rotSpeed:(Math.random()-.5)*4},e.visible=!1,this.scene.add(e),this.windLeaves.push(e)}}updateAtmosphericEffects(e,t){let n=this.timeWeather?this.timeWeather.weather:`sunny`;if(this.smokePuffs&&this.smokePuffs.forEach(t=>{t.position.y+=t.userData.speed*e,t.position.x+=t.userData.driftX*e;let n=1+t.position.y*t.userData.scaleRate;t.scale.setScalar(n);let r=5.5,i=Math.min(1,t.position.y/r);t.material.opacity=Math.max(0,.4*(1-i)),t.position.y>r&&(t.position.y=0,t.position.x=(Math.random()-.5)*.3,t.scale.setScalar(1),t.material.opacity=.4)}),this.sunMotes&&(this.sunMotes.visible=n===`sunny`,this.sunMotes.visible)){let e=this.sunMotes.geometry.attributes.position.array;for(let n=0;n<e.length;n+=3)e[n+1]+=Math.sin(t*1.5+e[n])*.015,e[n]+=Math.cos(t*.8+e[n+2])*.01;this.sunMotes.geometry.attributes.position.needsUpdate=!0}let r=n===`rainy`||n===`stormy`;if(this.rainMesh&&(this.rainMesh.visible=r,r)){let t=this.rainMesh.geometry.attributes.position.array;for(let r=0;r<this.rainData.length;r++){let i=this.rainData[r];i.y-=i.speed*e,i.y<=0&&(i.y=24+Math.random()*4,i.x=(Math.random()-.5)*80,i.z=(Math.random()-.5)*80),t[r*6]=i.x,t[r*6+1]=i.y,t[r*6+2]=i.z,t[r*6+3]=i.x-.15,t[r*6+4]=i.y-(n===`stormy`?1.6:1.1),t[r*6+5]=i.z-.15}this.rainMesh.geometry.attributes.position.needsUpdate=!0,n===`stormy`&&this.timeWeather&&this.timeWeather.isLightning?this.sunLight&&(this.sunLight.intensity=3.6):this.sunLight&&n===`stormy`&&(this.sunLight.intensity=.55)}let i=n===`snowy`;if(this.snowMesh&&(this.snowMesh.visible=i,i)){let n=this.snowMesh.geometry.attributes.position.array;for(let r=0;r<this.snowData.length;r++){let i=this.snowData[r];i.y-=i.speed*e,i.x+=Math.sin(t+i.sway)*.04,i.y<=0&&(i.y=22+Math.random()*4,i.x=(Math.random()-.5)*75),n[r*3]=i.x,n[r*3+1]=i.y,n[r*3+2]=i.z}this.snowMesh.geometry.attributes.position.needsUpdate=!0}let a=n===`windy`;if(this.windLeaves&&this.windLeaves.forEach(n=>{n.visible=a,a&&(n.position.x+=n.userData.speedX*e,n.position.y+=Math.sin(t*2+n.position.x)*.05,n.rotation.z+=n.userData.rotSpeed*e,n.position.x>40&&(n.position.x=-40,n.position.z=(Math.random()-.5)*70,n.position.y=1+Math.random()*6))}),this.bladesGroup){let t=n===`windy`?3.5:1;this.bladesGroup.rotation.z+=.8*t*e}}petAnimal(e){if(!e)return;let t=e.userData.petType===`dog`;$.click(),Eh({particleCount:25,spread:65,origin:{x:.5,y:.5}}),sh.to(e.scale,{y:1.35,x:.85,z:.85,duration:.15,yoyo:!0,repeat:1,ease:`back.out(2)`}),this.state.energy=Math.min(this.state.maxEnergy,this.state.energy+5),this.state.addXp(5),this.state.notify();let n=t?`مسحت على الكلب الوفي! 🐶 (+5 طاقة)`:`داعبت القطة الكيوت! 🐱 (+5 طاقة)`;this.particles.addFloatingText(n,e.position.x,25,`#fbbf24`,20)}create3DTree(e=`pine`){let t=new G,n=new Z({color:`#78350f`}),r=new K(new J(.3,.45,2.5,8),n);if(r.position.y=1.25,r.castShadow=!0,t.add(r),e===`pine`){let e=new Z({color:`#14532d`});for(let n=0;n<3;n++){let r=new K(new Vi(2.4-n*.5,2.2,8),e);r.position.y=2.4+n*1.3,r.castShadow=!0,t.add(r)}}else{let e=new Z({color:`#15803d`}),n=new K(new Ui(2,1),e);n.position.y=3.2,n.castShadow=!0,t.add(n);let r=new Z({color:`#ef4444`});for(let e=0;e<5;e++){let e=new K(new Y(.25,6,6),r);e.position.set((Math.random()-.5)*2,2.8+Math.random()*1.2,(Math.random()-.5)*2),t.add(e)}}return t}initEvents(){this.keys={},this.groundPlane=new Mr(new U(0,1,0),0),this.planeIntersection=new U,this.isPointerDown=!1,this.isDragMoving=!1,this.pointerDownTime=0,this.pointerDownPos={x:0,y:0},this.targetMovePoint=null,window.addEventListener(`keydown`,e=>{this.keys[e.code]=!0,e.key>=`1`&&e.key<=`9`?(this.state.selectedSlot=parseInt(e.key,10)-1,this.state.notify(),$.click(),this.updateCursorStyle()):e.key===`0`&&(this.state.selectedSlot=9,this.state.notify(),$.click(),this.updateCursorStyle()),(e.code===`KeyE`||e.code===`Space`)&&(e.preventDefault(),this.interactCurrentHover()),e.code===`KeyB`&&this.toggleBuilderMode(),e.code===`KeyQ`?this.rotateIsometricAngle(-1):e.code===`KeyR`&&this.rotateIsometricAngle(1),e.code===`KeyP`&&this.cyclePixelArtScale(),e.code===`KeyV`&&this.toggleCameraProjection()}),window.addEventListener(`keyup`,e=>{this.keys[e.code]=!1}),window.addEventListener(`resize`,()=>this.onResize());let e=(e,t)=>{this.mouse.x=e/window.innerWidth*2-1,this.mouse.y=-(t/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera),this.raycaster.ray.intersectPlane(this.groundPlane,this.planeIntersection)&&(this.targetMovePoint||=new U,this.targetMovePoint.copy(this.planeIntersection))};this.canvas.addEventListener(`pointerdown`,t=>{if(t.button!==0)return;if($.init(),Ch.play(),this.isBuilderMode){this.raycaster.setFromCamera(this.mouse,this.camera);let e=this.raycaster.intersectObjects(this.scene.children,!0),t=null;for(let n of e)if(n.object!==this.groundMesh&&n.object!==this.cursorMesh&&n.object!==this.builderHighlightMesh){t=n.object;break}this.planeIntersection&&this.handleBuilderClick(this.planeIntersection,t),(this.builderTool===`road`||this.builderTool===`erase`||this.builderTool===`water`)&&(this.isBuilderPainting=!0);return}if(this.isRoadEditMode){e(t.clientX,t.clientY),this.handleRoadEditClick(t);return}if(this.isPlacingNewPlotMode){if(e(t.clientX,t.clientY),this.planeIntersection){let e=Math.round(this.planeIntersection.x/1.3)*1.3,t=Math.round(this.planeIntersection.z/1.3)*1.3;this.buyAndPlacePlotAt(e,t)}return}if(this.isMovingPlotMode){this.handlePlotMoveInteraction();return}if(this.isFarmerWalkMode){this.isPointerDown=!0,this.isDragMoving=!1,this.pointerDownTime=performance.now(),this.pointerDownPos={x:t.clientX,y:t.clientY},e(t.clientX,t.clientY);return}this.raycaster.setFromCamera(this.mouse,this.camera);let n=this.raycaster.intersectObjects(this.scene.children,!0),r=null;for(let e of n){let t=e.object;if(!(t===this.cursorMesh||t===this.plotGhostBox||t===this.plotPlacementGhost||t?.userData?.isHelper)){for(t.userData?.rootPlot&&(t=t.userData.rootPlot);t&&!this.isInteractiveObject(t)&&t.parent&&t.parent!==this.scene;){if(t.userData?.rootPlot){t=t.userData.rootPlot;break}t=t.parent}if(this.isInteractiveObject(t)){r=t;break}}}if(r){this.hoveredObject=r,this.interactCurrentHover();return}}),window.addEventListener(`pointermove`,t=>{this.mouse.x=t.clientX/window.innerWidth*2-1,this.mouse.y=-(t.clientY/window.innerHeight)*2+1;let n=window.innerWidth,r=window.innerHeight,i=this.edgePanMargin||38,a=0,o=0,s=document.getElementById(`modal-overlay`)?.classList.contains(`hidden`)===!1,c=t.target&&t.target.closest(`#modal-overlay, #stardew-right-hud, #bottom-hud-container, .plot-move-banner`)!==null;if(!s&&!c&&(t.clientX<=i&&t.clientX>=0?a=-1:t.clientX>=n-i&&t.clientX<=n&&(a=1),t.clientY<=i&&t.clientY>=0?o=1:t.clientY>=r-i&&t.clientY<=r&&(o=-1)),this.edgePanDir.set(a,o),this.isEdgePanning=a!==0||o!==0,this.isBuilderMode){e(t.clientX,t.clientY),this.isBuilderPainting&&this.planeIntersection&&this.handleBuilderClick(this.planeIntersection,null);return}if(this.isRoadEditMode){e(t.clientX,t.clientY),this.updateRoadEditHover();return}if(this.isPlacingNewPlotMode&&this.plotPlacementGhost){if(e(t.clientX,t.clientY),this.planeIntersection){let e=Math.round(this.planeIntersection.x/1.3)*1.3,t=Math.round(this.planeIntersection.z/1.3)*1.3;this.plotPlacementGhost.position.set(e,.18,t),this.plotPlacementGhost.visible=!0;let n=this.canPlacePlotAt(e,t,`__new__`)&&this.state.coins>=50;this.plotPlacementGhost.material.color.setHex(n?2278750:15680580)}return}if(this.isMovingPlotMode&&this.selectedPlotToMove){if(e(t.clientX,t.clientY),this.planeIntersection&&this.plotGhostBox){let e=Math.round(this.planeIntersection.x/1.3)*1.3,t=Math.round(this.planeIntersection.z/1.3)*1.3;this.plotGhostBox.position.set(e,.16,t),this.plotGhostBox.visible=!0;let n=this.canPlacePlotAt(e,t,this.selectedPlotToMove.userData.key);this.plotGhostBox.material.color.setHex(n?2278750:15680580)}return}if(this.isFarmerWalkMode&&this.isPointerDown){let n=Math.hypot(t.clientX-this.pointerDownPos.x,t.clientY-this.pointerDownPos.y),r=performance.now()-this.pointerDownTime;(n>6||r>140)&&(this.isDragMoving=!0,this.moveIndicator&&(this.moveIndicator.visible=!0)),e(t.clientX,t.clientY),this.isDragMoving&&this.targetMovePoint&&this.moveIndicator&&this.moveIndicator.position.set(this.targetMovePoint.x,.08,this.targetMovePoint.z)}}),window.addEventListener(`pointerup`,e=>{if(this.isBuilderMode){this.isBuilderPainting=!1,this.isPointerDown=!1;return}this.isPointerDown&&(this.isPointerDown=!1,this.isDragMoving=!1,this.targetMovePoint=null,this.moveIndicator&&(this.moveIndicator.visible=!1))}),window.addEventListener(`pointercancel`,()=>{this.isBuilderPainting=!1,this.isPointerDown=!1,this.isDragMoving=!1,this.targetMovePoint=null,this.moveIndicator&&(this.moveIndicator.visible=!1),this.edgePanDir.set(0,0),this.isEdgePanning=!1}),window.addEventListener(`pointerleave`,()=>{this.edgePanDir.set(0,0),this.isEdgePanning=!1}),this.canvas.addEventListener(`wheel`,e=>{e.preventDefault();let t=e.deltaY*.03;this.isOrthographic?(this.frustumSize=Math.max(16,Math.min(58,this.frustumSize+t)),this.updateCameraFrustum()):(this.cameraDistance=Math.max(16,Math.min(54,this.cameraDistance+t)),this.cameraHeight=this.cameraDistance*(26/32))},{passive:!1})}onResize(){this.updateCameraFrustum(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.composer&&this.composer.setSize(window.innerWidth,window.innerHeight),this.pixelPass&&this.pixelPass.setSize(window.innerWidth,window.innerHeight)}interactCurrentHover(){if(!this.hoveredObject)return;let e=this.hoveredObject.userData;if(e.isTrough){this.fillTroughStation(e);return}if(e.isAnimal){$.click();let t=e.type||`cow`;$.animal&&$.animal(t),this.particles.addHeart(this.hoveredObject.position.x,this.hoveredObject.position.z),this.particles.addFloatingText(`داعبت الحيوان بسعادة! ❤️ (+3 طاقة)`,this.hoveredObject.position.x,25,`#fbbf24`,20),this.state.energy=Math.min(this.state.maxEnergy,this.state.energy+3),this.state.notify(),sh.to(this.hoveredObject.scale,{y:1.25,duration:.15,yoyo:!0,repeat:1});return}if(e.isPet){this.petAnimal(this.hoveredObject);return}if(e.isExpansionSign){this.expandFarmingPlots();return}if(e.isLockTrigger){this.unlockAnimalFarm(e.farmType);return}let t=this.hoveredObject;for(t&&t.userData&&(t.userData.rootPlot||t.userData.plotGroup)&&(t=t.userData.rootPlot||t.userData.plotGroup);t&&!t.userData.isPlot&&t.parent&&t.parent!==this.scene;){if(t.userData&&(t.userData.rootPlot||t.userData.plotGroup)){t=t.userData.rootPlot||t.userData.plotGroup;break}t=t.parent}if(t&&t.userData&&t.userData.isPlot){let e=t.userData,n=e.key,r=t.position,i=this.crops.get(n),a=this.state.getSelectedItem(),o=a&&(a.id===`hoe`||a.type===`tool_hoe`),s=a&&(a.id===`water`||a.type===`tool_water`),c=a&&(a.id===`harvest`||a.id===`scythe`||a.type===`tool_scythe`),l=a&&a.type===`seed`&&a.count>0;if(i&&i.isMature){if(c){this.scene.remove(i.group),this.crops.delete(n);let e=uh[i.cropType]||{sellPrice:25,xp:15,name:i.cropType};$.harvest(),Eh({particleCount:30,spread:70,origin:{x:.5,y:.6}}),this.state.addHarvestedItem(i.cropType,1),this.state.addCoins(e.sellPrice),this.state.addXp(e.xp),this.particles.addFloatingText(`+1 حصاد ${e.name}! 🌾 (+${e.sellPrice} G)`,r.x,25,`#ffd166`,20),this.updateActiveCropsHUD();return}$.click(),this.particles.addFloatingText(`اختر منجل الحصاد 🌾 من الشريط بالأسفل لحصاد المحصول!`,r.x,25,`#fbbf24`,18);return}if(i&&!i.isMature){if(s&&e.state===`tilled`){e.state=`watered`,e.soilMesh?e.soilMesh.material=this.soilWetMat:t.material=this.soilWetMat,$.water(),this.state.useEnergy(.2),this.particles.addWaterSplash(r.x,r.z),this.particles.addFloatingText(`سقيت النبتة! 💧`,r.x,25,`#38bdf8`,16);return}{let e=uh[i.cropType]||{name:i.cropType},t=Math.min(99,Math.round(i.growthTimer/i.growthTime*100));this.particles.addFloatingText(`${e.name}: في مرحلة النمو 🌱 (${t}%)`,r.x,25,`#86efac`,16);return}}if(e.state===`grass`){if(o){e.state=`tilled`,e.soilMesh?e.soilMesh.material=this.soilDryMat:t.material=this.soilDryMat,e.furrows&&e.furrows.forEach(e=>{e.visible=!0,e.material=this.soilDryMat}),$.till(),this.state.useEnergy(.3),this.particles.addDirtBurst(r.x,r.z),this.particles.addFloatingText(`حرثت الأرض! ⛏️`,r.x,25,`#a16207`,16);return}$.click(),this.particles.addFloatingText(`اختر الفأس ⛏️ لحرث هذا الحوض!`,r.x,25,`#fed7aa`,18);return}if(e.state===`tilled`&&!i&&s){e.state=`watered`,e.soilMesh?e.soilMesh.material=this.soilWetMat:t.material=this.soilWetMat,e.furrows&&e.furrows.forEach(e=>{e.visible=!0,e.material=this.soilWetMat}),$.water(),this.state.useEnergy(.2),this.particles.addWaterSplash(r.x,r.z),this.particles.addFloatingText(`سقيت التربة! 💧`,r.x,25,`#38bdf8`,16);return}if((e.state===`tilled`||e.state===`watered`)&&!i){if(l){let e=a.cropId||a.id;this.plantCrop3D(n,r.x,r.z,e,0),$.plant(),this.state.useSelectedItem(),this.state.useEnergy(.2);let t=uh[e],i=t?t.name:e;this.particles.addFloatingText(`زرعت ${i}! 🌱`,r.x,25,`#4ade80`,16),this.updateActiveCropsHUD();return}if(!s&&!o){$.click(),this.particles.addFloatingText(`اختر بذوراً من الخانات 🌱 للزراعة!`,r.x,25,`#86efac`,18);return}}}}get farmer(){let e=this.farmerGroup?this.farmerGroup.position:{x:0,y:0,z:0};return{x:e.x,y:e.z,position:e,getTargetTile:()=>this.getTargetTileInFrontOfFarmer(),triggerAction:e=>this.triggerFarmerAction(e)}}get tileMap(){return{till:(e,t)=>this.tillPlot(e,t),water:(e,t)=>this.waterPlot(e,t)}}get cropsManager(){return{plant:(e,t,n)=>this.plantSeedAt(e,t,n),getCrop:(e,t)=>this.getCropAt(e,t),harvest:(e,t)=>this.harvestCropAt(e,t)}}get animalsManager(){return{addAnimal:e=>this.add3DAnimal(e)}}getTargetTileInFrontOfFarmer(){let e=this.farmerGroup?this.farmerGroup.position:{x:0,z:0},t=null,n=1/0;for(let[r,i]of this.plotObjects.entries()){let a=Math.hypot(i.position.x-e.x,i.position.z-e.z);a<n&&(n=a,t=r)}if(t){let[e,n]=t.split(`,`).map(Number);return{col:e,row:n}}return{col:0,row:0}}triggerFarmerAction(e){this.farmerGroup&&(sh.to(this.farmerGroup.position,{y:.35,duration:.12,yoyo:!0,repeat:1,ease:`power2.out`}),this.rightArm&&sh.to(this.rightArm.rotation,{x:-1.2,duration:.14,yoyo:!0,repeat:1,ease:`power2.inOut`}))}findBestPlotForAction(e){if(this.hoveredObject&&this.hoveredObject.userData&&this.hoveredObject.userData.isPlot)return this.hoveredObject;let t=this.farmerGroup?this.farmerGroup.position:{x:0,z:0},n=null,r=1/0;for(let i of this.plotObjects.values()){let a=i.userData.key,o=this.crops.get(a),s=i.userData.state,c=!1;(e===`till`&&s===`grass`||e===`water`&&s===`tilled`||e===`plant`&&(s===`tilled`||s===`watered`)&&!o||e===`harvest`&&o&&o.isMature||e===`any`)&&(c=!0);let l=Math.hypot(i.position.x-t.x,i.position.z-t.z);c&&l<r&&(r=l,n=i)}if(!n){r=1/0;for(let e of this.plotObjects.values()){let i=Math.hypot(e.position.x-t.x,e.position.z-t.z);i<r&&(r=i,n=e)}}return n}tillAction(){let e=this.findBestPlotForAction(`till`);e&&this.tillPlotByKey(e.userData.key)}waterAction(){let e=this.findBestPlotForAction(`water`);e&&this.waterPlotByKey(e.userData.key)}plantAction(e){let t=this.findBestPlotForAction(`plant`);if(t){let n=this.state.getSelectedItem(),r=e||(n&&n.type===`seed`&&n.count>0?n.cropId||n.id:`carrot`);this.plantSeedByKey(t.userData.key,r)}}harvestAction(){let e=this.findBestPlotForAction(`harvest`);e&&this.harvestPlotByKey(e.userData.key)}tillPlot(e,t){return this.tillPlotByKey(`${e},${t}`)}tillPlotByKey(e){let t=this.plotObjects.get(e);return t?(t.userData.state=`tilled`,t.userData.soilMesh?t.userData.soilMesh.material=this.soilDryMat:t.material&&=this.soilDryMat,t.userData.furrows&&t.userData.furrows.forEach(e=>{e.visible=!0,e.material=this.soilDryMat}),$.till(),this.state.useEnergy(.3),this.particles.addDirtBurst(t.position.x,t.position.z),this.particles.addFloatingText(`تم الحرث! ⛏️`,t.position.x,25,`#ffd166`,18),this.triggerFarmerAction(`till`),!0):!1}waterPlot(e,t){return this.waterPlotByKey(`${e},${t}`)}waterPlotByKey(e){let t=this.plotObjects.get(e);return t?this.state.useWater()?(t.userData.state=`watered`,t.userData.soilMesh?t.userData.soilMesh.material=this.soilWetMat:t.material&&=this.soilWetMat,t.userData.furrows&&t.userData.furrows.forEach(e=>{e.visible=!0,e.material=this.soilWetMat}),$.water(),this.particles.addWaterSplash(t.position.x,t.position.z),this.particles.addFloatingText(`تم الري! 💧`,t.position.x,25,`#38bdf8`,18),this.triggerFarmerAction(`water`),!0):(this.particles.addFloatingText(`المرشة فارغة! 💧`,t.position.x,25,`#ef4444`,18),!1):!1}plantSeedAt(e,t,n){return this.plantSeedByKey(`${e},${t}`,n)}plantSeedByKey(e,t=`corn`){let n=this.plotObjects.get(e);if(!n||this.crops.has(e))return!1;n.userData.state===`grass`&&this.tillPlotByKey(e),this.plantCrop3D(e,n.position.x,n.position.z,t,0),$.plant(),this.state.consumeItem(t,1),this.state.useEnergy(.2);let r=uh[t],i=r?r.name:t;return this.particles.addFloatingText(`زرعت ${i}! 🌱`,n.position.x,25,`#4ade80`,18),this.triggerFarmerAction(`plant`),this.updateActiveCropsHUD(),!0}getCropAt(e,t){return this.crops.get(`${e},${t}`)||null}harvestCropAt(e,t){return this.harvestPlotByKey(`${e},${t}`)}harvestPlotByKey(e){let t=this.crops.get(e);if(!t||!t.isMature)return null;let n=this.plotObjects.get(e),r=n?n.position.x:0;this.scene.remove(t.group),this.crops.delete(e);let i=uh[t.cropType]||{sellPrice:25,xp:15,name:t.cropType};return $.harvest(),Eh({particleCount:35,spread:75,origin:{x:.5,y:.6}}),this.state.addHarvestedItem(t.cropType,1),this.state.addCoins(i.sellPrice),this.state.addXp(i.xp),this.particles.addFloatingText(`+${i.sellPrice} G (${i.name}) 🌾`,r,25,`#ffd166`,22),n&&(n.userData.state=`tilled`,n.userData.soilMesh?n.userData.soilMesh.material=this.soilDryMat:n.material&&=this.soilDryMat,n.userData.furrows&&n.userData.furrows.forEach(e=>{e.visible=!0,e.material=this.soilDryMat})),this.triggerFarmerAction(`harvest`),this.updateActiveCropsHUD(),{type:t.cropType,sellPrice:i.sellPrice}}add3DAnimal(e){if(this.unlockedFarms[e]){let t=this.animalZoneObjects.get(e);if(t){let n=null;e===`chicken`?n=this.create3DChicken(`hen`):e===`cow`?n=this.create3DCow():e===`sheep`?n=this.create3DSheep():e===`horse`&&(n=this.create3DHorse()),n&&(n.position.set((Math.random()-.5)*8,0,(Math.random()-.5)*5),t.add(n),this.animals3D.push({mesh:n,type:e,speed:1.2,timer:3}))}}else{this.unlockedFarms[e]=!0;let t=this.animalZoneObjects.get(e);if(t){let n=t.position.clone();this.scene.remove(t),this.createZone(e,n.x,n.z,ph[e])}}}updateCrops(e){let t=this.timeWeather?this.timeWeather.weather:`sunny`,n=t===`stormy`,r=t===`rainy`||n,i=this.state&&this.state.isBuildingConstructed(`greenhouse`);if(r&&(this.rainWaterTimer=(this.rainWaterTimer||0)+e,this.rainWaterTimer>=1.5)){this.rainWaterTimer=0;for(let[e,t]of this.plotObjects.entries())t.userData.state===`tilled`&&this.waterPlotByKey(e)}for(let[t,r]of this.crops.entries()){if(r.isMature)continue;let a=this.plotObjects.get(t),o=a&&a.userData.state===`watered`?2:1;n&&(o*=1.5),i&&(o*=1.4),r.growthTimer=(r.growthTimer||0)+e*o;let s=((uh[r.cropType]||{growthTime:15}).growthTime||15)/4;if(r.growthTimer>=s){r.growthTimer=0,r.stage++;let e=a?a.position:{x:0,z:0};this.scene.remove(r.group),this.plantCrop3D(t,e.x,e.z,r.cropType,r.stage),r.stage>=4&&(r.isMature=!0,this.particles.addFloatingText(`نضج المحصول! 🌾`,e.x,25,`#ffd166`,18),$.pop()),this.updateActiveCropsHUD()}}this.cropHudTimer=(this.cropHudTimer||0)+e,this.cropHudTimer>=.35&&(this.cropHudTimer=0,this.updateActiveCropsHUD())}updateActiveCropsHUD(){let e=document.getElementById(`active-crops-list`),t=document.getElementById(`active-crops-total`);if(!e)return;let n=document.getElementById(`mobile-crop-badge`);if(!this.crops||this.crops.size===0){t&&(t.textContent=`0`),n&&(n.textContent=`0`),e.innerHTML=`
        <div class="empty-crops-msg">
          <span class="empty-msg-icon">🌱</span>
          <div class="empty-msg-title">لا توجد محاصيل مزروعة</div>
          <div class="empty-msg-hint">ازرع بذور الذرة لتبدأ الإنتاج!</div>
        </div>
      `;return}t&&(t.textContent=this.crops.size.toString()),n&&(n.textContent=this.crops.size.toString());let r=new Map;for(let[e,t]of this.crops.entries()){let e=t.cropType,n=uh[e]||{name:e,icon:`🌱`,growthTime:15},i=n.growthTime||15,a=i/4,o=(t.stage||0)*a+(t.growthTimer||0),s=t.isMature?0:Math.max(0,i-o),c=t.isMature?100:Math.min(99,Math.round(o/i*100));r.has(e)||r.set(e,{type:e,name:n.name||e,icon:n.icon||`🌱`,count:0,readyCount:0,minRemaining:1/0,maxProgress:0,totalGrowthTime:i});let l=r.get(e);l.count++,t.isMature&&l.readyCount++,s<l.minRemaining&&(l.minRemaining=s),c>l.maxProgress&&(l.maxProgress=c)}let i=``;for(let e of r.values()){let t=e.readyCount>0,n=e.readyCount===e.count,r=``;if(n)r=`<span class="status-badge ready">جاهز للحصاد! ✨</span>`;else if(t)r=`<span class="status-badge ready">${e.readyCount} جاهز!</span> <span class="status-time">باقي ${Math.ceil(e.minRemaining)}ث</span>`;else{let t=Math.floor(e.minRemaining/60),n=Math.ceil(e.minRemaining%60);r=`<span class="status-time">متبقي: <b>${t>0?`${t}:${n<10?`0`:``}${n}`:`${n} ثانية`}</b></span>`}let a=n||t?100:Math.max(8,e.maxProgress);i+=`
        <div class="${n?`active-crop-card ready-glow`:t?`active-crop-card partial-ready`:`active-crop-card`}" data-crop="${e.type}">
          <div class="crop-card-top">
            <div class="crop-card-main">
              <span class="crop-card-icon">${e.icon}</span>
              <div class="crop-card-details">
                <span class="crop-card-title">${e.name}</span>
                <div class="crop-card-status">${r}</div>
              </div>
            </div>
            <span class="crop-card-count">×${e.count}</span>
          </div>
          <div class="crop-card-meter">
            <div class="crop-card-meter-fill ${n?`mature`:``}" style="width: ${a}%"></div>
          </div>
        </div>
      `}e.innerHTML=i}updateLightingFromTime(){if(!this.timeWeather)return;let e=this.timeWeather.getHourFloat(),t=(e-6)/12*Math.PI;this.sunLight.position.x=Math.cos(t)*45,this.sunLight.position.y=Math.max(8,Math.sin(t)*50),e>=5&&e<8?(this.sunLight.color.setHex(16759418),this.sunLight.intensity=1):e>=8&&e<17?(this.sunLight.color.setHex(16775920),this.sunLight.intensity=1.35):e>=17&&e<20?(this.sunLight.color.setHex(16347926),this.sunLight.intensity=1.1):(this.sunLight.color.setHex(9684477),this.sunLight.intensity=.4)}start(){this.isRunning=!0,this.animate()}stop(){this.isRunning=!1}animate(){if(this.isRunning)try{let e=performance.now(),t=Math.min((e-this.lastTime)/1e3,.1);this.lastTime=e,this.elapsedTime+=t;let n=this.elapsedTime;if(this.bladesGroup&&(this.bladesGroup.rotation.z+=t*1.5),this.updateLakeWaterAndFish(t,n),this.updateMeadowGrass(n),this.updateFarmerMovement(t),this.updateFarmerToolDisplay(),this.updateAnimals(t,n),this.updatePets(t,n),this.timeWeather&&(this.timeWeather.update(t),this.updateLightingFromTime()),this.updateCrops(t),this.updateAtmosphericEffects(t,n),this.isBuilderMode){let e=this.builderCamFocus?this.builderCamFocus.x:0,t=this.builderCamFocus?this.builderCamFocus.z:0,n=this.isIsometric?Math.sin(this.isoAngle)*(this.cameraDistance*1.25):0,r=this.isIsometric?Math.cos(this.isoAngle)*(this.cameraDistance*1.25):38,i=e+n,a=t+r;this.camera.position.x+=(i-this.camera.position.x)*.08,this.camera.position.y+=(34-this.camera.position.y)*.08,this.camera.position.z+=(a-this.camera.position.z)*.08,this.camera.lookAt(e,0,t)}else{if(this.isEdgePanning&&(this.edgePanDir.x!==0||this.edgePanDir.y!==0)){let e=new U(1,0,0).applyQuaternion(this.camera.quaternion);e.y=0,e.normalize();let n=new U(0,1,0).applyQuaternion(this.camera.quaternion);n.y=0,n.normalize();let r=new U;this.edgePanDir.x!==0&&r.addScaledVector(e,this.edgePanDir.x),this.edgePanDir.y!==0&&r.addScaledVector(n,this.edgePanDir.y),this.cameraFocusPoint.addScaledVector(r,this.edgePanSpeed*t),this.cameraFocusPoint.x=Et.clamp(this.cameraFocusPoint.x,-38,38),this.cameraFocusPoint.z=Et.clamp(this.cameraFocusPoint.z,-36,36)}else(this.farmer&&this.farmer.isMoving||this.isPointerDown||this.isDragMoving||this.targetMovePoint||this.keys.KeyW||this.keys.KeyA||this.keys.KeyS||this.keys.KeyD||this.keys.ArrowUp||this.keys.ArrowLeft||this.keys.ArrowDown||this.keys.ArrowRight)&&this.farmerGroup&&this.cameraFocusPoint.lerp(this.farmerGroup.position,.08);let e=this.cameraFocusPoint.x,n=this.farmerGroup?this.farmerGroup.position.y:0,r=this.cameraFocusPoint.z,i=this.isIsometric?Math.sin(this.isoAngle)*this.cameraDistance:0,a=this.isIsometric?Math.cos(this.isoAngle)*this.cameraDistance:this.cameraDistance,o=e+i,s=n+this.cameraHeight,c=r+a;this.camera.position.x+=(o-this.camera.position.x)*.12,this.camera.position.y+=(s-this.camera.position.y)*.12,this.camera.position.z+=(c-this.camera.position.z)*.12,this.camera.lookAt(e,n+1.1,r)}this.updateRaycasting(),this.composer?this.composer.render():this.renderer.render(this.scene,this.camera)}catch(e){console.error(`Three.js render error caught:`,e)}finally{requestAnimationFrame(()=>this.animate())}}isBlocked(e,t,n=.52){if(e<-36.5||e>36.5||t<-34.5||t>34.5||t+n>19.4&&t-n<37&&Math.abs(e)<17.5&&!(Math.abs(e)<=2.1&&t<=28.5))return!0;if(this.customWaterTiles&&this.customWaterTiles.size>0){let n=Math.round(e/2)*2,r=Math.round(t/2)*2;if(this.customWaterTiles.has(`${n},${r}`))return!0}if(this.staticColliders&&this.staticColliders.length>0)for(let r=0;r<this.staticColliders.length;r++){let i=this.staticColliders[r];if(i.type===`box`){let r=Math.max(i.minX,Math.min(e,i.maxX)),a=Math.max(i.minZ,Math.min(t,i.maxZ)),o=e-r,s=t-a;if(o*o+s*s<n*n)return!0}else if(i.type===`circle`){let r=e-i.x,a=t-i.z,o=n+i.radius;if(r*r+a*a<o*o)return!0}}return!1}updateFarmerMovement(e){if(this.isBuilderMode)return;let t=0,n=0,r=this.keys.KeyW||this.keys.ArrowUp?1:0,i=this.keys.KeyS||this.keys.ArrowDown?1:0,a=this.keys.KeyA||this.keys.ArrowLeft?1:0,o=this.keys.KeyD||this.keys.ArrowRight?1:0,s=i-r,c=o-a,l=c!==0||s!==0;if(l){if(this.isIsometric){let e=Math.sin(this.isoAngle),r=Math.cos(this.isoAngle);t=s*e+c*r,n=s*r-c*e}else t=c,n=s}let u=l;if(!u&&this.isFarmerWalkMode&&this.isPointerDown&&this.targetMovePoint){let r=this.targetMovePoint.x-this.farmerGroup.position.x,i=this.targetMovePoint.z-this.farmerGroup.position.z,a=Math.hypot(r,i);if(a>.45){t=r/a,n=i/a,u=!0;let o=Math.atan2(t,n)-this.farmerGroup.rotation.y;for(;o<-Math.PI;)o+=Math.PI*2;for(;o>Math.PI;)o-=Math.PI*2;if(this.farmerGroup.rotation.y+=o*Math.min(1,e*14),this.moveIndicator&&this.moveIndicator.visible){let e=1+Math.sin(this.elapsedTime*10)*.15;this.moveIndicator.scale.set(e,e,e)}}}if(u){let r=Math.hypot(t,n);r>.001&&(t/=r,n/=r);let i=this.isRiding?this.farmerSpeed*2.5:this.farmerSpeed,a=t*i*e,o=n*i*e,s=.52,c=this.farmerGroup.position.x,u=this.farmerGroup.position.z;if(this.isBlocked(c+a,u+o,s)?(this.isBlocked(c+a,u,s)||(this.farmerGroup.position.x+=a),this.isBlocked(this.farmerGroup.position.x,u+o,s)||(this.farmerGroup.position.z+=o)):(this.farmerGroup.position.x+=a,this.farmerGroup.position.z+=o),l){let r=Math.atan2(t,n)-this.farmerGroup.rotation.y;for(;r<-Math.PI;)r+=Math.PI*2;for(;r>Math.PI;)r-=Math.PI*2;this.farmerGroup.rotation.y+=r*Math.min(1,e*16)}if(this.isTPose)this.leftArm&&this.leftArm.rotation.set(0,0,Math.PI/2),this.rightArm&&this.rightArm.rotation.set(0,0,-Math.PI/2),this.leftLeg&&this.leftLeg.rotation.set(0,0,0),this.rightLeg&&this.rightLeg.rotation.set(0,0,0),this.farmerBodyGroup&&(this.farmerBodyGroup.position.y=0);else{let e=Math.sin(this.elapsedTime*13),t=e*.55;this.leftLeg&&this.rightLeg&&(this.leftLeg.rotation.x=t,this.rightLeg.rotation.x=-t),this.leftArm&&this.rightArm&&(this.leftArm.rotation.x=-t*.8,this.leftArm.rotation.z=-.16,this.rightArm.rotation.x=t*.8,this.rightArm.rotation.z=.16),this.farmerBodyGroup&&(this.farmerBodyGroup.position.y=Math.abs(e)*.08)}}else this.isTPose?(this.leftArm&&this.leftArm.rotation.set(0,0,Math.PI/2),this.rightArm&&this.rightArm.rotation.set(0,0,-Math.PI/2),this.leftLeg&&this.leftLeg.rotation.set(0,0,0),this.rightLeg&&this.rightLeg.rotation.set(0,0,0),this.farmerBodyGroup&&(this.farmerBodyGroup.position.y=0)):(this.leftLeg&&this.rightLeg&&(this.leftLeg.rotation.set(0,0,0),this.rightLeg.rotation.set(0,0,0)),this.leftArm&&this.rightArm&&(this.leftArm.rotation.set(0,0,-.16),this.rightArm.rotation.set(0,0,.16)),this.farmerBodyGroup&&(this.farmerBodyGroup.position.y=0))}updateAnimals(e,t){if(!this.animals3D||this.animals3D.length===0)return;this.animals3D.forEach((n,r)=>{let i=n.mesh.userData,a=this.troughStations?this.troughStations.get(n.penType):null,o=n.localBounds||{minX:-5,maxX:5,minZ:-3.5,maxZ:3.5};if(n.state===`IDLE`){if(n.timer-=e,i.headGroup){if(n.type===`chicken`){let e=Math.max(0,Math.sin(t*7+r*2))*.65;if(i.headGroup.rotation.x=e,i.leftWing&&i.rightWing){let e=Math.sin(t*9+r)*.2;i.leftWing.rotation.z=e,i.rightWing.rotation.z=-e}}else n.type===`cow`||n.type===`goat`?(i.headGroup.rotation.x=.15+Math.sin(t*3.5+r)*.12,i.headGroup.rotation.z=Math.sin(t*4+r)*.05):n.type===`horse`&&(i.headGroup.rotation.x=Math.sin(t*2+r)*.08)}if(i.legs&&i.legs.length===4&&i.legs.forEach(e=>{e.rotation.x=0}),n.timer<=0){if(a&&(a.hasFood||a.hasWater)&&Math.random()<.45)n.state=`HEADING_TO_FEED`,n.timer=12;else{n.state=`WANDER`;let e=o.minX+1,t=o.minZ+1;for(let r=0;r<25;r++){let r=Et.lerp(o.minX,o.maxX,.08+Math.random()*.84),i=Et.lerp(o.minZ,o.maxZ,.08+Math.random()*.84),a=!1;if(n.localObstacles)for(let e of n.localObstacles){let t=(n.radius||.65)+.35;if(r>=e.minX-t&&r<=e.maxX+t&&i>=e.minZ-t&&i<=e.maxZ+t){a=!0;break}}if(!a){e=r,t=i;break}}n.targetX=e,n.targetZ=t,n.timer=2.8+Math.random()*4.5}}}else if(n.state===`WANDER`){let a=n.targetX-n.mesh.position.x,o=n.targetZ-n.mesh.position.z,s=Math.hypot(a,o);if(s<.35||n.timer<=0)n.state=`IDLE`,n.timer=2.2+Math.random()*3.5;else{n.timer-=e;let c=Math.min(s,n.speed*e);n.mesh.position.x+=a/s*c,n.mesh.position.z+=o/s*c;let l=Math.atan2(a,o)-n.mesh.rotation.y;for(;l<-Math.PI;)l+=Math.PI*2;for(;l>Math.PI;)l-=Math.PI*2;if(n.mesh.rotation.y+=l*Math.min(1,e*5.5),i.legs&&i.legs.length===4){let e=Math.sin(t*8*n.speed+r)*.45;i.legs[0].rotation.x=e,i.legs[1].rotation.x=-e,i.legs[2].rotation.x=-e,i.legs[3].rotation.x=e}else n.type===`chicken`||n.type===`duck`?(n.mesh.position.y=Math.abs(Math.sin(t*11+r))*.08,i.headGroup&&(i.headGroup.rotation.x=.2+Math.sin(t*12)*.2)):n.type===`rabbit`&&(n.mesh.position.y=Math.abs(Math.sin(t*9+r))*.22)}}else if(n.state===`HEADING_TO_FEED`){let a=n.troughLocalPos||{x:-4.5,z:0},s=o.minX<0?1.7:-1.7,c=a.x+s,l=a.z+Math.sin(r*2.2)*.8,u=c-n.mesh.position.x,d=l-n.mesh.position.z,f=Math.hypot(u,d);if(f<.55||n.timer<=0)n.state=`EATING_DRINKING`,n.timer=5.5+Math.random()*4,n.mesh.rotation.y=Math.atan2(a.x-n.mesh.position.x,a.z-n.mesh.position.z);else{n.timer-=e;let a=Math.min(f,n.speed*1.15*e);n.mesh.position.x+=u/f*a,n.mesh.position.z+=d/f*a;let o=Math.atan2(u,d)-n.mesh.rotation.y;for(;o<-Math.PI;)o+=Math.PI*2;for(;o>Math.PI;)o-=Math.PI*2;if(n.mesh.rotation.y+=o*Math.min(1,e*6),i.legs&&i.legs.length===4){let e=Math.sin(t*9*n.speed+r)*.45;i.legs[0].rotation.x=e,i.legs[1].rotation.x=-e,i.legs[2].rotation.x=-e,i.legs[3].rotation.x=e}else n.type===`chicken`||n.type===`duck`?n.mesh.position.y=Math.abs(Math.sin(t*11+r))*.08:n.type===`rabbit`&&(n.mesh.position.y=Math.abs(Math.sin(t*9+r))*.22)}}else n.state===`EATING_DRINKING`&&(n.timer-=e,i.headGroup&&(i.headGroup.rotation.x=.58+Math.sin(t*5+r)*.16),i.legs&&i.legs.length===4&&i.legs.forEach(e=>{e.rotation.x=0}),n.timer<=0&&(n.state=`IDLE`,n.timer=3.5+Math.random()*4));i.tailGroup&&(i.tailGroup.rotation.z=Math.sin(t*4+r)*.25)});let n=this.animals3D.length;for(let e=0;e<n;e++){let t=this.animals3D[e];for(let r=e+1;r<n;r++){let e=this.animals3D[r];if(t.penType===e.penType){let n=t.mesh.position.x-e.mesh.position.x,r=t.mesh.position.z-e.mesh.position.z,i=Math.hypot(n,r),a=(t.radius||.65)+(e.radius||.65);if(i<a){let o=a-i,s=i>1e-4?n/i:1,c=i>1e-4?r/i:0;t.mesh.position.x+=s*o*.5,t.mesh.position.z+=c*o*.5,e.mesh.position.x-=s*o*.5,e.mesh.position.z-=c*o*.5}}}if(t.localObstacles){let e=t.radius||.65;for(let n of t.localObstacles){let r=n.minX-e,i=n.maxX+e,a=n.minZ-e,o=n.maxZ+e,s=t.mesh.position.x,c=t.mesh.position.z;if(s>r&&s<i&&c>a&&c<o){let e=s-r,n=i-s,l=c-a,u=o-c,d=Math.min(e,n,l,u);d===e?t.mesh.position.x=r:d===n?t.mesh.position.x=i:d===l?t.mesh.position.z=a:t.mesh.position.z=o,t.state===`WANDER`&&(t.state=`IDLE`,t.timer=1+Math.random()*1.5)}}}t.localBounds&&(t.mesh.position.x=Math.max(t.localBounds.minX,Math.min(t.mesh.position.x,t.localBounds.maxX)),t.mesh.position.z=Math.max(t.localBounds.minZ,Math.min(t.mesh.position.z,t.localBounds.maxZ)))}}updatePets(e,t){if(this.petDog&&this.petDog.userData){let n=this.petDog.userData,r=this.farmerGroup.position.x,i=this.farmerGroup.position.z,a=Math.hypot(r-this.petDog.position.x,i-this.petDog.position.z);if(a>3.8&&a<13&&Math.random()<.6&&(n.state=`FOLLOW`,n.targetX=r+Math.sin(t*.8)*2,n.targetZ=i+Math.cos(t*.8)*2),n.state===`IDLE`)n.timer-=e,n.tailGroup&&(n.tailGroup.rotation.y=Math.sin(t*12)*.45),n.headGroup&&(n.headGroup.rotation.z=Math.sin(t*2)*.1),n.legFL&&(n.legFL.rotation.x=0,n.legFR.rotation.x=0,n.legBL.rotation.x=0,n.legBR.rotation.x=0),n.timer<=0&&(n.state=`WANDER`,n.targetX=(Math.random()-.5)*16,n.targetZ=-22+Math.random()*24,n.timer=4+Math.random()*4.5);else if(n.state===`WANDER`||n.state===`FOLLOW`){let r=n.targetX-this.petDog.position.x,i=n.targetZ-this.petDog.position.z,a=Math.hypot(r,i);if(a<.45||n.timer<=0)n.state=`IDLE`,n.timer=2.5+Math.random()*3.5;else{n.timer-=e;let o=Math.min(a,n.speed*e);this.petDog.position.x+=r/a*o,this.petDog.position.z+=i/a*o;let s=Math.atan2(r,i)-this.petDog.rotation.y;for(;s<-Math.PI;)s+=Math.PI*2;for(;s>Math.PI;)s-=Math.PI*2;this.petDog.rotation.y+=s*Math.min(1,e*6);let c=Math.sin(t*11)*.45;n.legFL&&(n.legFL.rotation.x=c),n.legFR&&(n.legFR.rotation.x=-c),n.legBL&&(n.legBL.rotation.x=-c),n.legBR&&(n.legBR.rotation.x=c),n.tailGroup&&(n.tailGroup.rotation.y=Math.sin(t*16)*.65)}}}if(this.petCat&&this.petCat.userData){let n=this.petCat.userData;if(n.state===`IDLE`)n.timer-=e,n.tailGroup&&(n.tailGroup.rotation.z=-.4+Math.sin(t*2.5)*.25),this.petCat.scale.y=1+Math.sin(t*3)*.03,n.legFL&&(n.legFL.rotation.x=0,n.legFR.rotation.x=0,n.legBL.rotation.x=0,n.legBR.rotation.x=0),n.timer<=0&&(n.state=`WANDER`,n.targetX=-7+Math.random()*14,n.targetZ=-26+Math.random()*14,n.timer=4.5+Math.random()*5);else if(n.state===`WANDER`){let r=n.targetX-this.petCat.position.x,i=n.targetZ-this.petCat.position.z,a=Math.hypot(r,i);if(a<.35||n.timer<=0)n.state=`IDLE`,n.timer=3+Math.random()*4;else{n.timer-=e;let o=Math.min(a,n.speed*e);this.petCat.position.x+=r/a*o,this.petCat.position.z+=i/a*o;let s=Math.atan2(r,i)-this.petCat.rotation.y;for(;s<-Math.PI;)s+=Math.PI*2;for(;s>Math.PI;)s-=Math.PI*2;this.petCat.rotation.y+=s*Math.min(1,e*5.5);let c=Math.sin(t*9.5)*.4;n.legFL&&(n.legFL.rotation.x=c),n.legFR&&(n.legFR.rotation.x=-c),n.legBL&&(n.legBL.rotation.x=-c),n.legBR&&(n.legBR.rotation.x=c),n.tailGroup&&(n.tailGroup.rotation.z=-.4+Math.sin(t*4)*.25)}}}}updateRaycasting(){if(this.raycaster.setFromCamera(this.mouse,this.camera),this.isBuilderMode){if(this.raycaster.ray.intersectPlane(this.groundPlane,this.planeIntersection)){let e=Math.round(this.planeIntersection.x/2)*2,t=Math.round(this.planeIntersection.z/2)*2;this.cursorMesh.visible=!0,this.cursorMesh.position.set(e,.12,t),this.cursorMesh.material&&(this.builderTool===`road`?this.cursorMesh.material.color.set(`#f59e0b`):this.builderTool===`erase`?this.cursorMesh.material.color.set(`#ef4444`):this.builderTool===`water`?this.cursorMesh.material.color.set(`#0284c7`):this.builderTool===`move_building`?this.cursorMesh.material.color.set(`#8b5cf6`):this.builderTool===`move_farm`&&this.cursorMesh.material.color.set(`#10b981`))}else this.cursorMesh.visible=!1;return}let e=this.raycaster.intersectObjects(this.scene.children,!0);if(this.hoveredObject=null,this.cursorMesh.visible=!1,this.isDragMoving){this.updateCursorStyle();return}for(let t of e){let e=t.object;if(!(e===this.cursorMesh||e.parent===this.cursorMesh||e===this.plotGhostBox||e===this.plotMoveHighlight||e===this.moveIndicator||e.userData?.isHelper)){if(e.userData&&e.userData.rootPlot)e=e.userData.rootPlot;else for(;e&&!e.userData.isPlot&&!e.userData.isLockTrigger&&!e.userData.isExpansionSign&&!e.userData.isPet&&!e.userData.isTrough&&!e.userData.isAnimal&&e.parent&&e.parent!==this.scene;){if(e.userData&&e.userData.rootPlot){e=e.userData.rootPlot;break}e=e.parent}if(e&&e.userData&&(e.userData.rootPlot||e.userData.plotGroup)&&(e=e.userData.rootPlot||e.userData.plotGroup),e&&e.userData&&(e.userData.isPlot||e.userData.isLockTrigger||e.userData.isExpansionSign||e.userData.isPet||e.userData.isTrough||e.userData.isAnimal)){this.hoveredObject=e,e.userData.isPlot&&(this.cursorMesh.visible=!0,this.cursorMesh.position.set(e.position.x,.32,e.position.z));break}}}this.updateCursorStyle()}updateCursorStyle(){let e=`cursor-hand`,t=this.state?this.state.getSelectedItem():null,n=t?t.id:null,r=t?t.type:null;if(this.hoveredObject&&this.hoveredObject.userData){let t=this.hoveredObject.userData;if(t.isPlot){let i=this.crops?this.crops.get(t.key):null;i&&i.isMature?e=`cursor-sickle`:t.state===`grass`?e=`cursor-hoe`:t.state===`tilled`?e=n===`water`?`cursor-water`:r===`seed`||n?.includes(`seed`)?`cursor-seed`:`cursor-water`:t.state===`watered`&&!i&&(e=`cursor-seed`)}else(t.isAnimal||t.isPet)&&(e=`cursor-hand`)}else n===`hoe`?e=`cursor-hoe`:n===`water`?e=`cursor-water`:n===`scythe`?e=`cursor-sickle`:(r===`seed`||n?.includes(`seed`))&&(e=`cursor-seed`);this.canvas&&(this.canvas.classList.contains(e)||(this.canvas.classList.remove(`cursor-hand`,`cursor-hoe`,`cursor-sickle`,`cursor-water`,`cursor-seed`),this.canvas.classList.add(e)))}},Oh=class{constructor(){this.engine=null,this.state=null,this.appEl=document.getElementById(`app`),this.activeModal=null,this.marketTab=`sell`,this.questFilter=`all`,this.renderBaseUI(),this.bindEvents()}attachEngine(e){this.engine=e,this.state=e.state,this.state.onChange(()=>this.updateHUD()),this.state.onLevelUpCallback=(e,t,n)=>this.showLevelUpModal(e,t,n),this.engine.timeWeather&&this.engine.timeWeather.onWeatherChange(()=>this.updateHUD()),this.renderHotbarSlots(),this.updateHUD()}renderBaseUI(){this.appEl.innerHTML=`
      <div id="game-container">
        <canvas id="game-canvas"></canvas>

        <!-- Unified Right-Side Stardew Farm Dashboard -->
        <div id="stardew-right-hud" class="stardew-right-hud" dir="rtl">
          <!-- 1. Player Profile, Level, Calendar, Clock & Gold -->
          <div class="character-card">
            <div class="portrait-box" id="btn-portrait-levels" title="عرض تفاصيل المستوى والمزايا" style="cursor: pointer;">
              <div class="portrait-avatar">
                <div class="pixel-hat"></div>
                <div class="pixel-hair"></div>
                <div class="pixel-face">
                  <div class="pixel-eye left"></div>
                  <div class="pixel-eye right"></div>
                  <div class="pixel-blush left"></div>
                  <div class="pixel-blush right"></div>
                </div>
                <div class="pixel-clothes"></div>
              </div>
            </div>

            <div class="farmer-info">
              <div class="level-row" id="btn-level-row" title="عرض المزايا والمستويات" style="cursor: pointer;">
                <span class="hud-label">LEVEL <b id="hud-level-val">1</b></span>
                <div class="mini-xp-bar">
                  <div class="mini-xp-fill" id="hud-xp-fill"></div>
                </div>
              </div>
              <div class="calendar-row" id="hud-season-day">SPRING 1</div>
              <div class="clock-row" id="hud-clock-time">SUN 8:24 ص</div>
            </div>

            <div class="gold-box" title="رصيد الذهب المتوفر لديك">
              <span class="gold-coin-icon">🪙</span>
              <span class="gold-amount" id="hud-gold-val">122</span>
              <span class="gold-label">G</span>
            </div>
          </div>

          <!-- 2. Vitals Strip: Energy & Farming Skill -->
          <div class="vitals-row">
            <div class="energy-box" title="طاقة المزارع المتبقية لأداء المهام">
              <span class="energy-icon">⚡</span>
              <div class="energy-bar">
                <div class="energy-fill" id="hud-energy-fill" style="width: 80%"></div>
              </div>
              <span class="energy-text" id="hud-energy-text">8/10</span>
            </div>

            <div class="skill-badge" title="مستوى مهارة الزراعة الحالي">
              <span class="skill-icon">🌱</span>
              <span class="skill-text">FARM <b id="hud-farming-lvl">Lvl 1</b></span>
            </div>
          </div>

          <!-- 3. Dynamic Weather Badge -->
          <div class="weather-box" id="hud-weather-box" title="حالة الطقس الحالية وتأثيرها على المزرعة (انقر للتغيير)">
            <span class="weather-icon" id="hud-weather-icon">☀️</span>
            <div class="weather-info">
              <span class="weather-name" id="hud-weather-name">مشمس مشرق</span>
              <span class="weather-buff" id="hud-weather-buff">سعادة الحيوانات +30%</span>
            </div>
          </div>

          <!-- Mobile Collapsible Controls Bar (Only visible on screens <= 900px) -->
          <div class="mobile-hud-toggle-bar" id="mobile-hud-toggle-bar">
            <button class="mobile-toggle-btn" id="btn-toggle-mobile-dock" aria-label="أدوات اللعبة">
              <span>⚡ القائمة</span>
              <span class="toggle-indicator" id="dock-toggle-indicator">▼</span>
            </button>
            <button class="mobile-toggle-btn" id="btn-toggle-mobile-crops" aria-label="المحاصيل">
              <span>🌱 المحاصيل</span>
              <span class="mobile-crop-count" id="mobile-crop-badge">0</span>
            </button>
            <button class="mobile-toggle-btn icon-only" id="btn-toggle-mobile-vitals" aria-label="تصغير">
              <span id="vitals-toggle-icon">👁️</span>
            </button>
          </div>

          <!-- 4. Action Buttons Dock (Pure Image/Icon Buttons with Rich Tooltips) -->
          <div class="hud-action-dock" id="hud-action-dock">
            <div class="mobile-dock-header">
              <span class="mobile-dock-title">⚡ قائمة الأدوات والخدمات</span>
              <button class="mobile-panel-close-btn" id="btn-close-mobile-dock" title="إغلاق">✕</button>
            </div>

            <button class="dock-btn market-btn" id="btn-open-market" aria-label="المتجر">
              <span class="dock-icon">🏪</span>
              <div class="dock-tooltip">
                <div class="dock-tooltip-title">🏪 متجر المزرعة</div>
                <div class="dock-tooltip-desc">شراء البذور، الحيوانات، ومعدات الزراعة</div>
              </div>
            </button>

            <button class="dock-btn trade-btn" id="btn-open-contracts" aria-label="التجارة">
              <span class="dock-icon">📦</span>
              <span class="notification-dot" id="trade-dot" style="display: none"></span>
              <div class="dock-tooltip">
                <div class="dock-tooltip-title">📦 صفقات القرية</div>
                <div class="dock-tooltip-desc">تلبية طلبيات التجار وكسب مكافآت ذهبية ضخمة</div>
              </div>
            </button>

            <button class="dock-btn buildings-btn" id="btn-open-buildings" aria-label="المباني">
              <span class="dock-icon">🏛️</span>
              <div class="dock-tooltip">
                <div class="dock-tooltip-title">🏛️ تشييد المباني</div>
                <div class="dock-tooltip-desc">بناء وتطوير الحظائر، الطواحين، والصوامع</div>
              </div>
            </button>

            <button class="dock-btn quests-btn" id="btn-open-quests" aria-label="المهام">
              <span class="dock-icon">📜</span>
              <span class="notification-dot" id="quest-dot" style="display: none"></span>
              <div class="dock-tooltip">
                <div class="dock-tooltip-title">📜 المهام اليومية</div>
                <div class="dock-tooltip-desc">متابعة مهام القصة وحصد المكافآت والخبرة</div>
              </div>
            </button>

            <button class="dock-btn levels-btn" id="btn-open-levels" aria-label="المستويات">
              <span class="dock-icon">🌟</span>
              <div class="dock-tooltip">
                <div class="dock-tooltip-title">🌟 شجرة المستويات</div>
                <div class="dock-tooltip-desc">استعراض المهارات وشجرة المزايا المفتوحة</div>
              </div>
            </button>

            <button class="dock-btn newgame-btn" id="btn-open-newgame" aria-label="لعبة جديدة">
              <span class="dock-icon">🔄</span>
              <div class="dock-tooltip">
                <div class="dock-tooltip-title">🔄 لعبة جديدة</div>
                <div class="dock-tooltip-desc">تصفير المزرعة والبدء من الصفر مع بذور الذرة</div>
              </div>
            </button>

            <button class="dock-btn outfit-btn" id="btn-toggle-outfit" aria-label="المظهر">
              <span class="dock-icon">👔</span>
              <div class="dock-tooltip">
                <div class="dock-tooltip-title">👔 <span id="outfit-btn-label">المظهر (الأساسي)</span></div>
                <div class="dock-tooltip-desc">التبديل بين الزي البرتقالي الأصلي والرمادي البديل</div>
              </div>
            </button>

            <button class="dock-btn tpose-btn" id="btn-toggle-tpose" aria-label="وضع T-Pose">
              <span class="dock-icon">🧍</span>
              <div class="dock-tooltip">
                <div class="dock-tooltip-title">🧍 <span id="tpose-btn-label">وضع T-Pose</span></div>
                <div class="dock-tooltip-desc">تثبيت وضعية T-Pose لمعاينة وفحص مجسم 3D</div>
              </div>
            </button>

            <button class="dock-btn fullscreen-btn" id="btn-toggle-fullscreen" aria-label="ملء الشاشة">
              <span class="dock-icon">⛶</span>
              <div class="dock-tooltip">
                <div class="dock-tooltip-title">⛶ ملء الشاشة</div>
                <div class="dock-tooltip-desc">التبديل إلى وضع ملء الشاشة الكامل للعبة</div>
              </div>
            </button>

            <button class="dock-btn sound-btn" id="btn-toggle-sound" aria-label="الصوت">
              <span class="dock-icon" id="sound-icon">🔊</span>
              <div class="dock-tooltip">
                <div class="dock-tooltip-title">🔊 الصوت والموسيقى</div>
                <div class="dock-tooltip-desc">كتم أو تشغيل المؤثرات الصوتية والموسيقى</div>
              </div>
            </button>

            <button class="dock-btn pixel-btn" id="btn-toggle-pixel" aria-label="أسلوب البكسل">
              <span class="dock-icon">👾</span>
              <div class="dock-tooltip">
                <div class="dock-tooltip-title">👾 <span id="pixel-btn-label">بكسل واضح الملامح (2x)</span></div>
                <div class="dock-tooltip-desc">التبديل بين درجات دقة البكسل (2x واضح / 1x HD / 3x / 4x) أو مفتاح P</div>
              </div>
            </button>

            <button class="dock-btn iso-btn" id="btn-toggle-iso" aria-label="تدوير الكاميرا الأيزومترية">
              <span class="dock-icon">📐</span>
              <div class="dock-tooltip">
                <div class="dock-tooltip-title">📐 زاوية أيزومترك مجسمة</div>
                <div class="dock-tooltip-desc">تدوير الزاوية الأيزومترية 90 درجة (أو مفتاح Q / R)</div>
              </div>
            </button>

            <button class="dock-btn settings-btn" id="btn-open-settings" aria-label="الإعدادات">
              <span class="dock-icon">⚙️</span>
              <div class="dock-tooltip">
                <div class="dock-tooltip-title">⚙️ الإعدادات والدليل</div>
                <div class="dock-tooltip-desc">دليل اللعب، أزرار التحكم، والإعدادات العامة</div>
              </div>
            </button>
          </div>

          <!-- 5. Active Crops Live HUD (Guaranteed to be below buttons, NEVER overlapping) -->
          <aside id="active-crops-hud" class="active-crops-panel" aria-label="المحاصيل المزروعة الحالية">
            <div class="crops-hud-header">
              <div class="crops-hud-title">
                <span class="crops-hud-icon">🌱</span>
                <span>المحاصيل المزروعة</span>
              </div>
              <div class="crops-header-actions">
                <span class="crops-total-badge" id="active-crops-total">0</span>
                <button class="mobile-panel-close-btn" id="btn-close-mobile-crops" title="إغلاق">✕</button>
              </div>
            </div>
            <div class="crops-hud-list" id="active-crops-list">
              <div class="empty-crops-msg">
                <span class="empty-msg-icon">🌱</span>
                <div class="empty-msg-title">لا توجد محاصيل مزروعة</div>
                <div class="empty-msg-hint">ازرع بذور الذرة لتبدأ الإنتاج!</div>
              </div>
            </div>
          </aside>
        </div>

        <!-- Floating Banner for Single-Plot Placement Mode (50 G) -->
        <div id="plot-place-mode-banner" class="plot-move-banner hidden">
          <span class="banner-icon">🪵</span>
          <div class="banner-text">
            <span class="banner-title">وضع إضافة أحواض الزراعة (50 ذهب لكل حوض)</span>
            <span class="banner-desc">انقر في أي مكان أخضر لإضافة حوض زراعي جديد — كمية مفتوحة ومكان تختاره بنفسك</span>
          </div>
          <div class="banner-actions">
            <button id="btn-exit-plot-place" class="banner-exit-btn">إنهاء الإضافة ✓</button>
          </div>
        </div>

        <!-- Floating Banner for Plot Moving Mode -->
        <div id="plot-move-mode-banner" class="plot-move-banner hidden">
          <span class="banner-icon">🪴</span>
          <div class="banner-text">
            <span class="banner-title">وضع نقل وترتيب الأحواض</span>
            <span class="banner-desc">انقر على أي حوض لاختياره، ثم انقر في مكان خالٍ لنقله (يُمنع التداخل تلقائياً)</span>
          </div>
          <div class="banner-actions">
            <button id="btn-reset-plot-positions" class="banner-reset-btn" title="إعادة ترتيب تلقائي منتظم">محاذاة تلقائية 📐</button>
            <button id="btn-exit-plot-move" class="banner-exit-btn">تم الإنهاء ✓</button>
          </div>
        </div>

        <!-- Floating Banner for Modular Road Edit Mode (Move, Erase, Add) -->
        <div id="road-edit-mode-banner" class="plot-move-banner hidden road-edit-banner">
          <span class="banner-icon">🛣️</span>
          <div class="banner-text">
            <span class="banner-title">وضع تعديل مربعات الطريق (تحكم كامل بكل مربع)</span>
            <span class="banner-desc" id="road-edit-status-hint">اختر أداة من الأزرار: يمكنك نقل أي مربع، مسحه لإعادة العشب، أو رصف مربعات جديدة</span>
          </div>
          <div class="banner-tools">
            <button class="road-tool-btn active" id="btn-road-tool-move" data-tool="move" title="نقل مربع طريق لمكان جديد">
              <span>✋ نقل مربع</span>
            </button>
            <button class="road-tool-btn" id="btn-road-tool-erase" data-tool="erase" title="مسح مربع الطريق وإظهار العشب الأخضر">
              <span>🧹 مسح مربع</span>
            </button>
            <button class="road-tool-btn" id="btn-road-tool-add" data-tool="add" title="رصف مربع طريق جديد في المساحة الخضراء">
              <span>➕ رصف جديد</span>
            </button>
          </div>
          <div class="banner-actions">
            <button id="btn-road-reset" class="banner-reset-btn" title="استعادة شبكة الطرق الافتراضية الأصلية">استعادة الأصلية 🔄</button>
            <button id="btn-road-exit" class="banner-exit-btn">تم الإنهاء ✓</button>
          </div>
        </div>

        <!-- On-Screen Character Movement D-Pad Controller -->
        <div id="virtual-dpad" class="virtual-dpad" title="أزرار حركة الشخصية المباشرة">
          <button class="dpad-btn up" id="dpad-up" title="للأعلى (W)">▲</button>
          <button class="dpad-btn left" id="dpad-left" title="لليسار (A)">◀</button>
          <div class="dpad-center">🚶</div>
          <button class="dpad-btn right" id="dpad-right" title="لليمين (D)">▶</button>
          <button class="dpad-btn down" id="dpad-down" title="للأسفل (S)">▼</button>
        </div>

        <!-- Bottom Unified Game HUD (Farming Actions & Hotbar) -->
        <div id="bottom-hud-container">
          <!-- Top Row: Quick Farming & Controls Bar -->
          <div id="quick-farming-bar">
            <!-- Group 1: Farming Actions -->
            <div class="hud-group farming-actions-group">
              <button class="farm-action-btn till" id="btn-action-till" title="حرث الأرض (فأس ⛏️ - مفتاح 1)">
                <span class="act-icon">⛏️</span>
                <span>حرث</span>
              </button>
              <button class="farm-action-btn water" id="btn-action-water" title="ري المحاصيل (مرشة 💧 - مفتاح 2)">
                <span class="act-icon">💧</span>
                <span>سقي</span>
              </button>
              <button class="farm-action-btn plant" id="btn-action-plant" title="زرع بذور (بذرة 🌱 - مفتاح 4)">
                <span class="act-icon">🌱</span>
                <span>زرع</span>
              </button>
              <button class="farm-action-btn harvest" id="btn-action-harvest" title="حصاد المحصول (منجل 🌾 - مفتاح 3)">
                <span class="act-icon">🌾</span>
                <span>حصاد</span>
              </button>
            </div>

            <div class="hud-group-separator"></div>

            <!-- Group 2: Mode & Farm Controls -->
            <div class="hud-group farm-modes-group">
              <button class="farm-action-btn walk" id="btn-action-walk" title="تحريك الشخصية (تحكم كامل بالحركة وتوجيه المزارع دون زراعة أو حصاد بالخطأ)">
                <span class="act-icon">🚶‍♂️</span>
                <span class="walk-label">حركة الشخصية</span>
              </button>
              <button class="farm-action-btn expand" id="btn-action-expand" title="إضافة حوض زراعة جديد (50 ذهب - كمية مفتوحة ومكان حر)">
                <span class="act-icon">🪵</span>
                <span>إضافة حوض</span>
              </button>
              <button class="farm-action-btn move" id="btn-action-move-plot" title="نقل وتحريك كل مربع لوحده بحرية ومنع التداخل">
                <span class="act-icon">🪴</span>
                <span>نقل الأحواض</span>
              </button>
              <button class="farm-action-btn road-mode" id="btn-action-road-mode" title="تعديل مربعات الطريق (نقل، مسح، أو رصف مربعات جديدة)">
                <span class="act-icon">🛣️</span>
                <span>تعديل الطريق</span>
              </button>
              <button class="farm-action-btn arrange" id="btn-action-arrange" title="ترتيب وتقسيم أرض الزراعة (شبكة، صفوف، مربعات، مصاطب)">
                <span class="act-icon">📐</span>
                <span>ترتيب الأرض</span>
              </button>
            </div>
          </div>

          <!-- Bottom Row: Wooden Hotbar -->
          <nav id="bottom-hotbar">
            <div class="stardew-hotbar" id="hotbar-slots"></div>
          </nav>
        </div>

        <!-- Modals Overlay -->
        <div id="modal-overlay" class="modal-overlay hidden">
          <div class="modal-card" id="modal-card">
            <div class="modal-header">
              <h2 id="modal-title">سوق المزرعة</h2>
              <button class="close-btn" id="btn-close-modal">✕</button>
            </div>
            <div class="modal-body" id="modal-body"></div>
          </div>
        </div>

        <!-- Level Up Celebration Banner -->
        <div id="levelup-banner" class="levelup-banner hidden">
          <div class="levelup-content">
            <div class="star-icon">🌟</div>
            <h2>تهانينا! ارتقيت لمستوى جديد!</h2>
            <p id="levelup-desc">أصبحت الآن في المستوى 15 وتم فتح عناصر جديدة في المتجر!</p>
            <button class="primary-btn pulse" id="btn-close-levelup">رائع! استمر في الزراعة</button>
          </div>
        </div>
      </div>
    `}renderHotbarSlots(){let e=document.getElementById(`hotbar-slots`);e&&this.state&&(e.innerHTML=``,this.state.hotbar.forEach((t,n)=>{let r=document.createElement(`button`);r.className=`stardew-slot ${this.state.selectedSlot===n?`active`:``}`,r.dataset.index=n;let i=n===9?`10`:(n+1).toString(),a=t.count>1;r.innerHTML=`
        <span class="slot-num">${i}</span>
        <span class="slot-icon">${t.icon}</span>
        ${a?`<span class="slot-stack">${t.count}</span>`:``}
      `,r.addEventListener(`click`,()=>{this.engine&&this.engine.isFarmerWalkMode&&this.engine.toggleFarmerWalkMode(!1),this.state.selectedSlot=n,$.click(),this.updateHotbar(),this.syncActionButtonsWithSelection(),this.engine&&typeof this.engine.updateCursorStyle==`function`&&this.engine.updateCursorStyle()}),e.appendChild(r)}),this.syncActionButtonsWithSelection())}syncActionButtonsWithSelection(){if(!this.state)return;let e=this.state.getSelectedItem(),t=this.engine&&this.engine.isFarmerWalkMode,n=document.getElementById(`btn-action-till`),r=document.getElementById(`btn-action-water`),i=document.getElementById(`btn-action-plant`),a=document.getElementById(`btn-action-harvest`),o=document.getElementById(`btn-action-walk`),s=o?o.querySelector(`.walk-label`):null;if(o&&(o.classList.toggle(`active`,!!t),s&&(s.textContent=t?`حركة الشخصية (نشطة)`:`حركة الشخصية`)),t){n&&n.classList.remove(`active`),r&&r.classList.remove(`active`),i&&i.classList.remove(`active`),a&&a.classList.remove(`active`);return}let c=e&&(e.id===`hoe`||e.type===`tool_hoe`),l=e&&(e.id===`water`||e.type===`tool_water`),u=e&&(e.type===`seed`||e.id===`corn`||e.id===`carrot`),d=e&&(e.id===`harvest`||e.id===`scythe`||e.type===`tool_scythe`);n&&n.classList.toggle(`active`,!!c),r&&r.classList.toggle(`active`,!!l),i&&i.classList.toggle(`active`,!!u),a&&a.classList.toggle(`active`,!!d)}updateHotbar(){this.state&&(document.querySelectorAll(`.stardew-slot`).forEach((e,t)=>{let n=this.state.hotbar[t];e.classList.toggle(`active`,this.state.selectedSlot===t);let r=e.querySelector(`.slot-stack`);if(n&&n.count>1){if(r)r.textContent=n.count;else{let t=document.createElement(`span`);t.className=`slot-stack`,t.textContent=n.count,e.appendChild(t)}}else r&&r.remove()}),this.syncActionButtonsWithSelection(),this.engine&&typeof this.engine.updateCursorStyle==`function`&&this.engine.updateCursorStyle())}updateHUD(){if(!this.state||!this.engine)return;document.getElementById(`hud-level-val`).textContent=this.state.level;let e=this.state.getXpNeededForLevel?this.state.getXpNeededForLevel(this.state.level):500,t=Math.min(100,Math.round(this.state.xp/e*100));document.getElementById(`hud-xp-fill`).style.width=`${t}%`;let n=ch[this.state.seasonIndex]||`SUMMER`;document.getElementById(`hud-season-day`).textContent=`${n} ${this.state.dayOfSeason}`;let r=lh[this.state.dayOfWeekIndex]||`SUN`,i=this.engine&&this.engine.timeWeather&&typeof this.engine.timeWeather.getTimeFormatted==`function`?this.engine.timeWeather.getTimeFormatted():`11:45 AM`;if(document.getElementById(`hud-clock-time`).textContent=`${r} ${i}`,document.getElementById(`hud-gold-val`).textContent=this.state.coins.toLocaleString(),this.engine&&this.engine.timeWeather){let e=this.engine.timeWeather.getWeatherDef(),t=document.getElementById(`hud-weather-icon`),n=document.getElementById(`hud-weather-name`),r=document.getElementById(`hud-weather-buff`);t&&n&&r&&(t.textContent=e.icon,n.textContent=e.name,r.textContent=e.buff||``)}let a=Math.min(100,Math.round(this.state.energy/this.state.maxEnergy*100));document.getElementById(`hud-energy-text`).textContent=`${this.state.energy}/${this.state.maxEnergy}`,document.getElementById(`hud-energy-fill`).style.width=`${a}%`,document.getElementById(`hud-farming-lvl`).textContent=`Lvl ${this.state.farmingSkill}`;let o=this.state.quests.some(e=>e.completed&&!e.claimed),s=document.getElementById(`quest-dot`);s&&(s.style.display=o?`block`:`none`);let c=this.state.merchantOrders&&this.state.merchantOrders.some(e=>!e.fulfilled&&e.requires.every(e=>this.state.getItemTotalCount(e.id)>=e.count)),l=document.getElementById(`trade-dot`);l&&(l.style.display=c?`block`:`none`),this.updateHotbar()}bindEvents(){let e=document.getElementById(`hud-weather-box`);e&&e.addEventListener(`click`,()=>{if(!this.engine||!this.engine.timeWeather)return;let e=[`sunny`,`rainy`,`stormy`,`windy`,`snowy`],t=e[(e.indexOf(this.engine.timeWeather.weather)+1)%e.length];this.engine.timeWeather.setWeather(t);let n=hh[t];$.pop(),this.engine.particles&&this.engine.particles.addFloatingText(`${n.icon} تغير الطقس إلى ${n.name}!`,0,25,n.color,22),this.updateHUD()});let t=document.getElementById(`btn-portrait-levels`);t&&t.addEventListener(`click`,()=>{$.click(),this.openLevelsModal()});let n=document.getElementById(`btn-level-row`);n&&n.addEventListener(`click`,()=>{$.click(),this.openLevelsModal()});let r=document.getElementById(`btn-toggle-mobile-dock`),i=document.getElementById(`btn-close-mobile-dock`),a=document.getElementById(`hud-action-dock`),o=document.getElementById(`dock-toggle-indicator`),s=e=>{if(!a)return;let t=typeof e==`boolean`?e:!a.classList.contains(`mobile-expanded`);if(a.classList.toggle(`mobile-expanded`,t),o&&(o.textContent=t?`▲`:`▼`),r&&r.classList.toggle(`active`,t),t){let e=document.getElementById(`active-crops-hud`),t=document.getElementById(`btn-toggle-mobile-crops`);e&&e.classList.remove(`mobile-expanded`),t&&t.classList.remove(`active`)}};r&&r.addEventListener(`click`,e=>{e.stopPropagation(),$.click(),s()}),i&&i.addEventListener(`click`,e=>{e.stopPropagation(),$.click(),s(!1)});let c=document.getElementById(`btn-toggle-mobile-crops`),l=document.getElementById(`btn-close-mobile-crops`),u=document.getElementById(`active-crops-hud`),d=e=>{if(!u)return;let t=typeof e==`boolean`?e:!u.classList.contains(`mobile-expanded`);u.classList.toggle(`mobile-expanded`,t),c&&c.classList.toggle(`active`,t),t&&s(!1)};c&&c.addEventListener(`click`,e=>{e.stopPropagation(),$.click(),d()}),l&&l.addEventListener(`click`,e=>{e.stopPropagation(),$.click(),d(!1)});let f=document.getElementById(`btn-toggle-mobile-vitals`),p=document.getElementById(`stardew-right-hud`);f&&p&&f.addEventListener(`click`,e=>{e.stopPropagation(),$.click();let t=p.classList.toggle(`compact-mode`),n=document.getElementById(`vitals-toggle-icon`);n&&(n.textContent=t?`🙈`:`👁️`)}),a&&a.querySelectorAll(`.dock-btn`).forEach(e=>{e.addEventListener(`click`,()=>{window.innerWidth<=900&&s(!1)})}),window.addEventListener(`pointerdown`,e=>{window.innerWidth<=900&&(e.target.closest(`#stardew-right-hud`)||(a&&a.classList.contains(`mobile-expanded`)&&s(!1),u&&u.classList.contains(`mobile-expanded`)&&d(!1)))}),document.getElementById(`btn-toggle-fullscreen`).addEventListener(`click`,()=>{$.click(),document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{})}),document.getElementById(`btn-action-till`).addEventListener(`click`,()=>{if($.click(),this.engine){this.engine.isFarmerWalkMode&&this.engine.toggleFarmerWalkMode(!1);let e=this.state.hotbar.findIndex(e=>e&&(e.id===`hoe`||e.type===`tool_hoe`));if(e!==-1&&(this.state.selectedSlot=e,this.updateHotbar()),this.syncActionButtonsWithSelection(),typeof this.engine.tillAction==`function`)this.engine.tillAction();else if(this.engine.farmer&&this.engine.tileMap){let e=this.engine.farmer.getTargetTile();this.engine.tileMap.till(e.col,e.row)}}}),document.getElementById(`btn-action-water`).addEventListener(`click`,()=>{if($.click(),this.engine){this.engine.isFarmerWalkMode&&this.engine.toggleFarmerWalkMode(!1);let e=this.state.hotbar.findIndex(e=>e&&(e.id===`water`||e.type===`tool_water`));if(e!==-1&&(this.state.selectedSlot=e,this.updateHotbar()),this.syncActionButtonsWithSelection(),typeof this.engine.waterAction==`function`)this.engine.waterAction();else if(this.engine.farmer&&this.engine.tileMap){let e=this.engine.farmer.getTargetTile();this.engine.tileMap.water(e.col,e.row)}}}),document.getElementById(`btn-action-plant`).addEventListener(`click`,()=>{if($.click(),this.engine){this.engine.isFarmerWalkMode&&this.engine.toggleFarmerWalkMode(!1);let e=this.state.hotbar.findIndex(e=>e&&(e.type===`seed`||e.id===`corn`||e.id===`carrot`)&&e.count>0);if(e!==-1&&(this.state.selectedSlot=e,this.updateHotbar()),this.syncActionButtonsWithSelection(),typeof this.engine.plantAction==`function`)this.engine.plantAction();else if(this.engine.farmer&&this.engine.cropsManager){let e=this.engine.farmer.getTargetTile(),t=this.engine.state.getSelectedItem(),n=t&&t.type===`seed`&&t.count>0?t.cropId||t.id:`corn`;this.engine.cropsManager.plant(e.col,e.row,n)}}}),document.getElementById(`btn-action-harvest`).addEventListener(`click`,()=>{if($.click(),this.engine){this.engine.isFarmerWalkMode&&this.engine.toggleFarmerWalkMode(!1);let e=this.state.hotbar.findIndex(e=>e&&(e.id===`harvest`||e.id===`scythe`||e.type===`tool_scythe`));if(e!==-1&&(this.state.selectedSlot=e,this.updateHotbar()),this.syncActionButtonsWithSelection(),typeof this.engine.harvestAction==`function`)this.engine.harvestAction();else if(this.engine.farmer&&this.engine.cropsManager){let e=this.engine.farmer.getTargetTile();this.engine.cropsManager.harvest(e.col,e.row)}}});let m=document.getElementById(`btn-action-arrange`);m&&m.addEventListener(`click`,()=>{$.click(),this.openArrangePlotsModal()});let h=document.getElementById(`btn-action-move-plot`);h&&h.addEventListener(`click`,()=>{$.click(),this.engine&&typeof this.engine.toggleMovePlotMode==`function`&&this.engine.toggleMovePlotMode()});let g=document.getElementById(`btn-reset-plot-positions`);g&&g.addEventListener(`click`,()=>{$.click(),this.engine&&typeof this.engine.resetAllPlotPositions==`function`&&this.engine.resetAllPlotPositions()});let _=document.getElementById(`btn-exit-plot-move`);_&&_.addEventListener(`click`,()=>{$.click(),this.engine&&typeof this.engine.toggleMovePlotMode==`function`&&this.engine.toggleMovePlotMode(!1)});let v=document.getElementById(`btn-action-walk`);v&&v.addEventListener(`click`,()=>{$.click(),this.engine&&typeof this.engine.toggleFarmerWalkMode==`function`&&(this.engine.toggleFarmerWalkMode(),this.syncActionButtonsWithSelection())});let y=document.getElementById(`btn-action-expand`);y&&y.addEventListener(`click`,()=>{$.click(),this.engine&&typeof this.engine.togglePlacingNewPlotMode==`function`&&this.engine.togglePlacingNewPlotMode()});let b=document.getElementById(`btn-exit-plot-place`);b&&b.addEventListener(`click`,()=>{$.click(),this.engine&&typeof this.engine.stopPlacingNewPlotMode==`function`&&this.engine.stopPlacingNewPlotMode()});let x=document.getElementById(`btn-action-road-mode`);x&&x.addEventListener(`click`,()=>{$.click(),this.engine&&typeof this.engine.toggleRoadEditMode==`function`&&this.engine.toggleRoadEditMode()});let S=document.getElementById(`btn-road-tool-move`);S&&S.addEventListener(`click`,()=>{this.engine&&typeof this.engine.setRoadEditTool==`function`&&this.engine.setRoadEditTool(`move`)});let C=document.getElementById(`btn-road-tool-erase`);C&&C.addEventListener(`click`,()=>{this.engine&&typeof this.engine.setRoadEditTool==`function`&&this.engine.setRoadEditTool(`erase`)});let w=document.getElementById(`btn-road-tool-add`);w&&w.addEventListener(`click`,()=>{this.engine&&typeof this.engine.setRoadEditTool==`function`&&this.engine.setRoadEditTool(`add`)});let T=document.getElementById(`btn-road-reset`);T&&T.addEventListener(`click`,()=>{this.engine&&typeof this.engine.resetDefaultRoads==`function`&&this.engine.resetDefaultRoads()});let E=document.getElementById(`btn-road-exit`);E&&E.addEventListener(`click`,()=>{this.engine&&typeof this.engine.toggleRoadEditMode==`function`&&this.engine.toggleRoadEditMode(!1)});let D=(e,t)=>{let n=document.getElementById(e);if(!n)return;let r=e=>{e.preventDefault(),n.classList.add(`pressed`),this.engine&&this.engine.keys&&(this.engine.keys[t]=!0)},i=e=>{e.preventDefault(),n.classList.remove(`pressed`),this.engine&&this.engine.keys&&(this.engine.keys[t]=!1)};n.addEventListener(`pointerdown`,r),n.addEventListener(`pointerup`,i),n.addEventListener(`pointerleave`,i),n.addEventListener(`pointercancel`,i)};D(`dpad-up`,`KeyW`),D(`dpad-down`,`KeyS`),D(`dpad-left`,`KeyA`),D(`dpad-right`,`KeyD`);let O=document.getElementById(`btn-open-newgame`);O&&O.addEventListener(`click`,()=>{$.click(),this.openNewGameModal()});let k=document.getElementById(`btn-toggle-outfit`);k&&k.addEventListener(`click`,()=>{if($.click(),this.engine&&typeof this.engine.toggleFarmerOutfit==`function`){let e=this.engine.toggleFarmerOutfit()===`alternative`,t=document.getElementById(`outfit-btn-label`);t&&(t.textContent=e?`الزي البديل`:`الزي الأصلي`),this.engine.particles&&this.engine.particles.addFloatingText(e?`الزي البديل (رمادي وجينز باهت) ✨`:`الزي الأساسي (كاروهات برتقالي وكحلي) 🌾`,0,25,e?`#94a3b8`:`#fb923c`,22)}});let A=document.getElementById(`btn-toggle-tpose`);A&&A.addEventListener(`click`,()=>{if($.click(),this.engine&&typeof this.engine.toggleTPose==`function`){let e=this.engine.toggleTPose(),t=document.getElementById(`tpose-btn-label`);t&&(t.textContent=e?`إلغاء T-Pose`:`وضع T-Pose`),this.engine.particles&&this.engine.particles.addFloatingText(e?`وضعية النموذج (T-Pose) مفعلة 🧍`:`وضعية اللعب الطبيعية 🏃`,0,25,`#ffd166`,22)}}),document.getElementById(`btn-open-market`).addEventListener(`click`,()=>{$.click(),this.openMarketModal(`sell`)});let j=document.getElementById(`btn-open-contracts`);j&&j.addEventListener(`click`,()=>{$.click(),this.openMarketModal(`contracts`)});let M=document.getElementById(`btn-open-buildings`);M&&M.addEventListener(`click`,()=>{$.click(),this.openBuildingsModal()}),document.getElementById(`btn-open-quests`).addEventListener(`click`,()=>{$.click(),this.openQuestsModal()});let N=document.getElementById(`btn-open-levels`);N&&N.addEventListener(`click`,()=>{$.click(),this.openLevelsModal()}),document.getElementById(`btn-open-settings`).addEventListener(`click`,()=>{$.click(),this.openSettingsModal()}),document.getElementById(`btn-toggle-sound`).addEventListener(`click`,()=>{let e=$.toggleMute();Ch.toggleMute(),document.getElementById(`sound-icon`).textContent=e?`🔇`:`🔊`});let P=document.getElementById(`btn-toggle-pixel`);P&&P.addEventListener(`click`,()=>{if(this.engine){let e=this.engine.cyclePixelArtScale(),t=document.getElementById(`pixel-btn-label`);t&&(t.textContent=e<=1?`عالي الدقة (HD)`:`بكسل آرت (${e}x)`)}});let ee=document.getElementById(`btn-toggle-iso`);ee&&ee.addEventListener(`click`,()=>{this.engine&&this.engine.rotateIsometricAngle(1)}),document.getElementById(`btn-close-modal`).addEventListener(`click`,()=>{$.click(),this.closeModal()}),document.getElementById(`modal-overlay`).addEventListener(`click`,e=>{e.target.id===`modal-overlay`&&($.click(),this.closeModal())}),document.getElementById(`btn-close-levelup`).addEventListener(`click`,()=>{$.click(),document.getElementById(`levelup-banner`).classList.add(`hidden`)})}closeModal(){document.getElementById(`modal-overlay`).classList.add(`hidden`),this.activeModal=null}openMarketModal(e=null){e&&(this.marketTab=e),this.activeModal=`market`;let t=document.getElementById(`modal-overlay`),n=document.getElementById(`modal-title`),r=document.getElementById(`modal-body`);n.innerHTML=`🏪 سوق بيكانتا والتجارة الريفية (Pierre & Village Merchants)`,r.innerHTML=`
      <div class="tabs-nav">
        <button class="tab-btn ${this.marketTab===`sell`?`active`:``}" id="tab-sell">💰 صندوق الشحن (بيع)</button>
        <button class="tab-btn ${this.marketTab===`seeds`?`active`:``}" id="tab-seeds">🌱 أكياس البذور (11)</button>
        <button class="tab-btn ${this.marketTab===`animals`?`active`:``}" id="tab-animals">🐔 رعاية ومتجر الحيوانات</button>
        <button class="tab-btn ${this.marketTab===`contracts`?`active`:``}" id="tab-contracts">📦 صفقات التجار</button>
        <button class="tab-btn ${this.marketTab===`upgrades`?`active`:``}" id="tab-upgrades">⚡ ترقيات الحداد</button>
      </div>

      <div class="tab-content" id="tab-content-area"></div>
    `,document.getElementById(`tab-sell`).onclick=()=>{this.marketTab=`sell`,this.openMarketModal()},document.getElementById(`tab-seeds`).onclick=()=>{this.marketTab=`seeds`,this.openMarketModal()},document.getElementById(`tab-animals`).onclick=()=>{this.marketTab=`animals`,this.openMarketModal()},document.getElementById(`tab-contracts`).onclick=()=>{this.marketTab=`contracts`,this.openMarketModal()},document.getElementById(`tab-upgrades`).onclick=()=>{this.marketTab=`upgrades`,this.openMarketModal()},this.renderMarketTabContent(),t.classList.remove(`hidden`)}renderMarketTabContent(){let e=document.getElementById(`tab-content-area`);if(e){if(this.marketTab===`sell`){let t=this.state.hotbar.filter(e=>e.type===`seed`||e.type===`resource`||e.type===`consumable`),n=0;t.forEach(e=>{let t=uh[e.id],r=t?t.sellPrice:e.id===`wood`?8:25;n+=e.count*r});let r=t.map(e=>{let t=uh[e.id],n=t?t.sellPrice:e.id===`wood`?8:25;return`
          <div class="market-card ${e.count===0?`disabled`:``}">
            <div class="item-header">
              <span class="item-icon">${e.icon}</span>
              <div class="item-details">
                <h4>${e.name}</h4>
                <span class="price-tag">🪙 ${n} G</span>
              </div>
            </div>
            <div class="item-inventory">في حقيبتك: <b>${e.count}</b></div>
            <div class="item-actions">
              <button class="sell-btn" data-id="${e.id}" data-all="false" ${e.count<=0?`disabled`:``}>
                بيع 1
              </button>
              <button class="sell-btn secondary" data-id="${e.id}" data-all="true" ${e.count<=0?`disabled`:``}>
                بيع الكل
              </button>
            </div>
          </div>
        `}).join(``);e.innerHTML=`
        <div class="sell-summary-bar">
          <div>
            <span>قيمة المعروض للبيع: </span>
            <b class="highlight-coins">🪙 ${n.toLocaleString()} G</b>
          </div>
          <button class="primary-btn sell-all-bulk" id="btn-sell-all-bulk" ${n<=0?`disabled`:``}>
            بيع كل الفائض دفعة واحدة 💰
          </button>
        </div>
        <div class="cards-grid">${r}</div>
      `,e.querySelectorAll(`.sell-btn`).forEach(e=>{e.onclick=()=>{let t=e.dataset.id,n=e.dataset.all===`true`,r=this.state.hotbar.find(e=>e.id===t);if(r&&r.count>0){let e=uh[t],i=e?e.sellPrice:r.id===`wood`?8:25,a=n?r.count:1;r.count-=a,this.state.addCoins(a*i),this.engine&&this.engine.particles&&this.engine.particles.addFloatingText(`+${a*i} G`,0,25,`#ffd166`,20),this.renderMarketTabContent()}}});let i=document.getElementById(`btn-sell-all-bulk`);i&&(i.onclick=()=>{let e=0;t.forEach(t=>{if(t.count>0){let n=uh[t.id],r=n?n.sellPrice:t.id===`wood`?8:25;e+=t.count*r,t.count=0}}),e>0&&(this.state.addCoins(e),this.engine&&this.engine.particles&&this.engine.particles.addFloatingText(`+${e} G!`,0,30,`#ffd166`,24),this.renderMarketTabContent())})}else this.marketTab===`seeds`?(e.innerHTML=`<div class="cards-grid">${Object.keys(uh).map(e=>{let t=uh[e],n=this.state.level<(t.minLevel||1),r=this.state.coins>=t.seedCost;return`
          <div class="market-card ${n?`locked`:``}">
            <div class="item-header">
              <span class="item-icon">${t.icon}</span>
              <div class="item-details">
                <h4>بذور ${t.name}</h4>
                <span class="price-tag">🪙 ${t.seedCost} G</span>
              </div>
            </div>
            <p class="crop-desc">${t.description}</p>
            <div class="crop-specs">
              <span>⏱️ النمو: ${t.growthTime}ث</span>
              <span>💰 البيع: ${t.sellPrice} G</span>
              <span>⭐ الخبرة: +${t.xp}</span>
            </div>
            ${n?`
              <div class="lock-indicator">🔒 يُفتح عند المستوى ${t.minLevel}</div>
            `:`
              <div class="buy-actions">
                <button class="buy-seed-btn" data-type="${e}" data-qty="1" ${r?``:`disabled`}>
                  شراء 1
                </button>
                <button class="buy-seed-btn secondary" data-type="${e}" data-qty="5" ${this.state.coins<t.seedCost*5?`disabled`:``}>
                  شراء 5 (${t.seedCost*5} G)
                </button>
              </div>
            `}
          </div>
        `}).join(``)}</div>`,e.querySelectorAll(`.buy-seed-btn`).forEach(e=>{e.onclick=()=>{let t=e.dataset.type,n=parseInt(e.dataset.qty,10),r=uh[t],i=r.seedCost*n;if(this.state.spendCoins(i)){$.plant();let e=this.state.hotbar.find(e=>e.id===t);e?e.count+=n:this.state.addItem(t,n),this.state.notify(),this.engine&&this.engine.particles&&this.engine.particles.addFloatingText(`+${n} ${r.icon}`,0,25,`#64b5f6`,18),this.renderMarketTabContent()}}})):this.marketTab===`animals`?(e.innerHTML=`
        <div class="section-title">
          <h3>❤️ رعاية حيوانات المزرعة الحالية</h3>
          <p>دلل وأطعم حيواناتك واجمع محاصيل الحليب والبيض والصوف بانتظام!</p>
        </div>
        <div class="cards-grid" style="margin-bottom: 20px;">${Object.keys(this.state.animalsCare).map(e=>{let t=this.state.animalsCare[e],n=fh[e];return n?`
          <div class="animal-care-card">
            <div class="care-header">
              <span class="care-icon">${n.icon}</span>
              <div class="care-details">
                <h4>${n.name} (عدد ${t.count})</h4>
                <div class="happiness-meter">
                  <div class="happiness-fill" style="width: ${t.happiness}%"></div>
                  <span class="happiness-text">السعادة: ${t.happiness}% ❤️</span>
                </div>
              </div>
            </div>
            <div class="care-product-badge">
              <span>🎁 الإنتاج: ${n.productIcon} ${n.productName}</span>
              <span class="status-pill ${t.productReady?`ready`:`waiting`}">
                ${t.productReady?`جاهز للجمع! ✨`:`قيد الإنتاج...`}
              </span>
            </div>
            <div class="care-actions">
              <button class="care-act-btn pet-btn" data-animal="${e}">
                ❤️ تدليل
              </button>
              <button class="care-act-btn feed-btn" data-animal="${e}" ${t.fed?`disabled`:``}>
                🌾 إطعام
              </button>
              ${n.product===`ride`?`
                <button class="care-act-btn ride-btn" data-animal="${e}">
                  🏇 ركوب الحصان
                </button>
              `:`
                <button class="care-act-btn collect-btn" data-animal="${e}" ${t.productReady?``:`disabled`}>
                  🧺 جمع
                </button>
              `}
            </div>
          </div>
        `:``}).join(``)}</div>

        <div class="section-title">
          <h3>🏡 شراء مواشي وحيوانات جديدة (Marnie's Ranch)</h3>
        </div>
        <div class="cards-grid">${Object.keys(fh).map(e=>{let t=fh[e],n=this.state.level<(t.minLevel||1),r=this.state.coins>=t.cost;return`
          <div class="market-card ${n?`locked`:``}">
            <div class="item-header">
              <span class="item-icon">${t.icon}</span>
              <div class="item-details">
                <h4>${t.name}</h4>
                <span class="price-tag">🪙 ${t.cost} G</span>
              </div>
            </div>
            <p class="crop-desc">${t.desc}</p>
            <div class="crop-specs">
              <span>🎁 الإنتاج: ${t.productIcon} ${t.productName}</span>
              <span>💰 القيمة: ${t.productPrice} G</span>
            </div>
            ${n?`
              <div class="lock-indicator">🔒 يتطلب المستوى ${t.minLevel}</div>
            `:`
              <button class="primary-btn buy-animal-btn" data-type="${e}" ${r?``:`disabled`}>
                شراء وإرسال للمرعى (${t.cost} G)
              </button>
            `}
          </div>
        `}).join(``)}</div>
      `,e.querySelectorAll(`.pet-btn`).forEach(e=>{e.onclick=()=>{let t=e.dataset.animal;this.state.petAnimal(t)&&($.pet(),this.engine&&this.engine.particles&&this.engine.particles.addFloatingText(`❤️ أحب ${fh[t]?.name} ملاطفتك! (+10 XP)`,0,25,`#ec4899`,20),this.renderMarketTabContent())}}),e.querySelectorAll(`.feed-btn`).forEach(e=>{e.onclick=()=>{let t=e.dataset.animal;this.state.feedAnimal(t)?($.eat(),this.engine&&this.engine.particles&&this.engine.particles.addFloatingText(`🌾 تم إطعام ${fh[t]?.name} بنجاح!`,0,25,`#22c55e`,20),this.renderMarketTabContent()):alert(`تحتاج إلى قمح 🌾 أو جزر 🥕 أو تفاح 🍎 في حقيبتك لإطعام الحيوانات!`)}}),e.querySelectorAll(`.collect-btn`).forEach(e=>{e.onclick=()=>{let t=e.dataset.animal;if(this.state.collectAnimalProduct(t)){let e=fh[t];this.engine&&this.engine.particles&&this.engine.particles.addFloatingText(`+1 ${e.productIcon} ${e.productName}!`,0,25,`#ffd166`,22),this.renderMarketTabContent()}}}),e.querySelectorAll(`.ride-btn`).forEach(e=>{e.onclick=()=>{this.engine&&(this.engine.isRiding=!this.engine.isRiding,$.neigh(),this.state.checkQuests(`ride`,1),this.closeModal(),this.engine.particles.addFloatingText(this.engine.isRiding?`🏇 انطلقت راكباً الحصان بسرعة مضاعفة!`:`نـزلت عن الحصان 🐎`,0,25,`#fbbf24`,22))}}),e.querySelectorAll(`.buy-animal-btn`).forEach(e=>{e.onclick=()=>{let t=e.dataset.type,n=fh[t];this.state.spendCoins(n.cost)&&($.levelUp(),this.state.animalsCare[t]&&this.state.animalsCare[t].count++,this.engine&&this.engine.animalsManager&&this.engine.animalsManager.addAnimal(t,19,5),Eh({particleCount:40,spread:70,origin:{x:.5,y:.5}}),this.engine&&this.engine.particles&&this.engine.particles.addFloatingText(`+1 ${n.icon} في مرعى المزرعة! 🎉`,0,30,`#ffd166`,20),this.renderMarketTabContent())}})):this.marketTab===`contracts`?(e.innerHTML=`
        <div class="section-title">
          <h3>📦 صفقات تجار القرية اليومية (Village Merchant Contracts)</h3>
          <p>أتمم طلبيات الخباز والواحة ونقابة النسيج لتحصل على ثروات ذهبية وبذور نادرة!</p>
        </div>
        <div class="contracts-grid">${this.state.merchantOrders.map(e=>{let t=!e.fulfilled&&e.requires.every(e=>this.state.getItemTotalCount(e.id)>=e.count),n=e.requires.map(e=>{let t=this.state.getItemTotalCount(e.id);return`
            <div class="req-chip ${t>=e.count?`satisfied`:`missing`}">
              <span>${e.icon} ${e.name}</span>
              <b>${t} / ${e.count}</b>
            </div>
          `}).join(``);return`
          <div class="contract-card ${e.fulfilled?`fulfilled`:t?`ready-to-deliver`:``}">
            <div class="contract-header">
              <span class="merchant-avatar">${e.merchantIcon}</span>
              <div class="contract-meta">
                <h4>${e.title}</h4>
                <span class="merchant-name">${e.merchant}</span>
              </div>
            </div>
            <p class="contract-desc">${e.desc}</p>

            <div class="contract-section">
              <span class="section-label">المستلزمات المطلوبة:</span>
              <div class="reqs-grid">${n}</div>
            </div>

            <div class="contract-rewards-box">
              <span class="reward-tag coins">🪙 +${e.rewardCoins} G</span>
              <span class="reward-tag xp">⭐ +${e.rewardXp} XP</span>
              ${e.bonusItem?`<span class="reward-tag bonus">🎁 ${e.bonusItem.icon} ${e.bonusItem.name} x${e.bonusItem.count}</span>`:``}
            </div>

            <div class="contract-actions">
              ${e.fulfilled?`
                <div class="fulfilled-badge">✓ تمت الصفقة واستلمت الأرباح</div>
              `:`
                <button class="primary-btn deliver-order-btn ${t?`pulse`:``}" data-id="${e.id}" ${t?``:`disabled`}>
                  ${t?`تسليم الطلبية واستلام المكافأة 📦`:`المستلزمات غير مكتملة`}
                </button>
              `}
            </div>
          </div>
        `}).join(``)}</div>
      `,e.querySelectorAll(`.deliver-order-btn`).forEach(e=>{e.onclick=()=>{let t=e.dataset.id;this.state.fulfillOrder(t)&&($.trade(),$.levelUp(),Eh({particleCount:70,spread:80,origin:{x:.5,y:.5}}),this.engine&&this.engine.particles&&this.engine.particles.addFloatingText(`تم إتمام الصفقة واستلام الأرباح! 📦✨`,0,30,`#ffd166`,22),this.renderMarketTabContent(),this.updateHUD())}})):this.marketTab===`upgrades`&&(e.innerHTML=`<div class="cards-grid">${Object.keys(vh).map(e=>{let t=vh[e],n=this.state.upgrades[e]||1,r=n+1,i=t.levels.find(e=>e.level===r),a=!i;return`
          <div class="market-card ${a?`maxed`:``}">
            <div class="item-header">
              <span class="item-icon">${e===`waterCapacity`?`💧`:`👟`}</span>
              <div class="item-details">
                <h4>${t.name}</h4>
                <span class="level-indicator">المستوى الحالي: ${n}</span>
              </div>
            </div>
            ${a?`
              <div class="maxed-badge">✨ أعلى ترقية تم الحصول عليها!</div>
            `:`
              <p class="crop-desc">${i.desc}</p>
              <div class="crop-specs">
                <span>🪙 السعر: ${i.cost} G</span>
              </div>
              <button class="primary-btn buy-upgrade-btn" data-key="${e}" ${this.state.coins<i.cost?`disabled`:``}>
                ترقية (${i.cost} G)
              </button>
            `}
          </div>
        `}).join(``)}</div>`,e.querySelectorAll(`.buy-upgrade-btn`).forEach(e=>{e.onclick=()=>{let t=e.dataset.key,n=vh[t],r=(this.state.upgrades[t]||1)+1,i=n.levels.find(e=>e.level===r);i&&this.state.spendCoins(i.cost)&&(this.state.upgrades[t]=r,$.levelUp(),this.state.notify(),this.renderMarketTabContent())}}))}}openBuildingsModal(){this.activeModal=`buildings`;let e=document.getElementById(`modal-overlay`),t=document.getElementById(`modal-title`),n=document.getElementById(`modal-body`);t.innerHTML=`🏛️ تشييد مرافق ومباني المزرعة (Robin's Carpentry)`,n.innerHTML=`
      <div class="section-title">
        <h3>🌾 طور مزرعتك بالمرافق الحيوية</h3>
        <p>شيد الصومعة والبئر والمخبز والصوبة لزيادة سرعة الإنتاج ومضاعفة أرباح المزرعة!</p>
      </div>
      <div class="buildings-grid">${Object.keys(mh).map(e=>{let t=mh[e],n=this.state.isBuildingConstructed(e),r=this.state.level<t.minLevel,i=this.state.getItemTotalCount(`wood`),a=!n&&!r&&this.state.coins>=t.cost&&i>=t.woodCost,o=t.perks.map(e=>`<li>✨ ${e}</li>`).join(``);return`
        <div class="building-card ${n?`constructed`:r?`locked`:``}">
          <div class="building-header">
            <span class="building-icon">${t.icon}</span>
            <div class="building-meta">
              <h4>${t.name}</h4>
              <span class="building-cost">🪙 ${t.cost} G | 🪵 ${t.woodCost} خشب</span>
            </div>
            ${n?`<span class="built-pill">✓ تم التشييد</span>`:``}
          </div>

          <p class="building-desc">${t.desc}</p>

          <ul class="building-perks">${o}</ul>

          <div class="building-stats-row">
            <span>المستوى المطلوب: <b>Lvl ${t.minLevel}</b></span>
            <span>الخشب المتوفر: <b>🪵 ${i}/${t.woodCost}</b></span>
          </div>

          <div class="building-actions">
            ${n?`
              <button class="primary-btn constructed-btn" disabled>
                🏛️ المبنى قائم ويعمل في المزرعة
              </button>
            `:r?`
              <button class="primary-btn locked-btn" disabled>
                🔒 مقفل (يتطلب مستوى ${t.minLevel})
              </button>
            `:`
              <button class="primary-btn construct-act-btn ${a?`pulse`:``}" data-id="${e}" ${a?``:`disabled`}>
                ${a?`تشييد الآن في المزرعة 🔨`:`الموارد غير كافية`}
              </button>
            `}
          </div>
        </div>
      `}).join(``)}</div>
    `,n.querySelectorAll(`.construct-act-btn`).forEach(e=>{e.onclick=()=>{let t=e.dataset.id;this.engine&&this.engine.constructBuildingAction(t)&&(this.openBuildingsModal(),this.updateHUD())}}),e.classList.remove(`hidden`)}openLevelsModal(){this.activeModal=`levels`;let e=document.getElementById(`modal-overlay`),t=document.getElementById(`modal-title`),n=document.getElementById(`modal-body`);t.innerHTML=`🌟 شجرة المستويات والمزايا (Level Milestones)`;let r=this.state.getXpNeededForLevel?this.state.getXpNeededForLevel(this.state.level):500,i=Math.min(100,Math.round(this.state.xp/r*100)),a=[{level:1,title:`البداية الريفية الطيبة`,icon:`🥕`,perks:[`جزر برتقالي 🥕`,`قمح ذهبي 🌾`,`دجاج نشيط 🐔`,`أدوات الحراثة والري الأساسية ⛏️💧`],status:this.state.level>=1},{level:2,title:`التخزين ومصادر المياه`,icon:`⛲`,perks:[`بئر المياه العذبة ⛲`,`صومعة الغلال 🌾`,`ذرة شمسية 🌽`,`طماطم حمراء 🍅`,`بط بري 🦆`,`حظيرة الدواجن والبط`],status:this.state.level>=2},{level:3,title:`المروج والأبقار الزاهية`,icon:`🐮`,perks:[`أبقار حلوب 🐮`,`فراولة المروج 🍓`,`دوار الشمس الذهبي 🌻`,`خلية النحل 🐝`,`مراعي الأبقار والماعز`],status:this.state.level>=3},{level:4,title:`الصناعات والمعجنات الريفية`,icon:`🥖`,perks:[`مخبز المزرعة 🥖`,`قرع عملاق 🎃`,`باذنجان ملكي 🍆`,`ماعز وثابة 🐐`,`أغنام صوفية 🐑`,`مرعى الصوف`],status:this.state.level>=4},{level:5,title:`الفرسان والرفاهية الملكية`,icon:`🐎`,perks:[`حصان عربي أصيل 🐎 (ركوب سريع مضاعف)`,`إسطبل الخيول 🏛️`,`بطيخ صيفي منعش 🍉`,`أرانب أنجورا ظريفة 🐇`],status:this.state.level>=5},{level:6,title:`المعجزات الزراعية والبيوت المحمية`,icon:`🏡`,perks:[`الصوبة الزراعية الزجاجية 🏡`,`عنب معرش فاخر 🍇`,`سرعة نمو مضاعفة 2x صيفاً وشتاءً!`],status:this.state.level>=6},{level:7,title:`أسطورة المروج والثروة الطائلة`,icon:`🍍`,perks:[`أناناس استوائي نادر 🍍 (+650 G)`,`أرباح الصفقات التجارية مضاعفة 3x`,`وسام المزارع الأسطوري الذهبي 👑`],status:this.state.level>=7}].map(e=>`
      <div class="level-tier-card ${e.status?`unlocked`:`upcoming`}">
        <div class="tier-badge ${e.status?`unlocked`:``}">
          <span class="tier-icon">${e.icon}</span>
          <span class="tier-level">Lvl ${e.level}</span>
        </div>
        <div class="tier-content">
          <h4>${e.title} ${e.status?`✓ تم الفتح`:`🔒 قادم`}</h4>
          <div class="tier-perks-pills">
            ${e.perks.map(e=>`<span class="perk-pill">${e}</span>`).join(``)}
          </div>
        </div>
      </div>
    `).join(``);n.innerHTML=`
      <div class="level-summary-hero">
        <div class="hero-left">
          <div class="big-level-circle">${this.state.level}</div>
          <div>
            <h3>المزارع المحترف - المستوى ${this.state.level}</h3>
            <span class="skill-tag">🌱 مهارة الزراعة: المستوى ${this.state.farmingSkill} / 10</span>
          </div>
        </div>
        <div class="hero-right">
          <div class="xp-progress-meta">
            <span>الخبرة الحالية: <b>${this.state.xp} / ${r} XP</b></span>
            <span>باقي للمستوى القادم: <b>${Math.max(0,r-this.state.xp)} XP</b></span>
          </div>
          <div class="level-hero-bar">
            <div class="level-hero-fill" style="width: ${i}%"></div>
          </div>
        </div>
      </div>

      <div class="section-title" style="margin-top: 20px;">
        <h3>🗺️ مسار المزايا والمحاصيل المفتوحة</h3>
        <p>كل ارتقاء لمستوى جديد يمنحك قطعاً ذهبية ويفتح محاصيل ومباني وحيوانات جديدة!</p>
      </div>

      <div class="tiers-roadmap">${a}</div>
    `,e.classList.remove(`hidden`)}openQuestsModal(){this.activeModal=`quests`;let e=document.getElementById(`modal-overlay`),t=document.getElementById(`modal-title`),n=document.getElementById(`modal-body`);t.innerHTML=`📜 المهام اليومية والقصة (Daily Help Wanted)`;let r=this.state.quests.filter(e=>this.questFilter===`all`||e.category===this.questFilter).map(e=>{let t=Math.min(100,Math.round(e.current/e.targetCount*100));return`
        <div class="quest-card ${e.completed?`completed`:``} ${e.claimed?`claimed`:``}">
          <div class="quest-header">
            <span class="quest-icon">${e.icon}</span>
            <div class="quest-info">
              <h4>${e.title}</h4>
              <p>${e.desc}</p>
            </div>
            <div class="quest-reward">
              <span>🪙 ${e.rewardCoins} G</span>
              <span>⭐ ${e.rewardXp} XP</span>
            </div>
          </div>
          <div class="quest-progress-box">
            <div class="quest-progress-bar">
              <div class="quest-progress-fill" style="width: ${t}%"></div>
            </div>
            <span class="quest-count">${e.current} / ${e.targetCount}</span>
          </div>
          ${e.claimed?`
            <div class="claimed-badge">✓ تم استلام الجائزة</div>
          `:e.completed?`
            <button class="primary-btn claim-quest-btn pulse" data-id="${e.id}">
              استلام المكافأة 🎉
            </button>
          `:`
            <button class="primary-btn" disabled>قيد الإنجاز (${e.current}/${e.targetCount})...</button>
          `}
        </div>
      `}).join(``);n.innerHTML=`
      <div class="quests-filter-bar">
        <button class="q-filter-btn ${this.questFilter===`all`?`active`:``}" data-cat="all">🌟 الكل</button>
        <button class="q-filter-btn ${this.questFilter===`story`?`active`:``}" data-cat="story">📖 القصة</button>
        <button class="q-filter-btn ${this.questFilter===`animals`?`active`:``}" data-cat="animals">🐔 الحيوانات</button>
        <button class="q-filter-btn ${this.questFilter===`building`?`active`:``}" data-cat="building">🏛️ المباني</button>
        <button class="q-filter-btn ${this.questFilter===`trade`?`active`:``}" data-cat="trade">📦 التجارة</button>
      </div>

      <div class="quests-list">${r}</div>
    `,n.querySelectorAll(`.q-filter-btn`).forEach(e=>{e.onclick=()=>{this.questFilter=e.dataset.cat,this.openQuestsModal()}}),n.querySelectorAll(`.claim-quest-btn`).forEach(e=>{e.onclick=()=>{let t=e.dataset.id;this.state.claimQuest(t)&&($.levelUp(),Eh({particleCount:50,spread:80,origin:{x:.5,y:.5}}),this.engine&&this.engine.particles&&this.engine.particles.addFloatingText(`تم استلام مكافأة المهمة! 🎉`,0,30,`#ffd166`,22),this.openQuestsModal(),this.updateHUD())}}),e.classList.remove(`hidden`)}openSettingsModal(){this.activeModal=`settings`;let e=document.getElementById(`modal-overlay`),t=document.getElementById(`modal-title`),n=document.getElementById(`modal-body`);t.innerHTML=`⚙️ دليل المزرعة وطريقة التحكم`,n.innerHTML=`
      <div class="guide-box">
        <div class="settings-visual-panel" style="margin-bottom: 20px; background: rgba(0,0,0,0.25); border-radius: 12px; padding: 16px; border: 1px solid rgba(255,255,255,0.12);">
          <h4 style="color: #ffd166; font-size: 1.15rem; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
            <span>👾</span>
            <span>أسلوب العرض وزاوية الرؤية (Graphics & Isometric View)</span>
          </h4>
          
          <div style="margin-bottom: 14px;">
            <div style="font-size: 0.95rem; color: #e2e8f0; margin-bottom: 8px; font-weight: bold;">درجة أسلوب البكسل (Pixel Art Scale):</div>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
              <button class="visual-opt-btn" id="opt-pixel-2" style="flex: 1; min-width: 90px; padding: 8px 12px; background: #2563eb; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer;">💎 2x واضح الملامح (الموصى به)</button>
              <button class="visual-opt-btn" id="opt-pixel-1" style="flex: 1; min-width: 90px; padding: 8px 12px; background: #334155; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer;">✨ 1x فائق الدقة HD</button>
              <button class="visual-opt-btn" id="opt-pixel-3" style="flex: 1; min-width: 90px; padding: 8px 12px; background: #334155; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer;">👾 3x بكسل ناعم</button>
              <button class="visual-opt-btn" id="opt-pixel-4" style="flex: 1; min-width: 90px; padding: 8px 12px; background: #334155; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer;">🕹️ 4x بكسل كلاسيكي</button>
            </div>
          </div>

          <div>
            <div style="font-size: 0.95rem; color: #e2e8f0; margin-bottom: 8px; font-weight: bold;">زاوية الكاميرا المجسمة:</div>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
              <button class="visual-opt-btn" id="opt-cam-ortho" style="flex: 1; min-width: 120px; padding: 8px 12px; background: #059669; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer;">📐 أيزومترك مجسم</button>
              <button class="visual-opt-btn" id="opt-cam-rotate" style="flex: 1; min-width: 120px; padding: 8px 12px; background: #0284c7; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer;">🔄 تدوير 90° (Q/R)</button>
              <button class="visual-opt-btn" id="opt-cam-persp" style="flex: 1; min-width: 120px; padding: 8px 12px; background: #334155; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer;">🎥 منظور حر</button>
            </div>
          </div>
        </div>

        <h3>🌾 تحكم وحركات المزارع السهلة:</h3>
        <ul>
          <li><b>📐 الكاميرا الأيزومترية:</b> اضغط زر [Q] أو [R] أو زر الكاميرا لتدوير الزاوية الأيزومترية 90 درجة، واستخدم عجلة الماوس للتكبير والتصغير!</li>
          <li><b>👾 نمط البكسل:</b> اضغط زر [P] للتبديل السريع بين دقات بكسل آرت المختلفة (2x واضح / 1x HD / 3x / 4x)!</li>
          <li><b>⛏️ الحرث السهل:</b> انقر على أي بقعة عشبية، أو اضغط زر [⛏️ حرث] لحرث الأرض أمامك فوراً!</li>
          <li><b>🌱 الزراعة المباشرة:</b> انقر على أي تربة محروثة لغرس البذور، أو اضغط زر [🌱 زرع]!</li>
          <li><b>🌾 الحصاد الفوري:</b> انقر على أي محصول ناضج يلمع لحصاده فوراً دون الحاجة لأي أداة معقدة!</li>
          <li><b>💧 ملء الماء:</b> انقر على البحيرة أو رصيف الصيد أو بئر المياه لإعادة ملء المرشة فوراً!</li>
          <li><b>⛅ نظام الطقس:</b> انقر على شارة الطقس في أعلى اليسار للتبديل بين الطقوس الخمسة (مشمس، ممطر، عاصف، خريفي، مثلج)!</li>
          <li><b>🏛️ تشييد المباني:</b> اضغط زر [🏛️ المباني] لبناء الصومعة، البئر، خلية النحل، المخبز، والصوبة الزجاجية ثلاثية الأبعاد!</li>
          <li><b>📦 صفقات التجار:</b> اضغط زر [📦 التجارة] لتسليم طلبيات الخباز وتجار القرية والحصول على أموال طائلة!</li>
          <li><b>🐎 ركوب الحصان:</b> انقر على الحصان في الإسطبل أو زر الركوب لامتطائه وركوبه بسرعة مضاعفة!</li>
          <li><b>⛶ ملء الشاشة:</b> اضغط زر [⛶ تكبير] في الأعلى لجعل اللعبة تغطي شاشتك بالكامل!</li>
        </ul>

        <div class="danger-zone">
          <button class="danger-btn" id="btn-reset-save">إعادة ضبط اللعبة وبدء حفظ جديد 🔄</button>
        </div>
      </div>
    `;let r=e=>{[1,2,3,4].forEach(t=>{let n=document.getElementById(`opt-pixel-${t}`);n&&(n.style.background=t===e?`#2563eb`:`#334155`)});let t=document.getElementById(`pixel-btn-label`);t&&(t.textContent=e<=1?`عالي الدقة (HD)`:`بكسل واضح (${e}x)`)};this.engine&&r(this.engine.pixelSize||2),[1,2,3,4].forEach(e=>{let t=document.getElementById(`opt-pixel-${e}`);t&&(t.onclick=()=>{this.engine&&(this.engine.setPixelArtScale(e),r(e))})});let i=document.getElementById(`opt-cam-ortho`),a=document.getElementById(`opt-cam-persp`),o=document.getElementById(`opt-cam-rotate`),s=()=>{let e=!this.engine||this.engine.isOrthographic;i&&(i.style.background=e?`#059669`:`#334155`),a&&(a.style.background=e?`#334155`:`#059669`)};s(),i&&(i.onclick=()=>{this.engine&&!this.engine.isOrthographic&&(this.engine.toggleCameraProjection(),s())}),a&&(a.onclick=()=>{this.engine&&this.engine.isOrthographic&&(this.engine.toggleCameraProjection(),s())}),o&&(o.onclick=()=>{this.engine&&this.engine.rotateIsometricAngle(1)}),document.getElementById(`btn-reset-save`).onclick=()=>{this.openNewGameModal()},e.classList.remove(`hidden`)}openNewGameModal(){this.activeModal=`newgame`;let e=document.getElementById(`modal-overlay`),t=document.getElementById(`modal-title`),n=document.getElementById(`modal-body`);t.innerHTML=`🔄 بدء لعبة جديدة (تصفير شامل للمزرعة)`,n.innerHTML=`
      <div class="newgame-modal-content">
        <div class="newgame-hero-icon">🌱</div>
        <h3 class="newgame-heading">هل تريد حقاً إعادة بدء اللعبة من البداية؟</h3>
        <p class="newgame-warning">سيتم تصفير جميع البيانات والعودة إلى البداية تماماً كالتالي:</p>
        
        <div class="newgame-perks-list">
          <div class="perk-item">
            <span class="perk-icon">⭐</span>
            <div><b>المستوى 1:</b> العودة إلى المستوى الأول والبدء بالخبرة من الصفر.</div>
          </div>
          <div class="perk-item">
            <span class="perk-icon">🔒</span>
            <div><b>قفل كل المزارع:</b> قفل جميع حظائر الحيوانات الـ 7 حتى تفتحها بالمستوى والذهب.</div>
          </div>
          <div class="perk-item">
            <span class="perk-icon">🌽</span>
            <div><b>بذور الذرة للبداية:</b> ستتحصل على 12 بذرة ذرة فقط لتزرع وتبيع وتجني الذهب.</div>
          </div>
          <div class="perk-item">
            <span class="perk-icon">🚫</span>
            <div><b>تفريغ الأرض:</b> تصفير جميع المزروعات في الحقل حتى تبدأ زراعتها بنفسك.</div>
          </div>
          <div class="perk-item">
            <span class="perk-icon">🪙</span>
            <div><b>رصيد البداية:</b> 50 عملة ذهبية مع الأدوات الأساسية.</div>
          </div>
        </div>

        <div class="newgame-actions">
          <button class="primary-btn danger-confirm-btn" id="btn-confirm-newgame">
            <span>🔄</span>
            <span>نعم، ابدأ لعبة جديدة الآن</span>
          </button>
          <button class="secondary-btn cancel-btn" id="btn-cancel-newgame">
            <span>✕</span>
            <span>إلغاء والعودة للمزرعة</span>
          </button>
        </div>
      </div>
    `,document.getElementById(`btn-confirm-newgame`).onclick=()=>{$.harvest(),Eh({particleCount:50,spread:80,origin:{x:.5,y:.5}}),setTimeout(()=>{this.state?this.state.startNewGame():(localStorage.clear(),window.location.reload())},350)},document.getElementById(`btn-cancel-newgame`).onclick=()=>{$.click(),this.closeModal()},e.classList.remove(`hidden`)}openArrangePlotsModal(){this.activeModal=`arrange`;let e=document.getElementById(`modal-overlay`),t=document.getElementById(`modal-title`),n=document.getElementById(`modal-body`),r=this.engine&&this.engine.farmingPlotLayout||`grid_5x4`;t.innerHTML=`📐 ترتيب وتقسيم أرض الزراعة`,n.innerHTML=`
      <div class="arrange-modal-wrapper">
        <p class="arrange-modal-subtitle">اختر الشكل الهندسي الأنسب لأحواض الزراعة الخشبية في حديقتك. يمكنك تغيير الترتيب في أي وقت!</p>
        <div class="layout-cards-grid">${[{id:`grid_5x4`,name:`الشبكة المنتظمة (5×4)`,desc:`شبكة متراصة كلاسيكية موحدة للمزارعين المحترفين، ممتازة للري السريع والزراعة المنظمة في كتلة واحدة.`,icon:`▦`,diagram:`5 أعمدة × 4 صفوف متراصة`},{id:`twin_blocks`,name:`المصطبتان المتقابلتان (2×5)`,desc:`قطعتان زراعيتان متوازيتان يتوسطهما ممر مشاة واسع يسهل حركة المزارع ويسرع الوصول لكل نبتة.`,icon:`▥`,diagram:`مزرعتان منفصلتان بممر مشاة وسطي`},{id:`quad_blocks`,name:`المربعات الأربعة (تقاطع الطرق)`,desc:`توزيع رباعي هندسي راقي حول مفترق طرق مركزي يمنح المزرعة مظهراً جمالياً وتنظيماً فريداً لكل صنف.`,icon:`⊞`,diagram:`4 مربعات مستقلة حول تقاطع طرق`},{id:`long_terraces`,name:`المدرجات الطولية الممتدة`,desc:`خطوط زراعية طولية أنيقة ممتدة على طول الحقل، مثالية للأشجار والكروم والمحاصيل المتسلقة.`,icon:`☰`,diagram:`خطان طوليان بطول الحقل`}].map(e=>{let t=e.id===r;return`
        <div class="layout-card ${t?`selected`:``}" data-layout="${e.id}">
          <div class="layout-card-header">
            <span class="layout-icon">${e.icon}</span>
            <div class="layout-title-box">
              <h4>${e.name}</h4>
              <span class="layout-diagram">${e.diagram}</span>
            </div>
            ${t?`<span class="layout-active-badge">الترتيب النشط ✓</span>`:``}
          </div>
          <p class="layout-desc">${e.desc}</p>
          <button class="primary-btn select-layout-btn" data-layout="${e.id}">
            ${t?`مطبق حالياً 🌾`:`تطبيق هذا التقسيم ✨`}
          </button>
        </div>
      `}).join(``)}</div>
      </div>
    `,n.querySelectorAll(`.select-layout-btn`).forEach(e=>{e.onclick=()=>{let t=e.dataset.layout;$.till(),this.engine&&(this.engine.setLayout(t),this.engine.particles&&this.engine.particles.addFloatingText(`تم تطبيق التقسيم الجديد للأرض! 📐`,0,25,`#ffd166`,22)),this.closeModal()}}),e.classList.remove(`hidden`)}showLevelUpModal(e,t,n=0){let r=document.getElementById(`levelup-banner`),i=document.getElementById(`levelup-desc`);i.textContent=`ارتقيت في مهارة الزراعة إلى المستوى ${t} ومستوى المزرعة ${e}! تم فتح أرباح ومحاصيل جديدة وحصلت على منحة ${n||e*100} G 🪙!`,r.classList.remove(`hidden`),Eh({particleCount:80,spread:90,origin:{x:.5,y:.5}})}};function kh(){try{let e=new Oh,t=document.getElementById(`game-canvas`);if(!t)throw Error(`لم يتم العثور على عنصر canvas (#game-canvas) في الصفحة.`);let n=new Dh(t);e.attachEngine(n),n.start(),console.log(`🌾 لعبة مزرعة المروج الهادئة 3D جاهزة وتعمل بنجاح!`)}catch(e){console.error(`فشل بدء تشغيل اللعبة:`,e);let t=document.getElementById(`app`);t&&(t.innerHTML=`
        <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;background:#2d4a22;color:white;font-family:'Outfit','Cairo',sans-serif;direction:rtl;text-align:center;padding:24px;">
          <div style="font-size:4rem;margin-bottom:12px;">⚠️</div>
          <h2 style="font-size:1.8rem;margin-bottom:8px;font-family:'Cairo',sans-serif;">حدث خطأ أثناء تحميل اللعبة</h2>
          <p style="color:#ffd166;font-size:1.1rem;max-width:600px;margin-bottom:20px;line-height:1.6;font-family:'Cairo',sans-serif;">${e.message||`خطأ غير متوقع في محرك Three.js`}</p>
          <button onclick="location.reload()" style="background:#b45309;color:white;border:none;padding:12px 28px;border-radius:10px;font-size:1.1rem;font-weight:bold;cursor:pointer;font-family:'Cairo',sans-serif;box-shadow:0 4px 12px rgba(0,0,0,0.3);">إعادة تحميل الصفحة 🔄</button>
        </div>
      `)}}document.readyState===`loading`?window.addEventListener(`DOMContentLoaded`,kh):kh();