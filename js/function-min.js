!function(o){const e="https://statistik-penerima.prakerja.go.id",a=document.getElementById("maps-indonesia");var t;if(void 0!==typeof a){var i=echarts.init(a);i.showLoading(),o.getJSON(e+"/js/map/IDN_FN.json",(function(a){i.hideLoading();var n=[];o.getJSON(e+"/js/data/indonesia-all.json",(function(e){o.each(e,(function(o,e){return n.push({name:e.name,value:e.value})})),echarts.registerMap("IDMAP",a),t={animation:!0,tooltip:{trigger:"item",showDelay:.1,transitionDuration:.2,color:"#fff",fontFamily:"Poppins"},visualMap:{left:"left",min:100,max:4e6,inRange:{color:["#2a72c7","#2461a9","#1d508b","#173f6d","#112e50"]},text:["Paling Banyak","Paling Sedikit"],calculable:!0},toolbox:{show:!0,orient:"vertical",left:"left",top:"top"},series:[{name:"Jumlah Penerima Prakerja Di Provinsi",type:"map",roam:"false",map:"IDMAP",aspectScale:.925,zoom:1.25,itemStyle:{areaColor:"#8DB2DD",borderColor:"#273545",borderWidth:.3,borderType:"dashed",borderJoin:"round",borderCap:"round",color:"#fff"},emphasis:{label:{show:!0},itemStyle:{areaColor:"#f05e00",color:"#fff",shadowColor:"rgba(0,0,0,0.5)",shadowOffsetX:1,shadowOffsetY:.9},label:{color:"#000",fontFamily:"Poppins",fontSize:12,textShadowColor:"#eee",textBorderType:"solid",shadowColor:"#fff"}},data:n}],graphic:[{type:"polygon",$action:"click",onclick:function(o,e){}}]},i.setOption(t),i.on("click",(function(o){}))}))}))}}(jQuery);
//# sourceMappingURL=function-min.js.map