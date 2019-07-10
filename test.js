const userModel = require('./app/models/users')


// userModel.model().then(respModel => {
//     const objUser = new respModel({ uuid: 1, user: "pjgt", pass: "123456", status: 1 })
//     objUser.save((err, resp) => {
//         if (err) console.log(err)
//         console.log(resp)
//     })
// }).catch(err => {
//     console.log(err)
// })

async function saveUser() {
    try {
        let modelUser = await userModel.model()
        const objUser = new modelUser({ uuid: 1, user: "pjgt", pass: "123456", status: 1 })
        objUser.save((err, resp) => {
            if (err) console.log(err)
            console.log(resp)
        })
    } catch (err) {
        console.log("Ocurrio un problem")
    }
}


async function getUsers(){
    let modelUser = await userModel.model()
    modelUser.find().exec((err, resp)=>{
        if (err) throw err
        console.log(resp)
    })
}


async function getUsersById(){
    let modelUser = await userModel.model()
    modelUser.find({_id: "5d25441300fc3277d3bb17b6"}).exec((err, resp)=>{
        if (err) throw err
        console.log(resp)
    })
}

async function searchByUserName(){
    let modelUser = await userModel.model()
    modelUser.find({user: "pjgt"}).exec((err, resp)=>{
        if (err) throw err
        console.log(resp)
    })
}

async function updateById(){
    let modelUser = await userModel.model()
    modelUser.updateOne({_id: "5d25441300fc3277d3bb17b6"}, {user: "Darwin"}).exec((err, resp)=>{
        if(err) console.log(err)
        console.log(resp)
    })
}

async function deleteUser(){
    let modelUser = await userModel.model()
    modelUser.deleteOne({_id: "5d25441300fc3277d3bb17b6"}).exec((err, resp)=>{
        if(err) console.log(err)
        console.log(resp)
    })
}



// saveUser()
// getUsers()
// getUsersById()
// searchByUserName()
// updateById()
// deleteUser()