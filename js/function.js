/** init function map penerima */
(function($){
    const ROOT_PATH = 'https://statistik-penerima.prakerja.go.id';
    const MAP_HOME = document.getElementById('maps-indonesia');
    var option;

    // const OPTION_HOME = {
    //     geo : {
    //         center : [6.1750, 106.8283],
    //         roam : true,
    //         silent : true, 
    //         map : 'indonesia',
    //         name : 'Peta Pesebaran Prakerja 2020 - 2024',
    //         zoom : 1,
    //         regions: [{
    //             name: 'Guangdong',
    //             itemStyle: {
    //                 areaColor: 'red',
    //                 color: 'red'
    //             }
    //         }]
    //     }
    // }
    // Initialize the echarts instance based on the prepared dom
    if(typeof(MAP_HOME) !== undefined) {
        var myChart = echarts.init(MAP_HOME);
        myChart.showLoading();

        $.getJSON(ROOT_PATH + '/js/map/IDN_FN.json', function (idMapJson) {
            myChart.hideLoading();
            var IDDATA = [];

            $.getJSON(ROOT_PATH + '/js/data/indonesia-all.json', function(data) {
                $.each(data.data, function(i,val) {
                    return IDDATA.push({
                        name : val.name,
                        value : val.value
                    });
                });
            });
            echarts.registerMap('IDMAP', idMapJson);
            option = {
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
                    text: ['Paling Banyak', 'Paling Sedikit'],
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
                    roam: false,
                    map: 'IDMAP',
                    aspectScale : 0.925, //ngerubah size mapnya (skew)
                    zoom: 1.25, //zoom in / out map
                    itemStyle : {
                        areaColor: '#8DB2DD',
                        borderColor: '#273545',
                        borderWidth: 0.3,
                        borderJoin: 'round',
                        borderCap: 'round'
                    },
                    emphasis: {
                        label: {
                            show: true
                        },
                        itemStyle: {
                            areaColor: '#F05E00'
                        }
                    },
                    data: [
                        {name : "Aceh",value : 506946},
                        {name: "Sumatera Utara", value: 997481},
                        {name: "Sumatera Barat", value: 526117},
                        {name: "Riau", value: 515831},
                        {name: "Jambi", value: 371322},
                        {name: "Sumatera Selatan", value: 623066},
                        {name: "Bengkulu", value: 279336},
                        {name: "Lampung", value: 616955},
                        {name: "Kep. Bangka Belitung", value: 218800},
                        {name: "Kepulauan Riau", value: 287945},
                        {name: "DKI Jakarta", value: 1361146},
                        {name: "Jawa Barat", value: 3208806},
                        {name: "Jawa Tengah", value: 1903230},
                        {name: "Daerah Istimewa Yogyakarta", value: 329553},
                        {name: "Jawa Timur", value: 2196068},
                        {name: "Banten", value: 983393},
                        {name: "Bali", value: 348285},
                        {name: "Nusa Tenggara Barat", value: 420167},
                        {name: "Nusa Tenggara Timur", value: 299240},
                        {name: "Kalimantan Barat", value: 429619},
                        {name: "Kalimantan Tengah", value: 279137},
                        {name: "Kalimantan Selatan", value: 454637},
                        {name: "Kalimantan Timur", value: 361582},
                        {name: "Kalimantan Utara", value: 93090},
                        {name: "Sulawesi Utara", value: 246280},
                        {name: "Sulawesi Tengah", value: 284281},
                        {name: "Sulawesi Selatan", value: 699101},
                        {name: "Sulawesi Tenggara", value: 283316},
                        {name: "Gorontalo", value: 171964},
                        {name: "Sulawesi Barat", value: 197329},
                        {name: "Maluku", value: 174577},
                        {name: "Maluku Utara", value: 94256},
                        {name: "Papua", value: 56685},
                        {name: "Papua Barat", value: 45771},
                        {name: "Papua Selatan", value: 500},
                        {name: "Papua Tengah", value: 1096},
                        {name: "Papua Pegunungan", value: 71},
                        {name: "Papua Barat Daya", value: 609}
                    ]
                    }
                ]
            };
            myChart.setOption(option);
          });
          
        // option && myChart.setOption(option);
    }

    // Display the chart using the configuration items and data just specified.
    // myChart.setOption(option);
})(jQuery);