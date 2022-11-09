const mongoose = require('mongoose')

if (process.argv.length < 3 || process.argv.length > 5) {
    console.log('Please provide the password as an argument: node mongo.js <password> OR node mongo.js <password> name phoneNumber')
    process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://fullstack:${password}@cluster0.lwv1tvu.mongodb.net/phoneBookApp?retryWrites=true&w=majority`

const phoneBookSchema = new mongoose.Schema({
    name: String,
    callnumber: String,
})

const PhoneBook = mongoose.model("PhoneBook", phoneBookSchema)

mongoose
    .connect(url)
    .then((result) => {

        if (process.argv.length == 3) {
             return PhoneBook.find({}).then((result) => {
                console.log("Phonebook:");

                result.forEach(obj => {
                    console.log(obj.name, obj.callnumber);
                });
            });
        } else {
            const phoneBook = new PhoneBook({
                name: process.argv[3],
                callnumber: process.argv[4],
            })

            return phoneBook.save().then(result0=> {
                console.log("Added", result.name, "number", result.callnumber, "to phonebook")
            })
        }
        

    })
    .then((result) => mongoose.connection.close())
    .catch((err) => console.log(err))