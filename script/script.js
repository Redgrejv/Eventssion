
var sign_in = function () {

  

  function valid_login(login) {
    var reg = /\w{4,15}/;
    return reg.test(login);
  }

  function valid_pass(pass) {
    var reg = /\w{4,15}/;
    return reg.test(pass);
  }
  
  function get (event) {
    event.preventDefault();

    var login = document.sign_in.login.value;
    var pass = document.sign_in.pass.value;

    if (!valid_login(login)||
        !valid_pass(pass)) {
      return false;
    }

    document.sign_in.submit.style.disabled = true;

    $.ajax({
      url: 'http://194.247.12.239:38001/api/mobile/1/native_login',
      type: 'GET',
      dataType: 'JSON',
      data: {
        user_name: login,
        user_password: pass
      }
    })
    .done(function() {
      alert("success");
    })
    .fail(function() {
      alert("error");
    })
    .always(function() {
      document.sign_in.submit.style.disabled = true;
    });
    

  }

  return {
    get: get,
  }

}();

var sign_up = function(){
  
  function swap_img() {
    var img = document.getElementById('sign-up');
    
    img.onmouseenter = function() {
      this.setAttribute('src', 'style/image/button_reg_hover.png');
    };
    img.onmouseleave = function () {
      this.setAttribute('src', 'style/image/button_reg.png');
    };
    img.onmousedown = function () {
      this.setAttribute('src', 'style/image/button_reg_hover_active.png');
    };
    img.onmouseup = function () {
      this.onmouseenter();
    };
  }

  return {
    swap_img: swap_img,
  }


}();



    // весь ваш код тут



document.addEventListener('DOMContentLoaded', function(){

  
  sign_up.swap_img();

  document.sign_in.onsubmit = sign_in.get;

  var url_sign_in = '';
  var url_sign_up = 'http://194.247.12.239:38001/api/mobile/1/native_register';
   
});


window.onload = function() {

  var sport = document.getElementsByClassName('sport')[0];
  var entertament = document.getElementsByClassName('entertament')[0];
  var time_manager = document.getElementsByClassName('time-manager')[0];

  hover(sport, 'style/image/hover_sport.png');
  hover(entertament, 'style/image/hover_entertament.png');
  hover(time_manager, 'style/image/hover_time_manager.png');


};

function hover(elem, attr_val){
  var temp_attr = elem.getAttribute('src');

  elem.onmouseover = function () {
    elem.setAttribute('src', attr_val);
  }

  elem.onmouseleave = function () {
    elem.setAttribute('src', temp_attr);
  }
}