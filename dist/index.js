"use strict";var c=function(t,a){return function(){return a||t((a={exports:{}}).exports,a),a.exports}};var l=c(function(b,o){
var q=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,s=require('@stdlib/math-base-assert-is-nan/dist'),g=require('@stdlib/constants-float64-pinf/dist'),p=require('@stdlib/constants-float64-ninf/dist'),N=require('@stdlib/array-float64/dist'),w=require('@stdlib/error-tools-fmtprodmsg/dist');function F(t){var a,e,i,f,n;if(!q(t))throw new TypeError(w('1Iz8B',t));return a=new N(t),e=g,i=p,n=-1,f=0,m;function m(r){var u,v;if(arguments.length===0)return f===0?null:i-e;if(n=(n+1)%t,r===0&&(r=0),s(r))f=t,e=r,i=r;else if(f<t)f+=1,r<e&&(e=r),r>i&&(i=r);else if(a[n]===e&&r>e||a[n]===i&&r<i||s(a[n])){for(e=r,i=r,v=0;v<t;v++)if(v!==n){if(u=a[v],s(u)){e=u,i=u;break}u<e&&(e=u),u>i&&(i=u)}}else r<e?e=r:r>i&&(i=r);return a[n]=r,i-e}}o.exports=F
});var I=l();module.exports=I;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
