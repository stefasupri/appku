/**
 * SendController
 *
 * @description :: Server-side logic for managing sends
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(req, res){
		return res.view('sendEmail',{
			layout: 'layout'
		});
	},
	handle: function(req, res){
		var api_key = 'key-e4d5c4b987e1c8efaa184f950963e92f';
		var domain = 'app94a7cac230124cbdbed4986c8ce2d568.mailgun.org';
		var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
		 
		var data = {
		  from: 'Excited User <postmaster@app94a7cac230124cbdbed4986c8ce2d568.mailgun.org>',
		  to: 'stefa.supri@gmail.com',
		  subject: req.body.subject,
		  text: req.body.message
		};
		 
		mailgun.messages().send(data, function (error, body) {
		  console.log(body);
		  if(!error)
		  	res.send("Mail sent");
		  else
		  	res.send("Mail not sent");
		});
	}
};

