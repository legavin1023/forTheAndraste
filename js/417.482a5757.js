"use strict";(self["webpackChunkforAndraste"]=self["webpackChunkforAndraste"]||[]).push([[417],{8417:function(t,s,i){i.r(s),i.d(s,{default:function(){return r}});var o=function(){var t=this,s=t._self._c;return s("div",[s("div",{staticClass:"topImage chantry"}),s("div",{staticClass:"content"},[t._m(0),t._m(1),s("p",{staticClass:"content-text"},[t._v(" 먼 길을 찾아온 그들을 맞이한 것은 지쳐보이는 템플러 두어명의 인사 뿐이었다. ")]),t._m(2),s("p",{staticClass:"content-text"},[t._v(" 기사단장은 템플러에게 가볍게 묵례한 뒤, 함께 온 템플러들을 향해 지시했다. ")]),t._m(3),t._m(4),s("div",{staticClass:"puzzle"},[s("transition-group",{staticClass:"container",style:{width:t.containerWidth+"px"},attrs:{name:"slide"}},t._l(t.tiles,(function(i){return s("div",{key:i.index,staticClass:"tile"},[s("div",{staticClass:"image",style:{backgroundImage:`url(${t.imgURL})`,width:t.tileWidth-2+"px",height:t.tileHeight-2+"px",backgroundSize:`${t.containerWidth}px`,backgroundPosition:t.getBackgroundPosition(i.index),opacity:i.position===t.openPosition?0:1},on:{click:function(s){return t.move(i.position)}}},[t._v(" "+t._s(t.showNumbers?i.index+1:null)+" "),s("br")])])})),0),s("button",{staticClass:"sBtn",on:{click:t.shuffleAndReset}},[t._v("퍼즐 다시 섞기")])],1),s("div",{staticClass:"content-button mt90"},[t.showButton?s("button",{on:{click:t.checkPath}},[t._v(" 중갑옷으로 갈아입는다. ")]):t._e()])]),s("div",{staticClass:"bottomImage"})])},e=[function(){var t=this,s=t._self._c;return s("p",{staticClass:"content-text mt26"},[t._v(" 가장 먼저 재앙이 시작된 챈트리는 처참했다. "),s("br"),t._v(" 빗물에 미처 씻겨가지 못한 핏자국과 시신을 수습하면서 남겨진 유류품들이 선명하게 새겨진 마법의 상흔에 뒤엉켜있었고, 중심지를 잃은 템플러들은 그 위에 텐트나 열악한 가건물을 세우고 임무를 이어가고 있었다. ")])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"content-dialog"},[s("ul",[s("li",[s("div",{staticClass:"content-dialog-portrait templarA"}),s("div",{staticClass:"content-dialog-text"},[t._v("창조주께서 함께하시길.")])]),s("li",[s("div",{staticClass:"content-dialog-portrait templarB"}),s("div",{staticClass:"content-dialog-text"},[t._v("도움에 감사드립니다.")])])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"content-dialog"},[s("ul",[s("li",[s("div",{staticClass:"content-dialog-portrait commander"}),s("div",{staticClass:"content-dialog-text"},[t._v(" 새로운 기사단장은 어디에 있나? ")])]),s("li",[s("div",{staticClass:"content-dialog-portrait templarA"}),s("div",{staticClass:"content-dialog-text"},[t._v(" 부상 때문에 인근에서 치료 중이십니다. ")])]),s("li",[s("div",{staticClass:"content-dialog-portrait commander"}),s("div",{staticClass:"content-dialog-text"},[t._v("저런, 심각한 부상인가?")])]),s("li",[s("div",{staticClass:"content-dialog-portrait templarA"}),s("div",{staticClass:"content-dialog-text"},[t._v(" 아닙니다. 오후 쯤에는 복귀하실겁니다. ")])])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"content-dialog"},[s("ul",[s("li",[s("div",{staticClass:"content-dialog-portrait commander"}),s("div",{staticClass:"content-dialog-text"},[t._v(" 붉은 리륨 조사를 진행하는 템플러들은 나와 함께 ‘갤로우즈’에서 집합한다. 아직 메이지 쪽 반란분자들이 남아있을 수도 있으니 조심들 하도록. ")])])])])},function(){var t=this,s=t._self._c;return s("p",{staticClass:"content-text"},[t._v(" 기사단장은 앤더스와 관련된 단독임무가 마무리되는 대로 갤로우즈로 복귀하라고 지시한 후 챈트리에서 멀어졌다. "),s("br"),t._v(" 우선은, 불필요한 표적이 되지 않기 위해서 템플러의 신분을 잠시 내려놓아야했다. 평상시라면 , 특히 메이지가 얽힌 임무에서라면, 템플러 갑옷은 힘의 상징과도 같았지만, 커크월은 바로 그 갈등으로 삶이 망가진 사람들이 머무는 곳이었다. ")])}],n=(i(7658),{created(){this.setup(),this.correctOrder=[...this.tiles],this.shuffleTiles()},data(){return{tiles:[],correctOrder:[],imgURL:"/forAndraste/assets/02_chantry/puzzle_sliding.png",containerWidth:500,cols:3,rows:3,openPosition:null,showNumbers:!1,solving:!1,isShuffled:!1,showButton:!1}},computed:{tileWidth(){return this.containerWidth/this.cols},tileHeight(){return this.containerWidth/this.rows}},watch:{rows(){this.setup()},cols(){this.setup()}},methods:{shuffleAndReset(){this.setup(),this.shuffleTiles(),this.isShuffled=!1,this.showButton=!1},checkPath(){this.$store.dispatch("playNextSound"),this.$router.push({name:"/CO-02-2"})},setup(){this.tiles=Array.from({length:this.cols*this.rows},((t,s)=>({index:s,position:s}))),this.openPosition=this.cols*this.rows-1},move(t){if(this.solving)return;const s=[t-1,t+1,t-this.cols,t+this.cols];if(s.includes(this.openPosition)){const s=this.tiles[t];this.tiles[t]=this.tiles[this.openPosition],this.tiles[this.openPosition]=s,this.tiles[t].position=t,this.tiles[this.openPosition].position=this.openPosition,this.openPosition=t,this.isPuzzleSolved()&&this.showWinAlert()}},positionToCoords(t){return{x:t%this.cols,y:Math.floor(t/this.cols)}},getBackgroundPosition(t){const s=this.positionToCoords(t);return`${-s.x*this.tileWidth}px ${-s.y*this.tileHeight}px`},shuffleTiles(){const t=100;let s=0;const i=setInterval((()=>{const o=this.getPossibleSlides(this.openPosition);this.move(o[Math.floor(Math.random()*o.length)]),s++,s>=t&&(clearInterval(i),this.solving=!1,this.isShuffled=!0)}),50)},getPossibleSlides(t){const s=[];return t%this.cols!==0&&s.push(t-1),t%this.cols!==this.cols-1&&s.push(t+1),t>=this.cols&&s.push(t-this.cols),t<(this.rows-1)*this.cols&&s.push(t+this.cols),s},isPuzzleSolved(){return this.isShuffled&&this.tiles.every(((t,s)=>t.index===this.correctOrder[s].index))},showWinAlert(){this.solving=!1,setTimeout((()=>{this.showButton=!0}),1e3)}}}),l=n,a=i(1001),c=(0,a.Z)(l,o,e,!1,null,"7bbcb318",null),r=c.exports}}]);
//# sourceMappingURL=417.482a5757.js.map