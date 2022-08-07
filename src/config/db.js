const mongoose = require("mongoose");

exports.makeDb = () => {
 
  mongoose.connect(
    // Update here mongodb access credential
    'mongodb+srv://testing123:IQrq55EZ8qw10iID@cluster0.knlzf.mongodb.net/?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      
      useUnifiedTopology: true
    }
  );
   
};