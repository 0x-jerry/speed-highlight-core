var $=Object.create;var r=Object.defineProperty;var b=Object.getOwnPropertyDescriptor;var w=Object.getOwnPropertyNames;var v=Object.getPrototypeOf,A=Object.prototype.hasOwnProperty;var f=t=>r(t,"__esModule",{value:!0});var I=(t,a)=>{f(t);for(var n in a)r(t,n,{get:a[n],enumerable:!0})},T=(t,a,n)=>{if(a&&typeof a=="object"||typeof a=="function")for(let e of w(a))!A.call(t,e)&&e!=="default"&&r(t,e,{get:()=>a[e],enumerable:!(n=b(a,e))||n.enumerable});return t},p=t=>T(f(r(t!=null?$(v(t)):{},"default",t&&t.__esModule&&"default"in t?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t);I(exports,{highlightText:()=>j,printHighlight:()=>z,setTheme:()=>D});var g={num:{match:/(\.e?|\b)\d(e-|[\d.oxa-fA-F_])*(\.|\b)/g,type:"num"},str:{match:/(["'])(\\[^]|(?!\1)[^\r\n\\])*\1?/g,type:"str"},strDouble:{match:/"((?!")[^\r\n\\]|\\[^])*"?/g,type:"str"}};var o={};async function m(t,a,n){var u;let e,l,i={},x,s=[],h=0,d=typeof a=="string"?await((u=o[a])!=null?u:o[a]=Promise.resolve().then(()=>p(require(`./languages/${a}.js`)))):a,c=[...typeof a=="string"?d.default:a.sub];for(;h<t.length;){for(i.index=null,e=c.length;e-- >0;){if(l=c[e].expand?g[c[e].expand]:c[e],s[e]===void 0||s[e].match.index<h){if(l.match.lastIndex=h,x=l.match.exec(t),x===null){c.splice(e,1),s.splice(e,1);continue}s[e]={match:x,lastIndex:l.match.lastIndex}}s[e].match[0]&&(s[e].match.index<=i.index||i.index===null)&&(i={part:l,index:s[e].match.index,match:s[e].match[0],end:s[e].lastIndex})}if(i.index===null)break;n(t.slice(h,i.index),d.type),h=i.end,i.part.sub?await m(i.match,typeof i.part.sub=="string"?i.part.sub:i.part,n):n(i.match,i.part.type)}n(t.slice(h,t.length),d.type)}var y={},j=async(t,a)=>{let n="";return await m(t,a,(e,l)=>{var i;return n+=l?`${(i=y[l])!=null?i:""}${e}[0m`:e}),n},z=async(...t)=>console.log(await j(...t)),D=async t=>y=(await Promise.resolve().then(()=>p(require(`./themes/${t}.js`)))).default;0&&(module.exports={highlightText,printHighlight,setTheme});
