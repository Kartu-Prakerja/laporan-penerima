/** init function map penerima */
/**
 * TODO LIST
 * 1. MAP UNTUK SETIAP PROVINSI PAKE LINK DAN REDIRECT KE PROVINSI
 * 2. LINK UNTUK KE DETAIL PROVINSI
 * 3. SPESIFIK STATISTIK 
 */

var ROOT_PATH_LOCAL = 'http://localhost:8848';
var ROOT_PATH = 'https://statistik-penerima.prakerja.go.id';
var DATA_INDO_ALL = 'https://public-prakerja.oss-ap-southeast-5.aliyuncs.com/data-demografi/indonesia/indonesia.json';
var MAP_HOME = document.getElementById('maps-indonesia');
var AUTOCOMPLETE_SEARCH = document.getElementById('autocomplate');
var MAP_DETAIL = document.getElementById('maps-province');
var tProvince = $('#tablePersebaran');
var option;

const autoCompleteJS = new autoComplete({
    selector: "#autoComplete",
    placeHolder: "Search for Food...",
    data: {
        src: ["Sauce - Thousand Island", "Wild Boar - Tenderloin", "Goat - Whole Cut"],
        cache: true,
    },
    resultsList: {
        element: (list, data) => {
            if (!data.results.length) {
                // Create "No Results" message element
                const message = document.createElement("div");
                // Add class to the created element
                message.setAttribute("class", "no_result");
                // Add message text content
                message.innerHTML = `<span>Found No Results for "${data.query}"</span>`;
                // Append message element to the results list
                list.prepend(message);
            }
        },
        noResults: true,
    },
    resultItem: {
        highlight: true
    },
    events: {
        input: {
            selection: (event) => {
                const selection = event.detail.selection.value;
                autoCompleteJS.input.value = selection;
            }
        }
    }
});

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  var step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    var progress = Math.min((timestamp - startTimestamp) / duration, 1);
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

/**
 * TABLE PROVINCE INIT
 */
function tableProvince(target, dataTable) {
    $(target).DataTable( {
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
}

/**
 * GENDER CHART
 */ 
function genderChart(data){
    var chartDomGen = document.getElementById('gender');
    var chartGen = echarts.init(chartDomGen);
    var optionGender, optionYear = [];

    _.each(data, function(value, key, list) {return optionYear[key] = value.RPL_TAHUN} )

    // There should not be negative values in rawData
    var rawDataGender = [
        _.pluck(data, 'SK_L'),
        _.pluck(data, 'SK_P')
    ];

    var totalData = [];
    for (let i = 0; i < rawDataGender[0].length; ++i) {
        let sum = 0;
    for (let j = 0; j < rawDataGender.length; ++j) {
        sum += rawDataGender[j][i];
    }
        totalData.push(sum);
    }
    
    var series = [
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
                formatter : val => Math.floor(val.data*100) +'%'
            },
            itemStyle : {
                borderWidth: 0.3,
                borderType: 'dashed'
            },
            data: rawDataGender[sid].map((d, did) => totalData[did] <= 0 ? 0 : d / totalData[did] ),
            tooltip: {
                formatter : val => '<b>' + val.seriesName + '</b><br/><br/><span style="margin-right: 20px">' + val.name + '</span>' + (Math.floor(val.data*totalData[val.dataIndex])).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
            }
        };
    });

    var basics = {
        color: ["#2462A8", "#F06000"],
        legend: {
            selectedMode: true,
            orient: 'horizontal',
            bottom: '5',
            left: 'auto'
        },
        grid: {
            left: 50,
            right: 10,
            top: 10,
            bottom: 50
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: val => `${val * 100} %`
            }
        },
        xAxis: {
            type: 'category',
            data: optionYear
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

    optionGender && chartGen.setOption(optionGender);
}

/**
 * Age CHART
 */ 
