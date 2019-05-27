const PAGE = {
	init:function(){
		this.bind();
	},
	bind:function(){
		$('#userSubmit').on('click',this.handleSubmit)
	},
	handleSubmit:function(){
		let phone = $('#userPhone').val();
		let password = $('#userPassword').val();
		$.ajax({
			url:'/api/login',
			data:{phone,password},
			type:'POST',
			beforeSend: function(){
				$('#userSubmit').attr('disabled',true);
			},
			success: function(data){
				if(data.code === 200){
					alert('登陆成功啦');
					location.href = '/admin/user'
				}else{
					alert(data.message)
				}
			},
			error: function(err){
				console.log(err)
			},
			complete: function(){
				$('#userSubmit').attr('disabled',false);
			},
		})

	},
}
PAGE.init();
