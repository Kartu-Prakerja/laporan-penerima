const e=new URLSearchParams(window.location.search);var a,t="https://statistik-penerima.prakerja.go.id",o="https://static-asset-cdn.prakerja.go.id/data-demografi/provinsi/",r=document.getElementById("maps-indonesia"),n=(document.getElementById("autocomplate"),document.getElementById("maps-province")),i=document.getElementById("maps-regency"),l=$("#tablePersebaran"),d=window.innerWidth;function s(e){return e>=1e9?(e/1e9).toFixed(2)+" Miliar":e>=1e6?(e/1e6).toFixed(2)+" Juta":e>=1e3?(e/1e3).toFixed(2)+" ribu":e}const c=new autoComplete({selector:"#autoComplete",submit:!0,placeHolder:"Cari Provinsi atau Kabupaten/Kota",data:{src:async()=>{try{document.getElementById("autoComplete").setAttribute("placeholder","Loading...");const e=await fetch(t+"/js/data/data-province-city.json"),a=await e.json();return document.getElementById("autoComplete").setAttribute("placeholder",c.placeHolder),a}catch(e){return e}},keys:["KOTA_KABUPATEN","PROVINCE_NAME"],cache:!0},resultsList:{element:(e,a)=>{if(!a.results.length){const t=document.createElement("div");t.setAttribute("class","no_result"),t.innerHTML=`<span>Found No Results for "${a.query}"</span>`,e.prepend(t)}},noResults:!0},resultItem:{highlight:!0},events:{input:{selection:e=>{var a=_.isEmpty(e.detail.selection.value.KOTA_KABUPATEN)?e.detail.selection.value.PROVINCE_NAME:e.detail.selection.value.KOTA_KABUPATEN,o=_.isEmpty(e.detail.selection.value.KOTA_KABUPATEN)?t+"/provinsi/?nama="+e.detail.selection.value.PROVINCE_NAME.replace(/\s+/gi,"-").toLowerCase()+"&kode="+e.detail.selection.value.PROVINCE_CODE:t+"/kabupaten/?nama="+e.detail.selection.value.KOTA_KABUPATEN.replace(/\s+/gi,"-").toLowerCase()+"&kode="+e.detail.selection.value.KOTA_KABUPATEN_ID+"&provinsi="+e.detail.selection.value.PROVINSI.replace(/\s+/gi,"-").toLowerCase()+"&kode_prov="+e.detail.selection.value.PROVINCE_CODE;c.input.value=a,window.location.replace(o)}}}});function m(e){var a=$("title"),t=$('meta[name="description"]'),o=$('meta[property="og:description"]'),r=$('meta[name="twitter:title"]');a.html(e.title),r.attr("content",e.title),o.attr("content",e.description),t.attr("content",e.description)}function u(e,a,t,o){let r=null;var n=i=>{r||(r=i);var l=Math.min((i-r)/o,1);e.innerHTML=Math.floor(l*(t-a)+a).toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."),l<1&&window.requestAnimationFrame(n)};window.requestAnimationFrame(n)}function p(e,a,t){var o=(t-a)/7,r=[a+1*o,a+2*o,a+3*o,a+4*o,a+5*o,a+6*o,t];return e<=r[0]?"very-low":e<=r[1]?"low":e<=r[2]?"below-average":e<=r[3]?"average":e<=r[4]?"above-average":e<=r[5]?"high":"very-high"}function g(e,a){var o={};_.forEach(["SK_2020","SK_2020_AKTIF","SK_2021","SK_2021_AKTIF","SK_2022","SK_2022_AKTIF","SK_2023","SK_2023_AKTIF","SK_2024","SK_2024_AKTIF"],(e=>{var t=a.map((a=>a[e])),r=Math.min(...t),n=Math.max(...t);o[e]={min:r,max:n}})),$(e).DataTable({ordering:!1,paging:!1,searching:!1,bLengthChange:!1,data:a,order:[[11,"asc"]],columns:[{data:"PROVINSI",render:function(e,a,o,r){var n=_.isEmpty(e)?"":e.replace(/\s+/gi,"-").toLowerCase();return'<a href="'+(t+"/provinsi/?nama="+n+"&kode="+o.PROVINCE_CODE)+'" target="_blank">'+e+"</a>"}},{data:"SK_2020",render:function(e,a,t){return'<div class="'+p(e,o.SK_2020.min,o.SK_2020.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2020_AKTIF",render:function(e,a,t){return'<div class="'+p(e,o.SK_2020_AKTIF.min,o.SK_2020_AKTIF.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2021",render:function(e,a,t){return'<div class="'+p(e,o.SK_2021.min,o.SK_2021.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2021_AKTIF",render:function(e,a,t){return'<div class="'+p(e,o.SK_2021_AKTIF.min,o.SK_2021_AKTIF.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2022",render:function(e,a,t){return'<div class="'+p(e,o.SK_2022.min,o.SK_2022.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2022_AKTIF",render:function(e,a,t){return'<div class="'+p(e,o.SK_2022_AKTIF.min,o.SK_2022_AKTIF.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2023",render:function(e,a,t){return'<div class="'+p(e,o.SK_2023.min,o.SK_2023.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2023_AKTIF",render:function(e,a,t){return'<div class="'+p(e,o.SK_2023_AKTIF.min,o.SK_2023_AKTIF.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2024",render:function(e,a,t){return'<div class="'+p(e,o.SK_2024.min,o.SK_2024.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2024_AKTIF",render:function(e,a,t){return'<div class="'+p(e,o.SK_2024_AKTIF.min,o.SK_2024_AKTIF.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"PROVINCE_CODE",render:""}],columnDefs:[{targets:-1,defaultContent:"-",targets:"_all",render:$.fn.dataTable.render.number(".",",",0,"")},{target:0,className:"dt-body-left"},{target:11,visible:!1,searchable:!1}],layout:{bottomEnd:{paging:{firstLast:!1}}},fnRowCallback:function(e,a,t,o){a[2]>=5?$("td",e).css("background-color","Red"):a[1]<=4&&$("td",e).css("background-color","Orange")}})}function f(e,a){var o={};_.forEach(["SK_2020","SK_2020_AKTIF","SK_2021","SK_2021_AKTIF","SK_2022","SK_2022_AKTIF","SK_2023","SK_2023_AKTIF","SK_2024","SK_2024_AKTIF"],(e=>{var t=a.map((a=>a[e])),r=Math.min(...t),n=Math.max(...t);o[e]={min:r,max:n}})),$(e).DataTable({searching:!1,ordering:!1,paging:!1,bLengthChange:!1,data:a,order:[[11,"asc"]],columns:[{data:"KOTA_KABUPATEN",render:function(e,a,o,r){var n=_.isEmpty(e)?"":e.replace(/\s+/gi,"-").toLowerCase();return'<a href="'+(t+"/kabupaten/?nama="+n+"&kode="+o.KOTA_KABUPATEN_ID+"&provinsi="+o.PROVINSI+"&kode_prov="+o.PROVINCE_CODE)+'" target="_blank">'+e+"</a>"}},{data:"SK_2020",render:function(e,a,t){return'<div class="'+p(e,o.SK_2020.min,o.SK_2020.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2020_AKTIF",render:function(e,a,t){return'<div class="'+p(e,o.SK_2020_AKTIF.min,o.SK_2020_AKTIF.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2021",render:function(e,a,t){return'<div class="'+p(e,o.SK_2021.min,o.SK_2021.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2021_AKTIF",render:function(e,a,t){return'<div class="'+p(e,o.SK_2021_AKTIF.min,o.SK_2021_AKTIF.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2022",render:function(e,a,t){return'<div class="'+p(e,o.SK_2022.min,o.SK_2022.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2022_AKTIF",render:function(e,a,t){return'<div class="'+p(e,o.SK_2022_AKTIF.min,o.SK_2022_AKTIF.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2023",render:function(e,a,t){return'<div class="'+p(e,o.SK_2023.min,o.SK_2023.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2023_AKTIF",render:function(e,a,t){return'<div class="'+p(e,o.SK_2023_AKTIF.min,o.SK_2023_AKTIF.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2024",render:function(e,a,t){return'<div class="'+p(e,o.SK_2024.min,o.SK_2024.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2024_AKTIF",render:function(e,a,t){return'<div class="'+p(e,o.SK_2024_AKTIF.min,o.SK_2024_AKTIF.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"KOTA_KABUPATEN_ID",render:""}],columnDefs:[{targets:-1,defaultContent:"-",targets:"_all",render:$.fn.dataTable.render.number(".",",",0,"")},{target:0,className:"dt-body-left"},{target:11,visible:!1,searchable:!1}],layout:{bottomEnd:{paging:{firstLast:!1}}},fnRowCallback:function(e,a,t,o){a[1]>5?$("td",e).css("background-color","Red"):a[1]<=4&&$("td",e).css("background-color","Orange")}})}function h(e,a){var t={};_.forEach(["SK_2020","SK_2020_AKTIF","SK_2021","SK_2021_AKTIF","SK_2022","SK_2022_AKTIF","SK_2023","SK_2023_AKTIF","SK_2024","SK_2024_AKTIF"],(e=>{var o=a.map((a=>a[e])),r=Math.min(...o),n=Math.max(...o);t[e]={min:r,max:n}})),$(e).DataTable({ordering:!1,paging:!1,searching:!1,bLengthChange:!1,data:a,order:[[11,"asc"]],columns:[{data:"KECAMATAN"},{data:"SK_2020",render:function(e,a,o){return'<div class="'+p(e,t.SK_2020.min,t.SK_2020.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2020_AKTIF",render:function(e,a,o){return'<div class="'+p(e,t.SK_2020_AKTIF.min,t.SK_2020_AKTIF.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2021",render:function(e,a,o){return'<div class="'+p(e,t.SK_2021.min,t.SK_2021.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2021_AKTIF",render:function(e,a,o){return'<div class="'+p(e,t.SK_2021_AKTIF.min,t.SK_2021_AKTIF.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2022",render:function(e,a,o){return'<div class="'+p(e,t.SK_2022.min,t.SK_2022.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2022_AKTIF",render:function(e,a,o){return'<div class="'+p(e,t.SK_2022_AKTIF.min,t.SK_2022_AKTIF.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2023",render:function(e,a,o){return'<div class="'+p(e,t.SK_2023.min,t.SK_2023.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2023_AKTIF",render:function(e,a,o){return'<div class="'+p(e,t.SK_2023_AKTIF.min,t.SK_2023_AKTIF.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2024",render:function(e,a,o){return'<div class="'+p(e,t.SK_2024.min,t.SK_2024.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"SK_2024_AKTIF",render:function(e,a,o){return'<div class="'+p(e,t.SK_2024_AKTIF.min,t.SK_2024_AKTIF.max)+'">'+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"</div>"}},{data:"KECAMATAN_ID",render:""}],columnDefs:[{targets:-1,defaultContent:"-",targets:"_all",render:$.fn.dataTable.render.number(".",",",0,"")},{target:0,className:"dt-body-left"},{target:11,visible:!1,searchable:!1}],layout:{bottomEnd:{paging:{firstLast:!1}}},fnRowCallback:function(e,a,t,o){a[1]>5?$("td",e).css("background-color","Red"):a[1]<=4&&$("td",e).css("background-color","Orange")}})}function b(e){var a,t=document.getElementById("gender"),o=echarts.init(t),r=[];_.each(e,(function(e,a,t){return r[a]=e.RPL_TAHUN}));var n=[_.pluck(e,"SK_L"),_.pluck(e,"SK_P")],i=[];for(let e=0;e<n[0].length;++e){let a=0;for(let t=0;t<n.length;++t)a+=n[t][e];i.push(a)}var l=["Laki-Laki","Perempuan"].map(((e,a)=>({name:e,type:"bar",stack:"total",barWidth:"90%",label:{show:!0,color:"#fff",formatter:e=>Math.floor(100*e.data)+"%"},itemStyle:{borderWidth:.3,borderType:"dashed"},data:n[a].map(((e,a)=>i[a]<=0?0:e/i[a])),tooltip:{formatter:e=>"<b>"+e.seriesName+'</b><br/><br/><span style="margin-right: 20px">'+e.name+"</span>"+Math.floor(e.data*i[e.dataIndex]).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}}))),d={color:["#2462A8","#F06000"],legend:{selectedMode:!0,orient:"horizontal",bottom:"5",left:"auto"},grid:{left:50,right:10,top:10,bottom:50},yAxis:{type:"value",axisLabel:{formatter:e=>100*e+" %"}},xAxis:{type:"category",data:r},tooltip:{trigger:"item",showDelay:.1,transitionDuration:.2,color:"#fff",fontFamily:"Open Sans"},toolbox:{show:!0,orient:"horizontal",left:"right",bottom:"bottom",feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},saveAsImage:{show:!0}}}};(a=_.extend({series:l},d))&&o.setOption(a)}function v(e){var a,t=document.getElementById("age"),o=echarts.init(t),r=[];_.each(e,(function(e,a,t){return r[a]=e.RPL_TAHUN}));var n=[_.pluck(e,"SK_18_25"),_.pluck(e,"SK_26_35"),_.pluck(e,"SK_36_45"),_.pluck(e,"SK_46_55"),_.pluck(e,"SK_56_KEATAS")],i=[];for(let e=0;e<n[0].length;++e){let a=0;for(let t=0;t<n.length;++t)a+=n[t][e];i.push(a)}var l=["18-25","26-35","36-45","46-55","56-64"].map(((e,a)=>({name:e,type:"bar",stack:"total",barWidth:"85%",label:{show:!0,color:"#fff",formatter:e=>Math.floor(100*e.data)+"%"},itemStyle:{borderWidth:.3,borderType:"dashed"},data:n[a].map(((e,a)=>i[a]<=0?0:e/i[a])),tooltip:{formatter:e=>"<b>"+e.seriesName+'</b><br/><br/><span style="margin-right: 20px">'+e.name+"</span>"+Math.floor(e.data*i[e.dataIndex]).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}}))),s={color:["#173F6D","#2AA9C6","#F4BB01","#F06000","#2A73C6"],legend:{selectedMode:!0,orient:"horizontal",bottom:"0",left:"auto"},grid:{left:50,right:10,top:10,bottom:50,height:"75%"},yAxis:{type:"value",max:1,axisLabel:{formatter:e=>100*e+" %"}},xAxis:{type:"category",data:r},tooltip:{trigger:"item",showDelay:.1,transitionDuration:.2,color:"#fff",fontFamily:"Open Sans"},toolbox:{show:!0,orient:"horizontal",left:"right",bottom:"bottom",feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},saveAsImage:{show:!0}}}};if(d>=992){s=_.extend(s,{grid:{height:"80%",left:50,right:10,top:10,bottom:50}})}(a=_.extend({series:l},s))&&o.setOption(a)}function S(e){var a=$(".pmi"),t=$(".desil"),o=$(".difabel"),r=$(".vilage");a.html(e.pmi+"%"),t.html(e.desil+"%"),o.html(e.difabel+"%"),r.html(e.vilage+"%")}function A(e){var a,t=document.getElementById("lastEdu"),o=echarts.init(t),r=[];_.each(e,(function(e,a,t){return r[a]=e.RPL_TAHUN}));var n=[_.pluck(e,"SK_SD"),_.pluck(e,"SK_SMP"),_.pluck(e,"SK_SMA_SMAK_SEDERAJAT"),_.pluck(e,"SK_D1_D4"),_.pluck(e,"SK_S1_S3")],i=[];for(let e=0;e<n[0].length;++e){let a=0;for(let t=0;t<n.length;++t)a+=n[t][e];i.push(a)}var l=["SD","SMP","SMA/SMK Sederajat","D1-D4","S1-S3"].map(((e,a)=>({name:e,type:"bar",stack:"total",barWidth:"90%",label:{show:!0,color:"#fff",formatter:e=>Math.floor(100*e.data)+"%"},itemStyle:{borderWidth:.3,borderType:"dashed"},data:n[a].map(((e,a)=>i[a]<=0?0:e/i[a])),tooltip:{formatter:e=>"<b>"+e.seriesName+'</b><br/><br/><span style="margin-right: 20px">'+e.name+"</span>"+Math.floor(e.data*i[e.dataIndex]).toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}}))),s={color:["#173F6D","#2AA9C6","#F4BB01","#F06000","#2A73C6"],legend:{selectedMode:!0,orient:"horizontal",bottom:"5",left:"auto"},grid:{left:50,right:10,top:10,bottom:50,height:"70%"},yAxis:{type:"value",max:1,axisLabel:{formatter:e=>100*e+" %"}},xAxis:{type:"category",data:r},tooltip:{trigger:"item",showDelay:.1,transitionDuration:.2,color:"#fff",fontFamily:"Open Sans"},toolbox:{show:!0,orient:"horizontal",left:"right",bottom:"bottom",feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},saveAsImage:{show:!0}}}};if(d>=992){s=_.extend(s,{grid:{height:"80%",left:50,right:10,top:10,bottom:50}})}(a=_.extend({series:l},s))&&o.setOption(a)}function K(e){var a,t=document.getElementById("course-preference"),o=echarts.init(t),r=[];_.each(e,(function(e,a){r[a]={name:"lms"==e.MODA?"Pembelajaran Mandiri":e.MODA.charAt(0).toUpperCase()+e.MODA.slice(1).toLowerCase(),value:e.PERCENTAGE}})),(a={color:["#F05E00","#F2BA01","#2A72C7"],tooltip:{trigger:"item",valueFormatter:e=>e.toFixed(2)+"%"},toolbox:{show:!0,orient:"horizontal",left:"right",bottom:"bottom",feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},saveAsImage:{show:!0}}},label:{alignTo:"edge",formatter:"{b}\n{d} %",minMargin:5,edgeDistance:10,lineHeight:15},legend:{selectedMode:!0,orient:"horizontal",bottom:"0",left:"auto"},series:[{name:"Pelatihan Berdasarkan Transaksi",type:"pie",radius:["40%","70%"],data:r,emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]})&&o.setOption(a)}function y(e){var a,t=document.getElementById("course-category"),o=echarts.init(t),r=_.pluck(e,"TOTAL"),n=_.pluck(e,"CATEGORY"),i=Number(_.first(r));Number(_.last(r));(a={tooltip:{},toolbox:{show:!0,orient:"horizontal",left:"right",bottom:"bottom",feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},saveAsImage:{show:!0}}},barWidth:"90%",barHeight:"90%",xAxis:{max:Math.ceil(i+.2*i)},grid:{width:"95%",height:"90%",top:"5",left:"150"},yAxis:{type:"category",data:n,inverse:!0,animationDuration:300,animationDurationUpdate:300,grid:{left:"100",right:"10",bottom:"30",containLabel:!0}},series:[{realtimeSort:!0,type:"bar",data:r,itemStyle:{color:"#2a72c7"},label:{show:!0,position:"right",valueAnimation:!0,formatter:e=>e.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")},showBackground:!0,backgroundStyle:{color:"rgba(180, 180, 180, 0.2)"}}],legend:{selectedMode:!0,orient:"horizontal",bottom:"5",left:"auto"}})&&o.setOption(a)}function k(e){var a,t=document.getElementById("rekeningPenerimaanInsentif"),o=echarts.init(t);(a={color:["#F06000","#2462A8"],legend:{selectedMode:!0,orient:"horizontal",bottom:"0",left:"auto"},tooltip:{trigger:"item",valueFormatter:e=>e.toFixed(2)+"%"},toolbox:{show:!0,orient:"horizontal",left:"right",bottom:"bottom",feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},saveAsImage:{show:!0}}},dataset:{source:[_.union(["Isentif"],_.pluck(e,"RPL_TAHUN")),_.union(["Bank"],_.pluck(e,"P_USER_BANK")),_.union(["E-Wallet"],_.pluck(e,"P_USER_EMONEY")),_.union(["Total Bank"],_.pluck(e,"BANK_TOTAL_USER")),_.union(["Total E-Wallet"],_.pluck(e,"EMONEY_TOTAL_USER"))]},xAxis:[{type:"category",gridIndex:0},{type:"category",gridIndex:1}],yAxis:[{gridIndex:0},{gridIndex:1}],grid:[{width:"95%",height:"80%",left:"30",bottom:"10%",top:"5%"},{width:"95%",height:"80%",left:"30",bottom:"10%",top:"5%"}],series:[{type:"bar",seriesLayoutBy:"row",label:{show:!0,formatter:e=>s(e.data[3]),offset:[0,-20],position:"insideTop",color:"#333"}},{type:"bar",seriesLayoutBy:"row",label:{show:!0,formatter:e=>s(e.data[4]),offset:[0,-20],position:"insideTop",color:"#333"}}]})&&o.setOption(a)}function T(e,a){if("provinsi"===a)return'<li class="breadcrumb-item"><a href="'+(t+"/provinsi/?nama="+e.prov_name+"&kode="+e.prov_id)+'" class="text-capitalize">'+e.prov_name.replace(/-/gi," ")+' </a></li><li class="breadcrumb-item active text-truncate">Semua Kabupaten</li>';var o=t+"/provinsi/?nama="+e.prov_name+"&kode="+e.prov_id,r=t+"/kabupaten/?nama="+e.kab_name+"&kode="+e.kab_id+"&provinsi="+e.prov_name+"&kode_prov="+e.prov_id;return'<li class="breadcrumb-item"><a href="'+o+'" class="text-capitalize">'+e.prov_name.replace(/-/gi," ")+' </a></li> <li class="breadcrumb-item"><a href="'+r+'" class="text-capitalize">'+e.kab_name.replace(/-/gi," ")+'</a></li> <li class="breadcrumb-item active text-truncate">Semua kecamatan</li>'}function w(e){var a=document.getElementById("total-course");$("#total-course");var t=document.getElementById("webinar-course");$("#webinar-course");var o=document.getElementById("spl-course");$("#spl-course");var r=document.getElementById("luring-course"),n=_.filter(e,{MODA:"luring"}),i=_.filter(e,{MODA:"webinar"}),l=_.filter(e,{MODA:"lms"});u(a,0,(_.isEmpty(l)?0:Number(l[0].TOTAL))+(_.isEmpty(i)?0:Number(i[0].TOTAL))+(_.isEmpty(n)?0:Number(n[0].TOTAL)),1200),u(t,0,i?.[0]?.TOTAL??0,1200),u(r,0,n?.[0]?.TOTAL??0,1200),u(o,0,l?.[0]?.TOTAL??0,1200)}function I(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}function C(e,a){var t=$("#province-name"),o=$(".city-name"),r=$("#island-name"),n=$("#age-productive"),i=$("#age-workes"),l=$("#total-recipient"),d=$("#percent-recipient"),s=$("#total-workers"),c=(Number(e.sk_total)/Number(e.jumlah_angkatan_kerja)*100).toFixed(2);"kabupaten"==a?o.html(e.city_name.replace(/kabupaten/gi,"").trim()):(d.html(I(e.persentase_angkatan_kerja_pernah_ikut_pelatihan)),l.html(I(e.angkatan_kerja_pernah_ikut_pelatihan))),$(".province-name").html(e.provinsi),t.html(e.provinsi),r.html("Pulau "+e.pulau),l.html(I(e.sk_total)),d.html(c),n.html(I(e.jumlah_usia_produktif)),i.html(I(e.jumlah_angkatan_kerja)),s.html(I(e.jumlah_angkatan_kerja))}!function(c){if(r){var p=echarts.init(r);p.showLoading(),c.getJSON(t+"/js/map/IDN_FN.json",(function(e){p.hideLoading();var o=[];c.getJSON("https://static-asset-cdn.prakerja.go.id/data-demografi/indonesia/indonesia.json",(function(r){var n=r.pkp.data,i=r.gender.data,m=r.age.data,f=r.education.data,h=r.lp.data,T=r.p.data,I=r.transaction.data,C=r.top_course_category.data,B=r.top_trx_course_category.data,x=r.emoney_vs_bank.data,O=_.findWhere(n,{PROVINCE_CODE:"TOTAL"}),E=_.sortBy(i,(e=>e.RPL_TAHUN)),F=_.sortBy(m,(e=>e.RPL_TAHUN)),D=_.sortBy(f,(e=>e.RPL_TAHUN)),P=_.sortBy(T,(e=>e.RPL_TAHUN)),N={desil:r.desil_1.data.TOTAL,pmi:r.purna_pmi.data.TOTAL,vilage:r.pedesaan.data.TOTAL,difabel:r.difabel.data.TOTAL},L=_.sortBy(I,(e=>e.PERCENTAGE)),M=_.sortBy(C,(e=>e.RNK)),R=(_.sortBy(B,(e=>e.RNK)),_.sortBy(x,(e=>e.RPL_TAHUN))),j=_.sortBy(_.without(n,_.findWhere(n,{PROVINCE_CODE:"TOTAL"})),(e=>e.PROVINCE_CODE));c.each(j,(function(e,a){return o.push({name:a.PROVINSI,value:Number(a.SK_AKTIF),code:a.PROVINCE_CODE,index:e})}));var U=_.min(o,(e=>e.value)),z=_.max(o,(e=>e.value));if(echarts.registerMap("IDMAP",e),a={animation:!0,tooltip:{trigger:"item",showDelay:.1,transitionDuration:.2,color:"#fff",fontFamily:"Open Sans"},visualMap:{show:!1,left:"left",min:Math.floor(.9*U.value),max:Math.ceil(1.2*z.value),inRange:{color:["#5F95D5","#2A72C7","#286CBD","#2667B3","#2461A9","#225B9F","#205595","#1D508B","#1B4A81","#194477"]},calculable:!0},toolbox:{show:!0,orient:"horizontal",left:"5",bottom:"50",feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},saveAsImage:{show:!0}}},series:[{name:"Jumlah Penerima Prakerja Di Provinsi",type:"map",roam:!0,map:"IDMAP",aspectScale:.925,zoom:1.25,scaleLimit:{min:1.25,max:4},label:{show:!1},itemStyle:{areaColor:"#8DB2DD",color:"rgba(17,46,80,0.75)",borderWidth:.3,borderType:"dashed",borderJoin:"round",borderCap:"round",color:"#fff"},emphasis:{itemStyle:{areaColor:"rgba(240, 94, 0, 1)",color:"#fff",shadowColor:"rgba(0,0,0,0.5)"},label:{color:"rgba(17,46,80,1)",fontFamily:"Open Sans",fontSize:12,backgroundColor:"rgba(255,255,255,.75)"}},data:o}]},d>=992){var V={visualMap:{show:!0,left:"left",min:Math.floor(.9*U.value),max:Math.ceil(1.2*z.value),inRange:{color:["#5F95D5","#2A72C7","#286CBD","#2667B3","#2461A9","#225B9F","#205595","#1D508B","#1B4A81","#194477"]},text:["Maks","Min"],calculable:!0},toolbox:{show:!0,orient:"vertical",left:"5",bottom:"200",feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},saveAsImage:{show:!0}}},series:[{name:"Jumlah Penerima Prakerja Di Provinsi",type:"map",roam:!0,map:"IDMAP",aspectScale:.925,zoom:1.25,scaleLimit:{min:1.25,max:2},labelLayout:{hideoverlap:!0},label:{show:!0,color:"rgba(0,0,0, 0.75)",fontFamily:"Open Sans",fontWeight:500,fontSize:12,overflow:"truncate",height:16,backgroundColor:"rgba(255,255,255,.5)",padding:[6,8],borderRadius:4,distance:100,formatter:e=>e.name+"\n"+s(e.data.value)},itemStyle:{areaColor:"#8DB2DD",color:"rgba(17,46,80,0.75)",borderWidth:.3,borderType:"dashed",borderJoin:"round",borderCap:"round",color:"#fff"},emphasis:{itemStyle:{areaColor:"rgba(240, 94, 0, 1)",color:"#fff",shadowColor:"rgba(0,0,0,0.5)"},label:{color:"rgba(17,46,80,1)",fontFamily:"Open Sans",fontSize:12,backgroundColor:"rgba(255,255,255,.75)"}},data:o}]};a=_.extend(a,V)}p.setOption(a),p.on("click",(function(e){r=e.data;var a=_.isEmpty(r.name)?"":r.name.replace(/\s+/gi,"-").toLowerCase(),o=t+"/provinsi/?nama="+a+"&kode="+r.code;window.location.replace(o,"Statistik Program Prakerja Provinsi"+r.name+" - prakerja.go.id","_self")})),g(l,j),b(E),v(F),A(D),S(N),function(e){var a=document.getElementById("course-provider"),t=echarts.init(a);t.showLoading();var o,r=[];_.each(e,(function(e,a,t){r[a]=e.RPL_TAHUN})),o={color:["#2A72C7","#F05E00","#2491A9"],tooltip:{trigger:"axis"},toolbox:{show:!0,orient:"horizontal",left:"right",bottom:"bottom",feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},saveAsImage:{show:!0}}},legend:{data:["Akumulasi LP","Lembaga Baru","Lembaga Aktif"],selectedMode:!0,orient:"horizontal",bottom:"5",left:"auto"},grid:{left:"10",right:"20",bottom:"30",containLabel:!0,height:"85%"},xAxis:{type:"category",boundaryGap:!1,data:r},yAxis:{type:"value",interval:100,max:600},series:[{name:"Akumulasi LP",type:"line",data:_.pluck(e,"AKUMULASI_LP")},{name:"Lembaga Baru",type:"line",data:_.pluck(e,"NEW_LP")},{name:"Lembaga Aktif",type:"line",data:_.pluck(e,"AKTIF_LP")}]},t.hideLoading(),o&&t.setOption(o)}(h),function(e){var a=document.getElementById("courses"),t=echarts.init(a);t.showLoading();var o,r=[];_.each(e,(function(e,a,t){r[a]=e.RPL_TAHUN})),o={color:["#2A72C7","#F05E00","#2491A9"],tooltip:{trigger:"axis"},toolbox:{show:!0,orient:"horizontal",left:"right",bottom:"bottom",feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},saveAsImage:{show:!0}}},legend:{data:["Akumulasi Pelatihan","Pelatihan Baru","Pelatihan Dengan Transaksi"],selectedMode:!0,orient:"horizontal",bottom:"5",left:"auto"},grid:{left:"10",right:"20",bottom:"30",containLabel:!0,height:"85%"},xAxis:{type:"category",boundaryGap:!1,data:r},yAxis:{type:"value"},series:[{name:"Akumulasi Pelatihan",type:"line",data:_.pluck(e,"AKUMULASI_P")},{name:"Pelatihan Baru",type:"line",data:_.pluck(e,"NEW_P")},{name:"Pelatihan Dengan Transaksi",type:"line",data:_.pluck(e,"TRANS_P")}]},t.hideLoading(),o&&t.setOption(o)}(P),K(L),w(L),y(M),k(R),u(document.getElementById("total-penerima"),0,O.SK_AKTIF,1200)}))}))}if(n){var I=echarts.init(n),B=_.isEmpty(e.get("kode"))?"31":e.get("kode"),x=_.isEmpty(e.get("nama"))?"dki_jakarta":e.get("nama"),O="province_"+B+".json",E=B+".json",F=c("#breadcrumb-detail .bc-list"),D={prov_name:x,prov_id:B},P={title:"Statistik Penerima Di Provinsi "+x.replace(/-/gi," ")+" - prakerja.go.id",description:"Informasi statistik penerima prakerja pada provinsi "+x.replace(/-/gi," ")+" selama periode 2020 - 2024."};I.showLoading(),m(P),c.getJSON("https://static-asset-cdn.prakerja.go.id/geojson_data/provinsi/"+O,(function(e){I.hideLoading();var r=[];c.getJSON(o+E,(function(o){var n=o.pkp.data,i=o.gender.data,s=o.age.data,m=o.education.data,p=o.transaction.data,g=o.top_course_category.data,h=o.top_trx_course_category.data,S=o.emoney_vs_bank.data,x=_.sortBy(i,(e=>e.RPL_TAHUN)),O=_.sortBy(s,(e=>e.RPL_TAHUN)),E=_.sortBy(m,(e=>e.RPL_TAHUN)),P=_.sortBy(p,(e=>e.PERCENTAGE)),N=_.sortBy(g,(e=>e.RNK)),L=(_.sortBy(h,(e=>e.RNK)),_.sortBy(S,(e=>e.RPL_TAHUN))),M=_.sortBy(_.without(n,_.findWhere(n,{PROVINCE_CODE:"TOTAL"})),(e=>e.PROVINCE_CODE)),R=_.findWhere(n,{PROVINCE_CODE:"TOTAL"});c.each(M,(function(e,a){return r.push({name:a.KOTA_KABUPATEN,province_name:a.PROVINSI,value:Number(a.SK),code:a.KOTA_KABUPATEN_ID,province_code:a.PROVINCE_CODE,index:e})}));var j=_.min(r,(e=>e.value)),U=_.max(r,(e=>e.value));if(echarts.registerMap("IDMAP",e),a={animation:!0,tooltip:{trigger:"item",showDelay:.1,transitionDuration:.2,color:"#fff",fontFamily:"Open Sans"},toolbox:{show:!0,orient:"horizontal",left:"10",bottom:"10",feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},saveAsImage:{show:!0}}},visualMap:{show:!1,left:"left",min:Math.floor(.9*j.value),max:Math.ceil(1.1*U.value),inRange:{color:["#558ED2","#4A87CF","#3F80CD","#2A72C7","#286CBD","#2667B3","#2461A9","#225B9F","#205595","#1D508B","#1B4A81","#194477"]},text:["Maks","Min"],calculable:!0},series:[{name:"Jumlah Penerima Prakerja Di Kabupaten/Kota",type:"map",roam:!0,map:"IDMAP",aspectScale:.925,zoom:1.25,scaleLimit:{min:1.25,max:4},itemStyle:{areaColor:"#8DB2DD",borderColor:"#f3f3f3",borderWidth:.3,borderType:"dashed",borderJoin:"round",borderCap:"round",color:"#fff"},label:{show:!0,formatter:e=>e.name.replace(/kabupaten/gi,"").trim(),color:"rgba(0,0,0, 0.75)",fontFamily:"Open Sans",fontSize:10,overflow:"truncate",height:12,backgroundColor:"rgba(255,255,255,.50)",padding:2,borderRadius:4},emphasis:{label:{show:!0},itemStyle:{areaColor:"#f05e00",color:"#fff",shadowColor:"rgba(0,0,0,0.5)"},label:{color:"rgba(17,46,80,1)",fontFamily:"Open Sans",fontSize:12,backgroundColor:"rgba(255,255,255,.75)"}},data:r}]},d>=992){var z={visualMap:{left:"left",min:Math.floor(.9*j.value),max:Math.ceil(1.1*U.value),inRange:{color:["#558ED2","#4A87CF","#3F80CD","#2A72C7","#286CBD","#2667B3","#2461A9","#225B9F","#205595","#1D508B","#1B4A81","#194477"]},text:["Maks","Min"],calculable:!0},toolbox:{show:!0,orient:"vertical",left:"5",bottom:"200",feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},saveAsImage:{show:!0}}},series:[{name:"Jumlah Penerima Prakerja Di Kabupaten/Kota",type:"map",roam:"false",map:"IDMAP",aspectScale:.925,zoom:1.25,itemStyle:{areaColor:"#8DB2DD",borderColor:"#f3f3f3",borderWidth:.3,borderType:"dashed",borderJoin:"round",borderCap:"round",color:"#fff"},label:{show:!0,formatter:e=>e.name.replace(/kabupaten/gi,"").trim(),color:"rgba(0,0,0, 0.75)",fontFamily:"Open Sans",fontSize:12,overflow:"truncate",height:16,backgroundColor:"rgba(255,255,255,.50)",padding:[2,4],borderRadius:4},emphasis:{label:{show:!0},itemStyle:{areaColor:"#f05e00",color:"#fff",shadowColor:"rgba(0,0,0,0.5)"},label:{color:"rgba(17,46,80,1)",fontFamily:"Open Sans",fontSize:12,backgroundColor:"rgba(255,255,255,.75)"}},data:r}]};a=_.extend(a,z),31==B&&_.extend(a.series[0],{layoutCenter:["25%","-55%"],layoutSize:"250%"})}I.setOption(a),I.on("click",(function(e){o=e.data;var a=_.isEmpty(o.name)?"":o.name.replace(/\s+/gi,"-").toLowerCase(),r=_.isEmpty(o.province_name)?"":o.province_name.replace(/\s+/gi,"-").toLowerCase(),n=t+"/kabupaten/?nama="+a+"&kode="+o.code+"&provinsi="+r+"&kode_prov="+o.province_code;window.location.replace(n,"Statistik Program Prakerja Provinsi"+o.name+" - prakerja.go.id","_self")})),f(l,M),b(x),v(O),A(E),K(P),w(P),y(N),k(L),F.append(T(D,"provinsi")),c.getJSON(t+"/js/data/data-statistik.json").done((function(e){var a=_.findWhere(e,{provinsi_id:Number(B)});_.extend(a,{sk_total:R.SK_AKTIF}),C(a,"provinsi")})),u(document.getElementById("total-penerima"),0,R.SK_AKTIF,1200)}))}))}if(i){var N=echarts.init(i),L=_.isEmpty(e.get("kode_prov"))?"31":e.get("kode_prov"),M=_.isEmpty(e.get("provinsi"))?"dki_jakarta":e.get("provinsi"),R=_.isEmpty(e.get("kode"))?"157":e.get("kode"),j=_.isEmpty(e.get("nama"))?"kota-adm.-jakarta-timur":e.get("nama"),U=(O="city_"+L+".geojson",R+".json");E=L+".json",F=c("#breadcrumb-detail .bc-list"),D={kab_name:j,kab_id:R,prov_name:M,prov_id:L};N.showLoading(),m(P={title:"Statistik Penerima Di "+j.replace(/-/gi," ")+" - prakerja.go.id",description:"Informasi statistik penerima prakerja pada "+j.replace(/-/gi," ")+" selama periode 2020 - 2024."}),c.getJSON(t+"/js/map/province/"+O,(function(e){N.hideLoading();var r=[];c.getJSON("https://static-asset-cdn.prakerja.go.id/data-demografi/kota_kab/"+U,(function(n){c.getJSON(o+E,(function(o){var i=o.pkp.data,s=n.pkp.data,m=n.gender.data,p=n.age.data,g=n.education.data,f=n.transaction.data,S=n.top_course_category.data,I=n.top_trx_course_category.data,B=n.emoney_vs_bank.data,x=_.sortBy(m,(e=>e.RPL_TAHUN)),O=_.sortBy(p,(e=>e.RPL_TAHUN)),E=_.sortBy(g,(e=>e.RPL_TAHUN)),P=_.sortBy(f,(e=>e.PERCENTAGE)),M=_.sortBy(S,(e=>e.RNK)),U=(_.sortBy(I,(e=>e.RNK)),_.sortBy(B,(e=>e.RPL_TAHUN))),z=_.sortBy(_.without(s,_.findWhere(s,{PROVINCE_CODE:"TOTAL"})),(e=>e.KECAMATAN_ID)),V=_.findWhere(s,{PROVINCE_CODE:"TOTAL"});c.each(i,(function(e,a){return r.push({name:a.KOTA_KABUPATEN,province_name:a.PROVINSI,value:R===a.KOTA_KABUPATEN_ID?a.SK:"-",code:a.KOTA_KABUPATEN_ID,province_code:a.PROVINCE_CODE,index:e})}));var $={type:"FeatureCollection",features:_.filter(e.features,(e=>e.properties.id==R))};echarts.registerMap("IDMAP",$);var W=_.min(r,(e=>e.value)),H=_.max(r,(e=>e.value));if(a={animation:!0,tooltip:{trigger:"item",showDelay:.1,transitionDuration:.2,color:"#fff",fontFamily:"Open Sans"},visualMap:{show:!1,inRange:{color:["#558ED2","#4A87CF","#3F80CD","#2A72C7","#286CBD","#2667B3","#225B9F","#7FAADD","#1D508B","#7FAADD","#1B4A81","#194477"]},calculable:!0},toolbox:{show:!0,orient:"vertical",left:"0",bottom:"10",feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},saveAsImage:{show:!0}}},series:[{name:"Jumlah Penerima Prakerja Di Kabupaten/Kota",type:"map",roam:!0,map:"IDMAP",aspectScale:.925,zoom:1.25,scaleLimit:{min:1.25,max:4},itemStyle:{areaColor:"#8DB2DD",borderColor:"#f3f3f3",borderWidth:.3,borderType:"dashed",borderJoin:"round",borderCap:"round",color:"#fff"},label:{show:!0,formatter:e=>e.name.replace(/kabupaten/gi,"").trim(),color:"rgba(0,0,0, 0.75)",fontFamily:"Open Sans",fontSize:10,overflow:"truncate",height:12,backgroundColor:"rgba(255,255,255,.5)",padding:2,borderRadius:2},emphasis:{label:{show:!0},itemStyle:{areaColor:"#f05e00",color:"#fff",shadowColor:"rgba(0,0,0,0.5)"},label:{color:"rgba(17,46,80,1)",fontFamily:"Open Sans",fontSize:12,backgroundColor:"rgba(255,255,255,.75)",padding:[2,3],borderRadius:4}},data:r}]},31==L&&_.extend(a.series[0],{layoutCenter:["25%","-55%"],layoutSize:"250%"}),d>=992){var J={visualMap:{left:"left",min:Math.floor(.9*W.value),max:Math.ceil(1.1*H.value),inRange:{color:["#558ED2","#4A87CF","#3F80CD","#2A72C7","#286CBD","#2667B3","#2461A9","#225B9F","#205595","#1D508B","#1B4A81","#194477"]},text:["Maks","Min"],calculable:!0},toolbox:{show:!0,orient:"vertical",left:"5",bottom:"200",feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},saveAsImage:{show:!0}}},series:[{name:"Jumlah Penerima Prakerja Di Kabupaten/Kota",type:"map",roam:"false",map:"IDMAP",aspectScale:.925,zoom:1.25,itemStyle:{areaColor:"#8DB2DD",borderColor:"#f3f3f3",borderWidth:.3,borderType:"dashed",borderJoin:"round",borderCap:"round",color:"#fff"},label:{show:!0,formatter:e=>e.name.replace(/kabupaten/gi,"").trim(),color:"rgba(0,0,0, 0.75)",fontFamily:"Open Sans",fontSize:12,overflow:"truncate",height:16,backgroundColor:"rgba(255,255,255,.50)",padding:[2,4],borderRadius:4},emphasis:{label:{show:!0},itemStyle:{areaColor:"#f05e00",color:"#fff",shadowColor:"rgba(0,0,0,0.5)"},label:{color:"rgba(17,46,80,1)",fontFamily:"Open Sans",fontSize:12,backgroundColor:"rgba(255,255,255,.75)"}},data:r}]};a=_.extend(a,J)}N.setOption(a),N.on("click",(function(e){var a=e.data,o=_.isEmpty(e.name)?"":e.name.replace(/\s+/gi,"-").toLowerCase(),r=_.isEmpty(a.province_name)?"":a.province_name.replace(/\s+/gi,"-").toLowerCase(),n=t+"/kabupaten/?nama="+o+"&kode="+a.code+"&provinsi="+r+"&kode_prov="+a.province_code;window.location.replace(n,"Statistik Program Prakerja Provinsi"+e.name+" - prakerja.go.id","_self")})),h(l,z),b(x),v(O),A(E),K(P),w(P),y(M),k(U),F.append(T(D,"kabupaten")),c.getJSON(t+"/js/data/data-statistik.json").done((function(e){var a=_.findWhere(e,{provinsi_id:Number(L)});_.extend(a,{city_name:j.replace(/-/gi," "),sk_total:V.SK_AKTIF}),C(a,"kabupaten")})),u(document.getElementById("total-penerima"),0,V.SK_AKTIF,1200)}))}))}))}c(window).scroll((function(){var e=c(window).scrollTop();e>=60?c("header").addClass("header-fixed"):c("header").removeClass("header-fixed"),e>=214?c(".search-boxy").addClass("is-fixed"):c(".search-boxy").removeClass("is-fixed"),e>=400?c(".scroll-top").addClass("is-show"):c(".scroll-top").removeClass("is-show")})),c(".scroll-top").on("click",(function(){c(window).scrollTop(0)})),c(".menu").click((function(){c(this).toggleClass("open"),c(".navbar-custom").toggleClass("m-menu"),c("body").toggleClass("freeze")})),c(".nav-link, .nav-cta").on("click",(function(e){c(".menu").removeClass("open"),c(".navbar-custom").removeClass("m-menu"),c("body").removeClass("freeze")})),c(".testimony-carousel").owlCarousel({loop:!0,autoplay:!0,center:!1,dots:!1,responsive:{1e3:{items:1.5,margin:0},756:{items:2,margin:0},0:{items:1,margin:0}}})}(jQuery);
//# sourceMappingURL=function-min.js.map