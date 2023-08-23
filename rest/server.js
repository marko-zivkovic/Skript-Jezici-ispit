const express = require('express');
const app = express();
const PORT = 3000;
const cors = require("cors");

var corsOptions = {
  origin: ["http://localhost:8081","http://localhost:5173"] 
};

app.use(cors(corsOptions));
const db = require('./models')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'))

db.sequelize.sync().then(() => { console.log('sinhronizovano') })

const bioskopRoutes = require('./routes/bioskop')
app.use('/api/bioskop', bioskopRoutes)

const filmoviRoutes = require('./routes/filmovi')
app.use('/api/filmovi', filmoviRoutes)

const kategorijeRoutes = require('./routes/kategorije')
app.use('/api/kategorije', kategorijeRoutes)

const karteRoutes = require('./routes/karte')
app.use('/api/karte', karteRoutes)

const saleRoutes = require('./routes/sale')
app.use('/api/sale', saleRoutes)

const korisnikRoutes = require('./routes/korisnik')
app.use('/api/korisnici', korisnikRoutes)

const lokacijaRoutes = require('./routes/lokacija')
app.use('/api/lokacije', lokacijaRoutes)

const repertoarRoutes = require('./routes/repertoar')
app.use('/api/repertoari', repertoarRoutes)


app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);
