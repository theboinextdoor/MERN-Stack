const mongoose = require('mongoose')

const uri = "mongodb+srv://cman55245:qwer1234@cluster0.oy0m56a.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri)


// we need to create schema     
//! Schema : means the structure of the database

const userDetailsSchema = new mongoose.Schema({
    id: Number,
    name: String,
    city: String,
    age: Number,
    friends: [Object]
})


// We need to create a model now 
const UserDetails = new mongoose.model('userInfo', userDetailsSchema)


//? Data to insert inside the Documents
const data2 = {
    id: 1523,
    name : "theboynextdoor",
    city : "Bengaluru",
    age: 22,
    friends : [{
        name: 'Carla',
        hobbies : ['Dancing', 'Reading' , 'Listining Music']
    }
    ,{
        name: 'Leo',
        hobbies : ['Sketching' , 'Travellling' , 'Caving']
    }
]
}


const main = async () => {
    try {

        //? Reading Documents
        // const data = await UserDetails.find({age: {$lt: 30}})
        // console.log(data)
        
        //? Inserting Documents
        await UserDetails.insertMany(data2)
        const data  = await UserDetails.find({city: 'Bengaluru'})
        console.log(data)
        

    } catch (error) {
        console.log(error);
    } finally {
        mongoose.connection.close()
    }
}


main()