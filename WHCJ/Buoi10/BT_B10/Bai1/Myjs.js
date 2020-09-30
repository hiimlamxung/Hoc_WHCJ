$(document).ready(function(){
	$('button').click(function(){
		var num1=$('#num1').val();
		var num2=$('#num2').val();
		var cong=parseFloat(num1)+parseFloat(num2);
		var tru=parseFloat(num1)-parseFloat(num2);
		var nhan=parseFloat(num1)*parseFloat(num2);
		var chia=parseFloat(num1)/parseFloat(num2);
		if(num1==''||num2==''||isNaN(num1)||isNaN(num2)){
			alert('Số nhập không đúng hoặc trống,yêu cầu nhập lại');
		}
		else{
			if($('select').val()=='cong'){
				$('#result').val(cong);
			}
			if($('select').val()=='tru'){
				$('#result').val(num1-num2);
			}
			if($('select').val()=='nhan'){
				$('#result').val(num1*num2);
			}
			if($('select').val()=='chia'){
				$('#result').val(num1/num2);
			}
		}
	});
	
});