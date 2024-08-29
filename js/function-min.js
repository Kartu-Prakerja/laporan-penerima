const e="https://statistik-penerima.prakerja.go.id",t=document.getElementById("maps-indonesia"),a=document.getElementById("maps-province"),o=$("#tablePersebaran");var r;function n(t,a){$(t).DataTable({searching:!1,bLengthChange:!1,data:a,order:[[11,"asc"]],columns:[{data:"PROVINSI",render:function(t,a,o,r){var n=_.isEmpty(t)?"":t.replace(/\s+/gi,"-").toLowerCase();return'<a href="'+(e+"/provinsi/?nama="+n+"&kode="+o.PROVINCE_CODE)+'" target="_blank">'+t+"</a>"}},{data:"SK_2020"},{data:"SK_2020_AKTIF"},{data:"SK_2021"},{data:"SK_2021_AKTIF"},{data:"SK_2022"},{data:"SK_2022_AKTIF"},{data:"SK_2023"},{data:"SK_2023_AKTIF"},{data:"SK_2024"},{data:"SK_2024_AKTIF"},{data:"PROVINCE_CODE",render:""}],columnDefs:[{targets:-1,defaultContent:"-",targets:"_all",render:$.fn.dataTable.render.number(".",",",0,"")},{target:0,className:"dt-body-left"},{target:11,visible:!1,searchable:!1}],layout:{bottomEnd:{paging:{firstLast:!1}}},fnRowCallback:function(e,t,a,o){t[1]>5?$("td",e).css("background-color","Red"):t[1]<=4&&$("td",e).css("background-color","Orange")}})}!function(i){if(t){var l=echarts.init(t);l.showLoading(),i.getJSON(e+"/js/map/IDN_FN.json",(function(t){l.hideLoading();var a=[];i.getJSON("https://public-prakerja.oss-ap-southeast-5.aliyuncs.com/data-demografi/indonesia/indonesia.json",(function(s){var d=s.pkp.data,m=s.gender.data,f=s.age.data,c=s.education.data,p=_.sortBy(m,(e=>e.RPL_TAHUN)),S=_.sortBy(f,(e=>e.RPL_TAHUN)),h=_.sortBy(c,(e=>e.RPL_TAHUN)),g=_.sortBy(_.without(d,_.findWhere(d,{PROVINCE_CODE:"TOTAL"})),(e=>e.PROVINCE_CODE));i.each(d,(function(e,t){return a.push({name:t.PROVINSI,value:t.SK,code:t.PROVINCE_CODE,index:e})})),echarts.registerMap("IDMAP",t),r={animation:!0,tooltip:{trigger:"item",showDelay:.1,transitionDuration:.2,color:"#fff",fontFamily:"Poppins"},visualMap:{left:"left",min:100,max:4e6,inRange:{color:["#2a72c7","#2461a9","#1d508b","#173f6d","#112e50"]},text:["Banyak","Sedikit"],calculable:!0},toolbox:{show:!0,orient:"vertical",left:"left",top:"top"},series:[{name:"Jumlah Penerima Prakerja Di Provinsi",type:"map",roam:"false",map:"IDMAP",aspectScale:.925,zoom:1.25,itemStyle:{areaColor:"#8DB2DD",borderColor:"#273545",borderWidth:.3,borderType:"dashed",borderJoin:"round",borderCap:"round",color:"#fff"},emphasis:{label:{show:!0},itemStyle:{areaColor:"#f05e00",color:"#fff",shadowColor:"rgba(0,0,0,0.5)",shadowOffsetX:1,shadowOffsetY:.9},label:{color:"#000",fontFamily:"Poppins",fontSize:12,textShadowColor:"#eee",textBorderType:"solid",shadowColor:"#fff"}},data:a}]},l.setOption(r),l.on("click",(function(t){s=t.data;var a=_.isEmpty(s.name)?"":s.name.replace(/\s+/gi,"-").toLowerCase(),o=e+"/provinsi/?nama="+a+"&kode="+s.code;window.open(o,"Statistik Program Prakerja Provinsi"+s.name+" - prakerja.go.id")})),n(o,g),function(e){var t,a=document.getElementById("gender"),o=echarts.init(a),r=[];_.each(e,(function(e,t,a){return r[t]=e.RPL_TAHUN}));const n=[[e[0].SK_L,e[1].SK_L,e[2].SK_L,e[3].SK_L,e[4].SK_L],[e[0].SK_P,e[1].SK_P,e[2].SK_P,e[3].SK_P,e[4].SK_P]],i=[];for(let e=0;e<n[0].length;++e){let t=0;for(let a=0;a<n.length;++a)t+=n[a][e];i.push(t)}const l=["Laki-Laki","Perempuan"].map(((e,t)=>({name:e,type:"bar",stack:"total",barWidth:"90%",label:{show:!0,color:"#fff",formatter:e=>Math.floor(100*e.data)+"%"},itemStyle:{borderWidth:.3,borderType:"dashed"},data:n[t].map(((e,t)=>i[t]<=0?0:e/i[t])),tooltip:{formatter:e=>"<b>"+e.seriesName+'</b><br/><br/><span style="margin-right: 20px">'+e.name+"</span>"+Math.floor(e.data*i[e.dataIndex]).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}}))),s={color:["#2462A8","#F06000"],legend:{selectedMode:!0,orient:"horizontal",bottom:"5",left:"auto"},grid:{left:50,right:10,top:10,bottom:50},yAxis:{type:"value",axisLabel:{formatter:e=>100*e+" %"}},xAxis:{type:"category",data:r},tooltip:{trigger:"item",showDelay:.1,transitionDuration:.2,color:"#fff",fontFamily:"Poppins"}};(t=_.extend({series:l},s))&&o.setOption(t)}(p),function(e){var t,a=document.getElementById("age"),o=echarts.init(a),r=[];_.each(e,(function(e,t,a){return r[t]=e.RPL_TAHUN}));const n=[[e[0].SK_18_25,e[1].SK_18_25,e[2].SK_18_25,e[3].SK_18_25,e[4].SK_18_25],[e[0].SK_26_35,e[1].SK_26_35,e[2].SK_26_35,e[3].SK_26_35,e[4].SK_26_35],[e[0].SK_36_45,e[1].SK_36_45,e[2].SK_36_45,e[3].SK_36_45,e[4].SK_36_45],[e[0].SK_46_55,e[1].SK_46_55,e[2].SK_46_55,e[3].SK_46_55,e[4].SK_46_55],[e[0].SK_56_KEATAS,e[1].SK_56_KEATAS,e[2].SK_56_KEATAS,e[3].SK_56_KEATAS,e[4].SK_56_KEATAS]],i=[];for(let e=0;e<n[0].length;++e){let t=0;for(let a=0;a<n.length;++a)t+=n[a][e];i.push(t)}const l=["18-25","26-35","36-45","46-55","56-64"].map(((e,t)=>({name:e,type:"bar",stack:"total",barWidth:"90%",label:{show:!0,color:"#fff",formatter:e=>Math.floor(100*e.data)+"%"},itemStyle:{borderWidth:.3,borderType:"dashed"},data:n[t].map(((e,t)=>i[t]<=0?0:e/i[t])),tooltip:{formatter:e=>"<b>"+e.seriesName+'</b><br/><br/><span style="margin-right: 20px">'+e.name+"</span>"+Math.floor(e.data*i[e.dataIndex]).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}}))),s={color:["#173F6D","#2AA9C6","#F4BB01","#F06000","#2A73C6"],legend:{selectedMode:!0,orient:"horizontal",bottom:"5",left:"auto"},grid:{left:50,right:10,top:10,bottom:50},yAxis:{type:"value",max:1,axisLabel:{formatter:e=>100*e+" %"}},xAxis:{type:"category",data:r},tooltip:{trigger:"item",showDelay:.1,transitionDuration:.2,color:"#fff",fontFamily:"Poppins"}};(t=_.extend({series:l},s))&&o.setOption(t)}(S),function(e){var t,a=document.getElementById("lastEdu"),o=echarts.init(a),r=[];_.each(e,(function(e,t,a){return r[t]=e.RPL_TAHUN}));const n=[[e[0].SD,e[1].SD,e[2].S1_S3,e[3].S1_S3,e[4].S1_S3],[e[0].SMP,e[1].SMP,e[2].SMP,e[3].SMP,e[4].SMP],[e[0].SMA_SMAK_SEDERAJAT,e[1].SMA_SMAK_SEDERAJAT,e[2].SMA_SMAK_SEDERAJAT,e[3].SMA_SMAK_SEDERAJAT,e[4].SMA_SMAK_SEDERAJAT],[e[0].D1_D4,e[1].D1_D4,e[2].D1_D4,e[3].D1_D4,e[4].D1_D4],[e[0].S1_S3,e[1].S1_S3,e[2].S1_S3,e[3].S1_S3,e[4].S1_S3]],i=[];for(let e=0;e<n[0].length;++e){let t=0;for(let a=0;a<n.length;++a)t+=n[a][e];i.push(t)}const l=["SD","SMP","SMA/SMK Sederajat","D1-D4","S1-S3"].map(((e,t)=>({name:e,type:"bar",stack:"total",barWidth:"90%",label:{show:!0,color:"#fff",formatter:e=>Math.floor(100*e.data)+"%"},itemStyle:{borderWidth:.3,borderType:"dashed"},data:n[t].map(((e,t)=>i[t]<=0?0:e/i[t])),tooltip:{formatter:e=>"<b>"+e.seriesName+'</b><br/><br/><span style="margin-right: 20px">'+e.name+"</span>"+Math.floor(e.data*i[e.dataIndex]).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}}))),s={color:["#173F6D","#2AA9C6","#F4BB01","#F06000","#2A73C6"],legend:{selectedMode:!0,orient:"horizontal",bottom:"5",left:"auto"},grid:{left:50,right:10,top:10,bottom:50},yAxis:{type:"value",max:1,axisLabel:{formatter:e=>100*e+" %"}},xAxis:{type:"category",data:r},tooltip:{trigger:"item",showDelay:.1,transitionDuration:.2,color:"#fff",fontFamily:"Poppins"}};(t=_.extend({series:l},s))&&o.setOption(t)}(h)}))}));!function(e,t,a,o){let r=null;const n=i=>{r||(r=i);const l=Math.min((i-r)/o,1);e.innerHTML=Math.floor(l*(a-t)+t).toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."),l<1&&window.requestAnimationFrame(n)};window.requestAnimationFrame(n)}(document.getElementById("total-penerima"),0,18887737,1200)}if(a){var s=echarts.init(a);s.showLoading(),i.getJSON(e+"/js/map/province/31_dki_jakarta.json",(function(t){s.hideLoading();var a=[];i.getJSON(e+"/js/data/province/31_dki_jakarta.json",(function(e){i.each(e,(function(e,t){return IDDATA.push({name:t.name,value:t.all_year})}));var o=_.min(e,(e=>e.all_year)),n=_.max(e,(e=>e.all_year));echarts.registerMap("IDMAP",t),r={animation:!0,tooltip:{trigger:"item",showDelay:.1,transitionDuration:.2,color:"#fff",fontFamily:"Poppins"},visualMap:{left:"left",min:o.all_year,max:n.all_year,inRange:{color:["#2a72c7","#2461a9","#1d508b","#173f6d","#112e50"]},text:["Banyak","Sedikit"],calculable:!0},toolbox:{show:!0,orient:"vertical",left:"left",top:"top"},series:[{name:"Jumlah Penerima Prakerja Di Provinsi",type:"map",roam:"move",map:"IDMAP",aspectScale:.925,zoom:4,layoutCenter:["100%","100%"],itemStyle:{areaColor:"#8DB2DD",borderColor:"#273545",borderWidth:.3,borderType:"dashed",borderJoin:"round",borderCap:"round",color:"#fff"},emphasis:{label:{show:!0},itemStyle:{areaColor:"#f05e00",color:"#fff",shadowColor:"rgba(0,0,0,0.5)",shadowOffsetX:1,shadowOffsetY:.9},label:{color:"#000",fontFamily:"Poppins",fontSize:12,textShadowColor:"#eee",textBorderType:"solid",shadowColor:"#fff"}},data:a}]},s.setOption(r)}))}))}i(window).scroll((function(){var e=i(window).scrollTop();e>=60?i("header").addClass("header-fixed"):i("header").removeClass("header-fixed"),e>=214?i(".search-boxy").addClass("is-fixed"):i(".search-boxy").removeClass("is-fixed"),e>=400?i(".scroll-top").addClass("is-show"):i(".scroll-top").removeClass("is-show")})),i(".scroll-top").on("click",(function(){i(window).scrollTop(0)})),i(".menu").click((function(){i(this).toggleClass("open"),i(".navbar-custom").toggleClass("m-menu"),i("body").toggleClass("freeze")})),i(".nav-link, .nav-cta").on("click",(function(e){i(".menu").removeClass("open"),i(".navbar-custom").removeClass("m-menu"),i("body").removeClass("freeze")})),i(".testimony-carousel").owlCarousel({loop:!0,autoplay:!0,center:!1,dots:!1,responsive:{1e3:{items:1.5,margin:0},756:{items:2,margin:0},0:{items:1,margin:0}}})}(jQuery);
//# sourceMappingURL=function-min.js.map