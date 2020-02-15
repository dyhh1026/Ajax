$(function(){
    getData();
    $('#headerGet').on('keydown',function(e){
        if(e.keyCode == 13){
            var param = $(this).val();
            getData(param);
        }
    });
    function getData(param){
        var param = param ? param : "北京";  
        $.ajax({
             
            type: 'get',
            url: 'https://api.jisuapi.com/weather/query',
            data: {
                appkey: '70f398cb4ba741c8',
                city: param
            },
            dataType: 'jsonp',
            jsonp: 'callback',
            success: function(json){
                var html = template('templt',json);
               $('#ulLists').html(html);

            }
        })
    }
})