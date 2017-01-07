var XHR = ('onload' in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

var sign_in = function () {

  function valid_input(pass) {
    var reg = /\w{4,15}/;
    return reg.test(pass);
  }
  
  function get (event) {
    event.preventDefault();

    var login = document.sign_in.login.value;
    var pass = document.sign_in.pass.value;

    if (!valid_input(login)||
        !valid_input(pass)) {
      return false;
    }

    var button = document.sign_in[2];
    button.setAttribute('disabled', 'disabled');

    $.ajax({
      async: true,
      url: 'http://194.247.12.239:38001/api/mobile/1/native_login?callback=?',
      type: 'GET',
      dataType: 'jscmp',
      data: {
        user_name: login,
        user_password: pass
      },
      crossDomain: true,
      success: function (data) {
        alert('success' + data);
      }
    })
    .done(function() {
      alert("success");
    })
    .fail(function(data) {
      alert("error: " + data);
    })
    .always(function() {
      button.removeAttribute('disabled');
    });
  }

  return {
    get: get,
  }

}();

var sign_up = function(){
  
  function swap_img() {
    var img = document.getElementById('sign-up');
    
    set_active_title(img, {standart: 'style/image/button_reg.png',
      hover: 'style/image/button_reg_hover.png',
      active: 'style/image/button_reg_hover_active.png'
    });
    
  }

  return {
    swap_img: swap_img,
  }


}();

var set_active_title = function (elem, attr_val = {standart, hover, active}) {

    elem.onmouseenter = function() {
      this.setAttribute('src', attr_val.hover);
    };
    elem.onmouseleave = function () {
      this.setAttribute('src', attr_val.standart);
    };
    elem.onmousedown = function () {
      this.setAttribute('src', attr_val.active);
    };
    elem.onmouseup = function () {
      this.onmouseenter();
    };
}



document.addEventListener('DOMContentLoaded', function(){

  
  sign_up.swap_img();

  document.sign_in.onsubmit = sign_in.get;

  var rec_pass = document.getElementById('rec_pass');
  rec_pass.onclick = function () {
    var shadow = document.getElementsByClassName('shadow')[0];
    shadow.classList.remove('devisible');
  }

  var close_modal = document.getElementsByClassName('icon-close')[0];
  close_modal.onclick = function () {
    var shadow = document.getElementsByClassName('shadow')[0];
    document.recover.reset();
    shadow.classList.add('devisible');
  }

  var form = document.recover;
  form.onsubmit = function (event) {
    event.preventDefault();
    close_modal.onclick();
    form.reset();
    alert('Запрос отправлен.');
  }
   
});


window.onload = function() {

  var sport = document.getElementsByClassName('sport')[0];
  var entertament = document.getElementsByClassName('entertament')[0];
  var time_manager = document.getElementsByClassName('time-manager')[0];

  set_active_title(sport, {
    standart: sport.getAttribute('src'),
    hover: 'style/image/hover_sport.png',
    active: 'style/image/active_hover_sport.png'
  });

  set_active_title(entertament, {
    standart: entertament.getAttribute('src'),
    hover: 'style/image/hover_entertament.png',
    active: 'style/image/active_hover_entertament.png'
  });

  set_active_title(time_manager, {
    standart: time_manager.getAttribute('src'),
    hover: 'style/image/hover_time_manager.png',
    active: 'style/image/active_hover_time_manager.png'
  });

  

};