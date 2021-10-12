const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/e-comm');
const productSchema = new mongoose.Schema({
   name: String,
   price: Number,

});

const main = async () => {
   const Product = mongoose.model('products', productSchema);
   let data = new Product({ name: "max 131", price: 200, brand: 'xyz' });
   const result = await data.save;
   console.log(result);
}

const update = async () => {
   const Product = mongoose.model('products', productSchema);
   let data = await Product.updateOne(
      { name: 'max pro' },
      {
         $set: { name: 'max pro 2', price: 1000 }
      });
   console.log(data);
}

const deleteData = async () => {
   const Product = mongoose.model('products', productSchema);
   let data = await Product.deleteOne(
      { name: 'm' }
      );
   console.log(data);
}

const findData = async () => {
   const Product = mongoose.model('products', productSchema);
   let data = await Product.find();
   console.log(data);
}
 
 
findData();