const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://thanhntph47592:NJ1WIHcOtgPAe0Ea@thanhnguyen.dcm3q.mongodb.net/MiamiExotics";

const connect = () => {
    mongoose.connect(mongoURI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(()=>{
            console.log("Kết nối với MongoDB thành công");
        })
        .catch((err)=>{
            console.error("Kết nối MongoDB thất bại",err);
        });
}

module.exports = {connect}
