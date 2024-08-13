/** init function map penerima */

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
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

(function($){
    const ROOT_PATH = 'https://statistik-penerima.prakerja.go.id';
    const MAP_HOME = document.getElementById('maps-indonesia');
    var option;

    if(typeof(MAP_HOME) !== undefined) {
        var myChart = echarts.init(MAP_HOME);
        myChart.showLoading();

        $.getJSON(ROOT_PATH + '/js/map/IDN_FN.json', function (idMapJson) {
            myChart.hideLoading();
            var IDDATA = [];
            // console.log(IDDATA)

            $.getJSON(ROOT_PATH + '/js/data/indonesia-all.json', function(data) {
                $.each(data, function(i,val) {
                    return IDDATA.push({
                        name : val.name,
                        value : val.value
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
                myChart.setOption(option);
                myChart.on('click', function(params) {
                    window.open(
                        'https://www.google.com/search?q=' + encodeURIComponent(params.name)
                    );
                });
            });
        });

        // counter animatons

        const obj = document.getElementById("total-penerima");
        animateValue(obj, 0, 18887737, 1500);

    }
})(jQuery);