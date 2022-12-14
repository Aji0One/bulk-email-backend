const {MongoClient}= require('mongodb');

    
module.exports={
    selectedDb:{},
    async Connect () {
        
        try{
       const client = await MongoClient.connect(process.env.MONGODB_URL);
       this.selectedDb= client.db("sample");
       console.log("Db connection is established");
  
        }catch(err){
            console.error(err);
        }
        
    }
}