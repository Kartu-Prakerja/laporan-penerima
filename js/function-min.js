const e=new URLSearchParams(window.location.search);var a,t="http://localhost:8848",o="https://statistik-penerima.prakerja.go.id",i=document.getElementById("maps-indonesia"),r=(document.getElementById("autocomplate"),document.getElementById("maps-province")),n=$("#tablePersebaran");const l=[{category:"Penjualan dan Pemasaran",iconName:"bi-shop"},{category:"Makanan dan Minuman",iconName:"bi-cookie"},{category:"Teknologi Informasi",iconName:"bi-cpu"},{category:"Bahasa asing",iconName:"bi-translate"},{category:"Lainnya",iconName:"bi-grid"},{category:"Pemasaran",iconName:"bi-bag-heart"},{category:"Manajemen",iconName:"bi-diagram-2"},{category:"Gaya hidup",iconName:"bi-luggage"},{category:"Teknik",iconName:"bi-wrench-adjustable-circle"},{category:"Perkantoran",iconName:"bi-buildings"},{category:"Teknologi, Informatika",iconName:"bi-code-slash"},{category:"Sosial dan Perilaku",iconName:"bi-activity"},{category:"Desain Grafis, Ilustrasi, Animasi",iconName:"bi-brush"},{category:"Administrasi & Tata Usaha",iconName:"bi-house-gear"},{category:"Keuangan",iconName:"bi-wallet2"},{category:"Pengembangan Diri",iconName:"bi-ladder"},{category:"Penjualan",iconName:"bi-cart-frame"},{category:"Pertanian",iconName:"bi-sunrise"},{category:"Sumber Daya Manusia",iconName:"bi-people"},{category:"Content Creation, Media Sosial",iconName:"bi-lightbulb"},{category:"Pariwisata, Perhotelan, Restoran",iconName:"bi-building"},{category:"Akuntansi, Pajak",iconName:"bi-percent"},{category:"Komunikasi",iconName:"bi-megaphone"},{category:"Lain-Lain",iconName:"bi-grid-fill"},{category:"Ritel/Perdagangan",iconName:"bi-layers"},{category:"Investasi & Keuangan",iconName:"bi-piggy-bank"},{category:"Pemeliharaan, Perbaikan, Servis",iconName:"bi-tools"},{category:"Arsitektur, Desain Interior, Kontraktor",iconName:"bi-vector-pen"},{category:"Manufaktur",iconName:"bi-robot"},{category:"Media, Kepenulisan, Reportase",iconName:"bi-camera-reels"},{category:"Tekstil",iconName:"bi-upc"},{category:"Operasi, Gudang",iconName:"bi-boxes"},{category:"Otomotif",iconName:"bi-car-front"},{category:"Kesehatan",iconName:"bi-hospital"},{category:"Kesenian, Kriya",iconName:"bi-paint-bucket"},{category:"Produktivitas Diri",iconName:"bi-graph-up-arrow"},{category:"Merek, Citra Visual",iconName:"bi-tag"},{category:"Keuangan Pribadi",iconName:"bi-calculator"},{category:"Garmen, Konveksi",iconName:"bi-bounding-box"},{category:"Perkebunan",iconName:"bi-flower1"},{category:"Makanan/Minuman Kemasan",iconName:"bi-cup-straw"},{category:"Asuransi, Perbankan",iconName:"bi-bank"},{category:"Transportasi",iconName:"bi-train-lightrail-front"},{category:"Kuliner",iconName:"bi-egg-fried"},{category:"Musik, Audio",iconName:"bi-music-note-beamed"},{category:"Pendidikan",iconName:"bi-mortarboard"},{category:"Pertambangan",iconName:"bi-minecart-loaded"},{category:"Perikanan",iconName:"bi-water"},{category:"Kecantikan",iconName:"bi-eyedropper"},{category:"Event Organizer",iconName:"bi-person-vcard"},{category:"Logistik",iconName:"bi-truck"},{category:"Peternakan",iconName:"bi-egg"},{category:"Perawatan",iconName:"bi-wrench"},{category:"Kehutanan",iconName:"bi-tree"}];const s=new autoComplete({selector:"#autoComplete",submit:!0,placeHolder:"Cari Provinsi atau Kabupaten Kota",data:{src:async()=>{try{document.getElementById("autoComplete").setAttribute("placeholder","Loading...");const e=await fetch(o+"/js/data/data-province-city.json"),a=await e.json();return document.getElementById("autoComplete").setAttribute("placeholder",s.placeHolder),a}catch(e){return e}},keys:["KOTA_KABUPATEN","PROVINCE_NAME"],cache:!0},resultsList:{element:(e,a)=>{if(!a.results.length){const t=document.createElement("div");t.setAttribute("class","no_result"),t.innerHTML=`<span>Found No Results for "${a.query}"</span>`,e.prepend(t)}},noResults:!0},resultItem:{highlight:!0},events:{input:{selection:e=>{var a=_.isEmpty(e.detail.selection.value.KOTA_KABUPATEN)?e.detail.selection.value.PROVINCE_NAME:e.detail.selection.value.KOTA_KABUPATEN,o=_.isEmpty(e.detail.selection.value.KOTA_KABUPATEN)?t+"/provinsi/?nama="+e.detail.selection.value.PROVINCE_NAME.replace(/\s+/gi,"-").toLowerCase()+"&kode="+e.detail.selection.value.PROVINCE_CODE:t+"/kabupaten/?nama="+e.detail.selection.value.KOTA_KABUPATEN.replace(/\s+/gi,"-").toLowerCase()+"&kode="+e.detail.selection.value.KOTA_KABUPATEN_ID;s.input.value=a,window.open(o)}}}});function c(e){var a=$("#course-category-list");_.each(e,(function(e){a.append(function(e,a){return'<div class="col-12 col-lg-20 col-md-6 mb-4"><div class="text-center p-4 bg-b100 rounded h-100"><i class="bi '+_.findWhere(a,{category:e.CATEGORY}).iconName+' mb-3 fs-1 text-primary"></i><h6>'+e.CATEGORY+"</h6></div></div>"}(e,l))}))}function d(e,a){$(e).DataTable({searching:!1,bLengthChange:!1,data:a,order:[[11,"asc"]],columns:[{data:"PROVINSI",render:function(e,a,o,i){var r=_.isEmpty(e)?"":e.replace(/\s+/gi,"-").toLowerCase();return'<a href="'+(t+"/provinsi/?nama="+r+"&kode="+o.PROVINCE_CODE)+'" target="_blank">'+e+"</a>"}},{data:"SK_2020"},{data:"SK_2020_AKTIF"},{data:"SK_2021"},{data:"SK_2021_AKTIF"},{data:"SK_2022"},{data:"SK_2022_AKTIF"},{data:"SK_2023"},{data:"SK_2023_AKTIF"},{data:"SK_2024"},{data:"SK_2024_AKTIF"},{data:"PROVINCE_CODE",render:""}],columnDefs:[{targets:-1,defaultContent:"-",targets:"_all",render:$.fn.dataTable.render.number(".",",",0,"")},{target:0,className:"dt-body-left"},{target:11,visible:!1,searchable:!1}],layout:{bottomEnd:{paging:{firstLast:!1}}},fnRowCallback:function(e,a,t,o){a[1]>5?$("td",e).css("background-color","Red"):a[1]<=4&&$("td",e).css("background-color","Orange")}})}function m(e,a){$(e).DataTable({searching:!1,bLengthChange:!1,data:a,order:[[11,"asc"]],columns:[{data:"KOTA_KABUPATEN",render:function(e,a,o,i){var r=_.isEmpty(e)?"":e.replace(/\s+/gi,"-").toLowerCase();return'<a href="'+(t+"/kabupaten/?nama="+r+"&kode="+o.KOTA_KABUPATEN_ID)+'" target="_blank">'+e+"</a>"}},{data:"SK_2020"},{data:"SK_2020_AKTIF"},{data:"SK_2021"},{data:"SK_2021_AKTIF"},{data:"SK_2022"},{data:"SK_2022_AKTIF"},{data:"SK_2023"},{data:"SK_2023_AKTIF"},{data:"SK_2024"},{data:"SK_2024_AKTIF"},{data:"KOTA_KABUPATEN_ID",render:""}],columnDefs:[{targets:-1,defaultContent:"-",targets:"_all",render:$.fn.dataTable.render.number(".",",",0,"")},{target:0,className:"dt-body-left"},{target:11,visible:!1,searchable:!1}],layout:{bottomEnd:{paging:{firstLast:!1}}},fnRowCallback:function(e,a,t,o){a[1]>5?$("td",e).css("background-color","Red"):a[1]<=4&&$("td",e).css("background-color","Orange")}})}function g(e){var a,t=document.getElementById("gender"),o=echarts.init(t),i=[];_.each(e,(function(e,a,t){return i[a]=e.RPL_TAHUN}));var r=[_.pluck(e,"SK_L"),_.pluck(e,"SK_P")],n=[];for(let e=0;e<r[0].length;++e){let a=0;for(let t=0;t<r.length;++t)a+=r[t][e];n.push(a)}var l=["Laki-Laki","Perempuan"].map(((e,a)=>({name:e,type:"bar",stack:"total",barWidth:"90%",label:{show:!0,color:"#fff",formatter:e=>Math.floor(100*e.data)+"%"},itemStyle:{borderWidth:.3,borderType:"dashed"},data:r[a].map(((e,a)=>n[a]<=0?0:e/n[a])),tooltip:{formatter:e=>"<b>"+e.seriesName+'</b><br/><br/><span style="margin-right: 20px">'+e.name+"</span>"+Math.floor(e.data*n[e.dataIndex]).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}}))),s={color:["#2462A8","#F06000"],legend:{selectedMode:!0,orient:"horizontal",bottom:"5",left:"auto"},grid:{left:50,right:10,top:10,bottom:50},yAxis:{type:"value",axisLabel:{formatter:e=>100*e+" %"}},xAxis:{type:"category",data:i},tooltip:{trigger:"item",showDelay:.1,transitionDuration:.2,color:"#fff",fontFamily:"Poppins"}};(a=_.extend({series:l},s))&&o.setOption(a)}function u(e){var a,t=document.getElementById("age"),o=echarts.init(t),i=[];_.each(e,(function(e,a,t){return i[a]=e.RPL_TAHUN}));var r=[_.pluck(e,"SK_18_25"),_.pluck(e,"SK_26_35"),_.pluck(e,"SK_36_45"),_.pluck(e,"SK_46_55"),_.pluck(e,"SK_56_KEATAS")],n=[];for(let e=0;e<r[0].length;++e){let a=0;for(let t=0;t<r.length;++t)a+=r[t][e];n.push(a)}var l=["18-25","26-35","36-45","46-55","56-64"].map(((e,a)=>({name:e,type:"bar",stack:"total",barWidth:"90%",label:{show:!0,color:"#fff",formatter:e=>Math.floor(100*e.data)+"%"},itemStyle:{borderWidth:.3,borderType:"dashed"},data:r[a].map(((e,a)=>n[a]<=0?0:e/n[a])),tooltip:{formatter:e=>"<b>"+e.seriesName+'</b><br/><br/><span style="margin-right: 20px">'+e.name+"</span>"+Math.floor(e.data*n[e.dataIndex]).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}}))),s={color:["#173F6D","#2AA9C6","#F4BB01","#F06000","#2A73C6"],legend:{selectedMode:!0,orient:"horizontal",bottom:"5",left:"auto"},grid:{left:50,right:10,top:10,bottom:50},yAxis:{type:"value",max:1,axisLabel:{formatter:e=>100*e+" %"}},xAxis:{type:"category",data:i},tooltip:{trigger:"item",showDelay:.1,transitionDuration:.2,color:"#fff",fontFamily:"Poppins"}};(a=_.extend({series:l},s))&&o.setOption(a)}function p(e){var a=$(".pmi"),t=$(".desil"),o=$(".difabel"),i=$(".vilage");a.html(e.pmi+" %"),t.html(e.desil+" %"),o.html(e.difabel+" %"),i.html(e.vilage+" %")}function b(e){var a,t=document.getElementById("lastEdu"),o=echarts.init(t),i=[];_.each(e,(function(e,a,t){return i[a]=e.RPL_TAHUN}));var r=[_.pluck(e,"SK_SD"),_.pluck(e,"SK_SMP"),_.pluck(e,"SK_SMA_SMAK_SEDERAJAT"),_.pluck(e,"SK_D1_D4"),_.pluck(e,"SK_S1_S3")],n=[];for(let e=0;e<r[0].length;++e){let a=0;for(let t=0;t<r.length;++t)a+=r[t][e];n.push(a)}var l=["SD","SMP","SMA/SMK Sederajat","D1-D4","S1-S3"].map(((e,a)=>({name:e,type:"bar",stack:"total",barWidth:"90%",label:{show:!0,color:"#fff",formatter:e=>Math.floor(100*e.data)+"%"},itemStyle:{borderWidth:.3,borderType:"dashed"},data:r[a].map(((e,a)=>n[a]<=0?0:e/n[a])),tooltip:{formatter:e=>"<b>"+e.seriesName+'</b><br/><br/><span style="margin-right: 20px">'+e.name+"</span>"+Math.floor(e.data*n[e.dataIndex]).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}}))),s={color:["#173F6D","#2AA9C6","#F4BB01","#F06000","#2A73C6"],legend:{selectedMode:!0,orient:"horizontal",bottom:"5",left:"auto"},grid:{left:50,right:10,top:10,bottom:50},yAxis:{type:"value",max:1,axisLabel:{formatter:e=>100*e+" %"}},xAxis:{type:"category",data:i},tooltip:{trigger:"item",showDelay:.1,transitionDuration:.2,color:"#fff",fontFamily:"Poppins"}};(a=_.extend({series:l},s))&&o.setOption(a)}function y(e){var a,t=document.getElementById("course-preference"),o=echarts.init(t),i=[];_.each(e,(function(e,a){i[a]={name:"lms"==e.MODA?"Pembelajaran Mandiri":e.MODA.charAt(0).toUpperCase()+e.MODA.slice(1).toLowerCase(),value:e.PERCENTAGE}})),(a={color:["#F05E00","#F2BA01","#2A72C7"],tooltip:{trigger:"item",valueFormatter:e=>e.toFixed(2)+"%"},label:{alignTo:"edge",formatter:"{b}\n{d} %",minMargin:5,edgeDistance:10,lineHeight:15},legend:{selectedMode:!0,orient:"horizontal",bottom:"0",left:"auto"},series:[{name:"Pelatihan Berdasarkan Transaksi",type:"pie",radius:["40%","70%"],data:i,emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]})&&o.setOption(a)}function f(e){var a,t=document.getElementById("course-category"),o=echarts.init(t),i=_.pluck(e,"TOTAL");(a={tooltip:{},barWidth:"90%",barHeight:"90%",xAxis:{max:"2500"},grid:{width:"95%",height:"90%",top:"5",left:"150"},yAxis:{type:"category",data:_.pluck(e,"CATEGORY"),inverse:!0,animationDuration:300,animationDurationUpdate:300,grid:{left:"100",right:"10",bottom:"30",containLabel:!0}},series:[{realtimeSort:!0,type:"bar",data:i,label:{show:!0,position:"right",valueAnimation:!0},showBackground:!0,backgroundStyle:{color:"rgba(180, 180, 180, 0.2)"}}],legend:{selectedMode:!0,orient:"horizontal",bottom:"5",left:"auto"}})&&o.setOption(a)}function h(e){var a,t=document.getElementById("rekeningPenerimaanInsentif"),o=echarts.init(t);(a={color:["#F06000","#2462A8"],legend:{selectedMode:!0,orient:"horizontal",bottom:"0",left:"auto"},tooltip:{trigger:"item",valueFormatter:e=>e.toFixed(2)+"%"},dataset:{source:[_.union(["Isentif"],_.pluck(e,"RPL_TAHUN")),_.union(["Bank"],_.pluck(e,"BANK")),_.union(["E-Wallet"],_.pluck(e,"EMONEY"))]},xAxis:[{type:"category",gridIndex:0},{type:"category",gridIndex:1}],yAxis:[{gridIndex:0},{gridIndex:1}],grid:[{width:"95%",height:"80%",left:"30",bottom:"10%",top:"5%"},{width:"95%",height:"80%",left:"30",bottom:"10%",top:"5%"}],series:[{type:"bar",seriesLayoutBy:"row"},{type:"bar",seriesLayoutBy:"row"}]})&&o.setOption(a)}!function(t){if(i){var l=echarts.init(i);l.showLoading(),t.getJSON(o+"/js/map/IDN_FN.json",(function(e){l.hideLoading();var i=[];t.getJSON("https://public-prakerja.oss-ap-southeast-5.aliyuncs.com/data-demografi/indonesia/indonesia.json",(function(r){var s=r.pkp.data,m=r.gender.data,A=r.age.data,N=r.education.data,k=r.lp.data,P=r.p.data,v=r.transaction.data,T=r.top_course_category.data,K=r.top_trx_course_category.data,S=r.emoney_vs_bank.data,E=_.sortBy(m,(e=>e.RPL_TAHUN)),C=_.sortBy(A,(e=>e.RPL_TAHUN)),w=_.sortBy(N,(e=>e.RPL_TAHUN)),O=_.sortBy(P,(e=>e.RPL_TAHUN)),L={desil:r.desil_1.data.TOTAL,pmi:r.purna_pmi.data.TOTAL,vilage:r.pedesaan.data.TOTAL,difabel:r.difabel.data.TOTAL},x=_.sortBy(v,(e=>e.PERCENTAGE)),B=_.sortBy(T,(e=>e.RNK)),I=_.sortBy(K,(e=>e.RNK)),D=_.sortBy(S,(e=>e.RPL_TAHUN)),M=_.sortBy(_.without(s,_.findWhere(s,{PROVINCE_CODE:"TOTAL"})),(e=>e.PROVINCE_CODE));t.each(s,(function(e,a){return i.push({name:a.PROVINSI,value:a.SK,code:a.PROVINCE_CODE,index:e})})),echarts.registerMap("IDMAP",e),a={animation:!0,tooltip:{trigger:"item",showDelay:.1,transitionDuration:.2,color:"#fff",fontFamily:"Poppins"},visualMap:{left:"left",min:100,max:4e6,inRange:{color:["#2a72c7","#2461a9","#1d508b","#173f6d","#112e50"]},text:["Banyak","Sedikit"],calculable:!0},toolbox:{show:!0,orient:"vertical",left:"left",top:"top"},series:[{name:"Jumlah Penerima Prakerja Di Provinsi",type:"map",roam:"false",map:"IDMAP",aspectScale:.925,zoom:1.25,itemStyle:{areaColor:"#8DB2DD",borderColor:"#273545",borderWidth:.3,borderType:"dashed",borderJoin:"round",borderCap:"round",color:"#fff"},emphasis:{label:{show:!0},itemStyle:{areaColor:"#f05e00",color:"#fff",shadowColor:"rgba(0,0,0,0.5)",shadowOffsetX:1,shadowOffsetY:.9},label:{color:"#000",fontFamily:"Poppins",fontSize:12,textShadowColor:"#eee",textBorderType:"solid",shadowColor:"#fff"}},data:i}]},l.setOption(a),l.on("click",(function(e){r=e.data;var a=_.isEmpty(r.name)?"":r.name.replace(/\s+/gi,"-").toLowerCase(),t=o+"/provinsi/?nama="+a+"&kode="+r.code;window.open(t,"Statistik Program Prakerja Provinsi"+r.name+" - prakerja.go.id")})),d(n,M),g(E),u(C),b(w),p(L),function(e){var a=document.getElementById("course-provider"),t=echarts.init(a);t.showLoading();var o,i=[];_.each(e,(function(e,a,t){i[a]=e.RPL_TAHUN})),o={color:["#2A72C7","#F05E00","#2491A9"],tooltip:{trigger:"axis"},legend:{data:["Akumulasi LP","Lembaga Baru","Lembaga Aktif"],selectedMode:!0,orient:"horizontal",bottom:"5",left:"auto"},grid:{left:"10",right:"10",bottom:"30",containLabel:!0,height:"85%"},xAxis:{type:"category",boundaryGap:!1,data:i},yAxis:{type:"value",interval:100,max:600},series:[{name:"Akumulasi LP",type:"line",data:_.pluck(e,"AKUMULASI_LP")},{name:"Lembaga Baru",type:"line",data:_.pluck(e,"NEW_LP")},{name:"Lembaga Aktif",type:"line",data:_.pluck(e,"AKTIF_LP")}]},t.hideLoading(),o&&t.setOption(o)}(k),function(e){var a=document.getElementById("courses"),t=echarts.init(a);t.showLoading();var o,i=[];_.each(e,(function(e,a,t){i[a]=e.RPL_TAHUN})),o={color:["#2A72C7","#F05E00","#2491A9"],tooltip:{trigger:"axis"},legend:{data:["Akumulasi Pelatihan","Pelatihan Baru","Pelatihan Dengan Transaksi"],selectedMode:!0,orient:"horizontal",bottom:"5",left:"auto"},grid:{left:"10",right:"10",bottom:"30",containLabel:!0,height:"85%"},xAxis:{type:"category",boundaryGap:!1,data:i},yAxis:{type:"value"},series:[{name:"Akumulasi Pelatihan",type:"line",data:_.pluck(e,"AKUMULASI_P")},{name:"Pelatihan Baru",type:"line",data:_.pluck(e,"NEW_P")},{name:"Pelatihan Dengan Transaksi",type:"line",data:_.pluck(e,"TRANS_P")}]},t.hideLoading(),o&&t.setOption(o)}(O),y(x),f(B),c(I),h(D)}))})),function(e,a,t,o){let i=null;var r=n=>{i||(i=n);var l=Math.min((n-i)/o,1);e.innerHTML=Math.floor(l*(t-a)+a).toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."),l<1&&window.requestAnimationFrame(r)};window.requestAnimationFrame(r)}(document.getElementById("total-penerima"),0,18887737,1200)}if(r){var s=echarts.init(r),A=_.isEmpty(e.get("kode"))?"31":e.get("kode"),N=(_.isEmpty(e.get("nama"))||e.get("nama"),"city_"+A+".geojson"),k=A+".json";s.showLoading(),t.getJSON(o+"/js/map/province/"+N,(function(e){s.hideLoading();var i=[];t.getJSON("https://public-prakerja.oss-ap-southeast-5.aliyuncs.com/data-demografi/provinsi/"+k,(function(r){var l=r.pkp.data,d=r.gender.data,p=r.age.data,A=r.education.data,N=r.transaction.data,k=r.top_course_category.data,P=r.top_trx_course_category.data,v=r.emoney_vs_bank.data,T=_.sortBy(d,(e=>e.RPL_TAHUN)),K=_.sortBy(p,(e=>e.RPL_TAHUN)),S=_.sortBy(A,(e=>e.RPL_TAHUN)),E=_.sortBy(N,(e=>e.PERCENTAGE)),C=_.sortBy(k,(e=>e.RNK)),w=_.sortBy(P,(e=>e.RNK)),O=_.sortBy(v,(e=>e.RPL_TAHUN)),L=_.sortBy(_.without(l,_.findWhere(l,{PROVINCE_CODE:"TOTAL"})),(e=>e.PROVINCE_CODE));t.each(l,(function(e,a){return i.push({name:a.KOTA_KABUPATEN,province_name:a.PROVINCE,value:a.SK,code:a.KOTA_KABUPATEN_ID,province_code:a.PROVINCE_CODE,index:e})}));_.min(i,(e=>e.value));var x=_.max(i,(e=>e.value));echarts.registerMap("IDMAP",e),a={animation:!0,tooltip:{trigger:"item",showDelay:.1,transitionDuration:.2,color:"#fff",fontFamily:"Poppins"},visualMap:{left:"left",min:100,max:x.value,inRange:{color:["#2a72c7","#2461a9","#1d508b","#173f6d","#112e50"]},text:["Banyak","Sedikit"],calculable:!0},toolbox:{show:!0,orient:"vertical",left:"left",top:"top"},series:[{name:"Jumlah Penerima Prakerja Di Provinsi",type:"map",roam:"false",map:"IDMAP",aspectScale:.925,zoom:2,itemStyle:{areaColor:"#8DB2DD",borderColor:"#273545",borderWidth:.3,borderType:"dashed",borderJoin:"round",borderCap:"round",color:"#fff"},emphasis:{label:{show:!0},itemStyle:{areaColor:"#f05e00",color:"#fff",shadowColor:"rgba(0,0,0,0.5)",shadowOffsetX:1,shadowOffsetY:.9},label:{color:"#000",fontFamily:"Poppins",fontSize:12,textShadowColor:"#eee",textBorderType:"solid",shadowColor:"#fff"}},data:i}]},s.setOption(a),s.on("click",(function(e){r=e.data;var a=_.isEmpty(r.name)?"":r.name.replace(/\s+/gi,"-").toLowerCase(),t=o+"/kabupaten/?nama="+a+"&kode="+r.code;window.open(t,"Statistik Program Prakerja Provinsi"+r.name+" - prakerja.go.id")})),m(n,L),g(T),u(K),b(S),y(E),f(C),c(w),h(O)}))}))}t(window).scroll((function(){var e=t(window).scrollTop();e>=60?t("header").addClass("header-fixed"):t("header").removeClass("header-fixed"),e>=214?t(".search-boxy").addClass("is-fixed"):t(".search-boxy").removeClass("is-fixed"),e>=400?t(".scroll-top").addClass("is-show"):t(".scroll-top").removeClass("is-show")})),t(".scroll-top").on("click",(function(){t(window).scrollTop(0)})),t(".menu").click((function(){t(this).toggleClass("open"),t(".navbar-custom").toggleClass("m-menu"),t("body").toggleClass("freeze")})),t(".nav-link, .nav-cta").on("click",(function(e){t(".menu").removeClass("open"),t(".navbar-custom").removeClass("m-menu"),t("body").removeClass("freeze")})),t(".testimony-carousel").owlCarousel({loop:!0,autoplay:!0,center:!1,dots:!1,responsive:{1e3:{items:1.5,margin:0},756:{items:2,margin:0},0:{items:1,margin:0}}})}(jQuery);
//# sourceMappingURL=function-min.js.map