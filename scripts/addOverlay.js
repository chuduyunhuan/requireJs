define(["addMap"], function(_addMap) {
    function addXiaoQu(map){
        var iconArr =  _addMap.userIcon();
        var url = "http://"+baseUrl+":8080//services/ws/rest/bcinfo/celllist?page=1&limit=1000&bcid="+encodeURIComponent("58") +"&uuid="+Math.random();
        //alert(url);
        $.getJSON(url, function (data) {
            var lengthRows = data.rows.length;
            //alert(lengthRows);
            for(var i=0;i<lengthRows;i++){
                //通过最大最小坐标，产生随机坐标，并绘制marker
                var latMin = parseFloat(data.rows[i].cellLatitude)-0.002,
                    latMax = parseFloat(data.rows[i].cellLatitude)+0.002,
                    lngMin = parseFloat(data.rows[i].cellLongitude)-0.002,
                    lngMax = parseFloat(data.rows[i].cellLongitude)+0.002;
                var point = L.latLng(Math.random()*(latMax-latMin)+latMin, Math.random()*(lngMax-lngMin)+lngMin);
                //marker的title属性,同时也是传参的cellName
                var popupContent = data.rows[i].cellName;
                var typeMarker = data.rows[i].cellNt;
                /*/为detailedeInfoVector数组赋值
                var temObj = {};
                temObj.point = point;
                temObj.name = popupContent;
                temObj.type = typeMarker;
                detailedInfoVector.push(temObj);
                //*/
                //为小区绑定popup

                if (typeMarker == "2G"){
                    var marker = L.marker(point,{title: popupContent});
                    marker.addTo(map);
                    //marker.bindPopup(heatPopup);
                    //districtsLayer.addLayer(marker);
                }
                else if (typeMarker == "3G"){
                    var marker = L.marker(point,{title: popupContent});
                    marker.addTo(map);
                    //marker.bindPopup(heatPopup);
                    //districtsLayer.addLayer(marker);
                }
                else{
                    var marker = L.marker(point,{title: popupContent});
                    marker.addTo(map);
                    //marker.bindPopup(heatPopup);
                    //districtsLayer.addLayer(marker);
                }
            }
        });

    }
    var returnVal = {
        xiaoqu:addXiaoQu
    };
    return returnVal;
});