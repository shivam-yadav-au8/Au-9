const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const passport = require('passport');
const cookieSession = require('cookie-session')
const mongodb=require('mongodb')
const url = "mongodb://localhost:27017";
require('./passport-setup');
let db;
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieSession({
    name: 'tuto-session',
    keys: ['key1', 'key2']
  }))
app.set('view-engine','ejs');
const isLoggedIn = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.sendStatus(401);
    }
}
app.use(passport.initialize());
app.use(passport.session());
app.get('/', (req, res) => res.render('homepage.ejs'))
app.get('/failed', (req, res) => res.send('You Failed to log in!'))
app.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
var mongoClient = new mongodb.MongoClient(url,{useNewUrlParser:true,useUnifiedTopology: true})
mongoClient.connect((err) => {
    if(err) throw err;
    db = mongoClient.db('ticket-app');
   
});
app.get('/good', isLoggedIn, (req, res) => {
//   let c=db.collection('users').find({email:req.user.emails[0].value})
//   console.log(c)
//   if(c.operation.options.email==req.user.emails[0].value){
//     res.render('admin.ejs',{name:`User logged in as ${req.user.emails[0].value}!`})
//   }
// else{
//   // console.log(req.user)
//   res.render('user.ejs');
  
// }
db.collection('users').findOne({"role":"admin"}, function(err, result) {
  if (err) throw err;
  // console.log(result.email,req.user.emails[0].value)
  if(result.email==req.user.emails[0].value){
    db.collection('users').find({}).toArray(function(err, resp) {
      if (err) throw err;

    res.render('admin.ejs',{name:`User logged in as ${req.user.emails[0].value}!`,data:resp})
    })
  }
  else{
    var query = {"email":req.user.emails[0].value}
    db.collection('users').find(query).toArray(function(err, resp) {
      if (err) throw err;
      res.render('user.ejs',{name:`User logged in as ${req.user.emails[0].value}!`,data:resp})
      // console.log(resp)
  })
    
  }
})
});
app.post('/new/:id',(req,res)=>{
  // console.log(req.params.id)
  // console.log(req.body.option)
  // var myquery = {"_id":`ObjectId(`+`"${req.params.id.substring(3)}"`+`)`};
  // console.log(myquery)
  // var newvalues = { $set: {"status": req.body.option} };
  db.collection('users').find({}).toArray(function(err, result) {
    if (err) throw err;
    for(var i =0;i<result.length;i++)
    {
      // console.log(result[i]._id,req.params.id);
      if(result[i]._id==req.params.id.substring(3))
      {
        var myquery = {status:result[i].status };
        var newvalues = { $set: {status:req.body.option } };
        db.collection('users').update(myquery, newvalues, function(err, res) {
          if (err) throw err;
          // console.log("done")

        })
        // console.log(result[i])
        break
      }
    }
  })
  // db.collection('users').updateOne(myquery, newvalues, function(err, res) {
  //   if (err) throw err;
  //   console.log("1 document updated");
  // });
 res.render('changes.ejs')
})
app.post('/change/:id',(req,res)=>{
  // console.log(req.params.id)
  // console.log(req.body.option)
  // var myquery = {"_id":`ObjectId(`+`"${req.params.id.substring(3)}"`+`)`};
  // console.log(myquery)
  // var newvalues = { $set: {"status": req.body.option} };
  db.collection('users').find({}).toArray(function(err, result) {
    if (err) throw err;
    for(var i =0;i<result.length;i++)
    {
      // console.log(result[i]._id,req.params.id);
      if(result[i]._id==req.params.id.substring(3))
      {
        var myquery = {status:result[i].status };
        var newvalues = { $set: {status:req.body.option } };
        db.collection('users').updateOne({},{ $set:{title:req.body.title,email:req.body.email,desc:req.body.desc,doc:req.body.doc,status:req.body.option }},{multi: true }, function(err, res) {
          if (err) throw err;
          console.log("done")
        })
        console.log(result[i])
        break
      }
    }
  })
  // db.collection('users').updateOne(myquery, newvalues, function(err, res) {
  //   if (err) throw err;
  //   console.log("1 document updated");
  // });
 res.render('changes.ejs')
})
app.post('/delete/:id',(req,res)=>{
  // console.log(req.params.id)
  // console.log(req.body.option)
  // var myquery = {"_id":`ObjectId(`+`"${req.params.id.substring(3)}"`+`)`};
  // console.log(myquery)
  // var newvalues = { $set: {"status": req.body.option} };
  db.collection('users').find({}).toArray(function(err, result) {
    if (err) throw err;
    for(var i =0;i<result.length;i++)
    {
      // console.log(result[i]._id,req.params.id);
      if(result[i]._id==req.params.id.substring(3))
      {
        var myquery = {status:result[i].status };
        var newvalues = { $set: {status:req.body.option } };
        db.collection.remove({"_id":ObjectId("60041d4312e61330c4b93b9b") })
        // db.collection("users").remove({"_id":ObjectId("60041d4312e61330c4b93b9b")})
        console.log(result[i])
        break
      }
    }
  })
  // db.collection('users').updateOne(myquery, newvalues, function(err, res) {
  //   if (err) throw err;
  //   console.log("1 document updated");
  // });
 res.render('changes.ejs')
})
app.get('/google/callback', passport.authenticate('google', { failureRedirect: '/failed' }),
  function(req, res) {
    res.redirect('/good');
  }
);
app.post('/admin',(req,res) => {
  let user = {
      title:req.body.title,
      email:req.body.email,
      ticket_desc:req.body.desc,
      ticket_status:req.body.status,
      doc:req.body.doc
  }
  db.collection('users').insertOne(user,(err,data)=>{
      res.redirect('/admin')
  })
});

app.get('/logout', (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/');
})

app.listen(3000, () => console.log('app listening on port ${3000}!'))