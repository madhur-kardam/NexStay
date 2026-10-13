const mongoose=require("mongoose");
const initData =require("./data.js");
const Listing =require ("../models/listing.js");

const MONGO_URL="mongodb://127.0.0.1:27017/NexStay";

main().then(()=>{
    console.log("connected to DB");
}).catch(err=>{
    console.log(err);
});
async function main(){
    await mongoose.connect(MONGO_URL);
}

const initDB = async ()=>{
await Listing.deleteMany({});
initData.data = initData.data.map((obj)=>({...obj, owner: "6ab0fa134864ff32eec9d8c2"}));
await Listing.insertMany(initData.data);
console.log("data initialized successfully");
};

initDB();