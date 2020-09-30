function checkName(){
	var name = document.getElementById('name').value;
	var error_name = document.getElementById('error_name');
    var regexName = /^[^\d+]*[\d+]{0}[^\d+]*$/;

    if (name == "" || name == null) {
    	error_name.innerHTML = "Họ tên không được để trống!";
    }else if(!regexName.test(name)){
    	error_name.innerHTML = "Họ tên không đúng định dạng!";
    }else{
    	error_name.innerHTML = "";
    	return name;
    }
}

function checkEmail(){
	var email = document.getElementById('mail').value;
	var error_email = document.getElementById('error_email');
	var regexEmail = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;

	if (email == "" || email == null) {
		error_email.innerHTML = "Email không được để trống!";
	}else if(!regexEmail.test(email)){
		error_email.innerHTML = "Email không đúng định dạng!";
	}else{
		error_email.innerHTML = "";
		return email;
	}
}

function validate(){

	if (checkName() && checkEmail()) {
		document.getElementById('right').innerHTML = "Họ tên: " + checkName() + " Email: " + checkEmail();
		
	}else{
		alert('Vui lòng kiểm tra dữ liệu đầu vào!');
	}
	return false;

}