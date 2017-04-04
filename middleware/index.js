module.exports.sendResponse = function(req, res, next) {
	var isAuthed = false;
	var user = null;
	// res, content, errFlag, errMsg, sucFlag, sucMsg
	res.sendResponse = function(obj) {

		if (!obj.content)
			obj.content = null;
		// flags
		if (!obj.errorFlag)
			obj.errorFlag = false;
		if (!obj.successFlag)
			obj.successFlag = false;
		// messages
		if (!obj.errorMsg)
			obj.errorMsg = false;
		if (!obj.successMsg)
			obj.successMsg = false;
		// redirect
		if (!obj.redirectUrl)
			obj.redirectUrl = null;
		// Auth
		if (req.isAuthenticated()) {
			isAuthed = true;
			user = req.user;
		}
		// We set this true incase we need to authenticate.
		if (!obj.requiresAuth)
			obj.requiresAuth = false;
		// To denote we need to login.
		if (!obj.authFailure)
			obj.authFailure = false;

		res.send({
			content: 	obj.content,
			flags: 		{ error : obj.errorFlag, success : obj.successFlag },
			msg: 		{ error : obj.errorMsg, success : obj.successMsg },
			redirect: 	{ url : obj.redirectUrl },
			auth: 		{
				requiresAuth : obj.requiresAuth,
				isAuthed : isAuthed,
				user : user,
				authFailure: obj.authFailure
			}
		});
		
	};
	next();
};