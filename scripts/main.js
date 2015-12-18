//配置requireJs参数
require.config({
    baseUrl: 'scripts',
    paths: {
        'addMap': 'addMap',
        'showOrHide': 'showOrHide',
        'setPara': 'setPara',
        'addOverlay':'addOverlay',
        'leaflet':'leaflet',
        'leaflet.contextmenu': 'leaflet.contextmenu',
        'leaflet.fullscreen': 'leaflet.fullscreen',
        'leaflet.chinaProvider':'leaflet.ChineseTmsProviders',
        'leaflet.iconLayers': 'leaflet.iconLayers',
        'leaflet.StyleEditor': 'leaflet.StyleEditor',
        'leaflet.StyleForms': 'leaflet.StyleForms'
    },
    map: {
        '*': {
            'css': 'css'//css.js是用以加载样式文件的插件require-css
        }
    },
    shim : {
        'addOverlay':{
            deps: ['leaflet']
        },
        'showOrHide':[
            'css!../css/bootstrap.css'
        ],
        'leaflet':[
            'css!../css/leaflet.css',
            {
                exports: 'L'
            }
        ],
        'leaflet.contextmenu': [
            'css!../css/leaflet.contextmenu.css',
            {
                deps:['leaflet']
            }
        ],
        'leaflet.fullscreen': [
            'css!../css/leaflet.fullscreen.css',
            {
                deps:['leaflet']
            }
        ],
        'leaflet.chinaProvider': {
            deps: ['leaflet']
        },
        'leaflet.iconLayers': [
            'css!../css/leaflet.iconLayers.css',
            {
                deps:['leaflet']
            }
        ],
        'leaflet.StyleEditor': [
            'css!../css/leaflet.StyleEditor.css',
            {
                deps:['leaflet']
            }
        ],
        'leaflet.StyleForms': [
            'css!../css/leaflet.StyleEditor.css',
            {
                deps:['leaflet']
            }
        ]
    }
});
//获得指标选取参数
$('#sejie :button').on('click',function(){
    var value = $(this).val();//等同于$(this).attr("value")
    require(['setPara'], function(_setPara) {
        _setPara.sejieSelected(value);
    });
});
$('#shudi :button').on('click',function(){
    var value = $(this).val();//等同于$(this).attr("value")
    require(['setPara'], function(_setPara) {
        _setPara.shudiSelected(value);
    });
});
$('#dayOrMonth :button').on('click',function(){
    var value = $(this).val();//等同于$(this).attr("value")
    require(['setPara'], function(_setPara) {
        _setPara.gType(value,map);
    });
});
//*/
//控制菜单栏显示隐藏
$("#showIndex").on("click",function(){
    require(['showOrHide'], function(_showOrHide) {
        _showOrHide.showIndex();
    });
});
$("#hideIndex").on("click",function(){
    require(['showOrHide'], function(_showOrHide) {
        _showOrHide.hideIndex();
    });
});
//*/
//加载地图
require(['addMap'], function(_addMap) {
    map = _addMap.baseMap();
});
//*/
