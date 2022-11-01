// Express.js Server Code goes here
// ...
let express = require("express");
let app = express();

let fileSystem = require("fs");

console.log("Express On----");

app.get("/", (request, response) => {
    response.send("<b>Hello world :)</b>");
});

app.get("/poem/:langName", (request, response) => { 
    let fileName = `poem${request.params.langName.toUpperCase()}.html`;
    console.log('filname---', fileName);    
    console.log(__dirname);
    fileSystem.readFile(fileName, (error, data) => {        
        if(data){
            response.sendFile('/usr/app/api/'+fileName);
                
        }else{
            response.send("Language is not supported");
        }  
    });    
}); 


app.listen(80, () => console.log("Express listening on port 80"));