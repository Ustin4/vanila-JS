export type UserType = {
    name: string
    hair: number
    address: { city: string }
}
export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}

export type WithCompaniesType = {
    companies: Array<{ id: number, title: string }>
}

export function makeHairstyle(u: UserType, power: number) {

    const copy = {
        ...u,
        hair: u.hair / power
    }

    //Copy.hair = u.hair / power

    return copy

}


export function moveUser(u: UserWithLaptopType, city: string) {

    return {
        ...u,
        address: {
            ...u.address,
            city: city
        }
    }

    //Copy.hair = u.hair / power


}

export function upgradeUserLaptop(u: UserWithLaptopType, laptop: string) {

    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: laptop
        }
    }

    //Copy.hair = u.hair / power


}


export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, newBooks: string) {

    return {
        ...u,
        books: [...u.books, newBooks]
    }

    //Copy.hair = u.hair / power


}


export function updateBook(u: UserWithLaptopType & UserWithBooksType, oldBooks: string, newBooks: string) {

    return {
        ...u,
        books: u.books.map(b => b === oldBooks ? newBooks : b)
    }

    //Copy.hair = u.hair / power


}

export function deleteBooks(u: UserWithLaptopType & UserWithBooksType, bookForDelete: string) {

    return {
        ...u,
        books: u.books.filter(b => b !== bookForDelete)
    }

    //Copy.hair = u.hair / power


}



export function addCompanies(u: UserWithLaptopType & WithCompaniesType, newObj: Array<WithCompaniesType>) {

    return {
        ...u,
        books: [...u.companies, newObj]
    }

    //Copy.hair = u.hair / power


}