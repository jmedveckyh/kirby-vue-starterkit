(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{229:function(e,t,l){var content=l(241);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(30).default)("7528b8bd",content,!1,{sourceMap:!1})},240:function(e,t,l){"use strict";var r=l(229);l.n(r).a},241:function(e,t,l){(t=l(29)(!1)).push([e.i,'.album-cover{position:relative;line-height:0;margin-bottom:6rem;background:#000;padding-bottom:75%}.album-cover figcaption{display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.5);text-align:center;color:#fff;line-height:1;padding:1.5rem}.album-cover figcaption,.album-cover img{position:absolute;bottom:0;left:0;right:0;top:0}.album-cover img{width:100%;height:100%}.album-cover h1{font-size:3rem}.album-text{max-width:40rem;margin:0 auto 6rem;text-align:center}.album-gallery{display:grid;grid-template-columns:repeat(3,1fr);align-items:center;margin:0 auto;grid-gap:1rem;max-width:calc(var(--content-width) - 15rem);justify-content:center}.album-gallery[data-even]{grid-template-columns:repeat(4,1fr)}.album-gallery[data-count="1"]{grid-template-columns:1fr}.album-gallery[data-count="2"]{grid-template-columns:1fr 1fr}',""]),e.exports=t},251:function(e,t,l){"use strict";l.r(t);var r={mixins:[l(84).a]},n=(l(240),l(9)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("main",{staticClass:"album"},[l("article",[l("header",[e.page.cover?l("figure",{staticClass:"album-cover"},[l("span",{domProps:{innerHTML:e._s(e.page.cover.html)}}),e._v(" "),l("figcaption",[l("h1",[e._v(e._s(e.page.headline))])])]):e._e()]),e._v(" "),l("div",{staticClass:"album-text text"},[l("span",{domProps:{innerHTML:e._s(e.page.description.html)}}),e._v(" "),e.page.tags?l("p",{staticClass:"album-tags tags"},[e._v(e._s(e.page.tags))]):e._e()]),e._v(" "),e.page.gallery?l("ul",{staticClass:"album-gallery",attrs:{"data-even":e.page.gallery.length%2==0,"data-count":e.page.gallery.length}},e._l(e.page.gallery,(function(image){return l("li",{key:image.url},[l("figure",[l("a",{attrs:{href:image.link}},[l("span",{domProps:{innerHTML:e._s(image.html)}})])])])})),0):e._e()])])}),[],!1,null,null,null);t.default=component.exports}}]);