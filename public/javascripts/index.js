const PAGE = {
	init:function(){
		this.bind();
	},
	bind:function(){
		$('#userSubmit').bind('click',this.handleSubmit);
	},
	handleSubmit:function(){
		let name = $('#userName').val();
		let phone = $('#userPhone').val();
		let utm = PAGE.getQuery('utm');
		console.log(utm)
		// let url = window.location.href;
		// let utm = url +"utm";
		if(!name || !phone){
			alert('输入东西啊');
			return
			console.log(utm)
		}
		$.ajax({
			url: '/api/clue',
			data: {name, phone, utm},
			type: 'POST',
			beforesend:function() {
				$('#userSubmit').attr("disabled",true);
			},
			success:function(data) {
				if(data.code === 200){
					alert('申请成功！')
					window.location.reload();
				}else{
					alert(data.message)
				}
			},
			error: function(err){
				console.log(error)
			},
			complete: function(){
				$('#userSubmit').attr("disabled",false);
			},
		})

	},
	// getQuery:function(name) {
	// 	// console.log(window.location.href)
 //    var result = location.search.match(new RegExp("[\?\&]" + name+ "=([^\&]+)","i"));
 //    if(result == null || result.length < 1){
 //      return "";
 //    }
 //    return result[1];
 //  },
 getQuery:function(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
    
  },
  
}
PAGE.init();
