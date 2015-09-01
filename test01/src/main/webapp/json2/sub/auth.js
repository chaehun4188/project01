//$('#loginBtn').on('click', function(event) {});
define('auth', function() {
	
	return {
		init: function() {
			$('#loginBtnMain').click(function(event) {
				event.preventDefault();
				$.getJSON(contextRoot +'/json/auth/login.do', 
						{
					email: $('#email').val(),
					password: $('#password').val()
						},
						function(result) {
							if (result.data == 'yes') {
								$(document.body).trigger('login.success');
							} else {
								$('#message').text('이메일 또는 암호가 맞지 않습니다.');
							}
						});
			});
			
			$('input').focus(function(event) {
				$('#message').text('');
			});
			
		}
	};//return
});//define










