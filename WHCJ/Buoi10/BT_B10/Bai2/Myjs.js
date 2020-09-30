$(document).ready(function(){
	$('button').click(function(){

	
		var numa=$('#numa').val();
		var numb=$('#numb').val();
		var numc=$('#numc').val();
		var number_a=parseFloat($('#numa').val());
		var number_b=parseFloat($('#numb').val());
		var number_c=parseFloat($('#numc').val());
		var delta=(number_b*number_b)-(4*number_a*number_c);
		if(numa==''||numb==''||numc==''){
			alert('Nhập đầy đủ số, không được để trống');

		}
		else if(isNaN(numa)||isNaN(numb)||isNaN(numc)){
			alert('Số không đúng định dạng, yêu cầu kiểm tra và nhập lại');
		}
		else if(numa==0){
			alert('Phương trình bậc 2 không đúng, số a phải khác 0');
		}
		else if(delta==0){
			var x_double=(-number_b)/(2*number_a);
			$('#result').html('Phương trình có 2 nghiệp kép x1=x2='+x_double);
		}
		else if(delta>0){
			$('#result').html('Phương trình có 2 nghiệp phân biệt' +"<br>"+"x1= "+ (-number_b+Math.sqrt(delta))/(2*number_a)+"<br>"+"x2="+(-number_b-Math.sqrt(delta))/(2*number_a));
		}
		else if(delta<0){
			alert('Phương trình vô nghiệm');
		}
		console.log(delta);
		console.log(number_a);
		console.log(number_b);
		console.log(number_c);

	});




});