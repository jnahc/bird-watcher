const express = require (`express`);
const app = express();
const bodyParser = require(`body-parser`);

const PORT = process.env.PORT || 4000;

const db = require (`./models`)

app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


// VIEW ROUTES

// HOMEPAGE

app.get(`/`,(request,response)=>{
  // console.log(request);
  response.sendFile(`views/index.html`,{
    root: __dirname
  });
});

// SIGN UP PAGE
app.get(`/sign-up`,(request,response)=>{
  // console.log(request);
  response.sendFile(`views/sign-up.html`,{
    root: __dirname
  });
});


// ADMIN DASHBOARD
app.get(`/admin`,(request,response)=>{
  // console.log(request);
  response.sendFile(`views/admin.html`,{
    root: __dirname
  });
});

// -------------------API ROUTES

// INDEX
app.get(`/api/v1/subscribers`, (req,res) => {
  db.Subscriber.find({}, (err, allSubscribers) => {
    if (err) return console.log(err);
    res.json({
      status:200,
      count: allSubscribers.length,
      data: allSubscribers,
      dateRequested: new Date().toLocaleString()
    })
  })
})

// SHOW ONE ROUTE
app.get(`/api/v1/subscribers/:id`, (req,res) => {
  db.Subscriber.findById(req.params.id, (err, foundSubscriber) => {
    if (err) return console.log(err);
    res.json({
      status: 200,
      data: foundSubscriber,
      dateRequested: new Date().toLocaleString()
    })
  })
})

// CREATE Route
app.post(`/api/v1/subscribers/`, (req,res) => {
  db.Subscriber.create(req.body, (err, newSubscriber) => {
    if (err) return console.log(err);
    res.json({
      status: 201,
      count: 1,
      data: newSubscriber,
      dateRequested: new Date().toLocaleString(),
    })
  })
})

// UPDATE Route --- NOTE troubleshoot
app.put(`/api/v1/subscribers/:subscriberId`, (req,res) => {
  db.Subscriber.findByIdAndUpdate(
    req.params.subscriberid,
    res.body, {new: true},
    (error, updatedSubscriber) => {
      if (error) return console.log(error);

      res.json ({
        status: 200,
        count: 1,
        data: updatedSubscriber,
        dateRequested: new Date().toLocaleString()
      })
    }
  )
})

// DELETE ROute
app.delete(`/api/v1/subscribers/:subscriberId`, (req,res) => {
  db.Subscriber.findByIdAndDelete(req.params.subscriberId, (err, deletedSubscriber) => {
    if (err) return console.log(err);
    res.json ({
      status: 200,
      count: 1,
      data: deletedSubscriber,
      dateRequested: new Date().toLocaleDateString()
    });
  })
})

// ------------------ Start Server


app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})