(()=>{"use strict";function t(t,e,i,s){var r=new Image;return r.src=t,{width:e,height:i,image:r,states:Object.keys(s).reduce((function(t,r){var h=r;return t[h]={x:Array(s[h].frames).fill(e).map((function(t,e){return t*e})),y:s[h].row*i,inset:s[h].inset},t}),{})}}var e=[{name:"explosion",src:"particles/boom.png",width:100,height:90,relativeHeight:90,states:{idle:{row:0,frames:5,inset:{top:0,right:0,bottom:0,left:0}}}}];function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function h(t,e,i){return e&&r(t.prototype,e),i&&r(t,i),t}function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function o(t){return o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},o(t)}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},l(t,e)}function c(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var s,r,h,n,a=o(t);if(e){var l=o(this).constructor;s=Reflect.construct(a,arguments,l)}else s=a.apply(this,arguments);return r=this,!(h=s)||"object"!=((n=h)&&"undefined"!=typeof Symbol&&n.constructor===Symbol?"symbol":typeof n)&&"function"!=typeof h?i(r):h}}var u=function(){function t(e,i,r,h,o){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:o;s(this,t),n(this,"markForDeletion",void 0),n(this,"x",void 0),n(this,"y",void 0),n(this,"speedX",void 0),n(this,"speedY",void 0),n(this,"width",void 0),n(this,"height",void 0),this.x=e,this.y=i,this.speedX=r,this.speedY=h,this.width=o,this.height=a,this.markForDeletion=!1}return h(t,[{key:"draw",value:function(t,e,i){}}]),t}(),f=function(t){a(r,t);var e=c(r);function r(t,h){var o;return s(this,r),n(i(o=e.call(this,t+(60*Math.random()-30),h,Math.random(),Math.random(),10*Math.random()+10)),"background",void 0),o.background="rgba(0,0,0,0.2)",o}return h(r,[{key:"draw",value:function(t,e,i){this.x-=this.speedX+e,this.y-=this.speedY,this.width*=.95,this.width<.5?this.markForDeletion=!0:(t.beginPath(),t.arc(this.x+e,this.y,this.width,0,2*Math.PI),t.fillStyle=this.background,t.fill())}}]),r}(u),g=t(e[0].src,e[0].width,e[0].height,e[0].states),d=function(t){a(r,t);var e=c(r);function r(t,h,o,a,l){var c;return s(this,r),n(i(c=e.call(this,t,h,0,0,g.width,g.height)),"state","idle"),n(i(c),"sprite",void 0),n(i(c),"width",void 0),n(i(c),"height",void 0),n(i(c),"frameOffset",void 0),c.sprite=g,c.width=o,c.height=a,c.frameOffset=l,c}return h(r,[{key:"draw",value:function(t,e,i){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,r=this.sprite.states[this.state],h=s-this.frameOffset,n=r.x[h],o=r.y;h!==r.x.length?t.drawImage(this.sprite.image,n,o,this.sprite.width,this.sprite.height,this.x-e,this.y,this.width,this.height):this.markForDeletion=!0}}]),r}(u);function v(t,e,i,s){var r=t[i]>e[i],h=t[i]<e[i],n=t[i]<e[s],o=t[s]>e[i],a=t[s]>e[s],l=t[s]<e[s];return r&&h||o&&l||o&&h||a&&n}function y(t,e,i,s){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,h=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,n={left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height},o={left:n.left+r,top:n.top+h,right:n.right+r,bottom:n.bottom+h},a={left:e.x-i,top:e.y,right:e.x-i+e.width,bottom:e.y+e.height};if(a.left>s||a.right<0)return{top:!1,right:!1,bottom:!1,left:!1,hasHorizontalCollision:!1,hasVerticalCollision:!1,hasCollision:!1,length:0};var l=v(n,a,"top","bottom"),c=v(n,a,"left","right"),u=v(o,a,"top","bottom"),f=v(o,a,"left","right"),g=n.left>a.right&&o.left<a.right&&u,d=n.right<a.left&&o.right>a.left&&u,y=n.bottom<=a.top&&o.bottom>=a.top&&f,m=n.top>=a.bottom&&o.top<=a.bottom&&f;return{top:m,right:d,bottom:y,left:g,hasHorizontalCollision:c,hasVerticalCollision:l,hasCollision:c&&l,length:Number(m)+Number(d)+Number(y)+Number(g)+Number(c&&l)}}function m(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function w(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function x(t,e,i){return e&&w(t.prototype,e),i&&w(t,i),t}function b(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function k(t){return k=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},k(t)}function O(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&R(t,e)}function R(t,e){return R=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},R(t,e)}function S(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,s,r,h,n=k(t);if(e){var o=k(this).constructor;i=Reflect.construct(n,arguments,o)}else i=n.apply(this,arguments);return s=this,!(r=i)||"object"!=((h=r)&&"undefined"!=typeof Symbol&&h.constructor===Symbol?"symbol":typeof h)&&"function"!=typeof r?m(s):r}}var A=function(){function t(e,i){p(this,t),b(this,"game",void 0),b(this,"type",void 0),b(this,"vx",0),b(this,"vy",0),b(this,"vz",0),b(this,"gravity",1),b(this,"fps",30),b(this,"frameInterval",1e3/this.fps),b(this,"frameTimer",0),b(this,"frameX",0),this.game=e,this.type=i}return x(t,[{key:"update",value:function(t,e){}}]),t}(),P=function(t){O(i,t);var e=S(i);function i(){return p(this,i),e.apply(this,arguments)}return i}(A),j=function(t){O(i,t);var e=S(i);function i(){var t;return p(this,i),b(m(t=e.apply(this,arguments)),"hitTimer",0),t}return x(i,[{key:"update",value:function(t,e){var i=this.game.player;this.frameTimer>this.frameInterval?(this.frameTimer=0,this.frameX++):this.frameTimer+=e,this.hitTimer>=0?(t.hasKeys?(t.ArrowLeft||t.ArrowRight)&&(i.state="run",this.vx=10*this.game.gameRatio,i.isReverse=!!t.ArrowLeft,i.isInAir||this.game.particles.push(new f(i.x+.5*i.width,i.y+i.height))):(i.state="idle",this.vx=0),t.ArrowDown?(i.state="sit",this.vx=0):t[" "]&&(i.state="roll",this.vx=15*this.game.gameRatio),t.b&&(i.state="attack"),t.ArrowUp&&!i.isInAir&&(this.vy-=Math.floor(i.maxJump),i.isInAir=!0)):this.hitTimer+=e,this.vy+=this.gravity*this.game.gameRatio;var s=this.game.getCurrentLevel();i.collision={top:!1,right:!1,bottom:!1,left:!1};for(var r=i.sprite.states[i.state].inset,h={width:i.width-r.left-r.right,height:i.height-r.top-r.bottom,x:i.x+r.left,y:i.y+r.top},n=0;n<s.platforms.length;n++){var o=y(h,s.platforms[n],s.current,this.game.canvas.width,i.isReverse?-this.vx:this.vx,this.vy);i.collision={top:o.top||i.collision.top,bottom:o.bottom||i.collision.bottom,right:o.right||i.collision.right||o.hasHorizontalCollision&&o.hasCollision&&!i.isReverse,left:o.left||i.collision.left||o.hasHorizontalCollision&&o.hasCollision&&i.isReverse},(o.top||o.bottom)&&(o.bottom&&(i.isInAir=!1),this.vy=0),(o.left||o.right)&&(this.vx=0),o.hasCollision&&(this.vx=-5)}for(var a=0;a<s.enemies.length;a++){var l=y(h,s.enemies[a],s.current,this.game.canvas.width,i.isReverse?-this.vx:this.vx,this.vy);if(i.collision={top:l.top||i.collision.top,bottom:l.bottom||i.collision.bottom,right:l.right||i.collision.right||l.hasHorizontalCollision&&l.hasCollision&&!i.isReverse,left:l.left||i.collision.left||l.hasHorizontalCollision&&l.hasCollision&&i.isReverse},l.hasCollision){var c=s.enemies[a];"roll"===i.state||"attack"===i.state&&!c.markForDeletion&&this.hitTimer>=0?(this.game.particles.push(new d(c.x,c.y,c.width,c.height,this.frameX)),c.markForDeletion=!0):(this.vx=-10,this.hitTimer=-500,this.game.player.state=i.isInAir?"getHit":"dizzy")}}this.vy&&"roll"!==i.state&&"getHit"!==i.state&&"dizzy"!==i.state&&"attack"!==i.state&&(i.state=-this.vy>i.maxJump/2-20?"jump":"fall"),i.y+=this.vy,this.vx=(i.isReverse?-1:1)*this.vx,i.x+i.width/2+this.vx>=this.game.canvas.width/2&&this.vx>0?s.current+this.vx+i.width+this.game.canvas.width>=s.end?i.x+this.vx+i.width>=this.game.canvas.width?(i.x=this.game.canvas.width-i.width,this.vx=0):(i.x+=this.vx,this.vx=0):this.game.getCurrentLevel().current+=this.vx:i.x+this.vx<=s.start+100?s.current<=0?(i.x=i.x+this.vx>0?i.x+this.vx:0,this.vx=0):(i.x=100,this.game.getCurrentLevel().current+=this.vx):(i.x+=this.vx,this.vx=0)}}]),i}(A);function F(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function T(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var C=function(){function e(i,s){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),T(this,"state","idle"),T(this,"x",0),T(this,"y",0),T(this,"sprite",void 0),T(this,"width",void 0),T(this,"height",void 0),T(this,"ratio",void 0),T(this,"isReverse",!1),T(this,"maxJump",void 0),T(this,"isInAir",void 0),T(this,"collision",{top:!1,right:!1,bottom:!1,left:!1}),T(this,"relativeHeight",void 0),this.sprite=t(i.src,i.width,i.height,i.states),this.ratio=this.sprite.height/this.sprite.width,this.relativeHeight=i.relativeHeight,this.height=this.calculateHeight(s),this.width=this.calcultateWidth(),this.x=1,this.y=0,this.maxJump=this.calculateMaxJump(s),this.isInAir=!0}var i,s;return i=e,(s=[{key:"calculateHeight",value:function(t){return this.relativeHeight*t}},{key:"calcultateWidth",value:function(){return this.height*this.ratio}},{key:"calculateMaxJump",value:function(t){for(var e=0,i=0;i<=360;)i+=++e;return e*t}},{key:"resize",value:function(t,e){this.height=this.calculateHeight(e),this.width=this.calcultateWidth(),this.maxJump=this.calculateMaxJump(e),this.y=this.y/t*e,this.x=this.x/t*e}},{key:"draw",value:function(t,e,i){var s=this.sprite.states[this.state],r=s.x[e%s.x.length],h=s.y;this.isReverse?(t.save(),t.scale(-1,1),t.drawImage(this.sprite.image,r,h,this.sprite.width,this.sprite.height,-this.x-this.width,this.y,this.width,this.height),t.restore()):t.drawImage(this.sprite.image,r,h,this.sprite.width,this.sprite.height,this.x,this.y,this.width,this.height),i&&(t.strokeStyle="green",t.font="14px Mono",t.strokeStyle=this.collision.top?"red":"green",t.strokeRect(this.x+s.inset.left,this.y+s.inset.top,this.width-s.inset.left-s.inset.right,1),t.strokeStyle=this.collision.right?"red":"green",t.strokeRect(this.x+this.width-s.inset.right,this.y+s.inset.top,1,this.height-s.inset.top-s.inset.bottom),t.strokeStyle=this.collision.bottom?"red":"green",t.strokeRect(this.x+s.inset.left,this.y+this.height-s.inset.bottom,this.width-s.inset.left-s.inset.right,1),t.strokeStyle=this.collision.left?"red":"green",t.strokeRect(this.x+s.inset.left,this.y+s.inset.top,1,this.height-s.inset.top-s.inset.bottom),t.textAlign="right",t.strokeText("x:".concat(this.x.toFixed(2),",  y:").concat(this.y.toFixed(2)),this.x,this.y),t.textAlign="left",t.strokeText("x:".concat((this.x+this.width).toFixed(2),",  y:").concat(this.y.toFixed(2)),this.x+this.width,this.y),t.textAlign="right",t.strokeText("x:".concat(this.x.toFixed(2),",  y:").concat((this.y+this.height).toFixed(2)),this.x,this.y+this.height),t.textAlign="left",t.strokeText("x:".concat((this.x+this.width).toFixed(2),",  y:").concat((this.y+this.height).toFixed(2)),this.x+this.width,this.y+this.height))}}])&&F(i.prototype,s),e}();function H(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var _={ArrowDown:!0,ArrowUp:!0,ArrowLeft:!0,ArrowRight:!0,b:!0," ":!0,hasKeys:!1,Meta:!0,r:!0,i:!0};function L(t){return t in _}var E=function t(e){var i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),H(this,"keys",{hasKeys:!1}),H(this,"length",0),window.addEventListener("keydown",(function(t){t.preventDefault(),L(t.key)&&!i.keys[t.key]&&(i.keys[t.key]=!0,i.length++,i.keys.hasKeys=!!i.length),i.keys.r&&i.keys.Meta&&location.reload()})),window.addEventListener("keyup",(function(t){t.preventDefault(),L(t.key)&&(i.keys[t.key]=!1,i.length--,i.keys.hasKeys=!!i.length),"d"===t.key&&(e.debug=!e.debug),"i"===t.key&&(e.information=!e.information)}))};function z(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function M(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var I=function(){function t(e,i,s){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),M(this,"image",void 0),M(this,"game",void 0),M(this,"speedModifer",void 0),M(this,"width",void 0),this.image=new Image,this.image.src=e,this.speedModifer=i,this.game=s,this.width=2400*this.game.gameRatio}var e,i;return e=t,i=[{key:"resize",value:function(){this.width=2400*this.game.gameRatio}},{key:"draw",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=-e*this.speedModifer%this.width,r=i;t.drawImage(this.image,s,r,this.width,this.game.canvas.height),t.drawImage(this.image,s+this.width,r,this.width,this.game.canvas.height),this.game.debug&&(t.strokeStyle="red",t.font="14px Mono",t.strokeRect(s,r,this.width,this.game.canvas.height),t.textAlign="center",t.strokeText("width:".concat(this.width.toFixed(2),",  height:").concat(this.game.canvas.height.toFixed(2)),s+this.width/2,r+this.game.canvas.height/2),t.strokeStyle="black",t.strokeRect(s+this.width+2,r,this.width-4,this.game.canvas.height),t.textAlign="center",t.strokeText("width:".concat(this.width.toFixed(2),",  height:").concat(this.game.canvas.height.toFixed(2)),s+this.width+this.width/2-this.game.canvas.width,r+this.game.canvas.height/2))}}],i&&z(e.prototype,i),t}();function D(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function X(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var W=function(){function e(i,s,r,h,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),X(this,"state","idle"),X(this,"type",void 0),X(this,"x",void 0),X(this,"y",void 0),X(this,"speedX",Math.random()+1),X(this,"speedY",Math.random()+1),X(this,"angle",0),X(this,"vAngle",void 0),X(this,"sprite",void 0),X(this,"width",void 0),X(this,"height",void 0),X(this,"webHeightOffset",void 0),X(this,"ratio",void 0),X(this,"isReverse",!1),X(this,"collision",{top:!1,right:!1,bottom:!1,left:!1}),X(this,"relativeHeight",void 0),X(this,"markForDeletion",!1),this.sprite=t(h.src,h.width,h.height,h.states),this.type=r,this.x=i*n,this.y=s*n,this.vAngle=1e-5*Math.random()+.1*Math.random(),this.ratio=this.sprite.height/this.sprite.width,this.relativeHeight=h.relativeHeight,this.height=this.calculateHeight(n),this.width=this.calcultateWidth(),this.webHeightOffset=this.calculateWebHeightOffset(n)}var i,s;return i=e,(s=[{key:"calculateHeight",value:function(t){return this.relativeHeight*t}},{key:"calcultateWidth",value:function(){return this.height*this.ratio}},{key:"calculateWebHeightOffset",value:function(t){return 50*t}},{key:"resize",value:function(t,e){this.height=this.calculateHeight(e),this.width=this.calcultateWidth(),this.webHeightOffset=this.calculateWebHeightOffset(e),this.y=this.y/t*e,this.x=this.x/t*e}},{key:"draw",value:function(t,e,i,s,r,h){switch(this.type){case"fly":this.angle+=this.vAngle,this.x-=this.speedX,this.y+=Math.sin(this.angle);break;case"plant":break;case"spider":this.angle+=this.vAngle,this.y+=Math.sin(this.angle),t.beginPath(),t.moveTo(this.x-e+this.width/2,0),t.lineTo(this.x-e+this.width/2,this.y+this.webHeightOffset);var n=t.strokeStyle;t.strokeStyle="white",t.stroke(),t.strokeStyle=n}this.x<0&&(this.markForDeletion=!0);var o=this.sprite.states[this.state],a=o.x[r%o.x.length],l=o.y;this.x-e>s||this.x-e+this.width<0||(t.drawImage(this.sprite.image,a,l,this.sprite.width,this.sprite.height,this.x-e,this.y-i,this.width,this.height),h&&(t.strokeStyle="green",t.font="14px Mono",t.strokeStyle=this.collision.top?"red":"green",t.strokeRect(this.x+o.inset.left-e,this.y+o.inset.top-i,this.width-o.inset.left-o.inset.right,1),t.strokeStyle=this.collision.right?"red":"green",t.strokeRect(this.x+this.width-o.inset.right-e,this.y+o.inset.top-i,1,this.height-o.inset.top-o.inset.bottom),t.strokeStyle=this.collision.bottom?"red":"green",t.strokeRect(this.x+o.inset.left-e,this.y+this.height-o.inset.bottom-i,this.width-o.inset.left-o.inset.right,1),t.strokeStyle=this.collision.left?"red":"green",t.strokeRect(this.x+o.inset.left-e,this.y+o.inset.top-i,1,this.height-o.inset.top-o.inset.bottom),t.textAlign="right",t.strokeText("x:".concat((this.x-e).toFixed(2),",  y:").concat((this.y-i).toFixed(2)),this.x-e,this.y),t.textAlign="left",t.strokeText("x:".concat((this.x+this.width-e).toFixed(2),",  y:").concat((this.y-i).toFixed(2)),this.x+this.width-e,this.y),t.textAlign="right",t.strokeText("x:".concat((this.x-e).toFixed(2),",  y:").concat((this.y+this.height-i).toFixed(2)),this.x-e,this.y+this.height),t.textAlign="left",t.strokeText("x:".concat((this.x+this.width-e).toFixed(2),",  y:").concat((this.y+this.height-i).toFixed(2)),this.x+this.width-e,this.y+this.height-i)))}}])&&D(i.prototype,s),e}();function G(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function J(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var B=function(){function t(e,i,s,r,h,n,o,a){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),J(this,"id",void 0),J(this,"to",void 0),J(this,"from",void 0),J(this,"start",0),J(this,"end",0),J(this,"current",0),J(this,"type",void 0),J(this,"enemies",void 0),J(this,"platforms",void 0),J(this,"backgrounds",void 0),J(this,"isStart",void 0),J(this,"game",void 0),this.game=a,this.id=e,this.to=i,this.from=s,this.type=r,this.isStart=!0,this.platforms=h,this.backgrounds=n,this.enemies=o,this.calculatePositions(1)}var e,i;return e=t,i=[{key:"calculatePositions",value:function(t){var e=this.current/t*this.game.gameRatio,i=0,s=0,r=!0,h=!1,n=void 0;try{for(var o,a=this.platforms[Symbol.iterator]();!(r=(o=a.next()).done);r=!0){var l=o.value;l.x<i&&(i=l.x),l.x+l.width>s&&(s=l.x+l.width)}}catch(t){h=!0,n=t}finally{try{r||null==a.return||a.return()}finally{if(h)throw n}}this.start=i,this.end=s,this.current=e||(this.isStart?this.start:this.end),this.end-this.game.canvas.width<this.current&&(this.current=this.end-this.game.canvas.width)}},{key:"draw",value:function(t,e){for(var i=0;i<this.backgrounds.length;i++)this.backgrounds[i].draw(t,this.current,0);for(var s=0;s<this.platforms.length;s++)this.platforms[s].draw(t,this.current,0,this.game.canvas.width);for(var r=0;r<this.enemies.length;r++)this.enemies[r].draw(t,this.current,0,this.game.canvas.width,this.game.controller.frameX,this.game.debug),this.enemies[r].markForDeletion&&this.enemies.splice(r,1);e.debug&&(t.strokeStyle="red",t.font="14px Mono",t.textAlign="left",t.strokeText("start:".concat(this.start),this.start-this.current,this.game.canvas.height/2),t.strokeText("current:".concat(this.current),0,this.game.canvas.height/2-20),t.textAlign="right",t.strokeText("end:".concat(this.current+e.canvas.width),this.end-(this.current+e.player.width+10),this.game.canvas.height/2))}},{key:"resize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.game.gameRatio,e=this;this.platforms.forEach((function(t){return t.resize()})),this.backgrounds.forEach((function(t){return t.resize()})),this.enemies.forEach((function(i){return i.resize(t,e.game.gameRatio)})),this.calculatePositions(t)}}],i&&G(e.prototype,i),t}();function K(t,e,i,s,r,h,n){try{var o=t[h](n),a=o.value}catch(t){return void i(t)}o.done?e(a):Promise.resolve(a).then(s,r)}function N(t,e){return U.apply(this,arguments)}function U(){return(t=function(t,e){return function(t,e){var i,s,r,h,n={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return h={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(h[Symbol.iterator]=function(){return this}),h;function o(h){return function(o){return function(h){if(i)throw new TypeError("Generator is already executing.");for(;n;)try{if(i=1,s&&(r=2&h[0]?s.return:h[0]?s.throw||((r=s.return)&&r.call(s),0):s.next)&&!(r=r.call(s,h[1])).done)return r;switch(s=0,r&&(h=[2&h[0],r.value]),h[0]){case 0:case 1:r=h;break;case 4:return n.label++,{value:h[1],done:!1};case 5:n.label++,s=h[1],h=[0];continue;case 7:h=n.ops.pop(),n.trys.pop();continue;default:if(!((r=(r=n.trys).length>0&&r[r.length-1])||6!==h[0]&&2!==h[0])){n=0;continue}if(3===h[0]&&(!r||h[1]>r[0]&&h[1]<r[3])){n.label=h[1];break}if(6===h[0]&&n.label<r[1]){n.label=r[1],r=h;break}if(r&&n.label<r[2]){n.label=r[2],n.ops.push(h);break}r[2]&&n.ops.pop(),n.trys.pop();continue}h=e.call(t,n)}catch(t){h=[6,t],s=0}finally{i=r=0}if(5&h[0])throw h[1];return{value:h[0]?h[1]:void 0,done:!0}}([h,o])}}}(this,(function(i){return[2,new Promise((function(i,s){var r=new Image;r.onload=function(){var s=document.createElement("canvas"),h=s.getContext("2d"),n=r.width*e,o=r.height*e;s.width=n,s.height=o,h.drawImage(r,0,0,n,o),i({name:t.name,image:s,src:t.src})},r.onerror=function(){return s()},r.src=t.src}))]}))},U=function(){var e=this,i=arguments;return new Promise((function(s,r){var h=t.apply(e,i);function n(t){K(h,s,r,n,o,"next",t)}function o(t){K(h,s,r,n,o,"throw",t)}n(void 0)}))}).apply(this,arguments);var t}function Y(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function V(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var q=function(){function t(e,i,s,r,h,n){var o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"repeat-x";!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),V(this,"_width",void 0),V(this,"_height",void 0),V(this,"_x",void 0),V(this,"_y",void 0),V(this,"x",void 0),V(this,"y",void 0),V(this,"width",void 0),V(this,"height",void 0),V(this,"game",void 0),V(this,"fillStyle","#0000"),V(this,"imageSrc",void 0),V(this,"repeat",void 0),V(this,"stretch",!1),this._x=e,this._y=i,this._width=s,this._height=r,this.x=this._x*h.gameRatio,this.y=this._y*h.gameRatio,this.width=this._width*h.gameRatio,this.height=this._height*h.gameRatio,this.game=h,this.imageSrc=n,this.repeat=o,this.createPattern()}var e,i;return e=t,(i=[{key:"draw",value:function(t,e,i,s){this.x-e>s||this.x-e+this.width<0||("string"==typeof this.fillStyle?(t.fillStyle=this.fillStyle,t.fillRect(this.x-e,this.y-i,this.width,this.height)):(t.save(),t.fillStyle=this.fillStyle,t.translate(this.x-e,this.y-i),t.fillRect(0,0,this.width,this.height),t.restore()),this.game.debug&&(t.strokeStyle="orange",t.font="14px Mono",t.strokeRect(this.x-e,this.y-i,this.width,this.height),t.textAlign="left",t.strokeText("x:".concat((this.x-e).toFixed(2),",  y:").concat((this.y-i).toFixed(2)),this.x-e,this.y-i),t.textAlign="right",t.strokeText("x:".concat((this.x+this.width-e).toFixed(2),",  y:").concat((this.y-i).toFixed(2)),this.x+this.width-e,this.y-i),t.textAlign="left",t.strokeText("x:".concat((this.x-e).toFixed(2),",  y:").concat((this.y+this.height-i).toFixed(2)),this.x-e,this.y+this.height-i),t.textAlign="right",t.strokeText("x:".concat((this.x+this.width-e).toFixed(2),",  y:").concat((this.y+this.height-i).toFixed(2)),this.x+this.width-e,this.y+this.height-i),t.textAlign="center",t.strokeText("width:".concat(this.width.toFixed(2),",  height:").concat(this.height.toFixed(2)),this.x+this.width/2-e,this.y+this.height/2-i)))}},{key:"createPattern",value:function(){var t=this;N({name:"ground",src:this.imageSrc},this.game.gameRatio).then((function(e){var i;t.fillStyle=(null===(i=t.game.canvas.getContext("2d"))||void 0===i?void 0:i.createPattern(e.image,t.repeat))||"#0000"}))}},{key:"resize",value:function(){this.x=this._x*this.game.gameRatio,this.y=this._y*this.game.gameRatio,this.width=this._width*this.game.gameRatio,this.height=this._height*this.game.gameRatio,this.createPattern()}}])&&Y(e.prototype,i),t}();function Q(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function Z(t,e){return new B(t.id,t.to,t.from,t.type,t.platforms.map((function(i){return new q(i.x,i.y,i.width,i.height,e,t.imageSrc[i.imageSrc],i.repeat)})),t.backgrounds.map((function(i){return new I(t.imageSrc[i.imageSrc],i.speed,e)})),t.enemies.map((function(i){return new W(i.x,i.y,i.type,(s=function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},s=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(i).filter((function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable})))),s.forEach((function(e){Q(t,e,i[e])}))}return t}({},t.assets[i.type]),r=null!=(r={src:t.imageSrc[t.assets[i.type].imageSrc]})?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(r)):function(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);i.push.apply(i,s)}return i}(Object(r)).forEach((function(t){Object.defineProperty(s,t,Object.getOwnPropertyDescriptor(r,t))})),s),e.gameRatio);var s,r})),e)}var $=[{name:"dog",src:"players/shadow_dog.png",width:575,height:523,relativeHeight:180,states:{idle:{row:0,frames:7,inset:{top:20,right:10,bottom:0,left:10}},jump:{row:1,frames:7,inset:{top:20,right:10,bottom:0,left:10}},fall:{row:2,frames:7,inset:{top:20,right:10,bottom:0,left:10}},run:{row:3,frames:9,inset:{top:20,right:10,bottom:0,left:10}},dizzy:{row:4,frames:11,inset:{top:20,right:10,bottom:0,left:10}},sit:{row:5,frames:5,inset:{top:50,right:10,bottom:0,left:10}},roll:{row:6,frames:7,inset:{top:80,right:40,bottom:0,left:40}},attack:{row:7,frames:7,inset:{top:20,right:0,bottom:0,left:0}},ko:{row:8,frames:12,inset:{top:20,right:10,bottom:0,left:10}},getHit:{row:9,frames:4,inset:{top:20,right:10,bottom:0,left:10}}}}];function tt(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function et(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var it=function(){function t(e,i){var s=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),et(this,"gameFrames",0),et(this,"player",void 0),et(this,"particles",[]),et(this,"inputHandler",void 0),et(this,"controller",void 0),et(this,"canvas",void 0),et(this,"gameRatio",1),et(this,"levels",{}),et(this,"currentLevel",void 0),et(this,"debug",!1),et(this,"information",!0),et(this,"loading",!0),this.canvas=e,this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight,this.gameRatio=this.canvas.height/720,this.inputHandler=new E(this),this.currentLevel=1,this.controller=this.getGameController(),this.player=new C($[0],this.gameRatio),this.particles=[],this.resizeGame(),this.loadLevel(this.currentLevel),window.addEventListener("resize",function(t){var e,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;return function(){for(var s=arguments.length,r=new Array(s),h=0;h<s;h++)r[h]=arguments[h];var n=this;clearTimeout(e),e=setTimeout((function(){return t.apply(n,r)}),i)}}((function(){s.resizeGame()}),300))}var e,i;return e=t,i=[{key:"loadLevel",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"start",i=this;this.levels[t]?(this.controller=this.getGameController(this.levels[t]),this.levels[t].resize(),this.currentLevel=t,"start"===e?this.resetAtStart():this.resetAtEnd(),this.loading=!1):(this.loading=!0,fetch("./levels/".concat(t,".json")).then((function(t){return t.json()})).then((function(s){i.levels[t]=Z(s,i),i.controller=i.getGameController(i.levels[t]),i.levels[t].resize(),i.currentLevel=t,"start"===e?i.resetAtStart():i.resetAtEnd(),i.loading=!1})).catch((function(t){console.log("error loading level",t)})).finally((function(){})))}},{key:"getCurrentLevel",value:function(){return this.levels[this.currentLevel]}},{key:"getGameController",value:function(t){var e;if(!t)return new P(this,"NoGame");if(t.type===(null===(e=this.controller)||void 0===e?void 0:e.type))return this.controller;if("2dScroller"===t.type)return new j(this,t.type);throw new Error("Unsupported game type")}},{key:"resetAtStart",value:function(){this.player.x=11;var t=this.getCurrentLevel();t.current=0,t.isStart=!0,this.particles=[]}},{key:"resetAtEnd",value:function(){var t=this.getCurrentLevel();t.current=t.end-this.canvas.width-this.player.width,this.player.x=this.canvas.width-this.player.width-11,t.isStart=!1,this.particles=[]}},{key:"animate",value:function(t,e){if(this.controller.update(this.inputHandler.keys,e),this.loading)t.strokeStyle="black",t.font="24px Mono",t.textAlign="center",t.strokeText("Loading Level",this.canvas.width/2,this.canvas.height/2);else{var i=this.getCurrentLevel();i.draw(t,this),this.player.draw(t,this.controller.frameX,this.debug);for(var s=0;s<this.particles.length;s++)this.particles[s].draw(t,this.particles[s].speedX?this.controller.vx:i.current,0,this.controller.frameX),this.particles[s].markForDeletion&&(this.particles=this.particles.splice(s,0));this.player.y>this.canvas.height&&(this.player.y=1,i.isStart?this.resetAtStart():this.resetAtEnd()),this.player.x>=this.canvas.width-this.player.width?this.loadLevel(this.getCurrentLevel().to,"start"):this.player.x<=0&&this.loadLevel(this.getCurrentLevel().from,"end"),t.font="purple",t.textAlign="right",t.strokeText("level:".concat(this.currentLevel),this.canvas.width-20,20),this.information&&(t.fillStyle="black",t.fillRect(0,this.canvas.height-40,this.canvas.width,40),t.save(),t.font="16px verdana",t.strokeStyle="white",t.textAlign="left",t.strokeText("Keyboard: LeftArrow: left, RightArrow: right, UpArrow: jump, DownArrow: duck, SpaceBar: roll, b: attack, d: debug, i: information",20,this.canvas.height-18)),t.restore(),this.debug&&(t.textAlign="left",t.strokeText("fps:".concat((1e3/e).toFixed(2),",level:").concat(this.currentLevel,", vx:").concat(this.controller.vx.toFixed(),", vy: ").concat(this.controller.vy.toFixed(),", gravity:").concat((this.controller.gravity*this.gameRatio).toFixed(2),", gameRatio:").concat(this.gameRatio.toFixed(2)),20,20)),this.gameFrames++}}},{key:"resizeGame",value:function(){this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight;var t=this.gameRatio;this.gameRatio=this.canvas.height/720,t!==this.gameRatio&&(this.player.resize(t,this.gameRatio),this.getCurrentLevel().resize(t))}}],i&&tt(e.prototype,i),t}();window.addEventListener("load",(function(){var t=document.getElementById("canvas1"),e=t.getContext("2d"),i=new it(t,e),s=0;!function r(h){var n=h-s;s=h,e.clearRect(0,0,t.width,t.height),i.animate(e,n),requestAnimationFrame(r)}(s)}))})();