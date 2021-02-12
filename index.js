const express = require("express");
const helmet = require('helmet');


const app = express();


const PORT = process.env.PORT || 5000;


app.use(express.static("public"));
app.use(express.json());
app.use(helmet());



app.listen(PORT, () => {
    console.log(`PORT: ${PORT}`);
})