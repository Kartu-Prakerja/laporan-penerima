const e=new URLSearchParams(window.location.search);var a,t="http://localhost:8848",o="https://static-asset-cdn.prakerja.go.id/data-demografi/provinsi/",r=document.getElementById("maps-indonesia"),n=(document.getElementById("autocomplate"),document.getElementById("maps-province")),i=document.getElementById("maps-regency"),d=$("#tablePersebaran");const s=[{category:"Penjualan dan Pemasaran",iconName:"bi-shop"},{category:"Makanan dan Minuman",iconName:"bi-cookie"},{category:"Teknologi Informasi",iconName:"bi-cpu"},{category:"Bahasa asing",iconName:"bi-translate"},{category:"Lainnya",iconName:"bi-grid"},{category:"Pemasaran",iconName:"bi-bag-heart"},{category:"Manajemen",iconName:"bi-diagram-2"},{category:"Gaya hidup",iconName:"bi-luggage"},{category:"Teknik",iconName:"bi-wrench-adjustable-circle"},{category:"Perkantoran",iconName:"bi-buildings"},{category:"Teknologi, Informatika",iconName:"bi-code-slash"},{category:"Sosial dan Perilaku",iconName:"bi-activity"},{category:"Desain Grafis, Ilustrasi, Animasi",iconName:"bi-brush"},{category:"Administrasi & Tata Usaha",iconName:"bi-house-gear"},{category:"Keuangan",iconName:"bi-wallet2"},{category:"Pengembangan Diri",iconName:"bi-ladder"},{category:"Penjualan",iconName:"bi-cart-frame"},{category:"Pertanian",iconName:"bi-sunrise"},{category:"Sumber Daya Manusia",iconName:"bi-people"},{category:"Content Creation, Media Sosial",iconName:"bi-lightbulb"},{category:"Pariwisata, Perhotelan, Restoran",iconName:"bi-building"},{category:"Akuntansi, Pajak",iconName:"bi-percent"},{category:"Komunikasi",iconName:"bi-megaphone"},{category:"Lain-Lain",iconName:"bi-grid-fill"},{category:"Ritel/Perdagangan",iconName:"bi-layers"},{category:"Investasi & Keuangan",iconName:"bi-piggy-bank"},{category:"Pemeliharaan, Perbaikan, Servis",iconName:"bi-tools"},{category:"Arsitektur, Desain Interior, Kontraktor",iconName:"bi-vector-pen"},{category:"Manufaktur",iconName:"bi-robot"},{category:"Media, Kepenulisan, Reportase",iconName:"bi-camera-reels"},{category:"Tekstil",iconName:"bi-upc"},{category:"Operasi, Gudang",iconName:"bi-boxes"},{category:"Otomotif",iconName:"bi-car-front"},{category:"Kesehatan",iconName:"bi-hospital"},{category:"Kesenian, Kriya",iconName:"bi-paint-bucket"},{category:"Produktivitas Diri",iconName:"bi-graph-up-arrow"},{category:"Merek, Citra Visual",iconName:"bi-tag"},{category:"Keuangan Pribadi",iconName:"bi-calculator"},{category:"Garmen, Konveksi",iconName:"bi-bounding-box"},{category:"Perkebunan",iconName:"bi-flower1"},{category:"Makanan/Minuman Kemasan",iconName:"bi-cup-straw"},{category:"Asuransi, Perbankan",iconName:"bi-bank"},{category:"Transportasi",iconName:"bi-train-lightrail-front"},{category:"Kuliner",iconName:"bi-egg-fried"},{category:"Musik, Audio",iconName:"bi-music-note-beamed"},{category:"Pendidikan",iconName:"bi-mortarboard"},{category:"Pertambangan",iconName:"bi-minecart-loaded"},{category:"Perikanan",iconName:"bi-water"},{category:"Kecantikan",iconName:"bi-eyedropper"},{category:"Event Organizer",iconName:"bi-person-vcard"},{category:"Logistik",iconName:"bi-truck"},{category:"Peternakan",iconName:"bi-egg"},{category:"Perawatan",iconName:"bi-wrench"},{category:"Kehutanan",iconName:"bi-tree"}],l=new autoComplete({selector:"#autoComplete",submit:!0,placeHolder:"Cari Provinsi atau Kabupaten Kota",data:{src:async()=>{try{document.getElementById("autoComplete").setAttribute("placeholder","Loading...");const e=await fetch(t+"/js/data/data-province-city.json"),a=await e.json();return document.getElementById("autoComplete").setAttribute("placeholder",l.placeHolder),a}catch(e){return e}},keys:["KOTA_KABUPATEN","PROVINCE_NAME"],cache:!0},resultsList:{element:(e,a)=>{if(!a.results.length){const t=document.createElement("div");t.setAttribute("class","no_result"),t.innerHTML=`<span>Found No Results for "${a.query}"</span>`,e.prepend(t)}},noResults:!0},resultItem:{highlight:!0},events:{input:{selection:e=>{var a=_.isEmpty(e.detail.selection.value.KOTA_KABUPATEN)?e.detail.selection.value.PROVINCE_NAME:e.detail.selection.value.KOTA_KABUPATEN,o=_.isEmpty(e.detail.selection.value.KOTA_KABUPATEN)?t+"/provinsi/?nama="+e.detail.selection.value.PROVINCE_NAME.replace(/\s+/gi,"-").toLowerCase()+"&kode="+e.detail.selection.value.PROVINCE_CODE:t+"/kabupaten/?nama="+e.detail.selection.value.KOTA_KABUPATEN.replace(/\s+/gi,"-").toLowerCase()+"&kode="+e.detail.selection.value.KOTA_KABUPATEN_ID+"&provinsi="+e.detail.selection.value.PROVINSI.replace(/\s+/gi,"-").toLowerCase()+"&kode_prov="+e.detail.selection.value.PROVINCE_CODE;l.input.value=a,window.location.replace(o)}}}});function c(e,a,t,o){let r=null;var n=i=>{r||(r=i);var d=Math.min((i-r)/o,1);e.innerHTML=Math.floor(d*(t-a)+a).toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."),d<1&&window.requestAnimationFrame(n)};window.requestAnimationFrame(n)}function m(e){var a=$("#course-category-list");_.each(e,(function(e){a.append(function(e,a){return'<div class="col-12 col-lg-20 col-md-6 mb-4"><div class="text-center p-4 bg-b100 rounded h-100"><i class="bi '+_.findWhere(a,{category:e.CATEGORY}).iconName+' mb-3 fs-1 text-primary"></i><h6>'+e.CATEGORY+"</h6></div></div>"}(e,s))}))}function g(e,a,t){var o=(t-a)/7,r=[a+1*o,a+2*o,a+3*o,a+4*o,a+5*o,a+6*o,t];return e<=r[0]?"very-low":e<=r[1]?"low":e<=r[2]?"below-average":e<=r[3]?"average":e<=r[4]?"above-average":e<=r[5]?"high":"very-high"}function u(e,a){var o={};_.forEach(["SK_2020","SK_2020_AKTIF","SK_2021","SK_2021_AKTIF","SK_2022","SK_2022_AKTIF","SK_2023","SK_2023_AKTIF","SK_2024","SK_2024_AKTIF"],(e=>{var t=a.map((a=>a[e])),r=Math.min(...t),n=Math.max(...t);o[e]={min:r,max:n}})),$(e).DataTable({ordering:!1,paging:!1,searching:!1,bLengthChange:!1,data:a,order:[[11,"asc"]],columns:[{data:"PROVINSI",render:function(e,a,o,r){var n=_.isEmpty(e)?"":e.replace(/\s+/gi,"-").toLowerCase();return'<a href="'+(t+"/provinsi/?nama="+n+"&kode="+o.PROVINCE_CODE)+'" target="_blank">'+e+"</a>"}},{data:"SK_2020",render:function(e,a,t){return'<div class="'+g(e,o.SK_2020.min,o.SK_2020.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2020_AKTIF",render:function(e,a,t){return'<div class="'+g(e,o.SK_2020_AKTIF.min,o.SK_2020_AKTIF.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2021",render:function(e,a,t){return'<div class="'+g(e,o.SK_2021.min,o.SK_2021.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2021_AKTIF",render:function(e,a,t){return'<div class="'+g(e,o.SK_2021_AKTIF.min,o.SK_2021_AKTIF.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2022",render:function(e,a,t){return'<div class="'+g(e,o.SK_2022.min,o.SK_2022.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2022_AKTIF",render:function(e,a,t){return'<div class="'+g(e,o.SK_2022_AKTIF.min,o.SK_2022_AKTIF.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2023",render:function(e,a,t){return'<div class="'+g(e,o.SK_2023.min,o.SK_2023.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2023_AKTIF",render:function(e,a,t){return'<div class="'+g(e,o.SK_2023_AKTIF.min,o.SK_2023_AKTIF.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2024",render:function(e,a,t){return'<div class="'+g(e,o.SK_2024.min,o.SK_2024.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2024_AKTIF",render:function(e,a,t){return'<div class="'+g(e,o.SK_2024_AKTIF.min,o.SK_2024_AKTIF.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"PROVINCE_CODE",render:""}],columnDefs:[{targets:-1,defaultContent:"-",targets:"_all",render:$.fn.dataTable.render.number(".",",",0,"")},{target:0,className:"dt-body-left"},{target:11,visible:!1,searchable:!1}],layout:{bottomEnd:{paging:{firstLast:!1}}},fnRowCallback:function(e,a,t,o){a[2]>=5?$("td",e).css("background-color","Red"):a[1]<=4&&$("td",e).css("background-color","Orange")}})}function p(e,a){var o={};_.forEach(["SK_2020","SK_2020_AKTIF","SK_2021","SK_2021_AKTIF","SK_2022","SK_2022_AKTIF","SK_2023","SK_2023_AKTIF","SK_2024","SK_2024_AKTIF"],(e=>{var t=a.map((a=>a[e])),r=Math.min(...t),n=Math.max(...t);o[e]={min:r,max:n}})),$(e).DataTable({searching:!1,ordering:!1,paging:!1,bLengthChange:!1,data:a,order:[[11,"asc"]],columns:[{data:"KOTA_KABUPATEN",render:function(e,a,o,r){var n=_.isEmpty(e)?"":e.replace(/\s+/gi,"-").toLowerCase();return'<a href="'+(t+"/kabupaten/?nama="+n+"&kode="+o.KOTA_KABUPATEN_ID+"&provinsi="+o.PROVINSI+"&kode_prov="+o.PROVINCE_CODE)+'" target="_blank">'+e+"</a>"}},{data:"SK_2020",render:function(e,a,t){return'<div class="'+g(e,o.SK_2020.min,o.SK_2020.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2020_AKTIF",render:function(e,a,t){return'<div class="'+g(e,o.SK_2020_AKTIF.min,o.SK_2020_AKTIF.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2021",render:function(e,a,t){return'<div class="'+g(e,o.SK_2021.min,o.SK_2021.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2021_AKTIF",render:function(e,a,t){return'<div class="'+g(e,o.SK_2021_AKTIF.min,o.SK_2021_AKTIF.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2022",render:function(e,a,t){return'<div class="'+g(e,o.SK_2022.min,o.SK_2022.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2022_AKTIF",render:function(e,a,t){return'<div class="'+g(e,o.SK_2022_AKTIF.min,o.SK_2022_AKTIF.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2023",render:function(e,a,t){return'<div class="'+g(e,o.SK_2023.min,o.SK_2023.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2023_AKTIF",render:function(e,a,t){return'<div class="'+g(e,o.SK_2023_AKTIF.min,o.SK_2023_AKTIF.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2024",render:function(e,a,t){return'<div class="'+g(e,o.SK_2024.min,o.SK_2024.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2024_AKTIF",render:function(e,a,t){return'<div class="'+g(e,o.SK_2024_AKTIF.min,o.SK_2024_AKTIF.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"KOTA_KABUPATEN_ID",render:""}],columnDefs:[{targets:-1,defaultContent:"-",targets:"_all",render:$.fn.dataTable.render.number(".",",",0,"")},{target:0,className:"dt-body-left"},{target:11,visible:!1,searchable:!1}],layout:{bottomEnd:{paging:{firstLast:!1}}},fnRowCallback:function(e,a,t,o){a[1]>5?$("td",e).css("background-color","Red"):a[1]<=4&&$("td",e).css("background-color","Orange")}})}function b(e,a){var t={};_.forEach(["SK_2020","SK_2020_AKTIF","SK_2021","SK_2021_AKTIF","SK_2022","SK_2022_AKTIF","SK_2023","SK_2023_AKTIF","SK_2024","SK_2024_AKTIF"],(e=>{var o=a.map((a=>a[e])),r=Math.min(...o),n=Math.max(...o);t[e]={min:r,max:n}})),$(e).DataTable({ordering:!1,paging:!1,searching:!1,bLengthChange:!1,data:a,order:[[11,"asc"]],columns:[{data:"KECAMATAN"},{data:"SK_2020",render:function(e,a,o){return'<div class="'+g(e,t.SK_2020.min,t.SK_2020.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2020_AKTIF",render:function(e,a,o){return'<div class="'+g(e,t.SK_2020_AKTIF.min,t.SK_2020_AKTIF.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2021",render:function(e,a,o){return'<div class="'+g(e,t.SK_2021.min,t.SK_2021.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2021_AKTIF",render:function(e,a,o){return'<div class="'+g(e,t.SK_2021_AKTIF.min,t.SK_2021_AKTIF.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2022",render:function(e,a,o){return'<div class="'+g(e,t.SK_2022.min,t.SK_2022.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2022_AKTIF",render:function(e,a,o){return'<div class="'+g(e,t.SK_2022_AKTIF.min,t.SK_2022_AKTIF.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2023",render:function(e,a,o){return'<div class="'+g(e,t.SK_2023.min,t.SK_2023.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2023_AKTIF",render:function(e,a,o){return'<div class="'+g(e,t.SK_2023_AKTIF.min,t.SK_2023_AKTIF.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2024",render:function(e,a,o){return'<div class="'+g(e,t.SK_2024.min,t.SK_2024.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2024_AKTIF",render:function(e,a,o){return'<div class="'+g(e,t.SK_2024_AKTIF.min,t.SK_2024_AKTIF.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"KECAMATAN_ID",render:""}],columnDefs:[{targets:-1,defaultContent:"-",targets:"_all",render:$.fn.dataTable.render.number(".",",",0,"")},{target:0,className:"dt-body-left"},{target:11,visible:!1,searchable:!1}],layout:{bottomEnd:{paging:{firstLast:!1}}},fnRowCallback:function(e,a,t,o){a[1]>5?$("td",e).css("background-color","Red"):a[1]<=4&&$("td",e).css("background-color","Orange")}})}function h(e){var a,t=document.getElementById("gender"),o=echarts.init(t),r=[];_.each(e,(function(e,a,t){return r[a]=e.RPL_TAHUN}));var n=[_.pluck(e,"SK_L"),_.pluck(e,"SK_P")],i=[];for(let e=0;e<n[0].length;++e){let a=0;for(let t=0;t<n.length;++t)a+=n[t][e];i.push(a)}var d=["Laki-Laki","Perempuan"].map(((e,a)=>({name:e,type:"bar",stack:"total",barWidth:"90%",label:{show:!0,color:"#fff",formatter:e=>Math.floor(100*e.data)+"%"},itemStyle:{borderWidth:.3,borderType:"dashed"},data:n[a].map(((e,a)=>i[a]<=0?0:e/i[a])),tooltip:{formatter:e=>"<b>"+e.seriesName+'</b><br/><br/><span style="margin-right: 20px">'+e.name+"</span>"+Math.floor(e.data*i[e.dataIndex]).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}}))),s={color:["#2462A8","#F06000"],legend:{selectedMode:!0,orient:"horizontal",bottom:"5",left:"auto"},grid:{left:50,right:10,top:10,bottom:50},yAxis:{type:"value",axisLabel:{formatter:e=>100*e+" %"}},xAxis:{type:"category",data:r},tooltip:{trigger:"item",showDelay:.1,transitionDuration:.2,color:"#fff",fontFamily:"Open Sans"},toolbox:{show:!0,orient:"horizontal",left:"right",bottom:"bottom",feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},saveAsImage:{show:!0}}}};(a=_.extend({series:d},s))&&o.setOption(a)}function f(e){var a,t=document.getElementById("age"),o=echarts.init(t),r=[];_.each(e,(function(e,a,t){return r[a]=e.RPL_TAHUN}));var n=[_.pluck(e,"SK_18_25"),_.pluck(e,"SK_26_35"),_.pluck(e,"SK_36_45"),_.pluck(e,"SK_46_55"),_.pluck(e,"SK_56_KEATAS")],i=[];for(let e=0;e<n[0].length;++e){let a=0;for(let t=0;t<n.length;++t)a+=n[t][e];i.push(a)}var d=["18-25","26-35","36-45","46-55","56-64"].map(((e,a)=>({name:e,type:"bar",stack:"total",barWidth:"90%",label:{show:!0,color:"#fff",formatter:e=>Math.floor(100*e.data)+"%"},itemStyle:{borderWidth:.3,borderType:"dashed"},data:n[a].map(((e,a)=>i[a]<=0?0:e/i[a])),tooltip:{formatter:e=>"<b>"+e.seriesName+'</b><br/><br/><span style="margin-right: 20px">'+e.name+"</span>"+Math.floor(e.data*i[e.dataIndex]).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}}))),s={color:["#173F6D","#2AA9C6","#F4BB01","#F06000","#2A73C6"],legend:{selectedMode:!0,orient:"horizontal",bottom:"5",left:"auto"},grid:{left:50,right:10,top:10,bottom:50},yAxis:{type:"value",max:1,axisLabel:{formatter:e=>100*e+" %"}},xAxis:{type:"category",data:r},tooltip:{trigger:"item",showDelay:.1,transitionDuration:.2,color:"#fff",fontFamily:"Open Sans"},toolbox:{show:!0,orient:"horizontal",left:"right",bottom:"bottom",feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},saveAsImage:{show:!0}}}};(a=_.extend({series:d},s))&&o.setOption(a)}function v(e){var a=$(".pmi"),t=$(".desil"),o=$(".difabel"),r=$(".vilage");a.html(e.pmi+"%"),t.html(e.desil+"%"),o.html(e.difabel+"%"),r.html(e.vilage+"%")}function y(e){var a,t=document.getElementById("lastEdu"),o=echarts.init(t),r=[];_.each(e,(function(e,a,t){return r[a]=e.RPL_TAHUN}));var n=[_.pluck(e,"SK_SD"),_.pluck(e,"SK_SMP"),_.pluck(e,"SK_SMA_SMAK_SEDERAJAT"),_.pluck(e,"SK_D1_D4"),_.pluck(e,"SK_S1_S3")],i=[];for(let e=0;e<n[0].length;++e){let a=0;for(let t=0;t<n.length;++t)a+=n[t][e];i.push(a)}var d=["SD","SMP","SMA/SMK Sederajat","D1-D4","S1-S3"].map(((e,a)=>({name:e,type:"bar",stack:"total",barWidth:"90%",label:{show:!0,color:"#fff",formatter:e=>Math.floor(100*e.data)+"%"},itemStyle:{borderWidth:.3,borderType:"dashed"},data:n[a].map(((e,a)=>i[a]<=0?0:e/i[a])),tooltip:{formatter:e=>"<b>"+e.seriesName+'</b><br/><br/><span style="margin-right: 20px">'+e.name+"</span>"+Math.floor(e.data*i[e.dataIndex]).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}}))),s={color:["#173F6D","#2AA9C6","#F4BB01","#F06000","#2A73C6"],legend:{selectedMode:!0,orient:"horizontal",bottom:"5",left:"auto"},grid:{left:50,right:10,top:10,bottom:50},yAxis:{type:"value",max:1,axisLabel:{formatter:e=>100*e+" %"}},xAxis:{type:"category",data:r},tooltip:{trigger:"item",showDelay:.1,transitionDuration:.2,color:"#fff",fontFamily:"Open Sans"},toolbox:{show:!0,orient:"horizontal",left:"right",bottom:"bottom",feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},saveAsImage:{show:!0}}}};(a=_.extend({series:d},s))&&o.setOption(a)}function K(e){var a,t=document.getElementById("course-preference"),o=echarts.init(t),r=[];_.each(e,(function(e,a){r[a]={name:"lms"==e.MODA?"Pembelajaran Mandiri":e.MODA.charAt(0).toUpperCase()+e.MODA.slice(1).toLowerCase(),value:e.PERCENTAGE}})),(a={color:["#F05E00","#F2BA01","#2A72C7"],tooltip:{trigger:"item",valueFormatter:e=>e.toFixed(2)+"%"},toolbox:{show:!0,orient:"horizontal",left:"right",bottom:"bottom",feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},saveAsImage:{show:!0}}},label:{alignTo:"edge",formatter:"{b}\n{d} %",minMargin:5,edgeDistance:10,lineHeight:15},legend:{selectedMode:!0,orient:"horizontal",bottom:"0",left:"auto"},series:[{name:"Pelatihan Berdasarkan Transaksi",type:"pie",radius:["40%","70%"],data:r,emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]})&&o.setOption(a)}function S(e){var a,t=document.getElementById("course-category"),o=echarts.init(t),r=_.pluck(e,"TOTAL"),n=_.pluck(e,"CATEGORY"),i=Number(_.first(r)),d=Number(_.last(r));(a={tooltip:{},toolbox:{show:!0,orient:"horizontal",left:"right",bottom:"bottom",feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},saveAsImage:{show:!0}}},barWidth:"90%",barHeight:"90%",xAxis:{max:Math.ceil(i+1.5*d)},grid:{width:"95%",height:"90%",top:"5",left:"150"},yAxis:{type:"category",data:n,inverse:!0,animationDuration:300,animationDurationUpdate:300,grid:{left:"100",right:"10",bottom:"30",containLabel:!0}},series:[{realtimeSort:!0,type:"bar",data:r,label:{show:!0,position:"right",valueAnimation:!0,formatter:function(e){return e.data.toLocaleString("id-ID")}},showBackground:!0,backgroundStyle:{color:"rgba(180, 180, 180, 0.2)"}}],legend:{selectedMode:!0,orient:"horizontal",bottom:"5",left:"auto"}})&&o.setOption(a)}function A(e){var a,t=document.getElementById("rekeningPenerimaanInsentif"),o=echarts.init(t);(a={color:["#F06000","#2462A8"],legend:{selectedMode:!0,orient:"horizontal",bottom:"0",left:"auto"},tooltip:{trigger:"item",valueFormatter:e=>e.toFixed(2)+"%"},toolbox:{show:!0,orient:"horizontal",left:"right",bottom:"bottom",feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},saveAsImage:{show:!0}}},dataset:{source:[_.union(["Isentif"],_.pluck(e,"RPL_TAHUN")),_.union(["Bank"],_.pluck(e,"BANK")),_.union(["E-Wallet"],_.pluck(e,"EMONEY"))]},xAxis:[{type:"category",gridIndex:0},{type:"category",gridIndex:1}],yAxis:[{gridIndex:0},{gridIndex:1}],grid:[{width:"95%",height:"80%",left:"30",bottom:"10%",top:"5%"},{width:"95%",height:"80%",left:"30",bottom:"10%",top:"5%"}],series:[{type:"bar",seriesLayoutBy:"row"},{type:"bar",seriesLayoutBy:"row"}]})&&o.setOption(a)}function k(e,a){if("provinsi"===a)return'<li class="breadcrumb-item"><a href="'+(t+"/provinsi/?nama="+e.prov_name+"&kode="+e.prov_id)+'" class="text-capitalize">'+e.prov_name.replace(/-/gi," ")+' </a></li><li class="breadcrumb-item active text-truncate">Semua Kabupaten</li>';var o=t+"/provinsi/?nama="+e.prov_name+"&kode="+e.prov_id,r=t+"/kabupaten/?nama="+e.kab_name+"&kode="+e.kab_id+"&provinsi="+e.prov_name+"&kode_prov="+e.prov_id;return'<li class="breadcrumb-item"><a href="'+o+'" class="text-capitalize">'+e.prov_name.replace(/-/gi," ")+' </a></li> <li class="breadcrumb-item"><a href="'+r+'" class="text-capitalize">'+e.kab_name.replace(/-/gi," ")+'</a></li> <li class="breadcrumb-item active text-truncate">Semua kecamatan</li>'}function T(e){var a=document.getElementById("total-course");$("#total-course");var t=document.getElementById("webinar-course");$("#webinar-course");var o=document.getElementById("spl-course");$("#spl-course");var r=document.getElementById("luring-course"),n=_.filter(e,{MODA:"luring"}),i=_.filter(e,{MODA:"webinar"}),d=_.filter(e,{MODA:"lms"});c(a,0,_.isEmpty(i)?0+!_.isEmpty(n)?n[0].TOTAL:0+!_.isEmpty(d)?d[0].TOTAL:0:i[0].TOTAL,1200),c(t,0,i[0].TOTAL,1200),c(r,0,n[0].TOTAL,1200),c(o,0,d[0].TOTAL,1200)}function N(e,a){var t=$("#province-name"),o=$("#city-name"),r=$("#island-name"),n=$("#age-productive"),i=$("#age-workes"),d=$("#total-recipient"),s=$("#percent-recipient"),l=$("#total-workers");"kabupaten"==a&&o.html(e.city_name.replace(/kabupaten/gi,"").trim()),$(".province-name").html(e.provinsi),t.html(e.provinsi),r.html("Pulau "+e.pulau),n.html(e.jumlah_usia_produktif),i.html(e.jumlah_angkatan_kerja),d.html(e.angkatan_kerja_pernah_ikut_pelatihan),s.html(e.persentase_angkatan_kerja_pernah_ikut_pelatihan),l.html(e.jumlah_angkatan_kerja)}!function(s){if(r){var l=echarts.init(r);l.showLoading(),s.getJSON(t+"/js/map/IDN_FN.json",(function(e){l.hideLoading();var o=[];s.getJSON("https://static-asset-cdn.prakerja.go.id/data-demografi/indonesia/indonesia.json",(function(r){var n=r.pkp.data,i=r.gender.data,c=r.age.data,g=r.education.data,p=r.lp.data,b=r.p.data,k=r.transaction.data,N=r.top_course_category.data,I=r.top_trx_course_category.data,w=r.emoney_vs_bank.data,P=_.sortBy(i,(e=>e.RPL_TAHUN)),O=_.sortBy(c,(e=>e.RPL_TAHUN)),E=_.sortBy(g,(e=>e.RPL_TAHUN)),x=_.sortBy(b,(e=>e.RPL_TAHUN)),B={desil:r.desil_1.data.TOTAL,pmi:r.purna_pmi.data.TOTAL,vilage:r.pedesaan.data.TOTAL,difabel:r.difabel.data.TOTAL},C=_.sortBy(k,(e=>e.PERCENTAGE)),L=_.sortBy(N,(e=>e.RNK)),F=_.sortBy(I,(e=>e.RNK)),D=_.sortBy(w,(e=>e.RPL_TAHUN)),R=_.sortBy(_.without(n,_.findWhere(n,{PROVINCE_CODE:"TOTAL"})),(e=>e.PROVINCE_CODE));s.each(R,(function(e,a){return o.push({name:a.PROVINSI,value:Number(a.SK),code:a.PROVINCE_CODE,index:e})}));var M=_.min(o,(e=>e.value)),j=_.max(o,(e=>e.value));echarts.registerMap("IDMAP",e),a={animation:!0,tooltip:{trigger:"item",showDelay:.1,transitionDuration:.2,color:"#fff",fontFamily:"Open Sans"},visualMap:{left:"left",min:Math.floor(.9*M.value),max:Math.ceil(1.2*j.value),inRange:{color:["#2a72c7","#2461a9","#1d508b","#173f6d"]},text:["Banyak","Sedikit"],calculable:!0},toolbox:{show:!0,orient:"vertical",left:"10",bottom:"200",feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},saveAsImage:{show:!0}}},series:[{name:"Jumlah Penerima Prakerja Di Provinsi",type:"map",roam:"false",map:"IDMAP",aspectScale:.925,zoom:1.25,label:{show:!0,color:"rgba(0,0,0, 0.75)",fontFamily:"Open Sans",fontSize:12,overflow:"truncate",height:16,backgroundColor:"rgba(255,255,255,.75)",padding:[2,3],borderRadius:4},itemStyle:{areaColor:"#8DB2DD",color:"rgba(17,46,80,0.75)",borderWidth:.3,borderType:"dashed",borderJoin:"round",borderCap:"round",color:"#fff"},emphasis:{itemStyle:{areaColor:"#f05e00",color:"#fff",shadowColor:"rgba(0,0,0,0.5)"},label:{color:"rgba(17,46,80,1)",fontFamily:"Open Sans",fontSize:12,backgroundColor:"rgba(255,255,255,.75)"}},data:o}]},l.setOption(a),l.on("click",(function(e){r=e.data;var a=_.isEmpty(r.name)?"":r.name.replace(/\s+/gi,"-").toLowerCase(),o=t+"/provinsi/?nama="+a+"&kode="+r.code;window.location.replace(o,"Statistik Program Prakerja Provinsi"+r.name+" - prakerja.go.id","_self")})),u(d,R),h(P),f(O),y(E),v(B),function(e){var a=document.getElementById("course-provider"),t=echarts.init(a);t.showLoading();var o,r=[];_.each(e,(function(e,a,t){r[a]=e.RPL_TAHUN})),o={color:["#2A72C7","#F05E00","#2491A9"],tooltip:{trigger:"axis"},toolbox:{show:!0,orient:"horizontal",left:"right",bottom:"bottom",feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},saveAsImage:{show:!0}}},legend:{data:["Akumulasi LP","Lembaga Baru","Lembaga Aktif"],selectedMode:!0,orient:"horizontal",bottom:"5",left:"auto"},grid:{left:"10",right:"20",bottom:"30",containLabel:!0,height:"85%"},xAxis:{type:"category",boundaryGap:!1,data:r},yAxis:{type:"value",interval:100,max:600},series:[{name:"Akumulasi LP",type:"line",data:_.pluck(e,"AKUMULASI_LP")},{name:"Lembaga Baru",type:"line",data:_.pluck(e,"NEW_LP")},{name:"Lembaga Aktif",type:"line",data:_.pluck(e,"AKTIF_LP")}]},t.hideLoading(),o&&t.setOption(o)}(p),function(e){var a=document.getElementById("courses"),t=echarts.init(a);t.showLoading();var o,r=[];_.each(e,(function(e,a,t){r[a]=e.RPL_TAHUN})),o={color:["#2A72C7","#F05E00","#2491A9"],tooltip:{trigger:"axis"},toolbox:{show:!0,orient:"horizontal",left:"right",bottom:"bottom",feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},saveAsImage:{show:!0}}},legend:{data:["Akumulasi Pelatihan","Pelatihan Baru","Pelatihan Dengan Transaksi"],selectedMode:!0,orient:"horizontal",bottom:"5",left:"auto"},grid:{left:"10",right:"20",bottom:"30",containLabel:!0,height:"85%"},xAxis:{type:"category",boundaryGap:!1,data:r},yAxis:{type:"value"},series:[{name:"Akumulasi Pelatihan",type:"line",data:_.pluck(e,"AKUMULASI_P")},{name:"Pelatihan Baru",type:"line",data:_.pluck(e,"NEW_P")},{name:"Pelatihan Dengan Transaksi",type:"line",data:_.pluck(e,"TRANS_P")}]},t.hideLoading(),o&&t.setOption(o)}(x),K(C),T(C),S(L),m(F),A(D)}))})),c(document.getElementById("total-penerima"),0,18887737,1200)}if(n){var g=echarts.init(n),I=_.isEmpty(e.get("kode"))?"31":e.get("kode"),w=_.isEmpty(e.get("nama"))?"dki_jakarta":e.get("nama"),P="province_"+I+".json",O=I+".json",E=s("#breadcrumb-detail .bc-list"),x={prov_name:w,prov_id:I};g.showLoading(),s.getJSON("https://static-asset-cdn.prakerja.go.id/geojson_data/provinsi/"+P,(function(e){g.hideLoading();var r=[];s.getJSON(o+O,(function(o){var n=o.pkp.data,i=o.gender.data,l=o.age.data,u=o.education.data,b=o.transaction.data,v=o.top_course_category.data,w=o.top_trx_course_category.data,P=o.emoney_vs_bank.data,O=_.sortBy(i,(e=>e.RPL_TAHUN)),B=_.sortBy(l,(e=>e.RPL_TAHUN)),C=_.sortBy(u,(e=>e.RPL_TAHUN)),L=_.sortBy(b,(e=>e.PERCENTAGE)),F=_.sortBy(v,(e=>e.RNK)),D=_.sortBy(w,(e=>e.RNK)),R=_.sortBy(P,(e=>e.RPL_TAHUN)),M=_.sortBy(_.without(n,_.findWhere(n,{PROVINCE_CODE:"TOTAL"})),(e=>e.PROVINCE_CODE)),j=_.findWhere(n,{PROVINCE_CODE:"TOTAL"});s.each(M,(function(e,a){return r.push({name:a.KOTA_KABUPATEN,province_name:a.PROVINSI,value:Number(a.SK),code:a.KOTA_KABUPATEN_ID,province_code:a.PROVINCE_CODE,index:e})}));var U=_.min(r,(e=>e.value)),V=_.max(r,(e=>e.value));echarts.registerMap("IDMAP",e),a={animation:!0,tooltip:{trigger:"item",showDelay:.1,transitionDuration:.2,color:"#fff",fontFamily:"Open Sans"},toolbox:{show:!0,orient:"vertical",left:"10",bottom:"200",feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},saveAsImage:{show:!0}}},visualMap:{left:"left",min:Math.floor(.9*U.value),max:Math.ceil(1.1*V.value),inRange:{color:["#2a72c7","#2461a9","#1d508b","#173f6d"]},text:["Banyak","Sedikit"],calculable:!0},series:[{name:"Jumlah Penerima Prakerja Di Provinsi",type:"map",roam:"false",map:"IDMAP",aspectScale:.925,zoom:1.25,itemStyle:{areaColor:"#8DB2DD",borderColor:"#f3f3f3",borderWidth:.3,borderType:"dashed",borderJoin:"round",borderCap:"round",color:"#fff"},label:{show:!0,formatter:e=>e.name.replace(/kabupaten/gi,"").trim(),color:"rgba(0,0,0, 0.75)",fontFamily:"Open Sans",fontSize:12,overflow:"truncate",height:16,backgroundColor:"rgba(255,255,255,.60)",padding:[2,4],borderRadius:4},emphasis:{label:{show:!0},itemStyle:{areaColor:"#f05e00",color:"#fff",shadowColor:"rgba(0,0,0,0.5)"},label:{color:"rgba(17,46,80,1)",fontFamily:"Open Sans",fontSize:12,backgroundColor:"rgba(255,255,255,.75)"}},data:r}]},31==I&&_.extend(a.series[0],{layoutCenter:["25%","-55%"],layoutSize:"250%"}),g.setOption(a),g.on("click",(function(e){o=e.data;var a=_.isEmpty(o.name)?"":o.name.replace(/\s+/gi,"-").toLowerCase(),r=_.isEmpty(o.province_name)?"":o.province_name.replace(/\s+/gi,"-").toLowerCase(),n=t+"/kabupaten/?nama="+a+"&kode="+o.code+"&provinsi="+r+"&kode_prov="+o.province_code;window.location.replace(n,"Statistik Program Prakerja Provinsi"+o.name+" - prakerja.go.id","_self")})),p(d,M),h(O),f(B),y(C),K(L),T(L),S(F),m(D),A(R),E.append(k(x,"provinsi")),s.getJSON(t+"/js/data/data-statistik.json").done((function(e){N(_.findWhere(e,{provinsi_id:Number(I)}),"provinsi")})),c(document.getElementById("total-penerima"),0,j.SK,1200)}))}))}if(i){var B=echarts.init(i),C=_.isEmpty(e.get("kode_prov"))?"31":e.get("kode_prov"),L=_.isEmpty(e.get("provinsi"))?"dki_jakarta":e.get("provinsi"),F=_.isEmpty(e.get("kode"))?"157":e.get("kode"),D=_.isEmpty(e.get("nama"))?"kota-adm.-jakarta-timur":e.get("nama"),R=(P="city_"+C+".geojson",F+".json");O=C+".json",E=s("#breadcrumb-detail .bc-list"),x={kab_name:D,kab_id:F,prov_name:L,prov_id:C};B.showLoading(),s.getJSON(t+"/js/map/province/"+P,(function(e){B.hideLoading();var r=[];s.getJSON("https://static-asset-cdn.prakerja.go.id/data-demografi/kota_kab/"+R,(function(n){s.getJSON(o+O,(function(o){var i=o.pkp.data,l=n.pkp.data,g=n.gender.data,u=n.age.data,p=n.education.data,v=n.transaction.data,I=n.top_course_category.data,w=n.top_trx_course_category.data,P=n.emoney_vs_bank.data,O=_.sortBy(g,(e=>e.RPL_TAHUN)),L=_.sortBy(u,(e=>e.RPL_TAHUN)),R=_.sortBy(p,(e=>e.RPL_TAHUN)),M=_.sortBy(v,(e=>e.PERCENTAGE)),j=_.sortBy(I,(e=>e.RNK)),U=_.sortBy(w,(e=>e.RNK)),V=_.sortBy(P,(e=>e.RPL_TAHUN)),z=_.sortBy(_.without(l,_.findWhere(l,{PROVINCE_CODE:"TOTAL"})),(e=>e.KECAMATAN_ID)),$=_.findWhere(l,{PROVINCE_CODE:"TOTAL"});s.each(i,(function(e,a){return r.push({name:a.KOTA_KABUPATEN,province_name:a.PROVINSI,value:F===a.KOTA_KABUPATEN_ID?a.SK:"-",code:a.KOTA_KABUPATEN_ID,province_code:a.PROVINCE_CODE,index:e})})),echarts.registerMap("IDMAP",e),a={animation:!0,tooltip:{trigger:"item",showDelay:.1,transitionDuration:.2,color:"#fff",fontFamily:"Open Sans"},visualMap:{show:!1,inRange:{color:["#2a72c7","#2461a9","#1d508b","#173f6d"]},calculable:!0},toolbox:{show:!0,orient:"vertical",left:"0",bottom:"10",feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},saveAsImage:{show:!0}}},series:[{name:"Jumlah Penerima Prakerja Di Kabupaten",type:"map",roam:"false",map:"IDMAP",aspectScale:.925,zoom:1.25,itemStyle:{areaColor:"#8DB2DD",borderColor:"#f3f3f3",borderWidth:.3,borderType:"dashed",borderJoin:"round",borderCap:"round",color:"#fff"},label:{show:!0,formatter:e=>e.name.replace(/kabupaten/gi,"").trim(),color:"rgba(0,0,0, 0.75)",fontFamily:"Open Sans",fontSize:12,overflow:"truncate",height:16,backgroundColor:"rgba(255,255,255,.75)",padding:[2,3],borderRadius:4},emphasis:{label:{show:!0},itemStyle:{areaColor:"#f05e00",color:"#fff",shadowColor:"rgba(0,0,0,0.5)"},label:{color:"rgba(17,46,80,1)",fontFamily:"Open Sans",fontSize:12,backgroundColor:"rgba(255,255,255,.75)",padding:[2,3],borderRadius:4}},data:r}]},31==C&&_.extend(a.series[0],{layoutCenter:["25%","-55%"],layoutSize:"250%"}),B.setOption(a),B.on("click",(function(e){var a=e.data,o=_.isEmpty(e.name)?"":e.name.replace(/\s+/gi,"-").toLowerCase(),r=_.isEmpty(a.province_name)?"":a.province_name.replace(/\s+/gi,"-").toLowerCase(),n=t+"/kabupaten/?nama="+o+"&kode="+a.code+"&provinsi="+r+"&kode_prov="+a.province_code;window.location.replace(n,"Statistik Program Prakerja Provinsi"+e.name+" - prakerja.go.id","_self")})),b(d,z),h(O),f(L),y(R),K(M),T(M),S(j),m(U),A(V),E.append(k(x,"kabupaten")),s.getJSON(t+"/js/data/data-statistik.json").done((function(e){var a=_.findWhere(e,{provinsi_id:Number(C)});_.extend(a,{city_name:D.replace(/-/gi," ")}),N(a,"kabupaten")})),c(document.getElementById("total-penerima"),0,$.SK,1200)}))}))}))}s(window).scroll((function(){var e=s(window).scrollTop();e>=60?s("header").addClass("header-fixed"):s("header").removeClass("header-fixed"),e>=214?s(".search-boxy").addClass("is-fixed"):s(".search-boxy").removeClass("is-fixed"),e>=400?s(".scroll-top").addClass("is-show"):s(".scroll-top").removeClass("is-show")})),s(".scroll-top").on("click",(function(){s(window).scrollTop(0)})),s(".menu").click((function(){s(this).toggleClass("open"),s(".navbar-custom").toggleClass("m-menu"),s("body").toggleClass("freeze")})),s(".nav-link, .nav-cta").on("click",(function(e){s(".menu").removeClass("open"),s(".navbar-custom").removeClass("m-menu"),s("body").removeClass("freeze")})),s(".testimony-carousel").owlCarousel({loop:!0,autoplay:!0,center:!1,dots:!1,responsive:{1e3:{items:1.5,margin:0},756:{items:2,margin:0},0:{items:1,margin:0}}})}(jQuery);
//# sourceMappingURL=function-min.js.map