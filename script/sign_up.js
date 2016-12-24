var user = {}

$(document).ready(function() {

	

	$('#tel').focusin(function() {
		
		$(this).mask("+38 (999) 999-99-99",
			{
				"clearIncomplete":true,
				completed: function(){
					var temp = $(this).val();
					var phone = "";

					var leng = temp.length;

					for (var i = 0; i < leng; ++i) {
						if($.isNumeric(temp[i])){
							phone += temp[i];
						}
					}

					if (phone.length < 12) {
						user.phone = '';
						return false;
					}else{
						user.phone = phone;
					}
				}
			});
		});

		$('#email').blur(function() {
			var temp = $(this).val();
			var reg = /(\w{1,15})@([a-z]{1,8}).([a-z]{1,4})/;

			if (reg.test(temp)) {
				user.email = temp;
			}else{
				user.email = '';
			}
		});

		$('#login').blur(function() {
			var reg = /(\w{4,12})/
			var user_name = $(this).val();
			if (user_name) {
				// $.ajax({
				// 	url: 'http://194.247.12.239:38001/api/mobile/1/native_login',
				// 	type: 'GET',
				// 	data: {user_name: user.login}
				// })
				// .done(function() {
				// 	$('label[for='+$(this).attr('id')+']').text('Пользователь с таким логином уже есть');
				// 	return false;
				// })
				// .fail(function() {
				// 	$('label[for='+$(this).attr('id')+']').text('Имя свободно');

					if (reg.test(user_name)) {
						user.user_name = user_name;
					}else{
						user.user_name = '';
						return false;
					}
				// })
				// 
				
			}
		});

		//setInterval($('#confirm_password').blur(), 1000)

		$(':input[type=password]').keyup(function() {
			
			var password = $('#password').val();
			var confirm_password = $(this).val();
			var lab = $('label[for='+$(this).attr('id')+']');
			var con = confirm_password.localeCompare(password);
			if (con) {
				lab.text('Пароли не совпадают').css('color', 'red');
				user.pass = '';
			}else{
				lab.text('');
				user.pass = password;
			}

		});

		$('button[type=submit').click(function() {
			$('#tel').focusin().blur();
			$('#login').blur();
			$(':input[type=password]').keyup();

			var login = user.user_name;
			var tel = user.phone;
			var email = user.email;
			var pass = user.pass;

			$('#sign_up').attr('disabled', 'disabled');


			if (!login||!tel||!email||!pass) {
				$('#sign_up').attr('disabled', false);
			}
		});

		$('form').submit(function(event) {
			event.preventDefault();
			
			var params = $.param(user);


			$.ajax({
				async: true,
				url: 'http://194.247.12.239:38001/api/mobile/1/native_register?callback=?',
				type: 'POST',
				dataType: 'JSONP',
				data: params,
				crossDomain: true,
				cache: false,
				scriptCharset: 'UTF-8',
				// jsonpCallback: function(){
				// 	alert('String');
				// },
				success: function (status) {
					alert('Succss: ' + status.status);
					$('#sign_up').attr('disabled', false);
				},
				error: function (status) {
					alert('Error: '+status.status);
					$('#sign_up').attr('disabled', false);
				}


			});
			
// 			function cback(data, textStatus, xhr) {
// 	alert(data + ' ' + textStatus + ' ' + xhr)
// }
			// .done(function() {
			// 	alert('success');
			// })
			// .fail(function() {
			// 	alert("error");
			// })
			
			
// $.post('http://194.247.12.239:38001/api/mobile/1/native_register?callback=?', {
// 	user_name: user.user_name, 
// 	pass: user.pass,
// 	phone: user.phone,
// 	mail: user.email
// }, cback);
// 
// 
// 
// 
			
			

		});

});

function getJsonp(/*string*/url,/*string*/callback, /*bool*/nocache)
{
    var scriptTag = document.createElement("SCRIPT");
    scriptTag.src = url + "?callback=" + callback;
     
    if(typeof nocache !== undefined ) {
        scriptTag.src += "&nocache=" + (new Date()).getTime();
    }                                                
                                                  
  document.body.appendChild(scriptTag);
     
  // Netscape, Opera
    if(navigator.appName !== "Microsoft Internet Explorer") {  
           
        scriptTag.onload = function() {
            scriptTag.parentNode.removeChild(scriptTag);
        }
         
    } else {
        // Microsoft Internet Explorer
        scriptTag.onreadystatechange = function() {
             
            if(scriptTag.readyState === 'loaded'){
                scriptTag.parentNode.removeChild(scriptTag);
            }
             
        }   
    }
}