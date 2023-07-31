import {usersObj} from "./08";

type UsersType = {
    [key: string]: { id: number, name: string }
}

let users: UsersType

beforeEach(() => {
    let users = {
        '101': {id: 101, name: 'Ustin'},
        '120': {id: 120, name: 'Veronika'},
        '1': {id: 130, name: 'Ivan'}
    }

})

test("Shoud update corresponding user from obj", () => {
    users['1'].name = 'Iustin'

    expect(users['1']).toEqual({id: 130, name: 'Iustin'})


})