function ageChart(data){
    var chartDomAge = document.getElementById('age');
    var chartAge = echarts.init(chartDomAge);
    var optionAge, optionYear = [];

    _.each(data, function(value, key, list) {return optionYear[key] = value.RPL_TAHUN} )

    // There should not be negative values in rawData
    var rawDatAge = [
        _.pluck(data, 'SK_18_25'),
        _.pluck(data, 'SK_26_35'),
        _.pluck(data, 'SK_36_45'),
        _.pluck(data, 'SK_46_55'),
        _.pluck(data, 'SK_56_KEATAS'),
    ];

    var totalData = [];
    for (let i = 0; i < rawDatAge[0].length; ++i) {
        let sum = 0;
    for (let j = 0; j < rawDatAge.length; ++j) {
        sum += rawDatAge[j][i];
    }
        totalData.push(sum);
    }
    
    var series = [
        '18-25',
        '26-35',
        '36-45',
        '46-55',
        '56-64',
    ].map((name, sid) => {
        return {
            name,
            type: 'bar',
            stack: 'total',
            barWidth: '90%',
            label: {
                show: true,
                color : '#fff',
                formatter : val => Math.floor(val.data*100) +'%'
            },
            itemStyle : {
                borderWidth: 0.3,
                borderType: 'dashed'
            },
            data: rawDatAge[sid].map((d, did) => totalData[did] <= 0 ? 0 : d / totalData[did] ),
            tooltip: {
                formatter : val => '<b>' + val.seriesName + '</b><br/><br/><span style="margin-right: 20px">' + val.name + '</span>' + (Math.floor(val.data*totalData[val.dataIndex])).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
            }
        };
    });

    var basics = {
        color: ["#173F6D", "#2AA9C6", "#F4BB01", '#F06000', '#2A73C6'],
        legend: {
            selectedMode: true,
            orient: 'horizontal',
            bottom: '5',
            left: 'auto'
        },
        grid: {
            left: 50,
            right: 10,
            top: 10,
            bottom: 50
        },
        yAxis: {
            type: 'value',
            max: 1,
            axisLabel: {
                formatter: val => `${val * 100} %`
            }
        },
        xAxis: {
            type: 'category',
            data: optionYear
        },
        tooltip: {
            trigger: 'item',
            showDelay: 0.1,
            transitionDuration: 0.2,
            color: '#fff',
            fontFamily: 'Poppins'
        }
    }

    optionAge = _.extend({series},basics);

    optionAge && chartAge.setOption(optionAge);
}

/**
 * LP CHART
 */ 
function courseProviderChart(data) {
    var chartDom = document.getElementById('course-provider');
    var LPChart = echarts.init(chartDom);
    LPChart.showLoading();
    var optLP, optionYear = [], seriesData = [];

    _.each(data, function(value, key, list) {
        optionYear[key] = value.RPL_TAHUN
    });

    optLP = {
        color: ["#2A72C7", "#F05E00", '#2491A9'],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['Akumulasi LP', 'Lembaga Baru', 'Lembaga Aktif'],
            selectedMode: true,
            orient: 'horizontal',
            bottom: '5',
            left: 'auto'
        },
        grid: {
            left: '10',
            right: '10',
            bottom: '30',
            containLabel: true,
            height: '85%'
          },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: optionYear
        },
        yAxis: {
            type: 'value',
            interval: 100,
            max: 600
        },
        series:  [
            {
                name: 'Akumulasi LP',
                type: 'line',
                data: _.pluck(data, 'AKUMULASI_LP')
            },
            {
                name: 'Lembaga Baru',
                type: 'line',
                data: _.pluck(data, 'NEW_LP')
            },
            {
                name: 'Lembaga Aktif',
                type: 'line',
                data: _.pluck(data, 'AKTIF_LP')
            }
        ]
    };

    LPChart.hideLoading();
    optLP && LPChart.setOption(optLP);
}

/**
 * COURSE CHART
 */ 
function courseChart(data) {
    var chartDom = document.getElementById('courses');
    var CChart = echarts.init(chartDom);
    CChart.showLoading();
    var optC, optionYear = [];

    _.each(data, function(value, key, list) {
        optionYear[key] = value.RPL_TAHUN
    });

    optC = {
        color: ["#2A72C7", "#F05E00", '#2491A9'],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['Akumulasi Pelatihan', 'Pelatihan Baru', 'Pelatihan Dengan Transaksi'],
            selectedMode: true,
            orient: 'horizontal',
            bottom: '5',
            left: 'auto'
        },
        grid: {
            left: '10',
            right: '10',
            bottom: '30',
            containLabel: true,
            height: '85%'
          },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: optionYear
        },
        yAxis: {
            type: 'value'
        },
        series:  [
            {
                name: 'Akumulasi Pelatihan',
                type: 'line',
                data: _.pluck(data, 'AKUMULASI_P')
            },
            {
                name: 'Pelatihan Baru',
                type: 'line',
                data: _.pluck(data, 'NEW_P')
            },
            {
                name: 'Pelatihan Dengan Transaksi',
                type: 'line',
                data: _.pluck(data, 'TRANS_P')
            }
        ]
    };

    CChart.hideLoading();
    optC && CChart.setOption(optC);
}

