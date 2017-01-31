var sign_in = function () {

  function valid_data(data) {
    var reg = /\w{4,15}/;
    return reg.test(data);
  }
  
  function get (event) {
    event.preventDefault();

    var login = document.sign_in.login.value;
    var pass = document.sign_in.pass.value;

    if (!valid_data(login)||
        !valid_data(pass)) {

      if (!valid_data(login)) {
        alert_message.attention('Логин должен быть от 4 до 12 символов');
        return false;
      }

      if (!valid_data(pass)) {
        alert_message.attention('Пароль должен быть от 4 до 12 символов');
        return false;
      }
    }

    var button = document.sign_in.children[2];

    function attention(message) {

    document.getElementsByClassName('header')[0].innerHTML += "<div class='alert'>"+
        "<p class='message'>"+message+"</p></div>";

    var del = document.getElementsByClassName('alert')[0];

    setTimeout(function () {
      del.remove();
    }, 1000);

  }

    $.ajax({
      async: true,
      url: 'https://eventssion.com/api/mobile/1/native_login?callback=?',
      type: 'GET',
      dataType: 'jsonp',
      data: {
        user_name: login,
        user_password: pass
      },
      crossDomain: true,
      beforeSend: function (jqXHR, option) {
                    button.setAttribute('disabled', true);
                  },
    })
    .always(function() {
      button.removeAttribute('disabled');
    })
    .done(function (status, data = {name: 'Админ', avatarPath: 'style/image/1.png'}) {
                var form = document.getElementsByClassName('control-menu')[0];
                form.innerHTML = '<form><div class="autorisation">'+
                  '<img src="'+data.avatarPath +'" alt="Avatar">'+
                  '<label>Здравствуйте, '+ data.name +'</label>'+
                  '<p class=""><a href="#">Выйти</a></p>'+
                '</div></form>';
              })
    .fail(function(status) {
      switch(status.status){
        case 400:  
                alert_message.attention('Ошибка '+status.status+'. Время соединения с сервером истекло.');
              break;

        case 401:  
                alert_message.attention('Ошибка '+status.status+'. Такой пользователь не найден.');
              break;

        case 404: 
                alert_message.attention('Ошибка '+status.status+'. Сервер временно не доступен.');
              break;
      }
    });;

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

  if (rec_pass != null)
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
}