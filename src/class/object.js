// const deleteUser = (userId) => {
//  const action ={
//      type:'DELETE-USER',
//      payload:{
//          userId:userId
//      },
//
//  }
//  return action
// }
// const action1 = deleteUser('1234')
// const action2 = deleteUser('44444')

const userFabric =(name)=>{
    const user = {
        name:name,
        site:'it-incubator.by',
        dateOfBirth:new Date(1988,1,2),
        hello(){
            console.log(`I am ${this.name} from ${this.site}`)
        }
    }
    return user
}

const u1 = userFabric('Ustin')
const u2 = userFabric('Dimich')

console.log(u1)
console.log(u2)