const Base = require('./base.js');
const knex = require('./knex');

class Clue extends Base {
  constructor(props = 'clue') {
    super(props);
  }
  joinUser(params={}){
    return knex('clue')
      left.join('user', 'clue.user_id', '=', 'user.id')//leftjoin()加不加点也可以用
      .select(
        'clue.id',
        'clue.name',
        'clue.phone',
        'clue.utm',
        'clue.status',
        'clue.created_time',
        {'sales_name': 'user.name'},
      ).where(params)
  }

}
module.exports = new Clue()