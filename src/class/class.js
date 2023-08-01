// class DeleteUserAction {
//     constructor() {
//         this.type = 'DELETE-USER';
//         this.payload = {
//             userId: userId
//         }
//     }
// }
//
// const action1 = new DeleteUserAction(1234)
// const action2 = new DeleteUserAction(323234)
// console.log(action1)
// console.log(action2)


class User {
    #name = ''

    constructor(name, site, dob) {
        this.#name = name
        this.site = site
        this.dateOfBirth = dob
        this.counter = 0
    }

    get name() {
        return this.#name
    }

    set name(value) {
        this.#name = value
    }

    hello() {
        this.counter++
        console.log(`I am ${this.name} from ${this.site}`)
    }
}


const u1 = new User('Ustin', 'it-incubator.by', new Date(1988, 1, 2))
const u2 = new User('Dimich', 'it-incubator.by', new Date(1989, 10, 12))

u1.name = 'kykykyk'





class Coder extends User {
    constructor(name,site,dob,tech) {
        super(name,site,dob)
        this.tech = tech
    }
    code() {
        console.log(`I am ${this.name},here is my ${this.tech} code : const sum = (a,b) => a + b`)
    }

    hello() {
        super.hello();
        console.log('Go away')
    }
}

const coder1 = new Coder('Ustin Coder', 'it-incubator.by', new Date(1988, 1, 2),
    'c#')

//coder1.hello()

class Hacker extends Coder{
    constructor(name,site,dob) {
        super();
        this.tech = 'XXX'
        this.name = 'XXX'
    }
    code() {
        console.log("I'll hack evrything")
    }
}

const hacker = new Hacker('Ustin Coder', 'it-incubator.by', new Date(1988, 1, 2),
    'c#')

let users = [u1,u2,coder1,hacker]
users.forEach(u => u.hello())