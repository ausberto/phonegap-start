$(document).ready(function(){
	getmsg();
	Shadowbox.init({
		skipSetup: true
	});
});
function getmsg()
{
	$("#loading").show();
	//$("#msg_n,#img_n").hide();
	var params = 't=F';
    $.ajax({
		url:'get.php',
        data: params,
        success:function(data) {
			$("#msg_n").html(data);
			//$("#msg_n").show();
        }
    });

	var params = 't=I';
    $.ajax({
		url:'get.php',
        data: params,
        success:function(data) {
			$("#img_n").html(data);
			//$("#img_n").show();
        }
    });
	$("#loading").hide();
	setTimeout('Shadowbox.setup()',800);
}