"use strict";(self["webpackChunkforAndraste"]=self["webpackChunkforAndraste"]||[]).push([[191],{8191:function(t,i,e){e.r(i),e.d(i,{default:function(){return I}});var s=function(){var t=this,i=t._self._c;return i("div",[i("div",{staticClass:"topImage kirkwall"}),i("div",{staticClass:"content"},[t._m(0),t._m(1),i("div",{staticClass:"puzzle mt70"},[i("div",{staticClass:"maze-container"},[i("maze",{style:t.mazeStyle,attrs:{strategy:t.strategy,difficulty:t.difficulty},on:{start:t.onStart,finish:t.onFinish,init:t.onInit}})],1)])]),i("transition",[i("div",{staticClass:"content",class:{hide:!t.showButton}},[i("p",{staticClass:"content-text"},[t._v(" 커크월 전반에 걸쳐 흩어진 무너진 건물의 파편."),i("br"),t._v(" 화마가 휩쓸고 지나간 잿더미들."),i("br"),t._v(" 아직 수습되지 못한 시신들."),i("br"),i("br"),t._v("한차례 이곳을 휩쓸고 지나갔을 울음와 비명소리는 소름끼치는 적막 너머에 새겨져 있었다."),i("br"),t._v("매캐한 연기의 냄새가 아직도 공기 중에 흐릿하게 남아있었다. "),i("br"),t._v("한 차례 비가 왔었는지 바닥은 축축하고 질척거렸다. ")]),i("div",{staticClass:"content-button mt70"},[i("button",{on:{click:t.checkPath}},[t._v("챈트리로 향한다.")])])])]),i("div",{staticClass:"bottomImage"})],1)},h=[function(){var t=this,i=t._self._c;return i("p",{staticClass:"content-text mt26"},[t._v(" 커크월에 도착한 수많은 템플러들은 커크월을 뒤덮은 커다란 혼란과 절망 앞에 말을 잃었다. "),i("br"),t._v("과장되었을 것이라고 생각했던 소문은, 오히려 과소평가된 비극이었던 것이다. ")])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"content-dialog"},[i("ul",[i("li",[i("div",{staticClass:"content-dialog-portrait commander"}),i("div",{staticClass:"content-dialog-text"},[t._v(" 우선 챈트리 쪽으로 가도록 하지. 지도는 갖고 있나? ")])]),i("li",[i("div",{staticClass:"content-dialog-portrait"}),i("div",{staticClass:"content-dialog-text"},[t._v("예. 챙겨두었습니다.")])])])])}],o=(e(7658),function(){var t=this,i=t._self._c;return i("div",[i("button",{staticClass:"mazeBtn",on:{click:t.resetMaze}},[t._v("미로 다시 만들기")]),i("div",{staticClass:"maze",attrs:{tabindex:"-1"},on:{keyup:t.onKeyUp}},[i("canvas",{ref:"mazeCanvas",attrs:{width:t.width,height:t.height}}),i("canvas",{ref:"goalCanvas",style:t.goalStyle,attrs:{width:t.width,height:t.height}}),i("canvas",{ref:"effectCanvas",style:t.playerStyle,attrs:{width:t.width,height:t.height}}),i("canvas",{ref:"playerCanvas",style:t.playerStyle,attrs:{width:t.width,height:t.height},on:{touchstart:t.onTouchStart,touchmove:t.onTouchMove,touchend:t.onTouchEnd,mousemove:t.onMouseMove}}),t.cache?i("div",{style:t.dotStyle}):t._e()])])}),a=[],n=e(6369);class r{constructor(t,i){const e=(t+1)*i,s=t*(i+1),h=t*i,o=new Array(e);for(let r=0;r<o.length;r++)o[r]=!1;const a=new Array(s);for(let r=0;r<a.length;r++)a[r]=!1;const n=new Array(h);for(let r=0;r<n.length;r++)n[r]=r;this.lx=t,this.ly=i,this.bondH=o,this.bondV=a,this.point=n,this.goal={x:this.lx-1,y:this.ly-1},this.makeMaze()}getClusterIndex(t,i){let e=this.lx*i+t;while(e!==this.point[e])e=this.point[e];return e}connect(t,i,e,s){const h=this.getClusterIndex(t,i),o=this.getClusterIndex(e,s);h<o?this.point[o]=h:this.point[h]=o}makeMazeSub(t){for(let i=0;i<this.ly;i++)for(let e=0;e<this.lx-1;e++){const s=Math.random();s<t||this.getClusterIndex(e,i)===this.getClusterIndex(e+1,i)||(this.bondH[this.lx*i+i+e+1]=!0,this.connect(e,i,e+1,i))}for(let i=0;i<this.ly-1;i++)for(let e=0;e<this.lx;e++){const s=Math.random();s<t||this.getClusterIndex(e,i)===this.getClusterIndex(e,i+1)||(this.bondV[(i+1)*this.lx+e]=!0,this.connect(e,i,e,i+1))}}makeMaze(){for(let t=0;t<10;t++)this.makeMazeSub(.8);this.makeMazeSub(1),this.bondH[0]=!0,this.bondH[(this.lx+1)*this.ly-1]=!0,this.goal={x:this.lx-1,y:this.ly-1}}}var l=r;class c{constructor(t,i){const e=(t+1)*i,s=t*(i+1),h=t*i,o=new Array(e);for(let r=0;r<o.length;r++)o[r]=!1;const a=new Array(s);for(let r=0;r<a.length;r++)a[r]=!1;const n=new Array(h);for(let r=0;r<h;r++)n[r]=!1;this.lx=t,this.ly=i,this.bondH=o,this.bondV=a,this.isOpenArr=n,this.makeMaze(),this.goal={x:this.lx-1,y:this.ly-1}}makeMaze(){const t=[];t.push(Math.floor(Math.random()*this.isOpenArr.length));while(t.length>0){const i=t.pop();if(null==i)break;const e=i%this.lx,s=Math.floor(i/this.lx);this.isOpenArr[i]=!0;const h=this.getDirectionCandidate(e,s);if(this.isDeadEnd(h))continue;t.push(i);const o=this.getNeighbor(e,s,this.getRandomDirection(h));t.push(o.iy*this.lx+o.ix)}this.bondH[0]=!0,this.bondH[(this.lx+1)*this.ly-1]=!0}isDeadEnd(t){return 0===t.north&&0===t.south&&0===t.west&&0===t.east}isOpen(t,i){return this.isOpenArr[i*this.lx+t]}getDirectionCandidate(t,i){const e=i>0&&!this.isOpen(t,i-1),s=i<this.ly-1&&!this.isOpen(t,i+1),h=t>0&&!this.isOpen(t-1,i),o=t<this.lx-1&&!this.isOpen(t+1,i),a=[e,s,h,o].filter((t=>t)).length,n=a>0?1/a:0;return{north:e?n:0,south:s?n:0,west:h?n:0,east:o?n:0}}getRandomDirection(t){const i=t.north+t.south+t.west+t.east;if(0===i)throw new Error("No direction available");const e=Math.random()*i;let s=0;for(const h in t){const i=t[h];if(s+=i,e<s)return h}throw new Error("Something wrong")}getNeighbor(t,i,e){const s={ix:t,iy:i};switch(e){case"north":s.iy-=1,this.bondV[i*this.lx+t]=!0;break;case"south":s.iy+=1,this.bondV[(i+1)*this.lx+t]=!0;break;case"east":s.ix+=1,this.bondH[i*(this.lx+1)+t+1]=!0;break;case"west":s.ix-=1,this.bondH[i*(this.lx+1)+t]=!0;break;default:throw new Error("Something wrong")}return s}}var d=c,g="data:image/png;base64,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";class f{constructor(t,i,e,s,h){this.ctx=t,this.unitWidth=i,this.unitHeight=e,this.offsetLeft=s,this.offsetTop=h,this.wallWidth=2}clear(t,i){this.ctx.clearRect(0,0,t,i)}setColor(t,i){this.ctx.fillStyle=t,this.ctx.strokeStyle=i}beginPath(){this.ctx.beginPath()}stroke(){this.ctx.stroke()}drawImage(t,i,e){const s=this.unitWidth/e.width,h=this.unitHeight/e.height,o=t*this.unitWidth/s+this.offsetLeft/s,a=i*this.unitHeight/h+this.offsetTop/h;this.ctx.save(),this.ctx.scale(s,h),this.ctx.imageSmoothingEnabled=!1,this.ctx.drawImage(e,o,a),this.ctx.restore()}drawCircle(t,i,e){this.ctx.beginPath();const s=t*this.unitWidth+this.unitWidth/2+this.offsetLeft,h=i*this.unitHeight+this.unitHeight/2+this.offsetTop;e=null!=e?e:Math.min(this.unitWidth,this.unitHeight)/2-this.wallWidth,this.ctx.arc(s,h,e,0,2*Math.PI),this.ctx.fill(),this.ctx.stroke()}drawLine(t,i,e,s){const h=this.offsetLeft+t*this.unitWidth,o=this.offsetTop+i*this.unitHeight,a=this.offsetLeft+e*this.unitWidth,n=this.offsetTop+s*this.unitHeight;this.ctx.moveTo(h,o),this.ctx.lineTo(a,n)}drawText(t,i,e){const s=i*this.unitWidth+this.offsetLeft,h=e*this.unitHeight+this.offsetTop;this.ctx.fillStyle="black",this.ctx.fillText(t,s,h)}}var u=f;const m={dig:d,cluster:l};var y={data(){return{cache:null,dotPos:{offsetX:null,offsetY:null},width:null,height:null,margin:5,image:null,goalImage:null,maze:{bondH:[],bondV:[],goal:{x:null,y:null}},player:{id:"00",x:0,y:0},isFinished:!1,seed:Date.now()}},props:{difficulty:{default:"normal",type:String},imagePath:{default:g,type:String},goalImagePath:{default:g,type:String},strategy:{default:"cluster",type:String}},computed:{marginTop(){return(this.height-this.ly*this.cellHeight)/2},marginLeft(){return(this.width-this.lx*this.cellWidth)/2},cellWidth(){switch(this.difficulty){case"easy":return 50;case"hard":return 10;default:return 20}},cellHeight(){switch(this.difficulty){case"easy":return 50;case"hard":return 10;default:return 20}},lx(){return Math.max(1,Math.floor((this.width-2*this.margin)/this.cellWidth))},ly(){return Math.max(1,Math.floor((this.height-2*this.margin)/this.cellHeight))},goalStyle(){return this.isFinished?{opacity:0}:{display:"inline",position:"relative",top:"-365px",opacity:.5}},playerStyle(){return{display:"inline",position:"relative",top:"-1100px"}},dotStyle(){return{position:"absolute",backgroundColor:"black",height:"5px",width:"5px",opacity:.5,borderRadius:"50%",top:this.dotPos.offsetY+"px",left:this.dotPos.offsetX+"px",border:"5px solid red"}}},mounted(){this.height=this.$el.offsetHeight-this.margin,this.width=this.$el.offsetWidth-this.margin;const t=new Image;t.addEventListener("load",(()=>{this.image=t})),t.src=this.imagePath;const i=new Image;i.addEventListener("load",(()=>{this.goalImage=i})),i.src=this.goalImagePath,window.addEventListener("resize",(()=>{this.height=this.$el.offsetHeight,this.width=this.$el.offsetWidth}))},watch:{height(){this.renderMaze()},width(){this.renderMaze()},lx(){this.resetMaze()},ly(){this.resetMaze()},maze(){this.$emit("init"),this.renderMaze()},player(){this.renderPlayer()},image(){this.renderPlayer()},goalImage(){this.renderGoal()},strategy(){this.$emit("init"),this.resetMaze()},isFinished(){this.isFinished}},methods:{onTouchStart(t){t.preventDefault(),t.stopPropagation();const i=t.touches[0];this.cache={},this.cache.rect=this.cache.avatorPosition=this.cache.originalPosition=n.ZP.set(this,"cache",{rect:i.target.getBoundingClientRect(),avatorPosition:{x:this.player.x*this.cellWidth+this.marginLeft+this.cellWidth/2,y:this.player.y*this.cellHeight+this.marginTop+this.cellHeight/2},originalPosition:{x:i.clientX,y:i.clientY},pos:{offsetX:i.clientX,offsetY:i.clientY}})},onTouchMove(t){t.preventDefault(),t.stopPropagation();const i=t.touches[0],e=this.cache.avatorPosition,s=this.cache.originalPosition;n.ZP.set(this,"dotPos",{offsetX:i.clientX-s.x+e.x,offsetY:i.clientY-s.y+e.y}),this.handleMove(this.dotPos)},onTouchEnd(t){t.preventDefault(),t.stopPropagation(),this.cache=null},onMouseMove(t){this.handleMove(t)},handleMove(t){const i=t.offsetX,e=t.offsetY,s=Math.floor((i-this.marginLeft)/this.cellWidth),h=Math.floor((e-this.marginTop)/this.cellHeight),o=s-this.player.x,a=h-this.player.y;Math.abs(o)+Math.abs(a)<=2&&this.moveBy(o,a)},onKeyUp(t){switch(t.keyCode){case 37:this.goLeft();break;case 38:this.goUp();break;case 39:this.goRight();break;case 40:this.goDown()}},goUp(){this.moveBy(0,-1)},goDown(){this.moveBy(0,1)},goLeft(){this.moveBy(-1,0)},goRight(){this.moveBy(1,0)},moveBy(t,i){const e=this.player.x+t,s=this.player.y+i;this.moveTo(e,s)},canReach(t,i,e,s){if(t===e&&i===s)return!0;const h=e>t?1:-1,o=s>i?1:-1,a=e>t?(this.lx+1)*i+t+h:(this.lx+1)*i+t,n=s>i?this.lx*(i+o)+t:this.lx*i+t;return!(t===e||!this.maze.bondH[a]||!this.canReach(t+h,i,e,s))||!(i===s||!this.maze.bondV[n]||!this.canReach(t,i+o,e,s))},moveTo(t,i){const e=this.player.x,s=this.player.y;t<0||t>=this.lx||i<0||i>=this.ly||this.canReach(e,s,t,i)&&(n.ZP.set(this,"player",{x:t,y:i}),this.isStarted||(this.isStarted=!0,this.$emit("start")),t!==this.maze.goal.x||i!==this.maze.goal.y||this.isFinished||(this.isFinished=!0,this.$emit("finish")))},resetMaze(){const t=this.lx,i=this.ly,e=this.seed++;if(t>0&&i>0){const s=m[this.strategy],h=new s(t,i,e);n.ZP.set(this,"maze",h),n.ZP.set(this,"player",{x:0,y:0}),this.isStarted=!1,this.isFinished=!1}},renderPlayer(){const t=new u(this.$refs.playerCanvas.getContext("2d"),this.cellWidth,this.cellHeight,this.marginLeft,this.marginTop),i=this.player;t.clear(this.width,this.height),t.ctx=this.$refs.playerCanvas.getContext("2d"),t.setColor("#FF9800","#222"),null!=this.image?t.drawImage(i.x,i.y,this.image):t.drawCircle(i.x,i.y)},renderGoal(){const t=new u(this.$refs.goalCanvas.getContext("2d"),this.cellWidth,this.cellHeight,this.marginLeft,this.marginTop),i=this.maze,e=i.goal;t.ctx=this.$refs.goalCanvas.getContext("2d"),t.clear(this.width,this.height),t.setColor("#4CAF50","#222"),null!=this.goalImage?t.drawImage(e.x,e.y,this.goalImage):t.drawCircle(e.x,e.y)},renderMaze(){this.$nextTick((()=>{const t=new u(this.$refs.mazeCanvas.getContext("2d"),this.cellWidth,this.cellHeight,this.marginLeft,this.marginTop),{lx:i,maze:e}=this,s=e.bondH,h=e.bondV;t.clear(this.width,this.height),t.ctx.fillStyle="#FFF",t.ctx.fillRect(0,0,this.width,this.height),t.setColor(null,"#222"),t.beginPath();for(let o=0;o<s.length;o++){if(s[o])continue;const e=o%(i+1),h=Math.floor(o/(i+1)),a=e,n=h+1;t.drawLine(e,h,a,n)}for(let o=0;o<h.length;o++){if(h[o])continue;const e=o%i,s=Math.floor(o/i),a=e+1,n=s;t.drawLine(e,s,a,n)}t.stroke(),this.renderPlayer(),this.renderGoal()}))}}},p=y,x=e(1001),w=(0,x.Z)(p,o,a,!1,null,null,null),v=w.exports,C={components:{Maze:v},data(){return{mazeStyle:{width:"100%",height:"100%"},startTime:0,time:0,difficulty:"easy",strategy:"cluster",showButton:!1}},methods:{onStart(){this.startTime=Date.now()},onFinish(){this.showButton=!0},onInit(){this.startTime=0},checkPath(){this.$store.dispatch("terminateBackgroundAudio"),this.$store.dispatch("setBackgroundAudioSource","/forTheAndraste/assets/sound/a_destroyed_chantry.mp3"),this.$store.dispatch("playBackgroundAudio"),this.$store.dispatch("playNextSound"),this.$router.push({name:"/CO-02-1"})}}},A=C,b=(0,x.Z)(A,s,h,!1,null,"a5ebc7a0",null),I=b.exports}}]);
//# sourceMappingURL=191.9aaef144.js.map