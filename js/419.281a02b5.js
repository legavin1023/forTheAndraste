"use strict";(self["webpackChunkforAndraste"]=self["webpackChunkforAndraste"]||[]).push([[419],{3419:function(t,e,s){s.r(e),s.d(e,{default:function(){return c}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"box"},[e("transition",{attrs:{name:"fade"}},[t.isVisible?e("canvas",{ref:"canvasEl",staticClass:"flashLight",on:{mousemove:t.handleMouseMove,mouseleave:t.handleMouseLeave}}):t._e()]),e("div",{staticClass:"topImage fenris"}),e("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),e("div",{staticClass:"puzzle"},[e("div",{ref:"root",staticClass:"particle-root"}),e("div",{staticClass:"score"},[t._v(t._s(t.score))]),e("div",{staticClass:"background-area",on:{mouseup:t.stopCounting,mouseleave:t.stopCounting}},[e("div",{staticClass:"color-zone red"}),e("div",{staticClass:"color-zone yellow"}),e("div",{staticClass:"color-zone green"}),e("div",{staticClass:"gauge-bar",style:{width:t.gaugeValue+"%"}})])]),e("button",{staticClass:"persuade-button",on:{click:t.persuade}},[t._v("설득하기")]),e("div",{staticClass:"bottomImage"})])],1)},a=[function(){var t=this,e=t._self._c;return e("p",{staticClass:"content-text"},[t._v(" 고양이를 따라 도착한 곳은 하이타운의 커다란 저택이었다. "),e("br"),t._v(" 하지만 커크월이 이렇게 된데다 주인이 자리를 비운 저택은, 그 전에 품고 있었을 호화로운 빛을 모두 잃은 것처럼 보였다. "),e("br"),e("br"),t._v("장식장에 고양이가 그려져 있다는 것만으로, 홀린듯이 길고양이를 쫓아 여기까지 온 것이 어리석었다는 것을 인정할 때 쯤, 저택 안쪽에서 무언가 깨지는 소리와 함께 희미하게 싸우는 소리가 들렸다. ")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-dialog"},[e("ul",[e("li",[e("div",{staticClass:"content-dialog-portrait thiefA"}),e("div",{staticClass:"content-dialog-text"},[t._v(" 이걸 왜 굳이 네가 가져가겠다는 건데! ")])]),e("li",[e("div",{staticClass:"content-dialog-portrait thiefB"}),e("div",{staticClass:"content-dialog-text"},[t._v(" 그게 왜 중요해? 네가 가져갈 이유는 또 뭐야! ")])]),e("li",[e("div",{staticClass:"content-dialog-portrait thiefA"}),e("div",{staticClass:"content-dialog-text"},[t._v(" 진료소 턴 다음에 판 돈 네가 더 많이 가져간 걸 모를 줄 알아? ")])]),e("li",[e("div",{staticClass:"content-dialog-portrait thiefB"}),e("div",{staticClass:"content-dialog-text"},[t._v("또 그 소리야? 증거 있어?")])])])])},function(){var t=this,e=t._self._c;return e("p",{staticClass:"content-text"},[t._v(" 도둑들인 모양이었다. "),e("br"),t._v("이대로 경비대에게 보고하는 것이 올바른 수순이겠지만. 그들이 말 한 '진료소 턴 다음에'라는 말은그대로 지나칠 수 있는 것이 아니었다. "),e("br"),e("br"),t._v("이미 자물쇠가 박살난 문은 손쉽게 열 수 있었다. 안쪽의 뿌연 먼지를 따라 도둑들의 발자국이 그대로 남아있는데다, 워낙 큰 소리로 다투고 있는지라 도둑들의 위치를 찾아가는 것은 어렵지 않았다. "),e("br"),e("br"),t._v("지하의 와인창고의 문은 활짝 열려있었고, 경계 태세를 취하며 안쪽으로 고개를 살짝 기울이자, 두 사람이 와인 병 몇 개를 두고 싸우고 있는 게 보였다. "),e("br"),t._v("두 사람의 싸움은 곧 몸싸움으로 번져갔는데, 그 자세가 어색하고 엉망진창이었다 "),e("br"),e("br"),t._v("목을 가다듬는 소리를 내자, 한순간에 소음이 잦아들고 두 쌍의 눈이 이쪽으로 꽂혔다. ")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-dialog"},[e("ul",[e("li",[e("div",{staticClass:"content-dialog-portrait thiefA"}),e("div",{staticClass:"content-dialog-text"},[t._v("뭐야 넌!")])]),e("li",[e("div",{staticClass:"content-dialog-portrait thiefB"}),e("div",{staticClass:"content-dialog-text"},[t._v("여긴 우리가 먼저 왔어!")])])])])},function(){var t=this,e=t._self._c;return e("p",{staticClass:"content-text"},[t._v(" 아무래도 이쪽을 같은 도둑 쯤으로 생각한 모양이었다. "),e("br"),t._v("'대화'를 하려면, 조금의 '설득'이 필요해보였다. ")])}],o=(s(7658),{data(){return{gaugeValue:0,maxGaugeValue:100,startTime:null,targetTime:null,countdownInterval:null,countdown:null,targetZoneStart:65,targetZoneEnd:85,score:0,hasScoreDecreasedAtZero:!1,decreaseInterval:null,routeChanged:!1,particles:[],clicks:[],images:["/forAndraste/assets/04_anders_clinic/bottle/bottle_1.png","/forAndraste/assets/04_anders_clinic/bottle/bottle_2.png","/forAndraste/assets/04_anders_clinic/bottle/bottle_3.png","/forAndraste/assets/04_anders_clinic/bottle/bottle_4.png"],mousePosition:{x:window.innerWidth/2,y:window.innerHeight/2},flashlight_size:{center:window.innerHeight/5,outside:window.innerHeight/3},gradient_color:{first:"rgba(0,0,0,0.8)",second:"rgba(0,0,0,0)"},gradient:null,isVisible:!0,lastScrollPosition:0}},watch:{score(t){t>=100&&this.removeAllImages()}},mounted(){this.startDecreasingGauge(),this.loop(),window.addEventListener("click",this.handleClick),this.initializeCanvas(),this.draw(),window.addEventListener("scroll",this.handleScroll)},methods:{click(){this.$router.push({name:"/FF-05-2-AA-05-03"})},handleScroll(){const t=window.scrollY;t>this.lastScrollPosition&&t>2600&&(this.isVisible=!1),this.lastScrollPosition=t},increaseGauge(){this.gaugeValue>=50&&this.gaugeValue<this.maxGaugeValue?this.gaugeValue+=1:this.gaugeValue+=2,this.gaugeValue>this.maxGaugeValue&&(this.gaugeValue=this.maxGaugeValue),this.checkTargetZone()},stopCounting(){clearInterval(this.increasingInterval),this.increasingInterval=null},decreaseGauge(){this.gaugeValue--,this.gaugeValue<=0?(this.gaugeValue=0,this.hasScoreDecreasedAtZero||(this.score=0,this.hasScoreDecreasedAtZero=!0)):this.hasScoreDecreasedAtZero=!1,this.adjustScore()},adjustScore(){this.gaugeValue<33?this.score-=5:this.gaugeValue>=66&&(this.score+=5),this.score<0&&(this.score=0),this.score>100&&(this.score=100),100!==this.score||this.routeChanged||(this.routeChanged=!0,this.$router.push({name:"/FF-05-2-AA-05-03"}))},checkTargetZone(){this.gaugeValue>=this.targetZoneStart&&this.gaugeValue<=this.targetZoneEnd&&!this.targetTime&&this.countdownInterval},startDecreasingGauge(){this.stopDecreasingGauge();let t=300;this.gaugeValue>200&&(t=20),this.decreaseInterval=setInterval((()=>{this.decreaseGauge(),50===this.gaugeValue&&this.startDecreasingGauge()}),t)},stopDecreasingGauge(){this.decreaseInterval&&(clearInterval(this.decreaseInterval),this.decreaseInterval=null)},persuade(){this.gaugeValue>=50&&this.gaugeValue<this.maxGaugeValue?this.gaugeValue+=1:this.gaugeValue+=2,this.gaugeValue>this.maxGaugeValue&&(this.gaugeValue=this.maxGaugeValue),this.checkTargetZone()},randomFloat(t=0,e=9999){return Math.random()*(e-t)+t},mapRange(t,e,s){return s[0]+(t-e[0])*(s[1]-s[0])/(e[1]-e[0])},addParticle(t,e){const s=this.createParticle(t,e,(()=>{this.particles.splice(this.particles.indexOf(s),1),this.$nextTick((()=>{this.$refs.root&&s.el&&this.$nextTick((()=>{this.$refs.root&&this.$refs.root.removeChild(s.el)}))}))}));return this.particles.push(s),this.$refs.root.appendChild(s.el),s},addParticles(t,e){const s=Math.max(0,Math.min(1,200-this.particles.length));for(let i=0;i<s;i++)this.addParticle(t,e)},handleClick(t){this.clicks.push([t.pageX,t.pageY]),clearTimeout(this.timer),this.timer=setTimeout((()=>this.clicks=[]),400),this.clicks.length>1&&this.addParticles(this.clicks[this.clicks.length-1][0],this.clicks[this.clicks.length-1][1])},createParticle(t,e,s){const i=document.createElement("img");i.src=this.images[Math.floor(Math.random()*this.images.length)];const a=this.randomFloat(50,250),o=10,l=this.randomFloat(0,1)<.5?this.randomFloat(.2*-a,-a):this.randomFloat(.2*a,a),r=this.randomFloat(.6*a,a),n=this.randomFloat(.6*a,a),c=this.randomFloat(-o,o),h=this.randomFloat(-o,o);let d=0,u=!1,g=0,v=0;i.style.position="absolute",i.style.left=`${t}px`,i.style.top=`${e}px`,i.style.transform="translate3d(-50%, -50%, 0)";const m=()=>{u=!0,s()},p=()=>{if(u)return;if(d++,d>a)return void m();g+=c,v+=h;const t=this.mapRange(d,[0,l],[0,360]),e=this.mapRange(d,[0,r],[.25,3]),s=this.mapRange(d,[0,n],[.25,3]),o=`translate3d(-50%, -50%, 0) translate3d(${g}px, ${v}px, 0) rotate(${t}deg) scale(${e}, ${s})`,p=this.mapRange(d,[.6*a,a],[1,0]);i.style.transform=o,i.style.opacity=p};return{el:i,update:p,distroy:m}},loop(){requestAnimationFrame(this.loop),this.particles.forEach((t=>t.update()))},removeAllImages(){this.particles.forEach((t=>t.distroy())),this.particles=[]},initializeCanvas(){const t=this.$refs.canvasEl;t.width=window.innerWidth,t.height=window.innerHeight,t.overflow="hidden","relative"!==window.getComputedStyle(document.body).getPropertyValue("position")&&(document.body.style.position="relative"),t.style="position: fixed; top: 0; left: 0;"},handleMouseMove(t){this.mousePosition.x=t.offsetX,this.mousePosition.y=t.offsetY,this.draw()},handleMouseLeave(){this.draw()},draw(){const t=this.$refs.canvasEl,e=t.getContext("2d"),s=t.width,i=t.height;e.save(),e.clearRect(0,0,s,i),this.gradient=e.createRadialGradient(this.mousePosition.x,this.mousePosition.y,this.flashlight_size.center,this.mousePosition.x,this.mousePosition.y,this.flashlight_size.outside),this.gradient.addColorStop(0,this.gradient_color.first),this.gradient.addColorStop(1,this.gradient_color.second),e.fillStyle="#000",e.fillRect(0,0,s,i),e.globalCompositeOperation="destination-out",e.fillStyle=this.gradient,e.arc(this.mousePosition.x,this.mousePosition.y,this.flashlight_size.outside,0,2*Math.PI,!1),e.fill(),e.restore()}},beforeDestroy(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("click",this.handleClick)}}),l=o,r=s(1001),n=(0,r.Z)(l,i,a,!1,null,"7394ba53",null),c=n.exports}}]);
//# sourceMappingURL=419.281a02b5.js.map