/** init function map penerima */
/**
 * TODO LIST
 * 1. MAP UNTUK SETIAP PROVINSI PAKE LINK DAN REDIRECT KE PROVINSI
 * 2. LINK UNTUK KE DETAIL PROVINSI
 * 3. SPESIFIK STATISTIK 
 */
const queryParams = new URLSearchParams(window.location.search);
// command if it want to local
// var ROOT_PATH = 'http://localhost:8848';
var ROOT_PATH = 'https://statistik-penerima.prakerja.go.id';
var DATA_INDO_CITY = 'https://public-prakerja.oss-ap-southeast-5.aliyuncs.com/data-demografi/provinsi/';
var DATA_INDO_REGENCY = 'https://public-prakerja.oss-ap-southeast-5.aliyuncs.com/data-demografi/kota_kab/';
var DATA_INDO_ALL = 'https://public-prakerja.oss-ap-southeast-5.aliyuncs.com/data-demografi/indonesia/indonesia.json';
var DATA_MAP_PROVINCE = 'https://public-prakerja.oss-ap-southeast-5.aliyuncs.com/geojson_data/provinsi/';
// var DATA_INDO_CITY = 'https://static-asset-cdn.prakerja.go.id/data-demografi/provinsi/';
// var DATA_INDO_REGENCY = 'https://static-asset-cdn.prakerja.go.id/data-demografi/kota_kab/';
// var DATA_INDO_ALL = 'https://static-asset-cdn.prakerja.go.id/data-demografi/indonesia/indonesia.json';
// var DATA_MAP_PROVINCE = 'https://static-asset-cdn.prakerja.go.id/geojson_data/provinsi/';
var MAP_HOME = document.getElementById('maps-indonesia');
var AUTOCOMPLETE_SEARCH = document.getElementById('autocomplate');
var MAP_DETAIL = document.getElementById('maps-province');
var MAP_DETAIL_REGENCY = document.getElementById('maps-regency');
var tProvince = $('#tablePersebaran');
var option;

const listCategory = [
    {
      "category": "Penjualan dan Pemasaran",
      "iconName": "bi-shop"
    },
    {
      "category": "Makanan dan Minuman",
      "iconName": "bi-cookie"
    },
    {
      "category": "Teknologi Informasi",
      "iconName": "bi-cpu"
    },
    {
      "category": "Bahasa asing",
      "iconName": "bi-translate"
    },
    {
      "category": "Lainnya",
      "iconName": "bi-grid"
    },
    {
      "category": "Pemasaran",
      "iconName": "bi-bag-heart"
    },
    {
      "category": "Manajemen",
      "iconName": "bi-diagram-2"
    },
    {
      "category": "Gaya hidup",
      "iconName": "bi-luggage"
    },
    {
      "category": "Teknik",
      "iconName": "bi-wrench-adjustable-circle"
    },
    {
      "category": "Perkantoran",
      "iconName": "bi-buildings"
    },
    {
      "category": "Teknologi, Informatika",
      "iconName": "bi-code-slash"
    },
    {
      "category": "Sosial dan Perilaku",
      "iconName": "bi-activity"
    },
    {
      "category": "Desain Grafis, Ilustrasi, Animasi",
      "iconName": "bi-brush"
    },
    {
      "category": "Administrasi & Tata Usaha",
      "iconName": "bi-house-gear"
    },
    {
      "category": "Keuangan",
      "iconName": "bi-wallet2"
    },
    {
      "category": "Pengembangan Diri",
      "iconName": "bi-ladder"
    },
    {
      "category": "Penjualan",
      "iconName": "bi-cart-frame"
    },
    {
      "category": "Pertanian",
      "iconName": "bi-sunrise"
    },
    {
      "category": "Sumber Daya Manusia",
      "iconName": "bi-people"
    },
    {
      "category": "Content Creation, Media Sosial",
      "iconName": "bi-lightbulb"
    },
    {
      "category": "Pariwisata, Perhotelan, Restoran",
      "iconName": "bi-building"
    },
    {
      "category": "Akuntansi, Pajak",
      "iconName": "bi-percent"
    },
    {
      "category": "Komunikasi",
      "iconName": "bi-megaphone"
    },
    {
      "category": "Lain-Lain",
      "iconName": "bi-grid-fill"
    },
    {
      "category": "Ritel/Perdagangan",
      "iconName": "bi-layers"
    },
    {
      "category": "Investasi & Keuangan",
      "iconName": "bi-piggy-bank"
    },
    {
      "category": "Pemeliharaan, Perbaikan, Servis",
      "iconName": "bi-tools"
    },
    {
      "category": "Arsitektur, Desain Interior, Kontraktor",
      "iconName": "bi-vector-pen"
    },
    {
      "category": "Manufaktur",
      "iconName": "bi-robot"
    },
    {
      "category": "Media, Kepenulisan, Reportase",
      "iconName": "bi-camera-reels"
    },
    {
      "category": "Tekstil",
      "iconName": "bi-upc"
    },
    {
      "category": "Operasi, Gudang",
      "iconName": "bi-boxes"
    },
    {
      "category": "Otomotif",
      "iconName": "bi-car-front"
    },
    {
      "category": "Kesehatan",
      "iconName": "bi-hospital"
    },
    {
      "category": "Kesenian, Kriya",
      "iconName": "bi-paint-bucket"
    },
    {
      "category": "Produktivitas Diri",
      "iconName": "bi-graph-up-arrow"
    },
    {
      "category": "Merek, Citra Visual",
      "iconName": "bi-tag"
    },
    {
      "category": "Keuangan Pribadi",
      "iconName": "bi-calculator"
    },
    {
      "category": "Garmen, Konveksi",
      "iconName": "bi-bounding-box"
    },
    {
      "category": "Perkebunan",
      "iconName": "bi-flower1"
    },
    {
      "category": "Makanan/Minuman Kemasan",
      "iconName": "bi-cup-straw"
    },
    {
      "category": "Asuransi, Perbankan",
      "iconName": "bi-bank"
    },
    {
      "category": "Transportasi",
      "iconName": "bi-train-lightrail-front"
    },
    {
      "category": "Kuliner",
      "iconName": "bi-egg-fried"
    },
    {
      "category": "Musik, Audio",
      "iconName": "bi-music-note-beamed"
    },
    {
      "category": "Pendidikan",
      "iconName": "bi-mortarboard"
    },
    {
      "category": "Pertambangan",
      "iconName": "bi-minecart-loaded"
    },
    {
      "category": "Perikanan",
      "iconName": "bi-water"
    },
    {
      "category": "Kecantikan",
      "iconName": "bi-eyedropper"
    },
    {
      "category": "Event Organizer",
      "iconName": "bi-person-vcard"
    },
    {
      "category": "Logistik",
      "iconName": "bi-truck"
    },
    {
      "category": "Peternakan",
      "iconName": "bi-egg"
    },
    {
      "category": "Perawatan",
      "iconName": "bi-wrench"
    },
    {
      "category": "Kehutanan",
      "iconName": "bi-tree"
    }
]

