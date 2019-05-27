module.exports = function(req,res,next) {
	res.locals.seo = {
		title:'MercedesBenz CRM',
		keywords:'crm',
		description:'mercedesbenz-crm'
	}
	next();
}
