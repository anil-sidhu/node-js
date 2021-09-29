const dbConnect = require('./mongodb');

const insertData=async ()=>{
   let data = await dbConnect();
  let result = await data.insert(
      [
          {name:'max 5',brand:'micromax',price:420,category:'mobile'},
          {name:'max 6',brand:'micromax',price:520,category:'mobile'},
          {name:'max 7',brand:'micromax',price:620,category:'mobile'},

      ]
  )
  if(result.acknowledged)
  {
      console.warn("data is inserted")
  }
}

insertData();