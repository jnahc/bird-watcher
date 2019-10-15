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

// PREFERENCES
app.get(`/preferences`,(request,response)=>{
  // console.log(request);
  response.sendFile(`views/preferences.html`,{
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






app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})