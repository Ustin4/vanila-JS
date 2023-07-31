/*
/!*
setTimeout(() => {
    console.log('1')
    setTimeout(() => {
        console.log('2')
        setTimeout(() => {
            console.log('3')

        }, 1000)

    }, 1000)
}, 1000)
*!/


function wait(ms){
return new Promise((resolve)=>{
    setTimeout(()=>{resolve()},ms)

})
}


async function run() {
    await wait(1000)
    console.log(1)
    await wait(1000)
    console.log(2)
    await wait(1000)
    console.log(3)
}

run()



*/

const findUserInDB = (id) => {
    const users = [{id: 1, name: 'kiki', friend: 3}, {id: 2, name: 'kyrid', friend: 4}, {
        id: 3,
        name: 'misha',
        friend: 5
    }]

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            let user = users.find(f => f.id === id)
            if (user === null) {
                reject('Error user not found')
            } else {
                resolve(user)
            }

        }, randomIntFromInterval(500, 1500))
    })
}

const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(findUserInDB(20))