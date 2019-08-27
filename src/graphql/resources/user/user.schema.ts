const userTypes = `

    type User {
        id: ID!
        name: String!
        email: String!
        photo: String!
        createdAt: String!
        updatedAt: String!
        posts(first: Int, offset: Int): [ Post!]!
    }

    input UserInput {
        name: String!
        email: String!
        password: String!
    }

    input UserUpdateInput {
        name: String!
        email: String!
        photo: String!
    }

    input UserUpdatePass {
        password: String!
    }

`

const userQueries = `
    users(first: Int, offset: Int): [User!]!
    user(id: ID!): User
`

const userMutations = `

    createUser(input: UserInput!): User
    updateUser(id: ID!, input: UserUpdateInput!): User
    updateUserPass(id: ID!, input: UserUpdatePass!): Boolean
    deleteUser(id: ID!): Boolean

`

export {
    userTypes,
    userMutations,
    userQueries
}