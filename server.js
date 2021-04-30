const express = require("express");
const cors = require ("cors");
const app = express();
const PORT = process.env.PORT || 8080;


let corsOptions =  {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(routes);


app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});