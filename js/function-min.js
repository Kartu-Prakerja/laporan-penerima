!function(e){const o="https://statistik-penerima.prakerja.go.id",a=document.getElementById("maps-indonesia");var t;if(void 0!==typeof a){var n=echarts.init(a);n.showLoading(),e.getJSON(o+"/js/map/IDN_FN.json",(function(a){n.hideLoading();var i=[];e.getJSON(o+"/js/data/indonesia-all.json",(function(o){e.each(o,(function(e,o){return i.push({name:o.name,value:o.value})})),echarts.registerMap("IDMAP",a),t={animation:!0,tooltip:{trigger:"item",showDelay:.1,transitionDuration:.2,color:"#fff",fontFamily:"Poppins"},visualMap:{left:"left",min:100,max:4e6,inRange:{color:["#2a72c7","#2461a9","#1d508b","#173f6d","#112e50"]},text:["Paling Banyak","Paling Sedikit"],calculable:!0},toolbox:{show:!0,orient:"vertical",left:"left",top:"top"},series:[{name:"Jumlah Penerima Prakerja Di Provinsi",type:"map",roam:"false",map:"IDMAP",aspectScale:.925,zoom:1.25,itemStyle:{areaColor:"#8DB2DD",borderColor:"#273545",borderWidth:.3,borderType:"dashed",borderJoin:"round",borderCap:"round",color:"#fff"},emphasis:{label:{show:!0},itemStyle:{areaColor:"#f05e00",color:"#fff",shadowColor:"rgba(0,0,0,0.5)",shadowOffsetX:1,shadowOffsetY:.9},label:{color:"#000",fontFamily:"Poppins",fontSize:12,textShadowColor:"#eee",textBorderType:"solid",shadowColor:"#fff"}},data:i}]},n.setOption(t),n.on("click",(function(e){window.open("https://www.google.com/search?q="+encodeURIComponent(e.name))}))}))}));!function(e,o,a,t){let n=null;const i=r=>{n||(n=r);const l=Math.min((r-n)/t,1);e.innerHTML=Math.floor(l*(a-o)+o).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),l<1&&window.requestAnimationFrame(i)};window.requestAnimationFrame(i)}(document.getElementById("total-penerima"),0,18887737,1500)}}(jQuery);
//# sourceMappingURL=function-min.js.map