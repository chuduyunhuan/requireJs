define(function() {
    function showIndex(){
        document.getElementById("showIndex").style.display="none";
        document.getElementById("showIndex").style.visibility = "hidden";
        document.getElementById("indexSelect").style.display="block";
        document.getElementById("indexSelect").style.visibility = "visible";
        document.getElementById("hideIndex").style.display="block";
        document.getElementById("hideIndex").style.visibility = "visible";
    }
    function hideIndex(){
        document.getElementById("showIndex").style.display="block";
        document.getElementById("showIndex").style.visibility = "visible";
        document.getElementById("indexSelect").style.display="none";
        document.getElementById("indexSelect").style.visibility = "hidden";
        document.getElementById("hideIndex").style.display="none";
        document.getElementById("hideIndex").style.visibility = "hidden";
    }
    var returnVal = {
        showIndex:showIndex,
        hideIndex:hideIndex
    };
    return returnVal;
});