const express = require("express");
const qr = require("qrcode");
const data = require("./data.json");

const app = express();
app.use(express.json());

app.get("/api/v1/get-qrcode",async(req,res) => {
    qr.toFile("./images_qr/qr.png", JSON.stringify(data.LinkedIn), (err) => {
        if(err) {
            console.log(err);
        }
    } );
    res.send(data);
});

app.get("/api/v1/getQRImage",async(req,res) => {
    qr.toDataURL(JSON.stringify(data.LinkedIn), (err, data) => {
        if(err) console.log(err);
        res.send(`<img src=${data} />`).json({qrcode: data});
    } );
    
});

app.listen(5000, () => {console.log("Server is running on 5000 port");});