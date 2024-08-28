/** init function map penerima */
/**
 * TODO LIST
 * 1. MAP UNTUK SETIAP PROVINSI PAKE LINK DAN REDIRECT KE PROVINSI
 * 2. LINK UNTUK KE DETAIL PROVINSI
 * 3. SPESIFIK STATISTIK 
 */

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = numberWithCommas(Math.floor(progress * (end - start) + start));
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

(function($){
    const ROOT_PATH_LOCAL = 'http://localhost:8848';
    const ROOT_PATH = 'https://statistik-penerima.prakerja.go.id';
    const DATA_INDO_ALL = 'https://public-prakerja.oss-ap-southeast-5.aliyuncs.com/data-demografi/provinsi/INDONESIA.json';
    const MAP_HOME = document.getElementById('maps-indonesia');
    const MAP_DETAIL = document.getElementById('maps-province');
    var option;

    if(MAP_HOME) {
        var HomeChart = echarts.init(MAP_HOME);
        HomeChart.showLoading();

        $.getJSON(ROOT_PATH + '/js/map/IDN_FN.json', function (idMapJson) {
            HomeChart.hideLoading();
            var IDDATA = [];

            $.getJSON(DATA_INDO_ALL, function(data) {
                $.each(data, function(i,val) {
                    return IDDATA.push({
                        name : val.PROVINSI,
                        value : val.SK,
                        code: val.PROVINCE_CODE
                    });
                });

                echarts.registerMap('IDMAP', idMapJson);

                option = {
                    animation: true,
                    tooltip: {
                        trigger: 'item',
                        showDelay: 0.1,
                        transitionDuration: 0.2,
                        color: '#fff',
                        fontFamily: 'Poppins'
                    },
                    visualMap: {
                        left: 'left',
                        min: 100,
                        max: 4000000,
                        inRange: {
                            color: [
                                '#2a72c7',
                                '#2461a9',
                                '#1d508b',
                                '#173f6d',
                                '#112e50'
                            ]
                        },
                        text: ['Banyak', 'Sedikit'],
                        calculable: true
                    },
                    toolbox: {
                        show: true,
                        orient: 'vertical',
                        left: 'left',
                        top: 'top'
                    },
                    series: [
                        {
                            name: 'Jumlah Penerima Prakerja Di Provinsi',
                            type: 'map',
                            roam: 'false', // option : false, scale, move
                            map: 'IDMAP',
                            aspectScale : 0.925, //ngerubah size mapnya (skew)
                            zoom: 1.25, //zoom in / out map
                            // scaleLimit: {
                            //     min: 0.5,
                            //     max: 1.5
                            // },
                            itemStyle : {
                                areaColor: '#8DB2DD',
                                borderColor: '#273545',
                                borderWidth: 0.3,
                                borderType: 'dashed',
                                borderJoin: 'round',
                                borderCap: 'round',
                                color: '#fff'
                            },
                            emphasis: {
                                label: {
                                    show: true
                                },
                                itemStyle: {
                                    areaColor: '#f05e00',
                                    color: '#fff',
                                    shadowColor: 'rgba(0,0,0,0.5)',
                                    shadowOffsetX: 1,
                                    shadowOffsetY: 0.9
                                },
                                label: {
                                    color: '#000',
                                    fontFamily: 'Poppins',
                                    fontSize: 12,
                                    textShadowColor: '#eee',
                                    textBorderType: 'solid',
                                    shadowColor: '#fff'
                                }
                            },
                            data: IDDATA
                        }
                    ]
                };
                HomeChart.setOption(option);
                HomeChart.on('click', function(params) {
                    data = params.data
                    var provinsi_name = !_.isEmpty(data.name) ? data.name.replace(/\s+/gi, '-').toLowerCase() : '';
                    var link =  ROOT_PATH +'/provinsi/?nama='+ provinsi_name +'&kode=' + data.code;
                    window.open(link, 'Statistik Program Prakerja Provinsi'+ data.name +' - prakerja.go.id');
                });
            });
        });

        $.getJSON(DATA_INDO_ALL, function (data) {
            var dataTable = _.sortBy(_.without(data, _.findWhere(data, {
                PROVINCE_CODE: 'TOTAL'
              })), function(o) { return o.PROVINCE_CODE; })

            var dataTotal = _.findWhere(data, {
                PROVINCE_CODE: 'TOTAL'
              });

            $('#tablePersebaran').DataTable( {
                searching: false,
                bLengthChange: false,
                data : dataTable,
                order: [[11, 'asc']],
                columns: [
                    { data: 'PROVINSI', 
                        render: function (data, type, row, meta) {
                            var provinsi_name = !_.isEmpty(data) ? data.replace(/\s+/gi, '-').toLowerCase() : '';
                            var link =  ROOT_PATH +'/provinsi/?nama='+ provinsi_name +'&kode=' + row.PROVINCE_CODE;
                            return '<a href="' + link +'" target="_blank">'+ data +'</a>';
                        }
                    },
                    {data: 'SK_2020'},
                    {data: 'SK_2020_AKTIF'},
                    {data: 'SK_2021'},
                    {data: 'SK_2021_AKTIF'},
                    {data: 'SK_2022'},
                    {data: 'SK_2022_AKTIF'},
                    {data: 'SK_2023'},
                    {data: 'SK_2023_AKTIF'},
                    {data: 'SK_2024'},
                    {data: 'SK_2024_AKTIF'},
                    {data: 'PROVINCE_CODE', render: ''}
                ],
                columnDefs: [{
                    targets: -1,
                    defaultContent: "-",
                    targets: "_all",
                    render: $.fn.dataTable.render.number('.', ',', 0, '')
                },{
                    target: 0,
                    className: 'dt-body-left'
                },
                {
                    target: 11,
                    visible: false,
                    searchable: false
                }],
                layout: {
                    bottomEnd: {
                        paging: {
                            firstLast: false
                        }
                    }
                },
                fnRowCallback: function(nRow, aData, iDisplayIndex, iDisplayIndexFull) {
                  if (aData[1] > 5) {
                    $('td', nRow).css('background-color', 'Red');
                  } else if (aData[1] <= 4) {
                    $('td', nRow).css('background-color', 'Orange');
                  }
                }
            });

            var chartDomGen = document.getElementById('gender');
            var chartGen = echarts.init(chartDomGen);
            var chartDomAge = document.getElementById('age');
            var chartAge = echarts.init(chartDomAge);
            var chartDomEdu = document.getElementById('lastEdu');
            var chartLastEdu = echarts.init(chartDomEdu);
            var optionGender, optionAge, optionLastEdu;
            

            // There should not be negative values in rawData
            const rawDataGender = [
                [dataTotal.SK_2020_L, dataTotal.SK_2021_L, dataTotal.SK_2022_L, dataTotal.SK_2023_L, dataTotal.SK_2024_L],
                [dataTotal.SK_2020_P, dataTotal.SK_2021_P, dataTotal.SK_2022_P, dataTotal.SK_2023_P, dataTotal.SK_2024_P]
            ];
            const rawDataAge = [
                [dataTotal.SK_2020_L, dataTotal.SK_2021_L, dataTotal.SK_2022_L, dataTotal.SK_2023_L, dataTotal.SK_2024_L],
                [dataTotal.SK_2020_P, dataTotal.SK_2021_P, dataTotal.SK_2022_P, dataTotal.SK_2023_P, dataTotal.SK_2024_P]
            ];

            const rawDataEdu = [
                [dataTotal.SK_2020_L, dataTotal.SK_2021_L, dataTotal.SK_2022_L, dataTotal.SK_2023_L, dataTotal.SK_2024_L],
                [dataTotal.SK_2020_P, dataTotal.SK_2021_P, dataTotal.SK_2022_P, dataTotal.SK_2023_P, dataTotal.SK_2024_P]
            ];

            const series = [
                'Laki-Laki',
                'Perempuan'
            ].map((name, sid) => {
                return {
                    name,
                    type: 'bar',
                    stack: 'total',
                    barWidth: '90%',
                    label: {
                        show: true,
                        color : '#fff',
                        formatter: function(d) { return d.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                    },
                    itemStyle : {
                        borderWidth: 0.3,
                        borderType: 'dashed'
                    },
                    data: rawDataGender[sid]
                };
            });

            const basics = {
                color: ["#2462A8", "#F06000"],
                legend: {
                    selectedMode: true,
                    orient: 'horizontal',
                    bottom: '5',
                    left: 'auto'
                },
                grid: {
                    left: 70,
                    right: 10,
                    top: 10,
                    bottom: 50
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        formatter: val => `${val / 1000000} Juta`
                    }
                },
                xAxis: {
                    type: 'category',
                    data: ['2020','2021','2022','2023','2024']
                },
                tooltip: {
                    trigger: 'item',
                    showDelay: 0.1,
                    transitionDuration: 0.2,
                    color: '#fff',
                    fontFamily: 'Poppins'
                }
            }

            optionGender = _.extend({series},basics);

            // optionGender = _.extendOwn(optionGender, series)

            // optionGender.assign(optionGender, basics)

            
            optionGender && chartGen.setOption(optionGender);
            // optionAge && chartGen.setOption(optionAge);
            // optionLastEdu && chartGen.setOption(optionLastEdu);
        });

        // counter animatons

        const obj = document.getElementById("total-penerima");
        animateValue(obj, 0, 18887737, 1200);
    }

    if(MAP_DETAIL) {
        var DetailChart = echarts.init(MAP_DETAIL);
        DetailChart.showLoading();

        $.getJSON(ROOT_PATH + '/js/map/province/31_dki_jakarta.json', function (provinceMapJson) {
            DetailChart.hideLoading();
            var DetailDATA = [];
            // console.log(DetailDATA)

            $.getJSON(ROOT_PATH + '/js/data/province/31_dki_jakarta.json', function(data) {
                $.each(data, function(i,val) {
                    return IDDATA.push({
                        name : val.name,
                        value : val.all_year
                    });
                    
                });
                var dataMin = _.min(data, (item) => item.all_year);
                var dataMax = _.max(data, (item) => item.all_year)

                echarts.registerMap('IDMAP', provinceMapJson);

                option = {
                    animation: true,
                    tooltip: {
                        trigger: 'item',
                        showDelay: 0.1,
                        transitionDuration: 0.2,
                        color: '#fff',
                        fontFamily: 'Poppins'
                    },
                    visualMap: {
                        left: 'left',
                        min: dataMin.all_year,
                        max: dataMax.all_year,
                        inRange: {
                            color: [
                                '#2a72c7',
                                '#2461a9',
                                '#1d508b',
                                '#173f6d',
                                '#112e50'
                            ]
                        },
                        text: ['Banyak', 'Sedikit'],
                        calculable: true
                    },
                    toolbox: {
                        show: true,
                        orient: 'vertical',
                        left: 'left',
                        top: 'top'
                    },
                    series: [
                        {
                            name: 'Jumlah Penerima Prakerja Di Provinsi',
                            type: 'map',
                            roam: 'move', // option : false, scale, move
                            map: 'IDMAP',
                            aspectScale : 0.925, //ngerubah size mapnya (skew)
                            zoom: 4, //zoom in / out map,
                            layoutCenter: ['100%', '100%'],
                            // scaleLimit: {
                            //     min: 0.5,
                            //     max: 1.5
                            // },a
                            itemStyle : {
                                areaColor: '#8DB2DD',
                                borderColor: '#273545',
                                borderWidth: 0.3,
                                borderType: 'dashed',
                                borderJoin: 'round',
                                borderCap: 'round',
                                color: '#fff'
                            },
                            emphasis: {
                                label: {
                                    show: true
                                },
                                itemStyle: {
                                    areaColor: '#f05e00',
                                    color: '#fff',
                                    shadowColor: 'rgba(0,0,0,0.5)',
                                    shadowOffsetX: 1,
                                    shadowOffsetY: 0.9
                                },
                                label: {
                                    color: '#000',
                                    fontFamily: 'Poppins',
                                    fontSize: 12,
                                    textShadowColor: '#eee',
                                    textBorderType: 'solid',
                                    shadowColor: '#fff'
                                }
                            },
                            data: DetailDATA
                        }
                    ]
                };
                DetailChart.setOption(option);
            });
        });
    }
    

    // scroll function
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 60) {
            $('header').addClass("header-fixed");
        } else {
            $('header').removeClass("header-fixed");
        }

        // for search trigger at page pelatihan
        if (scroll >= 214) {
            $('.search-boxy').addClass("is-fixed");
        } else {
            $('.search-boxy').removeClass("is-fixed");
        }

        // for scroll-top trigger
        if (scroll >= 400) {
            $('.scroll-top').addClass("is-show");
        } else {
            $('.scroll-top').removeClass("is-show");
        }
    });


    // Scroll to top 
    $(".scroll-top").on("click", function() {
        $(window).scrollTop(0);
    });

    // Menu toggle
    $('.menu').click (function(){
        $(this).toggleClass('open');
        $('.navbar-custom').toggleClass('m-menu');
        $('body').toggleClass('freeze');
      });

    //   $(".navbar-custom").on("click", ".nav-link", function(event){
    //     $('.menu').removeClass('open');
    //     $('.navbar-custom').removeClass('m-menu');
    //     $('body').removeClass('freeze');
      $(".nav-link, .nav-cta").on("click", function(event){
        $('.menu').removeClass('open');
        $('.navbar-custom').removeClass('m-menu');
        $('body').removeClass('freeze');
    });

    $('.testimony-carousel').owlCarousel({
      loop:true,
      // margin:24,
      autoplay: true,
      center: false,
      dots: false,
      // lazyLoad:true,
      responsive:{
          1000:{
              items:1.5,
              margin: 0
          },
          756:{
              items:2,
              margin: 0
          },
          0:{
              items:1,
              margin: 0
          }
      }
  });

// new DataTable('#tablePersebaran');


})(jQuery);


