var express = require('express');
var router = express.Router();


router.post('/', function(req, res, next) {
    var fs = require('fs');
    var obj;
    var remove_item = req.body.name;
    fs.readFile('./public/JSON/mainData.json', 'utf8', async (err, data)=> {
    if (err) throw err;
        try {
            obj = JSON.parse(data);
            var items = obj.items;
            obj.items = items.filter((item) => { return item.Name !== remove_item });
            await fs.writeFileSync('./public/JSON/mainData.json', JSON.stringify(obj, null, 2));
            await res.render('index', {data:obj});
        } catch (e) {
            console.error( e );
        }
    });
});

module.exports = router;