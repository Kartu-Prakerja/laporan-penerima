!function(e){const o="http://localhost:8848",a="https://statistik-penerima.prakerja.go.id",t=document.getElementById("maps-indonesia"),r=document.getElementById("maps-province");var n;if(t){var i=echarts.init(t);i.showLoading(),e.getJSON(a+"/js/map/IDN_FN.json",(function(o){i.hideLoading();var t=[];e.getJSON(a+"/js/data/indonesia-all.json",(function(a){e.each(a,(function(e,o){return t.push({name:o.name,value:o.value})})),echarts.registerMap("IDMAP",o),n={animation:!0,tooltip:{trigger:"item",showDelay:.1,transitionDuration:.2,color:"#fff",fontFamily:"Poppins"},visualMap:{left:"left",min:100,max:4e6,inRange:{color:["#2a72c7","#2461a9","#1d508b","#173f6d","#112e50"]},text:["Banyak","Sedikit"],calculable:!0},toolbox:{show:!0,orient:"vertical",left:"left",top:"top"},series:[{name:"Jumlah Penerima Prakerja Di Provinsi",type:"map",roam:"false",map:"IDMAP",aspectScale:.925,zoom:1.25,itemStyle:{areaColor:"#8DB2DD",borderColor:"#273545",borderWidth:.3,borderType:"dashed",borderJoin:"round",borderCap:"round",color:"#fff"},emphasis:{label:{show:!0},itemStyle:{areaColor:"#f05e00",color:"#fff",shadowColor:"rgba(0,0,0,0.5)",shadowOffsetX:1,shadowOffsetY:.9},label:{color:"#000",fontFamily:"Poppins",fontSize:12,textShadowColor:"#eee",textBorderType:"solid",shadowColor:"#fff"}},data:t}]},i.setOption(n),i.on("click",(function(e){window.open("https://www.google.com/search?q="+encodeURIComponent(e.name))}))}))}));!function(e,o,a,t){let r=null;const n=i=>{r||(r=i);const l=Math.min((i-r)/t,1);e.innerHTML=Math.floor(l*(a-o)+o).toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."),l<1&&window.requestAnimationFrame(n)};window.requestAnimationFrame(n)}(document.getElementById("total-penerima"),0,18887737,1200)}if(r){var l=echarts.init(r);l.showLoading(),e.getJSON(o+"/js/map/province/31_dki_jakarta.json",(function(a){l.hideLoading();var t=[];e.getJSON(o+"/js/data/province/31_dki_jakarta.json",(function(o){e.each(o,(function(e,o){return IDDATA.push({name:o.name,value:o.all_year})}));var r=_.min(o,(e=>e.all_year)),i=_.max(o,(e=>e.all_year));echarts.registerMap("IDMAP",a),n={animation:!0,tooltip:{trigger:"item",showDelay:.1,transitionDuration:.2,color:"#fff",fontFamily:"Poppins"},visualMap:{left:"left",min:r.all_year,max:i.all_year,inRange:{color:["#2a72c7","#2461a9","#1d508b","#173f6d","#112e50"]},text:["Banyak","Sedikit"],calculable:!0},toolbox:{show:!0,orient:"vertical",left:"left",top:"top"},series:[{name:"Jumlah Penerima Prakerja Di Provinsi",type:"map",roam:"move",map:"IDMAP",aspectScale:.925,zoom:4,layoutCenter:["100%","100%"],itemStyle:{areaColor:"#8DB2DD",borderColor:"#273545",borderWidth:.3,borderType:"dashed",borderJoin:"round",borderCap:"round",color:"#fff"},emphasis:{label:{show:!0},itemStyle:{areaColor:"#f05e00",color:"#fff",shadowColor:"rgba(0,0,0,0.5)",shadowOffsetX:1,shadowOffsetY:.9},label:{color:"#000",fontFamily:"Poppins",fontSize:12,textShadowColor:"#eee",textBorderType:"solid",shadowColor:"#fff"}},data:t}]},l.setOption(n)}))}))}e(window).scroll((function(){var o=e(window).scrollTop();o>=60?e("header").addClass("header-fixed"):e("header").removeClass("header-fixed"),o>=214?e(".search-boxy").addClass("is-fixed"):e(".search-boxy").removeClass("is-fixed"),o>=400?e(".scroll-top").addClass("is-show"):e(".scroll-top").removeClass("is-show")})),e(".scroll-top").on("click",(function(){e(window).scrollTop(0)})),e(".menu").click((function(){e(this).toggleClass("open"),e(".navbar-custom").toggleClass("m-menu"),e("body").toggleClass("freeze")})),e(".nav-link, .nav-cta").on("click",(function(o){e(".menu").removeClass("open"),e(".navbar-custom").removeClass("m-menu"),e("body").removeClass("freeze")}));var s,d=document.getElementById("jenisKelamin"),c=echarts.init(d);const m=[[100,302,301,334,390,330,320],[320,132,101,134,90,230,210],[220,182,191,234,290,330,310],[150,212,201,154,190,330,410],[820,832,901,934,1290,1330,1320]],f=[];for(let e=0;e<m[0].length;++e){let o=0;for(let a=0;a<m.length;++a)o+=m[a][e];f.push(o)}(s={legend:{selectedMode:!1},grid:{left:100,right:100,top:50,bottom:50},yAxis:{type:"value"},xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},series:["Direct","Mail Ad","Affiliate Ad","Video Ad","Search Engine"].map(((e,o)=>({name:e,type:"bar",stack:"total",barWidth:"60%",label:{show:!0,formatter:e=>Math.round(1e3*e.value)/10+"%"},data:m[o].map(((e,o)=>f[o]<=0?0:e/f[o]))})))})&&c.setOption(s),new DataTable("#tablePersebaran")}(jQuery);
//# sourceMappingURL=function-min.js.map