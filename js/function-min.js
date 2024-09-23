const e=new URLSearchParams(window.location.search);var a,t="https://statistik-penerima.prakerja.go.id",r="https://public-prakerja.oss-ap-southeast-5.aliyuncs.com/data-demografi/provinsi/",o=document.getElementById("maps-indonesia"),i=(document.getElementById("autocomplate"),document.getElementById("maps-province")),n=document.getElementById("maps-regency"),s=$("#tablePersebaran");const l=[{category:"Penjualan dan Pemasaran",iconName:"bi-shop"},{category:"Makanan dan Minuman",iconName:"bi-cookie"},{category:"Teknologi Informasi",iconName:"bi-cpu"},{category:"Bahasa asing",iconName:"bi-translate"},{category:"Lainnya",iconName:"bi-grid"},{category:"Pemasaran",iconName:"bi-bag-heart"},{category:"Manajemen",iconName:"bi-diagram-2"},{category:"Gaya hidup",iconName:"bi-luggage"},{category:"Teknik",iconName:"bi-wrench-adjustable-circle"},{category:"Perkantoran",iconName:"bi-buildings"},{category:"Teknologi, Informatika",iconName:"bi-code-slash"},{category:"Sosial dan Perilaku",iconName:"bi-activity"},{category:"Desain Grafis, Ilustrasi, Animasi",iconName:"bi-brush"},{category:"Administrasi & Tata Usaha",iconName:"bi-house-gear"},{category:"Keuangan",iconName:"bi-wallet2"},{category:"Pengembangan Diri",iconName:"bi-ladder"},{category:"Penjualan",iconName:"bi-cart-frame"},{category:"Pertanian",iconName:"bi-sunrise"},{category:"Sumber Daya Manusia",iconName:"bi-people"},{category:"Content Creation, Media Sosial",iconName:"bi-lightbulb"},{category:"Pariwisata, Perhotelan, Restoran",iconName:"bi-building"},{category:"Akuntansi, Pajak",iconName:"bi-percent"},{category:"Komunikasi",iconName:"bi-megaphone"},{category:"Lain-Lain",iconName:"bi-grid-fill"},{category:"Ritel/Perdagangan",iconName:"bi-layers"},{category:"Investasi & Keuangan",iconName:"bi-piggy-bank"},{category:"Pemeliharaan, Perbaikan, Servis",iconName:"bi-tools"},{category:"Arsitektur, Desain Interior, Kontraktor",iconName:"bi-vector-pen"},{category:"Manufaktur",iconName:"bi-robot"},{category:"Media, Kepenulisan, Reportase",iconName:"bi-camera-reels"},{category:"Tekstil",iconName:"bi-upc"},{category:"Operasi, Gudang",iconName:"bi-boxes"},{category:"Otomotif",iconName:"bi-car-front"},{category:"Kesehatan",iconName:"bi-hospital"},{category:"Kesenian, Kriya",iconName:"bi-paint-bucket"},{category:"Produktivitas Diri",iconName:"bi-graph-up-arrow"},{category:"Merek, Citra Visual",iconName:"bi-tag"},{category:"Keuangan Pribadi",iconName:"bi-calculator"},{category:"Garmen, Konveksi",iconName:"bi-bounding-box"},{category:"Perkebunan",iconName:"bi-flower1"},{category:"Makanan/Minuman Kemasan",iconName:"bi-cup-straw"},{category:"Asuransi, Perbankan",iconName:"bi-bank"},{category:"Transportasi",iconName:"bi-train-lightrail-front"},{category:"Kuliner",iconName:"bi-egg-fried"},{category:"Musik, Audio",iconName:"bi-music-note-beamed"},{category:"Pendidikan",iconName:"bi-mortarboard"},{category:"Pertambangan",iconName:"bi-minecart-loaded"},{category:"Perikanan",iconName:"bi-water"},{category:"Kecantikan",iconName:"bi-eyedropper"},{category:"Event Organizer",iconName:"bi-person-vcard"},{category:"Logistik",iconName:"bi-truck"},{category:"Peternakan",iconName:"bi-egg"},{category:"Perawatan",iconName:"bi-wrench"},{category:"Kehutanan",iconName:"bi-tree"}],d=new autoComplete({selector:"#autoComplete",submit:!0,placeHolder:"Cari Provinsi atau Kabupaten Kota",data:{src:async()=>{try{document.getElementById("autoComplete").setAttribute("placeholder","Loading...");const e=await fetch(t+"/js/data/data-province-city.json"),a=await e.json();return document.getElementById("autoComplete").setAttribute("placeholder",d.placeHolder),a}catch(e){return e}},keys:["KOTA_KABUPATEN","PROVINCE_NAME"],cache:!0},resultsList:{element:(e,a)=>{if(!a.results.length){const t=document.createElement("div");t.setAttribute("class","no_result"),t.innerHTML=`<span>Found No Results for "${a.query}"</span>`,e.prepend(t)}},noResults:!0},resultItem:{highlight:!0},events:{input:{selection:e=>{var a=_.isEmpty(e.detail.selection.value.KOTA_KABUPATEN)?e.detail.selection.value.PROVINCE_NAME:e.detail.selection.value.KOTA_KABUPATEN,r=_.isEmpty(e.detail.selection.value.KOTA_KABUPATEN)?t+"/provinsi/?nama="+e.detail.selection.value.PROVINCE_NAME.replace(/\s+/gi,"-").toLowerCase()+"&kode="+e.detail.selection.value.PROVINCE_CODE:t+"/kabupaten/?nama="+e.detail.selection.value.KOTA_KABUPATEN.replace(/\s+/gi,"-").toLowerCase()+"&kode="+e.detail.selection.value.KOTA_KABUPATEN_ID+"&provinsi="+e.detail.selection.value.PROVINSI.replace(/\s+/gi,"-").toLowerCase()+"&kode_prov="+e.detail.selection.value.PROVINCE_CODE;d.input.value=a,window.location.replace(r)}}}});function c(e){var a=$("title"),t=$('meta[name="description"]'),r=$('meta[property="og:description"]'),o=$('meta[name="twitter:title"]');a.html(e.title),o.attr("content",e.title),r.attr("content",e.description),t.attr("content",e.description)}function m(e,a,t,r){let o=null;var i=n=>{o||(o=n);var s=Math.min((n-o)/r,1);e.innerHTML=Math.floor(s*(t-a)+a).toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."),s<1&&window.requestAnimationFrame(i)};window.requestAnimationFrame(i)}function g(e){var a=$("#course-category-list");_.each(e,(function(e){a.append(function(e,a){return'<div class="col-12 col-lg-20 col-md-6 mb-4"><div class="text-center p-4 bg-b100 rounded h-100"><i class="bi '+_.findWhere(a,{category:e.CATEGORY}).iconName+' mb-3 fs-1 text-primary"></i><h6 class="mt-2">'+e.CATEGORY+"</h6></div></div>"}(e,l))}))}function u(e,a,t){var r=(t-a)/7,o=[a+1*r,a+2*r,a+3*r,a+4*r,a+5*r,a+6*r,t];return e<=o[0]?"very-low":e<=o[1]?"low":e<=o[2]?"below-average":e<=o[3]?"average":e<=o[4]?"above-average":e<=o[5]?"high":"very-high"}function p(e,a){var r={};_.forEach(["SK_2020","SK_2020_AKTIF","SK_2021","SK_2021_AKTIF","SK_2022","SK_2022_AKTIF","SK_2023","SK_2023_AKTIF","SK_2024","SK_2024_AKTIF"],(e=>{var t=a.map((a=>a[e])),o=Math.min(...t),i=Math.max(...t);r[e]={min:o,max:i}})),$(e).DataTable({ordering:!1,paging:!1,searching:!1,bLengthChange:!1,data:a,order:[[11,"asc"]],columns:[{data:"PROVINSI",render:function(e,a,r,o){var i=_.isEmpty(e)?"":e.replace(/\s+/gi,"-").toLowerCase();return'<a href="'+(t+"/provinsi/?nama="+i+"&kode="+r.PROVINCE_CODE)+'" target="_blank">'+e+"</a>"}},{data:"SK_2020",render:function(e,a,t){return'<div class="'+u(e,r.SK_2020.min,r.SK_2020.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2020_AKTIF",render:function(e,a,t){return'<div class="'+u(e,r.SK_2020_AKTIF.min,r.SK_2020_AKTIF.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2021",render:function(e,a,t){return'<div class="'+u(e,r.SK_2021.min,r.SK_2021.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2021_AKTIF",render:function(e,a,t){return'<div class="'+u(e,r.SK_2021_AKTIF.min,r.SK_2021_AKTIF.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2022",render:function(e,a,t){return'<div class="'+u(e,r.SK_2022.min,r.SK_2022.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2022_AKTIF",render:function(e,a,t){return'<div class="'+u(e,r.SK_2022_AKTIF.min,r.SK_2022_AKTIF.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2023",render:function(e,a,t){return'<div class="'+u(e,r.SK_2023.min,r.SK_2023.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2023_AKTIF",render:function(e,a,t){return'<div class="'+u(e,r.SK_2023_AKTIF.min,r.SK_2023_AKTIF.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2024",render:function(e,a,t){return'<div class="'+u(e,r.SK_2024.min,r.SK_2024.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2024_AKTIF",render:function(e,a,t){return'<div class="'+u(e,r.SK_2024_AKTIF.min,r.SK_2024_AKTIF.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"PROVINCE_CODE",render:""}],columnDefs:[{targets:-1,defaultContent:"-",targets:"_all",render:$.fn.dataTable.render.number(".",",",0,"")},{target:0,className:"dt-body-left"},{target:11,visible:!1,searchable:!1}],layout:{bottomEnd:{paging:{firstLast:!1}}},fnRowCallback:function(e,a,t,r){a[2]>=5?$("td",e).css("background-color","Red"):a[1]<=4&&$("td",e).css("background-color","Orange")}})}function b(e,a){var r={};_.forEach(["SK_2020","SK_2020_AKTIF","SK_2021","SK_2021_AKTIF","SK_2022","SK_2022_AKTIF","SK_2023","SK_2023_AKTIF","SK_2024","SK_2024_AKTIF"],(e=>{var t=a.map((a=>a[e])),o=Math.min(...t),i=Math.max(...t);r[e]={min:o,max:i}})),$(e).DataTable({searching:!1,ordering:!1,paging:!1,bLengthChange:!1,data:a,order:[[11,"asc"]],columns:[{data:"KOTA_KABUPATEN",render:function(e,a,r,o){var i=_.isEmpty(e)?"":e.replace(/\s+/gi,"-").toLowerCase();return'<a href="'+(t+"/kabupaten/?nama="+i+"&kode="+r.KOTA_KABUPATEN_ID+"&provinsi="+r.PROVINSI+"&kode_prov="+r.PROVINCE_CODE)+'" target="_blank">'+e+"</a>"}},{data:"SK_2020",render:function(e,a,t){return'<div class="'+u(e,r.SK_2020.min,r.SK_2020.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2020_AKTIF",render:function(e,a,t){return'<div class="'+u(e,r.SK_2020_AKTIF.min,r.SK_2020_AKTIF.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2021",render:function(e,a,t){return'<div class="'+u(e,r.SK_2021.min,r.SK_2021.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2021_AKTIF",render:function(e,a,t){return'<div class="'+u(e,r.SK_2021_AKTIF.min,r.SK_2021_AKTIF.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2022",render:function(e,a,t){return'<div class="'+u(e,r.SK_2022.min,r.SK_2022.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2022_AKTIF",render:function(e,a,t){return'<div class="'+u(e,r.SK_2022_AKTIF.min,r.SK_2022_AKTIF.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2023",render:function(e,a,t){return'<div class="'+u(e,r.SK_2023.min,r.SK_2023.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2023_AKTIF",render:function(e,a,t){return'<div class="'+u(e,r.SK_2023_AKTIF.min,r.SK_2023_AKTIF.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2024",render:function(e,a,t){return'<div class="'+u(e,r.SK_2024.min,r.SK_2024.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2024_AKTIF",render:function(e,a,t){return'<div class="'+u(e,r.SK_2024_AKTIF.min,r.SK_2024_AKTIF.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"KOTA_KABUPATEN_ID",render:""}],columnDefs:[{targets:-1,defaultContent:"-",targets:"_all",render:$.fn.dataTable.render.number(".",",",0,"")},{target:0,className:"dt-body-left"},{target:11,visible:!1,searchable:!1}],layout:{bottomEnd:{paging:{firstLast:!1}}},fnRowCallback:function(e,a,t,r){a[1]>5?$("td",e).css("background-color","Red"):a[1]<=4&&$("td",e).css("background-color","Orange")}})}function h(e,a){var t={};_.forEach(["SK_2020","SK_2020_AKTIF","SK_2021","SK_2021_AKTIF","SK_2022","SK_2022_AKTIF","SK_2023","SK_2023_AKTIF","SK_2024","SK_2024_AKTIF"],(e=>{var r=a.map((a=>a[e])),o=Math.min(...r),i=Math.max(...r);t[e]={min:o,max:i}})),$(e).DataTable({ordering:!1,paging:!1,searching:!1,bLengthChange:!1,data:a,order:[[11,"asc"]],columns:[{data:"KECAMATAN"},{data:"SK_2020",render:function(e,a,r){return'<div class="'+u(e,t.SK_2020.min,t.SK_2020.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2020_AKTIF",render:function(e,a,r){return'<div class="'+u(e,t.SK_2020_AKTIF.min,t.SK_2020_AKTIF.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2021",render:function(e,a,r){return'<div class="'+u(e,t.SK_2021.min,t.SK_2021.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2021_AKTIF",render:function(e,a,r){return'<div class="'+u(e,t.SK_2021_AKTIF.min,t.SK_2021_AKTIF.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2022",render:function(e,a,r){return'<div class="'+u(e,t.SK_2022.min,t.SK_2022.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2022_AKTIF",render:function(e,a,r){return'<div class="'+u(e,t.SK_2022_AKTIF.min,t.SK_2022_AKTIF.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2023",render:function(e,a,r){return'<div class="'+u(e,t.SK_2023.min,t.SK_2023.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2023_AKTIF",render:function(e,a,r){return'<div class="'+u(e,t.SK_2023_AKTIF.min,t.SK_2023_AKTIF.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2024",render:function(e,a,r){return'<div class="'+u(e,t.SK_2024.min,t.SK_2024.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2024_AKTIF",render:function(e,a,r){return'<div class="'+u(e,t.SK_2024_AKTIF.min,t.SK_2024_AKTIF.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"KECAMATAN_ID",render:""}],columnDefs:[{targets:-1,defaultContent:"-",targets:"_all",render:$.fn.dataTable.render.number(".",",",0,"")},{target:0,className:"dt-body-left"},{target:11,visible:!1,searchable:!1}],layout:{bottomEnd:{paging:{firstLast:!1}}},fnRowCallback:function(e,a,t,r){a[1]>5?$("td",e).css("background-color","Red"):a[1]<=4&&$("td",e).css("background-color","Orange")}})}function f(e){var a,t=document.getElementById("gender"),r=echarts.init(t),o=[];_.each(e,(function(e,a,t){return o[a]=e.RPL_TAHUN}));var i=[_.pluck(e,"SK_L"),_.pluck(e,"SK_P")],n=[];for(let e=0;e<i[0].length;++e){let a=0;for(let t=0;t<i.length;++t)a+=i[t][e];n.push(a)}var s=["Laki-Laki","Perempuan"].map(((e,a)=>({name:e,type:"bar",stack:"total",barWidth:"90%",label:{show:!0,color:"#fff",formatter:e=>Math.floor(100*e.data)+"%"},itemStyle:{borderWidth:.3,borderType:"dashed"},data:i[a].map(((e,a)=>n[a]<=0?0:e/n[a])),tooltip:{formatter:e=>"<b>"+e.seriesName+'</b><br/><br/><span style="margin-right: 20px">'+e.name+"</span>"+Math.floor(e.data*n[e.dataIndex]).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}}))),l={color:["#2462A8","#F06000"],legend:{selectedMode:!0,orient:"horizontal",bottom:"5",left:"auto"},grid:{left:50,right:10,top:10,bottom:50},yAxis:{type:"value",axisLabel:{formatter:e=>100*e+" %"}},xAxis:{type:"category",data:o},tooltip:{trigger:"item",showDelay:.1,transitionDuration:.2,color:"#fff",fontFamily:"Open Sans"},toolbox:{show:!0,orient:"horizontal",left:"right",bottom:"bottom",feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},saveAsImage:{show:!0}}}};(a=_.extend({series:s},l))&&r.setOption(a)}function v(e){var a,t=document.getElementById("age"),r=echarts.init(t),o=[];_.each(e,(function(e,a,t){return o[a]=e.RPL_TAHUN}));var i=[_.pluck(e,"SK_18_25"),_.pluck(e,"SK_26_35"),_.pluck(e,"SK_36_45"),_.pluck(e,"SK_46_55"),_.pluck(e,"SK_56_KEATAS")],n=[];for(let e=0;e<i[0].length;++e){let a=0;for(let t=0;t<i.length;++t)a+=i[t][e];n.push(a)}var s=["18-25","26-35","36-45","46-55","56-64"].map(((e,a)=>({name:e,type:"bar",stack:"total",barWidth:"90%",label:{show:!0,color:"#fff",formatter:e=>Math.floor(100*e.data)+"%"},itemStyle:{borderWidth:.3,borderType:"dashed"},data:i[a].map(((e,a)=>n[a]<=0?0:e/n[a])),tooltip:{formatter:e=>"<b>"+e.seriesName+'</b><br/><br/><span style="margin-right: 20px">'+e.name+"</span>"+Math.floor(e.data*n[e.dataIndex]).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}}))),l={color:["#173F6D","#2AA9C6","#F4BB01","#F06000","#2A73C6"],legend:{selectedMode:!0,orient:"horizontal",bottom:"5",left:"auto"},grid:{left:50,right:10,top:10,bottom:50},yAxis:{type:"value",max:1,axisLabel:{formatter:e=>100*e+" %"}},xAxis:{type:"category",data:o},tooltip:{trigger:"item",showDelay:.1,transitionDuration:.2,color:"#fff",fontFamily:"Open Sans"},toolbox:{show:!0,orient:"horizontal",left:"right",bottom:"bottom",feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},saveAsImage:{show:!0}}}};(a=_.extend({series:s},l))&&r.setOption(a)}function y(e){var a=$(".pmi"),t=$(".desil"),r=$(".difabel"),o=$(".vilage");a.html(e.pmi+"%"),t.html(e.desil+"%"),r.html(e.difabel+"%"),o.html(e.vilage+"%")}function K(e){var a,t=document.getElementById("lastEdu"),r=echarts.init(t),o=[];_.each(e,(function(e,a,t){return o[a]=e.RPL_TAHUN}));var i=[_.pluck(e,"SK_SD"),_.pluck(e,"SK_SMP"),_.pluck(e,"SK_SMA_SMAK_SEDERAJAT"),_.pluck(e,"SK_D1_D4"),_.pluck(e,"SK_S1_S3")],n=[];for(let e=0;e<i[0].length;++e){let a=0;for(let t=0;t<i.length;++t)a+=i[t][e];n.push(a)}var s=["SD","SMP","SMA/SMK Sederajat","D1-D4","S1-S3"].map(((e,a)=>({name:e,type:"bar",stack:"total",barWidth:"90%",label:{show:!0,color:"#fff",formatter:e=>Math.floor(100*e.data)+"%"},itemStyle:{borderWidth:.3,borderType:"dashed"},data:i[a].map(((e,a)=>n[a]<=0?0:e/n[a])),tooltip:{formatter:e=>"<b>"+e.seriesName+'</b><br/><br/><span style="margin-right: 20px">'+e.name+"</span>"+Math.floor(e.data*n[e.dataIndex]).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}}))),l={color:["#173F6D","#2AA9C6","#F4BB01","#F06000","#2A73C6"],legend:{selectedMode:!0,orient:"horizontal",bottom:"5",left:"auto"},grid:{left:50,right:10,top:10,bottom:50},yAxis:{type:"value",max:1,axisLabel:{formatter:e=>100*e+" %"}},xAxis:{type:"category",data:o},tooltip:{trigger:"item",showDelay:.1,transitionDuration:.2,color:"#fff",fontFamily:"Open Sans"},toolbox:{show:!0,orient:"horizontal",left:"right",bottom:"bottom",feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},saveAsImage:{show:!0}}}};(a=_.extend({series:s},l))&&r.setOption(a)}function A(e){var a,t=document.getElementById("course-preference"),r=echarts.init(t),o=[];_.each(e,(function(e,a){o[a]={name:"lms"==e.MODA?"Pembelajaran Mandiri":e.MODA.charAt(0).toUpperCase()+e.MODA.slice(1).toLowerCase(),value:e.PERCENTAGE}})),(a={color:["#F05E00","#F2BA01","#2A72C7"],tooltip:{trigger:"item",valueFormatter:e=>e.toFixed(2)+"%"},toolbox:{show:!0,orient:"horizontal",left:"right",bottom:"bottom",feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},saveAsImage:{show:!0}}},label:{alignTo:"edge",formatter:"{b}\n{d} %",minMargin:5,edgeDistance:10,lineHeight:15},legend:{selectedMode:!0,orient:"horizontal",bottom:"0",left:"auto"},series:[{name:"Pelatihan Berdasarkan Transaksi",type:"pie",radius:["40%","70%"],data:o,emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]})&&r.setOption(a)}function S(e){var a,t=document.getElementById("course-category"),r=echarts.init(t),o=_.pluck(e,"TOTAL"),i=_.pluck(e,"CATEGORY"),n=Number(_.first(o)),s=Number(_.last(o));(a={tooltip:{},toolbox:{show:!0,orient:"horizontal",left:"right",bottom:"bottom",feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},saveAsImage:{show:!0}}},barWidth:"90%",barHeight:"90%",xAxis:{max:Math.ceil(n+1.5*s)},grid:{width:"95%",height:"90%",top:"5",left:"150"},yAxis:{type:"category",data:i,inverse:!0,animationDuration:300,animationDurationUpdate:300,grid:{left:"100",right:"10",bottom:"30",containLabel:!0}},series:[{realtimeSort:!0,type:"bar",data:o,itemStyle:{color:"#2a72c7"},label:{show:!0,position:"right",valueAnimation:!0,formatter:function(e){return e.data.toLocaleString("id-ID")}},showBackground:!0,backgroundStyle:{color:"rgba(180, 180, 180, 0.2)"}}],legend:{selectedMode:!0,orient:"horizontal",bottom:"5",left:"auto"}})&&r.setOption(a)}function k(e){var a,t=document.getElementById("rekeningPenerimaanInsentif"),r=echarts.init(t);(a={color:["#F06000","#2462A8"],legend:{selectedMode:!0,orient:"horizontal",bottom:"0",left:"auto"},tooltip:{trigger:"item",valueFormatter:e=>e.toFixed(2)+"%"},toolbox:{show:!0,orient:"horizontal",left:"right",bottom:"bottom",feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},saveAsImage:{show:!0}}},dataset:{source:[_.union(["Isentif"],_.pluck(e,"RPL_TAHUN")),_.union(["Bank"],_.pluck(e,"BANK")),_.union(["E-Wallet"],_.pluck(e,"EMONEY"))]},xAxis:[{type:"category",gridIndex:0},{type:"category",gridIndex:1}],yAxis:[{gridIndex:0},{gridIndex:1}],grid:[{width:"95%",height:"80%",left:"30",bottom:"10%",top:"5%"},{width:"95%",height:"80%",left:"30",bottom:"10%",top:"5%"}],series:[{type:"bar",seriesLayoutBy:"row"},{type:"bar",seriesLayoutBy:"row"}]})&&r.setOption(a)}function T(e,a){if("provinsi"===a)return'<li class="breadcrumb-item"><a href="'+(t+"/provinsi/?nama="+e.prov_name+"&kode="+e.prov_id)+'" class="text-capitalize">'+e.prov_name.replace(/-/gi," ")+' </a></li><li class="breadcrumb-item active text-truncate">Semua Kabupaten</li>';var r=t+"/provinsi/?nama="+e.prov_name+"&kode="+e.prov_id,o=t+"/kabupaten/?nama="+e.kab_name+"&kode="+e.kab_id+"&provinsi="+e.prov_name+"&kode_prov="+e.prov_id;return'<li class="breadcrumb-item"><a href="'+r+'" class="text-capitalize">'+e.prov_name.replace(/-/gi," ")+' </a></li> <li class="breadcrumb-item"><a href="'+o+'" class="text-capitalize">'+e.kab_name.replace(/-/gi," ")+'</a></li> <li class="breadcrumb-item active text-truncate">Semua kecamatan</li>'}function I(e){var a=document.getElementById("total-course");$("#total-course");var t=document.getElementById("webinar-course");$("#webinar-course");var r=document.getElementById("spl-course");$("#spl-course");var o=document.getElementById("luring-course"),i=_.filter(e,{MODA:"luring"}),n=_.filter(e,{MODA:"webinar"}),s=_.filter(e,{MODA:"lms"});m(a,0,_.isEmpty(n)?0+!_.isEmpty(i)?i[0].TOTAL:0+!_.isEmpty(s)?s[0].TOTAL:0:n[0].TOTAL,1200),m(t,0,n?.[0]?.TOTAL??0,1200),m(o,0,i?.[0]?.TOTAL??0,1200),m(r,0,s?.[0]?.TOTAL??0,1200)}function N(e,a){var t=$("#province-name"),r=$(".city-name"),o=$("#island-name"),i=$("#age-productive"),n=$("#age-workes"),s=$("#total-recipient"),l=$("#percent-recipient"),d=$("#total-workers");"kabupaten"==a&&r.html(e.city_name.replace(/kabupaten/gi,"").trim()),$(".province-name").html(e.provinsi),t.html(e.provinsi),o.html("Pulau "+e.pulau),i.html(e.jumlah_usia_produktif),n.html(e.jumlah_angkatan_kerja),s.html(e.angkatan_kerja_pernah_ikut_pelatihan),l.html(e.persentase_angkatan_kerja_pernah_ikut_pelatihan),d.html(e.jumlah_angkatan_kerja)}!function(l){if(o){var d=echarts.init(o);d.showLoading(),l.getJSON(t+"/js/map/IDN_FN.json",(function(e){d.hideLoading();var r=[];l.getJSON("https://public-prakerja.oss-ap-southeast-5.aliyuncs.com/data-demografi/indonesia/indonesia.json",(function(o){var i=o.pkp.data,n=o.gender.data,c=o.age.data,m=o.education.data,u=o.lp.data,b=o.p.data,h=o.transaction.data,T=o.top_course_category.data,N=o.top_trx_course_category.data,w=o.emoney_vs_bank.data,P=_.sortBy(n,(e=>e.RPL_TAHUN)),E=_.sortBy(c,(e=>e.RPL_TAHUN)),O=_.sortBy(m,(e=>e.RPL_TAHUN)),B=_.sortBy(b,(e=>e.RPL_TAHUN)),C={desil:o.desil_1.data.TOTAL,pmi:o.purna_pmi.data.TOTAL,vilage:o.pedesaan.data.TOTAL,difabel:o.difabel.data.TOTAL},x=_.sortBy(h,(e=>e.PERCENTAGE)),D=_.sortBy(T,(e=>e.RNK)),F=_.sortBy(N,(e=>e.RNK)),L=_.sortBy(w,(e=>e.RPL_TAHUN)),M=_.sortBy(_.without(i,_.findWhere(i,{PROVINCE_CODE:"TOTAL"})),(e=>e.PROVINCE_CODE));l.each(M,(function(e,a){return r.push({name:a.PROVINSI,value:Number(a.SK),code:a.PROVINCE_CODE,index:e})}));var R=_.min(r,(e=>e.value)),j=_.max(r,(e=>e.value));echarts.registerMap("IDMAP",e),a={animation:!0,tooltip:{trigger:"item",showDelay:.1,transitionDuration:.2,color:"#fff",fontFamily:"Open Sans"},visualMap:{left:"left",min:Math.floor(.9*R.value),max:Math.ceil(1.2*j.value),inRange:{color:["#3F80CD","#2a72c7","#2461a9","#1d508b","#173f6d"]},text:["Maks","Min"],calculable:!0},toolbox:{show:!0,orient:"vertical",left:"10",bottom:"200",feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},saveAsImage:{show:!0}}},series:[{name:"Jumlah Penerima Prakerja Di Provinsi",type:"map",roam:"false",map:"IDMAP",aspectScale:.925,zoom:1.25,label:{show:!0,color:"rgba(0,0,0, 0.75)",fontFamily:"Open Sans",fontSize:12,overflow:"truncate",height:16,backgroundColor:"rgba(255,255,255,.5)",padding:[2,3],borderRadius:4},itemStyle:{areaColor:"#8DB2DD",color:"rgba(17,46,80,0.75)",borderWidth:.3,borderType:"dashed",borderJoin:"round",borderCap:"round",color:"#fff"},emphasis:{itemStyle:{areaColor:"rgba(240, 94, 0, 1)",color:"#fff",shadowColor:"rgba(0,0,0,0.5)"},label:{color:"rgba(17,46,80,1)",fontFamily:"Open Sans",fontSize:12,backgroundColor:"rgba(255,255,255,.75)"}},data:r}]},d.setOption(a),d.on("click",(function(e){o=e.data;var a=_.isEmpty(o.name)?"":o.name.replace(/\s+/gi,"-").toLowerCase(),r=t+"/provinsi/?nama="+a+"&kode="+o.code;window.location.replace(r,"Statistik Program Prakerja Provinsi"+o.name+" - prakerja.go.id","_self")})),p(s,M),f(P),v(E),K(O),y(C),function(e){var a=document.getElementById("course-provider"),t=echarts.init(a);t.showLoading();var r,o=[];_.each(e,(function(e,a,t){o[a]=e.RPL_TAHUN})),r={color:["#2A72C7","#F05E00","#2491A9"],tooltip:{trigger:"axis"},toolbox:{show:!0,orient:"horizontal",left:"right",bottom:"bottom",feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},saveAsImage:{show:!0}}},legend:{data:["Akumulasi LP","Lembaga Baru","Lembaga Aktif"],selectedMode:!0,orient:"horizontal",bottom:"5",left:"auto"},grid:{left:"10",right:"20",bottom:"30",containLabel:!0,height:"85%"},xAxis:{type:"category",boundaryGap:!1,data:o},yAxis:{type:"value",interval:100,max:600},series:[{name:"Akumulasi LP",type:"line",data:_.pluck(e,"AKUMULASI_LP")},{name:"Lembaga Baru",type:"line",data:_.pluck(e,"NEW_LP")},{name:"Lembaga Aktif",type:"line",data:_.pluck(e,"AKTIF_LP")}]},t.hideLoading(),r&&t.setOption(r)}(u),function(e){var a=document.getElementById("courses"),t=echarts.init(a);t.showLoading();var r,o=[];_.each(e,(function(e,a,t){o[a]=e.RPL_TAHUN})),r={color:["#2A72C7","#F05E00","#2491A9"],tooltip:{trigger:"axis"},toolbox:{show:!0,orient:"horizontal",left:"right",bottom:"bottom",feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},saveAsImage:{show:!0}}},legend:{data:["Akumulasi Pelatihan","Pelatihan Baru","Pelatihan Dengan Transaksi"],selectedMode:!0,orient:"horizontal",bottom:"5",left:"auto"},grid:{left:"10",right:"20",bottom:"30",containLabel:!0,height:"85%"},xAxis:{type:"category",boundaryGap:!1,data:o},yAxis:{type:"value"},series:[{name:"Akumulasi Pelatihan",type:"line",data:_.pluck(e,"AKUMULASI_P")},{name:"Pelatihan Baru",type:"line",data:_.pluck(e,"NEW_P")},{name:"Pelatihan Dengan Transaksi",type:"line",data:_.pluck(e,"TRANS_P")}]},t.hideLoading(),r&&t.setOption(r)}(B),A(x),I(x),S(D),g(F),k(L)}))})),m(document.getElementById("total-penerima"),0,18887737,1200)}if(i){var u=echarts.init(i),w=_.isEmpty(e.get("kode"))?"31":e.get("kode"),P=_.isEmpty(e.get("nama"))?"dki_jakarta":e.get("nama"),E="province_"+w+".json",O=w+".json",B=l("#breadcrumb-detail .bc-list"),C={prov_name:P,prov_id:w},x={title:"Statistik Penerima Di Provinsi "+P.replace(/-/gi," ")+" - prakerja.go.id",description:"Informasi statistik penerima prakerja pada provinsi "+P.replace(/-/gi," ")+" selama periode 2020 - 2024."};u.showLoading(),c(x),l.getJSON("https://public-prakerja.oss-ap-southeast-5.aliyuncs.com/geojson_data/provinsi/"+E,(function(e){u.hideLoading();var o=[];l.getJSON(r+O,(function(r){var i=r.pkp.data,n=r.gender.data,d=r.age.data,c=r.education.data,p=r.transaction.data,h=r.top_course_category.data,y=r.top_trx_course_category.data,P=r.emoney_vs_bank.data,E=_.sortBy(n,(e=>e.RPL_TAHUN)),O=_.sortBy(d,(e=>e.RPL_TAHUN)),x=_.sortBy(c,(e=>e.RPL_TAHUN)),D=_.sortBy(p,(e=>e.PERCENTAGE)),F=_.sortBy(h,(e=>e.RNK)),L=_.sortBy(y,(e=>e.RNK)),M=_.sortBy(P,(e=>e.RPL_TAHUN)),R=_.sortBy(_.without(i,_.findWhere(i,{PROVINCE_CODE:"TOTAL"})),(e=>e.PROVINCE_CODE)),j=_.findWhere(i,{PROVINCE_CODE:"TOTAL"});l.each(R,(function(e,a){return o.push({name:a.KOTA_KABUPATEN,province_name:a.PROVINSI,value:Number(a.SK),code:a.KOTA_KABUPATEN_ID,province_code:a.PROVINCE_CODE,index:e})}));var U=_.min(o,(e=>e.value)),V=_.max(o,(e=>e.value));echarts.registerMap("IDMAP",e),a={animation:!0,tooltip:{trigger:"item",showDelay:.1,transitionDuration:.2,color:"#fff",fontFamily:"Open Sans"},toolbox:{show:!0,orient:"vertical",left:"10",bottom:"200",feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},saveAsImage:{show:!0}}},visualMap:{left:"left",min:Math.floor(.9*U.value),max:Math.ceil(1.1*V.value),inRange:{color:["#558ED2","#4A87CF","#3F80CD","#2A72C7","#286CBD","#2667B3","#225B9F","#7FAADD","#1D508B","#7FAADD","#1B4A81","#194477"]},text:["Maks","Min"],calculable:!0},series:[{name:"Jumlah Penerima Prakerja Di Provinsi",type:"map",roam:"false",map:"IDMAP",aspectScale:.925,zoom:1.25,itemStyle:{areaColor:"#8DB2DD",borderColor:"#f3f3f3",borderWidth:.3,borderType:"dashed",borderJoin:"round",borderCap:"round",color:"#fff"},label:{show:!0,formatter:e=>e.name.replace(/kabupaten/gi,"").trim(),color:"rgba(0,0,0, 0.75)",fontFamily:"Open Sans",fontSize:12,overflow:"truncate",height:16,backgroundColor:"rgba(255,255,255,.50)",padding:[2,4],borderRadius:4},emphasis:{label:{show:!0},itemStyle:{areaColor:"#f05e00",color:"#fff",shadowColor:"rgba(0,0,0,0.5)"},label:{color:"rgba(17,46,80,1)",fontFamily:"Open Sans",fontSize:12,backgroundColor:"rgba(255,255,255,.75)"}},data:o}]},31==w&&_.extend(a.series[0],{layoutCenter:["25%","-55%"],layoutSize:"250%"}),u.setOption(a),u.on("click",(function(e){r=e.data;var a=_.isEmpty(r.name)?"":r.name.replace(/\s+/gi,"-").toLowerCase(),o=_.isEmpty(r.province_name)?"":r.province_name.replace(/\s+/gi,"-").toLowerCase(),i=t+"/kabupaten/?nama="+a+"&kode="+r.code+"&provinsi="+o+"&kode_prov="+r.province_code;window.location.replace(i,"Statistik Program Prakerja Provinsi"+r.name+" - prakerja.go.id","_self")})),b(s,R),f(E),v(O),K(x),A(D),I(D),S(F),g(L),k(M),B.append(T(C,"provinsi")),l.getJSON(t+"/js/data/data-statistik.json").done((function(e){N(_.findWhere(e,{provinsi_id:Number(w)}),"provinsi")})),m(document.getElementById("total-penerima"),0,j.SK,1200)}))}))}if(n){var D=echarts.init(n),F=_.isEmpty(e.get("kode_prov"))?"31":e.get("kode_prov"),L=_.isEmpty(e.get("provinsi"))?"dki_jakarta":e.get("provinsi"),M=_.isEmpty(e.get("kode"))?"157":e.get("kode"),R=_.isEmpty(e.get("nama"))?"kota-adm.-jakarta-timur":e.get("nama"),j=(E="city_"+F+".geojson",M+".json");O=F+".json",B=l("#breadcrumb-detail .bc-list"),C={kab_name:R,kab_id:M,prov_name:L,prov_id:F};D.showLoading(),c(x={title:"Statistik Penerima Di "+R.replace(/-/gi," ")+" - prakerja.go.id",description:"Informasi statistik penerima prakerja pada "+R.replace(/-/gi," ")+" selama periode 2020 - 2024."}),l.getJSON(t+"/js/map/province/"+E,(function(e){D.hideLoading();var o=[];l.getJSON("https://public-prakerja.oss-ap-southeast-5.aliyuncs.com/data-demografi/kota_kab/"+j,(function(i){l.getJSON(r+O,(function(r){var n=r.pkp.data,d=i.pkp.data,c=i.gender.data,u=i.age.data,p=i.education.data,b=i.transaction.data,y=i.top_course_category.data,w=i.top_trx_course_category.data,P=i.emoney_vs_bank.data,E=_.sortBy(c,(e=>e.RPL_TAHUN)),O=_.sortBy(u,(e=>e.RPL_TAHUN)),x=_.sortBy(p,(e=>e.RPL_TAHUN)),L=_.sortBy(b,(e=>e.PERCENTAGE)),j=_.sortBy(y,(e=>e.RNK)),U=_.sortBy(w,(e=>e.RNK)),V=_.sortBy(P,(e=>e.RPL_TAHUN)),$=_.sortBy(_.without(d,_.findWhere(d,{PROVINCE_CODE:"TOTAL"})),(e=>e.KECAMATAN_ID)),z=_.findWhere(d,{PROVINCE_CODE:"TOTAL"});l.each(n,(function(e,a){return o.push({name:a.KOTA_KABUPATEN,province_name:a.PROVINSI,value:M===a.KOTA_KABUPATEN_ID?a.SK:"-",code:a.KOTA_KABUPATEN_ID,province_code:a.PROVINCE_CODE,index:e})})),echarts.registerMap("IDMAP",e),a={animation:!0,tooltip:{trigger:"item",showDelay:.1,transitionDuration:.2,color:"#fff",fontFamily:"Open Sans"},visualMap:{show:!1,inRange:{color:["#558ED2","#4A87CF","#3F80CD","#2A72C7","#286CBD","#2667B3","#225B9F","#7FAADD","#1D508B","#7FAADD","#1B4A81","#194477"]},calculable:!0},toolbox:{show:!0,orient:"vertical",left:"0",bottom:"10",feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},saveAsImage:{show:!0}}},series:[{name:"Jumlah Penerima Prakerja Di Kabupaten",type:"map",roam:"false",map:"IDMAP",aspectScale:.925,zoom:1.25,itemStyle:{areaColor:"#8DB2DD",borderColor:"#f3f3f3",borderWidth:.3,borderType:"dashed",borderJoin:"round",borderCap:"round",color:"#fff"},label:{show:!0,formatter:e=>e.name.replace(/kabupaten/gi,"").trim(),color:"rgba(0,0,0, 0.75)",fontFamily:"Open Sans",fontSize:12,overflow:"truncate",height:16,backgroundColor:"rgba(255,255,255,.5)",padding:[2,3],borderRadius:4},emphasis:{label:{show:!0},itemStyle:{areaColor:"#f05e00",color:"#fff",shadowColor:"rgba(0,0,0,0.5)"},label:{color:"rgba(17,46,80,1)",fontFamily:"Open Sans",fontSize:12,backgroundColor:"rgba(255,255,255,.75)",padding:[2,3],borderRadius:4}},data:o}]},31==F&&_.extend(a.series[0],{layoutCenter:["25%","-55%"],layoutSize:"250%"}),D.setOption(a),D.on("click",(function(e){var a=e.data,r=_.isEmpty(e.name)?"":e.name.replace(/\s+/gi,"-").toLowerCase(),o=_.isEmpty(a.province_name)?"":a.province_name.replace(/\s+/gi,"-").toLowerCase(),i=t+"/kabupaten/?nama="+r+"&kode="+a.code+"&provinsi="+o+"&kode_prov="+a.province_code;window.location.replace(i,"Statistik Program Prakerja Provinsi"+e.name+" - prakerja.go.id","_self")})),h(s,$),f(E),v(O),K(x),A(L),I(L),S(j),g(U),k(V),B.append(T(C,"kabupaten")),l.getJSON(t+"/js/data/data-statistik.json").done((function(e){var a=_.findWhere(e,{provinsi_id:Number(F)});_.extend(a,{city_name:R.replace(/-/gi," ")}),N(a,"kabupaten")})),m(document.getElementById("total-penerima"),0,z.SK,1200)}))}))}))}l(window).scroll((function(){var e=l(window).scrollTop();e>=60?l("header").addClass("header-fixed"):l("header").removeClass("header-fixed"),e>=214?l(".search-boxy").addClass("is-fixed"):l(".search-boxy").removeClass("is-fixed"),e>=400?l(".scroll-top").addClass("is-show"):l(".scroll-top").removeClass("is-show")})),l(".scroll-top").on("click",(function(){l(window).scrollTop(0)})),l(".menu").click((function(){l(this).toggleClass("open"),l(".navbar-custom").toggleClass("m-menu"),l("body").toggleClass("freeze")})),l(".nav-link, .nav-cta").on("click",(function(e){l(".menu").removeClass("open"),l(".navbar-custom").removeClass("m-menu"),l("body").removeClass("freeze")})),l(".testimony-carousel").owlCarousel({loop:!0,autoplay:!0,center:!1,dots:!1,responsive:{1e3:{items:1.5,margin:0},756:{items:2,margin:0},0:{items:1,margin:0}}})}(jQuery);
//# sourceMappingURL=function-min.js.map