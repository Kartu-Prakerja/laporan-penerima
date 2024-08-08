/** init function map penerima */
(function($){
    const ROOT_PATH = 'http://localhost:8848';
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
            echarts.registerMap('IDMAP', idMapJson, {
              Alaska: {
                left: -131,
                top: 25,
                width: 15
              },
              Hawaii: {
                left: -110,
                top: 28,
                width: 5
              },
              'Puerto Rico': {
                left: -76,
                top: 26,
                width: 2
              }
            });
            option = {
              title: {
                text: 'Data Penerima Manfaat',
                left: 'right'
              },
              tooltip: {
                trigger: 'item',
                showDelay: 0,
                transitionDuration: 0.2
              },
              visualMap: {
                left: 'right',
                min: 500000,
                max: 38000000,
                inRange: {
                  color: [
                    '#313695',
                    '#4575b4',
                    '#74add1',
                    '#abd9e9',
                    '#e0f3f8',
                    '#ffffbf',
                    '#fee090',
                    '#fdae61',
                    '#f46d43',
                    '#d73027',
                    '#a50026'
                  ]
                },
                // text: ['High', 'Low'],
                // calculable: true
              },
              toolbox: {
                show: true,
                //orient: 'vertical',
                left: 'left',
                top: 'top'
              },
              series: [
                {
                  name: 'Daftar Penerima Di Provinsi',
                  type: 'map',
                  roam: true,
                  map: 'IDMAP',
                  emphasis: {
                    label: {
                      show: true
                    }
                  },
                  data: [
                    { "name": 'Sulawesi Tengah', value: 4822023 },
                    { "name": 'Sumatera Barat', value: 4822023 }
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