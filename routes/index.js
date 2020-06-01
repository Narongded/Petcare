var express = require('express');
var router = express.Router();
const path = require('path');
const db = require('monk')('mongodb+srv://narongded:champ1234@cluster0-t6abg.mongodb.net/data')
const ct = db.get('form');
/* GET home page. */


router.get('/', function(req, res, next) {
  
  res.render('index1');
});


router.get('/get', async function(req, res, next) {

  data = await ct.find({});
  res.render('show',{data : data});
});
router.get('/get/:id', async function(req, res, next) {
  await ct.findOneAndDelete({ id: req.params.id }).then((doc) => {  })
  res.redirect('/get')
  
});

router.get('/post', function(req, res, next) {

  
  res.render('form');
  
});
router.get('/edit/:id', function(req, res, next) {
  console.log(req.params.id);
  var int = {id : req.params.id}
  res.render('edit',{id : int});
  
});
router.post('/post/:id',async function(req,res,next){

  await ct.findOneAndUpdate({id: req.params.id}, {$set: req.body}).then((updatedDoc) => {
      console.log(updatedDoc)
    })
  

  res.redirect('/');
})
router.post('/post', async function(req,res,next){
  await ct.insert({
    id: req.body.id,
    status: req.body.status,
    _name: req.body._name,
    type: req.body.type,
    type1: req.body.type1,
    type2: req.body.type2,
    day: req.body.day,
    aage: req.body.aage,
    int: req.body.int,
    pn: req.body.pn,
    ls: req.body.ls,
    ad: req.body.ad,
    ad1: req.body.ad1,
    ad2: req.body.ad2,
    ad3: req.body.ad3,
    ad4: req.body.ad4,
    tel: req.body.tel

    //    file:req.body.file
}, function (err, blog) {
    if (err) {
        res.send(err)
    } else {
        
    }
  })
  res.redirect('/get');
})
module.exports = router;
