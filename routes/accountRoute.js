module.exports.route = function(app, path) {
    app.get('/account', function(req, res) {
        let filepath = path.join(__dirname, '../www/account.html');
        res.sendFile(filepath);
    });
};
