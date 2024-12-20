


exports.getData = function(req, res) {
	var ip = req.body;
	console.log(ip);

    if(!ip.id) {
        res.status(200).send({status:"error", "msg":"All conditions not met: Bad Request"});
    } else {
        console.log(ip);
    }
}