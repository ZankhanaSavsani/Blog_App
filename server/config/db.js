const mongoose = require("mongoose");

mongoose.set('strictQuery', false);


mongoose.connect("mongodb+srv://savsanizankhana123:VJTDp-8%402MKfvQ-@products.v21yq.mongodb.net/Blog_App_MERN?retryWrites=true&w=majority&appName=Products").then(()=>{
    console.log("connected!");
}).catch((err)=>{
    console.log(err);
})