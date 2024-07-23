const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/signup.html");
});

app.post("/", function(req, res){
    var FirstName = req.body.Lname
    var LastName= req.body.Email
    var Email = req.body.Fname


    var data = {
        members:[
            {
                email_address: Email,
                status: "subscribed"
            }
        ]
    };

    var jsonData = JSON.stringify(data);

    var option = {
        url: "https://us13.api.mailchimp.com/3.0/lists/bd565f3834",
        method: "POST",
        headers: {
            "Authorization": "Jay1 a42e0501afcc2b4f3e7448ce980a9c59-us13"
        },
        body: jsonData
    }

    request(option, function(error, response, body){
        if(error){
            console.log(error);
        }else{
            console.log(response.statusCode);
        }
    });

});





app.listen(3000, function(){
    console.log("Server is running on port 3000 ....!");
});



// API KEY
// a42e0501afcc2b4f3e7448ce980a9c59-us13

// List ID
// bd565f3834