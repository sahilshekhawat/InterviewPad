/**
 * HomeController
 *
 * @description :: Server-side logic for managing Homes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = require('waterlock').actions.user({
	
	home: function(req, res){
		return res.view('home');
	}
});

