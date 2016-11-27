
$(document).ready(function () {

    var url_sign_in = 'http://194.247.12.239:38001/api/mobile/1/native_login';
    var url_sign_up = 'http://194.247.12.239:38001/api/mobile/1/native_register';
    

    $('form').submit(function(event) {

        event.preventDefault();

        var username = $('input[name=login]').val();
        var password = $('input[name=password]').val();

        // var xhr = new XMLHttpRequest();
        // var param = 'user_name='+ encodeURIComponent(user_name)+ '&pass='+ encodeURIComponent(password);
        // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        // xhr.open("POST", url_sign_in, true);
        // xhr.send(param);

        $.ajax({
            url: url_sign_in,
            type: 'GET',
            data: {
                user_name: username,
                user_password: password
            }
        })
        .done(function() {
            console.log("success");
            $('input[name=login]').val('');
            $('input[name=password]').val('');
        })
        .fail(function() {
            console.log("error");
        })
    });

    // $.ajax({
    //     url: 'http://194.247.12.239:38001/api/mobile/1/native_register',
    //     type: 'POST',
    //     data: {
    //         user_name: 'redgrejv', 
    //         pass: '12345678',
    //         phone: '380962312945',
    //         mail: 'redgrejv10@gmail.com'
    //     }
    // })
    // .done(function() {
    //     console.log("success");
    // })
    // .fail(function() {
    //     console.log("error");
    // });
        
})


function getXmlHttp(){
  var xml_http;
  try {
    xml_http = new ActiveXObject("Msxml2.XMLHTTP");
  } catch (e) {
    try {
      xml_http = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (E) {
      xml_http = false;
    }
  }
  if (!xml_http && typeof XMLHttpRequest!='undefined') {
    xml_http = new XMLHttpRequest();
  }
  return xml_http;
}




$(document).ready(function() {

  hover_cases($('.sport'), {first:'hover_sport', second:'sport'});
  hover_cases($('.entertament'), {first:'hover_entertament', second:'entertament'});
  hover_cases($('.time_manager'), {first:'hover_time_manager', second:'time_manager'});
  
});

/**
 * Изменение изображения в блоке при наведении
 * @param  {Object} elem блок с изображением
 * @param  {Object} data список параметров изменяемых изображений
 */
function hover_cases(elem, data = { first, second}) {

  $(elem).hover(function() {
    $('img', this).attr('src', 'style/image/' + data.first + '.png');
  }, function() {
    $('img', this).attr('src', 'style/image/' + data.second +'.png');
  });

}

