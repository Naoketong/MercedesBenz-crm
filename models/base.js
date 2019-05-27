const knex = require('./knex');
class Base {
	constructor(props) {
		this.table = props;
	}
	all(){//全部
		return knex(this.table).select()
	}
	select(params){//挑选、查找
		return knex(this.table).select().where(params)
	}
	insert(params){//插入
		return knex(this.table).insert(params)
	}
	update(id,params){//修改
		return knex(this.table).where('id','=',id).update(params)
	}

	delete(id){//删除
		return knex(this.table).where('id','=',id).del()
	}
}
module.exports = Base




// class User extends Base {
//   constructor(props = 'user') {
//     super(props);
//   }
// }
// module.exports = new User()

