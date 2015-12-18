define(function() {
    //定义全局变量，判断dayOrMonth
    var gType = "by_day";
    //定义全局变量，判断shudi
    var shudiSelected = "全市";
    //定义全局变量,判断sejie算法
    var sejieSelected = "等量划分";
    var objectSelected ="栅格";
    //定义全局变量，topNum
    var topNum = 10;
    var viewType="4G用户数";
    //定义全局变量,范围
    var fromValue = 100,
        toValue = 400;
    //通过函数获取调用服务时的相关参数
    function reportByDate(str,map){
        dateChoose=$("#datePicker").val();
        if(str=== "日粒度"){
            gType="by_day";
        }
        else{
            gType="by_month";
        }
        //alert(dateChoose);
        var arrayDate = $("#dayOrMonth :button");
        //先还原所有button的颜色
        for(var i=0;i<arrayDate.length;i++){
            arrayDate[i].style.color = "#000000";
        }
        for(var i=0;i<arrayDate.length;i++){
            if(arrayDate[i].value===str){
                arrayDate[i].style.color = "#6495ED";
                arrayDate[i].style.borderColor = "#000000";
                break;
            }
        }
        require(['addOverlay'], function(_addOverlay) {
            _addOverlay.xiaoqu(map);
        });
    }
    function reportByShudi(str){
        dateChoose=$("#datePicker").val();
        //alert(dateChoose);
        var arrayShudi = $("#shudi :button");
        //先还原所有button的颜色
        for(var i=0;i<arrayShudi.length;i++){
            arrayShudi[i].style.color = "#000000";
        }
        for(var i=0;i<arrayShudi.length;i++){
            if(arrayShudi[i].value===str){
                arrayShudi[i].style.color = "#6495ED";
                arrayShudi[i].style.borderColor = "#000000";
                shudiSelected = str;
                break;
            }
        }
    }
    function reportBySejie(str){
        //alert(str);
        dateChoose=$("#datePicker").val();
        //alert(dateChoose);
        var arraySejie = $("#sejie :button");
        //先还原所有button的颜色
        for(var i=0;i<arraySejie.length;i++){
            arraySejie[i].style.color = "#000000";
        }
        for(var i=0;i<arraySejie.length;i++){
            if(arraySejie[i].value===str){
                arraySejie[i].style.color = "#6495ED";
                arraySejie[i].style.borderColor = "#000000";
                sejieSelected = str;
                return sejieSelected;
            }
        }
    }
    function reportByObject(str){
        dateChoose=$("#datePicker").val();
        //根据统计对象为kpiNameEn和kpiModelColName赋值
        if(str==="栅格"){
            isRaster = true;
        }
        if(str==="小区"){
            isRaster = false;
        }
        var arrayObject = $("#statisticsObject :button");
        //先还原所有button的颜色
        for(var i=0;i<arrayObject.length;i++){
            arrayObject[i].style.color = "#000000";
        }
        for(var i=0;i<arrayObject.length;i++){
            if(arrayObject[i].value===str){
                arrayObject[i].style.color = "#6495ED";
                arrayObject[i].style.borderColor = "#000000";
                objectSelected = str;
                break;
            }
        }
    }
    function reportByIndex(str){
        dateChoose=$("#datePicker").val();
        //alert(dateChoose);
        var arrayIndex = $("#statisticsIndex :button");
        //先还原所有button的颜色
        for(var i=0;i<arrayIndex.length;i++){
            arrayIndex[i].style.color = "#000000";
        }
        for(var i=0;i<arrayIndex.length;i++){
            if(arrayIndex[i].value===str){
                arrayIndex[i].style.color = "#6495ED";
                arrayIndex[i].style.borderColor = "#000000";
                viewType = str;
                break;
            }
        }
    }
    function reportByTop(str){
        dateChoose=$("#datePicker").val();
        document.getElementById('topN').value = '自定义';
        //alert(dateChoose);
        var arrayTopN = $("#topNumber :button");
        //先还原所有button的颜色
        for(var i=0;i<arrayTopN.length;i++){
            arrayTopN[i].style.color = "#000000";
        }
        for(var i=0;i<arrayTopN.length;i++){
            if(parseInt(arrayTopN[i].value)===parseInt(str)){
                arrayTopN[i].style.color = "#6495ED";
                arrayTopN[i].style.borderColor = "#000000";
                topNum = str;
                return topNum;
            }
        }
    }

    var returnVal = {
        gType: reportByDate,
        shudiSelected: reportByShudi,
        sejieSelected: reportBySejie,
        objectSelected: reportByObject,
        viewType: reportByIndex,
        topNum: reportByTop
    };
    return returnVal;
});