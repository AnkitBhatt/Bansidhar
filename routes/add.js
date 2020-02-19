var express = require('express');
var router = express.Router();


router.post('/', function(req, res, next) {
    var fs = require('fs');
    var obj;
    fs.readFile('./public/JSON/mainData.json', 'utf8', async (err, data)=> {
    if (err) throw err;
        try {
            obj = JSON.parse(data);
            var items = obj.items;
            var new_item = {
                Name:req.body.name,
                display:[
                    req.body.name,
                    req.body.weight,
                    req.body.price,
                    req.body.mrp
                ]
            };
            obj.items.push(new_item);
            await fs.writeFileSync('./public/JSON/mainData.json', JSON.stringify(obj, null, 2));
            await res.render('index', {data:obj});
        } catch (e) {
            console.error( e );
        }
    });
});

module.exports = router;