function renderInclusive(data) {
    var targetPMI = $('.pmi');
    var targetDesil = $('.desil');
    var targetDifabel = $('.difabel');
    var targetVilage = $('.vilage');

    targetPMI.html(data.pmi + ' %');
    targetDesil.html(data.desil + ' %')
    targetDifabel.html(data.difabel + ' %')
    targetVilage.html(data.vilage + ' %')
}

/**
 * lastEdu CHART
 */ 
function lastEduChart(data){
    var chartDomlastEdu = document.getElementById('lastEdu');
    var chartlastEdu = echarts.init(chartDomlastEdu);
    var optionlastEdu, optionYear = [];

    _.each(data, function(value, key, list) {return optionYear[key] = value.RPL_TAHUN} )

    // There should not be negative values in rawData
    var rawDatlastEdu = [
        _.pluck(data, 'SD'),
        _.pluck(data, 'SMP'),
        _.pluck(data, 'SMA_SMAK_SEDERAJAT'),
        _.pluck(data, 'D1_D4'),
        _.pluck(data, 'S1_S3')
    ];

    var totalData = [];
    for (let i = 0; i < rawDatlastEdu[0].length; ++i) {
        let sum = 0;
    for (let j = 0; j < rawDatlastEdu.length; ++j) {
        sum += rawDatlastEdu[j][i];
    }
        totalData.push(sum);
    }
    
    var series = [
        'SD',
        'SMP',
        'SMA/SMK Sederajat',
        'D1-D4',
        'S1-S3',
    ].map((name, sid) => {
        return {
            name,
            type: 'bar',
            stack: 'total',
            barWidth: '90%',
            label: {
                show: true,
                color : '#fff',
                formatter : val => Math.floor(val.data*100) +'%'
            },
            itemStyle : {
                borderWidth: 0.3,
                borderType: 'dashed'
            },
            data: rawDatlastEdu[sid].map((d, did) => totalData[did] <= 0 ? 0 : d / totalData[did] ),
            tooltip: {
                formatter : val => '<b>' + val.seriesName + '</b><br/><br/><span style="margin-right: 20px">' + val.name + '</span>' + (Math.floor(val.data*totalData[val.dataIndex])).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
            }
        };
    });

    var basics = {
        color: ["#173F6D", "#2AA9C6", "#F4BB01", '#F06000', '#2A73C6'],
        legend: {
            selectedMode: true,
            orient: 'horizontal',
            bottom: '5',
            left: 'auto'
        },
        grid: {
            left: 50,
            right: 10,
            top: 10,
            bottom: 50
        },
        yAxis: {
            type: 'value',
            max: 1,
            axisLabel: {
                formatter: val => `${val * 100} %`
            }
        },
        xAxis: {
            type: 'category',
            data: optionYear
        },
        tooltip: {
            trigger: 'item',
            showDelay: 0.1,
            transitionDuration: 0.2,
            color: '#fff',
            fontFamily: 'Poppins'
        }
    }

    optionlastEdu = _.extend({series},basics);

    optionlastEdu && chartlastEdu.setOption(optionlastEdu);
}

/**
 * Search autocomplete function
 */
function autoCompleteSearch(data) {
    console.log('run autocomplete')
    if (AUTOCOMPLETE_SEARCH) {
        const autoCompleteJS = new autoComplete({
            selector: "#autoComplete",
            placeHolder: "Search for Food...",
            data: {
                src: ["Sauce - Thousand Island", "Wild Boar - Tenderloin", "Goat - Whole Cut"],
                cache: true,
            },
            resultsList: {
                element: (list, data) => {
                    if (!data.results.length) {
                        // Create "No Results" message element
                        const message = document.createElement("div");
                        // Add class to the created element
                        message.setAttribute("class", "no_result");
                        // Add message text content
                        message.innerHTML = `<span>Found No Results for "${data.query}"</span>`;
                        // Append message element to the results list
                        list.prepend(message);
                    }
                },
                noResults: true,
            },
            resultItem: {
                highlight: true
            },
            events: {
                input: {
                    selection: (event) => {
                        const selection = event.detail.selection.value;
                        autoCompleteJS.input.value = selection;
                    }
                }
            }
        });
    }
}

