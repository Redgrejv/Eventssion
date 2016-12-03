var user = {}

<<<<<<< HEAD
$(document).ready(function() {

=======





$(document).ready(function() {

	

>>>>>>> signup
	$('#tel').focusin(function() {
		
		$(this).mask("+38 (999) 999-99-99",
			{
				"clearIncomplete":true,
				completed: function(){
					var temp = $(this).val();
<<<<<<< HEAD
					var tel = "";
=======
					var phone = "";
>>>>>>> signup

					var leng = temp.length;

					for (var i = 0; i < leng; ++i) {
						if($.isNumeric(temp[i])){
<<<<<<< HEAD
							tel += temp[i];
						}
					}

					if (tel.length < 12) {
						user.tel = '';
						return false;
					}else{
						user.tel = tel;
=======
							phone += temp[i];
						}
					}

					if (phone.length < 12) {
						user.phone = '';
						return false;
					}else{
						user.phone = phone;
>>>>>>> signup
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
<<<<<<< HEAD
			var login = $(this).val();

			if (reg.test(login)) {
				user.login = login;
			}else{
				user.login = '';
=======
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
				
>>>>>>> signup
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

<<<<<<< HEAD
			var login = user.login;
			var tel = user.tel;
=======
			var login = user.user_name;
			var tel = user.phone;
>>>>>>> signup
			var email = user.email;
			var pass = user.pass;

			if (!login||!tel||!email||!pass) {
				return false;
			}
		});

<<<<<<< HEAD

		$('form').submit(function(event) {
			event.preventDefault();

			$.ajax({
				url: 'http://194.247.12.239:38001/api/mobile/1/native_register',
				type: 'POST',
				dataType: 'JSON',
				data: {
					user_name: user.login,
					pass: user.pass,
					phone: user.tel,
					mail: user.email
				},
			})
			.done(function() {
				console.log("success");
			})
			.fail(function() {
				console.log("error");
			});
			
			
			// var request = new XMLHttpRequest();
			// var params = 'name=' + encodeURIComponent(user.login)+
			// '&phone='+encodeURIComponent(user.tel) +
			// '&mail='+encodeURIComponent(user.email) +
			// '&pass='+encodeURIComponent(user.pass);
=======
		$('form').submit(function(event) {
			event.preventDefault();
			
			var params = $.param(user);
		
		$.post('http://194.247.12.239:38001/api/mobile/1/native_register', {
			user_name: user.user_login,
			pass: user.pass,
			phone: user.phone,
			email: user.email
		}, 
		function(data, textStatus, xhr) {
			alert(data+" "+ textStatus +" "+ xhr);
		}).fail(function(data, status, xhr) {

          alert(data + " " + status + " " + xhr);
      });

			// $.ajax({
			// 	url: 'http://194.247.12.239:38001/api/mobile/1/native_register',
			// 	type: 'POST',
			// 	data: params,
			// 	success: function(data){
   //      	alert(data);
   //      }
			// })
			// .done(function() {
			// 	console.log("success");
			// })
			// .fail(function() {
			// 	console.log("error");
			// });
			// 
			// 
			// var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
			// var xhr = new XHR();
			// xhr.open('GET', 'http://194.247.12.239:38001/api/mobile/1/native_login', true);

			// xhr.onload = function() {
			//   alert( this.responseText );
			// }

			// xhr.onerror = function() {
			//   alert( 'Ошибка ' + this.status );
			// }

			// xhr.send();
			
			
			// var request = new XMLHttpRequest();
			// var login = encodeURIComponent(user.login);
			// var pass = encodeURIComponent(user.pass);
			// var mail = encodeURIComponent(user.email);
			// var phone = encodeURIComponent(user.tel);
			// var params = '?user_name=' + login +
			// '&phone='+ phone +
			// '&mail='+ mail +
			// '&pass='+ pass;
>>>>>>> signup
  	// 	request.open('POST','http://194.247.12.239:38001/api/mobile/1/native_register',true);
  	// 	request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
  	// 	request.send(params);

		 //  if (request.status==200) {
		 //    console.log('success');
		 //  }	

			

		});

});
<<<<<<< HEAD

function label(id, complete = true){
	var label = $('label[for='+id+']');

	if (complete) {
		label.text('Подходит').css('color', 'green');
	}else{
		label.text('Поле неправильно заполнено').css('color', 'red');
	}
}
=======
>>>>>>> signup
