"use strict";(self["webpackChunkforAndraste"]=self["webpackChunkforAndraste"]||[]).push([[257],{257:function(t,s,e){e.r(s),e.d(s,{default:function(){return l}});var r=function(){var t=this,s=t._self._c;return s("div",{on:{mousemove:t.draggingImage,mouseup:t.endDrag}},[s("div",{staticClass:"topImage anders"}),t._l(t.images,(function(e){return s("div",{key:e.id,staticClass:"bottleBox",style:{top:e.top+"vh",left:e.left+"vw",position:"absolute"},on:{mousedown:function(s){return t.startDrag(s,e)}}},[s("img",{attrs:{src:e.src}})])})),s("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),s("div",{staticClass:"puzzle"},[s("div",{staticClass:"game-container"},[s("div",{staticClass:"progress-bar"},[s("div",{staticClass:"progress-bar-fill",style:{width:t.chances/5*100+"%"}}),s("img",{staticClass:"hangman-image cat",style:{width:"200px",left:`calc((${t.chances/5*100}%) - 150px)`},attrs:{x:"",src:e(4584),alt:"Hangman"}}),s("img",{staticClass:"hangman-image fish",style:{left:"0%"},attrs:{src:e(5310),alt:"Hangman"}})])]),s("div",{staticClass:"buttonBox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.guess,expression:"guess"}],domProps:{value:t.guess},on:{keyup:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.checkGuess.apply(null,arguments)},input:function(s){s.target.composing||(t.guess=s.target.value)}}}),t._l(t.alphabet,(function(e){return s("button",{key:e,class:{"correct-letter":t.guessedLetters.includes(e)},attrs:{disabled:0===t.chances||t.wrongGuesses.includes(e)},on:{click:function(s){return t.makeGuess(e)}}},[t._v(" "+t._s(e)+" ")])}))],2),s("div",{staticClass:"char_box"},t._l(t.currentWord.split(""),(function(e,r){return s("div",{key:r,staticClass:"char-container",class:{"correct-guess":t.correctGuesses.includes(r)}},[t._v(" "+t._s(e)+" ")])})),0)])]),s("div",{staticClass:"bottomImage"})],2)},n=[function(){var t=this,s=t._self._c;return s("p",{staticClass:"content-text"},[t._v(" 앤더스의 진료소는 문도 잠겨있지 않았고 안쪽은 어수선하기 짝이 없었다. "),s("br"),t._v(" 널부러진 물건들과 훼손된 가구들은 도둑들이 뒤집어 놓은 잔해인지, 아니면 급하게 짐을 챙겨 도망친 뒤의 흔적인지 명확하게 구분할 수 없었다. "),s("br"),s("br"),t._v(" 먼지인지 재인지 알아볼 수 없는 시커먼 가루들이 지푸라기니 털이니 잡동사니에 얽혀 이곳저곳에 주인마냥 자리를 틀고 쌓여있었다. "),s("br"),t._v(" 어디서부터 시작해야할 지 막막할 정도로 어지럽게 흩어진 물건들이 마구잡이로 발에 채였다. "),s("br"),s("br"),t._v(" 진료소 가장 안쪽의 책상에 쌓인 먼지를 손으로 쓸어내자, 둥그렇게 테두리를 따라 그을린 자국이 두어개 모습을 드러냈다. 컵이라기엔 크고 냄비라기엔 작았다. "),s("br"),s("br"),t._v("책상 밑에 자각거리며 밟히는 유리를 내려다보았다. 둥그렇고 작은 유리병 입구를 주워 올렸다. 익숙한 형태였다. 템플러들이 리륨을 가열하여 기체를 흡입할 때 쓰던 플라스크와 유사했다. ")])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"content-dialog"},[s("ul",[s("li",[s("div",{staticClass:"content-dialog-portrait"}),s("div",{staticClass:"content-dialog-text"},[t._v("뭔가 실험을 했던 건가?")])])])])},function(){var t=this,s=t._self._c;return s("p",{staticClass:"content-text"},[t._v(" 책상의 위치로 보건데 아주 비밀스럽게 이루어진 실험이었다."),s("br"),t._v(" 템플러를 폭발시킨 것과 관련이 있을까 "),s("br"),t._v("그렇다면 대체 무엇으로, 어떻게 그 정도의 폭발을 일으킬 수 있었던 걸까."),s("br"),s("br"),t._v(" 책상에서 눈을 돌려, 벽 한쪽을 가득 채운 작은 보관함 진열장으로 향했다. 서랍들은 무작위로 열려있었고, 대부분은 비어있었다."),s("br"),t._v(" 이름표가 붙어있거나 드문드문 재료들이 남아있는 경우도 있었지만, 모두 평범한 약재처럼 보였다. "),s("br"),s("br"),t._v("딱 하나만 빼고."),s("br"),t._v("맨 아래 쪽, 손잡이 없이 고양이 그림이 양각 되어있는 서랍이 있었다, 언뜻봤을 때는 보관함을 장식하는 부분으로밖에 보이지 않았지만, 분명히 그 안쪽에 무언가가 들어있었다."),s("br"),s("br"),t._v("고양이 그림을 밀고 문질러봤지만 열리지 않았다. "),s("br"),t._v("작은 가방에 담긴 것 같은 모양의 고양이는 여전히 그 자리에서 이쪽을 보고 있었고, 목에 걸린 이름표는 비어 있었다. ")])}],i=(e(7658),{data:function(){return{wordToGuess:"pouncealot",currentWord:"",guess:"",chances:5,wrongGuesses:[],alphabet:"abcdefghijklmnopqrstuvwxyz".split(""),correctGuesses:[],dragging:null,currentX:0,currentY:0,images:[{id:1,src:"/forAndraste/assets/04_anders_clinic/bottle/bottle_1.png",top:0,left:0},{id:2,src:"/forAndraste/assets/04_anders_clinic/bottle/bottle_2.png",top:0,left:0},{id:3,src:"/forAndraste/assets/04_anders_clinic/bottle/bottle_3.png",top:0,left:0},{id:4,src:"/forAndraste/assets/04_anders_clinic/bottle/bottle_4.png",top:0,left:0},{id:5,src:"/forAndraste/assets/04_anders_clinic/bottle/bottle_5.png",top:0,left:0},{id:6,src:"/forAndraste/assets/04_anders_clinic/bottle/bottle_6.png",top:0,left:0},{id:7,src:"/forAndraste/assets/04_anders_clinic/bottle/bottle_7.png",top:0,left:0},{id:8,src:"/forAndraste/assets/04_anders_clinic/bottle/bottle_8.png",top:0,left:0},{id:9,src:"/forAndraste/assets/04_anders_clinic/bottle/bottle_9.png",top:0,left:0},{id:10,src:"/forAndraste/assets/04_anders_clinic/bottle/bottle_10.png",top:0,left:0}]}},methods:{startDrag(t,s){this.dragging=s,this.currentX=t.clientX,this.currentY=t.clientY},draggingImage(t){if(!this.dragging)return;const s=t.clientX-this.currentX,e=t.clientY-this.currentY;this.dragging.left+=s/window.innerWidth*100,this.dragging.top+=e/window.innerHeight*100,this.currentX=t.clientX,this.currentY=t.clientY},endDrag(){this.dragging=null},randomizeImagePositions(){this.images=this.images.map((t=>({...t,top:90*Math.random()+60,left:30*Math.random()+35})))},startGame(){this.currentWord="_".repeat(this.wordToGuess.length),this.guess="",this.chances=5,this.wrongGuesses=[]},makeGuess(t){if(this.$store.dispatch("terminateEffectAudio"),this.$store.dispatch("setEffectAudioSource","/forAndraste/assets/sound/cat_btn.mp3"),this.$store.dispatch("playEffectAudio"),0!==this.chances)if(this.wordToGuess.includes(t)?this.updateCurrentWord(t):(this.wrongGuesses.push(t),this.chances--),this.currentWord===this.wordToGuess){let t=localStorage.getItem("pv1"),s=parseInt(t,10);s+=1,localStorage.setItem("pv1",s.toString()),this.$router.push({name:"/CS-04-2"})}else 0===this.chances&&this.$router.push({name:"/CF-04-3"})},updateCurrentWord(t){for(let s=0;s<this.wordToGuess.length;s++)this.wordToGuess[s]===t&&(this.currentWord=this.currentWord.substring(0,s)+t+this.currentWord.substring(s+1),this.correctGuesses.push(s))}},computed:{guessedLetters(){return this.correctGuesses.map((t=>this.wordToGuess[t]))}},created(){this.startGame(),this.randomizeImagePositions()}}),a=i,o=e(1001),c=(0,o.Z)(a,r,n,!1,null,"1aeec061",null),l=c.exports},4584:function(t,s,e){t.exports=e.p+"img/cat.fe54edb4.svg"},5310:function(t,s,e){t.exports=e.p+"img/fish.97aca727.svg"}}]);
//# sourceMappingURL=257.8d8b5fd8.js.map