const autoCompleteJS = new autoComplete({
    selector: "#autoComplete",
    submit: true,
    placeHolder: "Cari Provinsi atau Kabupaten Kota",
    data: {
        src: async () => {
            try {
              // Loading placeholder text
              document
                .getElementById("autoComplete")
                .setAttribute("placeholder", "Loading...");
                // Fetch External Data Source
                const source = await fetch(
                    ROOT_PATH + "/js/data/data-province-city.json"
                );
                const data = await source.json();
                document
                    .getElementById("autoComplete")
                    .setAttribute("placeholder", autoCompleteJS.placeHolder);
                // console.log(data);
              return data;
            } catch (error) {
              return error;
            }
        },
        keys: ["KOTA_KABUPATEN", "PROVINCE_NAME"],
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
                console.log(event);
                var selection = !_.isEmpty(event.detail.selection.value.KOTA_KABUPATEN) ? event.detail.selection.value.KOTA_KABUPATEN : event.detail.selection.value.PROVINCE_NAME;
                var link =  !_.isEmpty(event.detail.selection.value.KOTA_KABUPATEN) ? ROOT_PATH +'/kabupaten/?nama='+ (event.detail.selection.value.KOTA_KABUPATEN).replace(/\s+/gi, '-').toLowerCase() +'&kode=' + event.detail.selection.value.KOTA_KABUPATEN_ID + '&provinsi='+ (event.detail.selection.value.PROVINSI).replace(/\s+/gi, '-').toLowerCase() +'&kode_prov=' + event.detail.selection.value.PROVINCE_CODE : ROOT_PATH +'/provinsi/?nama='+ (event.detail.selection.value.PROVINCE_NAME).replace(/\s+/gi, '-').toLowerCase() +'&kode=' + event.detail.selection.value.PROVINCE_CODE;
                // window.location.replace(link, 'Statistik Program Prakerja Provinsi'+ data.name +' - prakerja.go.id');
                autoCompleteJS.input.value = selection;
                window.location.replace(link), 'Statistik Program Prakerja Provinsi'+ selection +' - prakerja.go.id', '_self';
            }
        }
    }
});

function htmlHead(data) {
    var title = $('title');
    var description = $('meta[name="description"]');
    var descriptionMeta = $('meta[property="og:description"]');
    var titleMeta = $('meta[name="twitter:title"]');
    
    title.html(data.title);
    titleMeta.attr('content',data.title);
    descriptionMeta.attr('content', data.description);
    description.attr('content', data.description);
}

// function animation value
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

// function render numbers
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// list category render 
function category(data, listCategory) {
    var icon = _.findWhere(listCategory, { category : data.CATEGORY });

    return '<div class="col-12 col-lg-20 col-md-6 mb-4">' +
            '<div class="text-center p-4 bg-b100 rounded h-100">'+
                '<i class="bi '+ icon.iconName +' mb-3 fs-1 text-primary"></i>'+
                '<h6 class="mt-2">' + data.CATEGORY + '</h6>'+
            '</div>'+
        '</div>'
}

// function list category render
function listCategoryRender(data) {
    var target = $('#course-category-list');
    _.each(data, function(item) {
        target.append(category(item,listCategory))  
    })
}

// function to get class on table list penerima
function getClass(value, min, max) {
    var range = (max - min) / 7;
    var thresholds = [
        min + range * 1,  // Very Low
        min + range * 2,  // Low
        min + range * 3,  // Below Average
        min + range * 4,  // Average
        min + range * 5,  // Above Average
        min + range * 6,  // High
        max               // Extreme
    ];

    if (value <= thresholds[0]) return 'very-low';
    if (value <= thresholds[1]) return 'low';
    if (value <= thresholds[2]) return 'below-average';
    if (value <= thresholds[3]) return 'average';
    if (value <= thresholds[4]) return 'above-average';
    if (value <= thresholds[5]) return 'high';
    return 'very-high';
}

/**
 * TABLE PROVINCE INIT
 */
function tableProvince(target, dataTable) {
    var columns = ['SK_2020', 'SK_2020_AKTIF', 'SK_2021', 'SK_2021_AKTIF', 'SK_2022', 'SK_2022_AKTIF','SK_2023','SK_2023_AKTIF','SK_2024','SK_2024_AKTIF'];
    var columnRanges = {};
    _.forEach(columns, (col) => {
        var values = dataTable.map(item => item[col]);
        var min = Math.min(...values);
        var max = Math.max(...values);
        columnRanges[col] = { min: min, max: max };
    });

    $(target).DataTable( {
        ordering: false,
        paging: false,
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
            {
                data: 'SK_2020',
                render: function (data, type, row) {
                    var className = getClass(data, columnRanges['SK_2020'].min, columnRanges['SK_2020'].max);
                    return '<div class="' + className + '">' + data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + '</div>';
                }
            },
            {
                data: 'SK_2020_AKTIF',
                render: function (data, type, row) {
                    var className = getClass(data, columnRanges['SK_2020_AKTIF'].min, columnRanges['SK_2020_AKTIF'].max);
                    return '<div class="' + className + '">' + data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + '</div>';
                }
            },
            {
                data: 'SK_2021',
                render: function (data, type, row) {
                    var className = getClass(data, columnRanges['SK_2021'].min, columnRanges['SK_2021'].max);
                    return '<div class="' + className + '">' + data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + '</div>';
                }
            },
            {
                data: 'SK_2021_AKTIF',
                render: function (data, type, row) {
                    var className = getClass(data, columnRanges['SK_2021_AKTIF'].min, columnRanges['SK_2021_AKTIF'].max);
                    return '<div class="' + className + '">' + data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + '</div>';
                }
            },
            {
                data: 'SK_2022',
                render: function (data, type, row) {
                    var className = getClass(data, columnRanges['SK_2022'].min, columnRanges['SK_2022'].max);
                    return '<div class="' + className + '">' + data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + '</div>';
                }
            },
            {
                data: 'SK_2022_AKTIF',
                render: function (data, type, row) {
                    var className = getClass(data, columnRanges['SK_2022_AKTIF'].min, columnRanges['SK_2022_AKTIF'].max);
                    return '<div class="' + className + '">' + data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + '</div>';
                }
            },
            {
                data: 'SK_2023',
                render: function (data, type, row) {
                    var className = getClass(data, columnRanges['SK_2023'].min, columnRanges['SK_2023'].max);
                    return '<div class="' + className + '">' + data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + '</div>';
                }
            },
            {
                data: 'SK_2023_AKTIF',
                render: function (data, type, row) {
                    var className = getClass(data, columnRanges['SK_2023_AKTIF'].min, columnRanges['SK_2023_AKTIF'].max);
                    return '<div class="' + className + '">' + data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + '</div>';
                }
            },
            {
                data: 'SK_2024',
                render: function (data, type, row) {
                    var className = getClass(data, columnRanges['SK_2024'].min, columnRanges['SK_2024'].max);
                    return '<div class="' + className + '">' + data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + '</div>';
                }
            },
            {
                data: 'SK_2024_AKTIF',
                render: function (data, type, row) {
                    var className = getClass(data, columnRanges['SK_2024_AKTIF'].min, columnRanges['SK_2024_AKTIF'].max);
                    return '<div class="' + className + '">' + data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + '</div>';
                }
            },
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
          if (aData[2] >= 5) {
            $('td', nRow).css('background-color', 'Red');
          } else if (aData[1] <= 4) {
            $('td', nRow).css('background-color', 'Orange');
          }
        }
    });
}

