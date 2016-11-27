var user = {}

$(document).ready(function() {

	$('#tel').focusin(function() {
		
		$(this).mask("+38 (999) 999-99-99",
			{
				"clearIncomplete":true,
				completed: function(){
					var temp = $(this).val();
					var tel = "";

					var leng = temp.length;

					for (var i = 0; i < leng; ++i) {
						if($.isNumeric(temp[i])){
							tel += temp[i];
						}
					}

					if (tel.length < 12) {
						user.tel = '';
						return false;
					}else{
						user.tel = tel;
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
			var login = $(this).val();

			if (reg.test(login)) {
				user.login = login;
			}else{
				user.login = '';
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

			var login = user.login;
			var tel = user.tel;
			var email = user.email;
			var pass = user.pass;

			if (!login||!tel||!email||!pass) {
				return false;
			}
		});


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
  	// 	request.open('POST','http://194.247.12.239:38001/api/mobile/1/native_register',true);
  	// 	request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
  	// 	request.send(params);

		 //  if (request.status==200) {
		 //    console.log('success');
		 //  }	

			

		});

});

function label(id, complete = true){
	var label = $('label[for='+id+']');

	if (complete) {
		label.text('Подходит').css('color', 'green');
	}else{
		label.text('Поле неправильно заполнено').css('color', 'red');
	}
}