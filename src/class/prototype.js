// function DeleteUserAction(userId) {
//     //this = {}
//     this.type = 'DELETE-USER';
//     this.payload = {
//         userId: userId
//     }
// }
//
// const action1 = new  DeleteUserAction(1234)
// const action2 = new  DeleteUserAction(323234)
// console.log(action1)
// console.log(action2)


function User(name, site, dob) {
    this.name = name
    this.site = site
    this.dateOfBirth = dob
}

User.prototype.hello = function () {
    console.log(`I am ${this.name} from ${this.site}`)
}


const u1 = new User('Ustin', 'it-incubator.by', new Date(1988, 1, 2))
const u2 = new User('Dimich', 'it-incubator.by', new Date(1989, 10, 12))