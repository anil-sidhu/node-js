const dbConnect= require('./mongodb');

dbConnect().then((resp)=>{
resp.find({name:'nord'}).toArray().then((data)=>{
console.log(data)
})
})

const main=async ()=>{
   let data = await dbConnect();
   data = await data.find({name:'nord'}).toArray();
   console.log(data)
}

main()
