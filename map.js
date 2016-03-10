
      var data=[/*陣列*/
        
        {name:"羅斯福路館",address:"台北市中正區羅斯福路四段24巷14之1號"},
        {name:"中華館",address:"台北市中正區中華路二段311巷2號"},
        {name:"忠孝館",address:"台北市中正區忠孝東路一段80號1樓"},
        {name:"萬大館",address:"台北市萬華區萬大路281號"},
        {name:"長順館",address:"台北市萬華區長順街1號"},
        {name:"中華二館",address:"台北市萬華區中華路2段362號1樓"}

        ];

      var map;
      var geocoder;

      function initMap() {
        
        //準備地圖物件
        map = new google.maps.Map(document.getElementById('map'), {
              center: {lat: 25.0315, lng: 121.5207},
              zoom: 13
              });
            

        //準備geocoder物件
        geocoder=new google.maps.Geocoder();
     
        for(var i=0;i<data.length;i++){
        showMarker(data[i]);
          }
        }

      function showMarker(site){
        
        geocoder.geocode({address:site.address/*data[i].address*/}, function(result, status){
          //根據得到的經緯度建立Ｍarker
          var position=result[0].geometry.location;
          var marker=new google.maps.Marker({
              position:position,
              map:map
          });
        //在標示上面註冊點擊事件，點擊後產生訊息視窗
            google.maps.event.addListener(marker, "click", function(){
           
            var info=new google.maps.InfoWindow({
                content:"<b>"+site.name+"</b><br/>"+site.address
             });
            
            info.open(map, marker);
       
        });
      });
    }
    

 

