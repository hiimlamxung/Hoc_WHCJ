function Blurname(){
	var name=document.getElementById('name').value;
	var error_name=document.getElementById('error_name');
	var regexName=/^[^\d+]*[\d+]{0}[^\d+]*$/;
	if(name==""||name==null){
		error_name.innerHTML="Họ tên không được để trống";
	}
	else if(!regexName.test(name)){
		error_name.innerHTML="Họ tên không đúng, yêu cầu kiểm tra lại";
	}
	else{
		error_name.innerHTML="(*)";
		return name;
	}

}
function Blursdt(){
	var sdt=document.getElementById('sdt').value;
	var error_sdt=document.getElementById('error_sdt');
	var regexSdt=/((09|03|07|08|05)+([0-9]{8})\b)/g; // số điện thoại phải ít nhất 10 chữ số, đầu số là 09,03,07,08,05.
	if(sdt==""||sdt==null){
		error_sdt.innerHTML=" Số điện thoại không được để trống, vui lòng bổ sung";
	}
	else if(isNaN(sdt)){
		error_sdt.innerHTML="Số điện thoại không đúng định dạng, yêu cầu kiểm tra lại";
	}
	else if(!regexSdt.test(sdt)){
		error_sdt.innerHTML="Số điện thoại không đúng định dạng, yêu cầu kiểm tra lại";
	}
	else{
		error_sdt.innerHTML="(*)";
		return sdt;
	}
}

function Bluremail(){
	var email=document.getElementById('email').value;
	var error_email=document.getElementById('error_email');
	var regexEmail=/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
	if(email==""||email==null){
		error_email.innerHTML="Email không được bỏ trống, vui lòng bổ sung";
	}
	else if(!regexEmail.test(email)){
		error_email.innerHTML="Email không đúng định dạng, vui lòng kiểm tra lại";
	}
	else error_email.innerHTML="(*)";
	return email;
}
function Blurnoidung(){
	var noidung_txt=document.getElementById('noidung_txt').value;
	var error_noidung=document.getElementById('error_noidung');
	if(noidung_txt==""||noidung_txt==null){
		error_noidung.innerHTML="Nội dung rõ ràng, vui lòng không để trống";
	}
	else error_noidung.innerHTML="(*)";
	return noidung_txt;
}
function Get(){
	if(Blurname()&&Blursdt()&&Bluremail()&&Blurnoidung()){
		alert('Gửi thông tin liên hệ thành công. Xin cảm ơn !');
	}
	else alert('Dữ liệu nhập vào chưa hợp lệ hoặc còn thiếu sót, bạn vui lòng kiểm tra lại');
}