/**
 * TABLE DISTRICT INIT
 */
function tableCity(target, dataTable) {
    var columns = ['SK_2020', 'SK_2020_AKTIF', 'SK_2021', 'SK_2021_AKTIF', 'SK_2022', 'SK_2022_AKTIF','SK_2023','SK_2023_AKTIF','SK_2024','SK_2024_AKTIF'];
    var columnRanges = {};
    _.forEach(columns, (col) => {
        var values = dataTable.map(item => item[col]);
        var min = Math.min(...values);
        var max = Math.max(...values);
        columnRanges[col] = { min: min, max: max };
    });

    $(target).DataTable( {
        searching: false,
        ordering: false,
        paging: false,
        bLengthChange: false,
        data : dataTable,
        order: [[11, 'asc']],
        columns: [
            { data: 'KOTA_KABUPATEN', 
                render: function (data, type, row, meta) {
                    var city_name = !_.isEmpty(data) ? data.replace(/\s+/gi, '-').toLowerCase() : '';
                    var link =  ROOT_PATH +'/kabupaten/?nama='+ city_name +'&kode=' + row.KOTA_KABUPATEN_ID + '&provinsi=' + row.PROVINSI + '&kode_prov=' + row.PROVINCE_CODE;
                    return '<a href="' + link +'" target="_blank">'+ data +'</a>';
                }
            },
            {
                data: 'SK_2020',
                render: function (data, type, row) {
                    var className = getClass(data, columnRanges['SK_2020'].min, columnRanges['SK_2020'].max);
                    return '<div class="' + className + '">' + data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + '</div>';
                }
            },
            {
                data: 'SK_2020_AKTIF',
                render: function (data, type, row) {
                    var className = getClass(data, columnRanges['SK_2020_AKTIF'].min, columnRanges['SK_2020_AKTIF'].max);
                    return '<div class="' + className + '">' + data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + '</div>';
                }
            },
            {
                data: 'SK_2021',
                render: function (data, type, row) {
                    var className = getClass(data, columnRanges['SK_2021'].min, columnRanges['SK_2021'].max);
                    return '<div class="' + className + '">' + data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + '</div>';
                }
            },
            {
                data: 'SK_2021_AKTIF',
                render: function (data, type, row) {
                    var className = getClass(data, columnRanges['SK_2021_AKTIF'].min, columnRanges['SK_2021_AKTIF'].max);
                    return '<div class="' + className + '">' + data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + '</div>';
                }
            },
            {
                data: 'SK_2022',
                render: function (data, type, row) {
                    var className = getClass(data, columnRanges['SK_2022'].min, columnRanges['SK_2022'].max);
                    return '<div class="' + className + '">' + data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + '</div>';
                }
            },
            {
                data: 'SK_2022_AKTIF',
                render: function (data, type, row) {
                    var className = getClass(data, columnRanges['SK_2022_AKTIF'].min, columnRanges['SK_2022_AKTIF'].max);
                    return '<div class="' + className + '">' + data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + '</div>';
                }
            },
            {
                data: 'SK_2023',
                render: function (data, type, row) {
                    var className = getClass(data, columnRanges['SK_2023'].min, columnRanges['SK_2023'].max);
                    return '<div class="' + className + '">' + data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + '</div>';
                }
            },
            {
                data: 'SK_2023_AKTIF',
                render: function (data, type, row) {
                    var className = getClass(data, columnRanges['SK_2023_AKTIF'].min, columnRanges['SK_2023_AKTIF'].max);
                    return '<div class="' + className + '">' + data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + '</div>';
                }
            },
            {
                data: 'SK_2024',
                render: function (data, type, row) {
                    var className = getClass(data, columnRanges['SK_2024'].min, columnRanges['SK_2024'].max);
                    return '<div class="' + className + '">' + data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + '</div>';
                }
            },
            {
                data: 'SK_2024_AKTIF',
                render: function (data, type, row) {
                    var className = getClass(data, columnRanges['SK_2024_AKTIF'].min, columnRanges['SK_2024_AKTIF'].max);
                    return '<div class="' + className + '">' + data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + '</div>';
                }
            },
            {data: 'KOTA_KABUPATEN_ID', render: ''}
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

/*
 * TABLE REGENCY INIT
*/
function tableRegency(target, dataTable) {
    var columns = ['SK_2020', 'SK_2020_AKTIF', 'SK_2021', 'SK_2021_AKTIF', 'SK_2022', 'SK_2022_AKTIF','SK_2023','SK_2023_AKTIF','SK_2024','SK_2024_AKTIF'];
    var columnRanges = {};
    _.forEach(columns, (col) => {
        var values = dataTable.map(item => item[col]);
        var min = Math.min(...values);
        var max = Math.max(...values);
        columnRanges[col] = { min: min, max: max };
    });
    $(target).DataTable( {
        ordering: false,
        paging: false,
        searching: false,
        bLengthChange: false,
        data : dataTable,
        order: [[11, 'asc']],
        columns: [
            {data: 'KECAMATAN'},
            {
                data: 'SK_2020',
                render: function (data, type, row) {
                    var className = getClass(data, columnRanges['SK_2020'].min, columnRanges['SK_2020'].max);
                    return '<div class="' + className + '">' + data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + '</div>';
                }
            },
            {
                data: 'SK_2020_AKTIF',
                render: function (data, type, row) {
                    var className = getClass(data, columnRanges['SK_2020_AKTIF'].min, columnRanges['SK_2020_AKTIF'].max);
                    return '<div class="' + className + '">' + data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + '</div>';
                }
            },
            {
                data: 'SK_2021',
                render: function (data, type, row) {
                    var className = getClass(data, columnRanges['SK_2021'].min, columnRanges['SK_2021'].max);
                    return '<div class="' + className + '">' + data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + '</div>';
                }
            },
            {
                data: 'SK_2021_AKTIF',
                render: function (data, type, row) {
                    var className = getClass(data, columnRanges['SK_2021_AKTIF'].min, columnRanges['SK_2021_AKTIF'].max);
                    return '<div class="' + className + '">' + data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + '</div>';
                }
            },
            {
                data: 'SK_2022',
                render: function (data, type, row) {
                    var className = getClass(data, columnRanges['SK_2022'].min, columnRanges['SK_2022'].max);
                    return '<div class="' + className + '">' + data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + '</div>';
                }
            },
            {
                data: 'SK_2022_AKTIF',
                render: function (data, type, row) {
                    var className = getClass(data, columnRanges['SK_2022_AKTIF'].min, columnRanges['SK_2022_AKTIF'].max);
                    return '<div class="' + className + '">' + data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + '</div>';
                }
            },
            {
                data: 'SK_2023',
                render: function (data, type, row) {
                    var className = getClass(data, columnRanges['SK_2023'].min, columnRanges['SK_2023'].max);
                    return '<div class="' + className + '">' + data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + '</div>';
                }
            },
            {
                data: 'SK_2023_AKTIF',
                render: function (data, type, row) {
                    var className = getClass(data, columnRanges['SK_2023_AKTIF'].min, columnRanges['SK_2023_AKTIF'].max);
                    return '<div class="' + className + '">' + data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + '</div>';
                }
            },
            {
                data: 'SK_2024',
                render: function (data, type, row) {
                    var className = getClass(data, columnRanges['SK_2024'].min, columnRanges['SK_2024'].max);
                    return '<div class="' + className + '">' + data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + '</div>';
                }
            },
            {
                data: 'SK_2024_AKTIF',
                render: function (data, type, row) {
                    var className = getClass(data, columnRanges['SK_2024_AKTIF'].min, columnRanges['SK_2024_AKTIF'].max);
                    return '<div class="' + className + '">' + data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + '</div>';
                }
            },
            {data: 'KECAMATAN_ID', render: ''}
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
            fontFamily: 'Open Sans'
        },
        toolbox: {
            show: true,
            orient: 'horizontal',
            left: 'right',
            bottom: 'bottom',
            feature: {
              mark: { show: true },
              dataView: { show: true, readOnly: false },
              saveAsImage: { show: true }
            }
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
            fontFamily: 'Open Sans'
        },
        toolbox: {
            show: true,
            orient: 'horizontal',
            left: 'right',
            bottom: 'bottom',
            feature: {
              mark: { show: true },
              dataView: { show: true, readOnly: false },
              saveAsImage: { show: true }
            }
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
        toolbox: {
            show: true,
            orient: 'horizontal',
            left: 'right',
            bottom: 'bottom',
            feature: {
              mark: { show: true },
              dataView: { show: true, readOnly: false },
              saveAsImage: { show: true }
            }
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
            right: '20',
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
        toolbox: {
            show: true,
            orient: 'horizontal',
            left: 'right',
            bottom: 'bottom',
            feature: {
              mark: { show: true },
              dataView: { show: true, readOnly: false },
              saveAsImage: { show: true }
            }
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
            right: '20',
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

/**
 * RENDER INCLUSIVE
 */
function renderInclusive(data) {
    var targetPMI = $('.pmi');
    var targetDesil = $('.desil');
    var targetDifabel = $('.difabel');
    var targetVilage = $('.vilage');

    targetPMI.html(data.pmi + '%');
    targetDesil.html(data.desil + '%')
    targetDifabel.html(data.difabel + '%')
    targetVilage.html(data.vilage + '%')
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
        _.pluck(data, 'SK_SD'),
        _.pluck(data, 'SK_SMP'),
        _.pluck(data, 'SK_SMA_SMAK_SEDERAJAT'),
        _.pluck(data, 'SK_D1_D4'),
        _.pluck(data, 'SK_S1_S3')
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
            fontFamily: 'Open Sans'
        },
        toolbox: {
            show: true,
            orient: 'horizontal',
            left: 'right',
            bottom: 'bottom',
            feature: {
              mark: { show: true },
              dataView: { show: true, readOnly: false },
              saveAsImage: { show: true }
            }
        },
    }

    optionlastEdu = _.extend({series},basics);

    optionlastEdu && chartlastEdu.setOption(optionlastEdu);
}

/**
 * Search autocomplete function
 */
function autoCompleteSearch(data) {
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

/**
 * Course Preference Chart
 */
function courseMethodPreference(data) {
    var chartCPref = document.getElementById('course-preference');
    var CPChart = echarts.init(chartCPref);
    var optionCMP;
    var lists = [];
    _.each(data, function(list, i) {
        lists[i] = {
            name: list.MODA == 'lms' ? 'Pembelajaran Mandiri' : (list.MODA).charAt(0).toUpperCase() + (list.MODA).slice(1).toLowerCase(),
            value: list.PERCENTAGE
        }
    });

    optionCMP = {
        color: ["#F05E00", "#F2BA01", '#2A72C7'],
        tooltip: {
            trigger: 'item',
            valueFormatter : (value) => value.toFixed(2) + '%'
        },
        toolbox: {
            show: true,
            orient: 'horizontal',
            left: 'right',
            bottom: 'bottom',
            feature: {
              mark: { show: true },
              dataView: { show: true, readOnly: false },
              saveAsImage: { show: true }
            }
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
                // radius: '85%',
                radius: ['40%', '70%'],
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

/**
 * Course Category Chart
 */
function courseCategoryChart(data) {
    var chartCourseCategory = document.getElementById('course-category');
    var CCChart = echarts.init(chartCourseCategory);
    var optionCC;

    var dataTotal = _.pluck(data, 'TOTAL');
    var dataCategory = _.pluck(data, 'CATEGORY');
    var dataMax = Number(_.first(dataTotal));
    var dataMin = Number(_.last(dataTotal));
    console.log(dataMax, dataMin);

    optionCC = {
        tooltip: {},
        toolbox: {
            show: true,
            orient: 'horizontal',
            left: 'right',
            bottom: 'bottom',
            feature: {
              mark: { show: true },
              dataView: { show: true, readOnly: false },
              saveAsImage: { show: true }
            }
        },
        barWidth: '90%',
        barHeight: '90%',
        xAxis: {
            max: Math.ceil(dataMax + (dataMin*1.5))
        },
        grid : {
            width: '95%',
            height: '90%',
            top: '5',
            left: '150'
        },
        yAxis: {
            type: 'category',
            data: dataCategory,
            inverse: true,
            animationDuration: 300,
            animationDurationUpdate: 300,
            grid: {
                left: '100',
                right: '10',
                bottom: '30',
                containLabel: true
            }
        },
        series: [{
            realtimeSort: true,
            type: 'bar',
            data: dataTotal,
            itemStyle: {
                color: '#2a72c7'
              },
            label: {
                show: true,
                position: 'right',
                valueAnimation: true,
                formatter: function(value) {
                    return value.data.toLocaleString("id-ID");
                }
            },
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)'
            }
        }],
        legend: {
            selectedMode: true,
            orient: 'horizontal',
            bottom: '5',
            left: 'auto'
        }
    };

    optionCC && CCChart.setOption(optionCC);
}

/**
 * incentive chart
 */
function incentiveChart(data) {
    var IncDom = document.getElementById('rekeningPenerimaanInsentif');
    var IncentiveChart = echarts.init(IncDom);
    var optIncentive;
    var incentive =_.union(['Isentif'], _.pluck(data, 'RPL_TAHUN'));
    var bank = _.union(['Bank'], _.pluck(data, 'BANK'));
    var ewallet = _.union(['E-Wallet'], _.pluck(data, 'EMONEY'));
    var source = [incentive, bank, ewallet];
    optIncentive = {
        color: ["#F06000", "#2462A8"],
        legend: {
            selectedMode: true,
            orient: 'horizontal',
            bottom: '0',
            left: 'auto'
        },
        tooltip: {
            trigger: 'item',
            valueFormatter : (value) => value.toFixed(2) + '%'
        },
        toolbox: {
            show: true,
            orient: 'horizontal',
            left: 'right',
            bottom: 'bottom',
            feature: {
              mark: { show: true },
              dataView: { show: true, readOnly: false },
              saveAsImage: { show: true }
            }
        },
        dataset: {source},
        xAxis: [
            { type: 'category', gridIndex: 0 },
            { type: 'category', gridIndex: 1 }
        ],
        yAxis: [{ gridIndex: 0 }, { gridIndex: 1 }],
        grid : [{
            width: '95%',
            height: '80%',
            left: '30',
            bottom: '10%',
            top: '5%'
        }, {
            width: '95%',
            height: '80%',
            left: '30',
            bottom: '10%',
            top: '5%'
        }],
        series: [
            { type: 'bar', seriesLayoutBy: 'row' },
            { type: 'bar', seriesLayoutBy: 'row' }
        ]
    };

    optIncentive && IncentiveChart.setOption(optIncentive);
}

function rednerBreadCrumbs(data, level) {
    if (level === 'provinsi') {
        var link = ROOT_PATH + '/provinsi/?nama=' + data.prov_name + '&kode=' + data.prov_id;
        return '<li class="breadcrumb-item"><a href="'+ link +'" class="text-capitalize">'+ data.prov_name.replace(/-/gi, ' ') +' </a></li><li class="breadcrumb-item active text-truncate">Semua Kabupaten</li>';
    } else {
        var linkPorvinsi = ROOT_PATH + '/provinsi/?nama=' + data.prov_name + '&kode=' + data.prov_id;
        var linkKabupaten = ROOT_PATH +'/kabupaten/?nama='+ data.kab_name +'&kode=' + data.kab_id + '&provinsi='+ data.prov_name +'&kode_prov=' +data.prov_id;
        return '<li class="breadcrumb-item"><a href="'+ linkPorvinsi +'" class="text-capitalize">'+ data.prov_name.replace(/-/gi, ' ') +' </a></li> <li class="breadcrumb-item"><a href="'+ linkKabupaten +'" class="text-capitalize">'+ data.kab_name.replace(/-/gi, ' ') +'</a></li> <li class="breadcrumb-item active text-truncate">Semua kecamatan</li>';
    }
}

function renderModa(data) {
    console.log(data);
    var totalCourse = document.getElementById('total-course'); $('#total-course');
    var webinarCourse = document.getElementById('webinar-course'); $('#webinar-course');
    var splCourse = document.getElementById('spl-course');$('#spl-course');
    var luringCourse = document.getElementById('luring-course');
    var dataLuring = _.filter(data, {'MODA': 'luring'});
    var dataWebinar = _.filter(data, {'MODA': 'webinar'});
    var dataSPL = _.filter(data, {'MODA': 'lms'});
    var dataTotal = !_.isEmpty(dataWebinar) ? dataWebinar[0].TOTAL : 0 + !_.isEmpty(dataLuring) ? dataLuring[0].TOTAL : 0 + !_.isEmpty(dataSPL) ? dataSPL[0].TOTAL : 0 
    
    console.log({dataLuring, dataWebinar, dataSPL})

    animateValue(totalCourse, 0, dataTotal, 1200);
    animateValue(webinarCourse, 0, dataWebinar?.[0]?.TOTAL ?? 0, 1200);
    animateValue(luringCourse, 0, dataLuring?.[0]?.TOTAL ?? 0, 1200);
    animateValue(splCourse, 0, dataSPL?.[0]?.TOTAL ?? 0, 1200);
}

function renderMapCityInfo (data, option) {
    var provinceName = $('#province-name');
    var cityName = $('.city-name');
    // var cityName = $('city-name');
    var islandName = $('#island-name');
    var ageProductive = $('#age-productive');
    var ageWorkers = $('#age-workes');
    var totalRecipients = $('#total-recipient');
    var percentRecipients = $('#percent-recipient');
    var totalWorkers = $('#total-workers');
    
    if (option == 'kabupaten') {
        cityName.html(data.city_name.replace(/kabupaten/gi, '').trim());
    }

    $('.province-name').html(data.provinsi);
    provinceName.html(data.provinsi);
    islandName.html('Pulau ' + data.pulau);
    ageProductive.html(data.jumlah_usia_produktif);
    ageWorkers.html(data.jumlah_angkatan_kerja);
    totalRecipients.html(data.angkatan_kerja_pernah_ikut_pelatihan);
    percentRecipients.html(data.persentase_angkatan_kerja_pernah_ikut_pelatihan);
    totalWorkers.html(data.jumlah_angkatan_kerja);
}

function renderStats(data) {
    var provName = $('.province-name');
    var islandName = $('.island-name');
    var prodPercent = $('.percentage-workforce-percentage');
    var workPercent = $('.percentage-productive-percentage');
    var narasi = $('.narasi');
    provName.html(data.province);
    islandName.html(data.pulau);
    narasi.html('Berdasarkan data BPS (Feb 2024), sebanyak '+ data.angkatan_kerja_pernah_ikut_pelatihan + ' Orang atau setara '+ data.persentase_angkatan_kerja_pernah_ikut_pelatihan +'% dari '+ data.jumlah_angkatan_kerja +' Jumlah Angkatan Kerja yang Pernah Mengikuti Pelatihan di Prakerja.')
    // narasi.html('Sebanyak '+ data.angkatan_kerja_pernah_ikut_pelatihan + ' orang dari '+ data.jumlah_angkatan_kerja +' angkatan kerja di Provinsi '+ data.provinsi +' pernah mengikuti pelatihan di Prakerja. Angka jumlah Angkatan Kerja diambil menurut data BPS per Februari 2024.')
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
                // coure platform
                var cpm = data.transaction.data;
                // course category
                var cc = data.top_course_category.data;
                // course category list
                var catList = data.top_trx_course_category.data;
                // e-wallet vs bank
                var incentive = data.emoney_vs_bank.data;

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
                var ccData = _.sortBy(cc, (item) => item.RNK);
                var catListData = _.sortBy(catList, (item) => item.RNK);
                var incentiveData = _.sortBy(incentive, (item) => item.RPL_TAHUN);
                
                var dataTable = _.sortBy(_.without(province, _.findWhere(province, {
                    PROVINCE_CODE: 'TOTAL'
                })), (o) => o.PROVINCE_CODE );

                $.each(dataTable, function(i,val) {
                    return IDDATA.push({
                        name : val.PROVINSI,
                        value : Number(val.SK),
                        code: val.PROVINCE_CODE,
                        index: i
                    });
                });
                var dataMin = _.min(IDDATA, (item) => item.value);
                var dataMax = _.max(IDDATA, (item) => item.value);

                echarts.registerMap('IDMAP', idMapJson);
                option = {
                    animation: true,
                    tooltip: {
                        trigger: 'item',
                        showDelay: 0.1,
                        transitionDuration: 0.2,
                        color: '#fff',
                        fontFamily: 'Open Sans'
                    },
                    visualMap: {
                        left: 'left',
                        min: Math.floor(dataMin.value * 0.9),
                        max: Math.ceil(dataMax.value * 1.2),
                        inRange: {
                            color: [
                                '#3F80CD',
                                '#2a72c7',
                                '#2461a9',
                                '#1d508b',
                                '#173f6d'
                            ]
                            // color: [
                            //     // '#7FAADD',
                            //     // '#75A3DB',
                            //     // '#6A9CD8',
                            //     // '#5F95D5',
                            //     // '#558ED2',
                            //     // '#4A87CF',
                            //     '#3F80CD',
                            //     '#2A72C7',
                            //     '#286CBD',
                            //     '#2667B3',
                            //     '#225B9F',
                            //     '#7FAADD',
                            //     '#1D508B',
                            //     '#7FAADD',
                            //     '#1B4A81',
                            //     '#194477'
                            // ]
                        },
                        text: ['Maks', 'Min'],
                        calculable: true
                    },
                    toolbox: {
                        show: true,
                        orient: 'vertical',
                        left: '10',
                        bottom: '200',
                        feature: {
                          mark: { show: true },
                          dataView: { show: true, readOnly: false },
                          saveAsImage: { show: true }
                        }
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

                            /*====Screen <576px ====*/


                            /*====Screen <992px ====*/


                            /*====Screen ≥992px ====*/
                            label : {
                                show: true,
                                // color: 'rgba(17,46,80,0.75)', // b900 = #112e50
                                color: 'rgba(0,0,0, 0.75)',
                                fontFamily: 'Open Sans',
                                fontSize: 12,
                                overflow: 'truncate',
                                height: 16,
                                backgroundColor: 'rgba(255,255,255,.5)',
                                padding: [2,3],
                                borderRadius: 4
                            },
                            itemStyle : {
                                areaColor: '#8DB2DD',
                                color: 'rgba(17,46,80,0.75)', // b900 = #112e50
                                borderWidth: 0.3,
                                borderType: 'dashed',
                                borderJoin: 'round',
                                borderCap: 'round',
                                color: '#fff'
                            },
                            emphasis: {
                                itemStyle: {
                                    // areaColor: '#f05e00',
                                    areaColor: 'rgba(240, 94, 0, 1)',
                                    color: '#fff',
                                    shadowColor: 'rgba(0,0,0,0.5)'
                                },
                                label: {
                                    color: 'rgba(17,46,80,1)', // b900 = #112e50
                                    fontFamily: 'Open Sans',
                                    fontSize: 12,
                                    backgroundColor: 'rgba(255,255,255,.75)'
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
                    window.location.replace(link, 'Statistik Program Prakerja Provinsi'+ data.name +' - prakerja.go.id', '_self');
                });

                // invoke databale
                tableProvince(tProvince,dataTable);
                
                //invoke gender chart
                genderChart(genderData);

                //invoke age chart
                ageChart(ageData);

                // invoke last education chart
                lastEduChart(lastEduData);

                // invoke search autocomplete
                // autoCompleteSearch();

                // render pedesaan chart
                renderInclusive(inclusionData);

                // invoke lp chart
                courseProviderChart(csProvider);

                // invoke courses chart
                courseChart(courseData);

                // course method preference  chart
                courseMethodPreference(cpmData);

                // course method accumulation
                renderModa(cpmData);

                // course category chart
                courseCategoryChart(ccData);

                // render top 10 category
                listCategoryRender(catListData);

                // invoke incentive cahrt
                incentiveChart(incentiveData);
            });
        });

        var obj = document.getElementById("total-penerima");
        animateValue(obj, 0, 18887737, 1200);
    }

    if(MAP_DETAIL) {
        var DetailChart = echarts.init(MAP_DETAIL);
        var provinceId = !_.isEmpty(queryParams.get('kode')) ? queryParams.get('kode') : '31'; // provinsi dki
        var province_name = !_.isEmpty(queryParams.get('nama')) ? queryParams.get('nama') : 'dki_jakarta'; // provinsi dki
        var fileMap = 'province_' + provinceId +'.json';
        var provStats = provinceId + '.json';
        var breadcrumb = $('#breadcrumb-detail .bc-list');
        var dataBreadCrumb = {
            prov_name : province_name,
            prov_id : provinceId
        }

        var dataMeta = {
            title : 'Statistik Penerima Di Provinsi '+ province_name.replace(/-/gi, ' ') +' - prakerja.go.id',
            description: 'Informasi statistik penerima prakerja pada provinsi ' + province_name.replace(/-/gi, ' ') + ' selama periode 2020 - 2024.'
        }

        // init loading data
        DetailChart.showLoading();

        htmlHead(dataMeta);

        $.getJSON(DATA_MAP_PROVINCE  + fileMap, function (provinceMapJson) {
            DetailChart.hideLoading();
            var DetailDATA = [];

            $.getJSON(DATA_INDO_CITY + provStats, function(data) {
                var province = data.pkp.data;
                var gender = data.gender.data;
                var age = data.age.data;
                var lastEdu = data.education.data;
                // var course = data.p.data;
                // coure platform
                var cpm = data.transaction.data;
                // course category
                var cc = data.top_course_category.data;
                // course category list
                var catList = data.top_trx_course_category.data;
                // e-wallet vs bank
                var incentive = data.emoney_vs_bank.data;

                var genderData = _.sortBy(gender, (item) => item.RPL_TAHUN);
                var ageData = _.sortBy(age, (item) => item.RPL_TAHUN);
                var lastEduData = _.sortBy(lastEdu, (item) => item.RPL_TAHUN);
                // var courseData = _.sortBy(course, (item) => item.RPL_TAHUN);
                // var inclusionData = {
                //     desil: data.desil_1.data.TOTAL,
                //     pmi: data.purna_pmi.data.TOTAL, 
                //     vilage: data.pedesaan.data.TOTAL,
                //     difabel: data.difabel.data.TOTAL
                // }
                var cpmData = _.sortBy(cpm, (item) => item.PERCENTAGE);
                var ccData = _.sortBy(cc, (item) => item.RNK);
                var catListData = _.sortBy(catList, (item) => item.RNK);
                var incentiveData = _.sortBy(incentive, (item) => item.RPL_TAHUN);
                
                var dataTable = _.sortBy(_.without(province, _.findWhere(province, {
                    PROVINCE_CODE: 'TOTAL'
                })), (o) => o.PROVINCE_CODE )
                var totalBeneficiaries = _.findWhere(province, {PROVINCE_CODE: 'TOTAL'})

                $.each(dataTable, function(i,val) {
                    return DetailDATA.push({
                        name : val.KOTA_KABUPATEN,
                        province_name: val.PROVINSI,
                        value : Number(val.SK),
                        code: val.KOTA_KABUPATEN_ID,
                        province_code: val.PROVINCE_CODE,
                        index: i
                    });
                });
                var dataMin = _.min(DetailDATA, (item) => item.value);
                var dataMax = _.max(DetailDATA, (item) => item.value);

                echarts.registerMap('IDMAP', provinceMapJson), {
                    'Kabupaten Adm. Kep. Seribu': {
                        left: -76,
                        top: 1,
                        width: 1
                    }
                };
                option = {
                    animation: true,
                    tooltip: {
                        trigger: 'item',
                        showDelay: 0.1,
                        transitionDuration: 0.2,
                        color: '#fff',
                        fontFamily: 'Open Sans'
                    },
                    toolbox: {
                        show: true,
                        orient: 'vertical',
                        left: '10',
                        bottom: '200',
                        feature: {
                          mark: { show: true },
                          dataView: { show: true, readOnly: false },
                          saveAsImage: { show: true }
                        }
                    },
                    visualMap: {
                        left: 'left',
                        min: Math.floor(dataMin.value * 0.9),
                        max: Math.ceil(dataMax.value * 1.1),
                        inRange: {
                            // color: [
                            //     '#2a72c7',
                            //     '#2461a9',
                            //     '#1d508b',
                            //     '#173f6d'
                            // ]
                            color: [
                                // '#7FAADD',
                                // '#75A3DB',
                                // '#6A9CD8',
                                // '#5F95D5',
                                '#558ED2',
                                '#4A87CF',
                                '#3F80CD',
                                '#2A72C7',
                                '#286CBD',
                                '#2667B3',
                                '#225B9F',
                                '#7FAADD',
                                '#1D508B',
                                '#7FAADD',
                                '#1B4A81',
                                '#194477'
                            ]
                        },
                        text: ['Maks', 'Min'],
                        calculable: true
                    },
                    series: [
                        {
                            name: 'Jumlah Penerima Prakerja Di Provinsi',
                            type: 'map',
                            roam: 'false', // option : false, scale, move
                            map: 'IDMAP',
                            aspectScale : 0.925, //ngerubah size mapnya (skew)
                            zoom: 1.25, //zoom in / out map
                            itemStyle : {
                                areaColor: '#8DB2DD',
                                borderColor: '#f3f3f3',
                                borderWidth: 0.3,
                                borderType: 'dashed',
                                borderJoin: 'round',
                                borderCap: 'round',
                                color: '#fff'
                            },
                            label : {
                                show: true,
                                formatter : val => val.name.replace(/kabupaten/gi, '').trim(),
                                color: 'rgba(0,0,0, 0.75)',
                                fontFamily: 'Open Sans',
                                fontSize: 12,
                                overflow: 'truncate',
                                height: 16,
                                backgroundColor: 'rgba(255,255,255,.50)',
                                padding: [2,4],
                                borderRadius: 4
                            },
                            emphasis: {
                                label: {
                                    show: true
                                },
                                itemStyle: {
                                    areaColor: '#f05e00',
                                    color: '#fff',
                                    shadowColor: 'rgba(0,0,0,0.5)',
                                    // shadowOffsetX: 1,
                                    // shadowOffsetY: 0.9
                                },
                                label: {
                                    color: 'rgba(17,46,80,1)', // b900 = #112e50
                                    fontFamily: 'Open Sans',
                                    fontSize: 12,
                                    backgroundColor: 'rgba(255,255,255,.75)'
                                }
                            },
                            data: DetailDATA
                        }
                    ]
                };

                if (provinceId == 31) {
                    _.extend(option.series[0], {layoutCenter: ['25%', '-55%'],layoutSize: '250%'})
                }
                DetailChart.setOption(option);
                DetailChart.on('click', function(params) {
                    data = params.data
                    var kabupaten_name = !_.isEmpty(data.name) ? data.name.replace(/\s+/gi, '-').toLowerCase() : '';
                    var prov_name = !_.isEmpty(data.province_name) ? data.province_name.replace(/\s+/gi, '-').toLowerCase() : '';
                    var link = ROOT_PATH +'/kabupaten/?nama='+ kabupaten_name +'&kode=' + data.code + '&provinsi='+prov_name+'&kode_prov=' +data.province_code;
                    window.location.replace(link, 'Statistik Program Prakerja Provinsi'+ data.name +' - prakerja.go.id', "_self");
                });

                // invoke databale
                tableCity(tProvince,dataTable);
                
                //invoke gender chart
                genderChart(genderData);

                //invoke age chart
                ageChart(ageData);

                // invoke last education chart
                lastEduChart(lastEduData);

                // course method preference chart
                courseMethodPreference(cpmData);
                
                // course method accumulation
                renderModa(cpmData);

                // course category chart
                courseCategoryChart(ccData);

                // render top 10 category
                listCategoryRender(catListData);

                // invoke incentive cahrt
                incentiveChart(incentiveData);

                // breadcrumb render
                breadcrumb.append(rednerBreadCrumbs(dataBreadCrumb, 'provinsi'));

                $.getJSON(ROOT_PATH + '/js/data/data-statistik.json').done(function(item) { 
                    console.log(item)
                    var datastats = _.findWhere(item, {"provinsi_id": Number(provinceId) })
                    renderMapCityInfo(datastats, 'provinsi');
                });

                var obj = document.getElementById("total-penerima");
                animateValue(obj, 0, totalBeneficiaries.SK, 1200);

            });
        });
    }

    if(MAP_DETAIL_REGENCY) {
        var DetailChartRegency = echarts.init(MAP_DETAIL_REGENCY);
        var prov_id = !_.isEmpty(queryParams.get('kode_prov')) ? queryParams.get('kode_prov') : '31'; // provinsi dki
        var prov_name = !_.isEmpty(queryParams.get('provinsi')) ? queryParams.get('provinsi') : 'dki_jakarta'; // provinsi dki
        var kab_id = !_.isEmpty(queryParams.get('kode')) ? queryParams.get('kode') : '157'; // provinsi dki
        var kab_name = !_.isEmpty(queryParams.get('nama')) ? queryParams.get('nama') : 'kota-adm.-jakarta-timur'; // provinsi dki
        var fileMap = 'city_' + prov_id +'.geojson';
        var kabStats = kab_id + '.json';
        var provStats = prov_id + '.json';
        var breadcrumb = $('#breadcrumb-detail .bc-list');
        var dataBreadCrumb = {
            kab_name : kab_name, 
            kab_id : kab_id,
            prov_name : prov_name,
            prov_id : prov_id
        }
        // init loading data
        DetailChartRegency.showLoading();

        var dataMeta = {
            title : 'Statistik Penerima Di '+ kab_name.replace(/-/gi, ' ') +' - prakerja.go.id',
            description: 'Informasi statistik penerima prakerja pada ' + kab_name.replace(/-/gi, ' ') + ' selama periode 2020 - 2024.'
        }

        htmlHead(dataMeta);

        $.getJSON(ROOT_PATH + '/js/map/province/' + fileMap, function (regencyMapJson) {
            DetailChartRegency.hideLoading();
            var DetailDATA = [];
            
            $.getJSON(DATA_INDO_REGENCY + kabStats, function(data) {

                $.getJSON(DATA_INDO_CITY + provStats, function(dataCity) {
                    var pkpProvinsi = dataCity.pkp.data;
                    var regency = data.pkp.data;
                    var gender = data.gender.data;
                    var age = data.age.data;
                    var lastEdu = data.education.data;
                    // coure platform
                    var cpm = data.transaction.data;
                    // course category
                    var cc = data.top_course_category.data;
                    // course category list
                    var catList = data.top_trx_course_category.data;
                    // e-wallet vs bank
                    var incentive = data.emoney_vs_bank.data;

                    var genderData = _.sortBy(gender, (item) => item.RPL_TAHUN);
                    var ageData = _.sortBy(age, (item) => item.RPL_TAHUN);
                    var lastEduData = _.sortBy(lastEdu, (item) => item.RPL_TAHUN);
                    var cpmData = _.sortBy(cpm, (item) => item.PERCENTAGE);
                    var ccData = _.sortBy(cc, (item) => item.RNK);
                    var catListData = _.sortBy(catList, (item) => item.RNK);
                    var incentiveData = _.sortBy(incentive, (item) => item.RPL_TAHUN);
                    
                    var dataTable = _.sortBy(_.without(regency, _.findWhere(regency, {
                        PROVINCE_CODE: 'TOTAL'
                    })), (o) => o.KECAMATAN_ID )

                    var totalBeneficiaries = _.findWhere(regency, {PROVINCE_CODE: 'TOTAL'})

                    $.each(pkpProvinsi, function(i,val) {
                        return DetailDATA.push({
                            name : val.KOTA_KABUPATEN,
                            province_name: val.PROVINSI,
                            value : kab_id === val.KOTA_KABUPATEN_ID ? val.SK : '-',
                            code: val.KOTA_KABUPATEN_ID,
                            province_code: val.PROVINCE_CODE,
                            index: i
                        });
                    });

                    echarts.registerMap('IDMAP', regencyMapJson), {
                        'Kabupaten Adm. Kep. Seribu': {
                            left: -76,
                            top: 1,
                            width: 1
                        }
                    };
                    option = {
                        animation: true,
                        tooltip: {
                            trigger: 'item',
                            showDelay: 0.1,
                            transitionDuration: 0.2,
                            color: '#fff',
                            fontFamily: 'Open Sans'
                        },
                        visualMap: {
                            show: false,
                            inRange: {
                                // color: [
                                //     '#2a72c7',
                                //     '#2461a9',
                                //     '#1d508b',
                                //     '#173f6d'
                                // ]
                                color: [
                                    // '#7FAADD',
                                    // '#75A3DB',
                                    // '#6A9CD8',
                                    // '#5F95D5',
                                    '#558ED2',
                                    '#4A87CF',
                                    '#3F80CD',
                                    '#2A72C7',
                                    '#286CBD',
                                    '#2667B3',
                                    '#225B9F',
                                    '#7FAADD',
                                    '#1D508B',
                                    '#7FAADD',
                                    '#1B4A81',
                                    '#194477'
                                ]
                            },
                            calculable: true
                        },
                        toolbox: {
                            show: true,
                            orient: 'vertical',
                            left: '0',
                            bottom: '10',
                            feature: {
                              mark: { show: true },
                              dataView: { show: true, readOnly: false },
                              saveAsImage: { show: true }
                            }
                        },
                        series: [
                            {
                                name: 'Jumlah Penerima Prakerja Di Kabupaten',
                                type: 'map',
                                roam: 'false', // option : false, scale, move
                                map: 'IDMAP',
                                aspectScale : 0.925, //ngerubah size mapnya (skew)
                                zoom: 1.25, //zoom in / out map
                                itemStyle : {
                                    areaColor: '#8DB2DD',
                                    borderColor: '#f3f3f3',
                                    borderWidth: 0.3,
                                    borderType: 'dashed',
                                    borderJoin: 'round',
                                    borderCap: 'round',
                                    color: '#fff'
                                },
                                label : {
                                    show: true,
                                    formatter : val => val.name.replace(/kabupaten/gi, '').trim(),
                                    color: 'rgba(0,0,0, 0.75)',
                                    fontFamily: 'Open Sans',
                                    fontSize: 12,
                                    overflow: 'truncate',
                                    height: 16,
                                    backgroundColor: 'rgba(255,255,255,.5)',
                                    padding: [2,3],
                                    borderRadius: 4
                                },
                                emphasis: {
                                    label: {
                                        show: true
                                    },
                                    itemStyle: {
                                        areaColor: '#f05e00',
                                        color: '#fff',
                                        shadowColor: 'rgba(0,0,0,0.5)'
                                    },
                                    label: {
                                        color: 'rgba(17,46,80,1)', // b900 = #112e50
                                        fontFamily: 'Open Sans',
                                        fontSize: 12,
                                        backgroundColor: 'rgba(255,255,255,.75)',
                                        padding: [2,3],
                                        borderRadius: 4
                                    }
                                },
                                data: DetailDATA
                            }
                        ]
                    };

                    if (prov_id == 31) {
                        _.extend(option.series[0], {layoutCenter: ['25%', '-55%'],layoutSize: '250%'})
                    } 

                    DetailChartRegency.setOption(option);

                    DetailChartRegency.on('click', function(data) {
                        var detailData = data.data;
                        var kabupaten_name = !_.isEmpty(data.name) ? data.name.replace(/\s+/gi, '-').toLowerCase() : '';
                        var prov_name = !_.isEmpty(detailData.province_name) ? detailData.province_name.replace(/\s+/gi, '-').toLowerCase() : '';
                        var link = ROOT_PATH +'/kabupaten/?nama='+ kabupaten_name +'&kode=' + detailData.code + '&provinsi='+prov_name+'&kode_prov=' +detailData.province_code;
                        window.location.replace(link, 'Statistik Program Prakerja Provinsi'+ data.name +' - prakerja.go.id', "_self");
                    });

                    // invoke databale
                    tableRegency(tProvince,dataTable);
                    
                    // //invoke gender chart
                    genderChart(genderData);

                    // //invoke age chart
                    ageChart(ageData);

                    // // invoke last education chart
                    lastEduChart(lastEduData);

                    // // course method preference  chart
                    courseMethodPreference(cpmData);

                    // course method accumulation
                    renderModa(cpmData);

                    // // course category chart
                    courseCategoryChart(ccData);

                    // // render top 10 category
                    listCategoryRender(catListData);

                    // // invoke incentive cahrt
                    incentiveChart(incentiveData);

                    // // breadcrumb render
                    breadcrumb.append(rednerBreadCrumbs(dataBreadCrumb, 'kabupaten'));

                    $.getJSON(ROOT_PATH + '/js/data/data-statistik.json').done(function(item) { 
                        var datastats = _.findWhere(item, {"provinsi_id": Number(prov_id) })
                        _.extend(datastats, {city_name: kab_name.replace(/-/gi, ' ')});
                        renderMapCityInfo(datastats, 'kabupaten');
                    });

                    var obj = document.getElementById("total-penerima");
                    animateValue(obj, 0, totalBeneficiaries.SK, 1200);
                });
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


