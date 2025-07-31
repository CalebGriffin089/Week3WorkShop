module.exports.route = function(app, path) {
    app.get('/', function(req, res) {
        let filepath = path.join(__dirname, '../www/form.html');
        res.sendFile(filepath);
    });
};
