const PAGE = {
	init:function(){
		this.bind();
    // console.log(444)
	},
	bind:function(){
		$('.user-del').on('click',this.userDel)
	},
	userDel: function() {
    console.log(66)
   let id = $(this).data('id');  
   $.ajax({
    url: '/api/user',
    data: { id },
    type: 'DELETE',
    success: function(data) {
      if(data.code === 200){
        alert('删除成功！')
        location.reload()
      }else{
        console.log(data)
      }
    },
    error: function(err) {
      console.log(err)
    }
   })
  },
}
PAGE.init();