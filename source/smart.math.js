
/* Smart HTML Elements v4.1.0 (2019-Aug) 
Copyright (c) 2011-2019 jQWidgets. 
License: https://htmlelements.com/license/ */

let bigIntNativeSupport;try{BigInt,bigIntNativeSupport=!0}catch(a){bigIntNativeSupport=!1}Smart.Utilities.Assign("BigNumber",class{constructor(a,b,c){var d,e=Math.abs,f=this;if(Smart.Utilities.BigNumber.bigIntSupport){if(a instanceof Smart.Utilities.BigNumber)if(Array.isArray(a._d))a=(a._s?"-":"")+(a._d.slice(0,a._f).join("")||"0")+(a._f==a._d.length?"":"."+a._d.slice(a._f).join(""));else return new Smart.Utilities.BigNumber(a._d);try{f._d=null===a?BigInt(0):"string"==typeof a&&-1!==a.toLowerCase().indexOf("e")?BigInt(parseFloat(a)):BigInt(a)}catch(b){try{const b=a.toString().split(".");let c=BigInt(b[0]),d=parseInt(b[1].charAt(0));if(0<c&&5<=d)c+=BigInt(1);else if(0>c)if(5<d)c-=BigInt(1);else if(5===d){let a=1,d=b[1].charAt(a),e=!1;for(;""!==d;)if(a++,d=b[1].charAt(a),"0"!==d){e=!0;break}e&&(c-=BigInt(1))}f._d=c}catch(a){f._d=BigInt(0)}}return f._f=f._d.toString().replace("-","").length,void(f._s=0>f._d)}if(a instanceof Smart.Utilities.BigNumber){if("bigint"==typeof a._d)return new Smart.Utilities.BigNumber(a._d.toString());for(d in{precision:0,roundType:0,_s:0,_f:0})f[d]=a[d];return f._d=a._d.slice(),void(a._s&&1===a._d.length&&0===a._d[0]&&(f._s=!1))}if(void 0!==a&&("-0"===a&&(a="0"),new RegExp(/e/i).test(a))){var g=a.toString().toLowerCase(),h=g.indexOf("e"),j=new Smart.Utilities.BigNumber(g.slice(0,h)),k=g.slice(h+2),l=g.slice(h+1,h+2),m=new Smart.Utilities.BigNumber(10),o=m.pow(l+k),q=j.multiply(o);a=q.toString()}for(f.precision=isNaN(b=e(b))?Smart.Utilities.BigNumber.defaultPrecision:b,f.roundType=isNaN(c=e(c))?Smart.Utilities.BigNumber.defaultRoundType:c,f._s="-"==(a+="").charAt(0),f._f=((a=a.replace(/[^\d.]/g,"").split(".",2))[0]=a[0].replace(/^0+/,"")||"0").length,d=(a=f._d=(a.join("")||"0").split("")).length;d;a[--d]=+a[d]);f.round()}static get defaultPrecision(){return 40}static get defaultRoundType(){return 4}static get bigIntSupport(){return bigIntNativeSupport&&!0!==Smart.Utilities.BigNumber.ignoreBigIntNativeSupport}add(c){if(Smart.Utilities.BigNumber.bigIntSupport)return new Smart.Utilities.BigNumber(this._d+new Smart.Utilities.BigNumber(c)._d);let d=this.normalizeOperand(this);if(c=d.normalizeOperand(c),d.isZero()&&d._s&&(d._s=!1),0===c||c.constructor===Smart.Utilities.BigNumber&&1===c._d.length&&0===c._d[0])return new Smart.Utilities.BigNumber(d);if(d._s!=(c=new Smart.Utilities.BigNumber(c))._s)return c._s^=1,d.subtract(c);var e,f,g=new Smart.Utilities.BigNumber(d),h=g._d,a=c._d,b=g._f,j=c._f;for(c=Math.max(b,j),b!=j&&(0<(j=b-j)?g._zeroes(a,j,1):g._zeroes(h,-j,1)),e=(b=h.length)==(j=a.length)?h.length:(0<(j=b-j)?g._zeroes(a,j):g._zeroes(h,-j)).length,f=0;e;f=(h[--e]=h[e]+a[e]+f)/10>>>0,h[e]%=10);return f&&++c&&h.unshift(f),g._f=c,g.round()}subtract(e){if(Smart.Utilities.BigNumber.bigIntSupport)return new Smart.Utilities.BigNumber(this._d-new Smart.Utilities.BigNumber(e)._d);let f=this.normalizeOperand(this);if(e=f.normalizeOperand(e),f.isZero()&&f._s&&(f._s=!1),0===e||e.constructor===Smart.Utilities.BigNumber&&1===e._d.length&&0===e._d[0])return new Smart.Utilities.BigNumber(f);if(f._s!=(e=new Smart.Utilities.BigNumber(e))._s)return e._s^=1,f.add(e);var g,h,k=new Smart.Utilities.BigNumber(f),l=k.abs().compare(e.abs())+1,c=l?k:e,m=l?e:k,o=c._f,p=m._f,q=o;for(c=c._d,m=m._d,o!=p&&(0<(p=o-p)?k._zeroes(m,p,1):k._zeroes(c,-p,1)),g=(o=c.length)==(p=m.length)?c.length:(0<(p=o-p)?k._zeroes(m,p):k._zeroes(c,-p)).length;g;){if(c[--g]<m[g]){for(h=g;h&&!c[--h];c[h]=9);--c[h],c[g]+=10}m[g]=c[g]-m[g]}return l||(k._s^=1),k._f=q,k._d=m,k.round()}multiply(c){if(Smart.Utilities.BigNumber.bigIntSupport)return new Smart.Utilities.BigNumber(this._d*new Smart.Utilities.BigNumber(c)._d);let d=this.normalizeOperand(this);c=d.normalizeOperand(c);var e,f,g,h=new Smart.Utilities.BigNumber(d),k=h._d.length>=(c=new Smart.Utilities.BigNumber(c))._d.length,l=(k?h:c)._d,a=(k?c:h)._d,b=l.length,m=a.length,o=new Smart.Utilities.BigNumber;for(e=m;e;k&&g.unshift(k),o.set(o.add(new Smart.Utilities.BigNumber(g.join("")))))for(g=Array(m- --e).join("0").split(""),k=0,f=b;f;k+=l[--f]*a[e],g.unshift(k%10),k=k/10>>>0);return h._s=h._s!=c._s,h._f=((k=b+m-h._f-c._f)>=(f=(h._d=o._d).length)?d._zeroes(h._d,k-f+1,1).length:f)-k,h.round()}divide(d){if(Smart.Utilities.BigNumber.bigIntSupport)return new Smart.Utilities.BigNumber(this._d/new Smart.Utilities.BigNumber(d)._d);let g=this.normalizeOperand(this);if(d=g.normalizeOperand(d),"0"==(d=new Smart.Utilities.BigNumber(d)))throw new Error("Division by 0");else if("0"==g)return new Smart.Utilities.BigNumber;var h,k,m,p=new Smart.Utilities.BigNumber(g),o=p._d,a=d._d,q=o.length-p._f,t=a.length-d._f,u=new Smart.Utilities.BigNumber,r=0,v=1,w=0,x=0;for(u._s=p._s!=d._s,u.precision=Math.max(p.precision,d.precision),u._f=+u._d.pop(),q!=t&&p._zeroes(q>t?a:o,Math.abs(q-t)),d._f=a.length,a=d,a._s=!1,a=a.round(),d=new Smart.Utilities.BigNumber;"0"==o[0];o.shift());out:do{for(m=w=0,"0"==d&&(d._d=[],d._f=0);r<o.length&&-1==d.compare(a);++r){if((m=r+1==o.length,!v&&1<++w||(x=m&&"0"==d&&"0"==o[r]))&&(u._f==u._d.length&&++u._f,u._d.push(0)),"0"==o[r]&&"0"==d||(d._d.push(o[r]),++d._f),x)break out;if(m&&-1==d.compare(a)&&(u._f==u._d.length&&++u._f,1)||(m=0))for(;u._d.push(0),d._d.push(0),++d._f,-1==d.compare(a););}if(v=0,-1==d.compare(a)&&!(m=0))for(;m?u._d.push(0):m=1,d._d.push(0),++d._f,-1==d.compare(a););var z;for(k=new Smart.Utilities.BigNumber,h=0;d.compare(z=k.add(a))+1&&++h;k.set(z));d.set(d.subtract(k)),m||u._f!=u._d.length||++u._f,u._d.push(h)}while((r<o.length||"0"!=d)&&u._d.length-u._f<=u.precision);return u.round()}mod(a){if(Smart.Utilities.BigNumber.bigIntSupport)return new Smart.Utilities.BigNumber(this._d%new Smart.Utilities.BigNumber(a)._d);let b=this.normalizeOperand(this);a=b.normalizeOperand(a);var c=b.subtract(b.divide(a).intPart().multiply(a));return c.isZero()&&c._s&&(c._s=!c._s),c}pow(a){if(Smart.Utilities.BigNumber.bigIntSupport){let b=BigInt(1);for(let c=BigInt(0);c<new Smart.Utilities.BigNumber(a)._d;c+=BigInt(1))b*=this._d;return new Smart.Utilities.BigNumber(b)}let b=this.normalizeOperand(this);a=b.normalizeOperand(a);var c,d=new Smart.Utilities.BigNumber(b);if(0==(a=new Smart.Utilities.BigNumber(a).intPart()))return d.set(1);for(c=Math.abs(a);--c;d.set(d.multiply(b)));return 0>a?d.set(new Smart.Utilities.BigNumber(1).divide(d)):d}set(a){return a=new Smart.Utilities.BigNumber(a),this._d=a._d,this._f=a._f,this._s=a._s,this}compare(c){if(Smart.Utilities.BigNumber.bigIntSupport){const a=new Smart.Utilities.BigNumber(c)._d;return this._d===a?0:this._d>a?1:-1}let d=this.normalizeOperand(this);c=d.normalizeOperand(c);var e,f,g,h=d,a=d._f,j=new Smart.Utilities.BigNumber(c),k=j._f,m=[-1,1];if(h.isZero()&&j.isZero())return 0;if(h._s!=j._s)return h._s?-1:1;if(a!=k)return m[a>k^h._s];for(a=(g=h._d).length,k=(j=j._d).length,e=-1,f=Math.min(a,k);++e<f;)if(g[e]!=j[e])return m[g[e]>j[e]^h._s];return a==k?0:m[a>k^h._s]}negate(){if(Smart.Utilities.BigNumber.bigIntSupport)return new Smart.Utilities.BigNumber(this._d*BigInt(-1));let a=this.normalizeOperand(this);var b=new Smart.Utilities.BigNumber(a);return b._s^=1,b}abs(){if(Smart.Utilities.BigNumber.bigIntSupport)return new Smart.Utilities.BigNumber(0>this._d?this._d*BigInt(-1):this._d);let a=this.normalizeOperand(this);var b=new Smart.Utilities.BigNumber(a);return b._s=0,b}intPart(){if(Smart.Utilities.BigNumber.bigIntSupport)return new Smart.Utilities.BigNumber(this._d);let a=this.normalizeOperand(this);return new Smart.Utilities.BigNumber((a._s?"-":"")+(a._d.slice(0,a._f).join("")||"0"))}valueOf(a,b){let c=this.normalizeOperand(this);return c.toString(a,b)}toString(a,b,c){function d(a,b,c){var d="";if(String.prototype.repeat){var e="0".repeat(c-a.length);a=e+a}for(;a.length<c;)a="0"+a;d=a.replace(/0/g,"a"),d=d.replace(/1/g,"b"),d=d.replace(/a/g,"1"),d=d.replace(/b/g,"0");for(var f=!0,g="",h=d.length-1;0<=h;h--){var i,m=d.charAt(h);"0"===m?!0===f?(i="1",f=!1):i="0":!0===f?i="0":i="1",g=i+""+g}switch(b){case 2:return g;case 8:var n,o;8===c?(n=3,o="0"):16===c?(n=6,o="00"):32===c?(n=11,o="0"):64===c?(n=22,o="00"):void 0,g=o+g;for(var p,q="",r=n;1<=r;r--)p=g[3*r-3]+""+g[3*r-2]+""+g[3*r-1],q=parseInt(p,2).toString(8)+""+q;return q;case 16:var s;8===c?s=2:16===c?s=4:32===c?s=8:64===c?s=16:void 0;for(var t,u="",v=s;1<=v;v--)t=g[4*v-4]+""+g[4*v-3]+""+g[4*v-2]+""+g[4*v-1],u=parseInt(t,2).toString(16)+""+u;return u.toUpperCase();}}function e(a){var b,c,d=new Smart.Utilities.BigNumber(2),e=[];c=void 0===a?h:a;do b=c.mod(d),e.push(b.toString()),c=c.subtract(b).divide(d).intPart();while(1===c.compare(new Smart.Utilities.BigNumber(0)));return e.reverse().join("")}function f(a){for(var b="";0!=a.length%3;)a="0"+a;for(var c,d=a.length/3;1<=d;d--)c=a[3*d-3]+""+a[3*d-2]+""+a[3*d-1],b=parseInt(c,2).toString(8)+""+b;return b}function g(a){for(var b="";0!=a.length%4;)a="0"+a;for(var c,d=a.length/4;1<=d;d--)c=a[4*d-4]+""+a[4*d-3]+""+a[4*d-2]+""+a[4*d-1],b=parseInt(c,2).toString(16)+""+b;return b}let h,i;if(Smart.Utilities.BigNumber.bigIntSupport?(h=this,i=Array.isArray(h._d)?(h._s?"-":"")+(h._d.slice(0,h._f).join("")||"0")+(h._f==h._d.length?"":"."+h._d.slice(h._f).join("")):this._d.toString()):(h=this.normalizeOperand(this),i=(h._s?"-":"")+(h._d.slice(0,h._f).join("")||"0")+(h._f==h._d.length?"":"."+h._d.slice(h._f).join(""))),void 0===a||10===a)return i;let j;if(-1<h.compare(0))2===a?(j=e(),c&&(j=j.padStart(b,"0"))):8===a?j=f(e()):16===a?(j=g(e()).toUpperCase(),c&&(j=j.padStart(b/4,"0"))):void 0;else{var k=h.negate(),l=e(k);j=d(l,a,b)}return j}_zeroes(a,b,c){var d=["push","unshift"][c||0];for(++b;--b;a[d](0));return a}round(){if("_rounding"in this)return this;var a,c,e,f,g=Smart.Utilities.BigNumber,h=this.roundType,i=this._d;for(this._rounding=!0;1<this._f&&!i[0];--this._f,i.shift());for(a=this._f,c=this.precision+a,e=i[c];i.length>a&&!i[i.length-1];i.pop());return f=(this._s?"-":"")+(c-a?"0."+this._zeroes([],c-a-1).join(""):"")+1,i.length>c&&(e&&h!=g.DOWN&&(h==g.UP||(h==g.CEIL?!this._s:h==g.FLOOR?this._s:h==g.HALF_UP?5<=e:h==g.HALF_DOWN?5<e:h==g.HALF_EVEN&&5<=e&&1&i[c-1]))&&this.add(f),i.splice(c,i.length-c)),(delete this._rounding,this)}isZero(){return 1===this._d.length&&0===this._d[0]}normalizeOperand(a){return a instanceof Smart.Utilities.BigNumber&&"bigint"==typeof a._d?new Smart.Utilities.BigNumber(a._d.toString()):a}});