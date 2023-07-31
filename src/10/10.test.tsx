import {
    addCompanies,
    addNewBooksToUser, deleteBooks,
    makeHairstyle,
    moveUser, updateBook,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from "./10";


test('reference type test', () => {

    let user: UserType = {
        name: 'Ustin',
        hair: 19,
        address: {
            city: "Minsk"
        }
    }

    const awesomeUser = makeHairstyle(user, 2)

    expect(user.hair).toBe(9.5)
    expect(awesomeUser.hair).toBe(9.5)

})


test('change address ', () => {

    let user: UserWithLaptopType = {
        name: 'Ustin',
        hair: 19,
        address: {
            city: "Minsk"
        },
        laptop: {
            title: "ZenBook"
        }
    }

    let movedUser = moveUser(user, "Kiev")


    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)

    expect(movedUser.address.city).toBe("Kiev")

})


test('upgrade laptop ', () => {

    let user: UserWithLaptopType = {
        name: 'Ustin',
        hair: 19,
        address: {
            city: "Minsk"
        },
        laptop: {
            title: "ZenBook"
        }
    }

    let userCope = upgradeUserLaptop(user, "Macbook")


    expect(user).not.toBe(userCope)
    expect(user.address).toBe(userCope.address)
    expect(user.laptop).not.toBe(userCope.laptop)

    expect(userCope.laptop.title).toBe("Macbook")

})


test('upgrade laptop ', () => {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Ustin',
        hair: 19,
        address: {
            city: "Minsk"
        },
        laptop: {
            title: "ZenBook"
        },
        books: ['css', 'HTML', 'JS']
    }

    let userCope = addNewBooksToUser(user, 'ts')


    expect(user).not.toBe(userCope)
    expect(user.books).toBe(userCope.books)
    expect(user.laptop).not.toBe(userCope.laptop)

    expect(userCope.laptop.title).toBe("Macbook")

})


test('upgrade books ', () => {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Ustin',
        hair: 19,
        address: {
            city: "Minsk"
        },
        laptop: {
            title: "ZenBook"
        },
        books: ['css', 'HTML', 'JS']
    }

    let userCope = updateBook(user, 'JS', 'ts')


    expect(user).not.toBe(userCope)
    expect(user.laptop).toBe(userCope.laptop)
    expect(user.address).toBe(userCope.address)
    expect(user.books).not.toBe(userCope.books)
    expect(userCope.books[2]).toBe("ts")

})


test('remove books ', () => {

    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Ustin',
        hair: 19,
        address: {
            city: "Minsk"
        },
        laptop: {
            title: "ZenBook"
        },
        books: ['css', 'HTML', 'JS']
    }

    let userCope = deleteBooks(user, 'JS')


    expect(user).not.toBe(userCope)
    expect(user.laptop).toBe(userCope.laptop)
    expect(user.address).toBe(userCope.address)
    expect(user.books).not.toBe(userCope.books)
    expect(userCope.books[1]).toBe("HTML")

})


test('remove books ', () => {

    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Ustin',
        hair: 19,
        address: {
            city: "Minsk"
        },
        laptop: {
            title: "ZenBook"
        },
        companies:[{id:1 ,title:"Epam "},{id:2 ,title:"IT-INCUBATOR "}]
    }

    let userCope = addCompanies(user, {id: 3 ,title:"Hi "})


    expect(user).not.toBe(userCope)
    expect(user.laptop).toBe(userCope.laptop)
    expect(user.address).toBe(userCope.address)
    expect(user.books).not.toBe(userCope.books)
    expect(userCope.books[1]).toBe("HTML")

})