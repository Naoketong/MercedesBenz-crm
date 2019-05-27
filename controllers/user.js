 const User = require('./../models/user.js');
const { formatTime } = require('./../utils/date.js');
const userController = {
	insert: async function(req,res,next){
		/*Node.js Express 里常常见到function(req, res, next), 这3个参数分别是什么意思呢？
		req :  request的缩写， 请求的数据。Request 对象表示 HTTP 请求，包含了请求查询字符串，参数，内容，HTTP 头部等属性。我们常用req.body.xx来表示POST的xx属性res:   
		response的缩写， 响应的数据。Response 对象表示 HTTP 响应，即在接收到请求时向客户端发送的 HTTP 响应数据。我们常常用res.send() 传送HTTP响应 , 
		res.render()渲染结果页面next 则是前往下一个中间件，执行相同路径的下一个方法。比如checkNotLogin函数里末尾有next();
		function checkNotLogin(req, res, next) {    next();}那么app.get('/reg', checkNotLogin);就会继续执行下一个同样是"/reg"路径的方法app.get('/reg', function (req, res) {});
		*/

		let name = req.body.name;
		let phone = req.body.phone;
		let password = req.body.password;
		let role = req.body.role;
		let created_time = new Date();
		if(!name || !phone || !password || !role){
			res.json({ code :0, message: '缺少参数' });
			return
		}  
		try{
			const users = await User.insert({
				name, phone, password, role, created_time
			});

			res.json({
				code: 200,
				data: users
			})
		}catch(e){
			console.log(e);
			res.json({
				code: 0,
				message: '内部错误(inser)'
			})
		}
	},
	show: async function(req,res,next){
		try{
			const users = await User.all();
			res.locals.users = users.map((data)=>{
				data.role_display = (data.role == 1) ? '管理员':'销售';
				data.created_time_display = formatTime(data.created_time)
				return data
			});
			res.render('admin/user.tpl',res.locals)
			/*https://www.jianshu.com/p/136a95f5bdc6*/
			/*app.locals 上通常挂载常量信息（如博客名、描述、作者信息）
			res.locals 上通常挂载变量信息，即每次请求可能的值都不一样（如请求者信息，res.locals.user = req.session.user）。*/
		}catch(e){
			res.locals.error = e;
			res.render('error',res.locals);
		}	
	},
	edit: async function(req,res,next){
		try{
			const id = req.params.id;
			const users = await User.select({id})
			res.locals.user = users[0];
			res.render('admin/user_edit.tpl',res.locals)
		}catch(e){
			res.locals.error = e;
      res.render('error',res.locals);
		}
	}, 
	update: async function(req,res,next) {
	  let name = req.body.name;
	  let phone = req.body.phone;
	  let password = req.body.password;
	  let role = req.body.role;
	  let id = req.params.id;
	  if(!name || !phone || !password || !role){
	    res.json({ code: 0, message: '缺少必要参数' });
	    return
	  }
	  try{
	    const users = await User.update( id ,{ 
	      name, phone, password, role
	    });
	    res.json({ 
	      code: 200, 
	      data: users
	    })
	  }catch(e){
	    console.log(e)
	    res.json({ 
	      code: 0,
	      message: '内部错误(update)'
	    })
	  }
	},
	delete: async function(req,res,next){
	  let id = req.body.id;
	  if(!id){
	    res.json({ code: 0, data: '断网了' });
	    return
	  }
	  try{
	    const user = await User.delete(id);
	    res.json({ code: 200, data: user})
	  }catch(e){
	    res.json({ code: 0, data: e })
	  }
	},
	renderUserCreate: function(req,res,next){
		res.render('admin/user_create')
	}
}
module.exports = userController

