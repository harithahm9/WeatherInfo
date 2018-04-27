$(document).ready(function(){
    $("#weatherBtn").click(function(){
         onWeatherBtnclick();
        
    });
    $("#cityname").keyup(function(){
        var cityname=$(this).val();
        if(!cityname){
            $("#weatherBtn").prop("disabled",true);
            
        }
        else{
            $("#weatherBtn").prop("disabled",false);
        }
    });
    
    
});

function onWeatherBtnclick()
{
    var cityname=$("#cityname").val();
    console.log("weatherBtnisclicked",cityname);
    var url="http://api.openweathermap.org/data/2.5/weather?q="+cityname+"&appid=5cd82ca900bef306698442317d9bc12e";
    console.log("url",url);
    $(".weatherinfo-table").addClass("d-none");
    $.ajax({
        method:"GET",
        url:url,
        success:function(response){
        onWeatherSuccess(response);
        },
        error:function(error){
            onWeatherError(error);
        }
    })
}
 function onWeatherSuccess(response){
     console.log("response",response);
     $(".weatherinfo-lat").text(response.coord.lat);
     $(".weatherinfo-long").text(response.coord.lon);
     $(".weatherinfo-humi").text(response.main.humidity);
     $(".weatherinfo-pres").text(response.main.pressure);
     $(".weatherinfo-table").removeClass("d-none");
 };
function onWeatherError(error){
     console.log("error",error);
 };
