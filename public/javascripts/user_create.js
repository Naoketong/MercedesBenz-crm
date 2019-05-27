const PAGE = {
  init: function() {
    this.bind();
    console.log(33)
  },
  bind: function() {
    $('#userSubmit').bind('click',this.handleSubmit);
  },
  handleSubmit: function() {
    let name = $('#userName').val();
    let phone = $('#userPhone').val();
    let password = $('#userPassword').val();
    let role = $('#userRole').val();
    role = Number(role)

    if(!name || !phone || !password || !role){
      alert('请输入必要参数啊大锅');
      return
    }
    $.ajax({
      url: '/api/user',
      data: { name, phone, password, role },
      type: 'POST',
      beforeSend: function() {
        $("#userSubmit").attr("disabled",true);
      },
      success: function(data) {
        if(data.code === 200){
          alert('新增成功！')
          location.href = '/admin/user'
        }else{
          alert(data.message)
        }
      },
      error: function(err) {
        console.log(err)
      },
      complete: function() {
        $("#userSubmit").attr("disabled",false);
      }
    })
  }
}

PAGE.init();