function courseMethodPreference(data) {
    console.log(data);
    var chartCPref = document.getElementById('course-preference');
    var CPChart = echarts.init(chartCPref);
    var optionCMP;
    var lists = [];
    _.each(data, function(list, i) {
        console.log(list.MODA);
        lists[i] = {
            name: list.MODA == 'lms' ? 'Pembelajaran Mandiri' : (list.MODA).charAt(0).toUpperCase() + (list.MODA).slice(1).toLowerCase(),
            value: list.PERCENTAGE
        }
    });

    optionCMP = {
        color: ["#1D518B", "#2AA9C6", '#F2BA01'],
        tooltip: {
            trigger: 'item',
            valueFormatter : (value) => value.toFixed(2) + '%'
        },
        label: {
            alignTo : 'edge',
            formatter: '{b}\n{d} %',
            minMargin: 5,
            edgeDistance: 10,
            lineHeight: 15
        },
        legend: {
            selectedMode: true,
            orient: 'horizontal',
            bottom: '0',
            left: 'auto'
        },
        series: [
            {
                name: 'Pelatihan Berdasarkan Transaksi',
                type: 'pie',
                radius: '85%',
                data: lists,
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    optionCMP && CPChart.setOption(optionCMP);
}

function courseCategoryChart(data) {
    
}


(function($){
    if(MAP_HOME) {
        var HomeChart = echarts.init(MAP_HOME);
        HomeChart.showLoading();

        $.getJSON(ROOT_PATH + '/js/map/IDN_FN.json', function (idMapJson) {
            HomeChart.hideLoading();
            var IDDATA = [];

            $.getJSON(DATA_INDO_ALL, function(data) {
                var province = data.pkp.data;
                var gender = data.gender.data;
                var age = data.age.data;
                var lastEdu = data.education.data;
                var csProvider = data.lp.data;
                var course = data.p.data;
                var cpm = data.transaction.data;

                var genderData = _.sortBy(gender, (item) => item.RPL_TAHUN);
                var ageData = _.sortBy(age, (item) => item.RPL_TAHUN);
                var lastEduData = _.sortBy(lastEdu, (item) => item.RPL_TAHUN);
                var courseData = _.sortBy(course, (item) => item.RPL_TAHUN);
                var inclusionData = {
                    desil: data.desil_1.data.TOTAL,
                    pmi: data.purna_pmi.data.TOTAL, 
                    vilage: data.pedesaan.data.TOTAL,
                    difabel: data.difabel.data.TOTAL
                }
                var cpmData = _.sortBy(cpm, (item) => item.PERCENTAGE);
                
                var dataTable = _.sortBy(_.without(province, _.findWhere(province, {
                    PROVINCE_CODE: 'TOTAL'
                })), (o) => o.PROVINCE_CODE )

                $.each(province, function(i,val) {
                    return IDDATA.push({
                        name : val.PROVINSI,
                        value : val.SK,
                        code: val.PROVINCE_CODE,
                        index: i
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

                // invoke databale
                tableProvince(tProvince,dataTable);
                
                //invoke gender 
                genderChart(genderData);

                //invoke age
                ageChart(ageData);

                // invoke last education
                lastEduChart(lastEduData);

                // invoke search autocomplete
                // autoCompleteSearch();

                // render pedesaan
                renderInclusive(inclusionData);

                // invoke lp
                courseProviderChart(csProvider);

                // invoke courses
                courseChart(courseData);

                // course method preference 
                courseMethodPreference(cpmData)
            });
        });

        var obj = document.getElementById("total-penerima");
        animateValue(obj, 0, 18887737, 1200);
    }

    if(MAP_DETAIL) {
        var DetailChart = echarts.init(MAP_DETAIL);
        DetailChart.showLoading();

        $.getJSON(ROOT_PATH + '/js/map/province/31_dki_jakarta.json', function (provinceMapJson) {
            DetailChart.hideLoading();
            var DetailDATA = [];

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


