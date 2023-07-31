import exp from "constants";

function increaseAge(u: userType) {
    u.age++
}

type userType = {
    name: string
    age: number
    address: { title: string }
}
test('reference big test', () => {

    let user: userType = {
        name: 'Ustin',
        age: 19,
        address: {
            title: "minsc"
        }
    }
    increaseAge(user)

    expect(user.age).toBe(20)

    const supermen = user

    supermen.age = 1000

    expect(user.age).toBe(1000)
})

test('array reference test', () => {

    let users = [
        {
            name: 'Ustin',
            age: 19
        },
        {
            name: 'Ustin',
            age: 19
        }
    ]
    let admins = users

    admins.push({name: 'bandugan', age: 1})

    expect(users[2]).toEqual({name: 'bandugan', age: 1})

})

test('value type  test', () => {

    let user: userType = {
        name: 'Ustin',
        age: 19,
        address: {
            title: "minsc"
        }
    }

    let addr = user.address

    let user2: userType = {
        name: 'Ustin',
        age: 30,
        address: user.address
    }

    user2.address.title = "USA"

    expect(user.address.title).toBe("USA")
})


test('reference value type  array test', () => {
    const address = {
        title: "Minsk"
    }
    let user: userType = {
        name: 'Ustin',
        age: 19,
        address: address

    }

    let addr = user.address

    let user2: userType = {
        name: 'Ustin',
        age: 30,
        address: address
    }

    const users = [user, user2, {name: "KDKD", age: 19, address: address}]

    const admins=[user,user2]

    admins[0].name="Iustin"

    user2.address.title = "USA"

    expect(users[0].name).toBe("Iustin")
    expect(user.name).toBe("Iustin")
})