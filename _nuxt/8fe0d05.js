(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{267:function(t,e,n){var content=n(274);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(75).default)("26ff973e",content,!0,{sourceMap:!1})},273:function(t,e,n){"use strict";n(267)},274:function(t,e,n){var c=n(74)(!1);c.push([t.i,'.typer[data-v-ffc7968c]{position:relative;margin-right:4px}.typer--caret[data-v-ffc7968c]:after{content:"";position:absolute;right:-4px;width:2px;height:100%;background:currentColor;-webkit-animation:cursor-blink-data-v-ffc7968c .5s .5s infinite;animation:cursor-blink-data-v-ffc7968c .5s .5s infinite}@-webkit-keyframes cursor-blink-data-v-ffc7968c{0%,to{opacity:1}50%{opacity:0}}@keyframes cursor-blink-data-v-ffc7968c{0%,to{opacity:1}50%{opacity:0}}',""]),t.exports=c},286:function(t,e,n){"use strict";n.r(e);n(13),n(25),n(58);var c=n(1).a.extend({props:["values","duration"],data:function(){return{deleting:!1,value:"",index:0}},mounted:function(){this.tick()},computed:{complete:function(){var t=this.values[this.index];return this.value==t}},methods:{tick:function(){var t=this.values[this.index],e=300-100*Math.random();this.deleting?(this.value=t.substr(0,this.value.length-1),0==this.value.length?(this.deleting=!1,this.index+1>=this.values.length?this.index=0:this.index++,e=500):e/=2):(this.value=t.substr(0,this.value.length+1),this.value==t&&(e=this.duration,this.deleting=!0)),setTimeout(this.tick,e)}}}),o=(n(273),n(40)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{class:{typer:!0,"typer--caret":!t.complete}},[t._v(t._s(t.value))])}),[],!1,null,"ffc7968c",null);e.default=component.exports}}]);