// 'use strict'


// var user = {
// 	user_name: '',
// 	phone: '',
// 	mail: '',
// 	pass: ''
// }


// $(document).ready(function() {

// 	$('#tel').focusin(function() {
		
// 		$(this).mask("+38(999)999-99-99",
// 			{
// 				"clearIncomplete":true,
// 				completed: function(){
// 					var temp = $(this).val();
// 					var tel = "";
// 					var leng = temp.length;

// 					for (var i = 0; i < leng; ++i) {
// 						if($.isNumeric(temp[i])){
// 							tel += temp[i];
// 						}
// 					}

// 					if(tel.length == 12) {
// 						user.phone = tel;
// 					}else{
// 						user.phone = '';
// 						return false;
// 					}
// 				}
// 			});
// 		});

// 		$('#email').blur(function() {
// 			var temp = $(this).val();
// 			var reg = /(\w{1,15})@([a-z]{1,8}).([a-z]{1,4})/;

// 			if (reg.test(temp)) {
// 				user.mail = temp;
// 			}else{
// 				user.mail = '';
// 			}
// 		});

// 		$('#login').blur(function() {
// 			var reg = /(\w{4,12})/

// 			var user_name = $(this).val();

// 			if (user_name) {
// 					if (reg.test(user_name)) {
// 						user.nickName = user_name;
// 					}else{
// 						user.user_name = '';
// 						return false;
// 					}
// 				}
// 		});

// 		$(':input[type=password]').keyup(function() {
			
// 			var password = $('#password').val();
// 			var confirm_password = $(this).val();
// 			var lab = $('label[for='+$(this).attr('id')+']');
// 			var con = confirm_password.localeCompare(password);
// 			if (con) {
// 				lab.text('Пароли не совпадают').css('color', 'red');
// 				user.pass = '';
// 			}else{
// 				lab.text('');
// 				user.pass = password;
// 			}

// 		});

// 		$('button[type=submit').click(function() {
// 			$('#tel').focusin().blur();
// 			$('#login').blur();
// 			$(':input[type=password]').keyup();

// 			var login = user.nickName;
// 			var tel = user.phone;
// 			var email = user.email;
// 			var pass = user.pass;

// 			// if (!login||!tel||!email||!pass) {
// 			// 	$('#sign_up').attr('disabled', false);
// 			// }
// 		});

// 		$('form').submit(function(event) {
// 			event.preventDefault();

// 			$('#sign_up').attr('disabled', 'disabled');
			
// 			var params = $.param(user);
// 			var par = $('form').serialize();

// 			// $.ajax({
// 			// 	async: true,
// 			// 	url: 'https://eventssion.com/api/mobile/1/native_register?callback=?',
// 			// 	type: 'POST',
// 			// 	dataType: 'JSON',
// 			// 	// data: params,
// 			// 	data: {
// 			// 		user_name: user.nickName,
// 			// 		mail: user.mail,
// 			// 		pass: user.pass,
// 			// 		phone: user.phone,
// 			// 	}, 
// 			// 	crossDomain: true,
// 			// }).done(function(status) {
// 			// 	alert('Succss: ' + status.status);
// 			// 		$('#sign_up').attr('disabled', false);
// 			// })
// 			// .fail(function(status) {
// 			// 	alert('Error: '+status.status);
// 			// 		$('#sign_up').attr('disabled', false);
// 			// });
			


// 			$.post('https://eventssion.com/api/mobile/1/native_register',
// 				{
// 					'user_name': user.user_name,
// 					'pass': user.pass,
// 					'phone': user.phone,
// 					'mail': user.mail,
// 				},
// 				// $('form').serialize(), 
// 				function(data, textStatus, xhr) {
// 					alert(data);
// 					$('#sign_up').attr('disabled', false);
// 			});

// 		});

// });

// function label(id, complete = true){
// 	var label = $('label[for='+id+']');

// 	if (complete) {
// 		label.text('Подходит').css('color', 'green');
// 	}else{
// 		label.text('Поле неправильно заполнено').css('color', 'red');
// 	}
// };


"use strict"




$(document).ready(function() {

	

	var user = {
		user_name: '',
		pass: '',
		mail: '',
		phone: ''
	}

	var button_su = $('form button');

	var desel = function (id, type, mess) {
		var elem = $('#' + id).val().trim();

		if (valid(elem, type)) {
			message(id, '');
			button_su.prop('disabled', false);
		}else{
			message(id, mess);
			button_su.prop('disabled', true);
		}
	}
	
	$('#login').on('input blur', function() {
		desel(this.id, 'text', 'Имя должно быть от 4 до 12 символов.');
	});

	$('#email').on('input blur', function() {
		desel(this.id, 'email', 'Введенный email должен иметь формат ____@__.__');
	});

	$('#tel').focusin(function() {
		$(this).mask("+38(999)999-99-99",
			{
				"clearIncomplete":true,
			});
	});

	$('#password').on('input blur', function() {
		desel(this.id, 'text', 'Пароль должен быть от 4 до 12 символов.');
	});

	$('#confirm_password').on('input blur', function() {
		desel(this.id, 'c_pass', 'Пароли не совпадают.');		
	});

	setInterval(function () {
		$('#login').triggerHandler('input');
		$('#email').triggerHandler('input');
		$('#password').triggerHandler('input');
		$('#confirm_password').triggerHandler('input');
	}, 300);

	$('form button').on('click', function() {
		user.user_name = 	$('#login').val().trim();
		user.pass = 			$('#password').val();
		user.mail = 			$('#email').val().trim();
		user.phone = 			$('#tel').val().trim()
	});

	$('form').on('submit', function (event) {
		event.preventDefault();

		
			// $.ajax({
			// 	async: true,
			// 	url: 'https://eventssion.com/api/mobile/1/native_register',
			// 	type: 'POST',
			// 	dataType: 'JSON',
			// 	data: {
			// 		user_name: user.user_name,
			// 		mail: user.mail,
			// 		pass: user.pass,
			// 		phone: user.phone,
			// 	}, 
			// 	crossDomain: true,
			// 	beforeSend: function () {
			// 		$('#sign_up').attr('disabled', true);
					
			// 	}
			// }).done(function(status) {
			// 	alert('Succss: ' + status.status);
			// 		$('#sign_up').attr('disabled', false);
			// })
			// .fail(function(status) {
			// 	alert('Error: '+status.status);
			// 		$('#sign_up').attr('disabled', false);
			// });
			// 
			
			var params = $.param(user);

			var xhr = new XMLHttpRequest();
			// var xhr.open('POST', '', true);
		

	});

});



var valid = function (data, type) {

	switch(type) {
		case 'text':
			var reg = /(\w{4,12})/;
			return reg.test(data);
			break;

		case 'email':
			var reg = /@\w{1,10}\.{1,10}/;
			return reg.test(data);
			break;

		case 'c_pass':
			var pass = $('#password').val();

			if (pass == data && data != '') {
				return true;
			}else{
			 return false;
			}
			break;
	}
}

var message = function (label, message) {
	$('label[for='+label+']').text(message).addClass('a-message');
}

var i_lazy_ass = function () {
	$('#login').val('Redgrejv');
	$('#password').val('Zhurid1995');
	$('#confirm_password').val('Zhurid1995');
	$('#email').val('redgrejv10@gmail.com');
	$('#tel').val('+38(096)231-29-45');
}