(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[691],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},2858:function(e){e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},3884:function(e){e.exports=function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(c){u=!0,o=c}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}},e.exports.__esModule=!0,e.exports.default=e.exports},521:function(e){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},3038:function(e,t,r){var n=r(2858),o=r(3884),a=r(379),i=r(521);e.exports=function(e,t){return n(e)||o(e,t)||a(e,t)||i()},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,r){var n=r(3646),o=r(6860),a=r(379),i=r(8206);e.exports=function(e){return n(e)||o(e)||a(e)||i()},e.exports.__esModule=!0,e.exports.default=e.exports},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},7091:function(e){"use strict";var t="%[a-f0-9]{2}",r=new RegExp(t,"gi"),n=new RegExp("("+t+")+","gi");function o(e,t){try{return decodeURIComponent(e.join(""))}catch(a){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],o(r),o(n))}function a(e){try{return decodeURIComponent(e)}catch(a){for(var t=e.match(r),n=1;n<t.length;n++)t=(e=o(t,n).join("")).match(r);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var r={"%FE%FF":"��","%FF%FE":"��"},o=n.exec(e);o;){try{r[o[0]]=decodeURIComponent(o[0])}catch(t){var i=a(o[0]);i!==o[0]&&(r[o[0]]=i)}o=n.exec(e)}r["%C2"]="�";for(var u=Object.keys(r),c=0;c<u.length;c++){var s=u[c];e=e.replace(new RegExp(s,"g"),r[s])}return e}(e)}}},8616:function(e){"use strict";e.exports=function(e,t){for(var r={},n=Object.keys(e),o=Array.isArray(t),a=0;a<n.length;a++){var i=n[a],u=e[i];(o?-1!==t.indexOf(i):t(i,u,e))&&(r[i]=u)}return r}},2203:function(e,t,r){"use strict";var n=r(9713),o=r(3038),a=r(319);function i(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw a}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var c=r(8936),s=r(7091),l=r(4734),p=r(8616),f=Symbol("encodeFragmentIdentifier");function d(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function g(e,t){return t.encode?t.strict?c(e):encodeURIComponent(e):e}function m(e,t){return t.decode?s(e):e}function y(e){return Array.isArray(e)?e.sort():"object"==typeof e?y(Object.keys(e)).sort((function(e,t){return Number(e)-Number(t)})).map((function(t){return e[t]})):e}function x(e){var t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function v(e){var t=(e=x(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function h(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function b(e,t){d((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);var r=function(e){var t;switch(e.arrayFormat){case"index":return function(e,r,n){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return function(e,r,n){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"colon-list-separator":return function(e,r,n){t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":case"separator":return function(t,r,n){var o="string"==typeof r&&r.includes(e.arrayFormatSeparator),a="string"==typeof r&&!o&&m(r,e).includes(e.arrayFormatSeparator);r=a?m(r,e):r;var i=o||a?r.split(e.arrayFormatSeparator).map((function(t){return m(t,e)})):null===r?r:m(r,e);n[t]=i};case"bracket-separator":return function(t,r,n){var o=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),o){var a=null===r?[]:r.split(e.arrayFormatSeparator).map((function(t){return m(t,e)}));void 0!==n[t]?n[t]=[].concat(n[t],a):n[t]=a}else n[t]=r?m(r,e):r};default:return function(e,t,r){void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;var a,u=i(e.split("&"));try{for(u.s();!(a=u.n()).done;){var c=a.value;if(""!==c){var s=l(t.decode?c.replace(/\+/g," "):c,"="),p=o(s,2),f=p[0],g=p[1];g=void 0===g?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?g:m(g,t),r(m(f,t),g,n)}}}catch(I){u.e(I)}finally{u.f()}for(var x=0,v=Object.keys(n);x<v.length;x++){var b=v[x],w=n[b];if("object"==typeof w&&null!==w)for(var k=0,j=Object.keys(w);k<j.length;k++){var Z=j[k];w[Z]=h(w[Z],t)}else n[b]=h(w,t)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce((function(e,t){var r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=y(r):e[t]=r,e}),Object.create(null))}t.extract=v,t.parse=b,t.stringify=function(e,t){if(!e)return"";d((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);for(var r=function(r){return t.skipNull&&null==e[r]||t.skipEmptyString&&""===e[r]},n=function(e){switch(e.arrayFormat){case"index":return function(t){return function(r,n){var o=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[[g(t,e),"[",o,"]"].join("")]:[[g(t,e),"[",g(o,e),"]=",g(n,e)].join("")])}};case"bracket":return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[[g(t,e),"[]"].join("")]:[[g(t,e),"[]=",g(n,e)].join("")])}};case"colon-list-separator":return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[[g(t,e),":list="].join("")]:[[g(t,e),":list=",g(n,e)].join("")])}};case"comma":case"separator":case"bracket-separator":var t="bracket-separator"===e.arrayFormat?"[]=":"=";return function(r){return function(n,o){return void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[g(r,e),t,g(o,e)].join("")]:[[n,g(o,e)].join(e.arrayFormatSeparator)])}};default:return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[g(t,e)]:[[g(t,e),"=",g(n,e)].join("")])}}}}(t),o={},i=0,u=Object.keys(e);i<u.length;i++){var c=u[i];r(c)||(o[c]=e[c])}var s=Object.keys(o);return!1!==t.sort&&s.sort(t.sort),s.map((function(r){var o=e[r];return void 0===o?"":null===o?g(r,t):Array.isArray(o)?0===o.length&&"bracket-separator"===t.arrayFormat?g(r,t)+"[]":o.reduce(n(r),[]).join("&"):g(r,t)+"="+g(o,t)})).filter((function(e){return e.length>0})).join("&")},t.parseUrl=function(e,t){t=Object.assign({decode:!0},t);var r=l(e,"#"),n=o(r,2),a=n[0],i=n[1];return Object.assign({url:a.split("?")[0]||"",query:b(v(e),t)},t&&t.parseFragmentIdentifier&&i?{fragmentIdentifier:m(i,t)}:{})},t.stringifyUrl=function(e,r){r=Object.assign(n({encode:!0,strict:!0},f,!0),r);var o=x(e.url).split("?")[0]||"",a=t.extract(e.url),i=t.parse(a,{sort:!1}),u=Object.assign(i,e.query),c=t.stringify(u,r);c&&(c="?".concat(c));var s=function(e){var t="",r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(s="#".concat(r[f]?g(e.fragmentIdentifier,r):e.fragmentIdentifier)),"".concat(o).concat(c).concat(s)},t.pick=function(e,r,o){o=Object.assign(n({parseFragmentIdentifier:!0},f,!1),o);var a=t.parseUrl(e,o),i=a.url,u=a.query,c=a.fragmentIdentifier;return t.stringifyUrl({url:i,query:p(u,r),fragmentIdentifier:c},o)},t.exclude=function(e,r,n){var o=Array.isArray(r)?function(e){return!r.includes(e)}:function(e,t){return!r(e,t)};return t.pick(e,o,n)}},4734:function(e){"use strict";e.exports=function(e,t){if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];var r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},8936:function(e){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())}))}},7041:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return z}});var n=r(7294),o=r(8081),a=r(6771),i=r(396),u=r(3431);var c=(0,a.Z)(i.G,{target:"e1n1u3tj0"})({name:"odzoug",styles:"width:140px;height:140px;margin-bottom:30px;border-radius:50%;object-fit:cover;object-position:center top;@media (max-width: 768px){width:80px;height:80px;}"}),s=function(e){var t=e.profileImage;return(0,u.tZ)(c,{image:t,alt:"profile image"})};var l=(0,a.Z)("div",{target:"e160b013"})({name:"1474z1o",styles:"width:100%;background-image:linear-gradient(60deg, #0f0f0f 0%, #505050 100%);color:#fff"}),p=(0,a.Z)("div",{target:"e160b012"})({name:"vpo5dv",styles:"display:flex;justify-content:space-between;align-items:center;width:768px;height:300px;margin:0 auto;@media (max-width: 768px){width:100%;height:200px;padding:0 20px;}"}),f=(0,a.Z)("div",{target:"e160b011"})({name:"1h8u8jj",styles:"font-size:20px;font-weight:400;@media (max-width: 768px){font-size:15px;}"}),d=(0,a.Z)("div",{target:"e160b010"})({name:"1mgdphf",styles:"margin-top:5px;font-size:35px;font-weight:700;@media (max-width: 768px){font-size:25px;}"}),g=function(e){var t=e.profileImage;return(0,u.tZ)(l,null,(0,u.tZ)(p,null,(0,u.tZ)(s,{profileImage:t}),(0,u.tZ)("div",null,(0,u.tZ)(f,null,"Nice to Meet You"),(0,u.tZ)(d,null,"I`m Junior Frontend Developer Woo."))))};var m=r(1597),y=function(e){var t=e.nowPath,r=e.params;return r?t+Object.entries(r).reduce((function(e,t){var r=t[0],n=t[1];return r&&n?(e.push([r,n]),e):e}),[]).reduce((function(e,t,r){var n=t[0],o=t[1];return 0===r?""+e+n+"="+o:e+"&"+n+"="+o}),"?"):t},x=["active"];var v=function(e){var t=e.categoryList,r=e.selectedCategory;return(0,u.tZ)(h,null,Object.entries(t).map((function(e){var t=e[0],n=e[1];return(0,u.tZ)(b,{to:y({nowPath:"/",params:{category:t}}),active:t===r,key:t},"#",t,"(",n,")")})))},h=(0,a.Z)("div",{target:"e1kn8q5k1"})({name:"1rkqi5i",styles:"display:flex;flex-wrap:wrap;width:768px;margin:60px auto 0;@media (max-width: 768px){width:100%;margin-top:50px;padding:0 20px;}"}),b=(0,a.Z)((function(e){e.active;var t=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,x);return(0,u.tZ)(m.rU,t)}),{target:"e1kn8q5k0"})("margin-right:20px;padding:5px 0;font-size:18px;font-weight:",(function(e){return e.active?"800":"400"}),";color:",(function(e){return e.active?"black":"grey"}),";cursor:pointer;transition:color 0.3s ease-in;&:hover{color:black;}&:list-of-type{margin-right:0;}@media (max-width: 768px){font-size:15px;}"),w=r(7462);var k=function(e){var t=e.title,r=e.date,n=e.categories,o=e.thumbnail.childImageSharp.gatsbyImageData,a=e.summary,i=e.link;return(0,u.tZ)(j,{to:i},(0,u.tZ)(Z,{image:o,alt:"Post Item Image"}),(0,u.tZ)(I,null,(0,u.tZ)(S,null,t),(0,u.tZ)(O,null,r),(0,u.tZ)(A,null,n.map((function(e){return(0,u.tZ)(_,{key:e},e)}))),(0,u.tZ)(F,null,a)))},j=(0,a.Z)(m.rU,{target:"e1eg5kak7"})({name:"kr3uq5",styles:"display:flex;border-radius:10px;box-shadow:0 0 8px rgba(0, 0, 0, 0.15);transition:0.3s box-shadow;cursor:pointer;margin-bottom:20px;&:hover{box-shadow:0 0 10px rgba(0, 0, 0, 0.3);}"}),Z=(0,a.Z)(i.G,{target:"e1eg5kak6"})({name:"vv778z",styles:"width:300px;border-radius:10px"}),I=(0,a.Z)("div",{target:"e1eg5kak5"})({name:"1do7u82",styles:"flex:1;display:flex;flex-direction:column;padding:15px"}),S=(0,a.Z)("div",{target:"e1eg5kak4"})({name:"kw2b4d",styles:"display:-webkit-box;overflow:hidden;margin-bottom:3px;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:20px;font-weight:700"}),O=(0,a.Z)("div",{target:"e1eg5kak3"})({name:"xm5j9w",styles:"font-size:14px;font-weight:400;opacity:0.7"}),A=(0,a.Z)("div",{target:"e1eg5kak2"})({name:"1bobky6",styles:"display:flex;flex-wrap:wrap;margin-top:10px;margin:10px -5px"}),_=(0,a.Z)("div",{target:"e1eg5kak1"})({name:"1bzcbme",styles:"margin:2.5px 5px;padding:3px 5px;border-radius:3px;background:black;font-size:14px;font-weight:700;color:white"}),F=(0,a.Z)("div",{target:"e1eg5kak0"})({name:"1wehmme",styles:"display:-webkit-box;overflow:hidden;margin-top:auto;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:16px;opacity:0.8"}),C=function(e){var t=e.selectedCategory,r=e.posts,o=e.searchWord,a=(0,n.useRef)(null),i=(0,n.useRef)(null),u=(0,n.useState)(1),c=u[0],s=u[1],l=(0,n.useMemo)((function(){var e=o.toLowerCase();return"All"===t?o?r.filter((function(t){return t.node.frontmatter.title.toLowerCase().includes(e)})):r:r.filter((function(r){var n=r.node.frontmatter,a=n.categories,i=n.title;return o?i.toLowerCase().includes(e)&&a.includes(t):a.includes(t)}))}),[t,o,r]);return(0,n.useEffect)((function(){i.current=new IntersectionObserver((function(e,t){e[0].isIntersecting&&(s((function(e){return e+1})),t.unobserve(e[0].target))}))}),[]),(0,n.useEffect)((function(){s(1)}),[t]),(0,n.useEffect)((function(){10*c>=l.length||null===a.current||0===a.current.children.length||null===i.current||i.current.observe(a.current.children[a.current.children.length-1])}),[c,t]),{containerRef:a,postList:l.slice(0,10*c)}};var E=function(e){var t=e.posts,r=e.selectedCategory,n=e.searchWord,o=C({posts:t,selectedCategory:r,searchWord:n}),a=o.containerRef,i=o.postList;return(0,u.tZ)(U,{ref:a},i.map((function(e){var t=e.node,r=t.id,n=t.frontmatter,o=t.fields.slug;return(0,u.tZ)(k,(0,w.Z)({},n,{link:o,key:r}))})))},U=(0,a.Z)("div",{target:"es8e92y0"})({name:"xx64r9",styles:"width:768px;margin:0 auto;padding:50px 0 100px;@media (max-width: 768px){width:100%;padding:50px 20px;}"});var M=function(e){var t=e.searchWord,r=(0,n.useRef)(null),o=function(){var e;(0,m.c4)(y({nowPath:"/",params:{search:(null===(e=r.current)||void 0===e?void 0:e.value)||""}}))};return(0,n.useEffect)((function(){r.current&&(r.current.value=t||"")}),[r.current]),(0,u.tZ)(R,null,(0,u.tZ)("label",{htmlFor:"search__title"},"검색"),(0,u.tZ)("input",{id:"search__title",ref:r,placeholder:"제목으로 검색",onKeyUp:function(e){"Enter"===e.key&&o()}}),(0,u.tZ)("button",{type:"button",onClick:o},"검색"))},R=(0,a.Z)("section",{target:"e14usea0"})({name:"7eyvcv",styles:"display:flex;justify-content:center;margin-top:30px;& label{visibility:hidden;}& input{width:300px;height:36px;padding:0px 10px;border-right:none;border-radius:8px 0px 0px 8px;&:focus{outline:none;}}& button{width:60px;background:black;color:white;border:none;border-radius:0px 8px 8px 0px;cursor:pointer;}"}),N=r(2203),z=function(e){var t=e.location.search,r=e.data,a=r.site.siteMetadata,i=a.title,c=a.description,s=a.siteUrl,l=r.allMarkdownRemark.edges,p=r.file,f=p.childImageSharp.gatsbyImageData,d=p.publicURL,m=N.parse(t),y="string"==typeof m.category&&m.category?m.category:"All",x="string"==typeof m.search&&m.search?m.search:"",h=(0,n.useMemo)((function(){return l.reduce((function(e,t){var r=t.node.frontmatter,n=r.categories;r.title;return n.forEach((function(t){void 0===e[t]?e[t]=1:e[t]++})),e.All+=1,e}),{All:0})}),[]);return(0,u.tZ)(o.Z,{title:i,description:c,url:s,image:d},(0,u.tZ)(g,{profileImage:f}),(0,u.tZ)(M,{searchWord:x}),(0,u.tZ)(v,{selectedCategory:y,categoryList:h}),(0,u.tZ)(E,{searchWord:x,selectedCategory:y,posts:l}))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-fd1771883318b4998632.js.map