// it provides the tools and functionality to extablish the connections with the databse
const { MongoClient } = require('mongodb');

// it provides the connectivity with the local server 
const uri = "mongodb://127.0.0.1";

// creating the instanse with the Client server 
const client = new MongoClient(uri)


// additional data to insert into the database
const data2 = {
    id: 1523,
    name: 'Faraz Ashraf',
    city: 'Bengaluru',
    age: 22,
  }


//   functionality of the main function
const main = async () => {

    // establishes the connection 
    await client.connect();

   // connection with the database  
   const db = client.db('userDatabase')

   // connection with the database's collection
   const collecction = db.collection('userInfo')

    // Inserting the data into the database
    await collecction.insertOne(data2);

    // logic to find the data
    const data = await collecction.find({city: 'Bengaluru'}).limit(3).toArray()
    console.log(data);
    return 'Mian function completed'
}


main()
    .then(console.log())
    .catch((err) => {
        console.log(err)
    })
    .finally(() => {
        client.close()
    })