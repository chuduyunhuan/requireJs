define(["leaflet","leaflet.contextmenu","leaflet.fullscreen","leaflet.chinaProvider","leaflet.iconLayers","leaflet.StyleEditor","leaflet.StyleForms"], function(L) {
    function baseMap(){
        //定义地理图层
        var streets = L.tileLayer('http://' + baseUrl + ':8080/Tiles/{z}/{x}/{y}.png');
        var grayScale = L.tileLayer('http://' + baseUrl + ':8080/sh/satelliteBingMap/{z}/{x}/{y}.jpg');
        //其他地图供应商提供的在线地图
        var gaodeLayer = L.tileLayer.chinaProvider('GaoDe.Normal.Map',{maxZoom:18,minZoom:5});
        var gaodeSatelliteLayer = L.tileLayer.chinaProvider('GaoDe.Satellite.Map',{maxZoom:18,minZoom:5});
        var gaodeAnnotionLayer = L.tileLayer.chinaProvider('GaoDe.Satellite.Annotion',{maxZoom:18,minZoom:5});
        var gaodeMap = L.layerGroup([gaodeLayer]),
            gaodeSatelliteMap = L.layerGroup([gaodeSatelliteLayer,gaodeAnnotionLayer]);

        //限制地图显示范围
        var southWest = L.latLng(30.61350, 120.92651),
            northEast = L.latLng(31.94256, 122.104797),
            bounds = L.latLngBounds(southWest, northEast);
        var map = new L.map('map', {
            layers: [gaodeMap],
            minZoom: 5,
            maxZoom: 18,
            fullscreenControl: true,
            contextmenu: true,
            contextmenuWidth: 140,
            contextmenuItems: [{
                text: 'Show coordinates',
                callback: ''
            }, {
                text: 'Center map here',
                callback: ''
            }, '-', {
                text: 'Zoom in',
                icon: 'images/zoom-in.png',
                callback: ''
            }, {
                text: 'Zoom out',
                icon: 'images/zoom-out.png',
                callback: ''
            }]
            //maxBounds: bounds
        }).setView([31.209149, 121.56786], 11);
        var baseLayers = {
            "卫星影像": gaodeSatelliteMap,
            "街道地图": gaodeMap,
            "移动地图": streets,
            "移动卫星": grayScale
        };
        //var switchControl = L.control.layers(baseLayers,[]);
        //switchControl.addTo(map);
        var iconLayersControl = new L.Control.IconLayers(
            [
                {
                    title: '电子地图', // use any string
                    layer: streets, // any ILayer
                    icon: 'images/icons/cartodb_positron.png' // 80x80 icon
                },
                {
                    title: '高德地图',
                    layer: gaodeMap,
                    icon: 'images/icons/openstreetmap_mapnik.png'
                },
                {
                    title: '高德卫星',
                    layer: gaodeSatelliteMap,
                    icon: 'images/icons/esri_oceanbasemap.png'
                },
                {
                    title: '卫星地图',
                    layer: grayScale,
                    icon: 'images/icons/here_satelliteday.png'
                }
            ],
            {
                position: 'topright',
                maxLayersInRow: 5
            }
        );
        iconLayersControl.addTo(map);
        //map.addControl(L.control.styleEditor({
        //    position: "topleft"
        //}));
        return map;
    }
    function userIcon(){
        //自定义图标
        var marker2G = L.icon({
            iconUrl: 'images/2G.png',
            iconSize: [35, 35]
        });
        var marker3G = L.icon({
            iconUrl: 'images/3G-1.png',
            iconSize: [35, 35]
        });
        var marker4G = L.icon({
            iconUrl: 'images/4G-2.png',
            iconSize: [35, 35]
        });
        var iconArr = [marker2G,marker3G,marker4G];
        return iconArr;
    }
    var returnVal = {
        baseMap:baseMap,
        userIcon:userIcon
    };
    return returnVal;
});