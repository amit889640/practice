
/*
function showFreq(strr = 'Amit kumar') {
    let str = strr;
    let freq = {};
    for (let i = 0; i < str.length; i++) {
        {
            if (freq[str[i]]) {
                freq[str[i]]++;
            } else {
                freq[str[i]] = 0; // mistake : 0->1
            }
        }
        return freq; // see the parenthesis
    }
    
    
    remove duplicate
      select string_agg(userId, ',') from user group by userId having count(email) > 1

    const userSchema = new schema({
        Name: string,
        Mobile: number,
        Address: string
    })

    const UserModel = Mongoose.Model(userSchema)

    db.user.insertMany([
        {
            Name: 'amit',
            Mobile: 8896406322,
            Address: 'Varanasi'
        },
        {
            Name: 'Sumit',
            Mobile: 8896406333
          Address: 'Noida
        },
    ])

    db.user.find({ Name: 'Sumit' })

    db.user.remove({ Name: 'amit' })
      
      
      alter table column name var char

    app.js
      Start server
      configure db
    parsers

    route.js

    router.post('api/user', (req, res, next) => {
        const { name, mobile } = req.body;
        UserController.save(name, mobile) -> service -> repository
    })

    router.post('api/user/login', (req, res, next) => {
        const { name, mobile } = req.body;

        UserController.getToken(name, mobile) -> service -> repository
        if (user exist){
        jwt.sign({})
    }
})


router.get('api/user/:id', auth, (req, res, next) => {
    const userId = req.params.id
})


middleware.js
module.exports = (req, res, next) => {
        verify the user and proceed;
    next()
}


Remove duplicate  from mysql cmd mongo
what is stream
how to change the column datatype
shalow copy and deep copy

what is function and procedure
*/













